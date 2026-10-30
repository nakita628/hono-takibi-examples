import { createRoute, z } from '@hono/zod-openapi'

const FileAttachmentSchema = z
  .object({
    fileId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the file.',
        example: null,
      }),
    fileUsageType: z
      .enum(['AUDIO', 'IMAGE', 'OTHER', 'STICKER', 'VOICE_RECORDING'])
      .exactOptional()
      .openapi({
        description:
          "A string that specifies the usage type of the file. Valid values include 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', and 'OTHER'.",
        example: null,
      }),
    type: z
      .literal('FILE')
      .default('FILE')
      .openapi({
        description: "A string that indicates the type of attachment. The default value is 'FILE'.",
        example: null,
      }),
  })
  .openapi({
    title: 'FILE',
    required: ['fileId', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('FileAttachment')

const LocationAttachmentSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the address of the location.',
        example: null,
      }),
    latitude: z
      .number()
      .openapi({
        description: 'A number representing the latitude of the location.',
        example: null,
      }),
    longitude: z
      .number()
      .openapi({
        description: 'A number representing the longitude of the location.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the location.', example: null }),
    type: z
      .literal('LOCATION')
      .default('LOCATION')
      .openapi({
        description: "A string indicating the type of attachment, which is always 'LOCATION'.",
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a URL associated with the location.',
        example: null,
      }),
  })
  .openapi({
    title: 'LOCATION',
    required: ['latitude', 'longitude', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('LocationAttachment')

const ContactAddressSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The city where the contact is located. It is a string value.',
        example: null,
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The country where the contact is located. It is a string value.',
        example: null,
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The code representing the country of the contact's address. It is a string value.",
        example: null,
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state where the contact is located. It is a string value.',
        example: null,
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The street address of the contact. It is a string value.',
        example: null,
      }),
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of address, which can be either 'HOME' or 'WORK'.",
        example: null,
      }),
    zip: z
      .string()
      .exactOptional()
      .openapi({
        description: "The postal code of the contact's address. It is a string value.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactAddress')

const ContactEmailSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'The actual email address of the contact, represented as a string.',
        example: null,
      }),
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of email address, which can be either 'HOME' or 'WORK'.",
        example: null,
      }),
  })
  .openapi({ required: ['email'], example: null })
  .openapi('ContactEmail')

const ContactNameSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the first name of the contact.',
        example: null,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the last name of the contact.',
        example: null,
      }),
    middleName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the middle name of the contact.',
        example: null,
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string representing the prefix of the contact's name, such as 'Mr.', 'Ms.', or 'Dr.'.",
        example: null,
      }),
    suffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string representing the suffix of the contact's name, such as 'Jr.', 'Sr.', or 'III'.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactName')

const ContactOrgSchema = z
  .object({
    company: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the company the contact is associated with. It is a string value.',
        example: null,
      }),
    department: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The department within the company where the contact works. It is a string value.',
        example: null,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The job title of the contact within their company. It is a string value.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactOrg')

const ContactPhoneSchema = z
  .object({
    phone: z
      .string()
      .openapi({
        description:
          "The phone number associated with the contact. This is a string representing the contact's phone number.",
        example: null,
      }),
    type: z
      .enum(['CELL', 'HOME', 'MAIN', 'WORK'])
      .exactOptional()
      .openapi({
        description:
          "The type of phone, which can be one of the following: 'CELL', 'MAIN', 'HOME', or 'WORK'.",
        example: null,
      }),
  })
  .openapi({ required: ['phone'], example: null })
  .openapi('ContactPhone')

const ContactUrlSchema = z
  .object({
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description:
          "The category of the URL, indicating its purpose. Valid values include 'HOME' and 'WORK'.",
        example: null,
      }),
    url: z
      .string()
      .openapi({
        description: 'The actual URL string associated with the contact.',
        example: null,
      }),
  })
  .openapi({ required: ['url'], example: null })
  .openapi('ContactUrl')

const ContactProfileSchema = z
  .object({
    addresses: z
      .array(ContactAddressSchema)
      .openapi({
        description:
          'An array of addresses associated with the contact, where each address includes details such as type (e.g., HOME, WORK), street, city, state, zip, country, and country code.',
        example: null,
      }),
    emails: z
      .array(ContactEmailSchema)
      .openapi({
        description:
          'An array of email addresses for the contact, with each email having a type (e.g., HOME, WORK) and the email address itself.',
        example: null,
      }),
    name: ContactNameSchema.exactOptional(),
    org: ContactOrgSchema.exactOptional(),
    phones: z
      .array(ContactPhoneSchema)
      .openapi({
        description:
          'An array of phone numbers for the contact, with each phone number including a type (e.g., CELL, MAIN, HOME, WORK) and the phone number.',
        example: null,
      }),
    urls: z
      .array(ContactUrlSchema)
      .openapi({
        description:
          'An array of URLs related to the contact, where each URL includes a type (e.g., HOME, WORK) and the URL itself.',
        example: null,
      }),
  })
  .openapi({ required: ['addresses', 'emails', 'phones', 'urls'], example: null })
  .openapi('ContactProfile')

