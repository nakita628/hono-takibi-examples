import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    addressLine1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3` are optional.",
      }),
    addressLine2: z.string().exactOptional().openapi({ description: 'Line 2 of the address.' }),
    addressLine3: z.string().exactOptional().openapi({ description: 'Line 3 of the address.' }),
    contactName: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer contact's name. This is required." }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer.',
      }),
    kind: z
      .string()
      .default('customers#address')
      .exactOptional()
      .openapi({
        description: 'Identifies the resource as a customer address. Value: `customers#address`',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({ description: 'An example of a `locality` value is the city of `San Francisco`.' }),
    organizationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company or company division name. This is required.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An example of a `region` value is `CA` for the state of California.',
      }),
  })
  .openapi({ description: 'JSON template for address of a customer.', required: [] })
  .openapi('Address')

const SeatsSchema = z
  .object({
    kind: z
      .string()
      .default('subscriptions#seats')
      .exactOptional()
      .openapi({
        description:
          'Identifies the resource as a subscription seat setting. Value: `subscriptions#seats`',
      }),
    licensedNumberOfSeats: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku).",
      }),
    maximumNumberOfSeats: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user.",
      }),
    numberOfSeats: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user.',
      }),
  })
  .openapi({ description: 'JSON template for subscription seats.', required: [] })
  .openapi('Seats')

const ChangePlanRequestSchema = z
  .object({
    dealCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.',
      }),
    kind: z
      .string()
      .default('subscriptions#changePlanRequest')
      .exactOptional()
      .openapi({
        description:
          'Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest`',
      }),
    planName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The `planName` property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` - The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan ",
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.',
      }),
    seats: SeatsSchema.exactOptional().openapi({
      description:
        'This is a required property. The seats property is the number of user seat licenses.',
    }),
  })
  .openapi({ description: 'JSON template for the ChangePlan rpc request.', required: [] })
  .openapi('ChangePlanRequest')

const PrimaryAdminSchema = z
  .object({
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer's Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer.",
      }),
  })
  .openapi({
    description: 'JSON template for primary admin in case of TEAM customers',
    required: [],
  })
  .openapi('PrimaryAdmin')

const CustomerSchema = z
  .object({
    alternateEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer\'s service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer.',
      }),
    customerDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer.",
      }),
    customerDomainVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether the customer's primary domain has been verified." }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.',
      }),
    customerType: z
      .enum(['customerTypeUnspecified', 'domain', 'team'])
      .exactOptional()
      .openapi({
        description:
          'Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479).',
      }),
    kind: z
      .string()
      .default('reseller#customer')
      .exactOptional()
      .openapi({
        description: 'Identifies the resource as a customer. Value: `reseller#customer`',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.',
      }),
    postalAddress: AddressSchema.exactOptional().openapi({
      description: "A customer's address information. Each field has a limit of 255 charcters.",
    }),
    primaryAdmin: PrimaryAdminSchema.exactOptional().openapi({
      description: 'The first admin details of the customer, present in case of TEAM customer.',
    }),
    resourceUiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.",
      }),
  })
  .openapi({
    description:
      "When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.",
    required: [],
  })
  .openapi('Customer')

const RenewalSettingsSchema = z
  .object({
    kind: z
      .string()
      .default('subscriptions#renewalSettings')
      .exactOptional()
      .openapi({
        description:
          'Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings`',
      }),
    renewalType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property.',
      }),
  })
  .openapi({ description: 'JSON template for a subscription renewal settings.', required: [] })
  .openapi('RenewalSettings')

const ResellernotifyGetwatchdetailsResponseSchema = z
  .object({
    serviceAccountEmailAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of registered service accounts.' }),
    topicName: z.string().exactOptional().openapi({ description: 'Topic name of the PubSub' }),
  })
  .openapi({
    description: 'JSON template for resellernotify getwatchdetails response.',
    required: [],
  })
  .openapi('ResellernotifyGetwatchdetailsResponse')

const ResellernotifyResourceSchema = z
  .object({
    topicName: z.string().exactOptional().openapi({ description: 'Topic name of the PubSub' }),
  })
  .openapi({ description: 'JSON template for resellernotify response.', required: [] })
  .openapi('ResellernotifyResource')

