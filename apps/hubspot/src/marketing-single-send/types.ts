type PublicSingleSendEmail = {
  bcc: string[]
  cc: string[]
  from?: string | undefined
  replyTo: string[]
  sendId?: string | undefined
  to?: string | undefined
}
type PublicSingleSendRequestEgg = {
  contactProperties: { [x: string]: string }
  customProperties: { [x: string]: { [x: string]: unknown } }
  emailId: bigint
  message: PublicSingleSendEmail
}
type EventIdView = { created: string; id: string }
type EmailSendStatusView = {
  completedAt?: string | undefined
  eventId?: EventIdView | undefined
  message?: string | undefined
  requestedAt?: string | undefined
  sendResult?:
    | 'ADDRESS_LIST_BOMBED'
    | 'ADDRESS_ONLY_ACCEPTED_ON_PROD'
    | 'ADDRESS_OPTED_OUT'
    | 'ATTACHMENT_DOWNLOAD_QUEUE_FULL'
    | 'BLOCKED_ADDRESS'
    | 'BLOCKED_DOMAIN'
    | 'BRAND_RECIPIENT_FATIGUE_SUPPRESSED'
    | 'CAMPAIGN_CANCELLED'
    | 'CANCELLED_ABUSE'
    | 'CONTACT_VIEW_PERMISSION'
    | 'CORRUPT_INPUT'
    | 'EMAIL_DISABLED'
    | 'EMAIL_UNCONFIRMED'
    | 'GDPR_DOI_ENABLED'
    | 'GRAYMAIL_SUPPRESSED'
    | 'HUBL_LIMIT_EXCEEDED'
    | 'IDEMPOTENT_FAIL'
    | 'IDEMPOTENT_IGNORE'
    | 'INVALID_APP_ID_ATTRIBUTION'
    | 'INVALID_FROM_ADDRESS'
    | 'INVALID_TO_ADDRESS'
    | 'LOW_CONTACT_QUALITY_SCORE'
    | 'MARKETING_ACTIVATION_DISALLOWED'
    | 'MISSING_CONTENT'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'MISSING_TEMPLATE_PROPERTIES'
    | 'MTA_IGNORE'
    | 'NON_MARKETABLE_CONTACT'
    | 'PORTAL_AUTHENTICATION_FAILURE'
    | 'PORTAL_EXPIRED'
    | 'PORTAL_MISSING_MARKETING_SCOPE'
    | 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION'
    | 'PORTAL_OVER_LIMIT'
    | 'PORTAL_SUSPENDED'
    | 'PREVIOUS_SPAM'
    | 'PREVIOUSLY_BOUNCED'
    | 'PREVIOUSLY_UNSUBSCRIBED_BRAND'
    | 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT'
    | 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE'
    | 'PREVIOUSLY_UNSUBSCRIBED_PORTAL'
    | 'QUARANTINED_ADDRESS'
    | 'QUEUED'
    | 'RECIPIENT_FATIGUE_SUPPRESSED'
    | 'RECIPIENT_SEND_LIMIT_EXCEEDED'
    | 'SENT'
    | 'TEMPLATE_RENDER_EXCEPTION'
    | 'THROTTLED'
    | 'TOO_MANY_RECIPIENTS'
    | 'UBB_GOVERNANCE_MISSING'
    | 'UNCONFIGURED_SENDING_DOMAIN'
    | 'UNDELIVERABLE'
    | 'VALIDATION_FAILED'
    | undefined
  startedAt?: string | undefined
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
  statusId: string
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/marketing/email-campaigns/2026-09/single-send': {
      $post:
        | {
            input: { json: PublicSingleSendRequestEgg }
            output: EmailSendStatusView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicSingleSendRequestEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