const ContactAttachmentSchema = z
  .object({
    contactProfile: ContactProfileSchema,
    type: z
      .literal('CONTACT')
      .default('CONTACT')
      .openapi({
        description: "A string indicating the type of attachment. The default value is 'CONTACT'.",
        example: null,
      }),
  })
  .openapi({
    title: 'CONTACT',
    required: ['contactProfile', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ContactAttachment')

const UnsupportedContentAttachmentSchema = z
  .object({
    type: z
      .literal('UNSUPPORTED_CONTENT')
      .default('UNSUPPORTED_CONTENT')
      .openapi({
        description:
          "A string indicating the type of the attachment. The default value is 'UNSUPPORTED_CONTENT'.",
        example: null,
      }),
  })
  .openapi({
    title: 'UNSUPPORTED_CONTENT',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('UnsupportedContentAttachment')

const MessageHeaderAttachmentSchema = z
  .object({
    fileId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An optional integer representing the ID of an associated file, formatted as an int64.',
        example: null,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional string containing text information for the message header.',
        example: null,
      }),
    type: z
      .literal('MESSAGE_HEADER')
      .default('MESSAGE_HEADER')
      .openapi({
        description:
          "A string representing the type of attachment, which is always 'MESSAGE_HEADER'.",
        example: null,
      }),
  })
  .openapi({
    title: 'MESSAGE_HEADER',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('MessageHeaderAttachment')

const QuickReplySchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label displayed to the user for the quick reply option. It is a string.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'The value associated with the quick reply, typically used as the response when the quick reply is selected. It is a string.',
        example: null,
      }),
    valueType: z
      .enum(['TEXT', 'URL'])
      .openapi({
        description:
          "The type of the value, indicating how the value should be interpreted. It is a string and can be either 'TEXT' or 'URL'.",
        example: null,
      }),
  })
  .openapi({ required: ['value', 'valueType'], example: null })
  .openapi('QuickReply')

const QuickRepliesAttachmentSchema = z
  .object({
    quickReplies: z
      .array(QuickReplySchema)
      .openapi({
        description:
          'An array of QuickReply objects, each representing a predefined option that a user can select.',
        example: null,
      }),
    type: z
      .literal('QUICK_REPLIES')
      .default('QUICK_REPLIES')
      .openapi({
        description:
          "A string indicating the type of attachment. The default value is 'QUICK_REPLIES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'QUICK_REPLIES',
    required: ['quickReplies', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('QuickRepliesAttachment')

const SocialMetadataSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the media content.', example: null }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for this media content.', example: null }),
    mediaTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the media content.', example: null }),
    mediaType: z
      .enum([
        'ARTICLE',
        'AUDIO',
        'CAROUSEL',
        'DOCUMENT',
        'GIF',
        'LINK',
        'NONE',
        'PHOTO',
        'POLL',
        'STORY',
        'VIDEO',
      ])
      .openapi({
        description:
          "The type of media content, such as 'PHOTO', 'VIDEO', 'CAROUSEL', 'LINK', 'ARTICLE', 'GIF', 'DOCUMENT', 'POLL', 'NONE', 'STORY', or 'AUDIO'.",
        example: null,
      }),
    mediaUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL where the media content is located.', example: null }),
    mediaUrlString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL of the media content.',
        example: null,
      }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the thumbnail image for the media content.',
        example: null,
      }),
  })
  .openapi({ required: ['mediaType'], example: null })
  .openapi('SocialMetadata')

