import { createRoute, z } from '@hono/zod-openapi'

const WebhookEventSchema = z
  .object({
    events: z
      .array(
        z
          .object({
            resourceUrl: z
              .url()
              .openapi({ description: 'The URL to retrieve the resource that has changed' }),
            resourceId: z
              .uuid()
              .openapi({ description: 'The ID of the resource that has changed (e.g. ContactID)' }),
            eventDateUtc: z.iso
              .datetime({ offset: true })
              .openapi({ description: 'The date and time that event occurred (UTC time)' }),
            eventType: z
              .xor([
                z.literal('CREATE').openapi({ description: 'When a new resource is created' }),
                z
                  .literal('UPDATE')
                  .openapi({
                    description:
                      'When an existing resource is updated (including when they are archived)',
                  }),
              ])
              .openapi({ description: 'The type of event of that occurred (e.g. UPDATE)' }),
            eventCategory: z
              .xor([
                z
                  .literal('CONTACT')
                  .openapi({ description: 'For organisation contact-related events' }),
                z
                  .literal('INVOICE')
                  .openapi({ description: 'For organisation invoice-related events' }),
                z
                  .literal('SUBSCRIPTION')
                  .openapi({ description: 'For application subscription-related events' }),
                z
                  .literal('CREDITNOTE')
                  .openapi({ description: 'For organisation credit note-related events' }),
                z
                  .literal('PREPAYMENT')
                  .openapi({ description: 'For organisation prepayment-related events' }),
                z
                  .literal('OVERPAYMENT')
                  .openapi({ description: 'For organisation overpayment-related events' }),
                z
                  .literal('PAYMENT')
                  .openapi({ description: 'For organisation payment-related events' }),
              ])
              .openapi({
                description:
                  'The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to',
              }),
            tenantId: z
              .uuid()
              .openapi({
                description:
                  'The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)',
              }),
            tenantType: z
              .xor([
                z
                  .literal('ORGANISATION')
                  .openapi({
                    description: 'Represents a Xero organisation (for non-Subscription events)',
                  }),
                z
                  .literal('APPLICATION')
                  .openapi({
                    description: 'Represents a Xero application (for Subscription events)',
                  }),
              ])
              .openapi({ description: 'The type of tenant' }),
          })
          .openapi({
            required: [
              'resourceUrl',
              'resourceId',
              'eventDateUtc',
              'eventType',
              'eventCategory',
              'tenantId',
              'tenantType',
            ],
          }),
      )
      .openapi({ description: 'A list of events that have occurred' }),
    lastEventSequence: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: 'The sequence number of the last event in the list' }),
    firstEventSequence: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: 'The sequence number of the first event in the list' }),
    entropy: z
      .string()
      .openapi({ description: 'A random string used for security or validation purposes' }),
  })
  .openapi({ required: ['events', 'lastEventSequence', 'firstEventSequence', 'entropy'] })
  .openapi('WebhookEvent')

