type CreateContactInMailingList = {
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  unsubscribed?: boolean | undefined
}
type DistributionsResponse = {
  meta?: { httpStatus?: string | undefined; requestId?: string | undefined } | undefined
  result?:
    | {
        elements?:
          | {
              createdDate: string
              customHeaders: { [x: string]: unknown }
              embeddedData: { [x: string]: unknown }
              headers: {
                fromEmail?: { [x: string]: unknown } | undefined
                fromName?: { [x: string]: unknown } | undefined
                replyToEmail?: { [x: string]: unknown } | undefined
              }
              id: string
              message: {
                libraryId?: { [x: string]: unknown } | undefined
                messageId?: { [x: string]: unknown } | undefined
                messageText?: { [x: string]: unknown } | undefined
              }
              modifiedDate: string
              organizationId: string
              ownerId: string
              parentDistributionId: { [x: string]: unknown }
              recipients: {
                contactId?: { [x: string]: unknown } | undefined
                libraryId?: string | undefined
                mailingListId?: string | undefined
                sampleId?: { [x: string]: unknown } | undefined
              }
              requestStatus: string
              requestType: string
              sendDate: string
              stats: {
                blocked?: number | undefined
                bounced?: number | undefined
                complaints?: number | undefined
                failed?: number | undefined
                finished?: number | undefined
                opened?: number | undefined
                sent?: number | undefined
                skipped?: number | undefined
                started?: number | undefined
              }
              surveyLink: {
                expirationDate?: string | undefined
                linkType?: string | undefined
                surveyId?: string | undefined
              }
            }[]
          | undefined
        nextPage?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type CreateDistributionLinks = {
  action?: string | undefined
  description?: string | undefined
  expirationDate?: string | undefined
  linkType?: string | undefined
  mailingListId?: string | undefined
  surveyId?: string | undefined
}
type RetrieveDistributionLinksResponse = {
  meta?: { httpStatus?: string | undefined; requestId?: string | undefined } | undefined
  result?:
    | {
        elements?:
          | {
              contactId: string
              email: string
              exceededContactFrequency: boolean
              externalDataReference: { [x: string]: unknown }
              firstName: string
              lastName: string
              link: string
              linkExpiration: string
              status: string
              transactionId: { [x: string]: unknown }
              unsubscribed: boolean
            }[]
          | undefined
        nextPage?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type SubscribeToEventBody = {
  encrypt?: boolean | undefined
  publicationUrl: string
  topics: string
}
type EventSubscriptionsResponse = {
  meta?: { httpStatus?: string | undefined; requestId?: string | undefined } | undefined
  result?:
    | {
        meta?: { httpStatus?: string | undefined } | undefined
        result?: { id?: string | undefined } | undefined
      }
    | undefined
}
type SurveyResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/directories/:DirectoryId/mailinglists/:MailingListId/contacts': {
      $post: {
        input: { param: { DirectoryId: string; MailingListId: string } } & {
          json: CreateContactInMailingList
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/distributions': {
      $get: {
        input: { query: { surveyId: string } }
        output: DistributionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateDistributionLinks }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/distributions/:DistributionId/links': {
      $get: {
        input: { param: { DistributionId: string } } & { query: { surveyId: string } }
        output: RetrieveDistributionLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/eventsubscriptions/': {
      $delete: {
        input: { json: SubscribeToEventBody }
        output: EventSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SubscribeToEventBody }
        output: EventSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/eventsubscriptions/:SubscriptionId': {
      $get: {
        input: { param: { SubscriptionId: string } }
        output: EventSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/survey-definitions/:SurveyId': {
      $get:
        | {
            input: { param: { SurveyId: string } }
            output: SurveyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { SurveyId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