const SocialMetadataIntegrationAttachmentSchema = z
  .object({
    socialMetadata: SocialMetadataSchema,
    type: z
      .literal('SOCIAL_MEDIA_METADATA')
      .default('SOCIAL_MEDIA_METADATA')
      .openapi({
        description:
          "A string indicating the type of attachment, which is 'SOCIAL_MEDIA_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SOCIAL_MEDIA_METADATA',
    required: ['socialMetadata', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('SocialMetadataIntegrationAttachment')

const PreResolvedContactSchema = z
  .object({
    contactPropertiesLeadingToMatch: z
      .array(
        z
          .enum([
            'address',
            'annualrevenue',
            'associatedcompanyid',
            'associatedcompanylastupdated',
            'city',
            'closedate',
            'company',
            'company_size',
            'country',
            'createdate',
            'currentlyinworkflow',
            'date_of_birth',
            'days_to_close',
            'degree',
            'email',
            'engagements_last_meeting_booked',
            'engagements_last_meeting_booked_campaign',
            'engagements_last_meeting_booked_medium',
            'engagements_last_meeting_booked_source',
            'fax',
            'field_of_study',
            'first_conversion_date',
            'first_conversion_event_name',
            'first_deal_created_date',
            'firstname',
            'followercount',
            'gender',
            'graduation_date',
            'hs_active_contracts_arr',
            'hs_active_contracts_mrr',
            'hs_active_contracts_tcv',
            'hs_additional_emails',
            'hs_all_contact_vids',
            'hs_analytics_average_page_views',
            'hs_analytics_first_referrer',
            'hs_analytics_first_timestamp',
            'hs_analytics_first_touch_converting_campaign',
            'hs_analytics_first_url',
            'hs_analytics_first_visit_timestamp',
            'hs_analytics_last_referrer',
            'hs_analytics_last_timestamp',
            'hs_analytics_last_touch_converting_campaign',
            'hs_analytics_last_url',
            'hs_analytics_last_visit_timestamp',
            'hs_analytics_num_event_completions',
            'hs_analytics_num_page_views',
            'hs_analytics_num_visits',
            'hs_analytics_revenue',
            'hs_analytics_source',
            'hs_analytics_source_composite_data',
            'hs_analytics_source_data_1',
            'hs_analytics_source_data_2',
            'hs_associated_target_accounts',
            'hs_avatar_filemanager_key',
            'hs_bing_ad_clicked',
            'hs_bing_click_id',
            'hs_buying_role',
            'hs_calculated_form_submissions',
            'hs_calculated_merged_vids',
            'hs_calculated_mobile_number',
            'hs_calculated_phone_number',
            'hs_calculated_phone_number_area_code',
            'hs_calculated_phone_number_country_code',
            'hs_calculated_phone_number_region_code',
            'hs_chat_assistant_iql_date',
            'hs_chat_assistant_source',
            'hs_chat_assistant_summary',
            'hs_chatgpt_ad_clicked',
            'hs_chatgpt_click_id',
            'hs_clicked_linkedin_ad',
            'hs_consent_to_email_tracking',
            'hs_contact_creation_legal_basis_source_instance_id',
            'hs_contact_enrichment_opt_out',
            'hs_contact_enrichment_opt_out_timestamp',
            'hs_content_membership_email',
            'hs_content_membership_email_confirmed',
            'hs_content_membership_follow_up_enqueued_at',
            'hs_content_membership_notes',
            'hs_content_membership_registered_at',
            'hs_content_membership_registration_domain_sent_to',
            'hs_content_membership_registration_email_sent_at',
            'hs_content_membership_status',
            'hs_conversations_visitor_email',
            'hs_count_is_unworked',
            'hs_count_is_worked',
            'hs_country_region_code',
            'hs_created_by_conversations',
            'hs_cross_account_data_mirroring_source_account_ids',
            'hs_cross_account_note',
            'hs_cross_sell_opportunity',
            'hs_current_customer',
            'hs_currently_enrolled_in_prospecting_agent',
            'hs_customer_agent_lead_status',
            'hs_data_privacy_ads_consent',
            'hs_date_entered_customer',
            'hs_date_entered_evangelist',
            'hs_date_entered_lead',
            'hs_date_entered_marketingqualifiedlead',
            'hs_date_entered_opportunity',
            'hs_date_entered_other',
            'hs_date_entered_salesqualifiedlead',
            'hs_date_entered_subscriber',
            'hs_date_exited_customer',
            'hs_date_exited_evangelist',
            'hs_date_exited_lead',
            'hs_date_exited_marketingqualifiedlead',
            'hs_date_exited_opportunity',
            'hs_date_exited_other',
            'hs_date_exited_salesqualifiedlead',
            'hs_date_exited_subscriber',
            'hs_document_last_revisited',
            'hs_email_bad_address',
            'hs_email_bounce',
            'hs_email_click',
            'hs_email_communication_subscriptions_opted_in',
            'hs_email_communication_subscriptions_opted_out',
            'hs_email_customer_quarantined_reason',
            'hs_email_delivered',
            'hs_email_domain',
            'hs_email_engagement_likelihood_category',
            'hs_email_first_click_date',
            'hs_email_first_open_date',
            'hs_email_first_reply_date',
            'hs_email_first_send_date',
            'hs_email_hard_bounce_reason',
            'hs_email_hard_bounce_reason_enum',
            'hs_email_is_ineligible',
            'hs_email_last_click_date',
            'hs_email_last_email_name',
            'hs_email_last_open_date',
            'hs_email_last_reply_date',
            'hs_email_last_send_date',
            'hs_email_live_sourcing_restricted',
            'hs_email_open',
            'hs_email_optimal_send_day_of_week',
            'hs_email_optimal_send_time_of_day',
            'hs_email_optout',
            'hs_email_optout_survey_reason',
            'hs_email_quarantined',
            'hs_email_quarantined_reason',
            'hs_email_recipient_fatigue_recovery_time',
            'hs_email_replied',
            'hs_email_sends_since_last_engagement',
            'hs_email_type',
            'hs_emailconfirmationstatus',
            'hs_employment_change_detected_date',
            'hs_enforce_double_opt_in',
            'hs_enriched_email_bounce_detected',
            'hs_excluded_from_cross_account_data_mirroring',
            'hs_facebook_ad_clicked',
            'hs_facebook_click_id',
            'hs_facebookid',
            'hs_feedback_last_ces_survey_date',
            'hs_feedback_last_ces_survey_follow_up',
            'hs_feedback_last_ces_survey_rating',
            'hs_feedback_last_csat_survey_date',
            'hs_feedback_last_csat_survey_follow_up',
            'hs_feedback_last_csat_survey_rating',
            'hs_feedback_last_nps_follow_up',
            'hs_feedback_last_nps_rating',
            'hs_feedback_last_nps_rating_number',
            'hs_feedback_last_survey_date',
            'hs_feedback_show_nps_web_survey',
            'hs_first_closed_order_id',
            'hs_first_engagement_object_id',
            'hs_first_order_closed_date',
            'hs_first_outreach_date',
            'hs_first_subscription_create_date',
            'hs_full_name_or_email',
            'hs_geohash_1',
            'hs_geohash_2',
            'hs_geohash_3',
            'hs_geohash_4',
            'hs_geohash_5',
            'hs_geohash_6',
            'hs_google_click_id',
            'hs_googleplusid',
            'hs_gps_coordinates',
            'hs_gps_error',
            'hs_gps_latitude',
            'hs_gps_longitude',
            'hs_has_active_subscription',
            'hs_inbound_agent_inquiry_type',
            'hs_inbound_agent_last_conversation_date',
            'hs_inbound_agent_qualification_status',
            'hs_inferred_language_codes',
            'hs_intent_paid_up_to_date',
            'hs_intent_signals_enabled',
            'hs_ip_timezone',
            'hs_is_contact',
            'hs_is_enriched',
            'hs_is_mass_marketing_activation_disallowed',
            'hs_is_merge_revertible',
            'hs_is_unworked',
            'hs_job_change_detected_date',
            'hs_journey_stage',
            'hs_language',
            'hs_last_metered_enrichment_timestamp',
            'hs_last_sales_activity_date',
            'hs_last_sales_activity_timestamp',
            'hs_last_sales_activity_type',
            'hs_last_sms_send_date',
            'hs_last_sms_send_name',
            'hs_latest_disqualified_lead_date',
            'hs_latest_meeting_activity',
            'hs_latest_open_lead_date',
            'hs_latest_qualified_lead_date',
            'hs_latest_sequence_ended_date',
            'hs_latest_sequence_enrolled',
            'hs_latest_sequence_enrolled_date',
            'hs_latest_sequence_finished_date',
            'hs_latest_sequence_unenrolled_date',
            'hs_latest_source',
            'hs_latest_source_composite_data',
            'hs_latest_source_data_1',
            'hs_latest_source_data_2',
            'hs_latest_source_timestamp',
            'hs_latest_subscription_create_date',
            'hs_latitude',
            'hs_lead_status',
            'hs_legal_basis',
            'hs_lifecyclestage_customer_date',
            'hs_lifecyclestage_evangelist_date',
            'hs_lifecyclestage_lead_date',
            'hs_lifecyclestage_marketingqualifiedlead_date',
            'hs_lifecyclestage_opportunity_date',
            'hs_lifecyclestage_other_date',
            'hs_lifecyclestage_salesqualifiedlead_date',
            'hs_lifecyclestage_subscriber_date',
            'hs_linkedin_ad_clicked',
            'hs_linkedin_click_id',
            'hs_linkedin_url',
            'hs_linkedinid',
            'hs_live_enrichment_deadline',
            'hs_longitude',
            'hs_manual_campaign_ids',
            'hs_marketable_reason_id',
            'hs_marketable_reason_type',
            'hs_marketable_status',
            'hs_marketable_until_renewal',
            'hs_membership_has_accessed_private_content',
            'hs_membership_last_private_content_access_date',
            'hs_messaging_engagement_score',
            'hs_mobile_sdk_push_tokens',
            'hs_next_renewal_date',
            'hs_notes_last_activity',
            'hs_notes_next_activity',
            'hs_notes_next_activity_type',
            'hs_num_active_contracts',
            'hs_num_associated_open_deals',
            'hs_persona',
            'hs_pinned_engagement_id',
            'hs_pipeline',
            'hs_predictivecontactscore',
            'hs_predictivecontactscore_tmp',
            'hs_predictivecontactscore_v2',
            'hs_predictivecontactscorebucket',
            'hs_predictivescoringtier',
            'hs_predictivescoringtier_tmp',
            'hs_prospecting_agent_activation_email_id',
            'hs_prospecting_agent_activation_status',
            'hs_prospecting_agent_actively_enrolled_count',
            'hs_prospecting_agent_enrollment_status',
            'hs_prospecting_agent_enrollment_status_raw',
            'hs_prospecting_agent_last_enrolled',
            'hs_prospecting_agent_sender',
            'hs_prospecting_agent_total_enrolled_count',
            'hs_quarantined_emails',
            'hs_recent_closed_order_date',
            'hs_reddit_ad_clicked',
            'hs_reddit_click_id',
            'hs_registered_member',
            'hs_registration_method',
            'hs_returning_to_office_detected_date',
            'hs_role',
            'hs_sa_first_engagement_date',
            'hs_sa_first_engagement_descr',
            'hs_sa_first_engagement_object_type',
            'hs_sales_email_last_clicked',
            'hs_sales_email_last_opened',
            'hs_sales_email_last_replied',
            'hs_searchable_calculated_international_mobile_number',
            'hs_searchable_calculated_international_phone_number',
            'hs_searchable_calculated_mobile_number',
            'hs_searchable_calculated_phone_number',
            'hs_seniority',
            'hs_sequences_actively_enrolled_count',
            'hs_sequences_enrolled_count',
            'hs_sequences_is_enrolled',
            'hs_social_facebook_clicks',
            'hs_social_google_plus_clicks',
            'hs_social_last_engagement',
            'hs_social_linkedin_clicks',
            'hs_social_num_broadcast_clicks',
            'hs_social_twitter_clicks',
            'hs_source_object_id',
            'hs_source_portal_id',
            'hs_sourced_contact_origin',
            'hs_state_code',
            'hs_sub_role',
            'hs_testpurge',
            'hs_testrollback',
            'hs_tiktok_ad_clicked',
            'hs_tiktok_click_id',
            'hs_time_between_contact_creation_and_deal_close',
            'hs_time_between_contact_creation_and_deal_creation',
            'hs_time_in_customer',
            'hs_time_in_evangelist',
            'hs_time_in_lead',
            'hs_time_in_marketingqualifiedlead',
            'hs_time_in_opportunity',
            'hs_time_in_other',
            'hs_time_in_salesqualifiedlead',
            'hs_time_in_subscriber',
            'hs_time_to_first_engagement',
            'hs_time_to_move_from_lead_to_customer',
            'hs_time_to_move_from_marketingqualifiedlead_to_customer',
            'hs_time_to_move_from_opportunity_to_customer',
            'hs_time_to_move_from_salesqualifiedlead_to_customer',
            'hs_time_to_move_from_subscriber_to_customer',
            'hs_timezone',
            'hs_twitterid',
            'hs_user_ids_of_all_notification_recipients',
            'hs_v2_cumulative_time_in_customer',
            'hs_v2_cumulative_time_in_evangelist',
            'hs_v2_cumulative_time_in_lead',
            'hs_v2_cumulative_time_in_marketingqualifiedlead',
            'hs_v2_cumulative_time_in_opportunity',
            'hs_v2_cumulative_time_in_other',
            'hs_v2_cumulative_time_in_salesqualifiedlead',
            'hs_v2_cumulative_time_in_subscriber',
            'hs_v2_date_entered_current_stage',
            'hs_v2_date_entered_customer',
            'hs_v2_date_entered_evangelist',
            'hs_v2_date_entered_lead',
            'hs_v2_date_entered_marketingqualifiedlead',
            'hs_v2_date_entered_opportunity',
            'hs_v2_date_entered_other',
            'hs_v2_date_entered_salesqualifiedlead',
            'hs_v2_date_entered_subscriber',
            'hs_v2_date_exited_customer',
            'hs_v2_date_exited_evangelist',
            'hs_v2_date_exited_lead',
            'hs_v2_date_exited_marketingqualifiedlead',
            'hs_v2_date_exited_opportunity',
            'hs_v2_date_exited_other',
            'hs_v2_date_exited_salesqualifiedlead',
            'hs_v2_date_exited_subscriber',
            'hs_v2_latest_time_in_customer',
            'hs_v2_latest_time_in_evangelist',
            'hs_v2_latest_time_in_lead',
            'hs_v2_latest_time_in_marketingqualifiedlead',
            'hs_v2_latest_time_in_opportunity',
            'hs_v2_latest_time_in_other',
            'hs_v2_latest_time_in_salesqualifiedlead',
            'hs_v2_latest_time_in_subscriber',
            'hs_v2_time_in_current_stage',
            'hs_whatsapp_bsuids',
            'hs_whatsapp_communication_subscriptions_opted_in',
            'hs_whatsapp_communication_subscriptions_opted_out',
            'hs_whatsapp_phone_number',
            'hs_why_this_contact',
            'hubspot_owner_id',
            'hubspotscore',
            'industry',
            'ip_city',
            'ip_country',
            'ip_country_code',
            'ip_latlon',
            'ip_state',
            'ip_state_code',
            'ip_zipcode',
            'job_function',
            'jobtitle',
            'kloutscoregeneral',
            'lastmodifieddate',
            'lastname',
            'lifecyclestage',
            'linkedinbio',
            'linkedinconnections',
            'marital_status',
            'message',
            'military_status',
            'mobilephone',
            'notes_last_contacted',
            'notes_last_updated',
            'notes_next_activity_date',
            'num_associated_deals',
            'num_contacted_notes',
            'num_conversion_events',
            'num_notes',
            'num_unique_conversion_events',
            'numemployees',
            'owneremail',
            'ownername',
            'phone',
            'photo',
            'recent_conversion_date',
            'recent_conversion_event_name',
            'recent_deal_amount',
            'recent_deal_close_date',
            'relationship_status',
            'salutation',
            'school',
            'seniority',
            'start_date',
            'state',
            'surveymonkeyeventlastupdated',
            'total_revenue',
            'twitterbio',
            'twitterhandle',
            'twitterprofilephoto',
            'webinareventlastupdated',
            'website',
            'work_email',
            'zip',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          "An array of strings indicating the properties that were used to match and identify the contact. Valid values include various contact attributes such as 'email', 'firstname', 'lastname', and many more.",
        example: null,
      }),
    contactVid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier for the contact, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['contactPropertiesLeadingToMatch', 'contactVid'], example: null })
  .openapi('PreResolvedContact')

const PreResolvedContactsSchema = z
  .object({
    contacts: z
      .array(PreResolvedContactSchema)
      .openapi({
        description:
          'An array of PreResolvedContact objects. Each object contains information about a contact that has been pre-resolved, including properties that led to the match. This array is required.',
        example: null,
      }),
  })
  .openapi({ required: ['contacts'], example: null })
  .openapi('PreResolvedContacts')

const PublicDeliveryIdentifierSchema = z
  .object({
    type: z
      .enum(['CHANNEL_SPECIFIC_OPAQUE_ID', 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE'])
      .openapi({
        description:
          "A string representing the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.",
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'A string representing the value associated with the delivery identifier type.',
        example: null,
      }),
  })
  .openapi({ required: ['type', 'value'], example: null })
  .openapi('PublicDeliveryIdentifier')

const ChannelIntegrationParticipantSchema = z
  .object({
    deliveryIdentifier: PublicDeliveryIdentifierSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the participant. It is a string that can be used to identify the participant within the channel.',
        example: null,
      }),
    senderActorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the sender actor. This is used to distinguish the sender within the channel integration.',
        example: null,
      }),
  })
  .openapi({ required: ['deliveryIdentifier'], example: null })
  .openapi('ChannelIntegrationParticipant')

const ChannelIntegrationMessageEggSchema = z
  .object({
    associateWithContactId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The ID of the contact with which this message should be associated.',
        example: null,
      }),
    attachments: z
      .array(
        z
          .xor([
            FileAttachmentSchema,
            LocationAttachmentSchema,
            ContactAttachmentSchema,
            UnsupportedContentAttachmentSchema,
            MessageHeaderAttachmentSchema,
            QuickRepliesAttachmentSchema,
            SocialMetadataIntegrationAttachmentSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments included with the message, which can be files, locations, contacts, or other supported types.',
        example: null,
      }),
    channelAccountId: z
      .string()
      .openapi({
        description: 'The ID of the channel account through which the message is sent.',
        example: null,
      }),
    inReplyToId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the message this message is replying to.',
        example: null,
      }),
    integrationIdempotencyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier to ensure idempotency of the message within the integration.',
        example: null,
      }),
    integrationThreadId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the thread within the integration.',
        example: null,
      }),
    messageDirection: z
      .enum(['INCOMING', 'OUTGOING'])
      .openapi({
        description:
          "The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.",
        example: null,
      }),
    preResolvedContacts: PreResolvedContactsSchema.exactOptional(),
    recipients: z
      .array(ChannelIntegrationParticipantSchema)
      .openapi({
        description: 'An array of participants representing the recipients of the message.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The rich text content of the message, allowing for formatting.',
        example: null,
      }),
    senders: z
      .array(ChannelIntegrationParticipantSchema)
      .openapi({
        description: 'An array of participants representing the senders of the message.',
        example: null,
      }),
    text: z
      .string()
      .openapi({ description: 'The plain text content of the message.', example: null }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the message was created, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'attachments',
      'channelAccountId',
      'messageDirection',
      'recipients',
      'senders',
      'text',
      'timestamp',
    ],
    example: null,
  })
  .openapi('ChannelIntegrationMessageEgg')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A paging cursor token for retrieving subsequent pages.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL that can be used to retrieve the next page results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token indicating the position before the current page in the pagination sequence.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that can be used to access the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const PublicChannelAccountSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is currently active.',
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the channel account was archived, in ISO 8601 format.',
        example: null,
      }),
    authorized: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is authorized.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the channel to which this account belongs, represented as a string.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the channel account was created, in ISO 8601 format.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this channel account, represented as a string.',
        example: null,
      }),
    inboxId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the inbox associated with this channel account, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the channel account, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'active',
      'archived',
      'authorized',
      'channelId',
      'createdAt',
      'id',
      'inboxId',
      'name',
    ],
    example: null,
  })
  .openapi('PublicChannelAccount')