const SubscriptionSchema = z
  .object({
    billingMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Read-only field that returns the current billing method for a subscription.',
      }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter.',
      }),
    customerDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary domain name of the customer' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.',
      }),
    dealCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert` requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.',
      }),
    kind: z
      .string()
      .default('reseller#subscription')
      .exactOptional()
      .openapi({
        description: 'Identifies the resource as a Subscription. Value: `reseller#subscription`',
      }),
    plan: z
      .object({
        commitmentInterval: z
          .object({
            endTime: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "An annual commitment plan's interval's `endTime` in milliseconds using the UNIX Epoch format. See an example Epoch converter.",
              }),
            startTime: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "An annual commitment plan's interval's `startTime` in milliseconds using UNIX Epoch format. See an example Epoch converter.",
              }),
          })
          .exactOptional()
          .openapi({
            description:
              "In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. ",
            required: [],
          }),
        isCommitmentPlan: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "The `isCommitmentPlan` property's boolean value identifies the plan as an annual commitment plan: - `true` — The subscription's plan is an annual commitment plan. - `false` — The plan is not an annual commitment plan. ",
          }),
        planName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The `planName` property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` — The annual commitment plan with monthly payments. *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` — The annual commitment plan with yearly payments - `FLEXIBLE` — The flexible plan - `TRIAL` — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling `changePlan` will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling `startPaidService`. - `FREE` — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing. ",
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.',
        required: [],
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.',
      }),
    renewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      description:
        'Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center.',
    }),
    resourceUiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console.",
      }),
    seats: SeatsSchema.exactOptional().openapi({
      description:
        'This is a required property. The number and limit of user seat licenses in the plan.',
    }),
    skuId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs.",
      }),
    skuName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs.",
      }),
    status: z.string().exactOptional().openapi({ description: 'This is an optional property.' }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the `subscriptionId` as described in retrieve all reseller subscriptions.',
      }),
    suspensionReasons: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's `STATUS` is `SUSPENDED` until all pending suspensions are removed. Possible options include: - `PENDING_TOS_ACCEPTANCE` - The customer has not logged in and accepted the G Suite Resold Terms of Services. - `RENEWAL_WITH_TYPE_CANCEL` - The customer's commitment ended and their service was cancelled at the end of their term. - `RESELLER_INITIATED` - A manual suspension invoked by a Reseller. - `TRIAL_ENDED` - The customer's trial expired without a plan selected. - `OTHER` - The customer is suspended for an internal Google reason (e.g. abuse or otherwise). ",
      }),
    transferInfo: z
      .object({
        currentLegacySkuId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The `skuId` of the current resold subscription. This is populated only when the customer has a subscription with a legacy SKU and the subscription resource is populated with the `skuId` of the SKU recommended for the transfer.',
          }),
        minimumTransferableSeats: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats.',
          }),
        transferabilityExpirationTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.',
        required: [],
      }),
    trialSettings: z
      .object({
        isInTrial: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Determines if a subscription's plan is in a 30-day free trial or not: - `true` — The plan is in trial. - `false` — The plan is not in trial. ",
          }),
        trialEndTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.',
        required: [],
      }),
  })
  .openapi({ description: 'JSON template for a subscription.', required: [] })
  .openapi('Subscription')

const SubscriptionsSchema = z
  .object({
    kind: z
      .string()
      .default('reseller#subscriptions')
      .exactOptional()
      .openapi({
        description:
          'Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    subscriptions: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'The subscriptions in this page of results.' }),
  })
  .openapi({
    description:
      "A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.",
    required: [],
  })
  .openapi('Subscriptions')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.order': 'Manage users on your domain',
        'https://www.googleapis.com/auth/apps.order.readonly': 'Manage users on your domain',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.order': 'Manage users on your domain',
        'https://www.googleapis.com/auth/apps.order.readonly': 'Manage users on your domain',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postAppsResellerV1CustomersRoute = createRoute({
  method: 'post',
  path: '/apps/reseller/v1/customers',
  tags: ['customers'],
  description:
    "Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).",
  operationId: 'reseller.customers.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerAuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.",
            in: 'query',
            name: 'customerAuthToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getAppsResellerV1CustomersCustomerIdRoute = createRoute({
  method: 'get',
  path: '/apps/reseller/v1/customers/{customerId}',
  tags: ['customers'],
  description:
    'Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).',
  operationId: 'reseller.customers.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order.readonly'],
    },
  ],
})