const CreditNoteWebhookEventSchema = WebhookEventSchema.and(
  z
    .object({
      events: z
        .array(
          z
            .lazy(() => WebhookEventSchema)
            .and(
              z
                .object({
                  eventCategory: z.literal('CREDITNOTE').exactOptional(),
                  data: z
                    .object({
                      Type: z
                        .xor([
                          z
                            .literal('ACCPAYCREDIT')
                            .openapi({ description: 'An Accounts Payable(supplier) Credit Note' }),
                          z
                            .literal('ACCRECCREDIT')
                            .openapi({
                              description: 'An Account Receivable(customer) Credit Note',
                            }),
                        ])
                        .openapi({
                          description: 'The type of credit note',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#credit-notes',
                          },
                        }),
                      Status: z
                        .xor([
                          z.literal('DRAFT').openapi({ description: 'Draft credit note' }),
                          z.literal('SUBMITTED').openapi({ description: 'Submitted credit note' }),
                          z.literal('DELETED').openapi({ description: 'Deleted credit note' }),
                          z
                            .literal('AUTHORISED')
                            .openapi({ description: 'Authorised credit note' }),
                          z.literal('PAID').openapi({ description: 'Paid credit note' }),
                          z.literal('VOIDED').openapi({ description: 'Voided credit note' }),
                        ])
                        .openapi({
                          description: 'The status of the credit note',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#invoice-status-codes',
                          },
                        }),
                    })
                    .openapi({
                      description: 'Additional data for credit note events',
                      required: ['Type', 'Status'],
                    }),
                })
                .openapi({ required: ['data'] }),
            ),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CreditNoteWebhookEvent')

const PrepaymentWebhookEventSchema = WebhookEventSchema.and(
  z
    .object({
      events: z
        .array(
          z
            .lazy(() => WebhookEventSchema)
            .and(
              z
                .object({
                  eventCategory: z.literal('PREPAYMENT').exactOptional(),
                  data: z
                    .object({
                      Type: z
                        .xor([
                          z
                            .literal('RECEIVE-PREPAYMENT')
                            .openapi({ description: 'A customer prepayment' }),
                          z
                            .literal('SPEND-PREPAYMENT')
                            .openapi({ description: 'A supplier prepayment' }),
                        ])
                        .openapi({
                          description: 'The specific type of prepayment',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#prepayments',
                          },
                        }),
                      Status: z
                        .xor([
                          z.literal('AUTHORISED').openapi({ description: 'Authorised prepayment' }),
                          z.literal('PAID').openapi({ description: 'Paid prepayment' }),
                          z.literal('VOIDED').openapi({ description: 'Voided prepayment' }),
                        ])
                        .openapi({
                          description: 'The current lifecycle status of the prepayment',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#prepayment-status-codes',
                          },
                        }),
                      UpdatedDateUTCString: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time the prepayment was last updated in UTC ISO format',
                        }),
                    })
                    .openapi({
                      description:
                        'Prepayment document lifecycle events for customer/supplier advance payments',
                      required: ['Type', 'Status', 'UpdatedDateUTCString'],
                    }),
                })
                .openapi({ required: ['data'] }),
            ),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('PrepaymentWebhookEvent')

const OverpaymentWebhookEventSchema = WebhookEventSchema.and(
  z
    .object({
      events: z
        .array(
          z
            .lazy(() => WebhookEventSchema)
            .and(
              z
                .object({
                  eventCategory: z.literal('OVERPAYMENT').exactOptional(),
                  data: z
                    .object({
                      Type: z
                        .xor([
                          z
                            .literal('RECEIVE-OVERPAYMENT')
                            .openapi({ description: 'A customer overpayment' }),
                          z
                            .literal('SPEND-OVERPAYMENT')
                            .openapi({ description: 'A supplier overpayment' }),
                        ])
                        .openapi({
                          description: 'The specific type of overpayment',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#overpayments',
                          },
                        }),
                      Status: z
                        .xor([
                          z
                            .literal('AUTHORISED')
                            .openapi({ description: 'Authorised overpayment' }),
                          z.literal('PAID').openapi({ description: 'Paid overpayment' }),
                          z.literal('VOIDED').openapi({ description: 'Voided overpayment' }),
                        ])
                        .openapi({
                          description: 'The current lifecycle status of the overpayment',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#overpayment-status-codes',
                          },
                        }),
                      UpdatedDateUTCString: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time the overpayment was last updated in UTC ISO format',
                        }),
                    })
                    .openapi({
                      description:
                        'Overpayment document lifecycle events for excess customer/supplier payments',
                      required: ['Type', 'Status', 'UpdatedDateUTCString'],
                    }),
                })
                .openapi({ required: ['data'] }),
            ),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('OverpaymentWebhookEvent')

const PaymentWebhookEventSchema = WebhookEventSchema.and(
  z
    .object({
      events: z
        .array(
          z
            .lazy(() => WebhookEventSchema)
            .and(
              z
                .object({
                  eventCategory: z.literal('PAYMENT').exactOptional(),
                  data: z
                    .object({
                      PaymentType: z
                        .xor([
                          z
                            .literal('ACCRECPAYMENT')
                            .openapi({ description: 'Accounts Receivable Payment' }),
                          z
                            .literal('ACCPAYPAYMENT')
                            .openapi({ description: 'Accounts Payable Payment' }),
                          z
                            .literal('ARCREDITPAYMENT')
                            .openapi({
                              description: 'Accounts Receivable Credit Payment (Refund)',
                            }),
                          z
                            .literal('APCREDITPAYMENT')
                            .openapi({ description: 'Accounts Payable Credit Payment (Refund)' }),
                          z
                            .literal('AROVERPAYMENTPAYMENT')
                            .openapi({
                              description: 'Accounts Receivable Overpayment Payment (Refund)',
                            }),
                          z
                            .literal('ARPREPAYMENTPAYMENT')
                            .openapi({
                              description: 'Accounts Receivable Prepayment Payment (Refund)',
                            }),
                          z
                            .literal('APPREPAYMENTPAYMENT')
                            .openapi({
                              description: 'Accounts Payable Prepayment Payment (Refund)',
                            }),
                          z
                            .literal('APOVERPAYMENTPAYMENT')
                            .openapi({
                              description: 'Accounts Payable Overpayment Payment (Refund)',
                            }),
                        ])
                        .openapi({
                          description:
                            'The specific type of payment, determined by the type of the document the payment was applied to',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#payments',
                          },
                        }),
                      Status: z
                        .xor([
                          z.literal('AUTHORISED').openapi({ description: 'Authorised payment' }),
                          z.literal('DELETED').openapi({ description: 'Deleted payment' }),
                        ])
                        .openapi({
                          description: 'The current lifecycle status of the payment',
                          externalDocs: {
                            url: 'https://developer.xero.com/documentation/api/accounting/types#payment-status-codes',
                          },
                        }),
                      UpdatedDateUTCString: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time the parent document was last updated in UTC ISO format',
                        }),
                    })
                    .openapi({
                      description:
                        'Payment lifecycle events for payments applied to and removed from accounting documents',
                      required: ['PaymentType', 'Status', 'UpdatedDateUTCString'],
                    }),
                })
                .openapi({ required: ['data'] }),
            ),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('PaymentWebhookEvent')

const _401InvalidWebhookDataResponse = {
  description: 'Return a 401 status to indicate that the webhook subscription failed',
}

const XXeroSignatureHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'A hashed signature of the payload is passed along in the headers of each request as x-xero-signature',
    example: '<Base_64_HMAC_SHA_256>',
    param: { required: false },
  })

const _200WebhookDataReceivedOkResponse = {
  description: 'Return a 200 status to indicate that the webhook subscription succeeded',
  content: {
    'application/json': {
      schema: WebhookEventSchema.openapi({
        example: {
          events: [
            {
              resourceUrl:
                'https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
              resourceId: '717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
              eventDateUtc: '2024-06-21T01:15:39.902',
              eventType: 'UPDATE',
              eventCategory: 'CONTACT',
              tenantId: 'c2cc9b6e-9458-4c7d-93cc-f02b81b0594f',
              tenantType: 'ORGANISATION',
            },
          ],
          lastEventSequence: 1,
          firstEventSequence: 1,
          entropy: 'S0m3r4Nd0mt3xt',
        },
      }),
    },
  },
  headers: z.object({ 'x-xero-signature': XXeroSignatureHeaderSchema }),
}

export const invoicesPostWebhook = {
  method: 'post',
  path: '/invoices',
  tags: ['Events'],
  summary: 'Invoices Webhook Endpoint',
  description: 'Invoice (Create, Update)',
  operationId: 'publishInvoiceEvent',
  request: { body: { content: { 'application/json': { schema: WebhookEventSchema } } } },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const subscriptionsPostWebhook = {
  method: 'post',
  path: '/subscriptions',
  tags: ['Events'],
  summary: 'Subscriptions Webhook Endpoint',
  description: 'Subscription (Create, Update)',
  operationId: 'publishSubscriptionEvent',
  request: { body: { content: { 'application/json': { schema: WebhookEventSchema } } } },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const contactsPostWebhook = {
  method: 'post',
  path: '/contacts',
  tags: ['Events'],
  summary: 'Contacts Webhook Endpoint',
  description: 'Contact (Create, Update)',
  operationId: 'publishContactEvent',
  request: { body: { content: { 'application/json': { schema: WebhookEventSchema } } } },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const creditNotesPostWebhook = {
  method: 'post',
  path: '/creditNotes',
  tags: ['Events'],
  summary: 'Credit Notes Webhook Endpoint',
  description: 'Credit Note (Create, Update)',
  operationId: 'publishCreditNoteEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreditNoteWebhookEventSchema,
          examples: {
            creditNoteCreate: {
              summary: 'Credit Note Create Event',
              value: {
                events: [
                  {
                    resourceUrl:
                      'https://api.xero.com/api.xro/2.0/CreditNotes/55d84274-a3da-4829-a7c0-0cab601b95cc',
                    resourceId: '55d84274-a3da-4829-a7c0-0cab601b95cc',
                    tenantId: 'aef86862-2015-4b6b-88bc-d89032cecc50',
                    tenantType: 'ORGANISATION',
                    eventCategory: 'CREDITNOTE',
                    eventType: 'CREATE',
                    eventDateUtc: '2025-12-02T00:44:09.923',
                    data: { Type: 'ACCPAYCREDIT', Status: 'DRAFT' },
                  },
                ],
                firstEventSequence: 76,
                lastEventSequence: 76,
                entropy: 'FXNGWLCCGVANWHKILRUB',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const prepaymentsPostWebhook = {
  method: 'post',
  path: '/prepayments',
  tags: ['Events'],
  summary: 'Prepayments Webhook Endpoint',
  description: 'Prepayment (Create, Update)',
  operationId: 'publishPrepaymentEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PrepaymentWebhookEventSchema,
          examples: {
            prepaymentCreate: {
              summary: 'Prepayment Create Event',
              value: {
                events: [
                  {
                    resourceUrl:
                      'https://api.xero.com/api.xro/2.0/Prepayments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    resourceId: '717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    tenantId: 'c2cc9b6e-9458-4c7d-93cc-f02b81b0594f',
                    tenantType: 'ORGANISATION',
                    eventCategory: 'PREPAYMENT',
                    eventType: 'CREATE',
                    eventDateUtc: '2025-10-21T01:15:39.902',
                    data: {
                      Type: 'RECEIVE-PREPAYMENT',
                      Status: 'AUTHORISED',
                      UpdatedDateUTCString: '2025-10-21T01:15:39Z',
                    },
                  },
                ],
                firstEventSequence: 76,
                lastEventSequence: 76,
                entropy: 'FXNGWLCCGVANWHKILRUB',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const overpaymentsPostWebhook = {
  method: 'post',
  path: '/overpayments',
  tags: ['Events'],
  summary: 'Overpayments Webhook Endpoint',
  description: 'Overpayment (Create, Update)',
  operationId: 'publishOverpaymentEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: OverpaymentWebhookEventSchema,
          examples: {
            overpaymentCreate: {
              summary: 'Overpayment Create Event',
              value: {
                events: [
                  {
                    resourceUrl:
                      'https://api.xero.com/api.xro/2.0/Overpayments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    resourceId: '717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    tenantId: 'c2cc9b6e-9458-4c7d-93cc-f02b81b0594f',
                    tenantType: 'ORGANISATION',
                    eventCategory: 'OVERPAYMENT',
                    eventType: 'CREATE',
                    eventDateUtc: '2025-10-21T01:15:39.902',
                    data: {
                      Type: 'RECEIVE-OVERPAYMENT',
                      Status: 'AUTHORISED',
                      UpdatedDateUTCString: '2025-10-21T01:15:39Z',
                    },
                  },
                ],
                firstEventSequence: 76,
                lastEventSequence: 76,
                entropy: 'FXNGWLCCGVANWHKILRUB',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}

export const paymentsPostWebhook = {
  method: 'post',
  path: '/payments',
  tags: ['Events'],
  summary: 'Payments Webhook Endpoint',
  description: 'Payment (Create, Update)',
  operationId: 'publishPaymentEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentWebhookEventSchema,
          examples: {
            paymentCreate: {
              summary: 'Payment Create Event',
              value: {
                events: [
                  {
                    resourceUrl:
                      'https://api.xero.com/api.xro/2.0/Payments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    resourceId: '717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    tenantId: 'c2cc9b6e-9458-4c7d-93cc-f02b81b0594f',
                    tenantType: 'ORGANISATION',
                    eventCategory: 'PAYMENT',
                    eventType: 'CREATE',
                    eventDateUtc: '2025-10-21T01:15:39.902',
                    data: {
                      PaymentType: 'ACCRECPAYMENT',
                      Status: 'AUTHORISED',
                      UpdatedDateUTCString: '2025-10-21T01:15:39Z',
                    },
                  },
                ],
                firstEventSequence: 76,
                lastEventSequence: 76,
                entropy: 'FXNGWLCCGVANWHKILRUB',
              },
            },
            paymentUpdate: {
              summary: 'Payment Update Event',
              value: {
                events: [
                  {
                    resourceUrl:
                      'https://api.xero.com/api.xro/2.0/Payments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    resourceId: '717f2bfc-c6d4-41fd-b238-3f2f0c0cf777',
                    tenantId: 'c2cc9b6e-9458-4c7d-93cc-f02b81b0594f',
                    tenantType: 'ORGANISATION',
                    eventCategory: 'PAYMENT',
                    eventType: 'UPDATE',
                    eventDateUtc: '2025-10-21T02:20:04.117',
                    data: {
                      PaymentType: 'ACCRECPAYMENT',
                      Status: 'DELETED',
                      UpdatedDateUTCString: '2025-10-21T02:20:04Z',
                    },
                  },
                ],
                firstEventSequence: 77,
                lastEventSequence: 77,
                entropy: 'FXNGWLCCGVANWHKILRUB',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: _200WebhookDataReceivedOkResponse, 401: _401InvalidWebhookDataResponse },
}