const CollectionResponseWithTotalPublicChannelAccountSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicChannelAccountSchema)
      .openapi({
        description:
          'An array of PublicChannelAccount objects, each representing a public channel account with its details.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'An integer representing the total number of public channel accounts available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicChannelAccount')

const PublicChannelIntegrationChannelSchema = z
  .object({
    capabilities: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'An object detailing the capabilities of the channel, with additional properties as objects.',
        example: null,
      }),
    channelAccountConnectionRedirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the URL used to redirect for channel account connection.',
        example: null,
      }),
    channelDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string providing a description of the channel.', example: null }),
    channelLogoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "A string representing the URL of the channel's logo.",
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the channel was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'A string that uniquely identifies the channel.', example: null }),
    name: z
      .string()
      .openapi({ description: 'A string representing the name of the channel.', example: null }),
    webhookUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL to which webhook events will be sent.',
        example: null,
      }),
  })
  .openapi({ required: ['capabilities', 'createdAt', 'id', 'name'], example: null })
  .openapi('PublicChannelIntegrationChannel')

const CollectionResponseWithTotalPublicChannelIntegrationChannelSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicChannelIntegrationChannelSchema)
      .openapi({
        description:
          'An array of public channel integration channels. Each item in the array is a PublicChannelIntegrationChannel object.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'The total number of public channel integration channels available. This is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicChannelIntegrationChannel')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicChannelAccountEggSchema = z
  .object({
    authorized: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is authorized.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    inboxId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the inbox associated with this channel account. It is a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the channel account. It is a string.', example: null }),
  })
  .openapi({ required: ['authorized', 'inboxId', 'name'], example: null })
  .openapi('PublicChannelAccountEgg')

const PublicChannelAccountStagingTokenSchema = z
  .object({
    accountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the account.', example: null }),
    accountToken: z
      .string()
      .openapi({
        description: 'A string representing the unique token for the account.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the token was created, in ISO 8601 format.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    genericChannelId: z
      .int32()
      .openapi({
        description: 'An integer representing the unique identifier of the generic channel.',
        example: null,
      }),
    inboxId: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the inbox associated with the account.',
        example: null,
      }),
    userId: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the user associated with the account.',
        example: null,
      }),
  })
  .openapi({
    required: ['accountToken', 'createdAt', 'genericChannelId', 'inboxId', 'userId'],
    example: null,
  })
  .openapi('PublicChannelAccountStagingToken')

