type GoogleAdsHomeservicesLocalservicesV1AggregatorInfo = {
  aggregatorProviderId?: string | undefined
}
type GoogleAdsHomeservicesLocalservicesV1AccountReport = {
  accountId?: string | undefined
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo | undefined
  averageFiveStarRating?: number | undefined
  averageWeeklyBudget?: number | undefined
  businessName?: string | undefined
  currencyCode?: string | undefined
  currentPeriodChargedLeads?: string | undefined
  currentPeriodConnectedPhoneCalls?: string | undefined
  currentPeriodPhoneCalls?: string | undefined
  currentPeriodTotalCost?: number | undefined
  impressionsLastTwoDays?: string | undefined
  phoneLeadResponsiveness?: number | undefined
  previousPeriodChargedLeads?: string | undefined
  previousPeriodConnectedPhoneCalls?: string | undefined
  previousPeriodPhoneCalls?: string | undefined
  previousPeriodTotalCost?: number | undefined
  totalReview?: number | undefined
}
type GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse = {
  accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAdsHomeservicesLocalservicesV1BookingLead = {
  bookingAppointmentTimestamp?: string | undefined
  consumerEmail?: string | undefined
  consumerPhoneNumber?: string | undefined
  customerName?: string | undefined
  jobType?: string | undefined
}
type GoogleAdsHomeservicesLocalservicesV1MessageLead = {
  consumerPhoneNumber?: string | undefined
  customerName?: string | undefined
  jobType?: string | undefined
  postalCode?: string | undefined
}
type GoogleAdsHomeservicesLocalservicesV1PhoneLead = {
  chargedCallTimestamp?: string | undefined
  chargedConnectedCallDurationSeconds?: string | undefined
  consumerPhoneNumber?: string | undefined
}
type GoogleTypeTimeZone = { id?: string | undefined; version?: string | undefined }
type GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport = {
  accountId?: string | undefined
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo | undefined
  bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead | undefined
  businessName?: string | undefined
  chargeStatus?: 'CHARGE_STATUS_UNSPECIFIED' | 'CHARGED' | 'NOT_CHARGED' | undefined
  currencyCode?: string | undefined
  disputeStatus?: string | undefined
  geo?: string | undefined
  leadCategory?: string | undefined
  leadCreationTimestamp?: string | undefined
  leadId?: string | undefined
  leadPrice?: number | undefined
  leadType?: 'LEAD_TYPE_UNSPECIFIED' | 'MESSAGE' | 'PHONE_CALL' | 'BOOKING' | undefined
  messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead | undefined
  phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead | undefined
  timezone?: GoogleTypeTimeZone | undefined
}
type GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse = {
  detailedLeadReports?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/accountReports:search': {
      $get: {
        input: {
          query: {
            'endDate.day'?: number | undefined
            'endDate.month'?: number | undefined
            'endDate.year'?: number | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            'startDate.day'?: number | undefined
            'startDate.month'?: number | undefined
            'startDate.year'?: number | undefined
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
        output: GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/detailedLeadReports:search': {
      $get: {
        input: {
          query: {
            'endDate.day'?: number | undefined
            'endDate.month'?: number | undefined
            'endDate.year'?: number | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            'startDate.day'?: number | undefined
            'startDate.month'?: number | undefined
            'startDate.year'?: number | undefined
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
        output: GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
