import { createRoute, z } from '@hono/zod-openapi'

const RequestErrorSchema = z
  .object({
    field: z.string().exactOptional(),
    message: z.string().exactOptional(),
    code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestError')

const BadRequestErrorSchema = z
  .object({
    description: z.string().exactOptional(),
    errors: z.array(RequestErrorSchema).exactOptional(),
  })
  .openapi({ title: 'data', required: [] })
  .openapi('BadRequestError')

const GenericIdSchema = z
  .object({ id: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('GenericId')

const CannedResponseSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'ID of the canned response' }),
    account_id: z.int().exactOptional().openapi({ description: 'Account Id' }),
    short_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short Code for quick access of the canned response' }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message content for canned response' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the canned response was created' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the canned response was updated' }),
  })
  .openapi({ required: [] })
  .openapi('CannedResponse')

const CustomAttributeSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Identifier' }),
    attribute_display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute display name' }),
    attribute_display_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Attribute display type (text, number, currency, percent, link, date, list, checkbox)',
      }),
    attribute_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute description' }),
    attribute_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute unique key value' }),
    regex_pattern: z.string().exactOptional().openapi({ description: 'Regex pattern' }),
    regex_cue: z.string().exactOptional().openapi({ description: 'Regex cue' }),
    attribute_values: z.string().exactOptional().openapi({ description: 'Attribute values' }),
    attribute_model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute type(conversation_attribute/contact_attribute)' }),
    default_value: z.string().exactOptional().openapi({ description: 'Attribute default value' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the custom attribute was created' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the custom attribute was updated' }),
  })
  .openapi({ required: [] })
  .openapi('CustomAttribute')

const AutomationRuleItemSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'The ID of the automation rule' }),
    account_id: z.int().exactOptional().openapi({ description: 'Account Id' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the rule',
        example: 'Add label on message create event',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description to give more context about the rule',
        example:
          'Add label support and sales on message create event if incoming message content contains text help',
      }),
    event_name: z
      .enum(['conversation_created', 'conversation_updated', 'message_created'])
      .exactOptional()
      .openapi({
        description:
          'Automation Rule event, on which we call the actions(conversation_created, conversation_updated, message_created)',
        example: 'message_created',
      }),
    conditions: z
      .array(
        z
          .object({
            values: z.array(z.string()).exactOptional(),
            attribute_key: z.string().exactOptional(),
            query_operator: z.string().exactOptional(),
            filter_operator: z.string().exactOptional(),
          })
          .openapi({
            example: {
              attribute_key: 'content',
              filter_operator: 'contains',
              values: ['help'],
              query_operator: 'and',
            },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Array of conditions on which conversation/message filter would work',
      }),
    actions: z
      .array(
        z
          .object({
            action_name: z.string().exactOptional(),
            action_params: z.array(z.string()).exactOptional(),
          })
          .openapi({
            example: { action_name: 'add_label', action_params: ['support', 'sales'] },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Array of actions which we perform when condition matches' }),
    created_on: z
      .int()
      .exactOptional()
      .openapi({ description: 'The timestamp when the rule was created' }),
    active: z.boolean().exactOptional().openapi({ description: 'Enable/disable automation rule' }),
  })
  .openapi({ required: [] })
  .openapi('AutomationRuleItem')

const AutomationRuleSchema = z
  .object({
    payload: z
      .xor([
        z
          .array(AutomationRuleItemSchema)
          .openapi({ description: 'Array of automation rules (for listing endpoint)' }),
        AutomationRuleItemSchema.openapi({
          description: 'Single automation rule (for show/create/update endpoints)',
        }),
      ])
      .exactOptional()
      .openapi({ description: 'Response payload that contains automation rule(s)' }),
  })
  .openapi({ required: [] })
  .openapi('AutomationRule')

const PortalConfigSchema = z
  .object({
    allowed_locales: z
      .array(
        z
          .object({
            code: z.string().exactOptional().openapi({ description: 'The language code' }),
            articles_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of articles in this locale' }),
            categories_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of categories in this locale' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of allowed locales for the portal' }),
  })
  .openapi({ description: 'Configuration settings for the portal', required: [] })
  .openapi('PortalConfig')

const InboxSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'ID of the inbox' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the inbox' }),
    website_url: z.string().nullable().exactOptional().openapi({ description: 'Website URL' }),
    page_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Facebook Page ID associated with the inbox' }),
    instagram_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Instagram account ID associated with the inbox' }),
    business_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'TikTok business ID associated with the inbox' }),
    provider_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provider username or page name associated with the social inbox' }),
    profile_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'X profile ID associated with the inbox' }),
    line_channel_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'LINE channel ID associated with the inbox' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Email address associated with the inbox' }),
    bot_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Telegram bot name associated with the inbox' }),
    inbox_identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Public identifier associated with an API inbox' }),
    channel_type: z.string().exactOptional().openapi({ description: 'The type of the inbox' }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The avatar image of the inbox' }),
    widget_color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Widget Color used for customization of the widget' }),
    website_token: z.string().nullable().exactOptional().openapi({ description: 'Website Token' }),
    enable_auto_assignment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag which shows whether Auto Assignment is enabled or not' }),
    web_widget_script: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Script used to load the website widget' }),
    welcome_title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Welcome title to be displayed on the widget' }),
    welcome_tagline: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Welcome tagline to be displayed on the widget' }),
    greeting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag which shows whether greeting is enabled' }),
    greeting_message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A greeting message when the user starts the conversation' }),
    channel_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'ID of the channel this inbox belongs to' }),
    working_hours_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag which shows whether working hours feature is enabled' }),
    enable_email_collect: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag to enable collecting email from contacts' }),
    csat_survey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag to enable CSAT survey' }),
    auto_assignment_config: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Configuration settings for auto assignment' }),
    out_of_office_message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Message to show when agents are out of office' }),
    working_hours: z
      .array(
        z
          .object({
            day_of_week: z
              .number()
              .exactOptional()
              .openapi({ description: 'Day of the week (0-6, where 0 is Sunday)' }),
            closed_all_day: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the inbox is closed for the entire day' }),
            open_hour: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Hour when inbox opens (0-23)' }),
            open_minutes: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Minutes of the hour when inbox opens (0-59)' }),
            close_hour: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Hour when inbox closes (0-23)' }),
            close_minutes: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Minutes of the hour when inbox closes (0-59)' }),
            open_all_day: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the inbox is open for the entire day' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Configuration for working hours of the inbox' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timezone configuration for the inbox' }),
    callback_webhook_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Webhook URL for callbacks' }),
    allow_messages_after_resolved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to allow messages after a conversation is resolved' }),
    lock_to_single_conversation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to lock a contact to a single conversation' }),
    sender_name_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of sender name to display (e.g., friendly)' }),
    business_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Business name associated with the inbox' }),
    branded_email_layout: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Liquid HTML layout for branded email replies. Available to administrators for Email inbox show/update responses.',
      }),
    hmac_mandatory: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether HMAC verification is mandatory' }),
    selected_feature_flags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Selected feature flags for the inbox' }),
    reply_time: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expected reply time' }),
    messaging_service_sid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Messaging service SID for SMS providers' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Phone number associated with the inbox' }),
    medium: z
      .string()
      .exactOptional()
      .openapi({ description: 'Medium of communication (e.g., sms, email)' }),
    provider: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provider of the channel' }),
  })
  .openapi({ required: [] })
  .openapi('Inbox')

const PortalLogoSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'ID of the logo file' }),
    portal_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the portal this logo belongs to' }),
    file_type: z.string().exactOptional().openapi({ description: 'MIME type of the file' }),
    account_id: z.int().exactOptional().openapi({ description: 'ID of the account' }),
    file_url: z.string().exactOptional().openapi({ description: 'URL to access the logo file' }),
    blob_id: z.int().exactOptional().openapi({ description: 'ID of the blob' }),
    filename: z.string().exactOptional().openapi({ description: 'Name of the file' }),
  })
  .openapi({ required: [] })
  .openapi('PortalLogo')

const PortalMetaSchema = z
  .object({
    all_articles_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of articles' }),
    archived_articles_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of archived articles' }),
    published_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of published articles' }),
    draft_articles_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of draft articles' }),
    categories_count: z.int().exactOptional().openapi({ description: 'Number of categories' }),
    default_locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default locale for the portal' }),
  })
  .openapi({ required: [] })
  .openapi('PortalMeta')

const PortalItemSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'The ID of the portal' }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the portal is archived' }),
    color: z.string().exactOptional().openapi({ description: 'The color code for the portal' }),
    config: PortalConfigSchema.exactOptional(),
    custom_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom domain for the portal' }),
    header_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header text for the portal' }),
    homepage_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Homepage link for the portal' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the portal' }),
    slug: z.string().exactOptional().openapi({ description: 'URL slug for the portal' }),
    page_title: z.string().exactOptional().openapi({ description: 'Page title for the portal' }),
    account_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the account the portal belongs to' }),
    inbox: InboxSchema.exactOptional(),
    logo: PortalLogoSchema.exactOptional(),
    meta: PortalMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortalItem')

const PortalSchema = z
  .object({ payload: z.array(PortalItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Portal')

const PortalSingleSchema = z
  .object({ payload: PortalItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PortalSingle')

const CategorySchema = z
  .object({
    id: z.int().exactOptional(),
    description: z.string().exactOptional().openapi({ description: 'The text content.' }),
    locale: z.string().exactOptional(),
    name: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    position: z.int().exactOptional(),
    portal_id: z.int().exactOptional(),
    account_id: z.int().exactOptional(),
    associated_category_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To associate similar categories to each other, e.g same category of product documentation in different languages',
      }),
    parent_category_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Category')

const ArticleSchema = z
  .object({
    id: z.int().exactOptional(),
    content: z.string().exactOptional().openapi({ description: 'The text content.' }),
    meta: z.object({}).exactOptional(),
    position: z.int().exactOptional(),
    status: z
      .union([z.literal('draft'), z.literal('published'), z.literal('archived')])
      .exactOptional(),
    title: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    views: z.int().exactOptional(),
    portal_id: z.int().exactOptional(),
    account_id: z.int().exactOptional(),
    author_id: z.int().exactOptional(),
    category_id: z.int().exactOptional(),
    folder_id: z.int().exactOptional(),
    associated_article_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To associate similar articles to each other, e.g to provide the link for the reference.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Article')

const InboxContactSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'ID of the inbox' }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The avatar image of the inbox' }),
    channel_id: z.number().exactOptional().openapi({ description: 'The ID of the channel' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the inbox' }),
    channel_type: z.string().exactOptional().openapi({ description: 'The type of the inbox' }),
    provider: z.string().exactOptional().openapi({ description: 'The provider of the inbox' }),
  })
  .openapi({ required: [] })
  .openapi('InboxContact')

const ContactInboxesSchema = z
  .object({
    source_id: z.string().exactOptional().openapi({ description: 'Contact Inbox Source Id' }),
    inbox: InboxContactSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactInboxes')

const ContactSchema = z
  .object({
    payload: z
      .array(
        z
          .object({
            additional_attributes: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'The object containing additional attributes related to the contact',
              }),
            availability_status: z
              .string()
              .exactOptional()
              .openapi({ description: 'The availability status of the contact' }),
            email: z
              .string()
              .exactOptional()
              .openapi({ description: 'The email address of the contact' }),
            id: z.int().exactOptional().openapi({ description: 'The ID of the contact' }),
            name: z.string().exactOptional().openapi({ description: 'The name of the contact' }),
            phone_number: z
              .string()
              .exactOptional()
              .openapi({ description: 'The phone number of the contact' }),
            blocked: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the contact is blocked' }),
            identifier: z
              .string()
              .exactOptional()
              .openapi({ description: 'The identifier of the contact' }),
            thumbnail: z
              .string()
              .exactOptional()
              .openapi({ description: 'The thumbnail of the contact' }),
            custom_attributes: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'The custom attributes of the contact',
                example: { attribute_key: 'attribute_value', signed_up_at: 'dd/mm/yyyy' },
              }),
            last_activity_at: z
              .int()
              .exactOptional()
              .openapi({ description: 'The last activity at of the contact' }),
            created_at: z
              .int()
              .exactOptional()
              .openapi({ description: 'The created at of the contact' }),
            contact_inboxes: z.array(ContactInboxesSchema).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Contact')

const MessageSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the message' }),
    content: z.string().exactOptional().openapi({ description: 'The text content of the message' }),
    account_id: z.number().exactOptional().openapi({ description: 'The ID of the account' }),
    inbox_id: z.number().exactOptional().openapi({ description: 'The ID of the inbox' }),
    conversation_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The ID of the conversation' }),
    message_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: 'The type of the message' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'The time at which message was created' }),
    updated_at: z
      .union([z.int(), z.string()])
      .exactOptional()
      .openapi({ description: 'The time at which message was updated' }),
    private: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flags which shows whether the message is private or not' }),
    status: z
      .union([
        z.literal('sent'),
        z.literal('delivered'),
        z.literal('read'),
        z.literal('failed'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The status of the message' }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The source ID of the message' }),
    content_type: z
      .union([
        z.literal('text'),
        z.literal('input_text'),
        z.literal('input_textarea'),
        z.literal('input_email'),
        z.literal('input_select'),
        z.literal('cards'),
        z.literal('form'),
        z.literal('article'),
        z.literal('incoming_email'),
        z.literal('input_csat'),
        z.literal('integrations'),
        z.literal('sticker'),
        z.literal('voice_call'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of the template message' }),
    content_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The content attributes for each content_type' }),
    sender_type: z
      .union([
        z.literal('Contact'),
        z.literal('User'),
        z.literal('AgentBot'),
        z.literal('Captain::Assistant'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of the sender' }),
    sender_id: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the sender' }),
    external_source_ids: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The external source IDs of the message' }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The additional attributes of the message' }),
    processed_message_content: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The processed message content' }),
    sentiment: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The sentiment of the message' }),
    conversation: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The conversation object' }),
    attachment: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The file object attached to the image' }),
    sender: z.object({}).exactOptional().openapi({ description: 'User/Agent/AgentBot object' }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const ConversationSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'ID of the conversation' }),
    messages: z.array(MessageSchema).exactOptional(),
    account_id: z.number().exactOptional().openapi({ description: 'Account Id' }),
    uuid: z.string().exactOptional().openapi({ description: 'UUID of the conversation' }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The object containing additional attributes related to the conversation',
      }),
    agent_last_seen_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last activity at of the agent' }),
    assignee_last_seen_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last activity at of the assignee' }),
    can_reply: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the conversation can be replied to' }),
    contact_last_seen_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last activity at of the contact' }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The object to save custom attributes for conversation, accepts custom attributes key and value',
      }),
    inbox_id: z.number().exactOptional().openapi({ description: 'ID of the inbox' }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The labels of the conversation' }),
    muted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the conversation is muted' }),
    snoozed_until: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time at which the conversation will be unmuted' }),
    status: z
      .enum(['open', 'resolved', 'pending'])
      .exactOptional()
      .openapi({ description: 'The status of the conversation' }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time at which conversation was created' }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time at which conversation was updated' }),
    timestamp: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time at which conversation was created' }),
    first_reply_created_at: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time at which the first reply was created' }),
    unread_count: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of unread messages' }),
    last_non_activity_message: z
      .xor([MessageSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The last non activity message' }),
    last_activity_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last activity at of the conversation' }),
    priority: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The priority of the conversation' }),
    waiting_since: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time at which the conversation was waiting' }),
    sla_policy_id: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the SLA policy' }),
    applied_sla: z.object({}).exactOptional().openapi({ description: 'The applied SLA' }),
    sla_events: z.array(z.object({}).openapi({ description: 'SLA event objects' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Conversation')

const UserSchema = z
  .object({
    id: z.number().exactOptional(),
    access_token: z.string().exactOptional(),
    account_id: z.number().exactOptional(),
    available_name: z.string().exactOptional(),
    avatar_url: z.string().exactOptional(),
    confirmed: z.boolean().exactOptional(),
    display_name: z.string().nullable().exactOptional(),
    message_signature: z.string().nullable().exactOptional(),
    email: z.string().exactOptional(),
    hmac_identifier: z.string().exactOptional(),
    inviter_id: z.number().nullable().exactOptional(),
    name: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    pubsub_token: z.string().exactOptional(),
    role: z.enum(['agent', 'administrator']).exactOptional(),
    ui_settings: z.object({}).exactOptional(),
    uid: z.string().exactOptional(),
    type: z.string().nullable().exactOptional(),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Available for users who are created through platform APIs and has custom attributes associated.',
      }),
    accounts: z
      .array(
        z
          .object({
            id: z.number().exactOptional(),
            name: z.string().exactOptional(),
            status: z.string().exactOptional(),
            active_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
            role: z.enum(['administrator', 'agent']).exactOptional(),
            permissions: z.array(z.string()).exactOptional(),
            availability: z.string().exactOptional(),
            availability_status: z.string().exactOptional(),
            auto_offline: z.boolean().exactOptional(),
            custom_role_id: z.number().nullable().exactOptional(),
            custom_role: z.object({}).nullable().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const AgentSchema = z
  .object({
    id: z.int().exactOptional(),
    account_id: z.int().exactOptional(),
    availability_status: z
      .enum(['online', 'busy', 'offline'])
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          "The effective availability status of the agent, derived from the configured availability, auto-offline setting, and current presence. To update an agent's configured availability, use the availability field in create or update requests.",
      }),
    auto_offline: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the agent is automatically marked offline when they are away.',
      }),
    confirmed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the agent has confirmed their email address.' }),
    email: z.string().exactOptional().openapi({ description: 'The email of the agent' }),
    available_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The available name of the agent' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the agent' }),
    role: z
      .enum(['agent', 'administrator'])
      .exactOptional()
      .openapi({ description: 'The role of the agent' }),
    thumbnail: z.string().exactOptional().openapi({ description: 'The thumbnail of the agent' }),
    custom_role_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The custom role id of the agent' }),
  })
  .openapi({ required: [] })
  .openapi('Agent')

const BrandedEmailLayoutSchema = z
  .object({
    branded_email_layout: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Account-scoped Liquid HTML layout for branded email replies.',
        example: '<html><body>{{ content_for_layout }}</body></html>',
      }),
  })
  .openapi({ required: [] })
  .openapi('BrandedEmailLayout')

const AgentBotSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'ID of the agent bot' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the agent bot' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description about the agent bot' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The thumbnail of the agent bot' }),
    outgoing_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The webhook URL for the bot' }),
    bot_type: z.string().exactOptional().openapi({ description: 'The type of the bot' }),
    bot_config: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The configuration of the bot' }),
    account_id: z
      .number()
      .exactOptional()
      .openapi({ description: "Account ID if it's an account specific bot" }),
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The access token for the bot' }),
    system_bot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the bot is a system bot' }),
  })
  .openapi({ required: [] })
  .openapi('AgentBot')

const ContactableInboxesSchema = z
  .object({
    source_id: z.string().exactOptional().openapi({ description: 'Contact Inbox Source Id' }),
    inbox: InboxSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactableInboxes')

const CustomFilterSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the custom filter' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the custom filter' }),
    type: z
      .enum(['conversation', 'contact', 'report'])
      .exactOptional()
      .openapi({ description: 'The description about the custom filter' }),
    query: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A query that needs to be saved as a custom filter' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the custom filter was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the custom filter was updated' }),
  })
  .openapi({ required: [] })
  .openapi('CustomFilter')

const WebhookSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the webhook' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to which the events will be send' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the webhook' }),
    subscriptions: z
      .array(
        z.enum([
          'conversation_created',
          'conversation_status_changed',
          'conversation_updated',
          'contact_created',
          'contact_updated',
          'message_created',
          'message_updated',
          'webwidget_triggered',
          'conversation_typing_on',
          'conversation_typing_off',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The list of subscribed events' }),
    secret: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Secret used to sign webhook requests. Signed webhook deliveries include `X-Chatwoot-Timestamp` and `X-Chatwoot-Signature`; the signature is `sha256=` followed by the HMAC-SHA256 of `{timestamp}.{raw_request_body}` using this secret. Deliveries also include `X-Chatwoot-Delivery` when a delivery id is available.',
      }),
    account_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The id of the account which the webhook object belongs to' }),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const AccountSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'Account ID' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the account' }),
    role: z
      .enum(['administrator', 'agent'])
      .exactOptional()
      .openapi({ description: 'The user role in the account' }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const AccountDetailSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'Account ID' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the account' }),
    locale: z.string().exactOptional().openapi({ description: 'The locale of the account' }),
    domain: z.string().exactOptional().openapi({ description: 'The domain of the account' }),
    support_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The support email of the account' }),
    status: z.string().exactOptional().openapi({ description: 'The status of the account' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation date of the account' }),
    cache_keys: z.object({}).exactOptional().openapi({ description: 'Cache keys for the account' }),
    features: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Enabled features for the account' }),
    settings: z
      .object({
        auto_resolve_after: z
          .number()
          .exactOptional()
          .openapi({ description: 'Auto resolve conversations after specified minutes' }),
        auto_resolve_message: z
          .string()
          .exactOptional()
          .openapi({ description: 'Message to send when auto resolving' }),
        auto_resolve_ignore_waiting: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to ignore waiting conversations for auto resolve' }),
      })
      .exactOptional()
      .openapi({ description: 'Account settings', required: [] }),
    custom_attributes: z
      .object({
        plan_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Subscription plan name' }),
        subscribed_quantity: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Subscribed quantity' }),
        subscription_status: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Subscription status' }),
        subscription_ends_on: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Subscription end date' }),
        industry: z.string().exactOptional().openapi({ description: 'Industry type' }),
        company_size: z.string().exactOptional().openapi({ description: 'Company size' }),
        timezone: z.string().exactOptional().openapi({ description: 'Account timezone' }),
        logo: z.string().exactOptional().openapi({ description: 'Account logo URL' }),
        onboarding_step: z
          .string()
          .exactOptional()
          .openapi({ description: 'Current onboarding step' }),
        marked_for_deletion_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'When account was marked for deletion' }),
        marked_for_deletion_reason: z
          .string()
          .exactOptional()
          .openapi({ description: 'Reason for account deletion' }),
      })
      .exactOptional()
      .openapi({ description: 'Custom attributes of the account', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AccountDetail')

const AccountShowResponseSchema = AccountDetailSchema.and(
  z
    .object({
      latest_chatwoot_version: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'Latest version of Chatwoot available', example: '3.0.0' }),
      subscribed_features: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'List of subscribed enterprise features (if enterprise edition is enabled)',
        }),
    })
    .openapi({ required: [] }),
).openapi('AccountShowResponse')

const AccountUserSchema = z
  .array(
    z
      .object({
        account_id: z.int().exactOptional().openapi({ description: 'The ID of the account' }),
        user_id: z.int().exactOptional().openapi({ description: 'The ID of the user' }),
        role: z
          .string()
          .exactOptional()
          .openapi({ description: 'whether user is an administrator or agent' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Array of account users' })
  .openapi('AccountUser')

const PlatformAccountSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'Account ID' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the account' }),
  })
  .openapi({ required: [] })
  .openapi('PlatformAccount')

const TeamSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the team' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the team' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description about the team' }),
    allow_auto_assign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team',
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'An emoji or icon shown next to the team' }),
    icon_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color used for the team icon' }),
    account_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The ID of the account with the team is a part of' }),
    is_member: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'This field shows whether the current user is a part of the team' }),
  })
  .openapi({ required: [] })
  .openapi('Team')

const LabelSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the label' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the label' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the label' }),
    color: z.string().exactOptional().openapi({ description: 'Hex color code for the label' }),
    show_on_sidebar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the label should appear in the sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const IntegrationsAppSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the integration' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the integration' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description about the team' }),
    hook_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the integration is an account or inbox integration' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the integration is enabled for the account' }),
    allow_multiple_hooks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether multiple hooks can be created for the integration' }),
    hooks: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'If there are any hooks created for this integration' }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationsApp')

const IntegrationsHookSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the integration hook' }),
    app_id: z.string().exactOptional().openapi({ description: 'The ID of the integration app' }),
    inbox_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inbox ID if its an Inbox integration' }),
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID of the integration' }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the integration hook is enabled for the account' }),
    hook_type: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether its an account or inbox integration hook' }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The associated settings for the integration' }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationsHook')

const AuditLogSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the audit log entry' }),
    auditable_id: z.int().exactOptional().openapi({ description: 'The ID of the audited object' }),
    auditable_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the audited object (e.g., Conversation, Contact, User)',
      }),
    auditable: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The audited object data. Null for message deletion entries, which are served without the message payload.',
      }),
    associated_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the associated object (typically the account ID)' }),
    associated_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the associated object' }),
    user_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the user who performed the action' }),
    user_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of user who performed the action' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email/username of the user who performed the action' }),
    action: z
      .enum(['create', 'update', 'destroy'])
      .exactOptional()
      .openapi({ description: 'The action performed on the object' }),
    audited_changes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON object containing the changes made to the audited object' }),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'Version number of the audit log entry' }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional comment associated with the audit log entry' }),
    request_uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'UUID to identify the request that generated this audit log' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix timestamp when the audit log entry was created' }),
    remote_address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'IP address from which the action was performed. Masked to the network portion (for example 203.0.113.x) unless the account has the audit_log_ip_address feature enabled, in which case the full address is returned.',
      }),
    location: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'City and country resolved from remote_address, present only when the account has the ip_lookup feature enabled and the address has been resolved. Omitted when the account returns full IP addresses.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AuditLog')

const PublicContactSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Id of the contact' }),
    source_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The session identifier of the contact' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the contact when available' }),
    email: z.string().nullable().exactOptional().openapi({ description: 'Email of the contact' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Phone number of the contact' }),
    pubsub_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token to be used to connect to chatwoot websocket' }),
  })
  .openapi({ required: [] })
  .openapi('PublicContact')

const PublicContactRecordSchema = z
  .looseObject({
    id: z.int().exactOptional().openapi({ description: 'Id of the contact' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the contact when available' }),
    email: z.string().nullable().exactOptional().openapi({ description: 'Email of the contact' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Phone number of the contact' }),
    identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the contact' }),
    blocked: z.boolean().exactOptional().openapi({ description: 'Whether the contact is blocked' }),
    additional_attributes: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional attributes of the contact when present' }),
    custom_attributes: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom attributes of the contact when present' }),
    contact_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Contact type of the contact when available' }),
    country_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Country code of the contact' }),
    last_activity_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last activity timestamp of the contact in ISO 8601 format' }),
    created_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Created timestamp of the contact in ISO 8601 format' }),
    updated_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Updated timestamp of the contact in ISO 8601 format' }),
    last_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last name of the contact' }),
    middle_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Middle name of the contact' }),
    location: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Location of the contact' }),
    account_id: z.int().exactOptional().openapi({ description: 'Account id of the contact' }),
    company_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Company id of the contact' }),
    label_list: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Labels applied to the contact' }),
  })
  .openapi({
    description:
      'Full serialized contact record returned when the public API renders a Contact model directly.',
    required: [],
  })
  .openapi('PublicContactRecord')

const PublicMessageAttachmentSchema = z
  .looseObject({
    id: z.int().exactOptional().openapi({ description: 'Id of the attachment' }),
    message_id: z.int().exactOptional().openapi({ description: 'Id of the parent message' }),
    file_type: z
      .enum([
        'image',
        'audio',
        'video',
        'file',
        'location',
        'fallback',
        'share',
        'story_mention',
        'contact',
        'ig_reel',
        'ig_post',
        'ig_story',
        'embed',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the attached file' }),
    account_id: z.int().exactOptional().openapi({ description: 'Id of the account' }),
    extension: z.string().nullable().exactOptional().openapi({ description: 'File extension' }),
    data_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'URL of the file. Can be null when an attachment variant has no external URL.',
      }),
    thumb_url: z.string().exactOptional().openapi({ description: 'URL of the file thumbnail' }),
    file_size: z.int().exactOptional().openapi({ description: 'File size in bytes' }),
    width: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Width of the attachment when available' }),
    height: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Height of the attachment when available' }),
    coordinates_lat: z
      .number()
      .exactOptional()
      .openapi({ description: 'Latitude for location attachments' }),
    coordinates_long: z
      .number()
      .exactOptional()
      .openapi({ description: 'Longitude for location attachments' }),
    fallback_title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Fallback title for location, fallback, and contact attachments when available',
      }),
    meta: z.object({}).exactOptional().openapi({ description: 'Metadata for contact attachments' }),
    transcribed_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcribed text for audio attachments' }),
  })
  .openapi({
    description: 'Attachment payload. Available fields vary by attachment file_type.',
    required: [],
  })
  .openapi('PublicMessageAttachment')

const PublicMessageSenderSchema = z
  .looseObject({
    id: z.int().exactOptional().openapi({ description: 'Id of the sender' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the sender when available' }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Avatar URL of the sender. Present for senders of type user, agent_bot, and captain_assistant. Not present for contact senders (use thumbnail instead).',
      }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Avatar/thumbnail URL of the sender. Contact senders use this field; user senders may also include it.',
      }),
    type: z
      .enum(['contact', 'user', 'agent_bot', 'captain_assistant'])
      .exactOptional()
      .openapi({ description: 'Type of the sender' }),
    available_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name for user senders' }),
    availability_status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Availability status for user senders' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Email of the sender when the sender is a contact' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Phone number of the sender when the sender is a contact' }),
    identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the sender when the sender is a contact' }),
    blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the sender is blocked when the sender is a contact' }),
    additional_attributes: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional attributes when the sender is a contact and available' }),
    custom_attributes: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom attributes when the sender is a contact and available' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description when the sender is a captain assistant' }),
    created_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Created timestamp in ISO 8601 format when the sender is a captain assistant',
      }),
  })
  .openapi({
    description:
      'Polymorphic sender payload returned by push_event_data. Available fields vary by sender type.',
    required: [],
  })
  .openapi('PublicMessageSender')

const PublicMessageSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Id of the message' }),
    content: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Text content of the message. Can be null for attachment-only messages.',
      }),
    message_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Denotes the message type. Possible values: 0 (incoming), 1 (outgoing), 2 (activity), 3 (template)',
      }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content type of the message' }),
    content_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional content attributes of the message' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Created at Unix timestamp of the message' }),
    conversation_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Display Id of the conversation the message belongs to' }),
    attachments: z
      .array(PublicMessageAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Attachments if any' }),
    sender: PublicMessageSenderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicMessage')

const PublicConversationSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Id of the conversation' }),
    uuid: z.string().exactOptional().openapi({ description: 'UUID of the conversation' }),
    inbox_id: z.int().exactOptional().openapi({ description: 'The inbox id of the conversation' }),
    contact_last_seen_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp of when the contact last seen the conversation (Unix timestamp)',
      }),
    status: z
      .enum(['open', 'resolved', 'pending', 'snoozed'])
      .exactOptional()
      .openapi({ description: 'The status of the conversation' }),
    agent_last_seen_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp of when the agent last seen the conversation (Unix timestamp)',
      }),
    messages: z
      .array(PublicMessageSchema)
      .exactOptional()
      .openapi({ description: 'Messages in the conversation' }),
    contact: PublicContactRecordSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicConversation')

const PublicInboxSchema = z
  .object({
    identifier: z.string().exactOptional().openapi({ description: 'Inbox identifier' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the inbox' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timezone defined on the inbox' }),
    working_hours: z
      .array(
        z
          .object({
            day_of_week: z
              .int()
              .exactOptional()
              .openapi({ description: 'Day of the week as a number. Sunday -> 0, Saturday -> 6' }),
            open_all_day: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether or not the business is open the whole day' }),
            closed_all_day: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether or not the business is closed the whole day' }),
            open_hour: z
              .int()
              .exactOptional()
              .openapi({ description: 'Opening hour. Can be null if closed all day' }),
            open_minutes: z
              .int()
              .exactOptional()
              .openapi({ description: 'Opening minute. Can be null if closed all day' }),
            close_hour: z
              .int()
              .exactOptional()
              .openapi({ description: 'Closing hour. Can be null if closed all day' }),
            close_minutes: z
              .int()
              .exactOptional()
              .openapi({ description: 'Closing minute. Can be null if closed all day' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The working hours defined on the inbox' }),
    working_hours_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether of not the working hours are enabled on the inbox' }),
    csat_survey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether of not the Customer Satisfaction survey is enabled on the inbox',
      }),
    greeting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether of not the Greeting Message is enabled on the inbox' }),
    identity_validation_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether of not the User Identity Validation is enforced on the inbox',
      }),
  })
  .openapi({ required: [] })
  .openapi('PublicInbox')

const AccountCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the account', example: 'My Account' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the account', example: 'en' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the account', example: 'example.com' }),
    support_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The support email of the account', example: 'support@example.com' }),
    status: z
      .enum(['active', 'suspended'])
      .exactOptional()
      .openapi({ description: 'The status of the account', example: 'active' }),
    limits: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The limits of the account', example: {} }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The custom attributes of the account', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('AccountCreateUpdatePayload')

const AccountUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the account', example: 'My Account' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the account', example: 'en' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the account', example: 'example.com' }),
    support_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The support email of the account', example: 'support@example.com' }),
    auto_resolve_after: z
      .int()
      .min(10)
      .max(1439856)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Auto resolve conversations after specified minutes',
        example: 1440,
      }),
    auto_resolve_message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Message to send when auto resolving',
        example: 'This conversation has been automatically resolved due to inactivity',
      }),
    auto_resolve_ignore_waiting: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether to ignore waiting conversations for auto resolve',
        example: false,
      }),
    industry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Industry type', example: 'Technology' }),
    company_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Company size', example: '50-100' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account timezone', example: 'UTC' }),
  })
  .openapi({ required: [] })
  .openapi('AccountUpdatePayload')

const AccountUserCreateUpdatePayloadSchema = z
  .object({
    user_id: z.int().openapi({ description: 'The ID of the user', example: 1 }),
    role: z
      .string()
      .openapi({
        description: 'whether user is an administrator or agent',
        example: 'administrator',
      }),
  })
  .openapi({ required: ['user_id', 'role'] })
  .openapi('AccountUserCreateUpdatePayload')

const PlatformAgentBotCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the agent bot', example: 'My Agent Bot' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the agent bot',
        example: 'This is a sample agent bot',
      }),
    outgoing_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The webhook URL for the bot',
        example: 'https://example.com/webhook',
      }),
    account_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The account ID to associate the agent bot with', example: 1 }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Send the form data with the avatar image binary or use the avatar_url',
      }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to a jpeg, png file for the agent bot avatar',
        example: 'https://example.com/avatar.png',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlatformAgentBotCreateUpdatePayload')

const AgentBotCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the agent bot', example: 'My Agent Bot' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the agent bot',
        example: 'This is a sample agent bot',
      }),
    outgoing_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The webhook URL for the bot',
        example: 'https://example.com/webhook',
      }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Send the form data with the avatar image binary or use the avatar_url',
      }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to a jpeg, png file for the agent bot avatar',
        example: 'https://example.com/avatar.png',
      }),
    bot_type: z
      .int()
      .exactOptional()
      .openapi({ description: 'The type of the bot (0 for webhook)', example: 0 }),
    bot_config: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The configuration for the bot', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('AgentBotCreateUpdatePayload')

const UserCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the user', example: 'Daniel' }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the user', example: 'Dan' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of the user', example: 'daniel@acme.inc' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Password must contain uppercase, lowercase letters, number and a special character',
        example: 'Password2!',
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Custom attributes you want to associate with the user',
        example: {},
      }),
  })
  .openapi({ required: [] })
  .openapi('UserCreateUpdatePayload')

const CannedResponseCreateUpdatePayloadSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Message content for canned response',
        example: 'Hello, {{contact.name}}! Welcome to our service.',
      }),
    short_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short Code for quick access of the canned response',
        example: 'welcome',
      }),
  })
  .openapi({ required: [] })
  .openapi('CannedResponseCreateUpdatePayload')

const CustomAttributeCreateUpdatePayloadSchema = z
  .object({
    attribute_display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute display name', example: 'Custom Attribute' }),
    attribute_display_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)',
        example: 0,
      }),
    attribute_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute description', example: 'This is a custom attribute' }),
    attribute_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribute unique key value', example: 'custom_attribute' }),
    attribute_values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Attribute values', example: ['value1', 'value2'] }),
    attribute_model: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Attribute type(conversation_attribute- 0, contact_attribute- 1)',
        example: 0,
      }),
    regex_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).',
        example: '^[a-zA-Z0-9]+$',
      }),
    regex_cue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.',
        example: 'Please enter a valid value',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomAttributeCreateUpdatePayload')

const AgentCreatePayloadSchema = z
  .object({
    name: z.string().openapi({ description: 'Full Name of the agent', example: 'John Doe' }),
    email: z.string().openapi({ description: 'Email of the Agent', example: 'john.doe@acme.inc' }),
    role: z
      .enum(['agent', 'administrator'])
      .openapi({ description: 'Whether its administrator or agent', example: 'agent' }),
    availability: z
      .enum(['online', 'busy', 'offline'])
      .exactOptional()
      .openapi({ description: 'The configured availability of the agent.', example: 'online' }),
    auto_offline: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the agent is automatically marked offline when they are away.',
        example: true,
      }),
  })
  .openapi({ required: ['name', 'email', 'role'] })
  .openapi('AgentCreatePayload')

const AgentUpdatePayloadSchema = z
  .object({
    role: z
      .enum(['agent', 'administrator'])
      .openapi({ description: 'Whether its administrator or agent', example: 'agent' }),
    availability: z
      .enum(['online', 'busy', 'offline'])
      .exactOptional()
      .openapi({ description: 'The configured availability of the agent.', example: 'online' }),
    auto_offline: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the agent is automatically marked offline when they are away.',
        example: true,
      }),
  })
  .openapi({ required: ['role'] })
  .openapi('AgentUpdatePayload')

const ContactCreatePayloadSchema = z
  .object({
    inbox_id: z
      .number()
      .openapi({ description: 'ID of the inbox to which the contact belongs', example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of the contact', example: 'Alice' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'email of the contact', example: 'alice@acme.inc' }),
    blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether the contact is blocked or not', example: false }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'phone number of the contact', example: '+123456789' }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Send the form data with the avatar image binary or use the avatar_url',
      }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to a jpeg, png file for the contact avatar',
        example: 'https://example.com/avatar.png',
      }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the contact in external system',
        example: '1234567890',
      }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}',
        example: { type: 'customer', age: 30 },
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
        example: {},
      }),
  })
  .openapi({ required: ['inbox_id'] })
  .openapi('ContactCreatePayload')

const ContactUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of the contact', example: 'Alice' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'email of the contact', example: 'alice@acme.inc' }),
    blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether the contact is blocked or not', example: false }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'phone number of the contact', example: '+123456789' }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Send the form data with the avatar image binary or use the avatar_url',
      }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to a jpeg, png file for the contact avatar',
        example: 'https://example.com/avatar.png',
      }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the contact in external system',
        example: '1234567890',
      }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}',
        example: { type: 'customer', age: 30 },
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
        example: {},
      }),
  })
  .openapi({ required: [] })
  .openapi('ContactUpdatePayload')

const ConversationCreatePayloadSchema = z
  .object({
    source_id: z.string().openapi({ description: 'Conversation source id', example: '1234567890' }),
    inbox_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email',
        example: 1,
      }),
    contact_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Contact Id for which conversation is created', example: 1 }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Lets you specify attributes like browser information',
        example: {
          browser: 'Chrome',
          browser_version: '89.0.4389.82',
          os: 'Windows',
          os_version: '10',
        },
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The object to save custom attributes for conversation, accepts custom attributes key and value',
        example: { attribute_key: 'attribute_value', priority_conversation_number: 3 },
      }),
    status: z
      .enum(['open', 'resolved', 'pending'])
      .exactOptional()
      .openapi({
        description: "Specify the conversation whether it's pending, open, closed",
        example: 'open',
      }),
    assignee_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Agent Id for assigning a conversation to an agent', example: 1 }),
    team_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Team Id for assigning a conversation to a team\\', example: 1 }),
    snoozed_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Snoozed until date time', example: '2030-07-21T17:32:28Z' }),
    message: z
      .object({
        content: z
          .string()
          .openapi({
            description: 'The content of the message',
            example: 'Hello, how can I help you?',
          }),
        template_params: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the template', example: 'sample_issue_resolution' }),
            category: z
              .string()
              .exactOptional()
              .openapi({ description: 'Category of the template', example: 'UTILITY' }),
            language: z
              .string()
              .exactOptional()
              .openapi({ description: 'Language of the template', example: 'en_US' }),
            processed_params: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'The processed param values for template variables in template',
                example: { '1': 'Chatwoot' },
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The template params for the message in case of whatsapp Channel',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The initial message to be sent to the conversation',
        required: ['content'],
      }),
  })
  .openapi({ required: ['source_id'] })
  .openapi('ConversationCreatePayload')

const ConversationMessageCreatePayloadSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description: 'The content of the message',
        example: 'Hello, how can I help you?',
      }),
    message_type: z
      .enum(['outgoing', 'incoming'])
      .exactOptional()
      .openapi({ description: 'The type of the message', example: 'outgoing' }),
    private: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to identify if it is a private note', example: false }),
    content_type: z
      .enum(['text', 'input_email', 'cards', 'input_select', 'form', 'article'])
      .exactOptional()
      .openapi({ description: 'Content type of the message', example: 'text' }),
    content_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Attributes based on the content type. For `input_select`, provide an `items` array with\n`title`, `value`, and optional `description`. WhatsApp list messages use `description`\nas the row subtitle when present.\n',
        example: {},
      }),
    campaign_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The campaign id to which the message belongs', example: 1 }),
    template_params: z
      .object({
        name: z
          .string()
          .openapi({
            description:
              'Name of the WhatsApp template (must be approved in WhatsApp Business Manager)',
            example: 'purchase_receipt',
          }),
        category: z
          .enum(['UTILITY', 'MARKETING', 'SHIPPING_UPDATE', 'TICKET_UPDATE', 'ISSUE_RESOLUTION'])
          .openapi({ description: 'Category of the template', example: 'UTILITY' }),
        language: z
          .string()
          .openapi({
            description: 'Language code of the template (BCP 47 format)',
            example: 'en_US',
          }),
        content_mode: z
          .enum(['raw_template', 'rendered'])
          .default('rendered')
          .exactOptional()
          .openapi({
            description:
              'Format of the top-level `content` field. Existing clients may send rendered\ncontent or omit this field. Set this to `raw_template` only when `content`\ncontains the original template body placeholders.\n',
          }),
        processed_params: z
          .object({
            body: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description: 'Body component parameters with variable placeholders',
                example: { '1': 'Visa', '2': 'Nike', '3': 'Bill' },
              }),
            header: z
              .object({
                media_url: z
                  .url()
                  .exactOptional()
                  .openapi({
                    description: 'Publicly accessible URL for IMAGE, VIDEO, or DOCUMENT headers',
                    example:
                      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                  }),
                media_type: z
                  .enum(['image', 'video', 'document'])
                  .exactOptional()
                  .openapi({ description: 'Type of media for the header', example: 'document' }),
              })
              .exactOptional()
              .openapi({
                description: 'Header component parameters for media templates',
                required: [],
              }),
            buttons: z
              .array(
                z
                  .object({
                    type: z
                      .enum(['url', 'copy_code'])
                      .exactOptional()
                      .openapi({ description: 'Type of button parameter' }),
                    parameter: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Dynamic parameter value for the button',
                        example: 'SSFSDFSD',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Button component parameters for interactive templates' }),
          })
          .openapi({
            description: 'Processed template parameters organized by component type',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'WhatsApp template parameters for sending structured messages',
        required: ['name', 'category', 'language', 'processed_params'],
      }),
  })
  .openapi({ required: ['content'] })
  .openapi('ConversationMessageCreatePayload')

const InboxCreateWebWidgetChannelPayloadSchema = z
  .object({
    type: z.literal('web_widget').openapi({ example: 'web_widget' }),
    website_url: z
      .string()
      .openapi({
        description: 'URL at which the widget will be loaded',
        example: 'https://example.com',
      }),
    welcome_title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Welcome title to be displayed on the widget',
        example: 'Welcome to our support',
      }),
    welcome_tagline: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Welcome tagline to be displayed on the widget',
        example: 'We are here to help you',
      }),
    widget_color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A Hex-color string used to customize the widget',
        example: '#FF5733',
      }),
    reply_time: z
      .enum(['in_a_few_minutes', 'in_a_few_hours', 'in_a_day'])
      .exactOptional()
      .openapi({
        description: 'Expected reply time shown on the widget',
        example: 'in_a_few_minutes',
      }),
    pre_chat_form_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable the pre-chat form before starting a conversation',
        example: false,
      }),
    pre_chat_form_options: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Pre-chat form configuration',
        example: {
          pre_chat_message: 'Share your queries or comments here.',
          pre_chat_fields: [
            {
              field_type: 'standard',
              label: 'Email Id',
              name: 'emailAddress',
              type: 'email',
              required: true,
              enabled: true,
            },
          ],
        },
      }),
    continuity_via_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Continue conversations over email when the contact leaves the website',
        example: true,
      }),
    hmac_mandatory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Require HMAC verification for contacts using the widget',
        example: false,
      }),
    allowed_domains: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of domains where the widget is allowed to load',
        example: 'example.com',
      }),
    selected_feature_flags: z
      .array(
        z.enum([
          'attachments',
          'emoji_picker',
          'end_conversation',
          'use_inbox_avatar_for_bot',
          'allow_mobile_webview',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Enabled widget feature flags',
        example: ['attachments', 'emoji_picker', 'end_conversation'],
      }),
  })
  .openapi({ title: 'Website channel', required: ['type', 'website_url'] })
  .openapi('InboxCreateWebWidgetChannelPayload')

