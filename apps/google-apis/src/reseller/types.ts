type Address = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  addressLine3?: string | undefined
  contactName?: string | undefined
  countryCode?: string | undefined
  kind?: string | undefined
  locality?: string | undefined
  organizationName?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
}
type PrimaryAdmin = { primaryEmail?: string | undefined }
type Customer = {
  alternateEmail?: string | undefined
  customerDomain?: string | undefined
  customerDomainVerified?: boolean | undefined
  customerId?: string | undefined
  customerType?: 'customerTypeUnspecified' | 'domain' | 'team' | undefined
  kind?: string | undefined
  phoneNumber?: string | undefined
  postalAddress?: Address | undefined
  primaryAdmin?: PrimaryAdmin | undefined
  resourceUiUrl?: string | undefined
}
type RenewalSettings = { kind?: string | undefined; renewalType?: string | undefined }
type Seats = {
  kind?: string | undefined
  licensedNumberOfSeats?: number | undefined
  maximumNumberOfSeats?: number | undefined
  numberOfSeats?: number | undefined
}
type Subscription = {
  billingMethod?: string | undefined
  creationTime?: string | undefined
  customerDomain?: string | undefined
  customerId?: string | undefined
  dealCode?: string | undefined
  kind?: string | undefined
  plan?:
    | {
        commitmentInterval?:
          | { endTime?: string | undefined; startTime?: string | undefined }
          | undefined
        isCommitmentPlan?: boolean | undefined
        planName?: string | undefined
      }
    | undefined
  purchaseOrderId?: string | undefined
  renewalSettings?: RenewalSettings | undefined
  resourceUiUrl?: string | undefined
  seats?: Seats | undefined
  skuId?: string | undefined
  skuName?: string | undefined
  status?: string | undefined
  subscriptionId?: string | undefined
  suspensionReasons?: string[] | undefined
  transferInfo?:
    | {
        currentLegacySkuId?: string | undefined
        minimumTransferableSeats?: number | undefined
        transferabilityExpirationTime?: string | undefined
      }
    | undefined
  trialSettings?: { isInTrial?: boolean | undefined; trialEndTime?: string | undefined } | undefined
}
type ChangePlanRequest = {
  dealCode?: string | undefined
  kind?: string | undefined
  planName?: string | undefined
  purchaseOrderId?: string | undefined
  seats?: Seats | undefined
}
type ResellernotifyGetwatchdetailsResponse = {
  serviceAccountEmailAddresses?: string[] | undefined
  topicName?: string | undefined
}
type ResellernotifyResource = { topicName?: string | undefined }
type Subscriptions = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  subscriptions?: Subscription[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps/reseller/v1/customers': {
      $post: {
        input: {
          query: {
            customerAuthToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Customer }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId': {
      $get: {
        input: { param: { customerId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customerId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Customer }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customerId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Customer }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions': {
      $post: {
        input: { param: { customerId: string } } & {
          query: {
            customerAuthToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId': {
      $delete: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            deletionType: 'deletion_type_undefined' | 'cancel' | 'transfer_to_direct'
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/activate': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changePlan': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ChangePlanRequest }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeRenewalSettings': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RenewalSettings }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeSeats': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Seats }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/startPaidService': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/suspend': {
      $post: {
        input: { param: { customerId: string; subscriptionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/resellernotify/getwatchdetails': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ResellernotifyGetwatchdetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/resellernotify/register': {
      $post: {
        input: {
          query: {
            serviceAccountEmailAddress?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ResellernotifyResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/resellernotify/unregister': {
      $post: {
        input: {
          query: {
            serviceAccountEmailAddress?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ResellernotifyResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/reseller/v1/subscriptions': {
      $get: {
        input: {
          query: {
            customerAuthToken?: string | undefined
            customerId?: string | undefined
            customerNamePrefix?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscriptions
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