export const putAppsResellerV1CustomersCustomerIdRoute = createRoute({
  method: 'put',
  path: '/apps/reseller/v1/customers/{customerId}',
  tags: ['customers'],
  description:
    'Updates a customer account\'s settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer\'s settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).',
  operationId: 'reseller.customers.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const patchAppsResellerV1CustomersCustomerIdRoute = createRoute({
  method: 'patch',
  path: '/apps/reseller/v1/customers/{customerId}',
  tags: ['customers'],
  description:
    'Updates a customer account\'s settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).',
  operationId: 'reseller.customers.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postAppsResellerV1CustomersCustomerIdSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/apps/reseller/v1/customers/{customerId}/subscriptions',
  tags: ['subscriptions'],
  description:
    "Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).",
  operationId: 'reseller.subscriptions.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerAuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.",
            in: 'query',
            name: 'customerAuthToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}',
  tags: ['subscriptions'],
  description:
    'Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).',
  operationId: 'reseller.subscriptions.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description:
              'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order.readonly'],
    },
  ],
})

export const deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}',
  tags: ['subscriptions'],
  description: 'Cancels, suspends, or transfers a subscription to direct.',
  operationId: 'reseller.subscriptions.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      deletionType: z
        .enum(['deletion_type_undefined', 'cancel', 'transfer_to_direct'])
        .openapi({
          param: {
            description:
              'The `deletionType` query string enables the cancellation, downgrade, or suspension of a subscription.',
            in: 'query',
            name: 'deletionType',
            required: true,
            schema: {
              enum: ['deletion_type_undefined', 'cancel', 'transfer_to_direct'],
              type: 'string',
            },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description:
              'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate',
    tags: ['subscriptions'],
    description:
      'Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.',
    operationId: 'reseller.subscriptions.activate',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan',
    tags: ['subscriptions'],
    description:
      'Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).',
    operationId: 'reseller.subscriptions.changePlan',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ChangePlanRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings',
    tags: ['subscriptions'],
    description:
      "Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).",
    operationId: 'reseller.subscriptions.changeRenewalSettings',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RenewalSettingsSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats',
    tags: ['subscriptions'],
    description:
      "Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).",
    operationId: 'reseller.subscriptions.changeSeats',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SeatsSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService',
    tags: ['subscriptions'],
    description:
      'Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).',
    operationId: 'reseller.subscriptions.startPaidService',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRoute =
  createRoute({
    method: 'post',
    path: '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend',
    tags: ['subscriptions'],
    description:
      'Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.',
    operationId: 'reseller.subscriptions.suspend',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description:
                'This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.',
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/apps.order'],
        Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
      },
    ],
  })

export const getAppsResellerV1ResellernotifyGetwatchdetailsRoute = createRoute({
  method: 'get',
  path: '/apps/reseller/v1/resellernotify/getwatchdetails',
  tags: ['resellernotify'],
  description: 'Returns all the details of the watch corresponding to the reseller.',
  operationId: 'reseller.resellernotify.getwatchdetails',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResellernotifyGetwatchdetailsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order.readonly'],
    },
  ],
})

export const postAppsResellerV1ResellernotifyRegisterRoute = createRoute({
  method: 'post',
  path: '/apps/reseller/v1/resellernotify/register',
  tags: ['resellernotify'],
  description: 'Registers a Reseller for receiving notifications.',
  operationId: 'reseller.resellernotify.register',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      serviceAccountEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The service account which will own the created Cloud-PubSub topic.',
            in: 'query',
            name: 'serviceAccountEmailAddress',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResellernotifyResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postAppsResellerV1ResellernotifyUnregisterRoute = createRoute({
  method: 'post',
  path: '/apps/reseller/v1/resellernotify/unregister',
  tags: ['resellernotify'],
  description: 'Unregisters a Reseller for receiving notifications.',
  operationId: 'reseller.resellernotify.unregister',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      serviceAccountEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The service account which owns the Cloud-PubSub topic.',
            in: 'query',
            name: 'serviceAccountEmailAddress',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResellernotifyResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getAppsResellerV1SubscriptionsRoute = createRoute({
  method: 'get',
  path: '/apps/reseller/v1/subscriptions',
  tags: ['subscriptions'],
  description:
    "Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).",
  operationId: 'reseller.subscriptions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerAuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.",
            in: 'query',
            name: 'customerAuthToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.",
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      customerNamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes `exam.com`, `example20.com` and `example.com`: - `exa` -- Returns all customer names that start with 'exa' which could include `exam.com`, `example20.com`, and `example.com`. A name prefix is similar to using a regular expression's asterisk, exa*. - `example` -- Returns `example20.com` and `example.com`. ",
            in: 'query',
            name: 'customerNamePrefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'When retrieving a large list, the `maxResults` is the maximum number of results per page. The `nextPageToken` value takes you to the next page. The default is 20.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order.readonly'],
    },
  ],
})