const InboxCreateApiChannelPayloadSchema = z
  .object({
    type: z.literal('api').openapi({ example: 'api' }),
    webhook_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Webhook URL for API channel inbox callbacks',
        example: 'https://example.com/webhook',
      }),
    hmac_mandatory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Require HMAC verification for incoming API channel messages',
        example: false,
      }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Additional attributes stored on contacts created through the API channel',
        example: { source: 'mobile_app' },
      }),
  })
  .openapi({ title: 'API channel', required: ['type'] })
  .openapi('InboxCreateApiChannelPayload')

const InboxCreateEmailChannelPayloadSchema = z
  .object({
    type: z.literal('email').openapi({ example: 'email' }),
    email: z
      .string()
      .openapi({ description: 'Email address for the inbox', example: 'support@example.com' }),
    imap_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable IMAP for inbound emails', example: true }),
    imap_login: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP login username', example: 'support@example.com' }),
    imap_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP login password', example: 'your-imap-password' }),
    imap_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP server address', example: 'imap.example.com' }),
    imap_port: z.int().exactOptional().openapi({ description: 'IMAP server port', example: 993 }),
    imap_enable_ssl: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SSL for IMAP', example: true }),
    imap_authentication: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP authentication method', example: 'plain' }),
    smtp_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SMTP for outbound emails', example: true }),
    smtp_login: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP login username', example: 'support@example.com' }),
    smtp_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP login password', example: 'your-smtp-password' }),
    smtp_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP server address', example: 'smtp.example.com' }),
    smtp_port: z.int().exactOptional().openapi({ description: 'SMTP server port', example: 587 }),
    smtp_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP HELO domain', example: 'example.com' }),
    smtp_enable_starttls_auto: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Automatically enable STARTTLS for SMTP', example: true }),
    smtp_enable_ssl_tls: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SSL/TLS for SMTP', example: false }),
    smtp_openssl_verify_mode: z
      .string()
      .exactOptional()
      .openapi({ description: 'OpenSSL certificate verification mode for SMTP', example: 'none' }),
    smtp_authentication: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP authentication method', example: 'login' }),
    provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email provider', example: 'google' }),
    verified_for_sending: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the inbox is verified for sending emails', example: false }),
  })
  .openapi({ title: 'Email channel', required: ['type', 'email'] })
  .openapi('InboxCreateEmailChannelPayload')

const InboxCreateLineChannelPayloadSchema = z
  .object({
    type: z.literal('line').openapi({ example: 'line' }),
    line_channel_id: z.string().openapi({ description: 'LINE channel ID', example: '1234567890' }),
    line_channel_secret: z
      .string()
      .openapi({ description: 'LINE channel secret', example: 'line-channel-secret' }),
    line_channel_token: z
      .string()
      .openapi({ description: 'LINE channel access token', example: 'line-channel-token' }),
  })
  .openapi({
    title: 'LINE channel',
    required: ['type', 'line_channel_id', 'line_channel_secret', 'line_channel_token'],
  })
  .openapi('InboxCreateLineChannelPayload')

const InboxCreateTelegramChannelPayloadSchema = z
  .object({
    type: z.literal('telegram').openapi({ example: 'telegram' }),
    bot_token: z
      .string()
      .openapi({ description: 'Telegram bot token', example: '123456789:telegram-bot-token' }),
  })
  .openapi({ title: 'Telegram channel', required: ['type', 'bot_token'] })
  .openapi('InboxCreateTelegramChannelPayload')

const InboxCreateWhatsappChannelPayloadSchema = z
  .xor([
    z
      .object({
        type: z.literal('whatsapp').openapi({ example: 'whatsapp' }),
        phone_number: z
          .string()
          .openapi({ description: 'WhatsApp phone number', example: '+15551234567' }),
        provider: z
          .literal('whatsapp_cloud')
          .openapi({ description: 'WhatsApp provider', example: 'whatsapp_cloud' }),
        provider_config: z
          .object({
            api_key: z
              .string()
              .openapi({ description: 'WhatsApp Cloud API key', example: 'your-api-key' }),
            phone_number_id: z
              .string()
              .openapi({
                description: 'Phone number ID for WhatsApp Cloud',
                example: 'your-phone-number-id',
              }),
            business_account_id: z
              .string()
              .openapi({
                description: 'Business account ID for WhatsApp Cloud',
                example: 'your-business-account-id',
              }),
          })
          .openapi({
            description: 'WhatsApp Cloud provider configuration',
            required: ['api_key', 'phone_number_id', 'business_account_id'],
            example: {
              api_key: 'your-api-key',
              phone_number_id: 'your-phone-number-id',
              business_account_id: 'your-business-account-id',
            },
          }),
      })
      .openapi({
        title: 'WhatsApp Cloud channel',
        required: ['type', 'phone_number', 'provider', 'provider_config'],
      }),
    z
      .object({
        type: z.literal('whatsapp').openapi({ example: 'whatsapp' }),
        phone_number: z
          .string()
          .openapi({ description: 'WhatsApp phone number', example: '+15551234567' }),
        provider: z
          .literal('default')
          .exactOptional()
          .openapi({
            description:
              'Legacy 360dialog provider. Omit this field or use `default` only for existing deprecated 360dialog setups.',
            deprecated: true,
            example: 'default',
          }),
        provider_config: z
          .object({
            api_key: z
              .string()
              .openapi({ description: '360dialog API key', example: 'your-api-key' }),
          })
          .openapi({
            description: 'Legacy 360dialog provider configuration',
            required: ['api_key'],
            example: { api_key: 'your-api-key' },
          }),
      })
      .openapi({
        title: 'Legacy 360dialog WhatsApp channel',
        deprecated: true,
        required: ['type', 'phone_number', 'provider_config'],
      }),
  ])
  .openapi('InboxCreateWhatsappChannelPayload')

const InboxCreateSmsChannelPayloadSchema = z
  .object({
    type: z.literal('sms').openapi({ example: 'sms' }),
    phone_number: z.string().openapi({ description: 'SMS phone number', example: '+15551234567' }),
    provider_config: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Provider-specific SMS configuration',
        example: { account_id: 'your-account-id', application_id: 'your-application-id' },
      }),
  })
  .openapi({ title: 'SMS channel', required: ['type', 'phone_number'] })
  .openapi('InboxCreateSmsChannelPayload')

const InboxCreatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the inbox.', example: 'Support' }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Image file for avatar.' }),
    greeting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable greeting message.', example: true }),
    greeting_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Greeting message to send when greeting messages are enabled.',
        example: 'Hello, how can I help you?',
      }),
    enable_email_collect: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable email collection.\n\nAvailable for: `Website`\n',
        example: true,
      }),
    csat_survey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable CSAT survey.', example: true }),
    csat_config: z
      .object({
        display_type: z
          .enum(['emoji', 'star'])
          .exactOptional()
          .openapi({ description: 'Display style for the CSAT survey.', example: 'emoji' }),
        message: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Message shown with the CSAT survey.',
            example: 'Please rate your conversation',
          }),
        button_text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Text shown on the CSAT survey button.',
            example: 'Please rate us',
          }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Language code for the CSAT survey.', example: 'en' }),
        survey_rules: z
          .object({
            operator: z.string().exactOptional().openapi({ example: 'contains' }),
            values: z
              .array(z.string())
              .exactOptional()
              .openapi({ example: ['billing'] }),
          })
          .exactOptional()
          .openapi({
            description: 'Rules that decide when to show the CSAT survey.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'CSAT survey configuration.', required: [] }),
    enable_auto_assignment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable Auto Assignment.', example: true }),
    working_hours_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable working hours.', example: true }),
    out_of_office_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Out of office message to send outside working hours.',
        example:
          'We are currently out of office. Please leave a message and we will get back to you.',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timezone of the inbox.', example: 'America/New_York' }),
    allow_messages_after_resolved: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n',
        example: true,
      }),
    lock_to_single_conversation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n',
        example: true,
      }),
    portal_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Id of the help center portal to attach to the inbox.', example: 1 }),
    sender_name_type: z
      .enum(['friendly', 'professional'])
      .exactOptional()
      .openapi({
        description:
          'Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n',
        example: 'friendly',
      }),
    business_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n',
        example: 'My Business',
      }),
    channel: z
      .xor([
        InboxCreateWebWidgetChannelPayloadSchema,
        InboxCreateApiChannelPayloadSchema,
        InboxCreateEmailChannelPayloadSchema,
        InboxCreateLineChannelPayloadSchema,
        InboxCreateTelegramChannelPayloadSchema,
        InboxCreateWhatsappChannelPayloadSchema,
        InboxCreateSmsChannelPayloadSchema,
      ])
      .exactOptional()
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            web_widget: '#/components/schemas/inbox_create_web_widget_channel_payload',
            api: '#/components/schemas/inbox_create_api_channel_payload',
            email: '#/components/schemas/inbox_create_email_channel_payload',
            line: '#/components/schemas/inbox_create_line_channel_payload',
            telegram: '#/components/schemas/inbox_create_telegram_channel_payload',
            whatsapp: '#/components/schemas/inbox_create_whatsapp_channel_payload',
            sms: '#/components/schemas/inbox_create_sms_channel_payload',
          },
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('InboxCreatePayload')

const InboxUpdateWebWidgetChannelPayloadSchema = z
  .object({
    website_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL at which the widget will be loaded',
        example: 'https://example.com',
      }),
    welcome_title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Welcome title to be displayed on the widget',
        example: 'Welcome to our support',
      }),
    welcome_tagline: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Welcome tagline to be displayed on the widget',
        example: 'We are here to help you',
      }),
    widget_color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A Hex-color string used to customize the widget',
        example: '#FF5733',
      }),
    reply_time: z
      .enum(['in_a_few_minutes', 'in_a_few_hours', 'in_a_day'])
      .exactOptional()
      .openapi({
        description: 'Expected reply time shown on the widget',
        example: 'in_a_few_minutes',
      }),
    pre_chat_form_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable the pre-chat form before starting a conversation',
        example: false,
      }),
    pre_chat_form_options: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Pre-chat form configuration',
        example: {
          pre_chat_message: 'Share your queries or comments here.',
          pre_chat_fields: [
            {
              field_type: 'standard',
              label: 'Email Id',
              name: 'emailAddress',
              type: 'email',
              required: true,
              enabled: true,
            },
          ],
        },
      }),
    continuity_via_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Continue conversations over email when the contact leaves the website',
        example: true,
      }),
    hmac_mandatory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Require HMAC verification for contacts using the widget',
        example: false,
      }),
    allowed_domains: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of domains where the widget is allowed to load',
        example: 'example.com',
      }),
    selected_feature_flags: z
      .array(
        z.enum([
          'attachments',
          'emoji_picker',
          'end_conversation',
          'use_inbox_avatar_for_bot',
          'allow_mobile_webview',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Enabled widget feature flags',
        example: ['attachments', 'emoji_picker', 'end_conversation'],
      }),
  })
  .openapi({ title: 'Website channel settings', required: [] })
  .openapi('InboxUpdateWebWidgetChannelPayload')

const InboxUpdateApiChannelPayloadSchema = z
  .object({
    webhook_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Webhook URL for API channel inbox callbacks',
        example: 'https://example.com/webhook',
      }),
    hmac_mandatory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Require HMAC verification for incoming API channel messages',
        example: false,
      }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Additional attributes stored on contacts created through the API channel',
        example: { source: 'mobile_app' },
      }),
  })
  .openapi({ title: 'API channel settings', required: [] })
  .openapi('InboxUpdateApiChannelPayload')

const InboxUpdateEmailChannelPayloadSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address for the inbox', example: 'support@example.com' }),
    imap_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable IMAP for inbound emails', example: true }),
    imap_login: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP login username', example: 'support@example.com' }),
    imap_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP login password', example: 'your-imap-password' }),
    imap_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP server address', example: 'imap.example.com' }),
    imap_port: z.int().exactOptional().openapi({ description: 'IMAP server port', example: 993 }),
    imap_enable_ssl: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SSL for IMAP', example: true }),
    imap_authentication: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMAP authentication method', example: 'plain' }),
    smtp_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SMTP for outbound emails', example: true }),
    smtp_login: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP login username', example: 'support@example.com' }),
    smtp_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP login password', example: 'your-smtp-password' }),
    smtp_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP server address', example: 'smtp.example.com' }),
    smtp_port: z.int().exactOptional().openapi({ description: 'SMTP server port', example: 587 }),
    smtp_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP HELO domain', example: 'example.com' }),
    smtp_enable_starttls_auto: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Automatically enable STARTTLS for SMTP', example: true }),
    smtp_enable_ssl_tls: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable SSL/TLS for SMTP', example: false }),
    smtp_openssl_verify_mode: z
      .string()
      .exactOptional()
      .openapi({ description: 'OpenSSL certificate verification mode for SMTP', example: 'none' }),
    smtp_authentication: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMTP authentication method', example: 'login' }),
    provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email provider', example: 'google' }),
    verified_for_sending: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the inbox is verified for sending emails', example: false }),
  })
  .openapi({ title: 'Email channel settings', required: [] })
  .openapi('InboxUpdateEmailChannelPayload')

const InboxUpdateLineChannelPayloadSchema = z
  .object({
    line_channel_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'LINE channel ID', example: '1234567890' }),
    line_channel_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'LINE channel secret', example: 'line-channel-secret' }),
    line_channel_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'LINE channel access token', example: 'line-channel-token' }),
  })
  .openapi({ title: 'LINE channel settings', required: [] })
  .openapi('InboxUpdateLineChannelPayload')

const InboxUpdateTelegramChannelPayloadSchema = z
  .object({
    bot_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Telegram bot token', example: '123456789:telegram-bot-token' }),
  })
  .openapi({ title: 'Telegram channel settings', required: [] })
  .openapi('InboxUpdateTelegramChannelPayload')

const InboxUpdateWhatsappChannelPayloadSchema = z
  .object({
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'WhatsApp phone number', example: '+15551234567' }),
    provider: z
      .enum(['whatsapp_cloud', 'default'])
      .exactOptional()
      .openapi({
        description:
          'WhatsApp provider. `default` is supported only for existing deprecated 360dialog setups.',
        example: 'whatsapp_cloud',
      }),
    provider_config: z
      .object({
        api_key: z
          .string()
          .exactOptional()
          .openapi({ description: 'Provider API key', example: 'your-api-key' }),
        phone_number_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Phone number ID for WhatsApp Cloud',
            example: 'your-phone-number-id',
          }),
        business_account_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Business account ID for WhatsApp Cloud',
            example: 'your-business-account-id',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'WhatsApp provider configuration. Cloud channels use `api_key`, `phone_number_id`, and `business_account_id`; legacy 360dialog channels use `api_key`.',
        example: {
          api_key: 'your-api-key',
          phone_number_id: 'your-phone-number-id',
          business_account_id: 'your-business-account-id',
        },
        required: [],
      }),
  })
  .openapi({ title: 'WhatsApp channel settings', required: [] })
  .openapi('InboxUpdateWhatsappChannelPayload')

const InboxUpdateSmsChannelPayloadSchema = z
  .object({
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'SMS phone number', example: '+15551234567' }),
    provider_config: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Provider-specific SMS configuration',
        example: {
          api_key: 'your-api-key',
          api_secret: 'your-api-secret',
          application_id: 'your-application-id',
          account_id: 'your-account-id',
        },
      }),
  })
  .openapi({ title: 'SMS channel settings', required: [] })
  .openapi('InboxUpdateSmsChannelPayload')

const InboxUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the inbox.', example: 'Support' }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Image file for avatar.' }),
    greeting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable greeting message.', example: true }),
    greeting_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Greeting message to send when greeting messages are enabled.',
        example: 'Hello, how can I help you?',
      }),
    enable_email_collect: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable email collection.\n\nAvailable for: `Website`\n',
        example: true,
      }),
    csat_survey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable CSAT survey.', example: true }),
    csat_config: z
      .object({
        display_type: z
          .enum(['emoji', 'star'])
          .exactOptional()
          .openapi({ description: 'Display style for the CSAT survey.', example: 'emoji' }),
        message: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Message shown with the CSAT survey.',
            example: 'Please rate your conversation',
          }),
        button_text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Text shown on the CSAT survey button.',
            example: 'Please rate us',
          }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Language code for the CSAT survey.', example: 'en' }),
        survey_rules: z
          .object({
            operator: z.string().exactOptional().openapi({ example: 'contains' }),
            values: z
              .array(z.string())
              .exactOptional()
              .openapi({ example: ['billing'] }),
          })
          .exactOptional()
          .openapi({
            description: 'Rules that decide when to show the CSAT survey.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'CSAT survey configuration.', required: [] }),
    enable_auto_assignment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable Auto Assignment.', example: true }),
    working_hours_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable working hours.', example: true }),
    out_of_office_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Out of office message to send outside working hours.',
        example:
          'We are currently out of office. Please leave a message and we will get back to you.',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timezone of the inbox.', example: 'America/New_York' }),
    allow_messages_after_resolved: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n',
        example: true,
      }),
    lock_to_single_conversation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n',
        example: true,
      }),
    portal_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Id of the help center portal to attach to the inbox.', example: 1 }),
    sender_name_type: z
      .enum(['friendly', 'professional'])
      .exactOptional()
      .openapi({
        description:
          'Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n',
        example: 'friendly',
      }),
    business_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n',
        example: 'My Business',
      }),
    branded_email_layout: z
      .string()
      .max(262144)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Liquid HTML layout for outbound email replies. Must include `{{ content_for_layout }}` and be 262,144 characters or shorter.\n\nAvailable for: `Email`\n',
        example: '<html><body>{{ content_for_layout }}</body></html>',
      }),
    channel: z
      .union([
        InboxUpdateWebWidgetChannelPayloadSchema,
        InboxUpdateApiChannelPayloadSchema,
        InboxUpdateEmailChannelPayloadSchema,
        InboxUpdateLineChannelPayloadSchema,
        InboxUpdateTelegramChannelPayloadSchema,
        InboxUpdateWhatsappChannelPayloadSchema,
        InboxUpdateSmsChannelPayloadSchema,
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InboxUpdatePayload')

const AccountBrandedEmailLayoutPayloadSchema = z
  .object({
    branded_email_layout: z
      .string()
      .max(262144)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Account-scoped Liquid HTML layout for branded email replies. Maximum length is 262,144 characters. Blank or null removes the account override.',
        example: '<html><body>{{ content_for_layout }}</body></html>',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountBrandedEmailLayoutPayload')

const TeamCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the team', example: 'Support Team' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the team',
        example: 'This is a team of support agents',
      }),
    allow_auto_assign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team',
        example: true,
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'An emoji or icon shown next to the team', example: '🚀' }),
    icon_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color used for the team icon', example: '#6C5CE7' }),
  })
  .openapi({ required: [] })
  .openapi('TeamCreateUpdatePayload')

const LabelCreateUpdatePayloadSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label title', example: 'support' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short description for the label',
        example: 'Conversations that need support follow-up',
      }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hex color code for the label', example: '#1f93ff' }),
    show_on_sidebar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the label should appear in the sidebar', example: true }),
  })
  .openapi({ required: [] })
  .openapi('LabelCreateUpdatePayload')

const CustomFilterCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the custom filter', example: 'My Custom Filter' }),
    type: z
      .enum(['conversation', 'contact', 'report'])
      .exactOptional()
      .openapi({ description: 'The description about the custom filter', example: 'conversation' }),
    query: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A query that needs to be saved as a custom filter', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('CustomFilterCreateUpdatePayload')

const WebhookCreateUpdatePayloadSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url where the events should be sent',
        example: 'https://example.com/webhook',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the webhook' }),
    subscriptions: z
      .array(
        z.enum([
          'conversation_created',
          'conversation_status_changed',
          'conversation_updated',
          'message_created',
          'message_updated',
          'contact_created',
          'contact_updated',
          'webwidget_triggered',
          'conversation_typing_on',
          'conversation_typing_off',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'The events you want to subscribe to.',
        example: ['conversation_created', 'conversation_status_changed'],
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookCreateUpdatePayload')

const IntegrationsHookCreatePayloadSchema = z
  .object({
    app_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of app for which integration hook is being created',
        example: 1,
      }),
    inbox_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The inbox ID, if the hook is an inbox hook', example: 1 }),
    status: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The status of the integration (0 for inactive, 1 for active)',
        example: 1,
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The settings required by the integration', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationsHookCreatePayload')

const IntegrationsHookUpdatePayloadSchema = z
  .object({
    status: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The status of the integration (0 for inactive, 1 for active)',
        example: 1,
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The settings required by the integration', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationsHookUpdatePayload')

const AutomationRuleCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule name', example: 'Add label on message create event' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description about the automation and actions',
        example:
          'Add label support and sales on message create event if incoming message content contains text help',
      }),
    event_name: z
      .enum([
        'conversation_created',
        'conversation_updated',
        'conversation_resolved',
        'message_created',
      ])
      .exactOptional()
      .openapi({
        example: 'message_created',
        description: 'The event when you want to execute the automation actions',
      }),
    active: z.boolean().exactOptional().openapi({ description: 'Enable/disable automation rule' }),
    actions: z
      .array(
        z.object({}).openapi({ example: { action_name: 'add_label', action_params: ['support'] } }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.',
      }),
    conditions: z
      .array(
        z
          .object({})
          .openapi({
            example: {
              attribute_key: 'content',
              filter_operator: 'contains',
              query_operator: 'OR',
              values: ['help'],
            },
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of conditions on which conversation filter would work, e.g message content contains text help.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutomationRuleCreateUpdatePayload')

const PortalCreateUpdatePayloadSchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Header color for help-center in hex format', example: '#FFFFFF' }),
    custom_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom domain to display help center.', example: 'chatwoot.help' }),
    header_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Help center header', example: 'Handbook' }),
    homepage_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'link to main dashboard', example: 'https://www.chatwoot.com/' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name for the portal', example: 'Handbook' }),
    page_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page title for the portal', example: 'Handbook' }),
    slug: z
      .string()
      .exactOptional()
      .openapi({ description: 'Slug for the portal to display in link', example: 'handbook' }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Status to check if portal is live', example: false }),
    config: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Configuration about supporting locales',
        example: { allowed_locales: ['en', 'es'], default_locale: 'en' },
      }),
  })
  .openapi({ required: [] })
  .openapi('PortalCreateUpdatePayload')

const CategoryCreateUpdatePayloadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the category', example: 'Category Name' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description for the category', example: 'Category description' }),
    position: z
      .int()
      .exactOptional()
      .openapi({ description: 'Category position in the portal list to sort', example: 1 }),
    slug: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category slug used in the URL', example: 'category-name' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the category', example: 'en' }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The icon of the category as a string (emoji)', example: '📚' }),
    parent_category_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.',
        example: 1,
      }),
    associated_category_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To associate similar categories to each other, e.g same category of product documentation in different languages',
        example: 2,
      }),
  })
  .openapi({ required: [] })
  .openapi('CategoryCreateUpdatePayload')

const ArticleCreateUpdatePayloadSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the article', example: 'Article Title' }),
    slug: z
      .string()
      .exactOptional()
      .openapi({ description: 'The slug of the article', example: 'article-title' }),
    position: z
      .int()
      .exactOptional()
      .openapi({ description: 'article position in category', example: 1 }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text content.', example: 'This is the content of the article' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the article',
        example: 'This is the description of the article',
      }),
    category_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The category id of the article', example: 1 }),
    author_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The author agent id of the article', example: 1 }),
    associated_article_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To associate similar articles to each other, e.g to provide the link for the reference.',
        example: 2,
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The status of the article. 0 for draft, 1 for published, 2 for archived',
        example: 1,
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the article', example: 'en' }),
    meta: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Use for search',
        example: {
          tags: ['article_name'],
          title: 'article title',
          description: 'article description',
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('ArticleCreateUpdatePayload')

const PublicContactCreateUpdatePayloadSchema = z
  .object({
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'External identifier of the contact', example: '1234567890' }),
    identifier_hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier hash prepared for HMAC authentication',
        example: 'e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of the contact', example: 'alice@acme.inc' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the contact', example: 'Alice' }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number of the contact', example: '+123456789' }),
    avatar: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Send the form data with the avatar image binary or use the avatar_url',
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Custom attributes of the customer', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('PublicContactCreateUpdatePayload')

const PublicMessageCreatePayloadSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content for the message', example: 'Hello, how can I help you?' }),
    echo_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Temporary identifier which will be passed back via websockets',
        example: '1234567890',
      }),
  })
  .openapi({ required: [] })
  .openapi('PublicMessageCreatePayload')

const PublicMessageUpdatePayloadSchema = z
  .object({
    submitted_values: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the submiitted value', example: 'My Name' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the submitted value', example: 'My Title' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'The value of the submitted value', example: 'value' }),
        csat_survey_response: z
          .object({
            feedback_message: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The feedback message of the CSAT survey response',
                example: 'Great service!',
              }),
            rating: z
              .int()
              .exactOptional()
              .openapi({ description: 'The rating of the CSAT survey response', example: 5 }),
          })
          .exactOptional()
          .openapi({ description: 'The CSAT survey response', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Replies to the Bot Message Types', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PublicMessageUpdatePayload')

const PublicConversationCreatePayloadSchema = z
  .object({
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Custom attributes of the conversation', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('PublicConversationCreatePayload')

const ExtendedContactSchema = ContactSchema.and(
  z
    .object({
      id: z.number().exactOptional().openapi({ description: 'Id of the user' }),
      availability_status: z
        .enum(['online', 'offline'])
        .exactOptional()
        .openapi({ description: 'Availability status of the user' }),
    })
    .openapi({ required: [] }),
).openapi('ExtendedContact')

const ContactBaseSchema = GenericIdSchema.and(ContactSchema).openapi('ContactBase')

const ContactListSchema = z
  .array(ContactSchema)
  .openapi({ description: 'array of contacts' })
  .openapi('ContactList')

const ContactConversationsSchema = z
  .array(
    ConversationSchema.and(
      z
        .object({
          meta: z
            .object({
              sender: z
                .object({
                  additional_attributes: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'The additional attributes of the sender' }),
                  availability_status: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The availability status of the sender' }),
                  email: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The email of the sender' }),
                  id: z.number().exactOptional().openapi({ description: 'ID fo the sender' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the sender' }),
                  phone_number: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The phone number of the sender' }),
                  blocked: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the sender is blocked' }),
                  identifier: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The identifier of the sender' }),
                  thumbnail: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Avatar URL of the contact' }),
                  custom_attributes: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'The custom attributes of the sender' }),
                  last_activity_at: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'The last activity at of the sender' }),
                  created_at: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'The created at of the sender' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              channel: z.string().exactOptional().openapi({ description: 'Channel Type' }),
              assignee: UserSchema.exactOptional(),
              hmac_verified: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the hmac is verified' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    ).and(z.object({ display_id: z.number().exactOptional() }).openapi({ required: [] })),
  )
  .openapi({ description: 'array of conversations' })
  .openapi('ContactConversations')

const ContactLabelsSchema = z
  .object({
    payload: z.array(z.string()).exactOptional().openapi({ description: 'Array of labels' }),
  })
  .openapi({ required: [] })
  .openapi('ContactLabels')

const ConversationListSchema = z
  .object({
    data: z
      .object({
        meta: z
          .object({
            mine_count: z.number().exactOptional(),
            unassigned_count: z.number().exactOptional(),
            assigned_count: z.number().exactOptional(),
            all_count: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        payload: z
          .array(
            GenericIdSchema.and(ConversationSchema).and(
              z
                .object({
                  meta: z
                    .object({
                      sender: z
                        .object({
                          additional_attributes: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'The additional attributes of the sender' }),
                          availability_status: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The availability status of the sender' }),
                          email: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'The email of the sender' }),
                          id: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'ID fo the sender' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the sender' }),
                          phone_number: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'The phone number of the sender' }),
                          blocked: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Whether the sender is blocked' }),
                          identifier: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'The identifier of the sender' }),
                          thumbnail: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Avatar URL of the contact' }),
                          custom_attributes: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'The custom attributes of the sender' }),
                          last_activity_at: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The last activity at of the sender' }),
                          created_at: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The created at of the sender' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      channel: z.string().exactOptional().openapi({ description: 'Channel Type' }),
                      assignee: UserSchema.exactOptional(),
                      hmac_verified: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the hmac is verified' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional()
          .openapi({ description: 'array of conversations' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ConversationList')

const ConversationShowSchema = ConversationSchema.and(
  z
    .object({
      meta: z
        .object({
          sender: z
            .object({
              additional_attributes: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The additional attributes of the sender' }),
              availability_status: z
                .string()
                .exactOptional()
                .openapi({ description: 'The availability status of the sender' }),
              email: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The email of the sender' }),
              id: z.number().exactOptional().openapi({ description: 'ID fo the sender' }),
              name: z.string().exactOptional().openapi({ description: 'The name of the sender' }),
              phone_number: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The phone number of the sender' }),
              blocked: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the sender is blocked' }),
              identifier: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The identifier of the sender' }),
              thumbnail: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Avatar URL of the contact' }),
              custom_attributes: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The custom attributes of the sender' }),
              last_activity_at: z
                .number()
                .exactOptional()
                .openapi({ description: 'The last activity at of the sender' }),
              created_at: z
                .number()
                .exactOptional()
                .openapi({ description: 'The created at of the sender' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          channel: z.string().exactOptional().openapi({ description: 'Channel Type' }),
          assignee: UserSchema.exactOptional(),
          hmac_verified: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether the hmac is verified' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('ConversationShow')

const ConversationStatusToggleSchema = z
  .object({
    meta: z.object({}).exactOptional(),
    payload: z
      .object({
        success: z.boolean().exactOptional(),
        current_status: z.enum(['open', 'resolved']).exactOptional(),
        conversation_id: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ConversationStatusToggle')

const ConversationLabelsSchema = z
  .object({
    payload: z.array(z.string()).exactOptional().openapi({ description: 'Array of labels' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationLabels')

const AccountSummarySchema = z
  .object({
    avg_first_response_time: z.string().exactOptional(),
    avg_resolution_time: z.string().exactOptional(),
    conversations_count: z.number().exactOptional(),
    incoming_messages_count: z.number().exactOptional(),
    outgoing_messages_count: z.number().exactOptional(),
    resolutions_count: z.number().exactOptional(),
    previous: z
      .object({
        avg_first_response_time: z.string().exactOptional(),
        avg_resolution_time: z.string().exactOptional(),
        conversations_count: z.number().exactOptional(),
        incoming_messages_count: z.number().exactOptional(),
        outgoing_messages_count: z.number().exactOptional(),
        resolutions_count: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AccountSummary')

const AgentConversationMetricsSchema = z
  .object({
    id: z.number().exactOptional(),
    name: z.string().exactOptional(),
    email: z.string().exactOptional(),
    thumbnail: z.string().exactOptional(),
    availability: z.string().exactOptional(),
    metric: z
      .object({ open: z.number().exactOptional(), unattended: z.number().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AgentConversationMetrics')

const ChannelSummarySchema = z
  .record(
    z.string(),
    z
      .object({
        open: z.number().exactOptional().openapi({ description: 'Number of open conversations' }),
        resolved: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of resolved conversations' }),
        pending: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of pending conversations' }),
        snoozed: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of snoozed conversations' }),
        total: z.number().exactOptional().openapi({ description: 'Total number of conversations' }),
      })
      .openapi({
        description:
          'Conversation statistics for a specific channel type (e.g., Channel::WebWidget, Channel::Api)',
        required: [],
      }),
  )
  .openapi({
    description:
      'Channel summary report containing conversation counts grouped by channel type and status. Available in version 4.10.0+.',
    example: {
      'Channel::WebWidget': { open: 10, resolved: 20, pending: 5, snoozed: 2, total: 37 },
      'Channel::Api': { open: 5, resolved: 15, pending: 3, snoozed: 1, total: 24 },
    },
  })
  .openapi('ChannelSummary')

const FirstResponseTimeDistributionSchema = z
  .record(
    z.string(),
    z
      .object({
        '0-1h': z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations with first response time less than 1 hour',
          }),
        '1-4h': z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations with first response time between 1-4 hours',
          }),
        '4-8h': z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations with first response time between 4-8 hours',
          }),
        '8-24h': z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations with first response time between 8-24 hours',
          }),
        '24h+': z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations with first response time greater than 24 hours',
          }),
      })
      .openapi({
        description:
          'First response time distribution for a specific channel type (e.g., Channel::WebWidget, Channel::Api)',
        required: [],
      }),
  )
  .openapi({
    description:
      'First response time distribution report grouped by channel type. Shows the count of conversations with first response times in different time buckets.',
    example: {
      'Channel::WebWidget': { '0-1h': 150, '1-4h': 80, '4-8h': 45, '8-24h': 30, '24h+': 15 },
      'Channel::Api': { '0-1h': 75, '1-4h': 40, '4-8h': 20, '8-24h': 10, '24h+': 5 },
    },
  })
  .openapi('FirstResponseTimeDistribution')

const InboxLabelMatrixSchema = z
  .object({
    inboxes: z
      .array(
        z
          .object({
            id: z.number().exactOptional().openapi({ description: 'The inbox ID' }),
            name: z.string().exactOptional().openapi({ description: 'The inbox name' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of inboxes included in the report' }),
    labels: z
      .array(
        z
          .object({
            id: z.number().exactOptional().openapi({ description: 'The label ID' }),
            title: z.string().exactOptional().openapi({ description: 'The label title' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of labels included in the report' }),
    matrix: z
      .array(z.array(z.number()))
      .exactOptional()
      .openapi({
        description:
          '2D array where matrix[i][j] represents the count of conversations in inboxes[i] with labels[j]',
      }),
  })
  .openapi({
    description:
      'Inbox-label matrix report showing the count of conversations for each inbox-label combination.',
    example: {
      inboxes: [
        { id: 1, name: 'Website Chat' },
        { id: 2, name: 'Email Support' },
      ],
      labels: [
        { id: 1, title: 'bug' },
        { id: 2, title: 'feature-request' },
        { id: 3, title: 'urgent' },
      ],
      matrix: [
        [10, 5, 3],
        [8, 12, 2],
      ],
    },
    required: [],
  })
  .openapi('InboxLabelMatrix')

const OutgoingMessagesCountSchema = z
  .array(
    z
      .object({
        id: z
          .number()
          .exactOptional()
          .openapi({ description: 'The ID of the grouped entity (agent, team, inbox, or label).' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the grouped entity.' }),
        outgoing_messages_count: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The total number of outgoing messages for this entity in the given time range.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'Outgoing messages count report grouped by entity (agent, team, inbox, or label).',
    example: [
      { id: 1, name: 'Agent One', outgoing_messages_count: 42 },
      { id: 2, name: 'Agent Two', outgoing_messages_count: 18 },
    ],
  })
  .openapi('OutgoingMessagesCount')

const InboxSummarySchema = z
  .array(
    z
      .object({
        id: z.number().exactOptional().openapi({ description: 'The inbox ID' }),
        conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations created in the inbox during the date range',
          }),
        resolved_conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations resolved in the inbox during the date range',
          }),
        avg_resolution_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) to resolve conversations. Null if no data available.',
          }),
        avg_first_response_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) for the first response. Null if no data available.',
          }),
        avg_reply_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Average time (in seconds) between replies. Null if no data available.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'Inbox summary report containing conversation statistics grouped by inbox.',
    example: [
      {
        id: 1,
        conversations_count: 150,
        resolved_conversations_count: 120,
        avg_resolution_time: 3600,
        avg_first_response_time: 300,
        avg_reply_time: 600,
      },
      {
        id: 2,
        conversations_count: 75,
        resolved_conversations_count: 60,
        avg_resolution_time: 1800,
        avg_first_response_time: 180,
        avg_reply_time: 420,
      },
    ],
  })
  .openapi('InboxSummary')

const AgentSummarySchema = z
  .array(
    z
      .object({
        id: z.number().exactOptional().openapi({ description: 'The agent (user) ID' }),
        conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations assigned to the agent during the date range',
          }),
        resolved_conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations resolved by the agent during the date range',
          }),
        avg_resolution_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) to resolve conversations. Null if no data available.',
          }),
        avg_first_response_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) for the first response. Null if no data available.',
          }),
        avg_reply_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Average time (in seconds) between replies. Null if no data available.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'Agent summary report containing conversation statistics grouped by agent.',
    example: [
      {
        id: 1,
        conversations_count: 150,
        resolved_conversations_count: 120,
        avg_resolution_time: 3600,
        avg_first_response_time: 300,
        avg_reply_time: 600,
      },
      {
        id: 2,
        conversations_count: 75,
        resolved_conversations_count: 60,
        avg_resolution_time: 1800,
        avg_first_response_time: 180,
        avg_reply_time: 420,
      },
    ],
  })
  .openapi('AgentSummary')

const TeamSummarySchema = z
  .array(
    z
      .object({
        id: z.number().exactOptional().openapi({ description: 'The team ID' }),
        conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations assigned to the team during the date range',
          }),
        resolved_conversations_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of conversations resolved by the team during the date range',
          }),
        avg_resolution_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) to resolve conversations. Null if no data available.',
          }),
        avg_first_response_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Average time (in seconds) for the first response. Null if no data available.',
          }),
        avg_reply_time: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Average time (in seconds) between replies. Null if no data available.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'Team summary report containing conversation statistics grouped by team.',
    example: [
      {
        id: 1,
        conversations_count: 250,
        resolved_conversations_count: 200,
        avg_resolution_time: 2800,
        avg_first_response_time: 240,
        avg_reply_time: 500,
      },
      {
        id: 2,
        conversations_count: 180,
        resolved_conversations_count: 150,
        avg_resolution_time: 2400,
        avg_first_response_time: 200,
        avg_reply_time: 450,
      },
    ],
  })
  .openapi('TeamSummary')

const ContactDetailSchema = z
  .object({
    additional_attributes: z
      .object({
        city: z.string().exactOptional().openapi({ description: 'City of the contact' }),
        country: z.string().exactOptional().openapi({ description: 'Country of the contact' }),
        country_code: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Country code of the contact' }),
        created_at_ip: z
          .string()
          .exactOptional()
          .openapi({ description: 'IP address when the contact was created' }),
      })
      .exactOptional()
      .openapi({
        description: 'The object containing additional attributes related to the contact',
        required: [],
      }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The custom attributes of the contact' }),
    email: z.string().exactOptional().openapi({ description: 'The email address of the contact' }),
    id: z.int().exactOptional().openapi({ description: 'The ID of the contact' }),
    identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The identifier of the contact' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the contact' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The phone number of the contact' }),
    thumbnail: z.string().exactOptional().openapi({ description: 'The thumbnail of the contact' }),
    blocked: z.boolean().exactOptional().openapi({ description: 'Whether the contact is blocked' }),
    type: z.literal('contact').exactOptional().openapi({ description: 'The type of entity' }),
  })
  .openapi({ required: [] })
  .openapi('ContactDetail')

const MessageDetailedSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The ID of the message' }),
    content: z.string().exactOptional().openapi({ description: 'The text content of the message' }),
    inbox_id: z.number().exactOptional().openapi({ description: 'The ID of the inbox' }),
    conversation_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The ID of the conversation' }),
    message_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description: 'The type of the message (0: incoming, 1: outgoing, 2: activity, 3: template)',
      }),
    content_type: z
      .enum([
        'text',
        'input_text',
        'input_textarea',
        'input_email',
        'input_select',
        'cards',
        'form',
        'article',
        'incoming_email',
        'input_csat',
        'integrations',
        'sticker',
        'voice_call',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the message content' }),
    status: z
      .enum(['sent', 'delivered', 'read', 'failed'])
      .exactOptional()
      .openapi({ description: 'The status of the message' }),
    content_attributes: z
      .object({
        in_reply_to: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'ID of the message this is replying to' }),
      })
      .exactOptional()
      .openapi({ description: 'The content attributes for each content_type', required: [] }),
    echo_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The echo ID of the message, used for deduplication' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'The timestamp when message was created' }),
    private: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The flag which shows whether the message is private or not' }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The source ID of the message' }),
    sender: ContactDetailSchema.exactOptional(),
    attachments: z
      .array(
        z
          .object({
            id: z.number().exactOptional().openapi({ description: 'The ID of the attachment' }),
            message_id: z
              .number()
              .exactOptional()
              .openapi({ description: 'The ID of the message' }),
            file_type: z
              .enum([
                'image',
                'video',
                'audio',
                'file',
                'location',
                'fallback',
                'share',
                'story_mention',
                'contact',
                'ig_reel',
              ])
              .exactOptional()
              .openapi({ description: 'The type of the attached file' }),
            account_id: z
              .number()
              .exactOptional()
              .openapi({ description: 'The ID of the account' }),
            data_url: z
              .string()
              .exactOptional()
              .openapi({ description: 'The URL of the attached file' }),
            thumb_url: z
              .string()
              .exactOptional()
              .openapi({ description: 'The thumbnail URL of the attached file' }),
            file_size: z
              .number()
              .exactOptional()
              .openapi({ description: 'The size of the attached file in bytes' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The list of attachments associated with the message' }),
  })
  .openapi({ required: [] })
  .openapi('MessageDetailed')

const ConversationMetaSchema = z
  .object({
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Labels associated with the conversation' }),
    additional_attributes: z
      .object({
        browser: z
          .object({
            device_name: z.string().exactOptional().openapi({ description: 'Name of the device' }),
            browser_name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the browser' }),
            platform_name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the platform' }),
            browser_version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Version of the browser' }),
            platform_version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Version of the platform' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        referer: z.string().exactOptional().openapi({ description: 'Referrer URL' }),
        initiated_at: z
          .object({
            timestamp: z
              .string()
              .exactOptional()
              .openapi({ description: 'Timestamp when the conversation was initiated' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        browser_language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Browser language setting' }),
        conversation_language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Conversation language' }),
      })
      .exactOptional()
      .openapi({ description: 'Additional attributes of the conversation', required: [] }),
    contact: ContactDetailSchema.exactOptional(),
    assignee: AgentSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The agent assigned to the conversation' }),
    agent_last_seen_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp when the agent last saw the conversation' }),
    assignee_last_seen_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp when the assignee last saw the conversation' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationMeta')

const ConversationMessagesSchema = z
  .object({
    meta: ConversationMetaSchema.exactOptional(),
    payload: z
      .array(MessageDetailedSchema)
      .exactOptional()
      .openapi({ description: 'List of messages in the conversation' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationMessages')

const ContactMetaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Total number of contacts' }),
    current_page: z
      .union([z.string(), z.int()])
      .exactOptional()
      .openapi({ description: 'Current page number' }),
  })
  .openapi({ required: [] })
  .openapi('ContactMeta')

const ContactInboxSchema = z
  .object({
    source_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source identifier for the contact inbox' }),
    inbox: z
      .object({
        id: z.int().exactOptional().openapi({ description: 'ID of the inbox' }),
        avatar_url: z.string().exactOptional().openapi({ description: 'URL for the inbox avatar' }),
        channel_id: z.int().exactOptional().openapi({ description: 'ID of the channel' }),
        name: z.string().exactOptional().openapi({ description: 'Name of the inbox' }),
        channel_type: z.string().exactOptional().openapi({ description: 'Type of channel' }),
        provider: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Provider of the inbox' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ContactInbox')

const ContactListItemSchema = z
  .object({
    additional_attributes: z
      .object({
        city: z.string().exactOptional().openapi({ description: 'City of the contact' }),
        country: z.string().exactOptional().openapi({ description: 'Country of the contact' }),
        country_code: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Country code of the contact' }),
        created_at_ip: z
          .string()
          .exactOptional()
          .openapi({ description: 'IP address when the contact was created' }),
      })
      .exactOptional()
      .openapi({
        description: 'The object containing additional attributes related to the contact',
        required: [],
      }),
    availability_status: z
      .enum(['online', 'offline'])
      .exactOptional()
      .openapi({ description: 'Availability status of the contact' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The email address of the contact' }),
    id: z.int().exactOptional().openapi({ description: 'The ID of the contact' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the contact' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The phone number of the contact' }),
    blocked: z.boolean().exactOptional().openapi({ description: 'Whether the contact is blocked' }),
    identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The identifier of the contact' }),
    thumbnail: z.string().exactOptional().openapi({ description: 'The thumbnail of the contact' }),
    custom_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The custom attributes of the contact' }),
    last_activity_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp of last activity' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp when contact was created' }),
    contact_inboxes: z
      .array(ContactInboxSchema)
      .exactOptional()
      .openapi({ description: 'List of inboxes associated with this contact' }),
  })
  .openapi({ required: [] })
  .openapi('ContactListItem')

const ContactsListResponseSchema = z
  .object({
    meta: ContactMetaSchema.exactOptional(),
    payload: z
      .array(ContactListItemSchema)
      .exactOptional()
      .openapi({ description: 'List of contacts' }),
  })
  .openapi({ required: [] })
  .openapi('ContactsListResponse')

const ContactShowResponseSchema = z
  .object({ payload: ContactListItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ContactShowResponse')

const ContactConversationMessageSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'ID of the message' }),
    content: z.string().exactOptional().openapi({ description: 'Content of the message' }),
    account_id: z.int().exactOptional().openapi({ description: 'ID of the account' }),
    inbox_id: z.int().exactOptional().openapi({ description: 'ID of the inbox' }),
    conversation_id: z.int().exactOptional().openapi({ description: 'ID of the conversation' }),
    message_type: z.int().exactOptional().openapi({ description: 'Type of the message' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp when message was created' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Formatted datetime when message was updated' }),
    private: z.boolean().exactOptional().openapi({ description: 'Whether the message is private' }),
    status: z.string().exactOptional().openapi({ description: 'Status of the message' }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Source ID of the message' }),
    content_type: z.string().exactOptional().openapi({ description: 'Type of the content' }),
    content_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Attributes of the content' }),
    sender_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Type of the sender' }),
    sender_id: z.int().nullable().exactOptional().openapi({ description: 'ID of the sender' }),
    external_source_ids: z
      .object({})
      .exactOptional()
      .openapi({ description: 'External source IDs' }),
    additional_attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional attributes of the message' }),
    processed_message_content: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Processed message content' }),
    sentiment: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Sentiment analysis of the message' }),
    conversation: z
      .object({
        assignee_id: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'ID of the assignee' }),
        unread_count: z.int().exactOptional().openapi({ description: 'Count of unread messages' }),
        last_activity_at: z
          .int()
          .exactOptional()
          .openapi({ description: 'Timestamp of last activity' }),
        contact_inbox: z
          .object({
            source_id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Source ID of the contact inbox' }),
          })
          .exactOptional()
          .openapi({ description: 'Contact inbox details', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Conversation details', required: [] }),
    sender: z
      .object({
        id: z.int().exactOptional().openapi({ description: 'ID of the sender' }),
        name: z.string().exactOptional().openapi({ description: 'Name of the sender' }),
        available_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Available name of the sender' }),
        avatar_url: z
          .string()
          .exactOptional()
          .openapi({ description: "URL of the sender's avatar" }),
        type: z.string().exactOptional().openapi({ description: 'Type of the sender' }),
        availability_status: z
          .string()
          .exactOptional()
          .openapi({ description: 'Availability status of the sender' }),
        thumbnail: z
          .string()
          .exactOptional()
          .openapi({ description: 'Thumbnail URL of the sender' }),
      })
      .exactOptional()
      .openapi({ description: 'Details of the sender', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ContactConversationMessage')

const ContactConversationsResponseSchema = z
  .object({
    payload: z
      .array(
        ConversationSchema.and(
          z
            .object({
              meta: z
                .object({
                  sender: z
                    .object({
                      additional_attributes: z
                        .object({})
                        .exactOptional()
                        .openapi({ description: 'The additional attributes of the sender' }),
                      availability_status: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The availability status of the sender' }),
                      email: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'The email of the sender' }),
                      id: z.number().exactOptional().openapi({ description: 'ID fo the sender' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the sender' }),
                      phone_number: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'The phone number of the sender' }),
                      blocked: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the sender is blocked' }),
                      identifier: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'The identifier of the sender' }),
                      thumbnail: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Avatar URL of the contact' }),
                      custom_attributes: z
                        .object({})
                        .exactOptional()
                        .openapi({ description: 'The custom attributes of the sender' }),
                      last_activity_at: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'The last activity at of the sender' }),
                      created_at: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'The created at of the sender' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  channel: z.string().exactOptional().openapi({ description: 'Channel Type' }),
                  assignee: UserSchema.exactOptional(),
                  hmac_verified: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the hmac is verified' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional()
      .openapi({ description: 'List of conversations for the contact' }),
  })
  .openapi({ required: [] })
  .openapi('ContactConversationsResponse')

const ContactableInboxesResponseSchema = z
  .object({
    payload: z
      .array(ContactInboxSchema)
      .exactOptional()
      .openapi({ description: 'List of contactable inboxes for the contact' }),
  })
  .openapi({ required: [] })
  .openapi('ContactableInboxesResponse')

const ReportingEventSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'ID of the reporting event' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the event (e.g., first_response, resolution, reply_time)' }),
    value: z.float64().exactOptional().openapi({ description: 'Value of the metric in seconds' }),
    value_in_business_hours: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Value of the metric in seconds, calculated only for business hours',
      }),
    event_start_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp when the event started' }),
    event_end_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp when the event ended' }),
    account_id: z.number().exactOptional().openapi({ description: 'ID of the account' }),
    conversation_id: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the conversation' }),
    inbox_id: z.number().nullable().exactOptional().openapi({ description: 'ID of the inbox' }),
    user_id: z.number().nullable().exactOptional().openapi({ description: 'ID of the user/agent' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp when the reporting event was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp when the reporting event was last updated' }),
  })
  .openapi({ required: [] })
  .openapi('ReportingEvent')

const ReportingEventMetaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Total number of reporting events' }),
    current_page: z.int().exactOptional().openapi({ description: 'Current page number' }),
    total_pages: z.int().exactOptional().openapi({ description: 'Total number of pages' }),
  })
  .openapi({ required: [] })
  .openapi('ReportingEventMeta')

const ReportingEventsListResponseSchema = z
  .object({
    meta: ReportingEventMetaSchema.exactOptional(),
    payload: z
      .array(ReportingEventSchema)
      .exactOptional()
      .openapi({ description: 'List of reporting events' }),
  })
  .openapi({ required: [] })
  .openapi('ReportingEventsListResponse')

const CampaignSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Account-scoped campaign ID. Use this value in campaign API paths.',
      }),
    title: z.string().exactOptional(),
    description: z.string().nullable().exactOptional(),
    account_id: z.int().exactOptional(),
    inbox: InboxSchema.exactOptional(),
    sender: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Sender details, or an empty object when no sender is assigned.' }),
    message: z.string().exactOptional(),
    template_params: z.looseObject({}).nullable().exactOptional(),
    campaign_status: z.enum(['active', 'processing', 'completed']).exactOptional(),
    campaign_type: z
      .enum(['ongoing', 'one_off'])
      .exactOptional()
      .openapi({
        description:
          'Derived from the inbox type; website campaigns are ongoing and supported messaging campaigns are one-off.',
      }),
    enabled: z.boolean().exactOptional(),
    scheduled_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Scheduled time in Unix seconds. Only present for one-off campaigns.',
      }),
    started_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Start time in Unix seconds. Only present for one-off campaigns.' }),
    completed_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Completion time in Unix seconds. Only present for one-off campaigns.',
      }),
    audience: z
      .array(
        z
          .object({ type: z.string().exactOptional(), id: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Audience for a one-off campaign. Only present for one-off campaigns.',
      }),
    trigger_rules: z.looseObject({}).exactOptional(),
    trigger_only_during_business_hours: z.boolean().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Campaign')

const CampaignWhatsappTemplateParamsSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .openapi({
        description: "Name of the approved template in the selected inbox's message_templates.",
      }),
    language: z
      .string()
      .min(1)
      .openapi({
        description: 'Language code matching that template in the selected inbox.',
        example: 'en',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Template namespace, when present in the selected template.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Category of the selected template.' }),
    processed_params: z
      .object({
        body: z.record(z.string(), z.string()).exactOptional(),
        header: z
          .looseObject({})
          .exactOptional()
          .openapi({
            description:
              'Text parameter values or media_url, media_type, and optional media_name for a media header.',
          }),
        footer: z.record(z.string(), z.string()).exactOptional(),
        buttons: z.array(z.looseObject({})).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          "Values for the selected template's variables, grouped by component. Supply all parameters needed by that template. May be omitted for a template without variables. Body keys use positional numbers or the template's named parameters. Liquid expressions such as {{ contact.name }} are rendered separately for each recipient.",
        example: { body: { '1': '{{ contact.name }}' } },
        required: [],
      }),
  })
  .openapi({ required: ['name', 'language'] })
  .openapi('CampaignWhatsappTemplateParams')

const CampaignFieldsSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'Campaign title.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Internal description of the campaign.' }),
    inbox_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.',
      }),
    sender_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of a user in this account to use as the campaign sender.' }),
    message: z.string().exactOptional().openapi({ description: 'Campaign message content.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.',
      }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.',
        example: '2027-01-15T10:00:00Z',
      }),
    audience: z
      .array(
        z
          .object({
            type: z.literal('Label'),
            id: z.int().openapi({ description: 'ID of a label in this account.' }),
          })
          .openapi({ required: ['type', 'id'] }),
      )
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.',
      }),
    trigger_rules: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.',
        example: { url: 'https://example.com/pricing', time_on_page: 10 },
      }),
    trigger_only_during_business_hours: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Restrict an ongoing website campaign to inbox business hours.' }),
    template_params: CampaignWhatsappTemplateParamsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignFields')

const CampaignCreatePayloadSchema = z
  .object({
    campaign: CampaignFieldsSchema.and(
      z.object({}).openapi({ required: ['title', 'inbox_id', 'message'] }),
    )
      .and(
        z.union([
          z
            .object({ trigger_rules: z.object({ url: z.url() }).openapi({ required: ['url'] }) })
            .openapi({
              title: 'Website campaign',
              description:
                'For a Website inbox, supply URL trigger rules. An audience is not required.',
              required: ['trigger_rules'],
            }),
          z
            .object({})
            .openapi({
              title: 'SMS campaign',
              description: 'For an SMS or Twilio SMS inbox, supply at least one audience label.',
              required: ['audience'],
            }),
          z
            .object({})
            .openapi({
              title: 'WhatsApp campaign',
              description:
                'For a WhatsApp Cloud inbox with campaigns enabled, supply audience labels and template parameters.',
              required: ['audience', 'template_params'],
            }),
        ]),
      )
      .openapi({
        description:
          'Choose the variant matching the inbox referenced by inbox_id. The channel type is stored on the inbox and cannot be inferred from this request by a schema validator. These variants describe the inputs needed for delivery; creation can accept incomplete inputs without guaranteeing that the campaign will send.',
      }),
  })
  .openapi({ required: ['campaign'] })
  .openapi('CampaignCreatePayload')

const CampaignUpdatePayloadSchema = z
  .object({ campaign: CampaignFieldsSchema })
  .openapi({ required: ['campaign'] })
  .openapi('CampaignUpdatePayload')

const AccountIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'account_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the account',
    },
  })

const AgentBotIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'id',
      schema: { type: 'integer' },
      required: true,
      description: 'The ID of the agentbot to be updated',
    },
  })

const TeamIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'team_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The ID of the team to be updated',
    },
  })

const InboxIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'inbox_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The ID of the Inbox',
    },
  })

const HookIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'hook_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the integration hook',
    },
  })

const SourceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'source_id',
      required: true,
      schema: { type: 'string' },
      description:
        'Id of the session for which the conversation is created.\n\n\n\n Source Ids can be obtained through contactable inboxes API or via generated.<br/><br/>Website: Chatwoot generated string which can be obtained from webhook events. <br/> Phone Channels(Twilio): Phone number in e164 format <br/> Email Channels: Contact Email address <br/> API Channel: Any Random String',
    },
  })

const ContactSortParamParamsSchema = z
  .enum([
    'name',
    'email',
    'phone_number',
    'last_activity_at',
    '-name',
    '-email',
    '-phone_number',
    '-last_activity_at',
  ])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'sort',
      schema: {
        type: 'string',
        enum: [
          'name',
          'email',
          'phone_number',
          'last_activity_at',
          '-name',
          '-email',
          '-phone_number',
          '-last_activity_at',
        ],
      },
      required: false,
      description: 'The attribute by which list should be sorted',
    },
  })

const ConversationIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'conversation_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the conversation',
    },
  })

const ConversationUuidParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'conversation_uuid',
      schema: { type: 'integer' },
      required: true,
      description: 'The uuid of the conversation',
    },
  })

const CustomFilterIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'custom_filter_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the custom filter',
    },
  })

const WebhookIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'webhook_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the webhook',
    },
  })

const MessageIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'message_id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the message',
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'page',
      schema: { type: 'integer', default: 1 },
      required: false,
      description: 'The page parameter',
    },
  })

const PlatformUserIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'id',
      schema: { type: 'integer' },
      required: true,
      description: 'The numeric ID of the user on the platform',
    },
  })

const ReportTypeParamsSchema = z
  .enum(['account', 'agent', 'inbox', 'label', 'team'])
  .openapi({
    param: {
      in: 'query',
      name: 'type',
      schema: { type: 'string', enum: ['account', 'agent', 'inbox', 'label', 'team'] },
      required: true,
      description: 'Type of report',
    },
  })

const ReportMetricParamsSchema = z
  .enum([
    'conversations_count',
    'incoming_messages_count',
    'outgoing_messages_count',
    'avg_first_response_time',
    'avg_resolution_time',
    'resolutions_count',
  ])
  .openapi({
    param: {
      in: 'query',
      name: 'metric',
      schema: {
        type: 'string',
        enum: [
          'conversations_count',
          'incoming_messages_count',
          'outgoing_messages_count',
          'avg_first_response_time',
          'avg_resolution_time',
          'resolutions_count',
        ],
      },
      required: true,
      description: 'The type of metric',
    },
  })

const PublicInboxIdentifierParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'inbox_identifier',
      schema: { type: 'string' },
      required: true,
      description: 'The identifier obtained from API inbox channel',
    },
  })

const PublicContactIdentifierParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'contact_identifier',
      schema: { type: 'string' },
      required: true,
      description: 'The source id of contact obtained on contact create',
    },
  })

const PortalSlugParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'portal_slug',
      schema: { type: 'string' },
      required: true,
      description: 'The slug of the portal. The numeric portal ID is not accepted.',
      example: 'handbook',
    },
  })

const UserBearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Authenticate with `Authorization: Bearer <token>` using a user API token from **Profile Settings**. Available in Chatwoot `v4.19.0` and later.',
}

const AgentBotBearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Authenticate with `Authorization: Bearer <token>` using an agent bot token from **Settings → Agent Bots**. Available in Chatwoot `v4.19.0` and later.',
}

const PlatformAppBearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Authenticate with `Authorization: Bearer <token>` using a platform app token from **Super Admin**. Available in Chatwoot `v4.19.0` and later.',
}

const UserApiKeySecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'api_access_token',
  description:
    'Find your API token in **Profile Settings**. The `api_access_token` header remains supported, but will be deprecated in a future release. For new integrations, use Bearer authentication.',
}

const AgentBotApiKeySecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'api_access_token',
  description:
    'Find your agent bot token in **Settings → Agent Bots**. For new integrations, use Bearer authentication in Chatwoot `v4.19.0` and later. Agent bot tokens can access only bot-permitted APIs.',
}

const PlatformAppApiKeySecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'api_access_token',
  description:
    'Create a platform app in **Super Admin** to get its token. For new integrations, use Bearer authentication in Chatwoot `v4.19.0` and later. Platform app tokens can provision agent bots, accounts, users, and roles.',
}

