type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicChannelIntegrationChannel = {
  capabilities: { [x: string]: { [x: string]: unknown } }
  channelAccountConnectionRedirectUrl?: string | undefined
  channelDescription?: string | undefined
  channelLogoUrl?: string | undefined
  createdAt: string
  id: string
  name: string
  webhookUrl?: string | undefined
}
type CollectionResponseWithTotalPublicChannelIntegrationChannel = {
  paging?: Paging | undefined
  results: PublicChannelIntegrationChannel[]
  total: number
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
type PublicChannelIntegrationChannelCreate = {
  capabilities: { [x: string]: { [x: string]: unknown } }
  channelAccountConnectionRedirectUrl?: string | undefined
  channelDescription?: string | undefined
  channelLogoUrl?: string | undefined
  name: string
  webhookUrl?: string | undefined
}
type PublicChannelIntegrationChannelPatch = {
  capabilities: { [x: string]: { [x: string]: unknown } }
  channelAccountConnectionRedirectUrl: { [x: string]: unknown }
  channelDescription: { [x: string]: unknown }
  channelLogoUrl: { [x: string]: unknown }
  name: { [x: string]: unknown }
  webhookUrl: { [x: string]: unknown }
}
type PublicDeliveryIdentifier = {
  type: 'CHANNEL_SPECIFIC_OPAQUE_ID' | 'HS_EMAIL_ADDRESS' | 'HS_PHONE_NUMBER' | 'HS_SHORT_CODE'
  value: string
}
type PublicChannelAccountStagingTokenUpdateRequest = {
  accountName?: string | undefined
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
}
type PublicChannelAccountStagingToken = {
  accountName?: string | undefined
  accountToken: string
  createdAt: string
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  genericChannelId: number
  inboxId: number
  userId: number
}
type PublicChannelAccount = {
  active: boolean
  archived: boolean
  archivedAt?: string | undefined
  authorized: boolean
  channelId: string
  createdAt: string
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  id: string
  inboxId: string
  name: string
}
type CollectionResponseWithTotalPublicChannelAccount = {
  paging?: Paging | undefined
  results: PublicChannelAccount[]
  total: number
}
type PublicChannelAccountEgg = {
  authorized: boolean
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  inboxId: string
  name: string
}
type PublicChannelAccountUpdateRequest = {
  authorized?: boolean | undefined
  name?: string | undefined
}
type FileAttachment = {
  fileId: string
  fileUsageType?: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING' | undefined
  type: 'FILE'
}
type LocationAttachment = {
  address?: string | undefined
  latitude: number
  longitude: number
  name?: string | undefined
  type: 'LOCATION'
  url?: string | undefined
}
type ContactAddress = {
  city?: string | undefined
  country?: string | undefined
  countryCode?: string | undefined
  state?: string | undefined
  street?: string | undefined
  type?: 'HOME' | 'WORK' | undefined
  zip?: string | undefined
}
type ContactEmail = { email: string; type?: 'HOME' | 'WORK' | undefined }
type ContactName = {
  firstName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
}
type ContactOrg = {
  company?: string | undefined
  department?: string | undefined
  title?: string | undefined
}
type ContactPhone = { phone: string; type?: 'CELL' | 'HOME' | 'MAIN' | 'WORK' | undefined }
type ContactUrl = { type?: 'HOME' | 'WORK' | undefined; url: string }
type ContactProfile = {
  addresses: ContactAddress[]
  emails: ContactEmail[]
  name?: ContactName | undefined
  org?: ContactOrg | undefined
  phones: ContactPhone[]
  urls: ContactUrl[]
}
type ContactAttachment = { contactProfile: ContactProfile; type: 'CONTACT' }
type UnsupportedContentAttachment = { type: 'UNSUPPORTED_CONTENT' }
type MessageHeaderAttachment = {
  fileId?: bigint | undefined
  text?: string | undefined
  type: 'MESSAGE_HEADER'
}
type QuickReply = { label?: string | undefined; value: string; valueType: 'TEXT' | 'URL' }
type QuickRepliesAttachment = { quickReplies: QuickReply[]; type: 'QUICK_REPLIES' }
type SocialMetadata = {
  description?: string | undefined
  id?: string | undefined
  mediaTitle?: string | undefined
  mediaType:
    | 'ARTICLE'
    | 'AUDIO'
    | 'CAROUSEL'
    | 'DOCUMENT'
    | 'GIF'
    | 'LINK'
    | 'NONE'
    | 'PHOTO'
    | 'POLL'
    | 'STORY'
    | 'VIDEO'
  mediaUrl?: string | undefined
  mediaUrlString?: string | undefined
  thumbnailUrl?: string | undefined
}
type SocialMetadataIntegrationAttachment = {
  socialMetadata: SocialMetadata
  type: 'SOCIAL_MEDIA_METADATA'
}
type PreResolvedContact = {
  contactPropertiesLeadingToMatch: (
    | 'address'
    | 'annualrevenue'
    | 'associatedcompanyid'
    | 'associatedcompanylastupdated'
    | 'city'
    | 'closedate'
    | 'company'
    | 'company_size'
    | 'country'
    | 'createdate'
    | 'currentlyinworkflow'
    | 'date_of_birth'
    | 'days_to_close'
    | 'degree'
    | 'email'
    | 'engagements_last_meeting_booked'
    | 'engagements_last_meeting_booked_campaign'
    | 'engagements_last_meeting_booked_medium'
    | 'engagements_last_meeting_booked_source'
    | 'fax'
    | 'field_of_study'
    | 'first_conversion_date'
    | 'first_conversion_event_name'
    | 'first_deal_created_date'
    | 'firstname'
    | 'followercount'
    | 'gender'
    | 'graduation_date'
    | 'hs_active_contracts_arr'
    | 'hs_active_contracts_mrr'
    | 'hs_active_contracts_tcv'
    | 'hs_additional_emails'
    | 'hs_all_contact_vids'
    | 'hs_analytics_average_page_views'
    | 'hs_analytics_first_referrer'
    | 'hs_analytics_first_timestamp'
    | 'hs_analytics_first_touch_converting_campaign'
    | 'hs_analytics_first_url'
    | 'hs_analytics_first_visit_timestamp'
    | 'hs_analytics_last_referrer'
    | 'hs_analytics_last_timestamp'
    | 'hs_analytics_last_touch_converting_campaign'
    | 'hs_analytics_last_url'
    | 'hs_analytics_last_visit_timestamp'
    | 'hs_analytics_num_event_completions'
    | 'hs_analytics_num_page_views'
    | 'hs_analytics_num_visits'
    | 'hs_analytics_revenue'
    | 'hs_analytics_source'
    | 'hs_analytics_source_composite_data'
    | 'hs_analytics_source_data_1'
    | 'hs_analytics_source_data_2'
    | 'hs_associated_target_accounts'
    | 'hs_avatar_filemanager_key'
    | 'hs_bing_ad_clicked'
    | 'hs_bing_click_id'
    | 'hs_buying_role'
    | 'hs_calculated_form_submissions'
    | 'hs_calculated_merged_vids'
    | 'hs_calculated_mobile_number'
    | 'hs_calculated_phone_number'
    | 'hs_calculated_phone_number_area_code'
    | 'hs_calculated_phone_number_country_code'
    | 'hs_calculated_phone_number_region_code'
    | 'hs_chat_assistant_iql_date'
    | 'hs_chat_assistant_source'
    | 'hs_chat_assistant_summary'
    | 'hs_chatgpt_ad_clicked'
    | 'hs_chatgpt_click_id'
    | 'hs_clicked_linkedin_ad'
    | 'hs_consent_to_email_tracking'
    | 'hs_contact_creation_legal_basis_source_instance_id'
    | 'hs_contact_enrichment_opt_out'
    | 'hs_contact_enrichment_opt_out_timestamp'
    | 'hs_content_membership_email'
    | 'hs_content_membership_email_confirmed'
    | 'hs_content_membership_follow_up_enqueued_at'
    | 'hs_content_membership_notes'
    | 'hs_content_membership_registered_at'
    | 'hs_content_membership_registration_domain_sent_to'
    | 'hs_content_membership_registration_email_sent_at'
    | 'hs_content_membership_status'
    | 'hs_conversations_visitor_email'
    | 'hs_count_is_unworked'
    | 'hs_count_is_worked'
    | 'hs_country_region_code'
    | 'hs_created_by_conversations'
    | 'hs_cross_account_data_mirroring_source_account_ids'
    | 'hs_cross_account_note'
    | 'hs_cross_sell_opportunity'
    | 'hs_current_customer'
    | 'hs_currently_enrolled_in_prospecting_agent'
    | 'hs_customer_agent_lead_status'
    | 'hs_data_privacy_ads_consent'
    | 'hs_date_entered_customer'
    | 'hs_date_entered_evangelist'
    | 'hs_date_entered_lead'
    | 'hs_date_entered_marketingqualifiedlead'
    | 'hs_date_entered_opportunity'
    | 'hs_date_entered_other'
    | 'hs_date_entered_salesqualifiedlead'
    | 'hs_date_entered_subscriber'
    | 'hs_date_exited_customer'
    | 'hs_date_exited_evangelist'
    | 'hs_date_exited_lead'
    | 'hs_date_exited_marketingqualifiedlead'
    | 'hs_date_exited_opportunity'
    | 'hs_date_exited_other'
    | 'hs_date_exited_salesqualifiedlead'
    | 'hs_date_exited_subscriber'
    | 'hs_document_last_revisited'
    | 'hs_email_bad_address'
    | 'hs_email_bounce'
    | 'hs_email_click'
    | 'hs_email_communication_subscriptions_opted_in'
    | 'hs_email_communication_subscriptions_opted_out'
    | 'hs_email_customer_quarantined_reason'
    | 'hs_email_delivered'
    | 'hs_email_domain'
    | 'hs_email_engagement_likelihood_category'
    | 'hs_email_first_click_date'
    | 'hs_email_first_open_date'
    | 'hs_email_first_reply_date'
    | 'hs_email_first_send_date'
    | 'hs_email_hard_bounce_reason'
    | 'hs_email_hard_bounce_reason_enum'
    | 'hs_email_is_ineligible'
    | 'hs_email_last_click_date'
    | 'hs_email_last_email_name'
    | 'hs_email_last_open_date'
    | 'hs_email_last_reply_date'
    | 'hs_email_last_send_date'
    | 'hs_email_live_sourcing_restricted'
    | 'hs_email_open'
    | 'hs_email_optimal_send_day_of_week'
    | 'hs_email_optimal_send_time_of_day'
    | 'hs_email_optout'
    | 'hs_email_optout_survey_reason'
    | 'hs_email_quarantined'
    | 'hs_email_quarantined_reason'
    | 'hs_email_recipient_fatigue_recovery_time'
    | 'hs_email_replied'
    | 'hs_email_sends_since_last_engagement'
    | 'hs_email_type'
    | 'hs_emailconfirmationstatus'
    | 'hs_employment_change_detected_date'
    | 'hs_enforce_double_opt_in'
    | 'hs_enriched_email_bounce_detected'
    | 'hs_excluded_from_cross_account_data_mirroring'
    | 'hs_facebook_ad_clicked'
    | 'hs_facebook_click_id'
    | 'hs_facebookid'
    | 'hs_feedback_last_ces_survey_date'
    | 'hs_feedback_last_ces_survey_follow_up'
    | 'hs_feedback_last_ces_survey_rating'
    | 'hs_feedback_last_csat_survey_date'
    | 'hs_feedback_last_csat_survey_follow_up'
    | 'hs_feedback_last_csat_survey_rating'
    | 'hs_feedback_last_nps_follow_up'
    | 'hs_feedback_last_nps_rating'
    | 'hs_feedback_last_nps_rating_number'
    | 'hs_feedback_last_survey_date'
    | 'hs_feedback_show_nps_web_survey'
    | 'hs_first_closed_order_id'
    | 'hs_first_engagement_object_id'
    | 'hs_first_order_closed_date'
    | 'hs_first_outreach_date'
    | 'hs_first_subscription_create_date'
    | 'hs_full_name_or_email'
    | 'hs_geocode_mapping_id'
    | 'hs_geohash_1'
    | 'hs_geohash_2'
    | 'hs_geohash_3'
    | 'hs_geohash_4'
    | 'hs_geohash_5'
    | 'hs_geohash_6'
    | 'hs_google_click_id'
    | 'hs_googleplusid'
    | 'hs_gps_coordinates'
    | 'hs_gps_error'
    | 'hs_gps_latitude'
    | 'hs_gps_longitude'
    | 'hs_has_active_subscription'
    | 'hs_inbound_agent_inquiry_type'
    | 'hs_inbound_agent_last_conversation_date'
    | 'hs_inbound_agent_qualification_status'
    | 'hs_inferred_language_codes'
    | 'hs_intent_paid_up_to_date'
    | 'hs_intent_signals_enabled'
    | 'hs_internal_normalized_email'
    | 'hs_ip_timezone'
    | 'hs_is_contact'
    | 'hs_is_enriched'
    | 'hs_is_mass_marketing_activation_disallowed'
    | 'hs_is_merge_revertible'
    | 'hs_is_unworked'
    | 'hs_job_change_detected_date'
    | 'hs_journey_stage'
    | 'hs_language'
    | 'hs_last_metered_enrichment_timestamp'
    | 'hs_last_sales_activity_date'
    | 'hs_last_sales_activity_timestamp'
    | 'hs_last_sales_activity_type'
    | 'hs_last_sms_send_date'
    | 'hs_last_sms_send_name'
    | 'hs_latest_disqualified_lead_date'
    | 'hs_latest_meeting_activity'
    | 'hs_latest_open_lead_date'
    | 'hs_latest_qualified_lead_date'
    | 'hs_latest_sequence_ended_date'
    | 'hs_latest_sequence_enrolled'
    | 'hs_latest_sequence_enrolled_date'
    | 'hs_latest_sequence_finished_date'
    | 'hs_latest_sequence_unenrolled_date'
    | 'hs_latest_source'
    | 'hs_latest_source_composite_data'
    | 'hs_latest_source_data_1'
    | 'hs_latest_source_data_2'
    | 'hs_latest_source_timestamp'
    | 'hs_latest_subscription_create_date'
    | 'hs_latitude'
    | 'hs_lead_status'
    | 'hs_legal_basis'
    | 'hs_lifecyclestage_customer_date'
    | 'hs_lifecyclestage_evangelist_date'
    | 'hs_lifecyclestage_lead_date'
    | 'hs_lifecyclestage_marketingqualifiedlead_date'
    | 'hs_lifecyclestage_opportunity_date'
    | 'hs_lifecyclestage_other_date'
    | 'hs_lifecyclestage_salesqualifiedlead_date'
    | 'hs_lifecyclestage_subscriber_date'
    | 'hs_linkedin_ad_clicked'
    | 'hs_linkedin_click_id'
    | 'hs_linkedin_url'
    | 'hs_linkedinid'
    | 'hs_live_enrichment_deadline'
    | 'hs_longitude'
    | 'hs_manual_campaign_ids'
    | 'hs_marketable_reason_id'
    | 'hs_marketable_reason_type'
    | 'hs_marketable_status'
    | 'hs_marketable_until_renewal'
    | 'hs_membership_has_accessed_private_content'
    | 'hs_membership_last_private_content_access_date'
    | 'hs_messaging_engagement_score'
    | 'hs_mobile_sdk_push_tokens'
    | 'hs_next_renewal_date'
    | 'hs_notes_last_activity'
    | 'hs_notes_next_activity'
    | 'hs_notes_next_activity_type'
    | 'hs_num_active_contracts'
    | 'hs_num_associated_open_deals'
    | 'hs_persona'
    | 'hs_pinned_engagement_id'
    | 'hs_pipeline'
    | 'hs_predictivecontactscore'
    | 'hs_predictivecontactscore_tmp'
    | 'hs_predictivecontactscore_v2'
    | 'hs_predictivecontactscorebucket'
    | 'hs_predictivescoringtier'
    | 'hs_predictivescoringtier_tmp'
    | 'hs_prospecting_agent_activation_email_id'
    | 'hs_prospecting_agent_activation_status'
    | 'hs_prospecting_agent_actively_enrolled_count'
    | 'hs_prospecting_agent_enrollment_status'
    | 'hs_prospecting_agent_enrollment_status_raw'
    | 'hs_prospecting_agent_last_enrolled'
    | 'hs_prospecting_agent_sender'
    | 'hs_prospecting_agent_total_enrolled_count'
    | 'hs_quarantined_emails'
    | 'hs_recent_closed_order_date'
    | 'hs_reddit_ad_clicked'
    | 'hs_reddit_click_id'
    | 'hs_registered_member'
    | 'hs_registration_method'
    | 'hs_returning_to_office_detected_date'
    | 'hs_role'
    | 'hs_sa_first_engagement_date'
    | 'hs_sa_first_engagement_descr'
    | 'hs_sa_first_engagement_object_type'
    | 'hs_sales_email_last_clicked'
    | 'hs_sales_email_last_opened'
    | 'hs_sales_email_last_replied'
    | 'hs_searchable_calculated_international_mobile_number'
    | 'hs_searchable_calculated_international_phone_number'
    | 'hs_searchable_calculated_mobile_number'
    | 'hs_searchable_calculated_phone_number'
    | 'hs_seniority'
    | 'hs_sequences_actively_enrolled_count'
    | 'hs_sequences_enrolled_count'
    | 'hs_sequences_is_enrolled'
    | 'hs_sms_mobilephone_communication_subscriptions_opted_in'
    | 'hs_sms_mobilephone_communication_subscriptions_opted_out'
    | 'hs_sms_phone_communication_subscriptions_opted_in'
    | 'hs_sms_phone_communication_subscriptions_opted_out'
    | 'hs_social_facebook_clicks'
    | 'hs_social_google_plus_clicks'
    | 'hs_social_last_engagement'
    | 'hs_social_linkedin_clicks'
    | 'hs_social_num_broadcast_clicks'
    | 'hs_social_twitter_clicks'
    | 'hs_source_object_id'
    | 'hs_source_portal_id'
    | 'hs_sourced_contact_origin'
    | 'hs_state_code'
    | 'hs_sub_role'
    | 'hs_testpurge'
    | 'hs_testrollback'
    | 'hs_tiktok_ad_clicked'
    | 'hs_tiktok_click_id'
    | 'hs_time_between_contact_creation_and_deal_close'
    | 'hs_time_between_contact_creation_and_deal_creation'
    | 'hs_time_in_customer'
    | 'hs_time_in_evangelist'
    | 'hs_time_in_lead'
    | 'hs_time_in_marketingqualifiedlead'
    | 'hs_time_in_opportunity'
    | 'hs_time_in_other'
    | 'hs_time_in_salesqualifiedlead'
    | 'hs_time_in_subscriber'
    | 'hs_time_to_first_engagement'
    | 'hs_time_to_move_from_lead_to_customer'
    | 'hs_time_to_move_from_marketingqualifiedlead_to_customer'
    | 'hs_time_to_move_from_opportunity_to_customer'
    | 'hs_time_to_move_from_salesqualifiedlead_to_customer'
    | 'hs_time_to_move_from_subscriber_to_customer'
    | 'hs_timezone'
    | 'hs_twitterid'
    | 'hs_user_ids_of_all_notification_recipients'
    | 'hs_v2_cumulative_time_in_customer'
    | 'hs_v2_cumulative_time_in_evangelist'
    | 'hs_v2_cumulative_time_in_lead'
    | 'hs_v2_cumulative_time_in_marketingqualifiedlead'
    | 'hs_v2_cumulative_time_in_opportunity'
    | 'hs_v2_cumulative_time_in_other'
    | 'hs_v2_cumulative_time_in_salesqualifiedlead'
    | 'hs_v2_cumulative_time_in_subscriber'
    | 'hs_v2_date_entered_current_stage'
    | 'hs_v2_date_entered_customer'
    | 'hs_v2_date_entered_evangelist'
    | 'hs_v2_date_entered_lead'
    | 'hs_v2_date_entered_marketingqualifiedlead'
    | 'hs_v2_date_entered_opportunity'
    | 'hs_v2_date_entered_other'
    | 'hs_v2_date_entered_salesqualifiedlead'
    | 'hs_v2_date_entered_subscriber'
    | 'hs_v2_date_exited_customer'
    | 'hs_v2_date_exited_evangelist'
    | 'hs_v2_date_exited_lead'
    | 'hs_v2_date_exited_marketingqualifiedlead'
    | 'hs_v2_date_exited_opportunity'
    | 'hs_v2_date_exited_other'
    | 'hs_v2_date_exited_salesqualifiedlead'
    | 'hs_v2_date_exited_subscriber'
    | 'hs_v2_latest_time_in_customer'
    | 'hs_v2_latest_time_in_evangelist'
    | 'hs_v2_latest_time_in_lead'
    | 'hs_v2_latest_time_in_marketingqualifiedlead'
    | 'hs_v2_latest_time_in_opportunity'
    | 'hs_v2_latest_time_in_other'
    | 'hs_v2_latest_time_in_salesqualifiedlead'
    | 'hs_v2_latest_time_in_subscriber'
    | 'hs_v2_time_in_current_stage'
    | 'hs_whatsapp_bsuids'
    | 'hs_whatsapp_communication_subscriptions_opted_in'
    | 'hs_whatsapp_communication_subscriptions_opted_out'
    | 'hs_whatsapp_phone_number'
    | 'hs_why_this_contact'
    | 'hubspot_owner_id'
    | 'hubspotscore'
    | 'industry'
    | 'ip_city'
    | 'ip_country'
    | 'ip_country_code'
    | 'ip_latlon'
    | 'ip_state'
    | 'ip_state_code'
    | 'ip_zipcode'
    | 'job_function'
    | 'jobtitle'
    | 'kloutscoregeneral'
    | 'lastmodifieddate'
    | 'lastname'
    | 'lifecyclestage'
    | 'linkedinbio'
    | 'linkedinconnections'
    | 'marital_status'
    | 'message'
    | 'military_status'
    | 'mobilephone'
    | 'notes_last_contacted'
    | 'notes_last_updated'
    | 'notes_next_activity_date'
    | 'num_associated_deals'
    | 'num_contacted_notes'
    | 'num_conversion_events'
    | 'num_notes'
    | 'num_unique_conversion_events'
    | 'numemployees'
    | 'owneremail'
    | 'ownername'
    | 'phone'
    | 'photo'
    | 'recent_conversion_date'
    | 'recent_conversion_event_name'
    | 'recent_deal_amount'
    | 'recent_deal_close_date'
    | 'relationship_status'
    | 'salutation'
    | 'school'
    | 'seniority'
    | 'start_date'
    | 'state'
    | 'surveymonkeyeventlastupdated'
    | 'total_revenue'
    | 'twitterbio'
    | 'twitterhandle'
    | 'twitterprofilephoto'
    | 'webinareventlastupdated'
    | 'website'
    | 'work_email'
    | 'zip'
  )[]
  contactVid: bigint
}
type PreResolvedContacts = { contacts: PreResolvedContact[] }
type ChannelIntegrationParticipant = {
  deliveryIdentifier: PublicDeliveryIdentifier
  name?: string | undefined
  senderActorId?: string | undefined
}
type ChannelIntegrationMessageEgg = {
  associateWithContactId?: bigint | undefined
  attachments: (
    | FileAttachment
    | LocationAttachment
    | ContactAttachment
    | UnsupportedContentAttachment
    | MessageHeaderAttachment
    | QuickRepliesAttachment
    | SocialMetadataIntegrationAttachment
  )[]
  channelAccountId: string
  inReplyToId?: string | undefined
  integrationIdempotencyId?: string | undefined
  integrationThreadId?: string | undefined
  messageDirection: 'INCOMING' | 'OUTGOING'
  preResolvedContacts?: PreResolvedContacts | undefined
  recipients: ChannelIntegrationParticipant[]
  richText?: string | undefined
  senders: ChannelIntegrationParticipant[]
  text: string
  timestamp: string
}
type PublicFile = {
  fileId: string
  fileUsageType: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING'
  name?: string | undefined
  type: 'FILE'
  url?: string | undefined
}
type PublicLocation = {
  address?: string | undefined
  latitude: number
  longitude: number
  name?: string | undefined
  type: 'LOCATION'
  url?: string | undefined
}
type PublicContact = { contactProfile: ContactProfile; type: 'CONTACT' }
type PublicUnsupportedContent = { type: 'UNSUPPORTED_CONTENT' }
type PublicMessageHeader = {
  fileId?: bigint | undefined
  text?: string | undefined
  type: 'MESSAGE_HEADER'
}
type PublicQuickReplies = {
  allowMultiSelect: boolean
  allowUserInput: boolean
  quickReplies: QuickReply[]
  type: 'QUICK_REPLIES'
}
type PublicWhatsAppTemplateMetadata = {
  contentId?: bigint | undefined
  crmObjectIds: { [x: string]: bigint }
  mappedTemplateId?: bigint | undefined
  parameters: { [x: string]: string }
  rootMicId?: bigint | undefined
  type: 'WHATSAPP_TEMPLATE_METADATA'
}
type PublicSocialMetadataAttachment = {
  socialMetadata: SocialMetadata
  type: 'SOCIAL_MEDIA_METADATA'
}
type PublicClient = {
  clientType: 'HUBSPOT' | 'INTEGRATION' | 'SYSTEM' | 'UNKNOWN'
  integrationAppId?: number | undefined
}
type PublicRecipient = {
  actorId?: string | undefined
  deliveryIdentifier: PublicDeliveryIdentifier
  name?: string | undefined
  recipientField?: string | undefined
}
type PublicSender = {
  actorId?: string | undefined
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  name?: string | undefined
  senderField?: string | undefined
}
type PublicMessageFailureDetails = {
  errorMessage?: string | undefined
  errorMessageTokens: { [x: string]: string }
}
type PublicMessageStatus = {
  failureDetails?: PublicMessageFailureDetails | undefined
  statusType: 'FAILED' | 'READ' | 'RECEIVED' | 'SENT'
}
type PublicConversationsMessage = {
  archived: boolean
  attachments: (
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  )[]
  channelAccountId: string
  channelId: string
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  direction: 'INCOMING' | 'OUTGOING'
  id: string
  inReplyToId?: string | undefined
  recipients: PublicRecipient[]
  richText?: string | undefined
  senders: PublicSender[]
  status?: PublicMessageStatus | undefined
  subject?: string | undefined
  text: string
  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY'
  type: 'MESSAGE'
  updatedAt?: string | undefined
}
type PublicChannelIntegrationMessageUpdateRequest = {
  errorMessage?: string | undefined
  statusType: 'FAILED' | 'READ' | 'SENT'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations/custom-channels/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseWithTotalPublicChannelIntegrationChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PublicChannelIntegrationChannelCreate }
            output: PublicChannelIntegrationChannel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PublicChannelIntegrationChannelCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId': {
      $get:
        | {
            input: { param: { channelId: number } }
            output: PublicChannelIntegrationChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { channelId: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { channelId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { channelId: number } } & { json: PublicChannelIntegrationChannelPatch }
            output: PublicChannelIntegrationChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number } } & { json: PublicChannelIntegrationChannelPatch }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId/channel-account-staging-tokens/:accountToken': {
      $patch:
        | {
            input: { param: { accountToken: string; channelId: number } } & {
              json: PublicChannelAccountStagingTokenUpdateRequest
            }
            output: PublicChannelAccountStagingToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountToken: string; channelId: number } } & {
              json: PublicChannelAccountStagingTokenUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts': {
      $get:
        | {
            input: { param: { channelId: number } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                defaultPageLength?: number | undefined
                deliveryIdentifierType?:
                  | (
                      | 'HS_EMAIL_ADDRESS'
                      | 'HS_PHONE_NUMBER'
                      | 'HS_SHORT_CODE'
                      | 'CHANNEL_SPECIFIC_OPAQUE_ID'
                    )[]
                  | undefined
                deliveryIdentifierValue?: string[] | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseWithTotalPublicChannelAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                defaultPageLength?: number | undefined
                deliveryIdentifierType?:
                  | (
                      | 'HS_EMAIL_ADDRESS'
                      | 'HS_PHONE_NUMBER'
                      | 'HS_SHORT_CODE'
                      | 'CHANNEL_SPECIFIC_OPAQUE_ID'
                    )[]
                  | undefined
                deliveryIdentifierValue?: string[] | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { channelId: number } } & { json: PublicChannelAccountEgg }
            output: PublicChannelAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channelId: number } } & { json: PublicChannelAccountEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId': {
      $get:
        | {
            input: { param: { channelAccountId: bigint; channelId: number } } & {
              query: { archived?: boolean | undefined }
            }
            output: PublicChannelAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelAccountId: bigint; channelId: number } } & {
              query: { archived?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { channelAccountId: bigint; channelId: number } } & {
              json: PublicChannelAccountUpdateRequest
            }
            output: PublicChannelAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelAccountId: bigint; channelId: number } } & {
              json: PublicChannelAccountUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId/messages': {
      $post:
        | {
            input: { param: { channelId: number } } & { json: ChannelIntegrationMessageEgg }
            output: PublicConversationsMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channelId: number } } & { json: ChannelIntegrationMessageEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId': {
      $get:
        | {
            input: { param: { channelId: number; messageId: string } }
            output: PublicConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number; messageId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { channelId: number; messageId: string } } & {
              json: PublicChannelIntegrationMessageUpdateRequest
            }
            output: PublicConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number; messageId: string } } & {
              json: PublicChannelIntegrationMessageUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