const PublicChannelAccountStagingTokenUpdateRequestSchema = z
  .object({
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the name of the account associated with the staging token.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicChannelAccountStagingTokenUpdateRequest')

const PublicChannelAccountUpdateRequestSchema = z
  .object({
    authorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the channel account is authorized.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the name of the channel account.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicChannelAccountUpdateRequest')

const PublicChannelIntegrationChannelCreateSchema = z
  .object({
    capabilities: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'An object that defines the capabilities of the channel, with additional properties as key-value pairs.',
        example: null,
      }),
    channelAccountConnectionRedirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the URL to which users will be redirected to connect their channel account.',
        example: null,
      }),
    channelDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string providing a description of the channel.', example: null }),
    channelLogoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "A string representing the URL of the channel's logo.",
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'A string representing the name of the channel.', example: null }),
    webhookUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL to which webhook events will be sent.',
        example: null,
      }),
  })
  .openapi({ required: ['capabilities', 'name'], example: null })
  .openapi('PublicChannelIntegrationChannelCreate')

const PublicChannelIntegrationChannelPatchSchema = z
  .object({
    capabilities: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'An object that defines the capabilities of the channel. This can include various properties that describe what the channel can do.',
        example: null,
      }),
    channelAccountConnectionRedirectUrl: z
      .object({})
      .openapi({
        description:
          'An object representing the URL used to redirect for channel account connection.',
        example: null,
      }),
    channelDescription: z
      .object({})
      .openapi({
        description: 'An object containing the description of the channel.',
        example: null,
      }),
    channelLogoUrl: z
      .object({})
      .openapi({
        description: "An object representing the URL of the channel's logo.",
        example: null,
      }),
    name: z
      .object({})
      .openapi({ description: 'An object representing the name of the channel.', example: null }),
    webhookUrl: z
      .object({})
      .openapi({
        description: 'An object representing the URL for the webhook associated with the channel.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'capabilities',
      'channelAccountConnectionRedirectUrl',
      'channelDescription',
      'channelLogoUrl',
      'name',
      'webhookUrl',
    ],
    example: null,
  })
  .openapi('PublicChannelIntegrationChannelPatch')