export const postPlatformApiV1AccountsRoute = createRoute({
  method: 'post',
  path: '/platform/api/v1/accounts',
  tags: ['Accounts'],
  summary: 'Create an Account',
  description: 'Create an Account',
  operationId: 'create-an-account',
  request: {
    body: {
      content: { 'application/json': { schema: AccountCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PlatformAccountSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1AccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Get an account details',
  description: 'Get the details of an account',
  operationId: 'get-details-of-an-account',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PlatformAccountSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given account does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const deletePlatformApiV1AccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/platform/api/v1/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Delete an Account',
  description: 'Delete an Account',
  operationId: 'delete-an-account',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The account does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const patchPlatformApiV1AccountsAccountIdRoute = createRoute({
  method: 'patch',
  path: '/platform/api/v1/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Update an account',
  description: "Update an account's attributes",
  operationId: 'update-an-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AccountCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PlatformAccountSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1AccountsAccountIdAccountUsersRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/accounts/{account_id}/account_users',
  tags: ['Account Users'],
  summary: 'List all Account Users',
  description: 'List all account users',
  operationId: 'list-all-account-users',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountUserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const postPlatformApiV1AccountsAccountIdAccountUsersRoute = createRoute({
  method: 'post',
  path: '/platform/api/v1/accounts/{account_id}/account_users',
  tags: ['Account Users'],
  summary: 'Create an Account User',
  description: 'Create an Account User',
  operationId: 'create-an-account-user',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AccountUserCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z.int().exactOptional().openapi({ description: 'The ID of the account' }),
              user_id: z.int().exactOptional().openapi({ description: 'The ID of the user' }),
              role: z
                .string()
                .exactOptional()
                .openapi({ description: 'whether user is an administrator or agent' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const deletePlatformApiV1AccountsAccountIdAccountUsersRoute = createRoute({
  method: 'delete',
  path: '/platform/api/v1/accounts/{account_id}/account_users',
  tags: ['Account Users'],
  summary: 'Delete an Account User',
  description: 'Delete an Account User',
  operationId: 'delete-an-account-user',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The account does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1AgentBotsRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/agent_bots',
  tags: ['AgentBots'],
  summary: 'List all AgentBots',
  description: 'List all agent bots available',
  operationId: 'list-all-agent-bots',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentBotSchema).openapi({ description: 'Array of agent bots' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const postPlatformApiV1AgentBotsRoute = createRoute({
  method: 'post',
  path: '/platform/api/v1/agent_bots',
  tags: ['AgentBots'],
  summary: 'Create an Agent Bot',
  description: 'Create an agent bot',
  operationId: 'create-an-agent-bot',
  request: {
    body: {
      content: { 'application/json': { schema: PlatformAgentBotCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1AgentBotsIdRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/agent_bots/{id}',
  tags: ['AgentBots'],
  summary: 'Get an agent bot details',
  description: 'Get the details of an agent bot',
  operationId: 'get-details-of-a-single-agent-bot',
  request: { params: z.object({ id: AgentBotIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given agent bot ID does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const deletePlatformApiV1AgentBotsIdRoute = createRoute({
  method: 'delete',
  path: '/platform/api/v1/agent_bots/{id}',
  tags: ['AgentBots'],
  summary: 'Delete an AgentBot',
  description: 'Delete an AgentBot',
  operationId: 'delete-an-agent-bot',
  request: { params: z.object({ id: AgentBotIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The agent bot does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const patchPlatformApiV1AgentBotsIdRoute = createRoute({
  method: 'patch',
  path: '/platform/api/v1/agent_bots/{id}',
  tags: ['AgentBots'],
  summary: 'Update an agent bot',
  description: "Update an agent bot's attributes",
  operationId: 'update-an-agent-bot',
  request: {
    params: z.object({ id: AgentBotIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: PlatformAgentBotCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const postPlatformApiV1UsersRoute = createRoute({
  method: 'post',
  path: '/platform/api/v1/users',
  tags: ['Users'],
  summary: 'Create a User',
  description: 'Create a User',
  operationId: 'create-a-user',
  request: {
    body: {
      content: { 'application/json': { schema: UserCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1UsersIdRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Get an user details',
  description: 'Get the details of an user',
  operationId: 'get-details-of-a-user',
  request: { params: z.object({ id: PlatformUserIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given user does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const deletePlatformApiV1UsersIdRoute = createRoute({
  method: 'delete',
  path: '/platform/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Delete a User',
  description: 'Delete a User',
  operationId: 'delete-a-user',
  request: { params: z.object({ id: PlatformUserIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The user does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const patchPlatformApiV1UsersIdRoute = createRoute({
  method: 'patch',
  path: '/platform/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Update a user',
  description: "Update a user's attributes",
  operationId: 'update-a-user',
  request: {
    params: z.object({ id: PlatformUserIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: UserCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPlatformApiV1UsersIdLoginRoute = createRoute({
  method: 'get',
  path: '/platform/api/v1/users/{id}/login',
  tags: ['Users'],
  summary: 'Get User SSO Link',
  description: 'Get the sso link of a user',
  operationId: 'get-sso-url-of-a-user',
  request: { params: z.object({ id: PlatformUserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .exactOptional()
                .openapi({ description: 'SSO url to autenticate the user' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given user does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const postPlatformApiV1UsersIdTokenRoute = createRoute({
  method: 'post',
  path: '/platform/api/v1/users/{id}/token',
  tags: ['Users'],
  summary: 'Get User Access Token',
  description: 'Get the access token of a user',
  operationId: 'post-user-token',
  request: { params: z.object({ id: PlatformUserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Access token of the user' }),
              expiry: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Expiry timestamp' }),
              user: z
                .object({
                  id: z.int().exactOptional().openapi({ description: 'User ID' }),
                  name: z.string().exactOptional().openapi({ description: "User's full name" }),
                  display_name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "User's display name" }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "User's email address" }),
                  pubsub_token: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "User's pubsub token" }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'The given user does not exist' },
  },
  security: [{ platformAppBearerAuth: [] }, { platformAppApiKey: [] }],
})

export const getPublicApiV1InboxesInboxIdentifierRoute = createRoute({
  method: 'get',
  path: '/public/api/v1/inboxes/{inbox_identifier}',
  tags: ['Inbox API'],
  summary: 'Inbox details',
  description: 'Get the details of an inbox',
  operationId: 'get-details-of-a-inbox',
  request: { params: z.object({ inbox_identifier: PublicInboxIdentifierParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PublicInboxSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given inbox does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [],
})

export const postPublicApiV1InboxesInboxIdentifierContactsRoute = createRoute({
  method: 'post',
  path: '/public/api/v1/inboxes/{inbox_identifier}/contacts',
  tags: ['Contacts API'],
  summary: 'Create a contact',
  description: 'Create a contact',
  operationId: 'create-a-contact',
  request: {
    params: z.object({ inbox_identifier: PublicInboxIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: PublicContactCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublicContactSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [],
})

export const getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute = createRoute({
  method: 'get',
  path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
  tags: ['Contacts API'],
  summary: 'Get a contact',
  description: 'Get the details of a contact',
  operationId: 'get-details-of-a-contact',
  request: {
    params: z.object({
      inbox_identifier: PublicInboxIdentifierParamsSchema,
      contact_identifier: PublicContactIdentifierParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublicContactSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given contact does not exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [],
})

export const patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute = createRoute({
  method: 'patch',
  path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
  tags: ['Contacts API'],
  summary: 'Update a contact',
  description: "Update a contact's attributes",
  operationId: 'update-a-contact',
  request: {
    params: z.object({
      inbox_identifier: PublicInboxIdentifierParamsSchema,
      contact_identifier: PublicContactIdentifierParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: PublicContactCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublicContactRecordSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [],
})

export const getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute =
  createRoute({
    method: 'get',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
    tags: ['Conversations API'],
    summary: 'List all conversations',
    description: 'List all conversations for the contact',
    operationId: 'list-all-contact-conversations',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z
              .array(PublicConversationSchema)
              .openapi({ description: 'Array of conversations' }),
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute =
  createRoute({
    method: 'post',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
    tags: ['Conversations API'],
    summary: 'Create a conversation',
    description: 'Create a conversation',
    operationId: 'create-a-conversation',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: PublicConversationCreatePayloadSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PublicConversationSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdRoute =
  createRoute({
    method: 'get',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}',
    tags: ['Conversations API'],
    summary: 'Get a single conversation',
    description: 'Retrieves the details of a specific conversation',
    operationId: 'get-single-conversation',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PublicConversationSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusRoute =
  createRoute({
    method: 'post',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status',
    tags: ['Conversations API'],
    summary: 'Resolve a conversation',
    description: 'Marks a conversation as resolved',
    operationId: 'resolve-conversation',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Conversation resolved successfully',
        content: { 'application/json': { schema: PublicConversationSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingRoute =
  createRoute({
    method: 'post',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing',
    tags: ['Conversations API'],
    summary: 'Toggle typing status',
    description: 'Toggles the typing status in a conversation',
    operationId: 'toggle-typing-status',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      query: z.object({
        typing_status: z
          .string()
          .openapi({
            param: {
              name: 'typing_status',
              in: 'query',
              required: true,
              schema: { type: 'string' },
              description: "Typing status, either 'on' or 'off'",
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                typing_status: z
                  .enum(['on', 'off'])
                  .exactOptional()
                  .openapi({ description: 'The typing status to set', example: 'on' }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: { description: 'Typing status toggled successfully' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenRoute =
  createRoute({
    method: 'post',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen',
    tags: ['Conversations API'],
    summary: 'Update last seen and mark messages read',
    description:
      "Updates the contact's last seen time for the conversation and marks agent messages\nsent before that time as read. Use this to send read receipts from a custom client\nbuilt on the API channel, so agents can see when the contact has read their messages.\n",
    operationId: 'update-last-seen',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: { description: 'Last seen updated successfully' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute =
  createRoute({
    method: 'get',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
    tags: ['Messages API'],
    summary: 'List all messages',
    description: 'List all messages in the conversation',
    operationId: 'list-all-conversation-messages',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z.array(PublicMessageSchema).openapi({ description: 'Array of messages' }),
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute =
  createRoute({
    method: 'post',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
    tags: ['Messages API'],
    summary: 'Create a message',
    description: 'Create a message',
    operationId: 'create-a-message',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: PublicMessageCreatePayloadSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PublicMessageSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdRoute =
  createRoute({
    method: 'patch',
    path: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}',
    tags: ['Messages API'],
    summary: 'Update a message',
    description: 'Update a message',
    operationId: 'update-a-message',
    request: {
      params: z.object({
        inbox_identifier: PublicInboxIdentifierParamsSchema,
        contact_identifier: PublicContactIdentifierParamsSchema,
        conversation_id: ConversationIdParamsSchema,
        message_id: MessageIdParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: PublicMessageUpdatePayloadSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PublicMessageSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [],
  })

export const getSurveyResponsesConversationUuidRoute = createRoute({
  method: 'get',
  path: '/survey/responses/{conversation_uuid}',
  tags: ['CSAT Survey Page'],
  summary: 'Get CSAT survey page',
  description:
    'You can redirect the client to this URL, instead of implementing the CSAT survey component yourself.',
  operationId: 'get-csat-survey-page',
  request: { params: z.object({ conversation_uuid: ConversationUuidParamsSchema }) },
  responses: { 200: { description: 'Success' } },
  security: [],
})

export const getApiV1AccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}',
  tags: ['Account'],
  summary: 'Get account details',
  description: 'Get the details of the current account',
  operationId: 'get-account-details',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AccountShowResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Account not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}',
  tags: ['Account'],
  summary: 'Update account',
  description: 'Update account details, settings, and custom attributes',
  operationId: 'update-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': { schema: AccountUpdatePayloadSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the account', example: 'My Account' }),
              locale: z
                .string()
                .exactOptional()
                .openapi({ description: 'The locale of the account', example: 'en' }),
              domain: z
                .string()
                .exactOptional()
                .openapi({ description: 'The domain of the account', example: 'example.com' }),
              support_email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The support email of the account',
                  example: 'support@example.com',
                }),
              auto_resolve_after: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(10).max(1439856),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description: 'Auto resolve conversations after specified minutes',
                  example: 1440,
                }),
              auto_resolve_message: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Message to send when auto resolving',
                  example: 'This conversation has been automatically resolved due to inactivity',
                }),
              auto_resolve_ignore_waiting: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether to ignore waiting conversations for auto resolve',
                  example: false,
                }),
              industry: z
                .string()
                .exactOptional()
                .openapi({ description: 'Industry type', example: 'Technology' }),
              company_size: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company size', example: '50-100' }),
              timezone: z
                .string()
                .exactOptional()
                .openapi({ description: 'Account timezone', example: 'UTC' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AccountDetailSchema } },
    },
    401: {
      description: 'Unauthorized (requires administrator role)',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Account not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAuditLogsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/audit_logs',
  tags: ['Audit Logs'],
  summary: 'List Audit Logs in Account',
  description:
    'Get Details of Audit Log entries for an Account. This endpoint is only available in Enterprise editions and requires the audit_logs feature to be enabled.',
  operationId: 'get-account-audit-logs',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page number for pagination',
            required: false,
            schema: { type: 'integer', default: 1 },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description: 'Filter entries by the name or email of the user who performed the action',
            required: false,
            schema: { type: 'string' },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: 'Inbox' })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description: 'Filter entries by the type of the audited record',
            required: false,
            schema: { type: 'array', items: { type: 'string', example: 'Inbox' } },
          },
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'since',
            in: 'query',
            description: 'Only return entries created at or after this unix timestamp',
            required: false,
            schema: { type: 'integer', example: 1755388800 },
          },
          example: 1755388800,
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'until',
            in: 'query',
            description: 'Only return entries created at or before this unix timestamp',
            required: false,
            schema: { type: 'integer', example: 1755993599 },
          },
          example: 1755993599,
        }),
      sort: z
        .enum(['desc', 'asc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Order of the entries by creation time',
            required: false,
            schema: { type: 'string', enum: ['desc', 'asc'], default: 'desc' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of items per page', example: 25 }),
              total_entries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of audit log entries', example: 150 }),
              current_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'Current page number', example: 1 }),
              audit_logs: z
                .array(AuditLogSchema)
                .exactOptional()
                .openapi({ description: 'Array of audit log entries' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Feature not enabled or not available in current plan',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAgentBotsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/agent_bots',
  tags: ['Account AgentBots'],
  summary: 'List all AgentBots',
  description: 'List all agent bots available for the current account',
  operationId: 'list-all-account-agent-bots',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentBotSchema).openapi({ description: 'Array of agent bots' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdAgentBotsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/agent_bots',
  tags: ['Account AgentBots'],
  summary: 'Create an Agent Bot',
  description: 'Create an agent bot in the account',
  operationId: 'create-an-account-agent-bot',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AgentBotCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAgentBotsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/agent_bots/{id}',
  tags: ['Account AgentBots'],
  summary: 'Get an agent bot details',
  description: 'Get the details of an agent bot in the account',
  operationId: 'get-details-of-a-single-account-agent-bot',
  request: { params: z.object({ account_id: AccountIdParamsSchema, id: AgentBotIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given agent bot ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdAgentBotsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/agent_bots/{id}',
  tags: ['Account AgentBots'],
  summary: 'Delete an AgentBot',
  description: 'Delete an AgentBot from the account',
  operationId: 'delete-an-account-agent-bot',
  request: { params: z.object({ account_id: AccountIdParamsSchema, id: AgentBotIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The agent bot does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdAgentBotsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/agent_bots/{id}',
  tags: ['Account AgentBots'],
  summary: 'Update an agent bot',
  description: "Update an agent bot's attributes",
  operationId: 'update-an-account-agent-bot',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, id: AgentBotIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AgentBotCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAgentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/agents',
  tags: ['Agents'],
  summary: 'List Agents in Account',
  description: 'Get Details of Agents in an Account',
  operationId: 'get-account-agents',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ description: 'Array of all active agents' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdAgentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/agents',
  tags: ['Agents'],
  summary: 'Add a New Agent',
  description: 'Add a new Agent to Account',
  operationId: 'add-new-agent-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: { content: { 'application/json': { schema: AgentCreatePayloadSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdAgentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/agents/{id}',
  tags: ['Agents'],
  summary: 'Remove an Agent from Account',
  description: 'Remove an Agent from Account',
  operationId: 'delete-agent-from-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the agent to be deleted.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Agent not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdAgentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/agents/{id}',
  tags: ['Agents'],
  summary: 'Update Agent in Account',
  description: 'Update an Agent in Account',
  operationId: 'update-agent-in-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the agent to be updated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentUpdatePayloadSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AgentSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Agent not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCannedResponsesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/canned_responses',
  tags: ['Canned Responses'],
  summary: 'List all Canned Responses in an Account',
  description: 'Get Details of Canned Responses in an Account',
  operationId: 'get-account-canned-response',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(CannedResponseSchema)
            .openapi({ description: 'Array of all canned responses' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdCannedResponsesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/canned_responses',
  tags: ['Canned Responses'],
  summary: 'Add a New Canned Response',
  description: 'Add a new Canned Response to Account',
  operationId: 'add-new-canned-response-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: CannedResponseCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CannedResponseSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdCannedResponsesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/canned_responses/{id}',
  tags: ['Canned Responses'],
  summary: 'Remove a Canned Response from Account',
  description: 'Remove a Canned Response from Account',
  operationId: 'delete-canned-response-from-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the canned response to be deleted',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Canned Response not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdCannedResponsesIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/canned_responses/{id}',
  tags: ['Canned Responses'],
  summary: 'Update Canned Response in Account',
  description: 'Update a Canned Response in Account',
  operationId: 'update-canned-response-in-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the canned response to be updated.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CannedResponseCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CannedResponseSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Agent not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/custom_attribute_definitions',
  tags: ['Custom Attributes'],
  summary: 'List all custom attributes in an account',
  description: 'Get details of custom attributes in an Account',
  operationId: 'get-account-custom-attribute',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      attribute_model: z
        .enum(['0', '1'])
        .openapi({
          param: {
            name: 'attribute_model',
            in: 'query',
            schema: { type: 'string', enum: ['0', '1'] },
            description: 'conversation_attribute(0)/contact_attribute(1)',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(CustomAttributeSchema)
            .openapi({ description: 'Array of all custom attributes' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/custom_attribute_definitions',
  tags: ['Custom Attributes'],
  summary: 'Add a new custom attribute',
  description: 'Add a new custom attribute to account',
  operationId: 'add-new-custom-attribute-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: CustomAttributeCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomAttributeSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
  tags: ['Custom Attributes'],
  summary: 'Get a custom attribute details',
  description: 'Get the details of a custom attribute in the account',
  operationId: 'get-details-of-a-single-custom-attribute',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the custom attribute to be updated.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomAttributeSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given attribute ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
  tags: ['Custom Attributes'],
  summary: 'Remove a custom attribute from account',
  description: 'Remove a custom attribute from account',
  operationId: 'delete-custom-attribute-from-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the custom attribute to be deleted',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Custom attribute not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
  tags: ['Custom Attributes'],
  summary: 'Update custom attribute in Account',
  description: 'Update a custom attribute in account',
  operationId: 'update-custom-attribute-in-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the custom attribute to be updated.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CustomAttributeCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomAttributeSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Agent not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts',
  tags: ['Contacts'],
  summary: 'List Contacts',
  description:
    'Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number',
  operationId: 'contactList',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({ sort: ContactSortParamParamsSchema, page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactsListResponseSchema } },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdContactsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/contacts',
  tags: ['Contacts'],
  summary: 'Create Contact',
  description: 'Create a new Contact',
  operationId: 'contactCreate',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: ContactCreatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExtendedContactSchema } },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Show Contact',
  description: 'Get a contact belonging to the account using ID',
  operationId: 'contactDetails',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactShowResponseSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const putApiV1AccountsAccountIdContactsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/accounts/{account_id}/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Update Contact',
  description: 'Update a contact belonging to the account using ID',
  operationId: 'contactUpdate',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ContactUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success', content: { 'application/json': { schema: ContactBaseSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdContactsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Delete Contact',
  description: 'Delete a contact belonging to the account using ID',
  operationId: 'contactDelete',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsIdConversationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts/{id}/conversations',
  tags: ['Contacts'],
  summary: 'Contact Conversations',
  description: 'Get conversations associated with that contact',
  operationId: 'contactConversations',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactConversationsResponseSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsIdLabelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts/{id}/labels',
  tags: ['Contact Labels'],
  summary: 'List Labels',
  description: 'Lists all the labels of a contact',
  operationId: 'list-all-labels-of-a-contact',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactLabelsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdContactsIdLabelsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/contacts/{id}/labels',
  tags: ['Contact Labels'],
  summary: 'Add Labels',
  description:
    'Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.',
  operationId: 'contact-add-labels',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the contact',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              labels: z
                .array(z.string())
                .openapi({
                  description: 'Array of labels (comma-separated strings)',
                  example: ['support', 'billing'],
                }),
            })
            .openapi({ required: ['labels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactLabelsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Contact not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts/search',
  tags: ['Contacts'],
  summary: 'Search Contacts',
  description:
    'Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number',
  operationId: 'contactSearch',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            schema: { type: 'string' },
            description: 'Search using contact `name`, `identifier`, `email` or `phone number`',
            required: false,
          },
        }),
      sort: ContactSortParamParamsSchema,
      page: PageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactsListResponseSchema } },
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdContactsFilterRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/contacts/filter',
  tags: ['Contacts'],
  summary: 'Contact Filter',
  description: 'Filter contacts with custom filter options and pagination',
  operationId: 'contactFilter',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'page', in: 'query', schema: { type: 'number' }, required: false },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(
                  z
                    .object({
                      attribute_key: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'filter attribute name' }),
                      filter_operator: z
                        .enum(['equal_to', 'not_equal_to', 'contains', 'does_not_contain'])
                        .exactOptional()
                        .openapi({ description: 'filter operator name' }),
                      values: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'array of the attribute values to filter' }),
                      timezone: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'IANA timezone for created_at and last_activity_at date comparisons, including days_before. Omit to retain UTC behavior. Date-only custom attributes are not converted.',
                          example: 'America/Sao_Paulo',
                        }),
                      query_operator: z
                        .enum(['AND', 'OR'])
                        .exactOptional()
                        .openapi({ description: 'query operator name' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      attribute_key: 'name',
                      filter_operator: 'equal_to',
                      values: ['en'],
                      query_operator: 'AND',
                    },
                    {
                      attribute_key: 'country_code',
                      filter_operator: 'equal_to',
                      values: ['us'],
                      query_operator: null,
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactsListResponseSchema } },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdContactsIdContactInboxesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes',
  tags: ['Contacts'],
  summary: 'Create contact inbox',
  description: 'Create a contact inbox record for an inbox',
  operationId: 'contactInboxCreation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the contact',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inbox_id: z.number().openapi({ description: 'The ID of the inbox', example: 1 }),
              source_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact Inbox Source Id' }),
            })
            .openapi({ required: ['inbox_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactInboxesSchema } },
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Incorrect payload',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdContactsIdContactableInboxesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes',
  tags: ['Contacts'],
  summary: 'Get Contactable Inboxes',
  description: 'Get List of contactable Inboxes',
  operationId: 'contactableInboxesGet',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the contact',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactableInboxesResponseSchema } },
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Incorrect payload',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdActionsContactMergeRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/actions/contact_merge',
  tags: ['Contacts'],
  summary: 'Merge Contacts',
  description:
    'Merge two contacts into a single contact. The base contact remains and receives all\ndata from the mergee contact. After the merge, the mergee contact is permanently deleted.\n\nThis action is irreversible. All conversations, labels, and custom attributes from the\nmergee contact will be moved to the base contact.\n',
  operationId: 'contactMerge',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              base_contact_id: z
                .int()
                .openapi({
                  description:
                    'ID of the contact that will remain after the merge and receive all data',
                  example: 1,
                }),
              mergee_contact_id: z
                .int()
                .openapi({
                  description:
                    'ID of the contact that will be merged into the base contact and deleted',
                  example: 2,
                }),
            })
            .openapi({ required: ['base_contact_id', 'mergee_contact_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Contacts merged successfully',
      content: { 'application/json': { schema: ContactBaseSchema } },
    },
    400: {
      description: 'Bad request - invalid contact IDs or contacts cannot be merged',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'One or both contacts not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAutomationRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/automation_rules',
  tags: ['Automation Rule'],
  summary: 'List all automation rules in an account',
  description: 'Get details of automation rules in an Account',
  operationId: 'get-account-automation-rule',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutomationRuleSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdAutomationRulesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/automation_rules',
  tags: ['Automation Rule'],
  summary: 'Add a new automation rule',
  description: 'Add a new automation rule to account',
  operationId: 'add-new-automation-rule-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AutomationRuleCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutomationRuleSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdAutomationRulesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/automation_rules/{id}',
  tags: ['Automation Rule'],
  summary: 'Get a automation rule details',
  description: 'Get the details of a automation rule in the account',
  operationId: 'get-details-of-a-single-automation-rule',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the automation rule to be updated.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AutomationRuleSchema,
          example: {
            payload: {
              id: 90,
              account_id: 1,
              name: 'add-label-bug-if-message-contains-bug',
              description: 'add-label-bug-if-message-contains-bug',
              event_name: 'message_created',
              conditions: [
                {
                  values: ['incoming'],
                  attribute_key: 'message_type',
                  query_operator: 'and',
                  filter_operator: 'equal_to',
                },
                { values: ['bug'], attribute_key: 'content', filter_operator: 'contains' },
              ],
              actions: [{ action_name: 'add_label', action_params: ['bugs', 'support-query'] }],
              created_on: 1650555440,
              active: true,
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given rule ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdAutomationRulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/automation_rules/{id}',
  tags: ['Automation Rule'],
  summary: 'Remove a automation rule from account',
  description: 'Remove a automation rule from account',
  operationId: 'delete-automation-rule-from-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the automation rule to be deleted',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'automation rule not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdAutomationRulesIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/automation_rules/{id}',
  tags: ['Automation Rule'],
  summary: 'Update automation rule in Account',
  description: 'Update a automation rule in account',
  operationId: 'update-automation-rule-in-account',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'The ID of the automation rule to be updated.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AutomationRuleCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutomationRuleSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdPortalsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/portals',
  tags: ['Help Center'],
  summary: 'List all portals in an account',
  description: 'Get details of portals in an Account',
  operationId: 'get-portal',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PortalSchema,
          example: {
            payload: [
              {
                id: 4,
                color: '#1F93FF',
                custom_domain: 'chatwoot.help',
                header_text: 'Handbook',
                homepage_link: 'https://www.chatwoot.com',
                name: 'Handbook',
                page_title: 'Handbook',
                slug: 'handbook',
                archived: false,
                account_id: 1,
                config: {
                  allowed_locales: [{ code: 'en', articles_count: 32, categories_count: 9 }],
                },
                inbox: {
                  id: 37,
                  avatar_url: 'https://example.com/avatar.png',
                  channel_id: 1,
                  name: 'Chatwoot',
                  channel_type: 'Channel::WebWidget',
                  greeting_enabled: true,
                  widget_color: '#1F93FF',
                  website_url: 'chatwoot.com',
                },
                logo: {
                  id: 19399916,
                  portal_id: 4,
                  file_type: 'image/png',
                  account_id: 1,
                  file_url: 'https://example.com/logo.png',
                  blob_id: 21239614,
                  filename: 'square.png',
                },
                meta: { all_articles_count: 0, categories_count: 9, default_locale: 'en' },
              },
            ],
          },
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdPortalsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/portals',
  tags: ['Help Center'],
  summary: 'Add a new portal',
  description: 'Add a new portal to account',
  operationId: 'add-new-portal-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: PortalCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PortalSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdPortalsPortalSlugRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/portals/{portal_slug}',
  tags: ['Help Center'],
  summary: 'Get a portal details',
  description: 'Get the details of a portal in the account',
  operationId: 'get-details-of-a-single-portal',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, portal_slug: PortalSlugParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PortalItemSchema,
          example: {
            id: 123,
            archived: false,
            color: '#1F93FF',
            config: { allowed_locales: [{ code: 'en', articles_count: 32, categories_count: 9 }] },
            custom_domain: 'chatwoot.help',
            header_text: 'Handbook',
            homepage_link: 'https://www.chatwoot.com',
            name: 'Handbook',
            slug: 'handbook',
            page_title: 'Handbook',
            account_id: 123,
            inbox: {
              id: 123,
              name: 'Chatwoot',
              website_url: 'chatwoot.com',
              channel_type: 'Channel::WebWidget',
              avatar_url: 'https://example.com/avatar.png',
              widget_color: '#1F93FF',
              website_token: '4cWzuf9i9jxN9tbnv8K9STKU',
              enable_auto_assignment: true,
              web_widget_script: '<script>...</script>',
              welcome_title: 'Hi there ! 🙌🏼',
              welcome_tagline: 'We make it simple to connect with us.',
              greeting_enabled: true,
              greeting_message: 'Hey there 👋, Thank you for reaching out to us.',
              channel_id: 123,
              working_hours_enabled: true,
              enable_email_collect: true,
              csat_survey_enabled: true,
              timezone: 'America/Los_Angeles',
              business_name: 'Chatwoot',
              hmac_mandatory: true,
            },
            logo: {
              id: 123,
              portal_id: 123,
              file_type: 'image/png',
              account_id: 123,
              file_url: 'https://example.com/logo.png',
              blob_id: 123,
              filename: 'square.png',
            },
            meta: { all_articles_count: 32, categories_count: 9, default_locale: 'en' },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given portal slug does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdPortalsPortalSlugRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/portals/{portal_slug}',
  tags: ['Help Center'],
  summary: 'Update a portal',
  description: 'Update a portal to account',
  operationId: 'update-portal-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, portal_slug: PortalSlugParamsSchema }),
    body: {
      content: { 'application/json': { schema: PortalCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PortalSingleSchema,
          example: {
            payload: {
              id: 123,
              archived: false,
              color: '#1F93FF',
              config: {
                allowed_locales: [{ code: 'en', articles_count: 32, categories_count: 9 }],
              },
              custom_domain: 'chatwoot.help',
              header_text: 'Handbook',
              homepage_link: 'https://www.chatwoot.com',
              name: 'Handbook',
              slug: 'handbook',
              page_title: 'Handbook',
              account_id: 123,
              inbox: {
                id: 123,
                name: 'Chatwoot',
                website_url: 'chatwoot.com',
                channel_type: 'Channel::WebWidget',
                avatar_url: 'https://example.com/avatar.png',
                widget_color: '#1F93FF',
                website_token: '4cWzuf9i9jxN9tbnv8K9STKU',
                enable_auto_assignment: true,
                web_widget_script: '<script>...</script>',
                welcome_title: 'Hi there ! 🙌🏼',
                welcome_tagline: 'We make it simple to connect with us.',
                greeting_enabled: true,
                greeting_message: 'Hey there 👋, Thank you for reaching out to us.',
                channel_id: 123,
                working_hours_enabled: true,
                enable_email_collect: true,
                csat_survey_enabled: true,
                timezone: 'America/Los_Angeles',
                business_name: 'Chatwoot',
                hmac_mandatory: true,
              },
              logo: {
                id: 123,
                portal_id: 123,
                file_type: 'image/png',
                account_id: 123,
                file_url: 'https://example.com/logo.png',
                blob_id: 123,
                filename: 'square.png',
              },
              meta: { all_articles_count: 32, categories_count: 9, default_locale: 'en' },
            },
          },
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Portal not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/portals/{portal_slug}/categories',
  tags: ['Help Center'],
  summary: 'Add a new category',
  description: 'Add a new category to portal',
  operationId: 'add-new-category-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, portal_slug: PortalSlugParamsSchema }),
    body: {
      content: { 'application/json': { schema: CategoryCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CategorySchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/portals/{portal_slug}/articles',
  tags: ['Help Center'],
  summary: 'Add a new article',
  description: 'Add a new article to portal',
  operationId: 'add-new-article-to-account',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, portal_slug: PortalSlugParamsSchema }),
    body: {
      content: { 'application/json': { schema: ArticleCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ArticleSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdConversationsMetaRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/conversations/meta',
  tags: ['Conversations'],
  summary: 'Get Conversation Counts',
  description: 'Get open, unassigned and all Conversation counts',
  operationId: 'conversationListMeta',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      status: z
        .enum(['all', 'open', 'resolved', 'pending', 'snoozed'])
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['all', 'open', 'resolved', 'pending', 'snoozed'],
              default: 'open',
            },
            description: 'Filter by conversation status.',
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filters conversations with messages containing the search term',
            required: false,
          },
        }),
      inbox_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'inbox_id', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      team_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'team_id', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({
                  mine_count: z.number().exactOptional(),
                  unassigned_count: z.number().exactOptional(),
                  assigned_count: z.number().exactOptional(),
                  all_count: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdConversationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/conversations',
  tags: ['Conversations'],
  summary: 'Conversations List',
  description: 'List all the conversations with pagination',
  operationId: 'conversationList',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      assignee_type: z
        .enum(['me', 'unassigned', 'all', 'assigned'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'assignee_type',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['me', 'unassigned', 'all', 'assigned'],
              default: 'all',
            },
            description: 'Filter conversations by assignee type.',
            required: false,
          },
        }),
      status: z
        .enum(['all', 'open', 'resolved', 'pending', 'snoozed'])
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['all', 'open', 'resolved', 'pending', 'snoozed'],
              default: 'open',
            },
            description: 'Filter by conversation status.',
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filters conversations with messages containing the search term',
            required: false,
          },
        }),
      inbox_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'inbox_id', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      team_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'team_id', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', default: 1 },
            description: 'paginate through conversations',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationListSchema } },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdConversationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations',
  tags: ['Conversations'],
  summary: 'Create New Conversation',
  description:
    'Creating a conversation in chatwoot requires a source id. \n\n Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel',
  operationId: 'newConversation',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: ConversationCreatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional().openapi({ description: 'ID of the conversation' }),
              account_id: z.number().exactOptional().openapi({ description: 'Account Id' }),
              inbox_id: z.number().exactOptional().openapi({ description: 'ID of the inbox' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [
    { userBearerAuth: [] },
    { agentBotBearerAuth: [] },
    { userApiKey: [] },
    { agentBotApiKey: [] },
  ],
})

export const postApiV1AccountsAccountIdConversationsFilterRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations/filter',
  tags: ['Conversations'],
  summary: 'Conversations Filter',
  description: 'Filter conversations with custom filter options and pagination',
  operationId: 'conversationFilter',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'page', in: 'query', schema: { type: 'number' }, required: false },
        }),
      sort_by: z
        .enum([
          'last_activity_at_asc',
          'last_activity_at_desc',
          'created_at_asc',
          'created_at_desc',
          'priority_asc',
          'priority_desc',
          'waiting_since_asc',
          'waiting_since_desc',
          'priority_desc_created_at_asc',
          'unread',
        ])
        .default('last_activity_at_desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            in: 'query',
            description:
              'Sort filtered conversations using the same options as the conversation list.',
            schema: {
              type: 'string',
              default: 'last_activity_at_desc',
              enum: [
                'last_activity_at_asc',
                'last_activity_at_desc',
                'created_at_asc',
                'created_at_desc',
                'priority_asc',
                'priority_desc',
                'waiting_since_asc',
                'waiting_since_desc',
                'priority_desc_created_at_asc',
                'unread',
              ],
            },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(
                  z
                    .object({
                      attribute_key: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'filter attribute name' }),
                      filter_operator: z
                        .enum(['equal_to', 'not_equal_to', 'contains', 'does_not_contain'])
                        .exactOptional()
                        .openapi({ description: 'filter operator name' }),
                      values: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'array of the attribute values to filter' }),
                      timezone: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'IANA timezone for created_at and last_activity_at date comparisons, including days_before. Omit to retain UTC behavior. Date-only custom attributes are not converted.',
                          example: 'America/Sao_Paulo',
                        }),
                      query_operator: z
                        .enum(['AND', 'OR'])
                        .exactOptional()
                        .openapi({ description: 'query operator name' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      attribute_key: 'browser_language',
                      filter_operator: 'not_equal_to',
                      values: ['en'],
                      query_operator: 'AND',
                    },
                    {
                      attribute_key: 'status',
                      filter_operator: 'equal_to',
                      values: ['pending'],
                      query_operator: null,
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationListSchema } },
    },
    400: {
      description: 'Bad Request Error',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdConversationsConversationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}',
  tags: ['Conversations'],
  summary: 'Conversation Details',
  description: 'Get all details regarding a conversation with all messages in the conversation',
  operationId: 'get-details-of-a-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationShowSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { agentBotBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdConversationsConversationIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}',
  tags: ['Conversations'],
  summary: 'Update Conversation',
  description: 'Update Conversation Attributes',
  operationId: 'update-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              priority: z
                .union([
                  z.literal('urgent'),
                  z.literal('high'),
                  z.literal('medium'),
                  z.literal('low'),
                  z.literal(null),
                ])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The priority of the conversation. Set to null to clear the priority.',
                  example: 'high',
                }),
              sla_policy_id: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The ID of the SLA policy (Available only in Enterprise edition)',
                  example: 1,
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Validation error',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }).openapi({ required: ['error'] }),
        },
      },
    },
  },
  security: [
    { userBearerAuth: [] },
    { agentBotBearerAuth: [] },
    { userApiKey: [] },
    { agentBotApiKey: [] },
  ],
})

export const postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status',
  tags: ['Conversations'],
  summary: 'Toggle Status',
  description:
    'Toggle the status of a conversation. Pass `status` to explicitly set the\nconversation state. Use `snoozed` along with `snoozed_until` to snooze a\nconversation until a specific time. If `snoozed_until` is omitted, the\nconversation is snoozed until the next reply from the contact. Regardless\nof the value provided, snoozed conversations always reopen on the next\nreply from the contact.',
  operationId: 'toggle-status-of-a-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['open', 'resolved', 'pending', 'snoozed'])
                .openapi({ description: 'The status of the conversation', example: 'open' }),
              snoozed_until: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.',
                  example: 1757506877,
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z.object({}).exactOptional(),
              payload: z
                .object({
                  success: z.boolean().exactOptional(),
                  current_status: z
                    .enum(['open', 'resolved', 'pending', 'snoozed'])
                    .exactOptional(),
                  conversation_id: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [
    { userBearerAuth: [] },
    { agentBotBearerAuth: [] },
    { userApiKey: [] },
    { agentBotApiKey: [] },
  ],
})

export const postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute = createRoute(
  {
    method: 'post',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority',
    tags: ['Conversations'],
    summary: 'Toggle Priority',
    description: 'Toggles the priority of conversation',
    operationId: 'toggle-priority-of-a-conversation',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                priority: z
                  .union([
                    z.literal('urgent'),
                    z.literal('high'),
                    z.literal('medium'),
                    z.literal('low'),
                    z.literal(null),
                  ])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The priority of the conversation. Omit or set to null to clear the priority.',
                    example: 'high',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: { description: 'Success' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      422: {
        description: 'Validation error',
        content: {
          'application/json': {
            schema: z.object({ error: z.string() }).openapi({ required: ['error'] }),
          },
        },
      },
    },
    security: [
      { userBearerAuth: [] },
      { agentBotBearerAuth: [] },
      { userApiKey: [] },
      { agentBotApiKey: [] },
    ],
  },
)

export const postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status',
    tags: ['Conversations'],
    summary: 'Toggle Typing Status',
    description: 'Toggles the typing status for a conversation.',
    operationId: 'toggle-typing-status-of-a-conversation',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                typing_status: z
                  .enum(['on', 'off'])
                  .openapi({ description: 'Typing status to set.', example: 'on' }),
                is_private: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the typing event is for private notes.',
                    example: false,
                  }),
              })
              .openapi({ required: ['typing_status'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [
      { userBearerAuth: [] },
      { agentBotBearerAuth: [] },
      { userApiKey: [] },
      { agentBotApiKey: [] },
    ],
  })

export const postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute = createRoute(
  {
    method: 'post',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/update_last_seen',
    tags: ['Conversations'],
    summary: 'Update Last Seen',
    description:
      'Updates the last seen of the conversation so that conversations will have the bubbles in the agents screen',
    operationId: 'conversationUpdateLastSeen',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ConversationShowSchema } },
      },
      403: {
        description: 'Access denied',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Contact not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { userApiKey: [] }],
  },
)

export const postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes',
    tags: ['Conversations'],
    summary: 'Update Custom Attributes',
    description: 'Updates the custom attributes of a conversation',
    operationId: 'update-custom-attributes-of-a-conversation',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                custom_attributes: z
                  .object({})
                  .openapi({
                    description: 'The custom attributes to be set for the conversation',
                    example: { order_id: '12345', previous_conversation: '67890' },
                  }),
                merge: z
                  .boolean()
                  .default(false)
                  .exactOptional()
                  .openapi({
                    description:
                      'When true, only the keys sent in `custom_attributes` are updated and the remaining keys are kept intact. When false (default), the whole custom attributes hash is replaced. Use the destroy_custom_attributes endpoint to remove keys.',
                  }),
              })
              .openapi({ required: ['custom_attributes'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z
              .object({
                custom_attributes: z
                  .object({})
                  .exactOptional()
                  .openapi({ description: 'The custom attributes of the conversation' }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { agentBotBearerAuth: [] }, { userApiKey: [] }],
  })

export const postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/destroy_custom_attributes',
    tags: ['Conversations'],
    summary: 'Destroy Custom Attributes',
    description: 'Removes the given custom attribute keys from a conversation',
    operationId: 'destroy-custom-attributes-of-a-conversation',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                custom_attributes: z
                  .array(z.string())
                  .openapi({
                    description:
                      'The list of custom attribute keys to remove from the conversation',
                    example: ['order_id', 'previous_conversation'],
                  }),
              })
              .openapi({ required: ['custom_attributes'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z
              .object({
                custom_attributes: z
                  .object({})
                  .exactOptional()
                  .openapi({ description: 'The remaining custom attributes of the conversation' }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { userApiKey: [] }],
  })

export const postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments',
  tags: ['Conversation Assignments'],
  summary: 'Assign Conversation',
  description: 'Assign a conversation to an agent or a team',
  operationId: 'assign-a-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assignee_id: z
                .number()
                .exactOptional()
                .openapi({ description: 'Id of the assignee user', example: 1 }),
              team_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Id of the team. If the assignee_id is present, this param would be ignored',
                  example: 1,
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [
    { userBearerAuth: [] },
    { agentBotBearerAuth: [] },
    { userApiKey: [] },
    { agentBotApiKey: [] },
  ],
})

export const getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
  tags: ['Conversations'],
  summary: 'List Labels',
  description: 'Lists all the labels of a conversation',
  operationId: 'list-all-labels-of-a-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationLabelsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { agentBotBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
  tags: ['Conversations'],
  summary: 'Add Labels',
  description:
    'Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.',
  operationId: 'conversation-add-labels',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              labels: z
                .array(z.string())
                .openapi({
                  description: 'Array of labels (comma-separated strings)',
                  example: ['support', 'billing'],
                }),
            })
            .openapi({ required: ['labels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationLabelsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { agentBotBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute = createRoute(
  {
    method: 'get',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events',
    tags: ['Conversations'],
    summary: 'Conversation Reporting Events',
    description:
      'Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.',
    operationId: 'get-conversation-reporting-events',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z
              .array(ReportingEventSchema)
              .openapi({ description: 'Array of reporting events for the conversation' }),
          },
        },
      },
      403: {
        description: 'Access denied',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'Conversation not found',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { userApiKey: [] }],
  },
)

export const getApiV1AccountsAccountIdBrandedEmailLayoutRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/branded_email_layout',
  tags: ['Inboxes'],
  summary: 'Get account branded email layout',
  description:
    'Get the account-scoped Liquid HTML layout used as the fallback for branded email replies.',
  operationId: 'getAccountBrandedEmailLayout',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BrandedEmailLayoutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdBrandedEmailLayoutRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/branded_email_layout',
  tags: ['Inboxes'],
  summary: 'Update account branded email layout',
  description:
    'Update or clear the account-scoped Liquid HTML layout used as the fallback for branded email replies.',
  operationId: 'updateAccountBrandedEmailLayout',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AccountBrandedEmailLayoutPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BrandedEmailLayoutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'Validation failed',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdInboxesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/inboxes',
  tags: ['Inboxes'],
  summary: 'List all inboxes',
  description: 'List all inboxes available in the current account',
  operationId: 'listAllInboxes',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(InboxSchema)
                .exactOptional()
                .openapi({ description: 'Array of inboxes' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdInboxesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/inboxes',
  tags: ['Inboxes'],
  summary: 'Create an inbox',
  description: 'You can create more than one website inbox in each account',
  operationId: 'inboxCreation',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: InboxCreatePayloadSchema,
          examples: {
            web_widget: {
              summary: 'Website inbox',
              value: {
                name: 'Support',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_email_collect: true,
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                allow_messages_after_resolved: true,
                channel: {
                  type: 'web_widget',
                  website_url: 'https://example.com',
                  welcome_title: 'Welcome to our support',
                  welcome_tagline: 'We are here to help you',
                  widget_color: '#FF5733',
                  reply_time: 'in_a_few_minutes',
                  pre_chat_form_enabled: false,
                  continuity_via_email: true,
                  hmac_mandatory: false,
                  selected_feature_flags: ['attachments', 'emoji_picker', 'end_conversation'],
                },
              },
            },
            api: {
              summary: 'API channel',
              value: {
                name: 'API Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  type: 'api',
                  webhook_url: 'https://example.com/webhook',
                  hmac_mandatory: false,
                  additional_attributes: { source: 'mobile_app' },
                },
              },
            },
            email: {
              summary: 'Email channel',
              value: {
                name: 'Email Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  type: 'email',
                  email: 'support@example.com',
                  imap_enabled: false,
                  smtp_enabled: false,
                },
              },
            },
            line: {
              summary: 'LINE channel',
              value: {
                name: 'LINE Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  type: 'line',
                  line_channel_id: '1234567890',
                  line_channel_secret: 'line-channel-secret',
                  line_channel_token: 'line-channel-token',
                },
              },
            },
            telegram: {
              summary: 'Telegram channel',
              value: {
                name: 'Telegram Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: { type: 'telegram', bot_token: '123456789:telegram-bot-token' },
              },
            },
            whatsapp: {
              summary: 'WhatsApp channel',
              value: {
                name: 'WhatsApp Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  type: 'whatsapp',
                  phone_number: '+15551234567',
                  provider: 'whatsapp_cloud',
                  provider_config: {
                    api_key: 'your-api-key',
                    phone_number_id: 'your-phone-number-id',
                    business_account_id: 'your-business-account-id',
                  },
                },
              },
            },
            sms: {
              summary: 'SMS channel',
              value: {
                name: 'SMS Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  type: 'sms',
                  phone_number: '+15551234567',
                  provider_config: {
                    api_key: 'your-api-key',
                    api_secret: 'your-api-secret',
                    application_id: 'your-application-id',
                    account_id: 'your-account-id',
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: InboxSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdInboxesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/inboxes/{id}',
  tags: ['Inboxes'],
  summary: 'Get an inbox',
  description: 'Get an inbox available in the current account',
  operationId: 'GetInbox',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the inbox',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: InboxSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdInboxesIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/inboxes/{id}',
  tags: ['Inboxes'],
  summary: 'Update Inbox',
  description: 'Update an existing inbox',
  operationId: 'updateInbox',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the inbox',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: InboxUpdatePayloadSchema,
          examples: {
            web_widget: {
              summary: 'Website inbox settings',
              value: {
                name: 'Support',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_email_collect: true,
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                allow_messages_after_resolved: true,
                channel: {
                  website_url: 'https://example.com',
                  welcome_title: 'Welcome to our support',
                  welcome_tagline: 'We are here to help you',
                  widget_color: '#FF5733',
                  reply_time: 'in_a_few_minutes',
                  pre_chat_form_enabled: false,
                  continuity_via_email: true,
                  hmac_mandatory: false,
                  selected_feature_flags: ['attachments', 'emoji_picker', 'end_conversation'],
                },
              },
            },
            api: {
              summary: 'API channel settings',
              value: {
                name: 'API Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  webhook_url: 'https://example.com/webhook',
                  hmac_mandatory: false,
                  additional_attributes: { source: 'mobile_app' },
                },
              },
            },
            email: {
              summary: 'Email channel settings',
              value: {
                name: 'Email Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: { email: 'support@example.com', imap_enabled: false, smtp_enabled: false },
              },
            },
            line: {
              summary: 'LINE channel settings',
              value: {
                name: 'LINE Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  line_channel_id: '1234567890',
                  line_channel_secret: 'line-channel-secret',
                  line_channel_token: 'line-channel-token',
                },
              },
            },
            telegram: {
              summary: 'Telegram channel settings',
              value: {
                name: 'Telegram Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: { bot_token: '123456789:telegram-bot-token' },
              },
            },
            whatsapp: {
              summary: 'WhatsApp channel settings',
              value: {
                name: 'WhatsApp Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  phone_number: '+15551234567',
                  provider: 'whatsapp_cloud',
                  provider_config: {
                    api_key: 'your-api-key',
                    phone_number_id: 'your-phone-number-id',
                    business_account_id: 'your-business-account-id',
                  },
                },
              },
            },
            sms: {
              summary: 'SMS channel settings',
              value: {
                name: 'SMS Inbox',
                greeting_enabled: true,
                greeting_message: 'Hello, how can I help you?',
                enable_auto_assignment: true,
                working_hours_enabled: true,
                timezone: 'America/New_York',
                channel: {
                  phone_number: '+15551234567',
                  provider_config: {
                    api_key: 'your-api-key',
                    api_secret: 'your-api-secret',
                    application_id: 'your-application-id',
                    account_id: 'your-account-id',
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: InboxSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/inboxes/{id}/message_templates',
  tags: ['Inboxes'],
  summary: 'List WhatsApp message templates',
  description: 'List the cached message templates available for a native or Twilio WhatsApp inbox',
  operationId: 'listWhatsappMessageTemplates',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the native or Twilio WhatsApp inbox',
            required: true,
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description: 'Exact template name to filter by',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(z.looseObject({}))
                .exactOptional()
                .openapi({
                  description:
                    'Native or Twilio WhatsApp message templates available for the inbox',
                }),
              meta: z
                .object({
                  last_sync_attempt_at: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Time when template synchronization was last attempted',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'The inbox is not a WhatsApp inbox',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdInboxesIdAgentBotRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot',
  tags: ['Inboxes'],
  summary: 'Show Inbox Agent Bot',
  description: 'See if an agent bot is associated to the Inbox',
  operationId: 'getInboxAgentBot',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the inbox',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success', content: { 'application/json': { schema: AgentBotSchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found, Agent bot not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot',
  tags: ['Inboxes'],
  summary: 'Add or remove agent bot',
  description: 'To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null',
  operationId: 'updateAgentBot',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'number' },
            description: 'ID of the inbox',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ agent_bot: z.number().openapi({ description: 'Agent bot ID', example: 1 }) })
            .openapi({ required: ['agent_bot'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found, Agent bot not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdInboxMembersInboxIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/inbox_members/{inbox_id}',
  tags: ['Inboxes'],
  summary: 'List Agents in Inbox',
  description: 'Get Details of Agents in an Inbox',
  operationId: 'get-inbox-members',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, inbox_id: InboxIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(AgentSchema)
                .exactOptional()
                .openapi({ description: 'Array of all active agents' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdInboxMembersRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/inbox_members',
  tags: ['Inboxes'],
  summary: 'Add a New Agent',
  description: 'Add a new Agent to Inbox',
  operationId: 'add-new-agent-to-inbox',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inbox_id: z.int().openapi({ description: 'The ID of the inbox', example: 1 }),
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be added to the inbox', example: [1] }),
            })
            .openapi({ required: ['inbox_id', 'user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(AgentSchema)
                .exactOptional()
                .openapi({ description: 'Array of all active agents' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdInboxMembersRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/inbox_members',
  tags: ['Inboxes'],
  summary: 'Remove an Agent from Inbox',
  description: 'Remove an Agent from Inbox',
  operationId: 'delete-agent-in-inbox',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inbox_id: z.string().openapi({ description: 'The ID of the inbox' }),
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be deleted from the inbox' }),
            })
            .openapi({ required: ['inbox_id', 'user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdInboxMembersRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/inbox_members',
  tags: ['Inboxes'],
  summary: 'Update Agents in Inbox',
  description: 'All agents except the one passed in params will be removed',
  operationId: 'update-agents-in-inbox',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inbox_id: z.string().openapi({ description: 'The ID of the inbox', example: 1 }),
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be added to the inbox', example: [1] }),
            })
            .openapi({ required: ['inbox_id', 'user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(AgentSchema)
                .exactOptional()
                .openapi({ description: 'Array of all active agents' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Inbox not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdLabelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/labels',
  tags: ['Labels'],
  summary: 'List all labels',
  description: 'List all labels available in the current account',
  operationId: 'list-all-labels',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(LabelSchema)
                .exactOptional()
                .openapi({ description: 'Array of labels' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdLabelsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/labels',
  tags: ['Labels'],
  summary: 'Create a label',
  description: 'Create a label in the account',
  operationId: 'create-a-label',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: LabelCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LabelSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdLabelsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/labels/{id}',
  tags: ['Labels'],
  summary: 'Get a label',
  description: 'Get the details of a label in the account',
  operationId: 'get-details-of-a-single-label',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the label',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LabelSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given label ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdLabelsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/labels/{id}',
  tags: ['Labels'],
  summary: 'Delete a label',
  description: 'Delete a label from the account',
  operationId: 'delete-a-label',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the label',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The label does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdLabelsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/labels/{id}',
  tags: ['Labels'],
  summary: 'Update a label',
  description: "Update a label's attributes",
  operationId: 'update-a-label',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'number' },
            description: 'ID of the label',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: LabelCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LabelSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
  tags: ['Messages'],
  summary: 'Get messages',
  description: 'List all messages of a conversation',
  operationId: 'list-all-messages',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    query: z.object({
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            schema: { type: 'integer' },
            description:
              'Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.',
            required: false,
          },
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            schema: { type: 'integer' },
            description:
              'Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({
                  labels: z.array(z.string()).exactOptional(),
                  additional_attributes: z.object({}).exactOptional(),
                  contact: ContactSchema.exactOptional(),
                  assignee: AgentSchema.exactOptional(),
                  agent_last_seen_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                  assignee_last_seen_at: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              payload: z
                .array(MessageSchema)
                .exactOptional()
                .openapi({ description: 'Array of messages' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
  tags: ['Messages'],
  summary: 'Create New Message',
  description:
    'Create a new message in the conversation.\n\nUse `application/json` for text messages and `multipart/form-data` when the\nmessage includes file attachments.\n\n### Multipart attachment request\n\nSend files with the `attachments[]` form field. `curl -F` sets the\n`multipart/form-data` content type and boundary automatically.\n\n```bash\ncurl -X POST "https://app.chatwoot.com/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages" \\\n  -H "Authorization: Bearer <your-api-token>" \\\n  -F "content=Here is the screenshot" \\\n  -F "message_type=outgoing" \\\n  -F "private=false" \\\n  -F "attachments[]=@/path/to/screenshot.png"\n```\n\n## WhatsApp Template Messages\n\nFor WhatsApp channels, you can send structured template messages using the `template_params` field. \nTemplates must be pre-approved in WhatsApp Business Manager.\n\nBy default, `content` is treated as the already-rendered transcript text for\ncompatibility with existing API and mobile clients. To submit the original\ntemplate body instead, set `template_params.content_mode` to `raw_template`;\nChatwoot will substitute `processed_params.body` before saving the transcript.\n\n### Example Templates\n\n**Text with Image Header:**\n```json\n{\n  "content": "Hi your order 121212 is confirmed. Please wait for further updates",\n  "template_params": {\n    "name": "order_confirmation",\n    "category": "MARKETING",\n    "language": "en",\n    "processed_params": {\n      "body": {\n        "1": "121212"\n      },\n      "header": {\n        "media_url": "https://picsum.photos/200/300",\n        "media_type": "image"\n      }\n    }\n  }\n}\n```\n\n**Text with Copy Code Button:**\n```json\n{\n  "content": "Special offer! Get 30% off your next purchase. Use the code below",\n  "template_params": {\n    "name": "discount_coupon",\n    "category": "MARKETING",\n    "language": "en",\n    "processed_params": {\n      "body": {\n        "discount_percentage": "30"\n      },\n      "buttons": [{\n        "type": "copy_code",\n        "parameter": "SAVE20"\n      }]\n    }\n  }\n}\n```\n',
  operationId: 'create-a-new-message-in-a-conversation',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: ConversationIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: ConversationMessageCreatePayloadSchema },
        'multipart/form-data': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The content of the message',
                  example: 'Here is the screenshot',
                }),
              message_type: z
                .enum(['outgoing', 'incoming'])
                .exactOptional()
                .openapi({ description: 'The type of the message', example: 'outgoing' }),
              private: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Flag to identify if it is a private note',
                  example: false,
                }),
              content_type: z
                .enum(['text', 'input_email', 'cards', 'input_select', 'form', 'article'])
                .exactOptional()
                .openapi({ description: 'Content type of the message', example: 'text' }),
              content_attributes: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Attributes based on the content type', example: {} }),
              'attachments[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional()
                .openapi({ description: 'Files to attach to the message' }),
            })
            .openapi({
              description: 'Form data payload for creating a message with file attachments.',
              example: {
                content: 'Here is the screenshot',
                message_type: 'outgoing',
                private: false,
                'attachments[]': ['screenshot.png'],
              },
              required: [],
            }),
          examples: {
            attachment_message: {
              summary: 'Message with an attachment',
              value: {
                content: 'Here is the screenshot',
                message_type: 'outgoing',
                private: false,
                'attachments[]': ['screenshot.png'],
              },
            },
          },
          encoding: { 'attachments[]': {} },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenericIdSchema.and(MessageSchema) } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Conversation not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [
    { userBearerAuth: [] },
    { agentBotBearerAuth: [] },
    { userApiKey: [] },
    { agentBotApiKey: [] },
  ],
})

export const deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}',
    tags: ['Messages'],
    summary: 'Delete a message',
    description: "Delete a message and it's attachments from the conversation.",
    operationId: 'delete-a-message',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
        message_id: MessageIdParamsSchema,
      }),
    },
    responses: {
      200: { description: 'Success' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'The message or conversation does not exist in the account',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { userApiKey: [] }],
  })

export const patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute =
  createRoute({
    method: 'patch',
    path: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}',
    tags: ['Messages'],
    summary: 'Update message status',
    description:
      "Updates the delivery status of a single message. Available only for messages in\nAPI channel inboxes, where your own system is responsible for delivering messages\nand reporting what happened. Use this to push `sent`, `delivered`, and `read`\nreceipts into Chatwoot, for example, to mark an agent's message as read when the\nend user views it in your client, so the agent sees the read indicator on the\nmessage.\n\nA message already marked `read` cannot be moved back to `delivered`. When\nreporting a failure, include `external_error` with the reason, which is shown to\nthe agent along with the failed indicator.\n",
    operationId: 'update-message-status',
    request: {
      params: z.object({
        account_id: AccountIdParamsSchema,
        conversation_id: ConversationIdParamsSchema,
        message_id: MessageIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                status: z
                  .enum(['sent', 'delivered', 'read', 'failed'])
                  .openapi({ description: 'The new status of the message' }),
                external_error: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Error description, stored only when status is failed' }),
              })
              .openapi({ required: ['status'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GenericIdSchema.and(MessageSchema) } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      403: {
        description: 'The message does not belong to an API channel inbox',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
      404: {
        description: 'The message or conversation does not exist in the account',
        content: { 'application/json': { schema: BadRequestErrorSchema } },
      },
    },
    security: [{ userBearerAuth: [] }, { userApiKey: [] }],
  })

export const getApiV1AccountsAccountIdIntegrationsAppsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/integrations/apps',
  tags: ['Integrations'],
  summary: 'List all the Integrations',
  description: 'Get the details of all Integrations available for the account',
  operationId: 'get-details-of-all-integrations',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              payload: z
                .array(IntegrationsAppSchema)
                .exactOptional()
                .openapi({ description: 'Array of Integration apps' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Url not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdIntegrationsHooksRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/integrations/hooks',
  tags: ['Integrations'],
  summary: 'Create an integration hook',
  description: 'Create an integration hook',
  operationId: 'create-an-integration-hook',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: IntegrationsHookCreatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationsHookSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
  tags: ['Integrations'],
  summary: 'Delete an Integration Hook',
  description: 'Delete an Integration Hook',
  operationId: 'delete-an-integration-hook',
  request: { params: z.object({ account_id: AccountIdParamsSchema, hook_id: HookIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The hook does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
  tags: ['Integrations'],
  summary: 'Update an Integration Hook',
  description: 'Update an Integration Hook',
  operationId: 'update-an-integrations-hook',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, hook_id: HookIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: IntegrationsHookUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationsHookSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1ProfileRoute = createRoute({
  method: 'get',
  path: '/api/v1/profile',
  tags: ['Profile'],
  summary: 'Fetch user profile',
  description: 'Get the user profile details',
  operationId: 'fetchProfile',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const putApiV1ProfileRoute = createRoute({
  method: 'put',
  path: '/api/v1/profile',
  tags: ['Profile'],
  summary: 'Update user profile',
  description: 'Update the user profile details',
  operationId: 'updateProfile',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              profile: z
                .object({
                  name: z.string().exactOptional(),
                  email: z.string().exactOptional(),
                  display_name: z.string().exactOptional(),
                  message_signature: z.string().exactOptional(),
                  phone_number: z.string().exactOptional(),
                  current_password: z.string().exactOptional(),
                  password: z.string().exactOptional(),
                  password_confirmation: z.string().exactOptional(),
                  ui_settings: z.object({}).exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['profile'] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              profile: z
                .object({
                  name: z.string().exactOptional(),
                  email: z.string().exactOptional(),
                  display_name: z.string().exactOptional(),
                  message_signature: z.string().exactOptional(),
                  phone_number: z.string().exactOptional(),
                  current_password: z.string().exactOptional(),
                  password: z.string().exactOptional(),
                  password_confirmation: z.string().exactOptional(),
                  avatar: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
                  ui_settings: z.object({}).exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['profile'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    401: { description: 'Unauthorized' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdTeamsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/teams',
  tags: ['Teams'],
  summary: 'List all teams',
  description: 'List all teams available in the current account',
  operationId: 'list-all-teams',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(TeamSchema).openapi({ description: 'Array of teams' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdTeamsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/teams',
  tags: ['Teams'],
  summary: 'Create a team',
  description: 'Create a team in the account',
  operationId: 'create-a-team',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: TeamCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TeamSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdTeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}',
  tags: ['Teams'],
  summary: 'Get a team details',
  description: 'Get the details of a team in the account',
  operationId: 'get-details-of-a-single-team',
  request: { params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TeamSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given team ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdTeamsTeamIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}',
  tags: ['Teams'],
  summary: 'Delete a team',
  description: 'Delete a team from the account',
  operationId: 'delete-a-team',
  request: { params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The team does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdTeamsTeamIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}',
  tags: ['Teams'],
  summary: 'Update a team',
  description: "Update a team's attributes",
  operationId: 'update-a-team',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: TeamCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TeamSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
  tags: ['Teams'],
  summary: 'List Agents in Team',
  description: 'Get Details of Agents in an Team',
  operationId: 'get-team-members',
  request: { params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ description: 'Array of all agents in the team' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Team not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
  tags: ['Teams'],
  summary: 'Add a New Agent',
  description: 'Add a new Agent to Team',
  operationId: 'add-new-agent-to-team',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be added to the team', example: [1] }),
            })
            .openapi({ required: ['user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ description: 'Array of all active agents' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Team not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
  tags: ['Teams'],
  summary: 'Remove an Agent from Team',
  description: 'Remove an Agent from Team',
  operationId: 'delete-agent-in-team',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be deleted from the team' }),
            })
            .openapi({ required: ['user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Team not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
  tags: ['Teams'],
  summary: 'Update Agents in Team',
  description: 'All agents except the one passed in params will be removed',
  operationId: 'update-agents-in-team',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, team_id: TeamIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_ids: z
                .array(z.int())
                .openapi({ description: 'IDs of users to be added to the team', example: [1] }),
            })
            .openapi({ required: ['user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ description: 'Array of all agents in the team' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'Team not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    422: {
      description: 'User must exist',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCustomFiltersRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/custom_filters',
  tags: ['Custom Filters'],
  summary: 'List all custom filters',
  description: 'List all custom filters in a category of a user',
  operationId: 'list-all-filters',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      filter_type: z
        .enum(['conversation', 'contact', 'report'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter_type',
            schema: { type: 'string', enum: ['conversation', 'contact', 'report'] },
            required: false,
            description: 'The type of custom filter',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(CustomFilterSchema).openapi({ description: 'Array of custom filters' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdCustomFiltersRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/custom_filters',
  tags: ['Custom Filters'],
  summary: 'Create a custom filter',
  description: 'Create a custom filter in the account',
  operationId: 'create-a-custom-filter',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      filter_type: z
        .enum(['conversation', 'contact', 'report'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter_type',
            schema: { type: 'string', enum: ['conversation', 'contact', 'report'] },
            required: false,
            description: 'The type of custom filter',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CustomFilterCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomFilterSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
  tags: ['Custom Filters'],
  summary: 'Get a custom filter details',
  description: 'Get the details of a custom filter in the account',
  operationId: 'get-details-of-a-single-custom-filter',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      custom_filter_id: CustomFilterIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomFilterSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The given team ID does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
  tags: ['Custom Filters'],
  summary: 'Delete a custom filter',
  description: 'Delete a custom filter from the account',
  operationId: 'delete-a-custom-filter',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      custom_filter_id: CustomFilterIdParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'The custom filter does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
  tags: ['Custom Filters'],
  summary: 'Update a custom filter',
  description: "Update a custom filter's attributes",
  operationId: 'update-a-custom-filter',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      custom_filter_id: CustomFilterIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CustomFilterCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomFilterSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/webhooks',
  tags: ['Webhooks'],
  summary: 'List all webhooks',
  description: 'List all webhooks in the account',
  operationId: 'list-all-webhooks',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(WebhookSchema).openapi({ description: 'Array of webhook objects' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/webhooks',
  tags: ['Webhooks'],
  summary: 'Add a webhook',
  description: 'Add a webhook subscription to the account',
  operationId: 'create-a-webhook',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: WebhookCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description: 'Delete a webhook from the account',
  operationId: 'delete-a-webhook',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, webhook_id: WebhookIdParamsSchema }),
  },
  responses: {
    200: { description: 'Success' },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: z.object({}) } } },
    404: {
      description: 'The webhook does not exist in the account',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Update a webhook object',
  description: 'Update a webhook object in the account',
  operationId: 'update-a-webhook',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema, webhook_id: WebhookIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: WebhookCreateUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdReportingEventsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/reporting_events',
  tags: ['Reports'],
  summary: 'Account Reporting Events',
  description:
    'Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.',
  operationId: 'get-account-reporting-events',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where events should start (Unix timestamp in seconds)',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where events should stop (Unix timestamp in seconds)',
            required: false,
          },
        }),
      inbox_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'inbox_id',
            schema: { type: 'number' },
            description: 'Filter events by inbox ID',
            required: false,
          },
        }),
      user_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            schema: { type: 'number' },
            description: 'Filter events by user/agent ID',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            description:
              'Filter events by event name (e.g., first_response, resolution, reply_time)',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportingEventsListResponseSchema } },
    },
    403: {
      description: 'Access denied - Only administrators can access this endpoint',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports',
  tags: ['Reports'],
  summary: 'Get Account reports',
  description: 'Get Account reports for a specific type, metric and date range',
  operationId: 'list-all-conversation-statistics',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      metric: ReportMetricParamsSchema,
      type: ReportTypeParamsSchema,
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            description: 'The Id of specific object in case of agent/inbox/label',
            required: false,
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start.',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  value: z.string().exactOptional(),
                  timestamp: z.number().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .openapi({ description: 'Array of date based conversation statistics' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'reports not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/summary',
  tags: ['Reports'],
  summary: 'Get Account reports summary',
  description: 'Get Account reports summary for a specific type and date range',
  operationId: 'list-all-conversation-statistics-summary',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      type: ReportTypeParamsSchema,
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            description: 'The Id of specific object in case of agent/inbox/label',
            required: false,
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start.',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AccountSummarySchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'reports not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsConversationsRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/conversations',
  tags: ['Reports'],
  summary: 'Account Conversation Metrics',
  description: 'Get conversation metrics for Account',
  operationId: 'get-account-conversation-metrics',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      type: z
        .literal('account')
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['account'] },
            required: true,
            description: 'Type of report',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              open: z.number().exactOptional(),
              unattended: z.number().exactOptional(),
              unassigned: z.number().exactOptional(),
            })
            .openapi({ description: 'Object of account conversation metrics', required: [] }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'reports not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsConversationsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/conversations/',
  tags: ['Reports'],
  summary: 'Agent Conversation Metrics',
  description: 'Get conversation metrics for Agent',
  operationId: 'get-agent-conversation-metrics',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      type: z
        .literal('agent')
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['agent'] },
            required: true,
            description: 'Type of report',
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            schema: { type: 'string' },
            description: 'The numeric ID of the user',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(AgentConversationMetricsSchema)
            .openapi({ description: 'Array of agent based conversation metrics' }),
        },
      },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    404: {
      description: 'reports not found',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdSummaryReportsChannelRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/summary_reports/channel',
  tags: ['Reports'],
  summary: 'Get conversation statistics grouped by channel type',
  description:
    'Get conversation counts grouped by channel type and status for a given date range.\nReturns statistics for each channel type including open, resolved, pending, snoozed, and total conversation counts.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.10.0 and above. The date range is limited to a maximum of 6 months.\n',
  operationId: 'get-channel-summary-report',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChannelSummarySchema } },
    },
    400: {
      description: 'Date range exceeds 6 months limit',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdSummaryReportsInboxRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/summary_reports/inbox',
  tags: ['Reports'],
  summary: 'Get conversation statistics grouped by inbox',
  description:
    'Get conversation statistics grouped by inbox for a given date range.\nReturns metrics for each inbox including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n',
  operationId: 'get-inbox-summary-report',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
      business_hours: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'business_hours',
            schema: { type: 'boolean' },
            description: 'Whether to calculate metrics using business hours only.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboxSummarySchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdSummaryReportsAgentRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/summary_reports/agent',
  tags: ['Reports'],
  summary: 'Get conversation statistics grouped by agent',
  description:
    'Get conversation statistics grouped by agent for a given date range.\nReturns metrics for each agent including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n',
  operationId: 'get-agent-summary-report',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
      business_hours: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'business_hours',
            schema: { type: 'boolean' },
            description: 'Whether to calculate metrics using business hours only.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AgentSummarySchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdSummaryReportsTeamRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/summary_reports/team',
  tags: ['Reports'],
  summary: 'Get conversation statistics grouped by team',
  description:
    'Get conversation statistics grouped by team for a given date range.\nReturns metrics for each team including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n',
  operationId: 'get-team-summary-report',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
      business_hours: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'business_hours',
            schema: { type: 'boolean' },
            description: 'Whether to calculate metrics using business hours only.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TeamSummarySchema } } },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/first_response_time_distribution',
  tags: ['Reports'],
  summary: 'Get first response time distribution by channel',
  description:
    'Get the distribution of first response times grouped by channel type.\nReturns conversation counts in different time buckets (0-1h, 1-4h, 4-8h, 8-24h, 24h+) for each channel type.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n',
  operationId: 'get-first-response-time-distribution',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FirstResponseTimeDistributionSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/inbox_label_matrix',
  tags: ['Reports'],
  summary: 'Get inbox-label matrix report',
  description:
    'Get a matrix showing the count of conversations for each inbox-label combination.\nReturns a list of inboxes, labels, and a 2D matrix where each cell contains the count of conversations\nin a specific inbox that have a specific label applied.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n',
  operationId: 'get-inbox-label-matrix',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
      inbox_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'inbox_ids',
            schema: { type: 'array', items: { type: 'integer' } },
            description: 'Filter by specific inbox IDs.',
            required: false,
          },
        }),
      label_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label_ids',
            schema: { type: 'array', items: { type: 'integer' } },
            description: 'Filter by specific label IDs.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboxLabelMatrixSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{account_id}/reports/outgoing_messages_count',
  tags: ['Reports'],
  summary: 'Get outgoing messages count grouped by entity',
  description:
    'Get the count of outgoing messages grouped by a specified entity (agent, team, inbox, or label).\nWhen grouped by agent, messages sent by bots (AgentBot, Captain::Assistant) are excluded.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n',
  operationId: 'get-outgoing-messages-count',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    query: z.object({
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            description: 'The timestamp from where report should start (Unix timestamp).',
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            description: 'The timestamp from where report should stop (Unix timestamp).',
            required: false,
          },
        }),
      group_by: z
        .enum(['agent', 'team', 'inbox', 'label'])
        .openapi({
          param: {
            in: 'query',
            name: 'group_by',
            required: true,
            schema: { type: 'string', enum: ['agent', 'team', 'inbox', 'label'] },
            description: 'The entity to group outgoing message counts by.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OutgoingMessagesCountSchema } },
    },
    403: {
      description: 'Access denied',
      content: { 'application/json': { schema: BadRequestErrorSchema } },
    },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getAccountsAccountIdConversationsConversationIdMessagesRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/conversations/{conversation_id}/messages',
  tags: ['Conversation'],
  summary: 'Get messages from a conversation',
  description: 'Returns all messages from a specific conversation',
  operationId: 'getConversationMessages',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      conversation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConversationMessagesSchema } },
    },
  },
})

export const getApiV1AccountsAccountIdCampaignsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/campaigns',
  tags: ['Campaigns'],
  summary: 'List campaigns',
  description:
    'List all campaigns in the account. The response is an unpaginated array. Requires an account administrator and API access enabled for the account.',
  operationId: 'list-campaigns',
  request: { params: z.object({ account_id: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CampaignSchema) } },
    },
    401: { description: 'Authentication failed or the user is not an account administrator' },
    403: { description: 'API access is disabled for the account' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const postApiV1AccountsAccountIdCampaignsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{account_id}/campaigns',
  tags: ['Campaigns'],
  summary: 'Create a campaign',
  description:
    'Create a campaign. For a supported messaging inbox, provide scheduled_at to schedule a one-off campaign; omitting it makes the campaign eligible for the next scheduler run. Website campaigns use trigger_rules instead. Channel-specific campaign availability and requirements still apply. One-off campaigns require at least one audience label for delivery. WhatsApp campaigns also require template_params with the selected template name, language, and any variable values. A successful creation response does not confirm delivery. Requires an account administrator and API access enabled for the account.',
  operationId: 'create-campaign',
  request: {
    params: z.object({ account_id: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CampaignCreatePayloadSchema,
          examples: {
            sms: {
              summary: 'Schedule an SMS campaign',
              value: {
                campaign: {
                  title: 'January announcement',
                  inbox_id: 12,
                  message: 'Our January offers are here!',
                  scheduled_at: '2027-01-15T10:00:00Z',
                  audience: [{ type: 'Label', id: 5 }],
                },
              },
            },
            whatsapp: {
              summary: 'Schedule a WhatsApp campaign using a template with one body variable',
              value: {
                campaign: {
                  title: 'Order update',
                  inbox_id: 15,
                  message: 'Hello {{ contact.name }}, your order has shipped.',
                  scheduled_at: '2027-01-15T10:00:00Z',
                  audience: [{ type: 'Label', id: 5 }],
                  template_params: {
                    name: 'order_shipped',
                    language: 'en',
                    processed_params: { body: { '1': '{{ contact.name }}' } },
                  },
                },
              },
            },
            website: {
              summary: 'Create an ongoing website campaign',
              value: {
                campaign: {
                  title: 'Pricing help',
                  inbox_id: 8,
                  sender_id: 3,
                  message: 'Can we help you choose a plan?',
                  trigger_rules: { url: 'https://example.com/pricing', time_on_page: 10 },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignSchema } } },
    401: { description: 'Authentication failed or the user is not an account administrator' },
    403: { description: 'API access is disabled for the account' },
    422: { description: 'Campaign validation failed' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const getApiV1AccountsAccountIdCampaignsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{account_id}/campaigns/{id}',
  tags: ['Campaigns'],
  summary: 'Get a campaign',
  description:
    'Retrieve a campaign using its account-scoped ID. Requires an account administrator and API access enabled for the account.',
  operationId: 'get-campaign',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Account-scoped campaign ID returned by the campaign API.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignSchema } } },
    401: { description: 'Authentication failed or the user is not an account administrator' },
    403: { description: 'API access is disabled for the account' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const deleteApiV1AccountsAccountIdCampaignsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/accounts/{account_id}/campaigns/{id}',
  tags: ['Campaigns'],
  summary: 'Delete a campaign',
  description:
    'Delete a campaign from the account. Requires an account administrator and API access enabled for the account.',
  operationId: 'delete-campaign',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Account-scoped campaign ID returned by the campaign API.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: { description: 'Authentication failed or the user is not an account administrator' },
    403: { description: 'API access is disabled for the account' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})

export const patchApiV1AccountsAccountIdCampaignsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/{account_id}/campaigns/{id}',
  tags: ['Campaigns'],
  summary: 'Update a campaign',
  description:
    'Update campaign fields, including scheduled_at to reschedule an active one-off campaign. Completed campaigns cannot be updated. Requires an account administrator and API access enabled for the account.',
  operationId: 'update-campaign',
  request: {
    params: z.object({
      account_id: AccountIdParamsSchema,
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Account-scoped campaign ID returned by the campaign API.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CampaignUpdatePayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignSchema } } },
    401: { description: 'Authentication failed or the user is not an account administrator' },
    403: { description: 'API access is disabled for the account' },
    422: { description: 'Campaign validation failed' },
  },
  security: [{ userBearerAuth: [] }, { userApiKey: [] }],
})
