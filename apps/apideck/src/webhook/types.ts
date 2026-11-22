type WebhookEventLogsFilter = {
  consumer_id?: (string | null) | undefined
  entity_type?: (string | null) | undefined
  event_type?: (string | null) | undefined
  exclude_apis?: (string | null) | undefined
  service?: ({ id?: string | undefined } | null) | undefined
}
type ApplicationId = string
type ConsumerId = string
type UnifiedApiId =
  | 'accounting'
  | 'ats'
  | 'calendar'
  | 'crm'
  | 'csp'
  | 'customer-support'
  | 'ecommerce'
  | 'email'
  | 'email-marketing'
  | 'expense-management'
  | 'file-storage'
  | 'form'
  | 'hris'
  | 'lead'
  | 'payroll'
  | 'pos'
  | 'procurement'
  | 'project-management'
  | 'script'
  | 'sms'
  | 'spreadsheet'
  | 'team-messaging'
  | 'issue-tracking'
  | 'time-registration'
  | 'transactional-email'
  | 'vault'
type WebhookEventLog = {
  application_id?: ApplicationId | undefined
  attempts?:
    | {
        execution_attempt?: number | undefined
        status_code?: number | undefined
        success?: boolean | undefined
        timestamp?: string | undefined
      }[]
    | undefined
  consumer_id?: ConsumerId | undefined
  endpoint?: string | undefined
  entity_type?: string | undefined
  event_type?: string | undefined
  execution_attempt?: number | undefined
  http_method?: string | undefined
  id?: string | undefined
  request_body?: string | undefined
  response_body?: string | undefined
  retry_scheduled?: boolean | undefined
  service?: { id: string; name: string } | undefined
  status_code?: number | undefined
  success?: boolean | undefined
  timestamp?: string | undefined
  unified_api?: UnifiedApiId | undefined
}
type Links = {
  current?: string | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetWebhookEventLogsResponse = {
  data: WebhookEventLog[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type BadRequestResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnauthorizedResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type PaymentRequiredResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnprocessableResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type ResolveWebhookEventRequest = { [x: string]: unknown }
type ResolveWebhookEventsRequest = { [x: string]: unknown }[]
type ResolveWebhookResponse = {
  request_id?: string | undefined
  status: string
  status_code: number
  timestamp?: string | undefined
}
type CreatedAt = string
type DeliveryUrl = string
type Description = string | null
type WebhookEventType =
  | '*'
  | 'crm.activity.created'
  | 'crm.activity.updated'
  | 'crm.activity.deleted'
  | 'crm.company.created'
  | 'crm.company.updated'
  | 'crm.company.deleted'
  | 'crm.contact.created'
  | 'crm.contact.updated'
  | 'crm.contact.deleted'
  | 'crm.lead.created'
  | 'crm.lead.updated'
  | 'crm.lead.deleted'
  | 'crm.note.created'
  | 'crm.notes.updated'
  | 'crm.notes.deleted'
  | 'crm.opportunity.created'
  | 'crm.opportunity.updated'
  | 'crm.opportunity.deleted'
  | 'lead.lead.created'
  | 'lead.lead.updated'
  | 'lead.lead.deleted'
  | 'vault.connection.created'
  | 'vault.connection.updated'
  | 'vault.connection.disabled'
  | 'vault.connection.deleted'
  | 'vault.connection.callable'
  | 'vault.connection.token_refresh.failed'
  | 'ats.job.created'
  | 'ats.job.updated'
  | 'ats.job.deleted'
  | 'ats.applicant.created'
  | 'ats.applicant.updated'
  | 'ats.applicant.deleted'
  | 'accounting.customer.created'
  | 'accounting.customer.updated'
  | 'accounting.customer.deleted'
  | 'accounting.invoice.created'
  | 'accounting.invoice.updated'
  | 'accounting.invoice.deleted'
  | 'accounting.invoice_item.created'
  | 'accounting.invoice_item.updated'
  | 'accounting.invoice_item.deleted'
  | 'accounting.ledger_account.created'
  | 'accounting.ledger_account.updated'
  | 'accounting.ledger_account.deleted'
  | 'accounting.tax_rate.created'
  | 'accounting.tax_rate.updated'
  | 'accounting.tax_rate.deleted'
  | 'accounting.bill.created'
  | 'accounting.bill.updated'
  | 'accounting.bill.deleted'
  | 'accounting.payment.created'
  | 'accounting.payment.updated'
  | 'accounting.payment.deleted'
  | 'accounting.supplier.created'
  | 'accounting.supplier.updated'
  | 'accounting.supplier.deleted'
  | 'pos.order.created'
  | 'pos.order.updated'
  | 'pos.order.deleted'
  | 'pos.product.created'
  | 'pos.product.updated'
  | 'pos.product.deleted'
  | 'pos.payment.created'
  | 'pos.payment.updated'
  | 'pos.payment.deleted'
  | 'pos.merchant.created'
  | 'pos.merchant.updated'
  | 'pos.merchant.deleted'
  | 'pos.location.created'
  | 'pos.location.updated'
  | 'pos.location.deleted'
  | 'pos.item.created'
  | 'pos.item.updated'
  | 'pos.item.deleted'
  | 'pos.modifier.created'
  | 'pos.modifier.updated'
  | 'pos.modifier.deleted'
  | 'pos.modifier-group.created'
  | 'pos.modifier-group.updated'
  | 'pos.modifier-group.deleted'
  | 'hris.employee.created'
  | 'hris.employee.updated'
  | 'hris.employee.deleted'
  | 'hris.company.created'
  | 'hris.company.updated'
  | 'hris.company.deleted'
  | 'file-storage.file.created'
  | 'file-storage.file.updated'
  | 'file-storage.file.deleted'
  | 'issue-tracking.ticket.created'
  | 'issue-tracking.ticket.updated'
  | 'issue-tracking.ticket.deleted'
type ExecuteBaseUrl = string
type Status = 'enabled' | 'disabled'
type UpdatedAt = string | null
type Webhook = {
  created_at?: CreatedAt | undefined
  delivery_url: DeliveryUrl
  description?: Description | undefined
  disabled_reason?: 'none' | 'retry_limit' | 'usage_limit' | undefined
  events: WebhookEventType[]
  execute_base_url: ExecuteBaseUrl
  id?: string | undefined
  status: Status
  unified_api: UnifiedApiId
  updated_at?: UpdatedAt | undefined
}
type GetWebhooksResponse = {
  data: Webhook[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type CreateWebhookRequest = {
  delivery_url: DeliveryUrl
  description?: Description | undefined
  events: WebhookEventType[]
  status: Status
  unified_api: UnifiedApiId
}
type CreateWebhookResponse = { data: Webhook; status: string; status_code: number }
type DeleteWebhookResponse = { data: Webhook; status: string; status_code: number }
type GetWebhookResponse = { data: Webhook; status: string; status_code: number }
type UpdateWebhookRequest = {
  delivery_url?: DeliveryUrl | undefined
  description?: Description | undefined
  events?: WebhookEventType[] | undefined
  status?: Status | undefined
}
type UpdateWebhookResponse = { data: Webhook; status: string; status_code: number }
type ExecuteWebhookEventRequest = { [x: string]: unknown }
type ExecuteWebhookEventsRequest = { [x: string]: unknown }[]
type ExecuteWebhookResponse = {
  request_id?: string | undefined
  status: string
  status_code: number
  timestamp?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/webhook/logs': {
      $get:
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetWebhookEventLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: WebhookEventLogsFilter | undefined
              }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook/w/:id/:serviceId': {
      $post:
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: ResolveWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { e?: string | undefined }
            } & { json: ResolveWebhookEventRequest | ResolveWebhookEventsRequest }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook/webhooks': {
      $get:
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: GetWebhooksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: { cursor?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: CreateWebhookResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-apideck-app-id': string } } & { json: CreateWebhookRequest }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook/webhooks/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: DeleteWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: GetWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: UpdateWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'x-apideck-app-id': string } } & {
              json: UpdateWebhookRequest
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook/webhooks/:id/execute/:serviceId': {
      $post:
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: ExecuteWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook/webhooks/:id/x/:serviceId': {
      $post:
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: ExecuteWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; serviceId: string } } & {
              query: { l_id?: string | undefined; e?: string | undefined }
            } & { json: ExecuteWebhookEventRequest | ExecuteWebhookEventsRequest }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