const PublicChannelIntegrationMessageUpdateRequestSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing an error message, if applicable.',
        example: null,
      }),
    statusType: z
      .enum(['FAILED', 'READ', 'SENT'])
      .openapi({ description: 'Valid status are SENT, FAILED, and READ', example: null }),
  })
  .openapi({ required: ['statusType'], example: null })
  .openapi('PublicChannelIntegrationMessageUpdateRequest')

const PublicClientSchema = z
  .object({
    clientType: z
      .enum(['HUBSPOT', 'INTEGRATION', 'SYSTEM', 'UNKNOWN'])
      .openapi({
        description:
          "The type of client interacting with the API. Valid values include 'HUBSPOT', 'SYSTEM', 'INTEGRATION', and 'UNKNOWN'.",
        example: null,
      }),
    integrationAppId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the integration application associated with this client. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['clientType'], example: null })
  .openapi('PublicClient')

const PublicContactSchema = z
  .object({
    contactProfile: ContactProfileSchema,
    type: z
      .literal('CONTACT')
      .default('CONTACT')
      .openapi({
        description:
          "A string indicating the type of the component, which is 'CONTACT' by default.",
        example: null,
      }),
  })
  .openapi({
    title: 'CONTACT',
    required: ['contactProfile', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicContact')

const PublicFileSchema = z
  .object({
    fileId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the file.',
        example: null,
      }),
    fileUsageType: z
      .enum(['AUDIO', 'IMAGE', 'OTHER', 'STICKER', 'VOICE_RECORDING'])
      .openapi({
        description:
          "A string specifying the usage type of the file, which can be 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', or 'OTHER'.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string containing the name of the file.', example: null }),
    type: z
      .literal('FILE')
      .default('FILE')
      .openapi({
        description: "A string indicating the type of the attachment, which is always 'FILE'.",
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL where the file can be accessed.',
        example: null,
      }),
  })
  .openapi({
    title: 'FILE',
    required: ['fileId', 'fileUsageType', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFile')

const PublicLocationSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the address of the location.',
        example: null,
      }),
    latitude: z
      .number()
      .openapi({
        description: 'A number representing the latitude of the location.',
        example: null,
      }),
    longitude: z
      .number()
      .openapi({
        description: 'A number representing the longitude of the location.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the location.', example: null }),
    type: z
      .literal('LOCATION')
      .default('LOCATION')
      .openapi({
        description: "A string that specifies the type of the component, which is 'LOCATION'.",
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a URL associated with the location.',
        example: null,
      }),
  })
  .openapi({
    title: 'LOCATION',
    required: ['latitude', 'longitude', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicLocation')

const PublicUnsupportedContentSchema = z
  .object({
    type: z
      .literal('UNSUPPORTED_CONTENT')
      .default('UNSUPPORTED_CONTENT')
      .openapi({
        description:
          "A string that specifies the type of unsupported content. The default and only valid value is 'UNSUPPORTED_CONTENT'.",
        example: null,
      }),
  })
  .openapi({
    title: 'UNSUPPORTED_CONTENT',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicUnsupportedContent')

const PublicMessageHeaderSchema = z
  .object({
    fileId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the ID of an associated file, formatted as an int64.',
        example: null,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the text content of the message header.',
        example: null,
      }),
    type: z
      .literal('MESSAGE_HEADER')
      .default('MESSAGE_HEADER')
      .openapi({
        description:
          "A string indicating the type of message header. The default and only valid value is 'MESSAGE_HEADER'.",
        example: null,
      }),
  })
  .openapi({
    title: 'MESSAGE_HEADER',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicMessageHeader')

const PublicQuickRepliesSchema = z
  .object({
    allowMultiSelect: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether multiple quick replies can be selected by the user.',
        example: null,
      }),
    allowUserInput: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the user is allowed to input their own response in addition to selecting from the quick replies.',
        example: null,
      }),
    quickReplies: z
      .array(QuickReplySchema)
      .openapi({
        description:
          'An array of QuickReply objects, each representing a single quick reply option available to the user.',
        example: null,
      }),
    type: z
      .literal('QUICK_REPLIES')
      .default('QUICK_REPLIES')
      .openapi({
        description: "A string indicating the type of the component, which is 'QUICK_REPLIES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'QUICK_REPLIES',
    required: ['allowMultiSelect', 'allowUserInput', 'quickReplies', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicQuickReplies')

const PublicWhatsAppTemplateMetadataSchema = z
  .object({
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer representing the content ID associated with the template. This is a 64-bit integer.',
        example: null,
      }),
    crmObjectIds: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'An object mapping CRM object types to their respective IDs, where each ID is a 64-bit integer.',
        example: null,
      }),
    mappedTemplateId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer representing the ID of the mapped template. This is a 64-bit integer.',
        example: null,
      }),
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs of parameters used for template customization, where each value is a string.',
        example: null,
      }),
    rootMicId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer representing the root message interaction context ID. This is a 64-bit integer.',
        example: null,
      }),
    type: z
      .literal('WHATSAPP_TEMPLATE_METADATA')
      .default('WHATSAPP_TEMPLATE_METADATA')
      .openapi({
        description:
          "A string indicating the type of metadata, which is 'WHATSAPP_TEMPLATE_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'WHATSAPP_TEMPLATE_METADATA',
    required: ['crmObjectIds', 'parameters', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicWhatsAppTemplateMetadata')

const PublicSocialMetadataAttachmentSchema = z
  .object({
    socialMetadata: SocialMetadataSchema,
    type: z
      .literal('SOCIAL_MEDIA_METADATA')
      .default('SOCIAL_MEDIA_METADATA')
      .openapi({
        description:
          "A string indicating the type of attachment, which is 'SOCIAL_MEDIA_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SOCIAL_MEDIA_METADATA',
    required: ['socialMetadata', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSocialMetadataAttachment')

const PublicRecipientSchema = z
  .object({
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the actor associated with the recipient.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the recipient.', example: null }),
    recipientField: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a specific field related to the recipient.',
        example: null,
      }),
  })
  .openapi({ required: ['deliveryIdentifier'], example: null })
  .openapi('PublicRecipient')

const PublicSenderSchema = z
  .object({
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the sender, represented as a string.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the sender, represented as a string.', example: null }),
    senderField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string field associated with the sender, its specific use is not detailed in the spec.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicSender')

const PublicMessageFailureDetailsSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing a human-readable description of the error that occurred during message delivery.',
        example: null,
      }),
    errorMessageTokens: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where each key is a token name and each value is a string. These tokens provide additional context or details related to the error message.',
        example: null,
      }),
  })
  .openapi({ required: ['errorMessageTokens'], example: null })
  .openapi('PublicMessageFailureDetails')

const PublicMessageStatusSchema = z
  .object({
    failureDetails: PublicMessageFailureDetailsSchema.exactOptional(),
    statusType: z
      .enum(['FAILED', 'READ', 'RECEIVED', 'SENT'])
      .openapi({
        description:
          "The current status of the message. Valid values include 'SENT', 'FAILED', 'RECEIVED', and 'READ'.",
        example: null,
      }),
  })
  .openapi({ required: ['statusType'], example: null })
  .openapi('PublicMessageStatus')

const PublicConversationsMessageSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the message is archived.',
        example: null,
      }),
    attachments: z
      .array(
        z
          .xor([
            PublicFileSchema,
            PublicLocationSchema,
            PublicContactSchema,
            PublicUnsupportedContentSchema,
            PublicMessageHeaderSchema,
            PublicQuickRepliesSchema,
            PublicWhatsAppTemplateMetadataSchema,
            PublicSocialMetadataAttachmentSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments included with the message, which can be files, locations, contacts, or other supported types.',
        example: null,
      }),
    channelAccountId: z
      .string()
      .openapi({
        description: 'The identifier of the channel account associated with the message.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description: 'The identifier of the channel through which the message was sent.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description: 'The identifier for the conversation thread to which this message belongs.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the message was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the user or system that created the message.',
        example: null,
      }),
    direction: z
      .enum(['INCOMING', 'OUTGOING'])
      .openapi({
        description: "The direction of the message, either 'INCOMING' or 'OUTGOING'.",
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the message.', example: null }),
    inReplyToId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the message to which this message is a reply, if applicable.',
        example: null,
      }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description: 'An array of recipients of the message, each containing recipient details.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The rich text content of the message, if available.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description:
          'An array of senders associated with the message, each containing sender details.',
        example: null,
      }),
    status: PublicMessageStatusSchema.exactOptional(),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the message, if applicable.', example: null }),
    text: z
      .string()
      .openapi({ description: 'The plain text content of the message.', example: null }),
    truncationStatus: z
      .enum(['NOT_TRUNCATED', 'TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY'])
      .openapi({
        description:
          "Indicates whether the message content is truncated. Valid values are 'NOT_TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY', and 'TRUNCATED'.",
        example: null,
      }),
    type: z
      .literal('MESSAGE')
      .default('MESSAGE')
      .openapi({
        description: "The type of the message, which is always 'MESSAGE'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the message was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'attachments',
      'channelAccountId',
      'channelId',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'direction',
      'id',
      'recipients',
      'senders',
      'text',
      'truncationStatus',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicConversationsMessage')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'conversations.custom_channels.read': '',
        'conversations.custom_channels.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getConversationsCustomChannels202609Route = createRoute({
  method: 'get',
  path: '/conversations/custom-channels/2026-09',
  tags: ['Basic'],
  summary: 'List Channels',
  description:
    'Retrieve a list of custom conversation channels for the specified version. This endpoint allows you to paginate through the results and sort them according to your preferences.',
  operationId: 'get-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      defaultPageLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultPageLength',
            in: 'query',
            description: 'The default number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'An array of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicChannelIntegrationChannelSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postConversationsCustomChannels202609Route = createRoute({
  method: 'post',
  path: '/conversations/custom-channels/2026-09',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a new custom channel integration in your HubSpot account. This endpoint allows you to define the capabilities and properties of the custom channel, such as its name, description, and webhook URL. The request must include a JSON body with the necessary details for the new channel integration.',
  operationId: 'post-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3',
  request: {
    body: {
      content: {
        'application/json': { schema: PublicChannelIntegrationChannelCreateSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicChannelIntegrationChannelSchema, example: null },
      },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getConversationsCustomChannels202609ChannelIdRoute = createRoute({
  method: 'get',
  path: '/conversations/custom-channels/2026-09/{channelId}',
  tags: ['Channels'],
  summary: 'Get a custom channel',
  description:
    "Retrieve the details about a custom channel. This API allows you to see a custom channel's current capabilties and other configuration metadata",
  operationId: 'get-/conversations/custom-channels/2026-09/{channelId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description:
              'The unique identifier of the custom channel to retrieve. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicChannelIntegrationChannelSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteConversationsCustomChannels202609ChannelIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/custom-channels/2026-09/{channelId}',
  tags: ['Channels'],
  summary: 'Archive a custom channel',
  description: 'Archive an existing registered custom channel',
  operationId: 'delete-/conversations/custom-channels/2026-09/{channelId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description: 'The unique identifier of the custom channel to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})

export const patchConversationsCustomChannels202609ChannelIdRoute = createRoute({
  method: 'patch',
  path: '/conversations/custom-channels/2026-09/{channelId}',
  tags: ['Channels'],
  summary: 'Update a custom channel',
  description:
    "Update the capabilities for an existing. You can also use it to update the channel's webhookUri and its channelAccountConnectionRedirectUrl.",
  operationId: 'patch-/conversations/custom-channels/2026-09/{channelId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description: 'The unique identifier of the custom channel to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PublicChannelIntegrationChannelPatchSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicChannelIntegrationChannelSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute =
  createRoute({
    method: 'patch',
    path: '/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}',
    tags: ['Channel accounts'],
    summary: 'Update a channel account staging token',
    description:
      "Update a channel account staging token's account name and delivery identifier. This information will be applied to the channel account created from this staging token. This is used for public apps.",
    operationId:
      'patch-/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}',
    request: {
      params: z.object({
        accountToken: z
          .string()
          .openapi({
            param: {
              name: 'accountToken',
              in: 'path',
              description: 'The unique token of the channel account staging to be updated.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        channelId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'channelId',
              in: 'path',
              description: 'The unique identifier of the custom conversation channel.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: PublicChannelAccountStagingTokenUpdateRequestSchema,
            example: null,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicChannelAccountStagingTokenSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [
      { oauth2: ['conversations.custom_channels.read'] },
      { oauth2: ['conversations.custom_channels.write'] },
    ],
  })

export const getConversationsCustomChannels202609ChannelIdChannelAccountsRoute = createRoute({
  method: 'get',
  path: '/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
  tags: ['Channel accounts'],
  summary: 'Get accounts for a channel',
  description: 'Retrieve a list of accounts for a custom channel.',
  operationId: 'get-/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description: 'The unique identifier of the channel for which to list the accounts.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      defaultPageLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultPageLength',
            in: 'query',
            description: 'The default number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      deliveryIdentifierType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'HS_EMAIL_ADDRESS',
                'HS_PHONE_NUMBER',
                'HS_SHORT_CODE',
                'CHANNEL_SPECIFIC_OPAQUE_ID',
              ])
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deliveryIdentifierType',
            in: 'query',
            description:
              'An array of delivery identifier types to filter the results. Valid values include HS_EMAIL_ADDRESS, HS_PHONE_NUMBER, HS_SHORT_CODE, and CHANNEL_SPECIFIC_OPAQUE_ID.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: {
                type: 'string',
                example: null,
                enum: [
                  'HS_EMAIL_ADDRESS',
                  'HS_PHONE_NUMBER',
                  'HS_SHORT_CODE',
                  'CHANNEL_SPECIFIC_OPAQUE_ID',
                ],
              },
            },
          },
          example: null,
        }),
      deliveryIdentifierValue: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deliveryIdentifierValue',
            in: 'query',
            description: 'An array of delivery identifier values to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'An array specifying the sort order of the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicChannelAccountSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['conversations.custom_channels.read'] },
    { oauth2: ['conversations.custom_channels.write'] },
  ],
})

export const postConversationsCustomChannels202609ChannelIdChannelAccountsRoute = createRoute({
  method: 'post',
  path: '/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
  tags: ['Channel accounts'],
  summary: 'Create a channel account',
  description:
    'Create a new account for a channel. Multiple accounts can communicate over a single channel using different delivery identifiers.',
  operationId: 'post-/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description:
              'The unique identifier of the custom channel for which the channel account is being created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicChannelAccountEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicChannelAccountSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['conversations.custom_channels.read'] },
    { oauth2: ['conversations.custom_channels.write'] },
  ],
})

export const getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute =
  createRoute({
    method: 'get',
    path: '/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
    tags: ['Channels'],
    summary: 'Get a channel account by id',
    description:
      'Retrieve the details for a specific channel account. This contains all the metadata about your channel account, including its channel, associated inbox id, and delivery identifier information.',
    operationId:
      'get-/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
    request: {
      params: z.object({
        channelAccountId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'channelAccountId',
              in: 'path',
              description: 'The unique identifier of the channel account to retrieve.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        channelId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'channelId',
              in: 'path',
              description: 'The unique identifier of the custom channel.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        archived: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'archived',
              in: 'query',
              description: 'Whether to return only results that have been archived.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'boolean', example: null, default: false },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PublicChannelAccountSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [
      { oauth2: ['conversations.custom_channels.read'] },
      { oauth2: ['conversations.custom_channels.write'] },
    ],
  })

export const patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute =
  createRoute({
    method: 'patch',
    path: '/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
    tags: ['Channel accounts'],
    summary: 'Update a channel account',
    description:
      "This API is used to update the name of the channel account and it's isAuthorized status. Setting to isAuthorized flag to False disables the channel account.",
    operationId:
      'patch-/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
    request: {
      params: z.object({
        channelAccountId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'channelAccountId',
              in: 'path',
              description: 'The unique identifier of the channel account to update.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        channelId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'channelId',
              in: 'path',
              description:
                'The unique identifier of the custom channel to which the account belongs.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PublicChannelAccountUpdateRequestSchema, example: null },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PublicChannelAccountSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [
      { oauth2: ['conversations.custom_channels.read'] },
      { oauth2: ['conversations.custom_channels.write'] },
    ],
  })

export const postConversationsCustomChannels202609ChannelIdMessagesRoute = createRoute({
  method: 'post',
  path: '/conversations/custom-channels/2026-09/{channelId}/messages',
  tags: ['Messages'],
  summary: 'Publish a message',
  description: 'Publish a message over your custom channel',
  operationId: 'post-/conversations/custom-channels/2026-09/{channelId}/messages',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description:
              'The unique identifier of the custom channel where the message will be created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ChannelIntegrationMessageEggSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicConversationsMessageSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.custom_channels.write'] }],
})

export const getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
  tags: ['Messages'],
  summary: 'Get a message',
  description: 'Get the details for a specific message sent over a custom channel',
  operationId: 'get-/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description:
              'The unique identifier of the custom channel from which the message is to be retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'The unique identifier of the message to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicConversationsMessageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.custom_channels.read'] }],
})

export const patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute = createRoute({
  method: 'patch',
  path: '/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
  tags: ['Messages'],
  summary: 'Update a message ',
  description:
    "Update a message's status to indicate if it was successfully sent, failed to send, or was read. For failed messages, this can also include the error message for the failure.",
  operationId: 'patch-/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description: 'The unique identifier of the custom channel that contains the message.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'The unique identifier of the message to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PublicChannelIntegrationMessageUpdateRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicConversationsMessageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.custom_channels.write'] }],
})
