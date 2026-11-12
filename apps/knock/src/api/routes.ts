import { createRoute, z } from '@hono/zod-openapi'

const PushChannelDataTokensOnlySchema = z
  .object({
    tokens: z
      .array(
        z
          .string()
          .openapi({
            description: 'The device token to send the push notification to.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A list of push channel tokens.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Push channel data.',
    example: { tokens: ['push_token_1', 'push_token_2'] },
    required: ['tokens'],
    title: 'PushChannelDataTokensOnly',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PushChannelDataTokensOnly',
    'x-validate': null,
  })
  .openapi('PushChannelDataTokensOnly')

const PushChannelDataDevicesOnlySchema = z
  .object({
    devices: z
      .array(
        z
          .object({
            locale: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The locale of the object. Used for [message localization](/concepts/translations).',
                'x-struct': null,
                'x-validate': null,
              }),
            timezone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
                'x-struct': null,
                'x-validate': null,
              }),
            token: z
              .string()
              .openapi({
                description: 'The device token to send the push notification to.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['token'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description:
          'A list of devices. Each device contains a token, and optionally a locale and timezone.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Push channel data.',
    example: {
      devices: [{ locale: 'en-US', timezone: 'America/Los_Angeles', token: 'push_token_1' }],
    },
    required: ['devices'],
    title: 'PushChannelDataDevicesOnly',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PushChannelDataDevicesOnly',
    'x-validate': null,
  })
  .openapi('PushChannelDataDevicesOnly')

const AWSSNSPushChannelDataTargetARNsOnlySchema = z
  .object({
    target_arns: z
      .array(
        z
          .string()
          .openapi({
            description:
              'The ARN of a platform endpoint associated with a platform application and a device token. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description:
          'A list of platform endpoint ARNs. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
        example: [
          'arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3',
        ],
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'AWS SNS push channel data.',
    example: {
      target_arns: [
        'arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3',
      ],
    },
    required: ['target_arns'],
    title: 'AWSSNSPushChannelDataTargetARNsOnly',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AWSSNSPushChannelDataTargetARNsOnly',
    'x-validate': null,
  })
  .openapi('AWSSNSPushChannelDataTargetARNsOnly')

const AWSSNSPushChannelDataDevicesOnlySchema = z
  .object({
    devices: z
      .array(
        z
          .object({
            locale: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The locale of the object. Used for [message localization](/concepts/translations).',
                'x-struct': null,
                'x-validate': null,
              }),
            target_arn: z
              .string()
              .openapi({
                description:
                  'The ARN of a platform endpoint associated with a platform application and a device token. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
                'x-struct': null,
                'x-validate': null,
              }),
            timezone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['target_arn'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description:
          'A list of devices. Each device contains a target_arn, and optionally a locale and timezone.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'AWS SNS push channel data.',
    example: {
      devices: [
        {
          locale: 'en-US',
          target_arn:
            'arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3',
          timezone: 'America/Los_Angeles',
        },
      ],
    },
    required: ['devices'],
    title: 'AWSSNSPushChannelDataDevicesOnly',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AWSSNSPushChannelDataDevicesOnly',
    'x-validate': null,
  })
  .openapi('AWSSNSPushChannelDataDevicesOnly')

const OneSignalChannelDataPlayerIdsOnlySchema = z
  .object({
    player_ids: z
      .array(
        z
          .uuid()
          .openapi({ description: 'OneSignal player ID.', 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description: 'A list of OneSignal player IDs.',
        example: ['123e4567-e89b-12d3-a456-426614174000'],
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'OneSignal channel data.',
    example: { player_ids: ['123e4567-e89b-12d3-a456-426614174000'] },
    required: ['player_ids'],
    title: 'OneSignalChannelDataPlayerIdsOnly',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.OneSignalChannelDataPlayerIdsOnly',
    'x-validate': null,
  })
  .openapi('OneSignalChannelDataPlayerIdsOnly')

const SlackTokenConnectionSchema = z
  .object({
    access_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A Slack access token.',
        example: 'xoxb-1234567890',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A Slack channel ID from the Slack provider.',
        example: 'C01234567890',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Slack channel name.',
        example: 'team-alerts',
        'x-struct': null,
        'x-validate': null,
      }),
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
    user_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A Slack user ID from the Slack provider.',
        example: 'U01234567890',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A Slack connection token.',
    example: {
      access_token: 'xoxb-1234567890',
      channel_id: 'C01234567890',
      channel_name: 'team-alerts',
      knock_tenant_id: 'starfleet',
      user_id: 'U01234567890',
    },
    title: 'SlackTokenConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SlackChannelData.TokenConnection',
    'x-validate': null,
    required: [],
  })
  .openapi('SlackTokenConnection')

const SlackIncomingWebhookConnectionSchema = z
  .object({
    incoming_webhook: z
      .object({
        url: z
          .string()
          .openapi({
            description: 'The URL of the incoming webhook for a Slack connection.',
            example: 'https://hooks.slack.com/services/T01234567890/B01234567890/1234567890',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'A Slack connection incoming webhook.',
        required: ['url'],
        'x-struct': null,
        'x-validate': null,
      }),
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A Slack connection incoming webhook.',
    example: {
      incoming_webhook: {
        url: 'https://hooks.slack.com/services/T01234567890/B01234567890/1234567890',
      },
      knock_tenant_id: 'starfleet',
    },
    required: ['incoming_webhook'],
    title: 'SlackIncomingWebhookConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SlackChannelData.IncomingWebhookConnection',
    'x-validate': null,
  })
  .openapi('SlackIncomingWebhookConnection')

const SlackChannelDataSchema = z
  .object({
    connections: z
      .array(
        z
          .xor([SlackTokenConnectionSchema, SlackIncomingWebhookConnectionSchema])
          .openapi({
            description: 'A Slack connection, either an access token or an incoming webhook',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'List of Slack channel connections.',
        'x-struct': null,
        'x-validate': null,
      }),
    token: z
      .object({
        access_token: z
          .string()
          .nullable()
          .openapi({
            description: 'A Slack access token.',
            example: 'xoxb-1234567890',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A Slack connection token.',
        example: { access_token: 'xoxb-1234567890' },
        required: ['access_token'],
        title: 'SlackChannelDataTokenObject',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Slack channel data.',
    example: {
      connections: [
        {
          access_token: 'xoxb-1234567890',
          channel_id: 'C01234567890',
          channel_name: 'team-alerts',
          knock_tenant_id: 'starfleet',
          user_id: 'U01234567890',
        },
      ],
      token: { access_token: 'xoxb-1234567890' },
    },
    required: ['connections'],
    title: 'SlackChannelData',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SlackChannelData',
    'x-validate': null,
  })
  .openapi('SlackChannelData')

const MsTeamsTokenConnectionSchema = z
  .object({
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
    ms_teams_channel_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Microsoft Teams channel ID.',
        'x-struct': null,
        'x-validate': null,
      }),
    ms_teams_team_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Microsoft Teams team ID.', 'x-struct': null, 'x-validate': null }),
    ms_teams_tenant_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Microsoft Teams tenant ID.', 'x-struct': null, 'x-validate': null }),
    ms_teams_user_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Microsoft Teams user ID.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'Microsoft Teams token connection.',
    example: {
      knock_tenant_id: 'starfleet',
      ms_teams_channel_id: '123e4567-e89b-12d3-a456-426614174000',
      ms_teams_team_id: '123e4567-e89b-12d3-a456-426614174000',
      ms_teams_tenant_id: null,
      ms_teams_user_id: null,
    },
    title: 'MsTeamsTokenConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MsTeamsChannelData.TokenConnection',
    'x-validate': null,
    required: [],
  })
  .openapi('MsTeamsTokenConnection')

const MsTeamsIncomingWebhookConnectionSchema = z
  .object({
    incoming_webhook: z
      .object({
        url: z
          .string()
          .openapi({
            description: 'Microsoft Teams incoming webhook URL.',
            example: 'https://example.com/webhook',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'Microsoft Teams incoming webhook.',
        required: ['url'],
        'x-struct': null,
        'x-validate': null,
      }),
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Microsoft Teams incoming webhook connection.',
    example: {
      incoming_webhook: { url: 'https://example.com/webhook' },
      knock_tenant_id: 'starfleet',
    },
    required: ['incoming_webhook'],
    title: 'MsTeamsIncomingWebhookConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MsTeamsChannelData.IncomingWebhookConnection',
    'x-validate': null,
  })
  .openapi('MsTeamsIncomingWebhookConnection')

const MsTeamsChannelDataSchema = z
  .object({
    connections: z
      .array(
        z
          .xor([MsTeamsTokenConnectionSchema, MsTeamsIncomingWebhookConnectionSchema])
          .openapi({ 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description: 'List of Microsoft Teams connections.',
        'x-struct': null,
        'x-validate': null,
      }),
    ms_teams_tenant_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Microsoft Teams tenant ID.',
        example: '123e4567-e89b-12d3-a456-426614174000',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Microsoft Teams channel data.',
    example: {
      connections: [
        {
          knock_tenant_id: 'starfleet',
          ms_teams_channel_id: '123e4567-e89b-12d3-a456-426614174000',
          ms_teams_team_id: '123e4567-e89b-12d3-a456-426614174000',
          ms_teams_tenant_id: null,
          ms_teams_user_id: null,
        },
      ],
      ms_teams_tenant_id: null,
    },
    required: ['connections'],
    title: 'MsTeamsChannelData',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MsTeamsChannelData',
    'x-validate': null,
  })
  .openapi('MsTeamsChannelData')

const DiscordChannelConnectionSchema = z
  .object({
    channel_id: z
      .string()
      .openapi({
        description: 'Discord channel ID.',
        example: '123456789012345678',
        'x-struct': null,
        'x-validate': null,
      }),
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Discord channel connection.',
    example: { channel_id: '123456789012345678', knock_tenant_id: 'starfleet' },
    required: ['channel_id'],
    title: 'DiscordChannelConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.DiscordChannelData.ChannelConnection',
    'x-validate': null,
  })
  .openapi('DiscordChannelConnection')

const DiscordIncomingWebhookConnectionSchema = z
  .object({
    incoming_webhook: z
      .object({
        url: z
          .string()
          .openapi({
            description: 'Incoming webhook URL.',
            example: 'https://example.com/webhook',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'Discord incoming webhook object.',
        required: ['url'],
        'x-struct': null,
        'x-validate': null,
      }),
    knock_tenant_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.',
        example: 'starfleet',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Discord incoming webhook connection.',
    example: {
      incoming_webhook: { url: 'https://example.com/webhook' },
      knock_tenant_id: 'starfleet',
    },
    required: ['incoming_webhook'],
    title: 'DiscordIncomingWebhookConnection',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.DiscordChannelData.IncomingWebhookConnection',
    'x-validate': null,
  })
  .openapi('DiscordIncomingWebhookConnection')

const DiscordChannelDataSchema = z
  .object({
    connections: z
      .array(
        z
          .xor([DiscordChannelConnectionSchema, DiscordIncomingWebhookConnectionSchema])
          .openapi({
            description:
              'Discord channel connection, either a channel connection or an incoming webhook connection.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'List of Discord channel connections.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Discord channel data.',
    example: { connections: [{ channel_id: '123456789012345678', knock_tenant_id: 'starfleet' }] },
    required: ['connections'],
    title: 'DiscordChannelData',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.DiscordChannelData',
    'x-validate': null,
  })
  .openapi('DiscordChannelData')

const InlineChannelDataRequestSchema = z
  .record(
    z.string(),
    z
      .xor([
        PushChannelDataTokensOnlySchema,
        PushChannelDataDevicesOnlySchema,
        AWSSNSPushChannelDataTargetARNsOnlySchema,
        AWSSNSPushChannelDataDevicesOnlySchema,
        OneSignalChannelDataPlayerIdsOnlySchema,
        SlackChannelDataSchema,
        MsTeamsChannelDataSchema,
        DiscordChannelDataSchema,
      ])
      .openapi({
        description: 'Channel data for a given channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
  )
  .openapi({
    description: 'A request to set channel data for a type of channel inline.',
    example: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
    title: 'InlineChannelDataRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InlineChannelDataRequest',
    'x-validate': null,
  })
  .openapi('InlineChannelDataRequest')

const ConditionSchema = z
  .object({
    argument: z
      .string()
      .nullable()
      .openapi({
        description: 'The argument value to compare against in the condition.',
        example: 'some_property',
        'x-struct': null,
        'x-validate': null,
      }),
    operator: z
      .enum([
        'equal_to',
        'not_equal_to',
        'greater_than',
        'less_than',
        'greater_than_or_equal_to',
        'less_than_or_equal_to',
        'contains',
        'not_contains',
        'empty',
        'not_empty',
        'exists',
        'not_exists',
        'contains_all',
        'not_contains_all',
        'is_timestamp',
        'is_not_timestamp',
        'is_timestamp_on_or_after',
        'is_timestamp_before',
        'is_timestamp_on_or_after_date',
        'is_timestamp_before_date',
        'is_timestamp_between',
        'is_between',
        'is_audience_member',
        'is_not_audience_member',
      ])
      .openapi({
        description: 'The operator to use in the condition evaluation.',
        example: 'equal_to',
        'x-struct': null,
        'x-validate': null,
      }),
    variable: z
      .string()
      .openapi({
        description: 'The variable to be evaluated in the condition.',
        example: 'recipient.property',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A condition to be evaluated.',
    example: { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
    required: ['variable', 'operator', 'argument'],
    title: 'Condition',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Condition',
    'x-validate': null,
  })
  .openapi('Condition')

const PreferenceSetChannelTypeSettingSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .openapi({
        description: 'A list of conditions to apply to a channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A set of settings for a channel type. Currently, this can only be a list of conditions to apply.',
    example: {
      conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
    },
    required: ['conditions'],
    title: 'PreferenceSetChannelTypeSetting',
    'x-struct':
      'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetChannelTypes.PreferenceSetChannelTypeSetting',
    'x-validate': null,
  })
  .openapi('PreferenceSetChannelTypeSetting')

const PreferenceSetChannelTypesSchema = z
  .object({
    chat: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
    email: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
    http: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
    in_app_feed: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
    push: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
    sms: z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelTypeSettingSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the channel type is enabled for the preference set.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Channel type preferences.',
    example: {
      email: true,
      sms: {
        conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
      },
    },
    title: 'PreferenceSetChannelTypes',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetChannelTypes',
    'x-validate': null,
    required: [],
  })
  .openapi('PreferenceSetChannelTypes')

const PreferenceSetChannelSettingSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .openapi({
        description: 'A list of conditions to apply to a specific channel.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A set of settings for a specific channel. Currently, this can only be a list of conditions to apply.',
    example: {
      conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
    },
    required: ['conditions'],
    title: 'PreferenceSetChannelSetting',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetChannels.PreferenceSetChannelSetting',
    'x-validate': null,
  })
  .openapi('PreferenceSetChannelSetting')

const PreferenceSetChannelsSchema = z
  .record(
    z.string(),
    z
      .xor([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetChannelSettingSchema,
      ])
      .openapi({
        description:
          'Whether the specific channel (by channel_id) is enabled for the preference set, or a settings object with conditions.',
        'x-struct': null,
        'x-validate': null,
      }),
  )
  .openapi({
    description: 'Channel preferences.',
    example: {
      '2f641633-95d3-4555-9222-9f1eb7888a80': {
        conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
      },
      'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
    },
    title: 'PreferenceSetChannels',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetChannels',
    'x-validate': null,
  })
  .openapi('PreferenceSetChannels')

const PreferenceSetWorkflowCategorySettingSchema = z
  .xor([
    z.boolean().openapi({ example: false, 'x-struct': null, 'x-validate': null }),
    z
      .object({
        channel_types: z
          .union([
            PreferenceSetChannelTypesSchema,
            z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
          ])
          .exactOptional()
          .openapi({
            description:
              'An object where the key is the channel type and the values are the preference settings for that channel type.',
            'x-struct': null,
            'x-validate': null,
          }),
        channels: z
          .union([
            PreferenceSetChannelsSchema,
            z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
          ])
          .exactOptional()
          .openapi({
            description:
              'An object where the key is the channel ID and the values are the preference settings for that channel ID.',
            'x-struct': null,
            'x-validate': null,
          }),
        conditions: z
          .array(ConditionSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'A list of conditions to apply to a channel type.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description:
          'The settings object for a workflow or category, where you can specify channel types or conditions.',
        example: {
          channel_types: { email: false },
          channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
          conditions: null,
        },
        title: 'PreferenceSetWorkflowCategorySettingObject',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  ])
  .openapi({
    description: 'Workflow or category preferences within a preference set',
    example: {
      channel_types: { email: false },
      channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
    },
    title: 'PreferenceSetWorkflowCategorySetting',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetWorkflowCategorySetting',
    'x-validate': null,
  })
  .openapi('PreferenceSetWorkflowCategorySetting')

const PreferenceSetCommercialSubscribedSettingSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .openapi({
        description: 'A list of conditions to apply to the commercial subscribed preference.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A set of settings for the commercial subscribed preference. Currently, this can only be a list of conditions to apply.',
    example: {
      conditions: [
        {
          argument: 'false',
          operator: 'not_equal_to',
          variable: 'tenant.settings.preferences.commercial_subscribed',
        },
      ],
    },
    required: ['conditions'],
    title: 'PreferenceSetCommercialSubscribedSetting',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetCommercialSubscribedSetting',
    'x-validate': null,
  })
  .openapi('PreferenceSetCommercialSubscribedSetting')

const PreferenceSetRequestSchema = z
  .object({
    __persistence_strategy__: z
      .enum(['merge', 'replace'])
      .exactOptional()
      .openapi({
        description:
          "Controls how the preference set is persisted. 'replace' will completely replace the preference set, 'merge' will merge with existing preferences.",
        'x-struct': null,
        'x-validate': null,
      }),
    categories: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the category and the values are the preference settings for that category.',
            example: { marketing: { channel_types: { email: false } }, transactional: true },
            title: 'PreferenceSetRequestCategories',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the category and the values are the preference settings for that category.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_types: z
      .union([
        PreferenceSetChannelTypesSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel type and the values are the preference settings for that channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    channels: z
      .union([
        PreferenceSetChannelsSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel ID and the values are the preference settings for that channel ID.',
        'x-struct': null,
        'x-validate': null,
      }),
    commercial_subscribed: z
      .union([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetCommercialSubscribedSettingSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.',
        'x-struct': null,
        'x-validate': null,
      }),
    workflows: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the workflow key and the values are the preference settings for that workflow.',
            example: {
              'dinosaurs-loose': { channel_types: { email: false, sms: true } },
              'welcome-sequence': true,
            },
            title: 'PreferenceSetRequestWorkflows',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the workflow key and the values are the preference settings for that workflow.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to set a preference set for a recipient.',
    example: {
      __persistence_strategy__: 'merge',
      categories: { marketing: false, transactional: { channel_types: { email: false } } },
      channel_types: { email: true },
      channels: {
        '2f641633-95d3-4555-9222-9f1eb7888a80': {
          conditions: [
            { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
          ],
        },
        'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
      },
      commercial_subscribed: true,
      workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
    },
    title: 'PreferenceSetRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSetRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('PreferenceSetRequest')

type InlinePreferenceSetRequestType = { [key: string]: z.infer<typeof PreferenceSetRequestSchema> }

const InlinePreferenceSetRequestSchema: z.ZodType<InlinePreferenceSetRequestType> = z
  .record(z.string(), PreferenceSetRequestSchema)
  .openapi({
    description:
      'Inline set preferences for a recipient, where the key is the preference set id. Preferences that are set inline will be merged into any existing preferences rather than replacing them.',
    example: {
      default: {
        categories: { transactional: { channel_types: { email: false } } },
        channel_types: { email: true },
      },
    },
    title: 'InlinePreferenceSetRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InlinePreferenceSetRequest',
    'x-validate': null,
  })
  .openapi('InlinePreferenceSetRequest')

type TenantRequestType = {
  channel_data?: (unknown | null) | z.infer<typeof InlineChannelDataRequestSchema>
  id: string
  name?: string | null
  preferences?: (unknown | null) | z.infer<typeof InlinePreferenceSetRequestSchema>
  settings?: {
    branding?: {
      dark_icon_url?: string | null
      dark_logo_url?: string | null
      dark_primary_color?: string | null
      dark_primary_color_contrast?: string | null
      icon_url?: string | null
      logo_url?: string | null
      primary_color?: string | null
      primary_color_contrast?: string | null
    }
    preference_set?: (unknown | null) | z.infer<typeof PreferenceSetRequestSchema>
  }
}

const TenantRequestSchema: z.ZodType<TenantRequestType> = z
  .looseObject({
    channel_data: z
      .xor([
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
        InlineChannelDataRequestSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The channel data for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: z
      .xor([
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
        InlinePreferenceSetRequestSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The preferences for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    settings: z
      .object({
        branding: z
          .object({
            dark_icon_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The icon URL for the tenant in dark mode. Falls back to `icon_url` if unset.',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_logo_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The logo URL for the tenant in dark mode. Falls back to `logo_url` if unset.',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_primary_color: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The primary color for the tenant in dark mode, provided as a hex value. Defaults to `#FFFFFF`.',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_primary_color_contrast: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The primary color contrast for the tenant in dark mode, provided as a hex value. Defaults to `#000000`.',
                'x-struct': null,
                'x-validate': null,
              }),
            icon_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The icon URL for the tenant. Must point to a valid image with an image MIME type.',
                'x-struct': null,
                'x-validate': null,
              }),
            logo_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The logo URL for the tenant. Must point to a valid image with an image MIME type.',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color for the tenant, provided as a hex value.',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color_contrast: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color contrast for the tenant, provided as a hex value.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The branding for the tenant.',
            'x-struct': null,
            'x-validate': null,
            required: [],
          }),
        preference_set: z
          .xor([
            z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
            PreferenceSetRequestSchema,
          ])
          .exactOptional()
          .openapi({
            description:
              'The preference set for the tenant. Used to override the default preference set.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The settings for the tenant. Includes branding and preference set.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  })
  .openapi({
    description:
      'A tenant to be set in the system. You can supply any additional properties on the tenant object.',
    example: {
      id: 'tenant_123',
      name: 'ACME Corp, Inc.',
      settings: {
        branding: {
          dark_icon_url: 'https://example.com/icon_dark.png',
          dark_logo_url: 'https://example.com/logo_dark.png',
          dark_primary_color: '#FFFFFF',
          dark_primary_color_contrast: '#000000',
          icon_url: 'https://example.com/icon.png',
          logo_url: 'https://example.com/logo.png',
          primary_color: '#000000',
          primary_color_contrast: '#FFFFFF',
        },
      },
    },
    required: ['id'],
    title: 'TenantRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.TenantRequest',
    'x-validate': null,
  })
  .openapi('TenantRequest')

type InlineTenantRequestType = string | z.infer<typeof TenantRequestSchema>

const PreferenceSetSchema = z
  .object({
    categories: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the category and the values are the preference settings for that category.',
            example: { marketing: { channel_types: { email: false } } },
            title: 'PreferenceSetCategories',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the category and the values are the preference settings for that category.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_types: z
      .union([
        PreferenceSetChannelTypesSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel type and the values are the preference settings for that channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    channels: z
      .union([
        PreferenceSetChannelsSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel ID and the values are the preference settings for that channel ID.',
        'x-struct': null,
        'x-validate': null,
      }),
    commercial_subscribed: z
      .union([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetCommercialSubscribedSettingSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the preference set.',
        example: 'default',
        'x-struct': null,
        'x-validate': null,
      }),
    workflows: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the workflow key and the values are the preference settings for that workflow.',
            example: { 'dinosaurs-loose': { channel_types: { email: false } } },
            title: 'PreferenceSetWorkflows',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the workflow key and the values are the preference settings for that workflow.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A preference set represents a specific set of notification preferences for a recipient. A recipient can have multiple preference sets.',
    example: {
      categories: { marketing: false, transactional: { channel_types: { email: false } } },
      channel_types: {
        email: true,
        push: false,
        sms: {
          conditions: [
            { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
          ],
        },
      },
      commercial_subscribed: true,
      id: 'default',
      workflows: null,
    },
    required: ['id'],
    title: 'PreferenceSet',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceSet',
    'x-validate': null,
  })
  .openapi('PreferenceSet')

type TenantType = {
  __typename: string
  id: string
  name?: string | null
  settings?: {
    branding?: {
      dark_icon_url?: string | null
      dark_logo_url?: string | null
      dark_primary_color?: string | null
      dark_primary_color_contrast?: string | null
      icon_url?: string | null
      logo_url?: string | null
      primary_color?: string | null
      primary_color_contrast?: string | null
    } | null
    preference_set?: z.infer<typeof PreferenceSetSchema> | (unknown | null)
  } | null
}

type ListUserPreferenceSetsResponseType = z.infer<typeof PreferenceSetSchema>[]

type InlineIdentifyUserRequestType = {
  avatar?: string | null
  channel_data?: z.infer<typeof InlineChannelDataRequestSchema> | null
  created_at?: string | null
  email?: string | null
  id: string
  locale?: string | null
  name?: string | null
  phone_number?: string | null
  preferences?: z.infer<typeof InlinePreferenceSetRequestSchema> | null
  timezone?: string | null
}

type InlineIdentifyObjectRequestType = {
  channel_data?: z.infer<typeof InlineChannelDataRequestSchema> | (unknown | null)
  collection: string
  created_at?: string | null
  id: string
  name?: string | null
  preferences?: z.infer<typeof InlinePreferenceSetRequestSchema> | (unknown | null)
}

const InlineIdentifyUserRequestSchema: z.ZodType<InlineIdentifyUserRequestType> = z
  .looseObject({
    avatar: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A URL for the avatar of the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_data: InlineChannelDataRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "Channel-specific information that's needed to deliver a notification to an end provider.",
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The creation date of the user from your system.',
        'x-struct': null,
        'x-validate': null,
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The primary email address for the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    locale: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The locale of the user. Used for [message localization](/concepts/translations).',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name of the user.', 'x-struct': null, 'x-validate': null }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: InlinePreferenceSetRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'A set of preferences for the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      "A set of parameters to inline-identify a user with. Inline identifying the user will ensure that the user is available before the request is executed in Knock. It will perform an upsert for the user you're supplying, replacing any properties specified.",
    example: {
      channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
      email: 'jane@ingen.net',
      id: 'user_1',
      name: 'Jane Doe',
      preferences: {
        default: {
          channel_types: { email: true },
          workflows: { 'dinosaurs-loose': { channel_types: { email: true } } },
        },
      },
      timezone: 'America/New_York',
    },
    required: ['id'],
    title: 'InlineIdentifyUserRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InlineIdentifyUserRequest',
    'x-validate': null,
  })
  .openapi('InlineIdentifyUserRequest')

type BulkIdentifyUsersRequestType = { users: z.infer<typeof InlineIdentifyUserRequestSchema>[] }

const InlineIdentifyObjectRequestSchema: z.ZodType<InlineIdentifyObjectRequestType> = z
  .looseObject({
    channel_data: z
      .xor([
        InlineChannelDataRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional set of [channel data](/managing-recipients/setting-channel-data) for the object. This is a list of `ChannelData` objects.',
        'x-struct': null,
        'x-validate': null,
      }),
    collection: z
      .string()
      .openapi({
        description: 'The collection this object belongs to.',
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: z
      .xor([
        InlinePreferenceSetRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'An optional set of [preferences](/concepts/preferences) for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A custom [Object](/concepts/objects) entity which belongs to a collection.',
    example: { collection: 'projects', id: 'project_1', name: 'My project' },
    required: ['id', 'collection'],
    title: 'InlineIdentifyObjectRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InlineIdentifyObjectRequest',
    'x-validate': null,
  })
  .openapi('InlineIdentifyObjectRequest')

type RecipientRequestType =
  | string
  | z.infer<typeof InlineIdentifyUserRequestSchema>
  | z.infer<typeof InlineIdentifyObjectRequestSchema>

const RecipientRequestSchema: z.ZodType<RecipientRequestType> = z
  .xor([
    z
      .string()
      .openapi({
        description: 'The ID of the user which is used as the reference for the recipient.',
        example: 'user_123',
        title: 'UserRecipient',
        'x-struct': null,
        'x-validate': null,
      }),
    InlineIdentifyUserRequestSchema,
    InlineIdentifyObjectRequestSchema,
  ])
  .openapi({
    description:
      'Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.',
    example: { id: 'user_1' },
    title: 'RecipientRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.RecipientRequest',
    'x-validate': null,
  })
  .openapi('RecipientRequest')

const ScheduleRepeatRuleSchema = z
  .object({
    __typename: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The typename of the schema.',
        example: 'ScheduleRepeat',
        'x-struct': null,
        'x-validate': null,
      }),
    day_of_month: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The day of the month to repeat the schedule.',
        example: 1,
        'x-struct': null,
        'x-validate': null,
      }),
    days: z
      .array(
        z
          .enum(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
          .openapi({
            description: 'An identifier for a day of the week.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The days of the week to repeat the schedule.',
        example: ['mon', 'tue', 'wed', 'thu', 'fri'],
        'x-struct': null,
        'x-validate': null,
      }),
    frequency: z
      .enum(['daily', 'weekly', 'monthly', 'hourly'])
      .openapi({
        description: 'The frequency of the schedule.',
        example: 'daily',
        'x-struct': null,
        'x-validate': null,
      }),
    hours: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The hour of the day to repeat the schedule.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
    interval: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({
        description: 'The interval of the schedule.',
        example: 1,
        'x-struct': null,
        'x-validate': null,
      }),
    minutes: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The minute of the hour to repeat the schedule.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The repeat rule for the schedule.',
    example: {
      __typename: 'ScheduleRepeat',
      day_of_month: null,
      days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      frequency: 'daily',
      hours: null,
      interval: 1,
      minutes: null,
    },
    required: ['frequency'],
    title: 'ScheduleRepeatRule',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ScheduleRepeatRule',
    'x-validate': null,
  })
  .openapi('ScheduleRepeatRule')

const InlineTenantRequestSchema: z.ZodType<InlineTenantRequestType> = z
  .xor([
    z
      .string()
      .openapi({
        description: 'The unique identifier for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    TenantRequestSchema,
  ])
  .openapi({
    description: 'An request to set a tenant inline.',
    example: { id: 'tenant_1', name: 'Acme Corp, Inc.' },
    title: 'InlineTenantRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InlineTenantRequest',
    'x-validate': null,
  })
  .openapi('InlineTenantRequest')

type CreateSchedulesRequestType = {
  actor?: z.infer<typeof RecipientRequestSchema> | (unknown | null)
  data?: { [key: string]: unknown } | null
  ending_at?: string | null
  recipients: z.infer<typeof RecipientRequestSchema>[]
  repeats?: z.infer<typeof ScheduleRepeatRuleSchema>[]
  scheduled_at?: string | null
  tenant?: z.infer<typeof InlineTenantRequestSchema> | (unknown | null)
  workflow: string
}

type BulkUpsertSubscriptionsRequestType = {
  subscriptions: {
    id: string
    properties?: { [key: string]: unknown } | null
    recipients: z.infer<typeof RecipientRequestSchema>[]
  }[]
}

type SetObjectRequestType = {
  channel_data?: z.infer<typeof InlineChannelDataRequestSchema>
  locale?: string | null
  name?: string | null
  preferences?: z.infer<typeof InlinePreferenceSetRequestSchema>
  timezone?: string | null
}

type TriggerWorkflowRequestType = {
  actor?: z.infer<typeof RecipientRequestSchema> | (unknown | null)
  cancellation_key?: string | null
  data?: { [key: string]: unknown } | null
  recipients: z.infer<typeof RecipientRequestSchema>[]
  settings?: { sandbox_mode?: boolean | null; skip_delay?: boolean | null } | null
  tenant?: z.infer<typeof InlineTenantRequestSchema> | (unknown | null)
}

type AudienceMemberRequestType = {
  tenant?: string | null
  user: z.infer<typeof InlineIdentifyUserRequestSchema>
}

const AudienceMemberRequestSchema: z.ZodType<AudienceMemberRequestType> = z
  .object({
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the tenant.',
        example: 'ingen_isla_nublar',
        'x-struct': null,
        'x-validate': null,
      }),
    user: InlineIdentifyUserRequestSchema.openapi({
      description: 'A user object. At minimum must contain an `id` property.',
      'x-struct': null,
      'x-validate': null,
    }),
  })
  .openapi({
    description: 'An audience member.',
    example: {
      tenant: 'ingen_isla_nublar',
      user: { email: 'ellie@ingen.net', id: 'dr_sattler', name: 'Dr. Ellie Sattler' },
    },
    required: ['user'],
    title: 'AudienceMemberRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AudienceMemberRequest',
    'x-validate': null,
  })
  .openapi('AudienceMemberRequest')

type RemoveAudienceMembersRequestType = { members: z.infer<typeof AudienceMemberRequestSchema>[] }

type SetTenantRequestType = {
  channel_data?: (unknown | null) | z.infer<typeof InlineChannelDataRequestSchema>
  name?: string | null
  settings?: {
    branding?: {
      icon_url?: string | null
      logo_url?: string | null
      primary_color?: string | null
      primary_color_contrast?: string | null
    }
    preference_set?: (unknown | null) | z.infer<typeof PreferenceSetRequestSchema>
  }
}

type BulkCreateSchedulesRequestType = {
  schedules: {
    actor?: z.infer<typeof RecipientRequestSchema> | (unknown | null)
    data?: { [key: string]: unknown } | null
    ending_at?: string | null
    recipient?: z.infer<typeof RecipientRequestSchema>
    repeats?: z.infer<typeof ScheduleRepeatRuleSchema>[]
    scheduled_at?: string | null
    tenant?: z.infer<typeof InlineTenantRequestSchema> | (unknown | null)
    workflow: string
  }[]
}

type ListObjectPreferenceSetsResponseType = z.infer<typeof PreferenceSetSchema>[]

type IdentifyUserRequestType = {
  avatar?: string | null
  channel_data?: z.infer<typeof InlineChannelDataRequestSchema> | null
  created_at?: string | null
  email?: string | null
  locale?: string | null
  name?: string | null
  phone_number?: string | null
  preferences?: z.infer<typeof InlinePreferenceSetRequestSchema> | null
  timezone?: string | null
}

const TenantSchema: z.ZodType<TenantType> = z
  .looseObject({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Tenant',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    settings: z
      .object({
        branding: z
          .object({
            dark_icon_url: z
              .url()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The icon URL for the tenant in dark mode. Falls back to `icon_url` if unset.',
                example: 'https://example.com/trex_silhouette_icon_dark.png',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_logo_url: z
              .url()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The logo URL for the tenant in dark mode. Falls back to `logo_url` if unset.',
                example: 'https://example.com/amber_fossil_logo_dark.png',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_primary_color: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The primary color for the tenant in dark mode, provided as a hex value. Defaults to `#FFFFFF`.',
                example: '#FFFFFF',
                'x-struct': null,
                'x-validate': null,
              }),
            dark_primary_color_contrast: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The primary color contrast for the tenant in dark mode, provided as a hex value. Defaults to `#000000`.',
                example: '#000000',
                'x-struct': null,
                'x-validate': null,
              }),
            icon_url: z
              .url()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The icon URL for the tenant. Must point to a valid image with an image MIME type.',
                example: 'https://example.com/trex_silhouette_icon.png',
                'x-struct': null,
                'x-validate': null,
              }),
            logo_url: z
              .url()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The logo URL for the tenant. Must point to a valid image with an image MIME type.',
                example: 'https://example.com/amber_fossil_logo.png',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color for the tenant, provided as a hex value.',
                example: '#DF1A22',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color_contrast: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color contrast for the tenant, provided as a hex value.',
                example: '#FFDE00',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The branding for the tenant.',
            'x-struct': null,
            'x-validate': null,
            required: [],
          }),
        preference_set: z
          .union([
            PreferenceSetSchema,
            z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
          ])
          .exactOptional()
          .openapi({
            description:
              'The preference set for the tenant. Used to override the default preference set.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The settings for the tenant. Includes branding and preference set.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  })
  .openapi({
    description: 'A tenant entity.',
    example: {
      __typename: 'Tenant',
      id: 'tenant_jp123',
      name: 'Jurassic Park',
      settings: {
        branding: {
          dark_icon_url: 'https://example.com/trex_silhouette_icon_dark.png',
          dark_logo_url: 'https://example.com/amber_fossil_logo_dark.png',
          dark_primary_color: '#FFFFFF',
          dark_primary_color_contrast: '#000000',
          icon_url: 'https://example.com/trex_silhouette_icon.png',
          logo_url: 'https://example.com/amber_fossil_logo.png',
          primary_color: '#DF1A22',
          primary_color_contrast: '#FFDE00',
        },
        preference_set: {
          categories: { safety: { channel_types: { email: true, push: true } } },
          channel_types: { email: true, in_app_feed: true, push: true },
          id: 'default',
          workflows: { park_alert: { channel_types: { email: true, push: true } } },
        },
      },
    },
    required: ['__typename', 'id'],
    title: 'Tenant',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Tenant',
    'x-validate': null,
  })
  .openapi('Tenant')

type SetTenantResponseType = z.infer<typeof TenantSchema>

const RecipientReferenceSchema = z
  .xor([
    z
      .string()
      .openapi({
        description: 'The ID of the user which is used as the reference for the recipient.',
        example: 'user_123',
        title: 'UserReference',
        'x-struct': null,
        'x-validate': null,
      }),
    z
      .object({
        collection: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The collection the recipient object belongs to.',
            example: 'projects',
            'x-struct': null,
            'x-validate': null,
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An identifier for the recipient object.',
            example: 'project_123',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'A reference to a recipient object.',
        example: { collection: 'projects', id: 'project_123' },
        title: 'ObjectReference',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  ])
  .openapi({
    description:
      'A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).',
    example: 'user_123',
    title: 'RecipientReference',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.RecipientReference',
    'x-validate': null,
  })
  .openapi('RecipientReference')

type UpdateSchedulesRequestType = {
  actor?: z.infer<typeof RecipientReferenceSchema> | (unknown | null)
  data?: { [key: string]: unknown } | null
  ending_at?: string | null
  repeats?: z.infer<typeof ScheduleRepeatRuleSchema>[]
  schedule_ids: string[]
  scheduled_at?: string | null
  tenant?: z.infer<typeof InlineTenantRequestSchema> | (unknown | null)
}

type AddAudienceMembersRequestType = { members: z.infer<typeof AudienceMemberRequestSchema>[] }

type UpsertSubscriptionsRequestType = {
  properties?: { [key: string]: unknown } | null
  recipients: z.infer<typeof RecipientRequestSchema>[]
}

const PageInfoSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'PageInfo',
        'x-struct': null,
        'x-validate': null,
      }),
    after: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The cursor to fetch entries after.',
        'x-struct': null,
        'x-validate': null,
      }),
    before: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The cursor to fetch entries before.',
        'x-struct': null,
        'x-validate': null,
      }),
    page_size: z
      .int()
      .openapi({
        description: 'The number of items per page (defaults to 50).',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Pagination information for a list of resources.',
    example: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    required: ['__typename', 'page_size'],
    title: 'PageInfo',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PageInfo',
    'x-validate': null,
  })
  .openapi('PageInfo')

type ListTenantsResponseType = {
  entries: z.infer<typeof TenantSchema>[]
  page_info: z.infer<typeof PageInfoSchema>
}

type BulkSetObjectRequestType = {
  channel_data?: z.infer<typeof InlineChannelDataRequestSchema> | (unknown | null)
  created_at?: string | null
  id: string
  name?: string | null
  preferences?: z.infer<typeof InlinePreferenceSetRequestSchema> | (unknown | null)
}

const BulkPreferenceSetRequestSchema = z
  .object({
    categories: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the category and the values are the preference settings for that category.',
            example: { marketing: { channel_types: { email: false } }, transactional: true },
            title: 'PreferenceSetRequestCategories',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the category and the values are the preference settings for that category.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_types: z
      .union([
        PreferenceSetChannelTypesSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel type and the values are the preference settings for that channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    channels: z
      .union([
        PreferenceSetChannelsSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel ID and the values are the preference settings for that channel ID.',
        'x-struct': null,
        'x-validate': null,
      }),
    commercial_subscribed: z
      .union([
        z.boolean().openapi({ 'x-struct': null, 'x-validate': null }),
        PreferenceSetCommercialSubscribedSettingSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the preference set to update. Can be `default` or a tenant ID.',
        example: 'default',
        'x-struct': null,
        'x-validate': null,
      }),
    workflows: z
      .union([
        z
          .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
          .openapi({
            description:
              'An object where the key is the workflow key and the values are the preference settings for that workflow.',
            example: {
              'dinosaurs-loose': { channel_types: { email: false, sms: true } },
              'welcome-sequence': true,
            },
            title: 'PreferenceSetRequestWorkflows',
            'x-struct': null,
            'x-validate': null,
          }),
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the workflow key and the values are the preference settings for that workflow.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A preference set to apply in a bulk operation. Always replaces existing preferences for the specified set.',
    example: {
      categories: { marketing: false, transactional: { channel_types: { email: false } } },
      channel_types: { email: true },
      channels: {
        '2f641633-95d3-4555-9222-9f1eb7888a80': {
          conditions: [
            { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
          ],
        },
        'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
      },
      commercial_subscribed: true,
      id: 'default',
      workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
    },
    title: 'BulkPreferenceSetRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkPreferenceSetRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('BulkPreferenceSetRequest')

type BulkSetUserPreferencesRequestType = {
  preferences: z.infer<typeof BulkPreferenceSetRequestSchema>
  user_ids: string[]
}

type BulkSetTenantsRequestType = { tenants: z.infer<typeof InlineTenantRequestSchema>[] }

const BulkSetObjectRequestSchema: z.ZodType<BulkSetObjectRequestType> = z
  .looseObject({
    channel_data: z
      .xor([
        InlineChannelDataRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional set of [channel data](/managing-recipients/setting-channel-data) for the object. This is a list of `ChannelData` objects.',
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: z
      .xor([
        InlinePreferenceSetRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'An optional set of [preferences](/concepts/preferences) for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A custom [Object](/concepts/objects) entity which belongs to a collection.',
    example: { id: 'project_1', name: 'My project' },
    required: ['id'],
    title: 'BulkSetObjectRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkSetObjectRequest',
    'x-validate': null,
  })
  .openapi('BulkSetObjectRequest')

type BulkSetObjectsRequestType = { objects: z.infer<typeof BulkSetObjectRequestSchema>[] }

const UserSchema = z
  .looseObject({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'User',
        'x-struct': null,
        'x-validate': null,
      }),
    avatar: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A URL for the avatar of the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The creation date of the user from your system.',
        'x-struct': null,
        'x-validate': null,
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The primary email address for the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name of the user.', 'x-struct': null, 'x-validate': null }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).',
        'x-struct': null,
        'x-validate': null,
      }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A [User](/concepts/users) represents an individual in your system who can receive notifications through Knock. Users are the most common recipients of notifications and are always referenced by your internal identifier.',
    example: {
      __typename: 'User',
      created_at: null,
      email: 'ian.malcolm@chaos.theory',
      id: 'user_id',
      name: 'Dr. Ian Malcolm',
      updated_at: '2024-05-22T12:00:00Z',
    },
    required: ['__typename', 'id', 'updated_at'],
    title: 'User',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.User',
    'x-validate': null,
  })
  .openapi('User')

const ObjectSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Object',
        'x-struct': null,
        'x-validate': null,
      }),
    collection: z
      .string()
      .openapi({
        description: 'The collection this object belongs to.',
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    properties: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'The custom properties associated with the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A custom [Object](/concepts/objects) entity which belongs to a collection.',
    example: {
      __typename: 'Object',
      collection: 'assets',
      created_at: null,
      id: 'specimen_25',
      properties: {
        classification: 'Theropod',
        config: { biz: 'baz', foo: 'bar' },
        name: 'Velociraptor',
        status: 'contained',
      },
      updated_at: '2024-05-22T12:00:00Z',
    },
    required: ['__typename', 'id', 'collection', 'updated_at'],
    title: 'Object',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Object',
    'x-validate': null,
  })
  .openapi('Object')

const RecipientSchema = z
  .xor([UserSchema, ObjectSchema])
  .openapi({
    description: 'A recipient of a notification, which is either a user or an object.',
    example: {
      __typename: 'User',
      avatar: null,
      created_at: null,
      email: 'jane@ingen.net',
      id: 'jane',
      name: 'Jane Doe',
      phone_number: null,
      timezone: null,
      updated_at: '2024-05-22T12:00:00Z',
    },
    title: 'Recipient',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Recipient',
    'x-validate': null,
  })
  .openapi('Recipient')

const ActivitySchema = z
  .object({
    __typename: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Activity',
        'x-struct': null,
        'x-validate': null,
      }),
    actor: z
      .union([
        RecipientSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'The actor who performed the activity.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The workflow trigger `data` payload associated with the activity.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the activity.',
        example: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when the activity was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when the activity was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'An activity associated with a workflow trigger request. Messages produced after a [batch step](/designing-workflows/batch-function) can be associated with one or more activities. Non-batched messages will always be associated with a single activity.',
    example: {
      __typename: 'Activity',
      actor: null,
      data: { foo: 'bar' },
      id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
      inserted_at: '2024-01-01T00:00:00Z',
      recipient: {
        __typename: 'User',
        avatar: null,
        created_at: null,
        email: 'jane@ingen.net',
        id: 'jane',
        name: 'Jane Doe',
        phone_number: null,
        timezone: null,
        updated_at: '2024-05-22T12:00:00Z',
      },
      updated_at: '2024-01-01T00:00:00Z',
    },
    title: 'Activity',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Activity',
    'x-validate': null,
    required: [],
  })
  .openapi('Activity')

const MessageInAppFeedContentBlockSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description: 'The content of the block in a message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the block in a message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
    rendered: z
      .string()
      .openapi({
        description: 'The rendered HTML version of the content.',
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .enum(['markdown', 'text'])
      .openapi({
        description: 'The type of block in a message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A block in a message in an app feed.',
    example: {
      content: 'This is a message in an app feed',
      name: 'body',
      rendered: '<p>This is a message in an app feed</p>',
      type: 'markdown',
    },
    required: ['type', 'name', 'rendered', 'content'],
    title: 'MessageInAppFeedContentBlock',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageInAppFeedContent.ContentBlock',
    'x-validate': null,
  })
  .openapi('MessageInAppFeedContentBlock')

const MessageInAppFeedButtonSetBlockSchema = z
  .object({
    buttons: z
      .array(
        z
          .object({
            action: z
              .string()
              .openapi({
                description: 'The action to take when the button is clicked.',
                'x-struct': null,
                'x-validate': null,
              }),
            label: z
              .string()
              .openapi({
                description: 'The label of the button.',
                'x-struct': null,
                'x-validate': null,
              }),
            name: z
              .string()
              .openapi({
                description: 'The name of the button.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            description: 'A button in an in app feed message.',
            required: ['action', 'label', 'name'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A list of buttons in an in app feed message.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the button set in a message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .literal('button_set')
      .openapi({
        description: 'The type of block in a message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A button set block in a message in an app feed.',
    example: {
      buttons: [{ action: 'action_1', label: 'Action 1', name: 'primary' }],
      name: 'actions',
      type: 'button_set',
    },
    required: ['type', 'name', 'buttons'],
    title: 'MessageInAppFeedButtonSetBlock',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageInAppFeedContent.ButtonSetBlock',
    'x-validate': null,
  })
  .openapi('MessageInAppFeedButtonSetBlock')

const InAppFeedItemSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'FeedItem',
        'x-struct': null,
        'x-validate': null,
      }),
    activities: z
      .array(ActivitySchema)
      .openapi({
        description: 'List of activities associated with this feed item.',
        'x-struct': null,
        'x-validate': null,
      }),
    actors: z
      .array(RecipientSchema)
      .openapi({
        description: 'List of actors associated with this feed item.',
        'x-struct': null,
        'x-validate': null,
      }),
    archived_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the feed item was archived.',
        'x-struct': null,
        'x-validate': null,
      }),
    blocks: z
      .array(
        z
          .xor([MessageInAppFeedContentBlockSchema, MessageInAppFeedButtonSetBlockSchema])
          .openapi({
            description: 'A content block for the feed, can be content or a button set.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'Content blocks that make up the feed item.',
        'x-struct': null,
        'x-validate': null,
      }),
    clicked_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the feed item was clicked.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .openapi({
        description: 'Additional data associated with the feed item.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the feed.',
        example: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z
      .string()
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    interacted_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the feed item was interacted with.',
        'x-struct': null,
        'x-validate': null,
      }),
    link_clicked_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when a link within the feed item was clicked.',
        'x-struct': null,
        'x-validate': null,
      }),
    read_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the feed item was marked as read.',
        'x-struct': null,
        'x-validate': null,
      }),
    seen_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the feed item was marked as seen.',
        'x-struct': null,
        'x-validate': null,
      }),
    source: z
      .object({
        __typename: z
          .string()
          .openapi({
            description: 'The typename of the schema.',
            example: 'Workflow',
            'x-struct': null,
            'x-validate': null,
          }),
        categories: z
          .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
          .openapi({
            description: 'Categories this workflow belongs to.',
            'x-struct': null,
            'x-validate': null,
          }),
        key: z
          .string()
          .openapi({
            description: 'The key of the workflow.',
            'x-struct': null,
            'x-validate': null,
          }),
        version_id: z
          .uuid()
          .openapi({
            description: 'The workflow version ID.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'Source information for the feed item.',
        required: ['__typename', 'key', 'version_id', 'categories'],
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .nullable()
      .openapi({
        description: 'Tenant ID that the feed item belongs to.',
        'x-struct': null,
        'x-validate': null,
      }),
    total_activities: z
      .int()
      .openapi({
        description: 'Total number of activities related to this feed item.',
        example: 10,
        'x-struct': null,
        'x-validate': null,
      }),
    total_actors: z
      .int()
      .openapi({
        description: 'Total number of actors related to this feed item.',
        example: 5,
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z
      .string()
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: "An in-app feed message in a user's feed.",
    example: {
      __typename: 'FeedItem',
      activities: [
        {
          __typename: 'Activity',
          actor: null,
          data: { foo: 'bar' },
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2024-01-01T00:00:00Z',
          recipient: {
            __typename: 'User',
            avatar: null,
            created_at: null,
            email: 'jane@ingen.net',
            id: 'jane',
            name: 'Jane Doe',
            phone_number: null,
            timezone: null,
            updated_at: '2024-05-22T12:00:00Z',
          },
          updated_at: '2024-01-01T00:00:00Z',
        },
      ],
      actors: [
        {
          __typename: 'User',
          avatar: null,
          created_at: null,
          email: 'jane@ingen.net',
          id: 'jane',
          name: 'Jane Doe',
          phone_number: null,
          timezone: null,
          updated_at: '2024-05-22T12:00:00Z',
        },
      ],
      blocks: [
        {
          content: 'This is a message in an app feed',
          name: 'body',
          rendered: '<p>This is a message in an app feed</p>',
          type: 'markdown',
        },
      ],
      data: { foo: 'bar' },
      id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
      inserted_at: '2021-01-01T00:00:00Z',
      source: {
        __typename: 'Workflow',
        categories: ['collaboration'],
        key: 'my_source',
        version_id: '123e4567-e89b-12d3-a456-426614174000',
      },
      tenant: 'acme_corp',
      total_activities: 10,
      total_actors: 5,
      updated_at: '2021-01-01T00:00:00Z',
    },
    required: [
      '__typename',
      'id',
      'inserted_at',
      'updated_at',
      'actors',
      'activities',
      'blocks',
      'source',
      'tenant',
      'total_activities',
      'total_actors',
      'data',
    ],
    title: 'InAppFeedItem',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.InAppFeedItem',
    'x-validate': null,
  })
  .openapi('InAppFeedItem')

const UserInAppFeedResponseSchema = z
  .object({
    entries: z
      .array(InAppFeedItemSchema)
      .openapi({
        description: "The list of feed items in the user's feed.",
        'x-struct': null,
        'x-validate': null,
      }),
    meta: z
      .object({
        __typename: z
          .string()
          .openapi({
            description: 'The typename of the schema.',
            example: 'FeedMetadata',
            'x-struct': null,
            'x-validate': null,
          }),
        total_count: z
          .int()
          .openapi({
            description: "The total number of feed items in the user's feed.",
            example: 100,
            'x-struct': null,
            'x-validate': null,
          }),
        unread_count: z
          .int()
          .openapi({
            description: "The number of unread feed items in the user's feed.",
            example: 10,
            'x-struct': null,
            'x-validate': null,
          }),
        unseen_count: z
          .int()
          .openapi({
            description: "The number of unseen feed items in the user's feed.",
            example: 5,
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: "The metadata for the user's feed.",
        example: {
          __typename: 'FeedMetadata',
          total_count: 100,
          unread_count: 10,
          unseen_count: 5,
        },
        required: ['__typename', 'total_count', 'unread_count', 'unseen_count'],
        'x-struct': null,
        'x-validate': null,
      }),
    page_info: PageInfoSchema,
    vars: z
      .looseObject({})
      .openapi({
        description: 'Additional variables for the feed item.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A paginated list of feed items.',
    example: {
      entries: [
        {
          __typename: 'FeedItem',
          activities: [
            {
              __typename: 'Activity',
              actor: null,
              data: { foo: 'bar' },
              id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
              inserted_at: '2024-01-01T00:00:00Z',
              recipient: {
                __typename: 'User',
                avatar: null,
                created_at: null,
                email: 'jane@ingen.net',
                id: 'jane',
                name: 'Jane Doe',
                phone_number: null,
                timezone: null,
                updated_at: '2024-05-22T12:00:00Z',
              },
              updated_at: '2024-01-01T00:00:00Z',
            },
          ],
          actors: [
            {
              __typename: 'User',
              avatar: null,
              created_at: null,
              email: 'jane@ingen.net',
              id: 'jane',
              name: 'Jane Doe',
              phone_number: null,
              timezone: null,
              updated_at: '2024-05-22T12:00:00Z',
            },
          ],
          blocks: [
            {
              content: 'This is a message in an app feed',
              name: 'body',
              rendered: '<p>This is a message in an app feed</p>',
              type: 'markdown',
            },
          ],
          data: { foo: 'bar' },
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2021-01-01T00:00:00Z',
          source: {
            __typename: 'Workflow',
            categories: ['collaboration'],
            key: 'my_source',
            version_id: '123e4567-e89b-12d3-a456-426614174000',
          },
          tenant: 'acme_corp',
          total_activities: 10,
          total_actors: 5,
          updated_at: '2021-01-01T00:00:00Z',
        },
      ],
      meta: { __typename: 'FeedMetadata', total_count: 100, unread_count: 10, unseen_count: 5 },
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
      vars: { foo: 'bar' },
    },
    required: ['entries', 'page_info', 'vars', 'meta'],
    title: 'UserInAppFeedResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.UserInAppFeedResponse',
    'x-validate': null,
  })
  .openapi('UserInAppFeedResponse')

const ChannelsForSlackProviderResponseSchema = z
  .object({
    next_cursor: z
      .string()
      .nullable()
      .openapi({
        description:
          'Paginate through collections of data by setting the cursor parameter to a next_cursor attribute returned by a previous request\'s response_metadata. Default value fetches the first "page" of the collection.',
        'x-struct': null,
        'x-validate': null,
      }),
    slack_channels: z
      .array(
        z
          .object({
            context_team_id: z
              .string()
              .openapi({
                description: 'The team ID that the Slack channel belongs to.',
                'x-struct': null,
                'x-validate': null,
              }),
            id: z
              .string()
              .openapi({
                description: 'A Slack channel ID from the Slack provider.',
                'x-struct': null,
                'x-validate': null,
              }),
            is_im: z
              .boolean()
              .openapi({
                description: 'Whether the Slack channel is an IM channel.',
                'x-struct': null,
                'x-validate': null,
              }),
            is_private: z
              .boolean()
              .openapi({
                description: 'Whether the Slack channel is private.',
                'x-struct': null,
                'x-validate': null,
              }),
            name: z
              .string()
              .openapi({
                description: 'Slack channel name.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            description: 'A Slack channel.',
            required: ['id', 'name', 'is_private', 'is_im', 'context_team_id'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'List of Slack channels.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'The response from a Slack provider request, containing a list of channels.',
    example: {
      next_cursor: null,
      slack_channels: [
        {
          context_team_id: 'T01234567890',
          id: 'C01234567890',
          is_im: false,
          is_private: false,
          name: 'general',
        },
      ],
    },
    required: ['slack_channels', 'next_cursor'],
    title: 'ChannelsForSlackProviderResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ChannelsForSlackProviderResponse',
    'x-validate': null,
  })
  .openapi('ChannelsForSlackProviderResponse')

const AudienceMemberSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'AudienceMember',
        'x-struct': null,
        'x-validate': null,
      }),
    added_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        example: '2025-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the tenant.',
        example: 'acme_corp',
        'x-struct': null,
        'x-validate': null,
      }),
    user: UserSchema,
    user_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the user.',
        example: 'user_123',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'An audience member.',
    example: {
      __typename: 'AudienceMember',
      added_at: '1993-06-10T14:30:00Z',
      tenant: 'ingen_isla_nublar',
      user: {
        __typename: 'User',
        created_at: null,
        email: 'alan.grant@dig.site.mt',
        id: 'dr_grant',
        name: 'Dr. Alan Grant',
        updated_at: '1993-06-09T08:15:00Z',
      },
      user_id: 'dr_grant',
    },
    required: ['__typename', 'added_at', 'user_id', 'user'],
    title: 'AudienceMember',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AudienceMember',
    'x-validate': null,
  })
  .openapi('AudienceMember')

const SubscriptionSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Subscription',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        example: '2021-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    object: ObjectSchema,
    properties: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The custom properties associated with the subscription relationship.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        example: '2021-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A subscription object.',
    example: {
      __typename: 'Subscription',
      inserted_at: '2021-01-01T00:00:00Z',
      object: {
        __typename: 'Object',
        collection: 'assets',
        created_at: null,
        id: 'specimen_25',
        properties: {
          classification: 'Theropod',
          config: { biz: 'baz', foo: 'bar' },
          name: 'Velociraptor',
          status: 'contained',
        },
        updated_at: '2024-05-22T12:00:00Z',
      },
      recipient: {
        __typename: 'User',
        avatar: null,
        created_at: null,
        email: 'jane@ingen.net',
        id: 'jane',
        name: 'Jane Doe',
        phone_number: null,
        timezone: null,
        updated_at: '2024-05-22T12:00:00Z',
      },
      updated_at: '2021-01-01T00:00:00Z',
    },
    required: ['__typename', 'recipient', 'object', 'inserted_at', 'updated_at'],
    title: 'Subscription',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Subscription',
    'x-validate': null,
  })
  .openapi('Subscription')

const ScheduleSchema = z
  .object({
    __typename: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Schedule',
        'x-struct': null,
        'x-validate': null,
      }),
    actor: z
      .xor([RecipientSchema, z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null })])
      .exactOptional()
      .openapi({
        description:
          'A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .uuid()
      .openapi({
        description: 'Unique identifier for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    last_occurrence_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last occurrence of the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    next_occurrence_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The next occurrence of the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientSchema,
    repeats: z
      .array(ScheduleRepeatRuleSchema)
      .openapi({
        description: 'The repeat rule for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
    workflow: z
      .string()
      .openapi({
        description: 'The workflow the schedule is applied to.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A schedule represents a recurring workflow execution.',
    example: {
      __typename: 'Schedule',
      actor: null,
      data: null,
      id: '123e4567-e89b-12d3-a456-426614174000',
      inserted_at: '2021-01-01T00:00:00Z',
      last_occurrence_at: null,
      next_occurrence_at: null,
      recipient: {
        __typename: 'User',
        avatar: null,
        created_at: null,
        email: 'jane@ingen.net',
        id: 'jane',
        name: 'Jane Doe',
        phone_number: null,
        timezone: null,
        updated_at: '2024-05-22T12:00:00Z',
      },
      repeats: [
        {
          __typename: 'ScheduleRepeat',
          day_of_month: null,
          days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          frequency: 'daily',
          hours: null,
          interval: 1,
          minutes: null,
        },
      ],
      tenant: null,
      updated_at: '2021-01-01T00:00:00Z',
      workflow: 'workflow_123',
    },
    required: ['id', 'workflow', 'recipient', 'repeats', 'inserted_at', 'updated_at'],
    title: 'Schedule',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Schedule',
    'x-validate': null,
  })
  .openapi('Schedule')

const SchedulesResponseSchema = z
  .array(ScheduleSchema)
  .openapi({
    description: 'A list of schedules.',
    example: [
      {
        __typename: 'Schedule',
        actor: null,
        data: null,
        id: '123e4567-e89b-12d3-a456-426614174000',
        inserted_at: '2021-01-01T00:00:00Z',
        last_occurrence_at: null,
        next_occurrence_at: null,
        recipient: {
          __typename: 'User',
          avatar: null,
          created_at: null,
          email: 'jane@ingen.net',
          id: 'jane',
          name: 'Jane Doe',
          phone_number: null,
          timezone: null,
          updated_at: '2024-05-22T12:00:00Z',
        },
        repeats: [
          {
            __typename: 'ScheduleRepeat',
            day_of_month: null,
            days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            frequency: 'daily',
            hours: null,
            interval: 1,
            minutes: null,
          },
        ],
        tenant: null,
        updated_at: '2021-01-01T00:00:00Z',
        workflow: 'workflow_123',
      },
    ],
    title: 'SchedulesResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SchedulesResponse',
    'x-validate': null,
  })
  .openapi('SchedulesResponse')

const ListUserPreferenceSetsResponseSchema: z.ZodType<ListUserPreferenceSetsResponseType> = z
  .array(PreferenceSetSchema)
  .openapi({
    description: 'A list of preference sets for the user.',
    example: [
      {
        categories: { marketing: false, transactional: { channel_types: { email: false } } },
        channel_types: {
          email: true,
          push: false,
          sms: {
            conditions: [
              { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
            ],
          },
        },
        commercial_subscribed: true,
        id: 'default',
        workflows: null,
      },
    ],
    title: 'ListUserPreferenceSetsResponse',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('ListUserPreferenceSetsResponse')

const PreferenceCenterSignedUrlResponseSchema = z
  .object({
    token: z
      .string()
      .openapi({
        description:
          'The signed JWT token for the preference center, usable as the `/p/{token}` path segment.',
        example: 'eyJhbGciOiJIUzI1NiJ9...',
        'x-struct': null,
        'x-validate': null,
      }),
    url: z
      .string()
      .openapi({
        description: 'The full URL to the preference center for the user.',
        example: 'https://p.knock.app/p/eyJhbGciOiJIUzI1NiJ9...',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A signed preference center URL and token for a user.',
    example: {
      token: 'eyJhbGciOiJIUzI1NiJ9...',
      url: 'https://p.knock.app/p/eyJhbGciOiJIUzI1NiJ9...',
    },
    required: ['url', 'token'],
    title: 'PreferenceCenterSignedUrlResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceCenterSignedUrlResponse',
    'x-validate': null,
  })
  .openapi('PreferenceCenterSignedUrlResponse')

const CancelWorkflowRequestSchema = z
  .object({
    cancellation_key: z
      .string()
      .openapi({
        description:
          'A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientReferenceSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'When invoked using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally provide one or more recipients to scope the request to.',
    example: { cancellation_key: 'cancel-workflow-123', recipients: ['jhammond'] },
    required: ['cancellation_key'],
    title: 'CancelWorkflowRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.CancelWorkflowRequest',
    'x-validate': null,
  })
  .openapi('CancelWorkflowRequest')

const GuidesResponseSchema = z
  .object({
    entries: z
      .array(
        z
          .object({
            __typename: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The typename of the schema.',
                'x-struct': null,
                'x-validate': null,
              }),
            activation_url_patterns: z
              .array(
                z
                  .object({
                    directive: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "The directive for the URL pattern ('allow' or 'block')",
                        'x-struct': null,
                        'x-validate': null,
                      }),
                    pathname: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The pathname pattern to match (supports wildcards like /*)',
                        'x-struct': null,
                        'x-validate': null,
                      }),
                    search: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The search query params to match',
                        'x-struct': null,
                        'x-validate': null,
                      }),
                  })
                  .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  "A list of URL Patterns to evaluate user's current location to activate the guide, if matched",
                'x-struct': null,
                'x-validate': null,
              }),
            activation_url_rules: z
              .array(
                z
                  .object({
                    argument: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The value to compare against',
                        'x-struct': null,
                        'x-validate': null,
                      }),
                    directive: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "The directive for the URL rule ('allow' or 'block')",
                        'x-struct': null,
                        'x-validate': null,
                      }),
                    operator: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "The comparison operator ('contains' or 'equal_to')",
                        'x-struct': null,
                        'x-validate': null,
                      }),
                    variable: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "The variable to evaluate ('pathname')",
                        'x-struct': null,
                        'x-validate': null,
                      }),
                  })
                  .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  "A list of URL rules to evaluate user's current location to activate the guide, if matched",
                'x-struct': null,
                'x-validate': null,
              }),
            active: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Whether the guide is active.',
                'x-struct': null,
                'x-validate': null,
              }),
            bypass_global_group_limit: z
              .boolean()
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            channel_id: z.uuid().exactOptional().openapi({ 'x-struct': null, 'x-validate': null }),
            dashboard_url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'URL to this guide in the Knock dashboard',
                'x-struct': null,
                'x-validate': null,
              }),
            id: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The unique identifier for the guide.',
                'x-struct': null,
                'x-validate': null,
              }),
            inserted_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            key: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The key of the guide.',
                'x-struct': null,
                'x-validate': null,
              }),
            semver: z.string().exactOptional().openapi({ 'x-struct': null, 'x-validate': null }),
            steps: z
              .array(
                z
                  .object({
                    content: z
                      .looseObject({})
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null }),
                    message: z
                      .object({
                        archived_at: z.iso
                          .datetime({ offset: true })
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                        id: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                        interacted_at: z.iso
                          .datetime({ offset: true })
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                        link_clicked_at: z.iso
                          .datetime({ offset: true })
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                        read_at: z.iso
                          .datetime({ offset: true })
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                        seen_at: z.iso
                          .datetime({ offset: true })
                          .nullable()
                          .exactOptional()
                          .openapi({ 'x-struct': null, 'x-validate': null }),
                      })
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
                    ref: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null }),
                    schema_key: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null }),
                    schema_semver: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null }),
                    schema_variant_key: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-struct': null, 'x-validate': null }),
                  })
                  .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
              )
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The type of the guide.',
                'x-struct': null,
                'x-validate': null,
              }),
            updated_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
          })
          .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
      )
      .openapi({ description: 'A list of guides.', 'x-struct': null, 'x-validate': null }),
    guide_group_display_logs: z
      .record(
        z.string(),
        z.iso.datetime({ offset: true }).openapi({ 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description: 'A map of guide group keys to their last display timestamps.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_groups: z
      .array(
        z
          .object({
            __typename: z
              .string()
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            display_interval: z
              .int()
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            display_sequence: z
              .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            inserted_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
            key: z.string().exactOptional().openapi({ 'x-struct': null, 'x-validate': null }),
            updated_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ 'x-struct': null, 'x-validate': null }),
          })
          .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
      )
      .openapi({
        description: 'A list of guide groups with their display sequences and intervals.',
        'x-struct': null,
        'x-validate': null,
      }),
    ineligible_guides: z
      .array(
        z
          .object({
            key: z
              .string()
              .openapi({
                description: "The guide's key identifier",
                'x-struct': null,
                'x-validate': null,
              }),
            message: z
              .string()
              .openapi({
                description: 'Human-readable explanation of ineligibility',
                'x-struct': null,
                'x-validate': null,
              }),
            reason: z
              .enum([
                'guide_not_active',
                'marked_as_archived',
                'target_conditions_not_met',
                'not_in_target_audience',
              ])
              .openapi({
                description: 'Reason code for ineligibility',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            required: ['key', 'reason', 'message'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'Markers for guides the user is not eligible to see.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A response for a list of guides.',
    example: {
      entries: [
        {
          __typename: 'Guide',
          activation_url_patterns: [],
          activation_url_rules: [
            {
              argument: '/workflows',
              directive: 'allow',
              operator: 'contains',
              variable: 'pathname',
            },
            { argument: '/guides', directive: 'allow', operator: 'equal_to', variable: 'pathname' },
          ],
          active: true,
          bypass_global_group_limit: false,
          channel_id: '51b92f90-1504-4fda-95c1-495a3883bc4d',
          dashboard_url: 'https://dashboard.knock.app/~/guides/nps-survey',
          id: '53595157-2fac-4a17-8dd7-e6603e32cb3a',
          inserted_at: '2025-09-30T14:54:44.217756Z',
          key: 'nps-survey',
          semver: '0.0.3',
          steps: [
            {
              content: { companyName: 'Knock', showFeedbackSection: true, showThanksToast: true },
              message: {
                archived_at: null,
                id: '33hjnKRKNx9ISRlixVBjhpkh28J',
                interacted_at: '2025-10-07T15:10:59.291Z',
                link_clicked_at: null,
                read_at: '2025-10-07T15:10:59.291Z',
                seen_at: '2025-10-06T18:46:03.210Z',
              },
              ref: 'step_1',
              schema_key: 'nps-survey',
              schema_semver: '0.0.3',
              schema_variant_key: 'default',
            },
          ],
          type: 'nps-survey',
          updated_at: '2025-10-03T17:46:53.653663Z',
        },
        {
          __typename: 'Guide',
          activation_url_patterns: [
            { directive: 'allow', pathname: '/dairy/*' },
            { directive: 'allow', pathname: '/produce', search: 'role=admin' },
            { directive: 'allow', pathname: '/' },
          ],
          activation_url_rules: [],
          active: true,
          bypass_global_group_limit: false,
          channel_id: '51b92f90-1504-4fda-95c1-495a3883bc4d',
          dashboard_url: 'https://dashboard.knock.app/~/guides/changelog-card',
          id: '4fc4503e-ef8b-473a-ae07-14800639d30c',
          inserted_at: '2025-10-07T19:41:06.215233Z',
          key: 'changelog-card',
          semver: '0.0.3',
          steps: [
            {
              content: {
                body: 'Lorem ipsum',
                dismissible: false,
                eyebrowText: 'New in Knock',
                image: {
                  action: '',
                  alt: '',
                  url: 'https://bhoite.com/img/sculptures/2024/lander-r2/lander-r2.jpg',
                },
                link: 'https://dashboard.knock.app/knock/development/guides/changelog-card/editor',
                title: 'Changelog card',
              },
              message: {
                archived_at: null,
                id: null,
                interacted_at: null,
                link_clicked_at: null,
                read_at: null,
                seen_at: null,
              },
              ref: 'step_1',
              schema_key: 'changelog-card',
              schema_semver: '0.0.3',
              schema_variant_key: 'default',
            },
          ],
          type: 'changelog-card',
          updated_at: '2025-10-07T20:39:52.410146Z',
        },
      ],
      guide_group_display_logs: { default: '2025-08-16T00:47:14.025Z' },
      guide_groups: [
        {
          __typename: 'GuideGroup',
          display_interval: 3600,
          display_sequence: ['nps-survey', 'changelog-card'],
          inserted_at: '2025-07-24T21:06:27.394627Z',
          key: 'default',
          updated_at: '2025-10-07T20:39:52.465400Z',
        },
      ],
      ineligible_guides: [
        {
          key: 'onboarding-tour',
          message: 'User has archived this guide already',
          reason: 'marked_as_archived',
        },
        {
          key: 'premium-feature',
          message: 'User is not a member of the target audience',
          reason: 'not_in_target_audience',
        },
      ],
    },
    required: ['entries', 'guide_groups', 'guide_group_display_logs', 'ineligible_guides'],
    title: 'GuidesResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Responses.GuidesResponse',
    'x-validate': null,
  })
  .openapi('GuidesResponse')

const MessageSmsContentSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageSmsContent',
        'x-struct': null,
        'x-validate': null,
      }),
    body: z
      .string()
      .openapi({
        description: 'The content body of the SMS message.',
        'x-struct': null,
        'x-validate': null,
      }),
    to: z
      .string()
      .openapi({
        description: 'The phone number the SMS was sent to.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The content of an SMS message.',
    example: {
      __typename: 'MessageSmsContent',
      body: 'ALERT: Security systems offline in Sector B. Evacuate immediately. Proceed to emergency bunker. DO NOT attempt to approach the paddocks. Response team dispatched.',
      to: '+15553982647',
    },
    required: ['__typename', 'to', 'body'],
    title: 'MessageSmsContent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageSmsContent',
    'x-validate': null,
  })
  .openapi('MessageSmsContent')

const PreferenceSetRequestCategoriesSchema = z
  .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
  .openapi({
    description:
      'An object where the key is the category and the values are the preference settings for that category.',
    example: { marketing: { channel_types: { email: false } }, transactional: true },
    title: 'PreferenceSetRequestCategories',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('PreferenceSetRequestCategories')

const PreferenceSetWorkflowCategorySettingObjectSchema = z
  .object({
    channel_types: z
      .union([
        PreferenceSetChannelTypesSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel type and the values are the preference settings for that channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    channels: z
      .union([
        PreferenceSetChannelsSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'An object where the key is the channel ID and the values are the preference settings for that channel ID.',
        'x-struct': null,
        'x-validate': null,
      }),
    conditions: z
      .array(ConditionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A list of conditions to apply to a channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'The settings object for a workflow or category, where you can specify channel types or conditions.',
    example: {
      channel_types: { email: false },
      channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
      conditions: null,
    },
    title: 'PreferenceSetWorkflowCategorySettingObject',
    'x-struct': null,
    'x-validate': null,
    required: [],
  })
  .openapi('PreferenceSetWorkflowCategorySettingObject')

const TeamsForMsTeamsProviderResponseSchema = z
  .object({
    ms_teams_teams: z
      .array(
        z
          .object({
            description: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Microsoft Teams team description.',
                'x-struct': null,
                'x-validate': null,
              }),
            displayName: z
              .string()
              .openapi({
                description: 'Microsoft Teams team display name.',
                'x-struct': null,
                'x-validate': null,
              }),
            id: z
              .string()
              .openapi({
                description: 'Microsoft Teams team ID.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['id', 'displayName'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description: 'List of Microsoft Teams teams.',
        'x-struct': null,
        'x-validate': null,
      }),
    skip_token: z
      .string()
      .nullable()
      .openapi({
        description:
          '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to retrieve the next page of results.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'The response from a Microsoft Teams provider request, containing a list of teams.',
    example: {
      ms_teams_teams: [{ displayName: 'Engineering Team', id: 'team-id-1' }],
      skip_token: 'token-for-next-page',
    },
    required: ['ms_teams_teams', 'skip_token'],
    title: 'TeamsForMsTeamsProviderResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.TeamsForMsTeamsProviderResponse',
    'x-validate': null,
  })
  .openapi('TeamsForMsTeamsProviderResponse')

const SlackChannelDataTokenObjectSchema = z
  .object({
    access_token: z
      .string()
      .nullable()
      .openapi({
        description: 'A Slack access token.',
        example: 'xoxb-1234567890',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .nullable()
  .openapi({
    description: 'A Slack connection token.',
    example: { access_token: 'xoxb-1234567890' },
    required: ['access_token'],
    title: 'SlackChannelDataTokenObject',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('SlackChannelDataTokenObject')

const PreferenceCenterConfigRowSchema = z
  .object({
    channel_types: z
      .array(
        z
          .enum([
            'email',
            'in_app',
            'in_app_feed',
            'in_app_guide',
            'sms',
            'push',
            'chat',
            'http',
            'log',
            'deferred_log',
          ])
          .openapi({ 'x-struct': null, 'x-validate': null }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The list of channel types this preference is scoped to. An empty list (or `null`) means the preference applies to all channel types. Present for `workflow`, `category`, and `channel_types` types.',
        example: ['email', 'sms'],
        'x-struct': null,
        'x-validate': null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description shown below the preference row name.',
        example: 'Opt out of receiving comment and reply notifications',
        'x-struct': null,
        'x-validate': null,
      }),
    identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The category name, workflow key, or channel ID this row controls (e.g. `marketing`, `new-project-mentions`, or a channel UUID). Present for `workflow`, `channel`, and `category` types.',
        example: 'new-project-mentions',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The display name of the preference row.',
        example: 'Comments and replies',
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .enum(['workflow', 'channel', 'category', 'channel_types', 'commercial_subscribed'])
      .openapi({
        description:
          'The type of this preference row. `workflow` targets a workflow, `channel` targets a specific channel, `category` targets a workflow category, `channel_types` controls per-channel-type opt-in/out, and `commercial_subscribed` is the commercial notification toggle.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A preference row in the preference center configuration.',
    example: {
      channel_types: [],
      description: 'Opt out of receiving comment and reply notifications',
      identifier: 'comments',
      name: 'Comments and replies',
      type: 'category',
    },
    required: ['type', 'name'],
    title: 'PreferenceCenterConfigRow',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceCenterConfigRow',
    'x-validate': null,
  })
  .openapi('PreferenceCenterConfigRow')

const PreferenceCenterConfigDataSchema = z
  .object({
    body: z
      .string()
      .openapi({
        description: 'The body text displayed below the title.',
        example: 'Choose which notifications you want to receive.',
        'x-struct': null,
        'x-validate': null,
      }),
    rows: z
      .array(PreferenceCenterConfigRowSchema)
      .openapi({
        description: 'An ordered list of rows to display in the preference center.',
        'x-struct': null,
        'x-validate': null,
      }),
    show_account_name: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the account name should be displayed in the preference center.',
        example: true,
        'x-struct': null,
        'x-validate': null,
      }),
    title: z
      .string()
      .openapi({
        description: 'The title displayed at the top of the preference center.',
        example: 'Notification preferences',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The preference center configuration data containing the rows to display.',
    example: {
      body: 'Choose which notifications you want to receive.',
      rows: [
        {
          channel_types: [],
          description: 'Opt out of receiving comment and reply notifications',
          identifier: 'comments',
          name: 'Comments and replies',
          type: 'category',
        },
      ],
      show_account_name: true,
      title: 'Notification preferences',
    },
    required: ['title', 'body', 'rows'],
    title: 'PreferenceCenterConfigData',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceCenterConfigData',
    'x-validate': null,
  })
  .openapi('PreferenceCenterConfigData')

const BulkIdentifyUsersRequestSchema: z.ZodType<BulkIdentifyUsersRequestType> = z
  .object({
    users: z
      .array(InlineIdentifyUserRequestSchema)
      .openapi({ description: 'A list of users.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to identify a list of users.',
    example: {
      users: [
        { email: 'jane@ingen.net', id: 'user_1', name: 'Jane Doe', timezone: 'America/New_York' },
      ],
    },
    required: ['users'],
    title: 'BulkIdentifyUsersRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkIdentifyUsersRequest',
    'x-validate': null,
  })
  .openapi('BulkIdentifyUsersRequest')

const MergeUserRequestSchema = z
  .object({
    from_user_id: z
      .string()
      .openapi({ description: 'The user ID to merge from.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A set of parameters to merge one user into another.',
    example: { from_user_id: 'user_1' },
    required: ['from_user_id'],
    title: 'MergeUserRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MergeUserRequest',
    'x-validate': null,
  })
  .openapi('MergeUserRequest')

const CreateSchedulesRequestSchema: z.ZodType<CreateSchedulesRequestType> = z
  .object({
    actor: z
      .xor([
        RecipientRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
        'x-struct': null,
        'x-validate': null,
      }),
    ending_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ending date and time for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientRequestSchema)
      .openapi({
        description:
          'The recipients to set the schedule for. Limited to 100 recipients per request.',
        'x-struct': null,
        'x-validate': null,
      }),
    repeats: z
      .array(ScheduleRepeatRuleSchema)
      .exactOptional()
      .openapi({
        description: 'The repeat rule for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The starting date and time for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .union([
        InlineTenantRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    workflow: z
      .string()
      .openapi({ description: 'The key of the workflow.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to create a schedule.',
    example: {
      data: { key: 'value' },
      ending_at: null,
      recipients: ['user_123'],
      repeats: [
        {
          __typename: 'ScheduleRepeat',
          day_of_month: null,
          days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          frequency: 'daily',
          hours: null,
          interval: 1,
          minutes: null,
        },
      ],
      scheduled_at: null,
      tenant: 'acme_corp',
      workflow: 'comment-created',
    },
    required: ['workflow', 'recipients'],
    title: 'CreateSchedulesRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.CreateSchedulesRequest',
    'x-validate': null,
  })
  .openapi('CreateSchedulesRequest')

const MessageEventSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageEvent',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The data associated with the message event. Only present for some event types.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the message event.',
        example: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was created.',
        example: '2021-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientReferenceSchema,
    type: z
      .enum([
        'message.created',
        'message.queued',
        'message.sent',
        'message.not_sent',
        'message.delivered',
        'message.delivery_attempted',
        'message.undelivered',
        'message.bounced',
        'message.complaint',
        'message.read',
        'message.unread',
        'message.seen',
        'message.unseen',
        'message.archived',
        'message.unarchived',
        'message.interacted',
        'message.link_clicked',
      ])
      .openapi({
        description: 'The type of event that occurred.',
        example: 'message.sent',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A message event. Occurs when a message [delivery or engagement status](/send-notifications/message-statuses) changes.',
    example: {
      __typename: 'MessageEvent',
      data: null,
      id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
      inserted_at: '2021-01-01T00:00:00Z',
      recipient: 'user_123',
      type: 'message.sent',
    },
    required: ['__typename', 'id', 'inserted_at', 'recipient', 'type'],
    title: 'MessageEvent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageEvent',
    'x-validate': null,
  })
  .openapi('MessageEvent')

const BulkUpsertSubscriptionsRequestSchema: z.ZodType<BulkUpsertSubscriptionsRequestType> = z
  .object({
    subscriptions: z
      .array(
        z
          .object({
            id: z
              .string()
              .openapi({
                description: 'Unique identifier for the object.',
                'x-struct': null,
                'x-validate': null,
              }),
            properties: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The custom properties associated with the subscription relationship.',
                'x-struct': null,
                'x-validate': null,
              }),
            recipients: z
              .array(RecipientRequestSchema)
              .openapi({
                description:
                  'The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            description:
              'A list of subscriptions. 1 subscribed-to id, and N subscriber recipients.',
            required: ['id', 'recipients'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A nested list of subscriptions.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A request to upsert subscriptions for many groups of 1 subscribed-to object, N subscriber recipients.',
    example: {
      subscriptions: [{ id: 'project-1', properties: null, recipients: [{ id: 'user_1' }] }],
    },
    required: ['subscriptions'],
    title: 'BulkUpsertSubscriptionsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkUpsertSubscriptionsRequest',
    'x-validate': null,
  })
  .openapi('BulkUpsertSubscriptionsRequest')

const MessageInteractedRequestSchema = z
  .object({
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Metadata about the interaction.',
        example: { key: 'value' },
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to mark a message as interacted with.',
    example: { metadata: { key: 'value' } },
    title: 'MessageInteractedRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageInteractedRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('MessageInteractedRequest')

const ListUsersResponseSchema = z
  .object({
    entries: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'A list of users.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'A paginated list of users.',
    example: {
      entries: [
        {
          __typename: 'User',
          created_at: null,
          email: 'ian.malcolm@chaos.theory',
          id: 'user_id',
          name: 'Dr. Ian Malcolm',
          updated_at: '2024-05-22T12:00:00Z',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    title: 'ListUsersResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListUsersResponse',
    'x-validate': null,
    required: [],
  })
  .openapi('ListUsersResponse')

const PreferenceSetCategoriesSchema = z
  .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
  .openapi({
    description:
      'An object where the key is the category and the values are the preference settings for that category.',
    example: { marketing: { channel_types: { email: false } } },
    title: 'PreferenceSetCategories',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('PreferenceSetCategories')

const MessageSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'Message',
        'x-struct': null,
        'x-validate': null,
      }),
    actors: z
      .array(RecipientReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).',
        'x-struct': null,
        'x-validate': null,
      }),
    archived_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was archived.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel: z
      .object({
        created_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'The timestamp of when the channel was created.',
            'x-struct': null,
            'x-validate': null,
          }),
        id: z
          .string()
          .openapi({
            description: 'The unique identifier for the channel.',
            'x-struct': null,
            'x-validate': null,
          }),
        key: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Unique identifier for the channel within a project (immutable once created).',
            'x-struct': null,
            'x-validate': null,
          }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The human-readable name of the channel.',
            'x-struct': null,
            'x-validate': null,
          }),
        provider: z
          .string()
          .openapi({
            description: 'The ID of the provider that this channel uses to deliver messages.',
            'x-struct': null,
            'x-validate': null,
          }),
        type: z
          .enum(['email', 'in_app', 'in_app_feed', 'in_app_guide', 'sms', 'push', 'chat', 'http'])
          .openapi({
            description: 'The type of channel, determining what kind of messages it can send.',
            'x-struct': null,
            'x-validate': null,
          }),
        updated_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'The timestamp of when the channel was last updated.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A configured channel, which is a way to route messages to a provider.',
        example: {
          created_at: '2021-01-01T00:00:00Z',
          id: '01234567-89ab-cdef-0123-456789abcdef',
          key: 'my-sendgrid-channel',
          name: 'My Sendgrid Channel',
          provider: 'sendgrid',
          type: 'email',
          updated_at: '2021-01-01T00:00:00Z',
        },
        required: ['id', 'type', 'provider', 'created_at', 'updated_at'],
        'x-struct': null,
        'x-validate': null,
      }),
    channel_id: z
      .uuid()
      .openapi({
        deprecated: true,
        description: 'Deprecated, use channel.id instead.',
        'x-struct': null,
        'x-validate': null,
      }),
    clicked_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was clicked.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).',
        'x-struct': null,
        'x-validate': null,
      }),
    engagement_statuses: z
      .array(
        z
          .enum(['seen', 'read', 'interacted', 'link_clicked', 'archived'])
          .openapi({
            description:
              'An engagement status for a message. Can be one of: read, seen, interacted, link_clicked, archived.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A list of engagement statuses.',
        example: ['read', 'seen'],
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the message.',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    interacted_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was interacted with.',
        'x-struct': null,
        'x-validate': null,
      }),
    link_clicked_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when a link in the message was clicked.',
        'x-struct': null,
        'x-validate': null,
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The metadata associated with the message.',
        example: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
        'x-struct': null,
        'x-validate': null,
      }),
    read_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was read.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientReferenceSchema,
    recipient_snapshot: z
      .object({
        channel_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The chat channel the message was delivered to (chat channels)',
            'x-struct': null,
            'x-validate': null,
          }),
        email: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The email address the message was delivered to (email channels)',
            'x-struct': null,
            'x-validate': null,
          }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The recipient name at send time (email channels)',
            'x-struct': null,
            'x-validate': null,
          }),
        user_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The chat user the message was direct-messaged to (chat channels)',
            'x-struct': null,
            'x-validate': null,
          }),
        via_incoming_webhook: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Whether the chat message was delivered via an incoming webhook',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was scheduled to be sent.',
        'x-struct': null,
        'x-validate': null,
      }),
    seen_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the message was seen.',
        'x-struct': null,
        'x-validate': null,
      }),
    source: z
      .object({
        __typename: z
          .string()
          .openapi({ example: 'NotificationSource', 'x-struct': null, 'x-validate': null }),
        branch_path: z
          .array(
            z
              .object({
                branch_id: z
                  .uuid()
                  .openapi({
                    description: 'The ID of the branch taken.',
                    'x-struct': null,
                    'x-validate': null,
                  }),
                step_ref: z
                  .string()
                  .openapi({
                    description: 'The reference of the branching step.',
                    'x-struct': null,
                    'x-validate': null,
                  }),
                step_type: z
                  .string()
                  .openapi({
                    description: 'The type of the branching step.',
                    'x-struct': null,
                    'x-validate': null,
                  }),
              })
              .openapi({
                required: ['step_ref', 'step_type', 'branch_id'],
                'x-struct': null,
                'x-validate': null,
              }),
          )
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.',
            'x-struct': null,
            'x-validate': null,
          }),
        categories: z
          .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
          .openapi({
            description: 'The categories associated with the message.',
            'x-struct': null,
            'x-validate': null,
          }),
        key: z
          .string()
          .openapi({
            description: 'The key of the workflow or guide that triggered the message.',
            'x-struct': null,
            'x-validate': null,
          }),
        step_ref: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The step reference for the step in the workflow that generated the message.',
            'x-struct': null,
            'x-validate': null,
          }),
        type: z
          .enum(['broadcast', 'workflow', 'guide'])
          .exactOptional()
          .openapi({
            description: 'Whether this message was generated from a workflow, broadcast, or guide.',
            'x-struct': null,
            'x-validate': null,
          }),
        version_id: z
          .uuid()
          .openapi({
            description:
              'The ID of the version of the workflow or guide that triggered the message.',
            'x-struct': null,
            'x-validate': null,
          }),
        workflow_recipient_run_id: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.',
            'x-struct': null,
            'x-validate': null,
          }),
        workflow_run_id: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'The workflow or guide that triggered the message.',
        example: {
          __typename: 'NotificationSource',
          branch_path: [
            {
              branch_id: '123e4567-e89b-12d3-a456-426614174000',
              step_ref: 'experiment',
              step_type: 'random_cohort',
            },
          ],
          categories: ['collaboration'],
          key: 'comment-created',
          step_ref: 'email_step_1',
          version_id: '123e4567-e89b-12d3-a456-426614174000',
          workflow_recipient_run_id: '456e7890-a12b-34c5-d678-456789012345',
          workflow_run_id: '987e6543-e21c-34b5-c678-987654321000',
        },
        required: ['__typename', 'key', 'version_id', 'categories'],
        'x-struct': null,
        'x-validate': null,
      }),
    status: z
      .enum([
        'queued',
        'sent',
        'delivered',
        'delivery_attempted',
        'undelivered',
        'not_sent',
        'bounced',
      ])
      .openapi({
        description: 'The message delivery status.',
        example: 'sent',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.',
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
    workflow: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The key of the workflow that generated the message.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'Represents a single message that was generated by a workflow for a given channel.',
    example: {
      __typename: 'Message',
      actors: ['mr_arnold', 'mr_muldoon'],
      archived_at: null,
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      clicked_at: null,
      data: {
        affected_areas: ['visitor_center', 'raptor_pen', 'trex_paddock'],
        attraction_id: 'paddock_rex_01',
        evacuation_protocol: 'active',
        message: 'Life finds a way',
        severity: 'critical',
        system_status: 'fences_failing',
      },
      engagement_statuses: ['read', 'seen'],
      id: '2w3YUpTTOxuDvZFji8OMsKrG176',
      inserted_at: '1993-06-11T21:15:00Z',
      interacted_at: null,
      link_clicked_at: null,
      metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
      read_at: '1993-06-11T21:30:00Z',
      recipient: 'dr_grant',
      recipient_snapshot: { email: 'user@example.com', name: 'John Doe' },
      scheduled_at: null,
      seen_at: '1993-06-11T21:29:45Z',
      source: {
        __typename: 'NotificationSource',
        branch_path: [
          {
            branch_id: '123e4567-e89b-12d3-a456-426614174000',
            step_ref: 'experiment',
            step_type: 'random_cohort',
          },
        ],
        categories: ['security', 'emergency'],
        key: 'security-breach-alert',
        step_ref: 'alert_step_1',
        version_id: '123e4567-e89b-12d3-a456-426614174000',
        workflow_recipient_run_id: 'def01234-a56b-78c9-d012-345678901bcd',
        workflow_run_id: '789e0123-f45a-67b8-c901-234567890abc',
      },
      status: 'sent',
      tenant: 'ingen_isla_nublar',
      updated_at: '1993-06-11T21:30:05Z',
      workflow: 'security-breach-alert',
    },
    required: [
      '__typename',
      'id',
      'channel_id',
      'status',
      'inserted_at',
      'updated_at',
      'recipient',
      'engagement_statuses',
      'source',
    ],
    title: 'Message',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Message',
    'x-validate': null,
  })
  .openapi('Message')

const ListMessagesResponseSchema = z
  .object({
    items: z
      .array(MessageSchema)
      .openapi({ description: 'A list of messages.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A paginated list of messages.',
    example: {
      items: [
        {
          __typename: 'Message',
          actors: ['mr_arnold', 'mr_muldoon'],
          archived_at: null,
          channel_id: '123e4567-e89b-12d3-a456-426614174000',
          clicked_at: null,
          data: {
            affected_areas: ['visitor_center', 'raptor_pen', 'trex_paddock'],
            attraction_id: 'paddock_rex_01',
            evacuation_protocol: 'active',
            message: 'Life finds a way',
            severity: 'critical',
            system_status: 'fences_failing',
          },
          engagement_statuses: ['read', 'seen'],
          id: '2w3YUpTTOxuDvZFji8OMsKrG176',
          inserted_at: '1993-06-11T21:15:00Z',
          interacted_at: null,
          link_clicked_at: null,
          metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
          read_at: '1993-06-11T21:30:00Z',
          recipient: 'dr_grant',
          recipient_snapshot: { email: 'user@example.com', name: 'John Doe' },
          scheduled_at: null,
          seen_at: '1993-06-11T21:29:45Z',
          source: {
            __typename: 'NotificationSource',
            branch_path: [
              {
                branch_id: '123e4567-e89b-12d3-a456-426614174000',
                step_ref: 'experiment',
                step_type: 'random_cohort',
              },
            ],
            categories: ['security', 'emergency'],
            key: 'security-breach-alert',
            step_ref: 'alert_step_1',
            version_id: '123e4567-e89b-12d3-a456-426614174000',
            workflow_recipient_run_id: 'def01234-a56b-78c9-d012-345678901bcd',
            workflow_run_id: '789e0123-f45a-67b8-c901-234567890abc',
          },
          status: 'sent',
          tenant: 'ingen_isla_nublar',
          updated_at: '1993-06-11T21:30:05Z',
          workflow: 'security-breach-alert',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['items', 'page_info'],
    title: 'ListMessagesResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListMessagesResponse',
    'x-validate': null,
  })
  .openapi('ListMessagesResponse')

const WorkflowRecipientRunTriggerSourceSchema = z
  .object({
    audience_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The key of the audience that triggered the workflow.',
        'x-struct': null,
        'x-validate': null,
      }),
    cancellation_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The cancellation key provided when the workflow was triggered via the API.',
        'x-struct': null,
        'x-validate': null,
      }),
    schedule_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ID of the schedule that triggered the workflow.',
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .enum([
        'api',
        'audience',
        'schedule',
        'broadcast',
        'workflow_step',
        'integration',
        'rehearsal',
      ])
      .openapi({
        description:
          'The type of trigger source. One of `api`, `audience`, `schedule`, `broadcast`, `workflow_step`, `integration`, or `rehearsal`.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Describes how the workflow was triggered.',
    example: { cancellation_key: 'comment-123-user-456', type: 'api' },
    required: ['type'],
    title: 'WorkflowRecipientRunTriggerSource',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.WorkflowRecipientRunTriggerSource',
    'x-validate': null,
  })
  .openapi('WorkflowRecipientRunTriggerSource')

const GuideArchivedRequestSchema = z
  .object({
    channel_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the channel.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_key: z
      .string()
      .openapi({ description: 'The key of the guide.', 'x-struct': null, 'x-validate': null }),
    guide_step_ref: z
      .string()
      .openapi({
        description: 'The step reference of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    is_final: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the guide is final.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tenant ID of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    unthrottled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the guide bypasses its guide group's throttle settings. When true, archiving the guide does not open a new throttle window.",
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to mark a guide as archived.',
    example: {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      is_final: false,
      tenant: 'ingen_isla_nublar',
      unthrottled: false,
    },
    required: ['channel_id', 'guide_id', 'guide_key', 'guide_step_ref'],
    title: 'GuideArchivedRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Requests.GuideArchivedRequest',
    'x-validate': null,
  })
  .openapi('GuideArchivedRequest')

const MessageEmailContentSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageEmailContent',
        'x-struct': null,
        'x-validate': null,
      }),
    bcc: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The BCC email addresses.', 'x-struct': null, 'x-validate': null }),
    cc: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The CC email addresses.', 'x-struct': null, 'x-validate': null }),
    from: z
      .string()
      .openapi({
        description: "The sender's email address.",
        'x-struct': null,
        'x-validate': null,
      }),
    html_body: z
      .string()
      .openapi({
        description: 'The HTML body of the email message.',
        'x-struct': null,
        'x-validate': null,
      }),
    reply_to: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reply-to email address.',
        'x-struct': null,
        'x-validate': null,
      }),
    subject_line: z
      .string()
      .openapi({
        description: 'The subject line of the email message.',
        'x-struct': null,
        'x-validate': null,
      }),
    text_body: z
      .string()
      .openapi({
        description: 'The text body of the email message.',
        'x-struct': null,
        'x-validate': null,
      }),
    to: z
      .string()
      .openapi({
        description: "The recipient's email address.",
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The content of an email message.',
    example: {
      __typename: 'MessageEmailContent',
      bcc: 'security@ingen.net',
      cc: 'operations@isla-nublar.com',
      from: 'welcome@isla-nublar.com',
      html_body:
        "<h1>Welcome to Isla Nublar</h1><p>Dear visitor,</p><p>We're excited to confirm your upcoming tour of our biological preserve. Your safety is our primary concern.</p><p>Please review the <a href='https://example.com/safety'>safety protocols</a> before arrival.</p><p><strong>Remember:</strong> All specimens are accounted for and contained.</p>",
      reply_to: 'visitor.center@isla-nublar.com',
      subject_line: 'Tour Confirmation: Isla Nublar Biological Preserve',
      text_body:
        "Welcome to Isla Nublar\n\nDear visitor,\n\nWe're excited to confirm your upcoming tour of our biological preserve. Your safety is our primary concern.\n\nPlease review the safety protocols before arrival: https://example.com/safety\n\nRemember: All specimens are accounted for and contained.",
      to: 'dr.grant@dig.site.mt',
    },
    required: ['__typename', 'html_body', 'text_body', 'subject_line', 'from', 'to'],
    title: 'MessageEmailContent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageEmailContent',
    'x-validate': null,
  })
  .openapi('MessageEmailContent')

const MessagePushContentSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessagePushContent',
        'x-struct': null,
        'x-validate': null,
      }),
    body: z
      .string()
      .openapi({
        description: 'The content body of the push notification.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Additional data payload for the push notification.',
        'x-struct': null,
        'x-validate': null,
      }),
    title: z
      .string()
      .openapi({
        description: 'The title of the push notification.',
        'x-struct': null,
        'x-validate': null,
      }),
    token: z
      .string()
      .openapi({
        description: 'The device token to send the push notification to.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Push channel data.',
    example: {
      __typename: 'MessagePushContent',
      body: 'Multiple assets out of containment in Sector 5. Take shelter immediately!',
      data: { asset_type: 'carnivore', severity: 'high' },
      title: 'URGENT: Asset Containment Alert',
      token: 'ingen-security-1234567890',
    },
    required: ['__typename', 'title', 'body', 'token'],
    title: 'MessagePushContent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessagePushContent',
    'x-validate': null,
  })
  .openapi('MessagePushContent')

const BlockSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description: 'The actual content of the block.',
        example: 'Hello, world!',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the block for identification.',
        example: 'greeting',
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .enum(['text', 'markdown'])
      .openapi({
        description: 'The type of block in a message in a chat (text or markdown).',
        example: 'text',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A block in a message in a chat.',
    example: { content: 'Hello, world!', name: 'greeting', type: 'text' },
    required: ['type', 'name', 'content'],
    title: 'Block',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageChatContent.Block',
    'x-validate': null,
  })
  .openapi('Block')

const MessageChatContentSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageChatContent',
        'x-struct': null,
        'x-validate': null,
      }),
    connection: z
      .looseObject({})
      .openapi({
        description: 'The channel data connection from the recipient to the underlying provider.',
        'x-struct': null,
        'x-validate': null,
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Additional metadata associated with the chat message.',
        example: { foo: 'bar' },
        'x-struct': null,
        'x-validate': null,
      }),
    template: z
      .object({
        blocks: z
          .array(BlockSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The blocks of the message in a chat.',
            'x-struct': null,
            'x-validate': null,
          }),
        json_content: z
          .looseObject({})
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The JSON content of the message.',
            'x-struct': null,
            'x-validate': null,
          }),
        summary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The summary of the chat message.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'The template structure for the chat message.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  })
  .openapi({
    description: 'The content of a chat message.',
    example: {
      __typename: 'MessageChatContent',
      connection: {
        access_token: null,
        channel_id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: 'dr_malcolm',
      },
      metadata: {
        incident_id: 'shutdown-june-1993',
        initiated_by: 'ray_arnold',
        priority: 'critical',
      },
      template: {
        blocks: [
          {
            content: '*SYSTEM ALERT*: Multiple security systems offline',
            name: 'header',
            type: 'markdown',
          },
          {
            content:
              'The following systems are currently non-operational:\n- Main power grid\n- Perimeter fencing (sectors 3-12)\n- Automated tour vehicles\n- Phone systems',
            name: 'details',
            type: 'text',
          },
          {
            content: 'Initiating full system shutdown and reboot sequence. Hold onto your butts.',
            name: 'action',
            type: 'text',
          },
        ],
        json_content: null,
        summary: 'System Failure Alert',
      },
    },
    required: ['__typename', 'template', 'connection'],
    title: 'MessageChatContent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageChatContent',
    'x-validate': null,
  })
  .openapi('MessageChatContent')

const MessageInAppFeedContentSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageInAppFeedContent',
        'x-struct': null,
        'x-validate': null,
      }),
    blocks: z
      .array(
        z
          .xor([MessageInAppFeedContentBlockSchema, MessageInAppFeedButtonSetBlockSchema])
          .openapi({
            description: 'A block in a message in an app feed.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'The blocks of the message in an app feed.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The content of an in-app feed message.',
    example: {
      __typename: 'MessageInAppFeedContent',
      blocks: [
        {
          content: '## Welcome to Isla Nublar',
          name: 'header',
          rendered: '<h2>Welcome to Isla Nublar</h2>',
          type: 'markdown',
        },
        {
          content:
            'Your tour will begin shortly. During your visit, please:\n\n* Stay in the vehicles at all times\n* Do not feed or provoke the animals\n* Follow all staff instructions',
          name: 'body',
          rendered:
            '<p>Your tour will begin shortly. During your visit, please:</p><ul><li>Stay in the vehicles at all times</li><li>Do not feed or provoke the animals</li><li>Follow all staff instructions</li></ul>',
          type: 'markdown',
        },
        {
          buttons: [
            { action: 'https://example.com/park-map', label: 'View Map', name: 'map' },
            { action: 'https://example.com/safety', label: 'Safety Protocols', name: 'safety' },
          ],
          name: 'actions',
          type: 'button_set',
        },
      ],
    },
    required: ['__typename', 'blocks'],
    title: 'MessageInAppFeedContent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageInAppFeedContent',
    'x-validate': null,
  })
  .openapi('MessageInAppFeedContent')

const MessageContentsSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageContent',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .xor([
        MessageEmailContentSchema,
        MessageSmsContentSchema,
        MessagePushContentSchema,
        MessageChatContentSchema,
        MessageInAppFeedContentSchema,
      ])
      .openapi({
        description: 'Content data specific to the channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the message content was created.',
        example: '2021-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    message_id: z
      .string()
      .openapi({
        description: 'The unique identifier for the message content.',
        example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The content of a message.',
    example: {
      __typename: 'MessageContent',
      data: {
        __typename: 'MessageSmsContent',
        body: 'URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.',
        to: '+15553982647',
      },
      inserted_at: '1993-06-11T20:30:00Z',
      message_id: '2w3YUpTTOxuDvZFji8OMsKrG176',
    },
    required: ['__typename', 'message_id', 'data', 'inserted_at'],
    title: 'MessageContents',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageContents',
    'x-validate': null,
  })
  .openapi('MessageContents')

const BatchGetMessageContentsResponseSchema = z
  .array(MessageContentsSchema)
  .openapi({
    description: 'A list of `MessageContents`',
    example: [
      {
        __typename: 'MessageContent',
        data: {
          __typename: 'MessageSmsContent',
          body: 'URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.',
          to: '+15553982647',
        },
        inserted_at: '1993-06-11T20:30:00Z',
        message_id: '2w3YUpTTOxuDvZFji8OMsKrG176',
      },
    ],
    title: 'BatchGetMessageContentsResponse',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('BatchGetMessageContentsResponse')

const ListSchedulesResponseSchema = z
  .object({
    entries: z
      .array(ScheduleSchema)
      .openapi({ description: 'A list of schedules.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A response containing a list of schedules.',
    example: {
      entries: [
        {
          __typename: 'Schedule',
          actor: null,
          data: null,
          id: '123e4567-e89b-12d3-a456-426614174000',
          inserted_at: '2021-01-01T00:00:00Z',
          last_occurrence_at: null,
          next_occurrence_at: null,
          recipient: {
            __typename: 'User',
            avatar: null,
            created_at: null,
            email: 'jane@ingen.net',
            id: 'jane',
            name: 'Jane Doe',
            phone_number: null,
            timezone: null,
            updated_at: '2024-05-22T12:00:00Z',
          },
          repeats: [
            {
              __typename: 'ScheduleRepeat',
              day_of_month: null,
              days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
              frequency: 'daily',
              hours: null,
              interval: 1,
              minutes: null,
            },
          ],
          tenant: null,
          updated_at: '2021-01-01T00:00:00Z',
          workflow: 'workflow_123',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['entries', 'page_info'],
    title: 'ListSchedulesResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListSchedulesResponse',
    'x-validate': null,
  })
  .openapi('ListSchedulesResponse')

const PreferenceCenterBrandingConfigSchema = z
  .object({
    icon_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The icon URL for the preference center. Must point to a valid image with an image MIME type.',
        example: 'https://example.com/icon.png',
        'x-struct': null,
        'x-validate': null,
      }),
    logo_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The logo URL for the preference center. Must point to a valid image with an image MIME type.',
        example: 'https://example.com/logo.png',
        'x-struct': null,
        'x-validate': null,
      }),
    primary_color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The primary color for the preference center, provided as a hex value.',
        example: '#0EA5E9',
        'x-struct': null,
        'x-validate': null,
      }),
    primary_color_contrast: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary color contrast for the preference center, provided as a hex value.',
        example: '#0F172A',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'The branding for the preference center, sourced from public environment variables.',
    example: {
      icon_url: 'https://example.com/icon.png',
      logo_url: 'https://example.com/logo.png',
      primary_color: '#0EA5E9',
      primary_color_contrast: '#0F172A',
    },
    title: 'PreferenceCenterBrandingConfig',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceCenterBrandingConfig',
    'x-validate': null,
    required: [],
  })
  .openapi('PreferenceCenterBrandingConfig')

const PreferenceCenterConfigWithMetadataSchema = z
  .object({
    account_name: z
      .string()
      .nullable()
      .openapi({
        description: 'The name of the account that the preference center is associated with.',
        example: 'Acme Inc.',
        'x-struct': null,
        'x-validate': null,
      }),
    branding: PreferenceCenterBrandingConfigSchema.and(
      z
        .object({
          dark: PreferenceCenterBrandingConfigSchema.exactOptional().openapi({
            description:
              'Optional branding overrides to apply when the preference center is rendered in dark mode. Falls back to the base branding for any unset keys.',
            'x-struct': null,
            'x-validate': null,
          }),
        })
        .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
    ).openapi({
      description:
        'The branding for the preference center, sourced from public environment variables.',
      'x-struct': null,
      'x-validate': null,
    }),
    config: PreferenceCenterConfigDataSchema,
    enabled: z
      .boolean()
      .openapi({
        description: 'Whether the preference center is enabled for this environment.',
        example: true,
        'x-struct': null,
        'x-validate': null,
      }),
    knock_branding_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether Knock branding is required in the preference center.',
        example: false,
        'x-struct': null,
        'x-validate': null,
      }),
    user_email: z
      .string()
      .nullable()
      .openapi({
        description:
          'A display label for the user that the preference center is associated with, resolved as email, then user id.',
        example: 'user@example.com',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'The preference center configuration for an environment. Controls whether the preference center is enabled and defines the rows displayed in the UI.',
    example: {
      account_name: 'Acme Inc.',
      branding: {
        dark: {
          icon_url: 'https://example.com/icon-dark.png',
          logo_url: 'https://example.com/logo-dark.png',
          primary_color: '#C02727',
          primary_color_contrast: '#11E2EC',
        },
        icon_url: 'https://example.com/icon.png',
        logo_url: 'https://example.com/logo.png',
        primary_color: '#0EA5E9',
        primary_color_contrast: '#0F172A',
      },
      config: {
        body: 'Choose which notifications you want to receive.',
        rows: [
          {
            channel_types: [],
            description: 'Opt out of receiving comment and reply notifications',
            identifier: 'comments',
            name: 'Comments and replies',
            type: 'category',
          },
          {
            channel_types: ['email', 'sms'],
            description: 'Receive notifications from the following channel types',
            name: 'Channel Types',
            type: 'channel_types',
          },
        ],
        show_account_name: true,
        title: 'Notification preferences',
      },
      enabled: true,
      knock_branding_required: false,
      user_email: 'user@example.com',
    },
    required: ['enabled', 'config', 'branding', 'account_name', 'user_email'],
    title: 'PreferenceCenterConfigWithMetadata',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PreferenceCenterConfigWithMetadata',
    'x-validate': null,
  })
  .openapi('PreferenceCenterConfigWithMetadata')

const WorkflowRecipientRunEventSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'WorkflowRecipientRunEvent',
        'x-struct': null,
        'x-validate': null,
      }),
    attempt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The attempt number of the workflow recipient run event. Increments for each retry.',
        example: 1,
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Event-specific data associated with the event.',
        'x-struct': null,
        'x-validate': null,
      }),
    event: z
      .string()
      .openapi({
        description: 'The type of event that occurred.',
        example: 'message_enqueued',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the event.',
        example: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        example: '2025-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    status: z
      .enum(['ok', 'error'])
      .openapi({
        description: 'Whether the event represents a successful or error state.',
        example: 'ok',
        'x-struct': null,
        'x-validate': null,
      }),
    step_ref: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reference of the workflow step associated with this event.',
        example: 'email_step_1',
        'x-struct': null,
        'x-validate': null,
      }),
    step_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of workflow step associated with this event.',
        example: 'channel',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'An event that occurred during a workflow recipient run.',
    example: {
      __typename: 'WorkflowRecipientRunEvent',
      attempt: 1,
      data: { channel_type: 'email', message_id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe' },
      event: 'message_enqueued',
      id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
      inserted_at: '2025-01-01T00:00:00Z',
      status: 'ok',
      step_ref: 'email_step_1',
      step_type: 'channel',
    },
    required: ['__typename', 'id', 'event', 'status', 'inserted_at'],
    title: 'WorkflowRecipientRunEvent',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.WorkflowRecipientRunEvent',
    'x-validate': null,
  })
  .openapi('WorkflowRecipientRunEvent')

const DeleteSchedulesRequestSchema = z
  .object({
    schedule_ids: z
      .array(
        z
          .string()
          .openapi({
            description: 'Unique identifier for the schedule.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'A list of schedule IDs.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to delete a schedule.',
    example: { schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'] },
    required: ['schedule_ids'],
    title: 'DeleteSchedulesRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.DeleteSchedulesRequest',
    'x-validate': null,
  })
  .openapi('DeleteSchedulesRequest')

const SetObjectRequestSchema: z.ZodType<SetObjectRequestType> = z
  .looseObject({
    channel_data: InlineChannelDataRequestSchema.exactOptional(),
    locale: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The locale of the object. Used for [message localization](/concepts/translations).',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the object.',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: InlinePreferenceSetRequestSchema.exactOptional(),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A set of parameters to set an object with. Does not include the object id or collection.',
    example: {
      channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
      description: 'My product description',
      locale: 'en-US',
      name: 'My product',
      preferences: {
        default: {
          channel_types: { email: true },
          workflows: { 'dinosaurs-loose': { channel_types: { email: true } } },
        },
      },
      price: 100,
      timezone: 'America/New_York',
    },
    title: 'SetObjectRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SetObjectRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('SetObjectRequest')

const BulkUpdateMessagesForChannelRequestSchema = z
  .object({
    archived: z
      .enum(['exclude', 'include', 'only'])
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given archived status.',
        'x-struct': null,
        'x-validate': null,
      }),
    delivery_status: z
      .enum([
        'queued',
        'sent',
        'delivered',
        'delivery_attempted',
        'undelivered',
        'not_sent',
        'bounced',
      ])
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given delivery status.',
        'x-struct': null,
        'x-validate': null,
      }),
    engagement_status: z
      .enum([
        'seen',
        'unseen',
        'read',
        'unread',
        'archived',
        'unarchived',
        'link_clicked',
        'interacted',
      ])
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given engagement status.',
        'x-struct': null,
        'x-validate': null,
      }),
    has_tenant: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages that have a tenant or not.',
        'x-struct': null,
        'x-validate': null,
      }),
    newer_than: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages inserted after the given date.',
        'x-struct': null,
        'x-validate': null,
      }),
    older_than: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages inserted before the given date.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient_ids: z
      .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given recipient IDs.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenants: z
      .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given tenant IDs.',
        'x-struct': null,
        'x-validate': null,
      }),
    trigger_data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.',
        'x-struct': null,
        'x-validate': null,
      }),
    workflows: z
      .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
      .exactOptional()
      .openapi({
        description: 'Limits the results to messages with the given workflow keys.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      "Updates message statuses in a specified channel. Use the `channel_id` parameter to target the channel and the `status` parameter to define what the status should be changed to (e.g. `archive`, `unarchive`). Apply to all messages or use filters to target a subset. For in-app channels, messages can be updated indefinitely via this operation. For all other channel types, messages outside the account's retention window will not be updated as part of this operation.",
    example: {
      archived: 'include',
      delivery_status: 'delivered',
      engagement_status: 'seen',
      has_tenant: true,
      newer_than: '2024-01-01T00:00:00Z',
      older_than: '2024-01-01T00:00:00Z',
      recipient_ids: ['recipient1', 'recipient2'],
      tenants: ['tenant1', 'tenant2'],
      trigger_data: '{"key":"value"}',
      workflows: ['workflow1', 'workflow2'],
    },
    title: 'BulkUpdateMessagesForChannelRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkUpdateMessagesForChannelRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('BulkUpdateMessagesForChannelRequest')

const GuideActionResponseSchema = z
  .object({
    status: z
      .string()
      .openapi({
        description: "The status of a guide's action.",
        example: 'ok',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A response for a guide action.',
    example: { status: 'ok' },
    required: ['status'],
    title: 'GuideActionResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Responses.GuideActionResponse',
    'x-validate': null,
  })
  .openapi('GuideActionResponse')

const BulkDeleteUsersRequestSchema = z
  .object({
    user_ids: z
      .array(
        z
          .string()
          .openapi({
            description: 'The unique identifier of the user.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'A list of user IDs.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to delete users in bulk.',
    example: { user_ids: ['user_1', 'user_2'] },
    required: ['user_ids'],
    title: 'BulkDeleteUsersRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkDeleteUsersRequest',
    'x-validate': null,
  })
  .openapi('BulkDeleteUsersRequest')

const TriggerWorkflowRequestSchema: z.ZodType<TriggerWorkflowRequestType> = z
  .object({
    actor: z
      .union([
        RecipientRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.',
        'x-struct': null,
        'x-validate': null,
      }),
    cancellation_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientRequestSchema)
      .openapi({
        description:
          'The recipients to trigger the workflow for. Can inline identify users, objects, or use a list of user IDs. Limited to 1,000 recipients.',
        'x-struct': null,
        'x-validate': null,
      }),
    settings: z
      .object({
        sandbox_mode: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'When set to true, overrides the sandbox mode for all channels in this workflow run, messages are not delivered to the underlying providers. If false or not set, the workflow delivers messages normally.',
            'x-struct': null,
            'x-validate': null,
          }),
        skip_delay: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'When set to true, skips all delay steps in the workflow for this trigger request. If false or not set, delay steps execute normally.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional settings that control how this workflow trigger is executed.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
    tenant: z
      .union([
        InlineTenantRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to trigger a notification workflow.',
    example: {
      actor: 'mr_dna',
      cancellation_key: 'isla_nublar_incident_1993',
      data: {
        affected_areas: ['visitor_center', 'raptor_pen', 'trex_paddock'],
        attraction_id: 'paddock_rex_01',
        evacuation_protocol: 'active',
        message: 'Life finds a way',
        severity: 'critical',
        system_status: 'fences_failing',
      },
      recipients: ['dr_grant', 'dr_sattler', 'dr_malcolm'],
      settings: { sandbox_mode: true, skip_delay: true },
      tenant: 'ingen_isla_nublar',
    },
    required: ['recipients'],
    title: 'TriggerWorkflowRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.TriggerWorkflowRequest',
    'x-validate': null,
  })
  .openapi('TriggerWorkflowRequest')

const BatchListMessagesResponseSchema = z
  .array(
    MessageSchema.openapi({
      example: {
        __typename: 'Message',
        actors: ['user_123'],
        archived_at: '2025-01-01T00:04:00Z',
        channel_id: '123e4567-e89b-12d3-a456-426614174000',
        clicked_at: null,
        data: { foo: 'bar' },
        engagement_statuses: ['seen', 'archived'],
        id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
        inserted_at: '2021-01-01T00:00:00Z',
        interacted_at: null,
        link_clicked_at: null,
        metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
        read_at: null,
        recipient: 'user_123',
        scheduled_at: null,
        seen_at: '2025-01-01T00:01:00Z',
        source: {
          __typename: 'NotificationSource',
          categories: ['collaboration'],
          key: 'comment-created',
          version_id: '123e4567-e89b-12d3-a456-426614174000',
        },
        status: 'sent',
        tenant: 'tenant_123',
        updated_at: '2021-01-01T00:00:00Z',
        workflow: 'comment-created',
      },
      'x-struct': null,
      'x-validate': null,
    }),
  )
  .openapi({
    description: 'The list of messages that were updated.',
    example: [
      {
        __typename: 'Message',
        actors: ['user_123'],
        archived_at: '2025-01-01T00:04:00Z',
        channel_id: '123e4567-e89b-12d3-a456-426614174000',
        clicked_at: null,
        data: { foo: 'bar' },
        engagement_statuses: ['seen', 'archived'],
        id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
        inserted_at: '2021-01-01T00:00:00Z',
        interacted_at: null,
        link_clicked_at: null,
        metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
        read_at: null,
        recipient: 'user_123',
        scheduled_at: null,
        seen_at: '2025-01-01T00:01:00Z',
        source: {
          __typename: 'NotificationSource',
          categories: ['collaboration'],
          key: 'comment-created',
          version_id: '123e4567-e89b-12d3-a456-426614174000',
        },
        status: 'sent',
        tenant: 'tenant_123',
        updated_at: '2021-01-01T00:00:00Z',
        workflow: 'comment-created',
      },
    ],
    title: 'BatchListMessagesResponse',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('BatchListMessagesResponse')

const RemoveAudienceMembersRequestSchema: z.ZodType<RemoveAudienceMembersRequestType> = z
  .object({
    members: z
      .array(AudienceMemberRequestSchema)
      .openapi({
        description:
          'A list of audience members to remove. You can remove up to 1,000 members per request.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to remove a list of audience members.',
    example: {
      members: [
        {
          tenant: 'ingen_isla_nublar',
          user: { email: 'ellie@ingen.net', id: 'dr_sattler', name: 'Dr. Ellie Sattler' },
        },
      ],
    },
    required: ['members'],
    title: 'RemoveAudienceMembersRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.RemoveAudienceMembersRequest',
    'x-validate': null,
  })
  .openapi('RemoveAudienceMembersRequest')

const UserInAppFeedSettingsResponseSchema = z
  .object({
    features: z
      .object({
        branding_required: z
          .boolean()
          .openapi({
            description: "Whether branding is required for the user's feed.",
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: "Features configuration for the user's feed.",
        required: ['branding_required'],
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: "The response for the user's feed settings.",
    example: { features: { branding_required: true } },
    required: ['features'],
    title: 'UserInAppFeedSettingsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.UserInAppFeedSettingsResponse',
    'x-validate': null,
  })
  .openapi('UserInAppFeedSettingsResponse')

const SetTenantRequestSchema: z.ZodType<SetTenantRequestType> = z
  .looseObject({
    channel_data: z
      .xor([
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
        InlineChannelDataRequestSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The channel data for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional name for the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
    settings: z
      .object({
        branding: z
          .object({
            icon_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The icon URL for the tenant. Must point to a valid image with an image MIME type.',
                'x-struct': null,
                'x-validate': null,
              }),
            logo_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The logo URL for the tenant. Must point to a valid image with an image MIME type.',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color for the tenant, provided as a hex value.',
                'x-struct': null,
                'x-validate': null,
              }),
            primary_color_contrast: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The primary color contrast for the tenant, provided as a hex value.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The branding for the tenant.',
            'x-struct': null,
            'x-validate': null,
            required: [],
          }),
        preference_set: z
          .xor([
            z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
            PreferenceSetRequestSchema,
          ])
          .exactOptional()
          .openapi({
            description:
              'The preference set for the tenant. Used to override the default preference set.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The settings for the tenant. Includes branding and preference set.',
        'x-struct': null,
        'x-validate': null,
        required: [],
      }),
  })
  .openapi({
    description:
      'A tenant to be set in the system. You can supply any additional properties on the tenant object.',
    example: {
      name: 'Jurassic Park',
      settings: {
        branding: {
          icon_url: 'https://example.com/trex_silhouette_icon.png',
          logo_url: 'https://example.com/amber_fossil_logo.png',
          primary_color: '#DF1A22',
          primary_color_contrast: '#FFDE00',
        },
      },
    },
    title: 'SetTenantRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SetTenantRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('SetTenantRequest')

const ObjectReferenceSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The collection the recipient object belongs to.',
        example: 'projects',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier for the recipient object.',
        example: 'project_123',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A reference to a recipient object.',
    example: { collection: 'projects', id: 'project_123' },
    title: 'ObjectReference',
    'x-struct': null,
    'x-validate': null,
    required: [],
  })
  .openapi('ObjectReference')

const GuideInteractedRequestSchema = z
  .object({
    channel_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the channel.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_key: z
      .string()
      .openapi({ description: 'The key of the guide.', 'x-struct': null, 'x-validate': null }),
    guide_step_ref: z
      .string()
      .openapi({
        description: 'The step reference of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Metadata about the interaction.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tenant ID of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to mark a guide as interacted with.',
    example: {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      metadata: { cta: 'Reserve Spot', theme: 'amber', type: 'banner' },
      tenant: 'ingen_isla_nublar',
    },
    required: ['channel_id', 'guide_id', 'guide_key', 'guide_step_ref'],
    title: 'GuideInteractedRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Requests.GuideInteractedRequest',
    'x-validate': null,
  })
  .openapi('GuideInteractedRequest')

const AuthenticationErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description: 'The error code.',
        example: 'authorization',
        'x-struct': null,
        'x-validate': null,
      }),
    message: z
      .string()
      .openapi({
        description: 'The error message.',
        example: 'Access token not set.',
        'x-struct': null,
        'x-validate': null,
      }),
    status: z
      .int()
      .openapi({
        description: 'The HTTP status code.',
        example: 403,
        'x-struct': null,
        'x-validate': null,
      }),
    type: z
      .string()
      .openapi({
        description: 'The error type.',
        example: 'authentication_error',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Authentication error response',
    example: {
      code: 'authorization',
      message: 'Access token not set.',
      status: 403,
      type: 'authentication_error',
    },
    required: ['code', 'message', 'status', 'type'],
    title: 'AuthenticationError',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('AuthenticationError')

const NotifyResponseSchema = z
  .object({
    result_id: z
      .string()
      .openapi({
        description:
          'This value allows you to track individual messages associated with this trigger request.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The response from triggering a workflow.',
    example: { result_id: 'wf_1234567890abcdef' },
    required: ['result_id'],
    title: 'Notify Response',
    'x-struct': 'Elixir.SwitchboardWeb.Specs.Notify.Responses.NotifyResponse',
    'x-validate': null,
  })
  .openapi('NotifyResponse')

const BulkCreateSchedulesRequestSchema: z.ZodType<BulkCreateSchedulesRequestType> = z
  .object({
    schedules: z
      .array(
        z
          .object({
            actor: z
              .xor([
                RecipientRequestSchema,
                z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
              ])
              .exactOptional()
              .openapi({
                description:
                  'A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.',
                'x-struct': null,
                'x-validate': null,
              }),
            data: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
                'x-struct': null,
                'x-validate': null,
              }),
            ending_at: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The ending date and time for the schedule.',
                'x-struct': null,
                'x-validate': null,
              }),
            recipient: RecipientRequestSchema.exactOptional(),
            repeats: z
              .array(ScheduleRepeatRuleSchema)
              .exactOptional()
              .openapi({
                description: 'The repeat rule for the schedule.',
                'x-struct': null,
                'x-validate': null,
              }),
            scheduled_at: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The starting date and time for the schedule.',
                'x-struct': null,
                'x-validate': null,
              }),
            tenant: z
              .union([
                InlineTenantRequestSchema,
                z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
              ])
              .exactOptional()
              .openapi({
                description:
                  'The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.',
                'x-struct': null,
                'x-validate': null,
              }),
            workflow: z
              .string()
              .openapi({
                description: 'The key of the workflow.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            description: 'A schedule represents a recurring workflow execution.',
            required: ['workflow'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'A list of schedules.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description:
      'A request to bulk create schedules. Accepts a list of schedules to create. Each schedule must have a single recipient. The recipients do not have to be unique.',
    example: {
      schedules: [
        {
          data: { key: 'value' },
          ending_at: null,
          recipient: 'dnedry',
          repeats: [
            {
              __typename: 'ScheduleRepeat',
              day_of_month: null,
              days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
              frequency: 'daily',
              hours: null,
              interval: 1,
              minutes: null,
            },
          ],
          scheduled_at: null,
          tenant: 'acme_corp',
          workflow: 'comment-created',
        },
        {
          data: { key: 'value' },
          ending_at: null,
          recipient: 'esattler',
          repeats: [
            {
              __typename: 'ScheduleRepeat',
              day_of_month: null,
              days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
              frequency: 'daily',
              hours: null,
              interval: 1,
              minutes: null,
            },
          ],
          scheduled_at: null,
          tenant: 'acme_corp',
          workflow: 'comment-created',
        },
      ],
    },
    required: ['schedules'],
    title: 'BulkCreateSchedulesRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkCreateSchedulesRequest',
    'x-validate': null,
  })
  .openapi('BulkCreateSchedulesRequest')

const SubscriptionsResponseSchema = z
  .array(SubscriptionSchema)
  .openapi({
    description: 'A response containing a list of subscriptions.',
    example: [
      {
        __typename: 'Subscription',
        inserted_at: '2021-01-01T00:00:00Z',
        object: {
          __typename: 'Object',
          collection: 'assets',
          created_at: null,
          id: 'specimen_25',
          properties: {
            classification: 'Theropod',
            config: { biz: 'baz', foo: 'bar' },
            name: 'Velociraptor',
            status: 'contained',
          },
          updated_at: '2024-05-22T12:00:00Z',
        },
        recipient: {
          __typename: 'User',
          avatar: null,
          created_at: null,
          email: 'jane@ingen.net',
          id: 'jane',
          name: 'Jane Doe',
          phone_number: null,
          timezone: null,
          updated_at: '2024-05-22T12:00:00Z',
        },
        updated_at: '2021-01-01T00:00:00Z',
      },
    ],
    title: 'SubscriptionsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SubscriptionsResponse',
    'x-validate': null,
  })
  .openapi('SubscriptionsResponse')

const ListObjectPreferenceSetsResponseSchema: z.ZodType<ListObjectPreferenceSetsResponseType> = z
  .array(PreferenceSetSchema)
  .openapi({
    description: 'A list of preference sets for the object',
    example: [
      {
        categories: { marketing: false, transactional: { channel_types: { email: false } } },
        channel_types: {
          email: true,
          push: false,
          sms: {
            conditions: [
              { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
            ],
          },
        },
        commercial_subscribed: true,
        id: 'default',
        workflows: null,
      },
    ],
    title: 'ListObjectPreferenceSetsResponse',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('ListObjectPreferenceSetsResponse')

const MessageDeliveryLogResponseSchema = z
  .object({
    body: z
      .xor([
        z.string().openapi({ 'x-struct': null, 'x-validate': null }),
        z.looseObject({}).openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'The body content that was received with the response.',
        'x-struct': null,
        'x-validate': null,
      }),
    headers: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The headers that were received with the response.',
        'x-struct': null,
        'x-validate': null,
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The HTTP status code of the response.',
        example: 200,
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A message delivery log response.',
    example: {
      body: { success: true },
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    },
    title: 'MessageDeliveryLogResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageDeliveryLog.Response',
    'x-validate': null,
    required: [],
  })
  .openapi('MessageDeliveryLogResponse')

const ChannelsForMsTeamsProviderResponseSchema = z
  .object({
    ms_teams_channels: z
      .array(
        z
          .object({
            createdDateTime: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Microsoft Teams channel created date and time.',
                'x-struct': null,
                'x-validate': null,
              }),
            description: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Microsoft Teams channel description.',
                'x-struct': null,
                'x-validate': null,
              }),
            displayName: z
              .string()
              .openapi({
                description: 'Microsoft Teams channel name.',
                'x-struct': null,
                'x-validate': null,
              }),
            id: z
              .string()
              .openapi({
                description: 'Microsoft Teams channel ID.',
                'x-struct': null,
                'x-validate': null,
              }),
            isArchived: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Whether the Microsoft Teams channel is archived.',
                'x-struct': null,
                'x-validate': null,
              }),
            membershipType: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Microsoft Teams channel membership type.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['id', 'displayName'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description: 'List of Microsoft Teams channels.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'The response from a Microsoft Teams provider request, containing a list of channels.',
    example: { ms_teams_channels: [{ displayName: 'General', id: 'channel-id-1' }] },
    required: ['ms_teams_channels'],
    title: 'ChannelsForMsTeamsProviderResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ChannelsForMsTeamsProviderResponse',
    'x-validate': null,
  })
  .openapi('ChannelsForMsTeamsProviderResponse')

const MessageDeliveryLogRequestSchema = z
  .object({
    body: z
      .xor([
        z.string().openapi({ 'x-struct': null, 'x-validate': null }),
        z.looseObject({}).openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'The body content that was sent with the request.',
        'x-struct': null,
        'x-validate': null,
      }),
    headers: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The headers that were sent with the request.',
        'x-struct': null,
        'x-validate': null,
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The host to which the request was sent.',
        example: 'localhost',
        'x-struct': null,
        'x-validate': null,
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({
        description: 'The HTTP method used for the request.',
        example: 'GET',
        'x-struct': null,
        'x-validate': null,
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The path of the URL that was requested.',
        example: '/',
        'x-struct': null,
        'x-validate': null,
      }),
    query: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The query string of the URL that was requested.',
        example: '?foo=bar',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A message delivery log request.',
    example: {
      body: { html_content: '<html></html>' },
      headers: { 'Content-Type': 'application/json' },
      host: 'localhost',
      method: 'GET',
      path: '/',
      query: '?foo=bar',
    },
    title: 'MessageDeliveryLogRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageDeliveryLog.Request',
    'x-validate': null,
    required: [],
  })
  .openapi('MessageDeliveryLogRequest')

const MessageDeliveryLogSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'MessageDeliveryLog',
        'x-struct': null,
        'x-validate': null,
      }),
    environment_id: z
      .uuid()
      .openapi({
        description: 'The ID of the environment in which the message delivery occurred.',
        example: '123e4567-e89b-12d3-a456-426614174000',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the message delivery log.',
        example: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z
      .string()
      .openapi({
        description: 'Timestamp when the message delivery log was created.',
        example: '2021-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    request: MessageDeliveryLogRequestSchema,
    response: MessageDeliveryLogResponseSchema,
    service_name: z
      .string()
      .openapi({
        description: 'The name of the service that processed the delivery.',
        example: 'Postmark',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A message delivery log contains a `request` from Knock to a downstream provider and the `response` that was returned.',
    example: {
      __typename: 'MessageDeliveryLog',
      environment_id: '123e4567-e89b-12d3-a456-426614174000',
      id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
      inserted_at: '2021-01-01T00:00:00Z',
      request: {
        body: { html_content: '<html></html>' },
        headers: { 'Content-Type': 'application/json' },
        host: 'localhost',
        method: 'GET',
        path: '/',
        query: '?foo=bar',
      },
      response: {
        body: { success: true },
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      },
      service_name: 'Postmark',
    },
    required: [
      '__typename',
      'id',
      'environment_id',
      'request',
      'response',
      'service_name',
      'inserted_at',
    ],
    title: 'MessageDeliveryLog',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MessageDeliveryLog',
    'x-validate': null,
  })
  .openapi('MessageDeliveryLog')

const ListMessageDeliveryLogsResponseSchema = z
  .object({
    items: z
      .array(MessageDeliveryLogSchema)
      .openapi({
        description:
          'Returns a paginated list of delivery logs from the downstream provider for the specified message. For Knock in-app channels, the delivery logs will always be an empty list.',
        'x-struct': null,
        'x-validate': null,
      }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A message delivery log response.',
    example: {
      items: [
        {
          __typename: 'MessageDeliveryLog',
          environment_id: '123e4567-e89b-12d3-a456-426614174000',
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2021-01-01T00:00:00Z',
          request: {
            body: { html_content: '<html></html>' },
            headers: { 'Content-Type': 'application/json' },
            host: 'localhost',
            method: 'GET',
            path: '/',
            query: '?foo=bar',
          },
          response: {
            body: { success: true },
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          },
          service_name: 'Postmark',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['items', 'page_info'],
    title: 'ListMessageDeliveryLogsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListMessageDeliveryLogsResponse',
    'x-validate': null,
  })
  .openapi('ListMessageDeliveryLogsResponse')

const PushChannelDataFullSchema = z
  .object({
    devices: z
      .array(
        z
          .object({
            locale: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The locale of the object. Used for [message localization](/concepts/translations).',
                'x-struct': null,
                'x-validate': null,
              }),
            timezone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
                'x-struct': null,
                'x-validate': null,
              }),
            token: z
              .string()
              .openapi({
                description: 'The device token to send the push notification to.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['token'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description:
          'A list of devices. Each device contains a token, and optionally a locale and timezone.',
        'x-struct': null,
        'x-validate': null,
      }),
    tokens: z
      .array(
        z
          .string()
          .openapi({
            description: 'The device token to send the push notification to.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A list of push channel tokens.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Push channel data.',
    example: {
      devices: [{ locale: 'en-US', timezone: null, token: 'push_token_1' }],
      tokens: ['push_token_1', 'push_token_2'],
    },
    required: ['tokens', 'devices'],
    title: 'PushChannelDataFull',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.PushChannelDataFull',
    'x-validate': null,
  })
  .openapi('PushChannelDataFull')

const NotifyRequestSchema = z
  .object({
    actor: RecipientReferenceSchema,
    cancellation_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The key of the workflow to trigger.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientReferenceSchema)
      .openapi({ description: 'A list of recipients.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to trigger a notification workflow.',
    example: {
      actor: 'user_123',
      cancellation_key: 'comment_123',
      data: {
        comment: 'Great work on this feature!',
        url: 'https://example.com/projects/123/comments/456',
      },
      name: 'new-comment',
      recipients: ['user_456', { collection: 'projects', id: 'project_789' }],
    },
    required: ['name', 'actor', 'recipients'],
    title: 'Notify Request',
    'x-struct': 'Elixir.SwitchboardWeb.Specs.Notify.Requests.TriggerRequest',
    'x-validate': null,
  })
  .openapi('NotifyRequest')

const MsTeamsAuthCheckResponseSchema = z
  .object({
    connection: z
      .object({
        ms_teams_tenant_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The Microsoft Teams tenant ID for the connected tenant.',
            'x-struct': null,
            'x-validate': null,
          }),
        ok: z
          .boolean()
          .openapi({
            description: 'Whether the Microsoft Teams connection is valid.',
            'x-struct': null,
            'x-validate': null,
          }),
        reason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The reason for the Microsoft Teams connection if it is not valid.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'A Microsoft Teams connection object.',
        required: ['ok'],
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The response from a Microsoft Teams auth check request.',
    example: { connection: { ms_teams_tenant_id: 'a Microsoft Teams tenant ID', ok: true } },
    required: ['connection'],
    title: 'MsTeamsAuthCheckResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.MsTeamsAuthCheckResponse',
    'x-validate': null,
  })
  .openapi('MsTeamsAuthCheckResponse')

const SlackAuthCheckResponseSchema = z
  .object({
    connection: z
      .object({
        ok: z
          .boolean()
          .openapi({
            description: 'Whether the Slack connection is valid.',
            'x-struct': null,
            'x-validate': null,
          }),
        reason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The reason for the Slack connection if it is not valid.',
            'x-struct': null,
            'x-validate': null,
          }),
      })
      .openapi({
        description: 'A Slack connection object.',
        required: ['ok'],
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The response from a Slack auth check request.',
    example: { connection: { ok: true } },
    required: ['connection'],
    title: 'SlackAuthCheckResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SlackAuthCheckResponse',
    'x-validate': null,
  })
  .openapi('SlackAuthCheckResponse')

const IdentifyUserRequestSchema: z.ZodType<IdentifyUserRequestType> = z
  .looseObject({
    avatar: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A URL for the avatar of the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_data: InlineChannelDataRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "Channel-specific information that's needed to deliver a notification to an end provider.",
        'x-struct': null,
        'x-validate': null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The creation date of the user from your system.',
        'x-struct': null,
        'x-validate': null,
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The primary email address for the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    locale: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The locale of the user. Used for [message localization](/concepts/translations).',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name of the user.', 'x-struct': null, 'x-validate': null }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).',
        'x-struct': null,
        'x-validate': null,
      }),
    preferences: InlinePreferenceSetRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'A set of preferences for the user.',
        'x-struct': null,
        'x-validate': null,
      }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      "A set of parameters to identify a user with. Does not include the user ID, as that's specified elsewhere in the request. You can supply any additional properties you'd like to upsert for the user.",
    example: {
      channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
      email: 'ian.malcolm@chaos.theory',
      name: 'Dr. Ian Malcolm',
      preferences: {
        default: {
          channel_types: { email: true },
          workflows: { 'dinosaurs-loose': { channel_types: { email: true } } },
        },
      },
      timezone: 'America/New_York',
    },
    title: 'IdentifyUserRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.IdentifyUserRequest',
    'x-validate': null,
    required: [],
  })
  .openapi('IdentifyUserRequest')

const SetTenantResponseSchema: z.ZodType<SetTenantResponseType> = z
  .xor([TenantSchema])
  .openapi({
    description: 'The response from setting a tenant.',
    example: {
      __typename: 'Tenant',
      created_at: '1993-05-24T08:30:00Z',
      id: 'ingen_isla_nublar',
      name: 'Jurassic Park',
      settings: {
        branding: {
          icon_url: 'https://example.com/trex_silhouette_icon.png',
          logo_url: 'https://example.com/amber_fossil_logo.png',
          primary_color: '#DF1A22',
          primary_color_contrast: '#FFDE00',
        },
      },
      updated_at: '1993-06-11T15:45:00Z',
    },
    title: 'SetTenantResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.SetTenantResponse',
    'x-validate': null,
  })
  .openapi('SetTenantResponse')

const WorkflowRecipientRunSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'WorkflowRecipientRun',
        'x-struct': null,
        'x-validate': null,
      }),
    actor: z
      .union([
        RecipientReferenceSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description: 'The actor who triggered the workflow recipient run.',
        'x-struct': null,
        'x-validate': null,
      }),
    error_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the workflow recipient run.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the workflow recipient run (per-recipient).',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        example: '2025-01-01T00:00:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    recipient: RecipientReferenceSchema,
    status: z
      .enum(['queued', 'processing', 'paused', 'completed', 'cancelled'])
      .openapi({
        description:
          'The current status of the workflow recipient run. One of `queued`, `processing`, `paused`, `completed`, or `cancelled`.',
        example: 'completed',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The tenant associated with the workflow recipient run.',
        example: 'tenant_abc',
        'x-struct': null,
        'x-validate': null,
      }),
    trigger_source: WorkflowRecipientRunTriggerSourceSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        example: '2025-01-01T00:05:00Z',
        'x-struct': null,
        'x-validate': null,
      }),
    workflow: z
      .string()
      .openapi({
        description: 'The key of the workflow that was executed.',
        example: 'comment-created',
        'x-struct': null,
        'x-validate': null,
      }),
    workflow_run_id: z
      .uuid()
      .openapi({
        description:
          'The identifier for the top-level workflow run shared across all recipients in a single trigger.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A workflow recipient run represents an individual execution of a workflow for a specific recipient.',
    example: {
      __typename: 'WorkflowRecipientRun',
      actor: 'user_456',
      error_count: 0,
      id: '550e8400-e29b-41d4-a716-446655440000',
      inserted_at: '2025-01-01T00:00:00Z',
      recipient: 'user_123',
      status: 'completed',
      tenant: 'tenant_abc',
      trigger_source: { cancellation_key: 'comment-123-user-456', type: 'api' },
      updated_at: '2025-01-01T00:05:00Z',
      workflow: 'comment-created',
      workflow_run_id: '660e8400-e29b-41d4-a716-446655440000',
    },
    required: [
      '__typename',
      'id',
      'workflow_run_id',
      'workflow',
      'status',
      'recipient',
      'trigger_source',
      'inserted_at',
      'updated_at',
    ],
    title: 'WorkflowRecipientRun',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.WorkflowRecipientRun',
    'x-validate': null,
  })
  .openapi('WorkflowRecipientRun')

const ListWorkflowRecipientRunsResponseSchema = z
  .object({
    items: z
      .array(WorkflowRecipientRunSchema)
      .openapi({
        description: 'A list of workflow recipient runs.',
        'x-struct': null,
        'x-validate': null,
      }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A paginated list of workflow recipient runs.',
    example: {
      items: [
        {
          __typename: 'WorkflowRecipientRun',
          actor: 'user_456',
          error_count: 0,
          id: '550e8400-e29b-41d4-a716-446655440000',
          inserted_at: '2025-01-01T00:00:00Z',
          recipient: 'user_123',
          status: 'completed',
          tenant: 'tenant_abc',
          trigger_source: { cancellation_key: 'comment-123-user-456', type: 'api' },
          updated_at: '2025-01-01T00:05:00Z',
          workflow: 'comment-created',
          workflow_run_id: '660e8400-e29b-41d4-a716-446655440000',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['items', 'page_info'],
    title: 'ListWorkflowRecipientRunsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListWorkflowRecipientRunsResponse',
    'x-validate': null,
  })
  .openapi('ListWorkflowRecipientRunsResponse')

const PreferenceSetWorkflowsSchema = z
  .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
  .openapi({
    description:
      'An object where the key is the workflow key and the values are the preference settings for that workflow.',
    example: { 'dinosaurs-loose': { channel_types: { email: false } } },
    title: 'PreferenceSetWorkflows',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('PreferenceSetWorkflows')

const ListSubscriptionsResponseSchema = z
  .object({
    entries: z
      .array(SubscriptionSchema)
      .openapi({ description: 'A list of subscriptions.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A response containing a list of subscriptions.',
    example: {
      entries: [
        {
          __typename: 'Subscription',
          inserted_at: '2021-01-01T00:00:00Z',
          object: {
            __typename: 'Object',
            collection: 'assets',
            created_at: null,
            id: 'specimen_25',
            properties: {
              classification: 'Theropod',
              config: { biz: 'baz', foo: 'bar' },
              name: 'Velociraptor',
              status: 'contained',
            },
            updated_at: '2024-05-22T12:00:00Z',
          },
          recipient: {
            __typename: 'User',
            avatar: null,
            created_at: null,
            email: 'jane@ingen.net',
            id: 'jane',
            name: 'Jane Doe',
            phone_number: null,
            timezone: null,
            updated_at: '2024-05-22T12:00:00Z',
          },
          updated_at: '2021-01-01T00:00:00Z',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['entries', 'page_info'],
    title: 'ListSubscriptionsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListSubscriptionsResponse',
    'x-validate': null,
  })
  .openapi('ListSubscriptionsResponse')

const SuccessResponseSchema = z
  .object({
    ok: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OK response.',
        example: 'ok',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A response indicating the operation was successful.',
    example: { ok: 'ok' },
    title: 'SuccessResponse',
    'x-struct': null,
    'x-validate': null,
    required: [],
  })
  .openapi('SuccessResponse')

const UserRecipientSchema = z
  .string()
  .openapi({
    description: 'The ID of the user which is used as the reference for the recipient.',
    example: 'user_123',
    title: 'UserRecipient',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('UserRecipient')

const ListActivitiesResponseSchema = z
  .object({
    items: z
      .array(ActivitySchema)
      .openapi({ description: 'A list of activities.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description:
      'Returns a paginated list of `activities` associated with a given message. For messages produced after a [batch step](/designing-workflows/batch-function), this will contain one or more activities. Non-batched messages will always return a single activity.',
    example: {
      items: [
        {
          __typename: 'Activity',
          actor: null,
          data: { foo: 'bar' },
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2024-01-01T00:00:00Z',
          recipient: {
            __typename: 'User',
            avatar: null,
            created_at: null,
            email: 'jane@ingen.net',
            id: 'jane',
            name: 'Jane Doe',
            phone_number: null,
            timezone: null,
            updated_at: '2024-05-22T12:00:00Z',
          },
          updated_at: '2024-01-01T00:00:00Z',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['items', 'page_info'],
    title: 'ListActivitiesResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListActivitiesResponse',
    'x-validate': null,
  })
  .openapi('ListActivitiesResponse')

const UpdateSchedulesRequestSchema: z.ZodType<UpdateSchedulesRequestType> = z
  .object({
    actor: z
      .xor([
        RecipientReferenceSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.',
        'x-struct': null,
        'x-validate': null,
      }),
    ending_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ending date and time for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    repeats: z
      .array(ScheduleRepeatRuleSchema)
      .exactOptional()
      .openapi({
        description: 'The repeat rule for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    schedule_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description: 'Unique identifier for the schedule.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'A list of schedule IDs.', 'x-struct': null, 'x-validate': null }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The starting date and time for the schedule.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .union([
        InlineTenantRequestSchema,
        z.any().nullable().openapi({ 'x-struct': null, 'x-validate': null }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to update a schedule.',
    example: {
      actor: null,
      data: { key: 'value' },
      ending_at: null,
      repeats: [
        {
          __typename: 'ScheduleRepeat',
          day_of_month: null,
          days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          frequency: 'daily',
          hours: null,
          interval: 1,
          minutes: null,
        },
      ],
      schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
      scheduled_at: null,
      tenant: 'acme_corp',
    },
    required: ['schedule_ids'],
    title: 'UpdateSchedulesRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.UpdateSchedulesRequest',
    'x-validate': null,
  })
  .openapi('UpdateSchedulesRequest')

const ListMessageEventsResponseSchema = z
  .object({
    items: z
      .array(MessageEventSchema)
      .openapi({ description: 'A list of message events.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description:
      'Returns a paginated list of [delivery and engagement](/send-notifications/message-statuses) events for the specified message.',
    example: {
      items: [
        {
          __typename: 'MessageEvent',
          data: null,
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2021-01-01T00:00:00Z',
          recipient: 'user_123',
          type: 'message.sent',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['items', 'page_info'],
    title: 'ListMessageEventsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListMessageEventsResponse',
    'x-validate': null,
  })
  .openapi('ListMessageEventsResponse')

const BulkDeleteSubscriptionsRequestSchema = z
  .object({
    subscriptions: z
      .array(
        z
          .object({
            id: z
              .string()
              .openapi({
                description: 'Unique identifier for the object.',
                'x-struct': null,
                'x-validate': null,
              }),
            recipients: z
              .array(RecipientReferenceSchema)
              .openapi({
                description:
                  'The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({
            description:
              'A list of subscriptions. 1 subscribed-to id, and N subscriber recipients.',
            required: ['id', 'recipients'],
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'A nested list of subscriptions.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'A request to delete subscriptions for many groups of 1 subscribed-to object, N subscriber recipients.',
    example: {
      subscriptions: [
        {
          id: 'subscribed-to-object-1',
          recipients: [{ collection: 'projects', id: 'subscriber-project-1' }, 'subscriber-user-1'],
        },
        { id: 'subscribed-to-object-2', recipients: ['subscriber-user-2'] },
      ],
    },
    required: ['subscriptions'],
    title: 'BulkDeleteSubscriptionsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkDeleteSubscriptionsRequest',
    'x-validate': null,
  })
  .openapi('BulkDeleteSubscriptionsRequest')

const AddAudienceMembersRequestSchema: z.ZodType<AddAudienceMembersRequestType> = z
  .object({
    members: z
      .array(AudienceMemberRequestSchema)
      .openapi({
        description:
          'A list of audience members to add. You can add up to 1,000 members per request.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to add a list of audience members.',
    example: {
      members: [
        {
          tenant: 'ingen_isla_nublar',
          user: { email: 'ellie@ingen.net', id: 'dr_sattler', name: 'Dr. Ellie Sattler' },
        },
      ],
    },
    required: ['members'],
    title: 'AddAudienceMembersRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AddAudienceMembersRequest',
    'x-validate': null,
  })
  .openapi('AddAudienceMembersRequest')

const TriggerWorkflowResponseSchema = z
  .object({
    workflow_run_id: z
      .uuid()
      .openapi({
        description:
          'This value allows you to track individual messages associated with this trigger request.',
        example: '123e4567-e89b-12d3-a456-426614174000',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'The response from triggering a workflow.',
    example: { workflow_run_id: '123e4567-e89b-12d3-a456-426614174000' },
    required: ['workflow_run_id'],
    title: 'TriggerWorkflowResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.TriggerWorkflowResponse',
    'x-validate': null,
  })
  .openapi('TriggerWorkflowResponse')

const UpsertSubscriptionsRequestSchema: z.ZodType<UpsertSubscriptionsRequestType> = z
  .object({
    properties: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The custom properties associated with the subscription relationship.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientRequestSchema)
      .openapi({
        description:
          'The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to upsert subscriptions for a set of recipients.',
    example: { properties: { key: 'value' }, recipients: ['user_1', 'user_2'] },
    required: ['recipients'],
    title: 'UpsertSubscriptionsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.UpsertSubscriptionsRequest',
    'x-validate': null,
  })
  .openapi('UpsertSubscriptionsRequest')

const GuideResetRequestSchema = z
  .object({
    guide_key: z
      .string()
      .openapi({ description: 'The key of the guide.', 'x-struct': null, 'x-validate': null }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tenant ID of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: "A request to reset a guide's engagement state.",
    example: { guide_key: 'tour_notification', tenant: 'ingen_isla_nublar' },
    required: ['guide_key'],
    title: 'GuideResetRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Requests.GuideResetRequest',
    'x-validate': null,
  })
  .openapi('GuideResetRequest')

const BatchMessagesStatusRequestSchema = z
  .object({
    message_ids: z
      .array(
        z
          .string()
          .openapi({
            description: 'The message ID to update the status of.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description: 'The message IDs to update the status of.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Request to update the status of multiple messages in batch.',
    example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
    required: ['message_ids'],
    title: 'BatchMessagesStatusRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BatchMessagesStatusRequest',
    'x-validate': null,
  })
  .openapi('BatchMessagesStatusRequest')

const ListTenantsResponseSchema: z.ZodType<ListTenantsResponseType> = z
  .object({
    entries: z
      .array(TenantSchema)
      .openapi({ description: 'A list of tenants.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A response containing a list of tenants.',
    example: {
      entries: [
        {
          __typename: 'Tenant',
          id: 'tenant_jp123',
          name: 'Jurassic Park',
          settings: {
            branding: {
              dark_icon_url: 'https://example.com/trex_silhouette_icon_dark.png',
              dark_logo_url: 'https://example.com/amber_fossil_logo_dark.png',
              dark_primary_color: '#FFFFFF',
              dark_primary_color_contrast: '#000000',
              icon_url: 'https://example.com/trex_silhouette_icon.png',
              logo_url: 'https://example.com/amber_fossil_logo.png',
              primary_color: '#DF1A22',
              primary_color_contrast: '#FFDE00',
            },
            preference_set: {
              categories: { safety: { channel_types: { email: true, push: true } } },
              channel_types: { email: true, in_app_feed: true, push: true },
              id: 'default',
              workflows: { park_alert: { channel_types: { email: true, push: true } } },
            },
          },
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['entries', 'page_info'],
    title: 'ListTenantsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListTenantsResponse',
    'x-validate': null,
  })
  .openapi('ListTenantsResponse')

const CancelRequestSchema = z
  .object({
    cancellation_key: z
      .string()
      .openapi({
        description:
          'A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The key of the workflow to cancel.',
        'x-struct': null,
        'x-validate': null,
      }),
    recipients: z
      .array(RecipientReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description:
      'When invoked using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally provide one or more recipients to scope the request to.',
    example: { cancellation_key: 'comment_123', name: 'new-comment', recipients: ['user_456'] },
    required: ['name', 'cancellation_key'],
    title: 'Cancel Request',
    'x-struct': 'Elixir.SwitchboardWeb.Specs.Notify.Requests.CancelRequest',
    'x-validate': null,
  })
  .openapi('CancelRequest')

const WorkflowRecipientRunDetailSchema = WorkflowRecipientRunSchema.and(
  z
    .object({
      events: z
        .array(WorkflowRecipientRunEventSchema)
        .openapi({
          description: 'A list of events that occurred during the workflow recipient run.',
          'x-struct': null,
          'x-validate': null,
        }),
    })
    .openapi({ required: ['events'], 'x-struct': null, 'x-validate': null }),
)
  .openapi({
    description: 'A single workflow recipient run with its events.',
    example: {
      __typename: 'WorkflowRecipientRun',
      actor: 'user_456',
      error_count: 0,
      events: [
        {
          __typename: 'WorkflowRecipientRunEvent',
          attempt: 1,
          data: { channel_type: 'email', message_id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe' },
          event: 'message_enqueued',
          id: '2FVHPWxRqNuXQ9krvNP5A6Z4qXe',
          inserted_at: '2025-01-01T00:00:00Z',
          status: 'ok',
          step_ref: 'email_step_1',
          step_type: 'channel',
        },
      ],
      id: '550e8400-e29b-41d4-a716-446655440000',
      inserted_at: '2025-01-01T00:00:00Z',
      recipient: 'user_123',
      status: 'completed',
      tenant: 'tenant_abc',
      trigger_source: { cancellation_key: 'comment-123-user-456', type: 'api' },
      updated_at: '2025-01-01T00:05:00Z',
      workflow: 'comment-created',
      workflow_run_id: '660e8400-e29b-41d4-a716-446655440000',
    },
    title: 'WorkflowRecipientRunDetail',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.WorkflowRecipientRunDetail',
    'x-validate': null,
  })
  .openapi('WorkflowRecipientRunDetail')

const GuideSeenRequestSchema = z
  .object({
    channel_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the channel.',
        'x-struct': null,
        'x-validate': null,
      }),
    content: z
      .looseObject({})
      .openapi({ description: 'The content of the guide.', 'x-struct': null, 'x-validate': null }),
    data: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The data of the guide.', 'x-struct': null, 'x-validate': null }),
    guide_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    guide_key: z
      .string()
      .openapi({ description: 'The key of the guide.', 'x-struct': null, 'x-validate': null }),
    guide_step_ref: z
      .string()
      .openapi({
        description: 'The step reference of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tenant ID of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to mark a guide as seen.',
    example: {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      content: {
        body: "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
        title: 'DNA Lab Tour Available',
      },
      data: { next_time: '14:30', spots_left: 8, tour_id: 'dna_lab_tour' },
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      tenant: 'ingen_isla_nublar',
    },
    required: ['channel_id', 'guide_id', 'guide_key', 'guide_step_ref', 'content'],
    title: 'GuideSeenRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Requests.GuideSeenRequest',
    'x-validate': null,
  })
  .openapi('GuideSeenRequest')

const ListAudienceMembersResponseSchema = z
  .object({
    entries: z
      .array(AudienceMemberSchema)
      .openapi({
        description: 'A list of audience members.',
        'x-struct': null,
        'x-validate': null,
      }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A paginated list of audience members.',
    example: {
      entries: [
        {
          __typename: 'AudienceMember',
          added_at: '1993-06-10T14:30:00Z',
          tenant: 'ingen_isla_nublar',
          user: {
            __typename: 'User',
            created_at: null,
            email: 'alan.grant@dig.site.mt',
            id: 'dr_grant',
            name: 'Dr. Alan Grant',
            updated_at: '1993-06-09T08:15:00Z',
          },
          user_id: 'dr_grant',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['entries', 'page_info'],
    title: 'ListAudienceMembersResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListAudienceMembersResponse',
    'x-validate': null,
  })
  .openapi('ListAudienceMembersResponse')

const BulkSetUserPreferencesRequestSchema: z.ZodType<BulkSetUserPreferencesRequestType> = z
  .object({
    preferences: BulkPreferenceSetRequestSchema,
    user_ids: z
      .array(
        z
          .string()
          .openapi({
            description: 'The unique identifier of the user.',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({ description: 'A list of user IDs.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to set preferences for a set of users in bulk.',
    example: {
      preferences: {
        categories: { marketing: false, transactional: { channel_types: { email: false } } },
        channel_types: { email: true },
        channels: {
          '2f641633-95d3-4555-9222-9f1eb7888a80': {
            conditions: [
              { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
            ],
          },
          'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
        },
        commercial_subscribed: true,
        id: 'default',
        workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
      },
      user_ids: ['user_1', 'user_2'],
    },
    required: ['preferences', 'user_ids'],
    title: 'BulkSetUserPreferencesRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkSetUserPreferencesRequest',
    'x-validate': null,
  })
  .openapi('BulkSetUserPreferencesRequest')

const BulkSetTenantsRequestSchema: z.ZodType<BulkSetTenantsRequestType> = z
  .object({
    tenants: z
      .array(InlineTenantRequestSchema)
      .openapi({
        description: 'The tenants to be upserted.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to set tenants in bulk.',
    example: { tenants: [{ id: 'tenant_1', name: 'Acme Corp, Inc.' }] },
    required: ['tenants'],
    title: 'BulkSetTenantsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkSetTenantsRequest',
    'x-validate': null,
  })
  .openapi('BulkSetTenantsRequest')

const PreferenceSetRequestWorkflowsSchema = z
  .record(z.string(), PreferenceSetWorkflowCategorySettingSchema)
  .openapi({
    description:
      'An object where the key is the workflow key and the values are the preference settings for that workflow.',
    example: {
      'dinosaurs-loose': { channel_types: { email: false, sms: true } },
      'welcome-sequence': true,
    },
    title: 'PreferenceSetRequestWorkflows',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('PreferenceSetRequestWorkflows')

const UserReferenceSchema = z
  .string()
  .openapi({
    description: 'The ID of the user which is used as the reference for the recipient.',
    example: 'user_123',
    title: 'UserReference',
    'x-struct': null,
    'x-validate': null,
  })
  .openapi('UserReference')

const ChannelDataRequestSchema = z
  .object({
    data: z
      .xor([
        PushChannelDataTokensOnlySchema,
        PushChannelDataDevicesOnlySchema,
        AWSSNSPushChannelDataTargetARNsOnlySchema,
        AWSSNSPushChannelDataDevicesOnlySchema,
        OneSignalChannelDataPlayerIdsOnlySchema,
        SlackChannelDataSchema,
        MsTeamsChannelDataSchema,
        DiscordChannelDataSchema,
      ])
      .openapi({
        description: 'Channel data for a given channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to set channel data for a type of channel.',
    example: { data: { tokens: ['push_token_1'] } },
    required: ['data'],
    title: 'ChannelDataRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ChannelDataRequest',
    'x-validate': null,
  })
  .openapi('ChannelDataRequest')

const GuideUnarchivedRequestSchema = z
  .object({
    guide_key: z
      .string()
      .openapi({ description: 'The key of the guide.', 'x-struct': null, 'x-validate': null }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tenant ID of the guide.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to mark a guide as unarchived.',
    example: { guide_key: 'tour_notification', tenant: 'ingen_isla_nublar' },
    required: ['guide_key'],
    title: 'GuideUnarchivedRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Guides.Requests.GuideUnarchivedRequest',
    'x-validate': null,
  })
  .openapi('GuideUnarchivedRequest')

const ListObjectsResponseSchema = z
  .object({
    entries: z
      .array(ObjectSchema)
      .openapi({ description: 'A list of objects.', 'x-struct': null, 'x-validate': null }),
    page_info: PageInfoSchema,
  })
  .openapi({
    description: 'A paginated list of objects in a collection.',
    example: {
      entries: [
        {
          __typename: 'Object',
          collection: 'assets',
          created_at: null,
          id: 'specimen_25',
          properties: {
            classification: 'Theropod',
            config: { biz: 'baz', foo: 'bar' },
            name: 'Velociraptor',
            status: 'contained',
          },
          updated_at: '2024-05-22T12:00:00Z',
        },
      ],
      page_info: { __typename: 'PageInfo', after: null, before: null, page_size: 25 },
    },
    required: ['entries', 'page_info'],
    title: 'ListObjectsResponse',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ListObjectsResponse',
    'x-validate': null,
  })
  .openapi('ListObjectsResponse')

const BulkOperationSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'BulkOperation',
        'x-struct': null,
        'x-validate': null,
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the bulk operation was completed.',
        'x-struct': null,
        'x-validate': null,
      }),
    error_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of failed operations.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
    error_items: z
      .array(
        z
          .object({
            collection: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The collection this object belongs to.',
                'x-struct': null,
                'x-validate': null,
              }),
            id: z
              .string()
              .openapi({
                description: 'Unique identifier for the object.',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['id'], 'x-struct': null, 'x-validate': null }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of items that failed to be processed.',
        'x-struct': null,
        'x-validate': null,
      }),
    estimated_total_rows: z
      .int()
      .openapi({
        description: 'The estimated total number of rows to process.',
        example: 1000,
        'x-struct': null,
        'x-validate': null,
      }),
    failed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the bulk operation failed.',
        'x-struct': null,
        'x-validate': null,
      }),
    id: z
      .uuid()
      .openapi({
        description: 'Unique identifier for the bulk operation.',
        'x-struct': null,
        'x-validate': null,
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the resource was created.',
        'x-struct': null,
        'x-validate': null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the bulk operation.',
        example: 'Bulk operation name',
        'x-struct': null,
        'x-validate': null,
      }),
    processed_rows: z
      .int()
      .openapi({
        description: 'The number of rows processed so far.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
    progress_path: z
      .url()
      .exactOptional()
      .openapi({
        description: "The URI to the bulk operation's progress.",
        'x-struct': null,
        'x-validate': null,
      }),
    started_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the bulk operation was started.',
        'x-struct': null,
        'x-validate': null,
      }),
    status: z
      .enum(['queued', 'processing', 'completed', 'failed'])
      .openapi({
        description: 'The status of the bulk operation.',
        example: 'queued',
        'x-struct': null,
        'x-validate': null,
      }),
    success_count: z
      .int()
      .openapi({
        description: 'The number of successful operations.',
        example: 0,
        'x-struct': null,
        'x-validate': null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the resource was last updated.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A bulk operation entity.',
    example: {
      __typename: 'BulkOperation',
      completed_at: null,
      error_count: 0,
      error_items: [],
      estimated_total_rows: 1000,
      failed_at: null,
      id: '123e4567-e89b-12d3-a456-426614174000',
      inserted_at: '2024-05-22T12:00:00Z',
      name: 'Bulk operation name',
      processed_rows: 0,
      progress_path:
        'https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000',
      started_at: null,
      status: 'processing',
      success_count: 0,
      updated_at: '2024-05-22T12:00:00Z',
    },
    required: [
      '__typename',
      'id',
      'name',
      'status',
      'estimated_total_rows',
      'processed_rows',
      'success_count',
      'updated_at',
      'inserted_at',
    ],
    title: 'BulkOperation',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkOperation',
    'x-validate': null,
  })
  .openapi('BulkOperation')

const DeleteSubscriptionsRequestSchema = z
  .object({
    recipients: z
      .array(RecipientReferenceSchema)
      .openapi({
        description:
          'The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to delete subscriptions for a set of recipients.',
    example: { recipients: ['user_123'] },
    required: ['recipients'],
    title: 'DeleteSubscriptionsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.DeleteSubscriptionsRequest',
    'x-validate': null,
  })
  .openapi('DeleteSubscriptionsRequest')

const AWSSNSPushChannelDataFullSchema = z
  .object({
    devices: z
      .array(
        z
          .object({
            locale: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The locale of the object. Used for [message localization](/concepts/translations).',
                'x-struct': null,
                'x-validate': null,
              }),
            target_arn: z
              .string()
              .openapi({
                description:
                  'The ARN of a platform endpoint associated with a platform application and a device token. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
                'x-struct': null,
                'x-validate': null,
              }),
            timezone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).',
                'x-struct': null,
                'x-validate': null,
              }),
          })
          .openapi({ required: ['target_arn'], 'x-struct': null, 'x-validate': null }),
      )
      .openapi({
        description:
          'A list of devices. Each device contains a target_arn, and optionally a locale and timezone.',
        'x-struct': null,
        'x-validate': null,
      }),
    target_arns: z
      .array(
        z
          .string()
          .openapi({
            description:
              'The ARN of a platform endpoint associated with a platform application and a device token. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
            'x-struct': null,
            'x-validate': null,
          }),
      )
      .openapi({
        description:
          'A list of platform endpoint ARNs. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'AWS SNS push channel data.',
    example: {
      devices: [
        {
          locale: 'en-US',
          target_arn:
            'arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3',
          timezone: 'America/Los_Angeles',
        },
      ],
      target_arns: [
        'arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3',
      ],
    },
    required: ['target_arns', 'devices'],
    title: 'AWSSNSPushChannelDataFull',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.AWSSNSPushChannelDataFull',
    'x-validate': null,
  })
  .openapi('AWSSNSPushChannelDataFull')

const ChannelDataSchema = z
  .object({
    __typename: z
      .string()
      .openapi({
        description: 'The typename of the schema.',
        example: 'ChannelData',
        'x-struct': null,
        'x-validate': null,
      }),
    channel_id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the channel.',
        'x-struct': null,
        'x-validate': null,
      }),
    data: z
      .xor([
        PushChannelDataFullSchema,
        AWSSNSPushChannelDataFullSchema,
        OneSignalChannelDataPlayerIdsOnlySchema,
        SlackChannelDataSchema,
        MsTeamsChannelDataSchema,
        DiscordChannelDataSchema,
      ])
      .openapi({
        description: 'Channel data for a given channel type.',
        'x-struct': null,
        'x-validate': null,
      }),
    provider: z
      .enum([
        'push_fcm',
        'push_apns',
        'push_aws_sns',
        'push_expo',
        'push_one_signal',
        'chat_slack',
        'chat_ms_teams',
        'chat_discord',
        'http_knock_webhook',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of provider.',
        example: 'push_fcm',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Channel data for a given channel type.',
    example: {
      __typename: 'ChannelData',
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      data: {
        devices: [{ locale: null, timezone: null, token: 'device_1' }],
        tokens: ['push_token_1'],
      },
    },
    required: ['channel_id', 'data', '__typename'],
    title: 'ChannelData',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.ChannelData',
    'x-validate': null,
  })
  .openapi('ChannelData')

const BulkDeleteObjectsRequestSchema = z
  .object({
    object_ids: z
      .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
      .openapi({
        description: 'List of object IDs to delete.',
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'Request body for bulk deleting objects.',
    example: { object_ids: ['obj_123', 'obj_456', 'obj_789'] },
    required: ['object_ids'],
    title: 'BulkDeleteObjectsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.Objects.BulkDeleteObjectsRequest',
    'x-validate': null,
  })
  .openapi('BulkDeleteObjectsRequest')

const BatchMessagesInteractedRequestSchema = z
  .object({
    message_ids: z
      .array(z.string().openapi({ 'x-struct': null, 'x-validate': null }))
      .openapi({
        description: 'The message IDs to batch mark as interacted with.',
        'x-struct': null,
        'x-validate': null,
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Metadata about the interaction.',
        example: { key: 'value' },
        'x-struct': null,
        'x-validate': null,
      }),
  })
  .openapi({
    description: 'A request to batch mark messages as interacted with.',
    example: { message_ids: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'], metadata: { key: 'value' } },
    required: ['message_ids'],
    title: 'BatchMessagesInteractedRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BatchMessagesInteractedRequest',
    'x-validate': null,
  })
  .openapi('BatchMessagesInteractedRequest')

const BulkSetObjectsRequestSchema: z.ZodType<BulkSetObjectsRequestType> = z
  .object({
    objects: z
      .array(BulkSetObjectRequestSchema)
      .openapi({ description: 'A list of objects.', 'x-struct': null, 'x-validate': null }),
  })
  .openapi({
    description: 'A request to set objects in bulk.',
    example: { objects: [{ id: 'project_1', name: 'My project' }] },
    required: ['objects'],
    title: 'BulkSetObjectsRequest',
    'x-struct': 'Elixir.SwitchboardWeb.V1.Specs.BulkSetObjectsRequest',
    'x-validate': null,
  })
  .openapi('BulkSetObjectsRequest')

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getV1ObjectsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{id}',
  tags: ['Objects'],
  summary: 'Get an object',
  description:
    'Retrieves a specific object by its ID from the specified collection. Returns the object with all its properties.',
  operationId: 'getObject',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ObjectSchema } } },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionIdRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{id}',
  tags: ['Objects'],
  summary: 'Set an object',
  description:
    'Creates a new object or updates an existing one in the specified collection. This operation is used to identify objects with their properties, as well as optional preferences and channel data.',
  operationId: 'setObject',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: SetObjectRequestSchema,
          example: {
            channel_data: {
              '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] },
            },
            description: 'My product description',
            locale: 'en-US',
            name: 'My product',
            preferences: {
              default: {
                channel_types: { email: true },
                workflows: { 'dinosaurs-loose': { channel_types: { email: true } } },
              },
            },
            price: 100,
            timezone: 'America/New_York',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ObjectSchema } } },
  },
  callbacks: {},
})

export const deleteV1ObjectsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/v1/objects/{collection}/{id}',
  tags: ['Objects'],
  summary: 'Delete an object',
  description:
    'Permanently removes an object from the specified collection. This operation cannot be undone.',
  operationId: 'deleteObject',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesInteractedRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/interacted',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as interacted',
  description:
    'Records that a user has interacted with a guide, triggering any associated interacted events.',
  operationId: 'markUserGuideAsInteracted (2)',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideInteractedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1IntegrationsCensusCustomDestinationRoute = createRoute({
  method: 'post',
  path: '/v1/integrations/census/custom-destination',
  tags: ['Integrations'],
  summary: 'Process a Census RPC request',
  description: 'Processes a Census custom destination RPC request.',
  operationId: 'processCensusRpcRequest',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'The unique identifier for the RPC request.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              jsonrpc: z
                .string()
                .openapi({
                  description: 'The JSON-RPC version.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              method: z
                .string()
                .openapi({
                  description: 'The method name to execute.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              params: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description: 'The parameters for the method.',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              required: ['id', 'method', 'jsonrpc'],
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The request ID.', 'x-struct': null, 'x-validate': null }),
              result: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description: 'The result of the RPC call.',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/subscriptions',
  tags: ['Subscriptions', 'Users'],
  summary: 'List user subscriptions',
  description:
    'Retrieves a paginated list of subscriptions for a specific user, in descending order.',
  operationId: 'listSubscriptionsForUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The user ID to list subscriptions for.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preferences').openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Associated resources to include in the response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              items: {
                enum: ['preferences'],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'objects[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RecipientReferenceSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only returns subscriptions for the specified object references.',
            in: 'query',
            name: 'objects[]',
            required: false,
            schema: {
              items: { $ref: '#/components/schemas/RecipientReference' },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSubscriptionsResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1WorkflowsKeyCancelRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/{key}/cancel',
  tags: ['Workflows'],
  summary: 'Cancel workflow',
  description:
    'When invoked for a workflow using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally be provided one or more recipients to scope the request to.',
  operationId: 'cancelWorkflow (2)',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The key of the workflow to cancel.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: CancelWorkflowRequestSchema,
          example: { cancellation_key: 'cancel-workflow-123', recipients: ['jhammond'] },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesArchivedRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/archived',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as archived',
  description:
    'Records that a guide has been archived by a user, triggering any associated archived events.',
  operationId: 'markUserGuideAsArchived (2)',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideArchivedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const deleteV1UsersUserIdGuidesMessagesArchivedRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{user_id}/guides/messages/archived',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as unarchived',
  description:
    'Records that a guide has been unarchived, triggering any associated unarchived events.',
  operationId: 'markUserGuideAsUnarchived',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideUnarchivedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdChannelTypesRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/channel_types',
  tags: ['Users', 'Preferences'],
  summary: 'Update channel types in preference set',
  description:
    'Updates the channel types in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceChannelTypes',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/categories',
  tags: ['Objects', 'Preferences'],
  summary: 'Update categories in preference set',
  description: "Updates the category preferences for an object's preference set.",
  operationId: 'updateObjectPreferenceCategories',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1MessagesRoute = createRoute({
  method: 'get',
  path: '/v1/messages',
  tags: ['Messages'],
  summary: 'List messages',
  description: 'Returns a paginated list of messages for the current environment.',
  operationId: 'listMessages',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding tenant.',
            example: 'tenant_123',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding channel ID.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'channel_id',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'queued',
                'sent',
                'delivered',
                'delivery_attempted',
                'undelivered',
                'not_sent',
                'bounced',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given delivery status.',
            example: ['delivered'],
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              items: {
                enum: [
                  'queued',
                  'sent',
                  'delivered',
                  'delivery_attempted',
                  'undelivered',
                  'not_sent',
                  'bounced',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      engagement_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'seen',
                'unseen',
                'read',
                'unread',
                'archived',
                'unarchived',
                'link_clicked',
                'interacted',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given engagement status.',
            example: ['unread'],
            in: 'query',
            name: 'engagement_status',
            required: false,
            schema: {
              items: {
                enum: [
                  'seen',
                  'unseen',
                  'read',
                  'unread',
                  'archived',
                  'unarchived',
                  'link_clicked',
                  'interacted',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      message_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.',
            example: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
            in: 'query',
            name: 'message_ids',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages related to any of the provided categories.',
            example: ['workflow_123'],
            in: 'query',
            name: 'workflow_categories',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages triggered by the given workflow key.',
            example: 'comment-created',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_recipient_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: "Limits the results to messages for a specific recipient's workflow run.",
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_recipient_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      trigger_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.',
            example: '{"comment_id": "123"}',
            in: 'query',
            name: 'trigger_data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdChannelTypesTypeRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/channel_types/{type}',
  tags: ['Users', 'Preferences'],
  summary: 'Update channel type in preference set',
  description:
    'Updates a single channel type in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceChannelType',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1ProvidersMsTeamsChannelIdChannelsRoute = createRoute({
  method: 'get',
  path: '/v1/providers/ms-teams/{channel_id}/channels',
  tags: ['Providers', 'Microsoft Teams'],
  summary: 'List channels',
  description:
    'List the Microsoft Teams channels within a team. By default, archived and private channels are excluded from the results.',
  operationId: 'listChannelsForMsTeamsProvider',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Microsoft Teams channel to get channels for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      ms_teams_tenant_object: z
        .string()
        .openapi({
          param: {
            description:
              'A JSON encoded string containing the Microsoft Teams tenant object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'ms_teams_tenant_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      team_id: z
        .string()
        .openapi({
          param: {
            description: 'Microsoft Teams team ID.',
            in: 'query',
            name: 'team_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$filter': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to filter channels.',
            example: "displayName eq 'General'",
            in: 'query',
            name: 'query_options.$filter',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$select': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to select specific properties.',
            example: 'id,displayName,description',
            in: 'query',
            name: 'query_options.$select',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ChannelsForMsTeamsProviderResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1MessagesMessageIdInteractedRoute = createRoute({
  method: 'put',
  path: '/v1/messages/{message_id}/interacted',
  tags: ['Messages'],
  summary: 'Mark message as interacted',
  description:
    'Marks a message as `interacted` with by the user. This can include any user action on the message, with optional metadata about the specific interaction. Cannot include more than 5 key-value pairs, must not contain nested data. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageInteracted',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: MessageInteractedRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen', 'interacted'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: '2025-01-01T00:03:00Z',
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1MessagesMessageIdEventsRoute = createRoute({
  method: 'get',
  path: '/v1/messages/{message_id}/events',
  tags: ['Messages'],
  summary: 'List events',
  description: 'Returns a paginated list of events for the specified message.',
  operationId: 'listMessageEvents',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fetch events for.',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMessageEventsResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/messages',
  tags: ['Messages', 'Users'],
  summary: 'List user messages',
  description:
    "Returns a paginated list of messages for a specific user. Messages are sorted with the most recent ones appearing first. Messages outside the account's retention window will not be included in the results.",
  operationId: 'listMessagesForUser',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding tenant.',
            example: 'tenant_123',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding channel ID.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'channel_id',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'queued',
                'sent',
                'delivered',
                'delivery_attempted',
                'undelivered',
                'not_sent',
                'bounced',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given delivery status.',
            example: ['delivered'],
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              items: {
                enum: [
                  'queued',
                  'sent',
                  'delivered',
                  'delivery_attempted',
                  'undelivered',
                  'not_sent',
                  'bounced',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      engagement_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'seen',
                'unseen',
                'read',
                'unread',
                'archived',
                'unarchived',
                'link_clicked',
                'interacted',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given engagement status.',
            example: ['unread'],
            in: 'query',
            name: 'engagement_status',
            required: false,
            schema: {
              items: {
                enum: [
                  'seen',
                  'unseen',
                  'read',
                  'unread',
                  'archived',
                  'unarchived',
                  'link_clicked',
                  'interacted',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      message_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.',
            example: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
            in: 'query',
            name: 'message_ids',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages related to any of the provided categories.',
            example: ['workflow_123'],
            in: 'query',
            name: 'workflow_categories',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages triggered by the given workflow key.',
            example: 'comment-created',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_recipient_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: "Limits the results to messages for a specific recipient's workflow run.",
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_recipient_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      trigger_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.',
            example: '{"comment_id": "123"}',
            in: 'query',
            name: 'trigger_data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The user ID to list messages for.',
            example: 'user-123',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1ProvidersSlackChannelIdRevokeAccessRoute = createRoute({
  method: 'put',
  path: '/v1/providers/slack/{channel_id}/revoke_access',
  tags: ['Providers', 'Slack'],
  summary: 'Revoke access',
  description: 'Revoke access for a Slack channel.',
  operationId: 'slackProviderRevokeAccess',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Slack channel to revoke access for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      access_token_object: z
        .string()
        .openapi({
          param: {
            description: 'A JSON encoded string containing the access token object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'access_token_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ok: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'OK response.',
                  example: 'ok',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              description: 'A response indicating the operation was successful.',
              example: { ok: 'ok' },
              title: 'SuccessResponse',
              'x-struct': null,
              'x-validate': null,
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .openapi({
                  description: 'The error code.',
                  example: 'authorization',
                  'x-struct': null,
                  'x-validate': null,
                }),
              message: z
                .string()
                .openapi({
                  description: 'The error message.',
                  example: 'Access token not set.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              status: z
                .int()
                .openapi({
                  description: 'The HTTP status code.',
                  example: 403,
                  'x-struct': null,
                  'x-validate': null,
                }),
              type: z
                .string()
                .openapi({
                  description: 'The error type.',
                  example: 'authentication_error',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              description: 'Authentication error response',
              example: {
                code: 'authorization',
                message: 'Access token not set.',
                status: 403,
                type: 'authentication_error',
              },
              required: ['code', 'message', 'status', 'type'],
              title: 'AuthenticationError',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const postV1ObjectsCollectionBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/objects/{collection}/bulk/delete',
  tags: ['Objects', 'Bulk operations'],
  summary: 'Bulk delete objects',
  description: 'Bulk deletes objects from the specified collection.',
  operationId: 'bulkDeleteObjects',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkDeleteObjectsRequestSchema,
          example: { object_ids: ['obj_123', 'obj_456', 'obj_789'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdWorkflowsRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/workflows',
  tags: ['Users', 'Preferences'],
  summary: 'Update workflows in preference set',
  description:
    'Updates the workflows in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceWorkflows',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1UsersUserIdGuidesChannelIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/guides/{channel_id}',
  tags: ['Guides', 'Users'],
  summary: 'List guides',
  description: 'Returns a list of eligible in-app guides for a specific user and channel.',
  operationId: 'listUserGuides',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The tenant ID to use for targeting and rendering guides.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The data (JSON encoded object) to use for targeting and rendering guides.',
            in: 'query',
            name: 'data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of guides to filter by.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GuidesResponseSchema } } },
  },
  callbacks: {},
})

export const getV1UsersUserIdSchedulesRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/schedules',
  tags: ['Schedules', 'Users'],
  summary: 'List user schedules',
  description: 'Returns a paginated list of schedules for a specific user, in descending order.',
  operationId: 'listUserSchedules',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The user ID to list schedules for.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      workflow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The workflow key to filter schedules for.',
            in: 'query',
            name: 'workflow',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The tenant ID to filter schedules for.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/categories/{key}',
  tags: ['Objects', 'Preferences'],
  summary: 'Update a category preference',
  description: "Updates a specific category preference for an object's preference set. Deprecated.",
  operationId: 'updateObjectPreferenceCategory',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const putV1UsersUserIdPreferencesIdCategoriesKeyRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/categories/{key}',
  tags: ['Users', 'Preferences'],
  summary: 'Update category in user preference set',
  description:
    'Updates a single category in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceCategory',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1MessagesMessageIdContentRoute = createRoute({
  method: 'get',
  path: '/v1/messages/{message_id}/content',
  tags: ['Messages'],
  summary: 'Get message content',
  description:
    'Returns the fully rendered contents of a message, where the response depends on which channel the message was sent through.',
  operationId: 'getMessageContents',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fetch contents of.',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MessageContentsSchema } } },
  },
  callbacks: {},
})

export const getV1ProvidersMsTeamsChannelIdAuthCheckRoute = createRoute({
  method: 'get',
  path: '/v1/providers/ms-teams/{channel_id}/auth_check',
  tags: ['Providers', 'Microsoft Teams'],
  summary: 'Check auth',
  description:
    'Check if a connection to Microsoft Teams has been authorized for a given Microsoft Teams tenant object.',
  operationId: 'msTeamsProviderAuthCheck',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Microsoft Teams channel to check.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      ms_teams_tenant_object: z
        .string()
        .openapi({
          param: {
            description:
              'A JSON encoded string containing the Microsoft Teams tenant object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'ms_teams_tenant_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MsTeamsAuthCheckResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1ProvidersMsTeamsChannelIdRevokeAccessRoute = createRoute({
  method: 'put',
  path: '/v1/providers/ms-teams/{channel_id}/revoke_access',
  tags: ['Providers', 'Microsoft Teams'],
  summary: 'Revoke access',
  description: 'Remove a Microsoft Entra tenant ID from a Microsoft Teams tenant object.',
  operationId: 'msTeamsProviderRevokeAccess',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Microsoft Teams channel to revoke access for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      ms_teams_tenant_object: z
        .string()
        .openapi({
          param: {
            description:
              'A JSON encoded string containing the Microsoft Teams tenant object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'ms_teams_tenant_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ok: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'OK response.',
                  example: 'ok',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              description: 'A response indicating the operation was successful.',
              example: { ok: 'ok' },
              title: 'SuccessResponse',
              'x-struct': null,
              'x-validate': null,
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .openapi({
                  description: 'The error code.',
                  example: 'authorization',
                  'x-struct': null,
                  'x-validate': null,
                }),
              message: z
                .string()
                .openapi({
                  description: 'The error message.',
                  example: 'Access token not set.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              status: z
                .int()
                .openapi({
                  description: 'The HTTP status code.',
                  example: 403,
                  'x-struct': null,
                  'x-validate': null,
                }),
              type: z
                .string()
                .openapi({
                  description: 'The error type.',
                  example: 'authentication_error',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              description: 'Authentication error response',
              example: {
                code: 'authorization',
                message: 'Access token not set.',
                status: 403,
                type: 'authentication_error',
              },
              required: ['code', 'message', 'status', 'type'],
              title: 'AuthenticationError',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdFeedsIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/feeds/{id}/settings',
  tags: ['Feeds', 'Users'],
  summary: 'Get feed settings',
  description: 'Returns the feed settings for a user.',
  operationId: 'getUserInAppFeedSettings',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserInAppFeedSettingsResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1UsersUserIdGuidesEngagementsResetRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/engagements/reset',
  tags: ['Guides', 'Users'],
  summary: 'Reset guide engagement',
  description:
    "Resets the engagement state of a guide for a user, removing the guide's engagement log entry so the next interaction creates a fresh engagement.",
  operationId: 'resetUserGuideEngagement',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideResetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1ObjectsCollectionObjectIdPreferencesRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{object_id}/preferences',
  tags: ['Objects', 'Preferences'],
  summary: 'List preference sets',
  description: 'Returns a paginated list of preference sets for the specified object.',
  operationId: 'listObjectPreferenceSets',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(PreferenceSetSchema)
            .openapi({
              description: 'A list of preference sets for the object',
              example: [
                {
                  categories: {
                    marketing: false,
                    transactional: { channel_types: { email: false } },
                  },
                  channel_types: {
                    email: true,
                    push: false,
                    sms: {
                      conditions: [
                        {
                          argument: 'US',
                          operator: 'equal_to',
                          variable: 'recipient.country_code',
                        },
                      ],
                    },
                  },
                  commercial_subscribed: true,
                  id: 'default',
                  workflows: null,
                },
              ],
              title: 'ListObjectPreferenceSetsResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1MessagesMessageIdActivitiesRoute = createRoute({
  method: 'get',
  path: '/v1/messages/{message_id}/activities',
  tags: ['Messages'],
  summary: 'List activities',
  description: 'Returns a paginated list of activities for the specified message.',
  operationId: 'listMessageActivities',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fetch activities for.',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      trigger_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The trigger data to filter activities by.',
            in: 'query',
            name: 'trigger_data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListActivitiesResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1TenantsRoute = createRoute({
  method: 'get',
  path: '/v1/tenants',
  tags: ['Tenants'],
  summary: 'List tenants',
  description: 'List tenants for the current environment.',
  operationId: 'listTenants',
  request: {
    query: z.object({
      tenant_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tenants by ID.',
            in: 'query',
            name: 'tenant_id',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tenants by name.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListTenantsResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/workflows',
  tags: ['Objects', 'Preferences'],
  summary: 'Update workflows in preference set',
  description: "Updates the workflow preferences for an object's preference set.",
  operationId: 'updateObjectPreferenceWorkflows',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1ObjectsCollectionIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{id}/messages',
  tags: ['Messages', 'Objects'],
  summary: 'List messages',
  description:
    'Returns a paginated list of messages for a specific object in the given collection. Allows filtering by message status and provides various sorting options.',
  operationId: 'listMessagesForObject',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding tenant.',
            example: 'tenant_123',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items with the corresponding channel ID.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'channel_id',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'queued',
                'sent',
                'delivered',
                'delivery_attempted',
                'undelivered',
                'not_sent',
                'bounced',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given delivery status.',
            example: ['delivered'],
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              items: {
                enum: [
                  'queued',
                  'sent',
                  'delivered',
                  'delivery_attempted',
                  'undelivered',
                  'not_sent',
                  'bounced',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      engagement_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum([
                'seen',
                'unseen',
                'read',
                'unread',
                'archived',
                'unarchived',
                'link_clicked',
                'interacted',
              ])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages with the given engagement status.',
            example: ['unread'],
            in: 'query',
            name: 'engagement_status',
            required: false,
            schema: {
              items: {
                enum: [
                  'seen',
                  'unseen',
                  'read',
                  'unread',
                  'archived',
                  'unarchived',
                  'link_clicked',
                  'interacted',
                ],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      message_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.',
            example: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
            in: 'query',
            name: 'message_ids',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages related to any of the provided categories.',
            example: ['workflow_123'],
            in: 'query',
            name: 'workflow_categories',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to messages triggered by the given workflow key.',
            example: 'comment-created',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.',
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_recipient_run_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: "Limits the results to messages for a specific recipient's workflow run.",
            example: '123e4567-e89b-12d3-a456-426614174000',
            in: 'query',
            name: 'workflow_recipient_run_id',
            required: false,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      trigger_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.',
            example: '{"comment_id": "123"}',
            in: 'query',
            name: 'trigger_data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            example: 'projects',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            example: 'project-123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1NotifyRoute = createRoute({
  method: 'post',
  path: '/v1/notify',
  tags: ['Workflow Triggers'],
  summary: 'Trigger workflow',
  description: 'Triggers a workflow with the given key, actor, recipients, and optional data.',
  operationId: 'triggerWorkflow (2)',
  request: {
    body: {
      description: 'Notify Payload',
      content: { 'application/json': { schema: NotifyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NotifyResponseSchema } } },
  },
  callbacks: {},
})

export const postV1MessagesBatchArchivedRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/archived',
  tags: ['Messages'],
  summary: 'Mark messages as archived',
  description:
    'Marks the given messages as archived. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.',
  operationId: 'batchMarkMessagesAsArchived',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesStatusRequestSchema,
          example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: '2025-01-01T00:04:00Z',
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'archived'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: '2025-01-01T00:04:00Z',
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'archived'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdFeedsIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/feeds/{id}',
  tags: ['Feeds', 'Users'],
  summary: 'List feed items',
  description:
    'Returns a paginated list of feed items for a user in reverse chronological order, including metadata about the feed. If the user has not yet been identified within Knock, an empty feed will be returned.\n\nYou can customize the response using [response filters](/integrations/in-app/knock#customizing-api-response-content) to exclude or only include specific properties on your resources.\n\n**Notes:**\n* When making this call from a client-side environment, use your publishable key along with a user token.\n* This endpoint’s rate limit is always scoped per-user and per-environment. This is true even for requests made without a signed user token.\n* Any [attachments](/integrations/email/attachments) present in trigger data are automatically excluded from both the `data` and `activities` fields of `UserInAppFeedResponse`.\n',
  operationId: 'listUserInAppFeedItems',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      status: z
        .enum(['unread', 'read', 'unseen', 'seen', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The status of the feed items.',
            example: 'unread',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: ['unread', 'read', 'unseen', 'seen', 'all'],
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The workflow key associated with the message in the feed.',
            example: 'my_source',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The tenant associated with the feed items.',
            example: 'my_tenant',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      has_tenant: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether the feed items have a tenant.',
            example: true,
            in: 'query',
            name: 'has_tenant',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow_categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The workflow categories of the feed items.',
            example: ['my_workflow_category'],
            in: 'query',
            name: 'workflow_categories',
            required: false,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      archived: z
        .enum(['exclude', 'include', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The archived status of the feed items.',
            example: 'exclude',
            in: 'query',
            name: 'archived',
            required: false,
            schema: {
              enum: ['exclude', 'include', 'only'],
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      trigger_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The trigger data of the feed items (as a JSON string).',
            example: '{ "key": "value" }',
            in: 'query',
            name: 'trigger_data',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The locale to render the feed items in. Must be in the IETF 5646 format (e.g. `en-US`). When not provided, will default to the locale that the feed items were rendered in. Only available for enterprise plan customers using custom translations.',
            example: 'en-US',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-separated list of field paths to exclude from the response. Use dot notation for nested fields (e.g., `entries.archived_at`). Limited to 3 levels deep.',
            example: 'entries.archived_at,entries.clicked_at',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      mode: z
        .enum(['compact', 'rich'])
        .default('rich')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The mode to render the feed items in. Can be `compact` or `rich`. Defaults to `rich`. When `mode` is `compact`, feed items will not have `activities` and `total_activities` fields; the `data` field will not include nested arrays and objects; and the `actors` field will only have up to one actor.',
            example: 'compact',
            in: 'query',
            name: 'mode',
            required: false,
            schema: {
              default: 'rich',
              enum: ['compact', 'rich'],
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.gte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted after or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.gte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lt': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lt',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'inserted_at.lte': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to items inserted before or on the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'inserted_at.lte',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserInAppFeedResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1MessagesBatchUnarchivedRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/unarchived',
  tags: ['Messages'],
  summary: 'Mark messages as unarchived',
  description:
    'Marks the given messages as unarchived. This reverses the `archived` state. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.',
  operationId: 'batchMarkMessagesAsUnarchived',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesStatusRequestSchema,
          example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1ProvidersMsTeamsChannelIdTeamsRoute = createRoute({
  method: 'get',
  path: '/v1/providers/ms-teams/{channel_id}/teams',
  tags: ['Providers', 'Microsoft Teams'],
  summary: 'List teams',
  description:
    'Get a list of teams belonging to the Microsoft Entra tenant. By default, archived and private channels are excluded from the results.',
  operationId: 'listTeamsForMsTeamsProvider',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Microsoft Teams channel to get teams for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      ms_teams_tenant_object: z
        .string()
        .openapi({
          param: {
            description:
              'A JSON encoded string containing the Microsoft Teams tenant object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'ms_teams_tenant_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$filter': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to filter teams.',
            example: "displayName eq 'My Team'",
            in: 'query',
            name: 'query_options.$filter',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$select': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to select fields on a team.',
            example: 'id,displayName,description',
            in: 'query',
            name: 'query_options.$select',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$top': z
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
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to limit the number of teams returned.',
            example: 10,
            in: 'query',
            name: 'query_options.$top',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.$skiptoken': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to retrieve the next page of results.',
            in: 'query',
            name: 'query_options.$skiptoken',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TeamsForMsTeamsProviderResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1UsersUserIdMergeRoute = createRoute({
  method: 'post',
  path: '/v1/users/{user_id}/merge',
  tags: ['Users'],
  summary: 'Merge users',
  description:
    'Merge two users together, where the user specified with the `from_user_id` param will be merged into the user specified by `user_id`.',
  operationId: 'mergeUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user to merge into.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': { schema: MergeUserRequestSchema, example: { from_user_id: 'user_1' } },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
  callbacks: {},
})

export const postV1ObjectsCollectionBulkSubscriptionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/objects/{collection}/bulk/subscriptions/delete',
  tags: ['Objects', 'Subscriptions', 'Bulk operations'],
  summary: 'Bulk delete subscriptions',
  description:
    "Delete subscriptions for many objects in a single collection type. If a subscription for an object in the collection doesn't exist, it will be skipped.",
  operationId: 'bulkDeleteSubscriptions',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            example: 'projects',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkDeleteSubscriptionsRequestSchema,
          example: {
            subscriptions: [
              {
                id: 'subscribed-to-object-1',
                recipients: [
                  { collection: 'projects', id: 'subscriber-project-1' },
                  'subscriber-user-1',
                ],
              },
              { id: 'subscribed-to-object-2', recipients: ['subscriber-user-2'] },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdCategoriesRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/categories',
  tags: ['Users', 'Preferences'],
  summary: 'Update categories in user preference set',
  description:
    'Updates the categories in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceCategories',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1ObjectsCollectionRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}',
  tags: ['Objects'],
  summary: 'List objects in a collection',
  description:
    'Returns a paginated list of objects from the specified collection. Optionally includes preference data for the objects.',
  operationId: 'listObjects',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preferences').openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Includes preferences of the objects in the response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              items: {
                enum: ['preferences'],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListObjectsResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1UsersRoute = createRoute({
  method: 'get',
  path: '/v1/users',
  tags: ['Users'],
  summary: 'List users',
  description:
    'Retrieve a paginated list of users in the environment. Defaults to 50 users per page.',
  operationId: 'listUsers',
  request: {
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preferences').openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Associated resources to include in the response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              items: {
                enum: ['preferences'],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort by insertion order. Pass `asc` for oldest first, or `desc` for newest first. Defaults to oldest first when omitted.',
            in: 'query',
            name: 'order',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1WorkflowRecipientRunsIdRoute = createRoute({
  method: 'get',
  path: '/v1/workflow_recipient_runs/{id}',
  tags: ['Workflow recipient runs'],
  summary: 'Get a workflow recipient run',
  description: 'Returns a single workflow recipient run with its associated events.',
  operationId: 'getWorkflowRecipientRun',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the workflow recipient run (per-recipient).',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: WorkflowRecipientRunDetailSchema } },
    },
  },
  callbacks: {},
})

export const putV1MessagesMessageIdSeenRoute = createRoute({
  method: 'put',
  path: '/v1/messages/{message_id}/seen',
  tags: ['Messages'],
  summary: 'Mark message as seen',
  description:
    'Marks a message as `seen`. This indicates that the user has viewed the message in their feed or inbox. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageSeen',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdSeenRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/seen',
  tags: ['Messages'],
  summary: 'Mark message as unseen',
  description:
    'Marks a message as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageUnseen (2)',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: [],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: null,
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1ProvidersSlackChannelIdAuthCheckRoute = createRoute({
  method: 'get',
  path: '/v1/providers/slack/{channel_id}/auth_check',
  tags: ['Providers', 'Slack'],
  summary: 'Check auth',
  description: 'Check if a Slack channel is authenticated.',
  operationId: 'slackProviderAuthCheck',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Slack channel to check.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      access_token_object: z
        .string()
        .openapi({
          param: {
            description: 'A JSON encoded string containing the access token object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'access_token_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SlackAuthCheckResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1UsersBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/users/bulk/delete',
  tags: ['Users', 'Bulk operations'],
  summary: 'Bulk delete users',
  description: 'Permanently deletes up to 1,000 users at a time.',
  operationId: 'bulkDeleteUsers',
  request: {
    body: {
      description: 'Params',
      content: { 'application/json': { schema: BulkDeleteUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const postV1NotifyCancelRoute = createRoute({
  method: 'post',
  path: '/v1/notify/cancel',
  tags: ['Workflow Triggers'],
  summary: 'Cancel workflow',
  description: 'Cancels a previously triggered workflow using the provided cancellation key.',
  operationId: 'cancelWorkflow',
  request: {
    body: {
      description: 'Cancel Payload',
      content: { 'application/json': { schema: CancelRequestSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/channel_types/{type}',
  tags: ['Objects', 'Preferences'],
  summary: 'Update a channel type preference',
  description: "Updates a specific channel type preference for an object's preference set.",
  operationId: 'updateObjectPreferenceChannelType',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/channel_types',
  tags: ['Objects', 'Preferences'],
  summary: 'Update channel types in preference set',
  description: "Updates the channel type preferences for an object's preference set.",
  operationId: 'updateObjectPreferenceChannelTypes',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const postV1UsersBulkIdentifyRoute = createRoute({
  method: 'post',
  path: '/v1/users/bulk/identify',
  tags: ['Users', 'Bulk operations'],
  summary: 'Bulk identify users',
  description:
    'Identifies multiple users in a single operation. Allows creating or updating up to 1,000 users in a single batch with various properties, preferences, and channel data.',
  operationId: 'bulkIdentifyUsers',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkIdentifyUsersRequestSchema,
          example: {
            users: [
              {
                email: 'jane@ingen.net',
                id: 'user_1',
                name: 'Jane Doe',
                timezone: 'America/New_York',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const postV1TenantsBulkSetRoute = createRoute({
  method: 'post',
  path: '/v1/tenants/bulk/set',
  tags: ['Tenants', 'Bulk operations'],
  summary: 'Bulk set tenants',
  description: 'Set or update up to 1,000 tenants in a single operation.',
  operationId: 'bulkSetTenants',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkSetTenantsRequestSchema,
          example: { tenants: [{ id: 'tenant_1', name: 'Acme Corp, Inc.' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const getV1AudiencesKeyMembersRoute = createRoute({
  method: 'get',
  path: '/v1/audiences/{key}/members',
  tags: ['Audiences'],
  summary: 'List members',
  description: 'Returns a paginated list of members for the specified audience.',
  operationId: 'listAudienceMembers',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The key of the audience.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAudienceMembersResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1AudiencesKeyMembersRoute = createRoute({
  method: 'post',
  path: '/v1/audiences/{key}/members',
  tags: ['Audiences'],
  summary: 'Add members',
  description: 'Adds one or more members to the specified audience.',
  operationId: 'addAudienceMembers',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The key of the audience.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      create_audience: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Create the audience if it does not exist.',
            in: 'query',
            name: 'create_audience',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: AddAudienceMembersRequestSchema,
          example: {
            members: [
              {
                tenant: 'ingen_isla_nublar',
                user: { email: 'ellie@ingen.net', id: 'dr_sattler', name: 'Dr. Ellie Sattler' },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const deleteV1AudiencesKeyMembersRoute = createRoute({
  method: 'delete',
  path: '/v1/audiences/{key}/members',
  tags: ['Audiences'],
  summary: 'Remove members',
  description: 'Removes one or more members from the specified audience.',
  operationId: 'removeAudienceMembers',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The key of the audience.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: RemoveAudienceMembersRequestSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1MessagesMessageIdArchivedRoute = createRoute({
  method: 'put',
  path: '/v1/messages/{message_id}/archived',
  tags: ['Messages'],
  summary: 'Archive message',
  description:
    'Archives a message for the user. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.',
  operationId: 'archiveMessage',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: '2025-01-01T00:04:00Z',
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen', 'archived'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdArchivedRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/archived',
  tags: ['Messages'],
  summary: 'Unarchive message',
  description:
    'Removes a message from the archived state, making it visible in the default message list in the feed again.',
  operationId: 'unarchiveMessage (2)',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const postV1WorkflowsKeyTriggerRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/{key}/trigger',
  tags: ['Workflows'],
  summary: 'Trigger workflow',
  description:
    'Trigger a workflow (specified by the key) to run for the given recipients, using the parameters provided. Returns an identifier for the workflow run request. All workflow runs are executed asynchronously. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.',
  operationId: 'triggerWorkflow',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'Key of the workflow to trigger.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: TriggerWorkflowRequestSchema,
          example: {
            actor: 'mr_dna',
            cancellation_key: 'isla_nublar_incident_1993',
            data: {
              affected_areas: ['visitor_center', 'raptor_pen', 'trex_paddock'],
              attraction_id: 'paddock_rex_01',
              evacuation_protocol: 'active',
              message: 'Life finds a way',
              severity: 'critical',
              system_status: 'fences_failing',
            },
            recipients: ['dr_grant', 'dr_sattler', 'dr_malcolm'],
            settings: { sandbox_mode: true, skip_delay: true },
            tenant: 'ingen_isla_nublar',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TriggerWorkflowResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/{message_id}/archived',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as archived',
  description:
    'Records that a guide has been archived by a user, triggering any associated archived events.',
  operationId: 'markUserGuideAsArchived',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideArchivedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1TenantsBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/tenants/bulk/delete',
  tags: ['Tenants', 'Bulk operations'],
  summary: 'Bulk delete tenants',
  description:
    'Delete up to 1,000 tenants at a time in a single operation. This operation cannot be undone.',
  operationId: 'bulkDeleteTenants',
  request: {
    query: z.object({
      tenant_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .openapi({
          param: {
            description: 'The IDs of the tenants to delete.',
            in: 'query',
            name: 'tenant_ids',
            required: true,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdUnreadRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/unread',
  tags: ['Messages'],
  summary: 'Mark message as unread',
  description:
    'Marks a message as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageUnread (2)',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}',
  tags: ['Users'],
  summary: 'Get user',
  description: 'Retrieve a specific user by their ID.',
  operationId: 'getUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user to retrieve.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
  callbacks: {},
})

export const putV1UsersUserIdRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}',
  tags: ['Users'],
  summary: 'Identify user',
  description:
    'Create or update a user with the provided identification data. When you identify an existing user, the system merges the properties you specify with what is currently set on the user, updating only the fields included in your requests.',
  operationId: 'identifyUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: IdentifyUserRequestSchema,
          example: {
            channel_data: {
              '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] },
            },
            email: 'ian.malcolm@chaos.theory',
            name: 'Dr. Ian Malcolm',
            preferences: {
              default: {
                channel_types: { email: true },
                workflows: { 'dinosaurs-loose': { channel_types: { email: true } } },
              },
            },
            timezone: 'America/New_York',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
  callbacks: {},
})

export const deleteV1UsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{user_id}',
  tags: ['Users'],
  summary: 'Delete user',
  description: 'Permanently delete a user and all associated data.',
  operationId: 'deleteUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user to delete.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const postV1MessagesBatchInteractedRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/interacted',
  tags: ['Messages'],
  summary: 'Mark messages as interacted',
  description:
    'Marks the given messages as interacted with by the user. This can include any user action on the message, with optional metadata about the specific interaction. Cannot include more than 5 key-value pairs, must not contain nested data. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'batchMarkMessagesAsInteracted',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesInteractedRequestSchema,
          example: { message_ids: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'], metadata: { key: 'value' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'interacted'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: '2025-01-01T00:03:00Z',
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'interacted'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: '2025-01-01T00:03:00Z',
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1TenantsIdRoute = createRoute({
  method: 'get',
  path: '/v1/tenants/{id}',
  tags: ['Tenants'],
  summary: 'Get a tenant',
  description: 'Get a tenant by ID.',
  operationId: 'getTenant',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the tenant.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      resolve_full_preference_settings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "When true, merges environment-level default preferences into the tenant's `settings.preference_set` field before returning the response. Defaults to false.",
            in: 'query',
            name: 'resolve_full_preference_settings',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TenantSchema } } },
  },
  callbacks: {},
})

export const putV1TenantsIdRoute = createRoute({
  method: 'put',
  path: '/v1/tenants/{id}',
  tags: ['Tenants'],
  summary: 'Set a tenant',
  description:
    'Sets a tenant within an environment, performing an upsert operation. Any existing properties will be merged with the incoming properties.',
  operationId: 'setTenant',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the tenant.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      resolve_full_preference_settings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "When true, merges environment-level default preferences into the tenant's `settings.preference_set` field before returning the response. Defaults to false.",
            in: 'query',
            name: 'resolve_full_preference_settings',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Tenant',
      content: {
        'application/json': {
          schema: SetTenantRequestSchema,
          example: {
            name: 'Jurassic Park',
            settings: {
              branding: {
                icon_url: 'https://example.com/trex_silhouette_icon.png',
                logo_url: 'https://example.com/amber_fossil_logo.png',
                primary_color: '#DF1A22',
                primary_color_contrast: '#FFDE00',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SetTenantResponseSchema } },
    },
  },
  callbacks: {},
})

export const deleteV1TenantsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tenants/{id}',
  tags: ['Tenants'],
  summary: 'Delete a tenant',
  description: 'Delete a tenant and all associated data. This operation cannot be undone.',
  operationId: 'deleteTenant',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the tenant.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesSeenRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/seen',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as seen',
  description:
    'Records that a guide has been seen by a user, triggering any associated seen events.',
  operationId: 'markUserGuideAsSeen (2)',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: GuideSeenRequestSchema,
          example: {
            channel_id: '123e4567-e89b-12d3-a456-426614174000',
            content: {
              body: "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
              title: 'DNA Lab Tour Available',
            },
            data: { next_time: '14:30', spots_left: 8, tour_id: 'dna_lab_tour' },
            guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
            guide_key: 'tour_notification',
            guide_step_ref: 'lab_tours',
            tenant: 'ingen_isla_nublar',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdUnseenRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/unseen',
  tags: ['Messages'],
  summary: 'Mark message as unseen',
  description:
    'Marks a message as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageUnseen',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: [],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: null,
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1ObjectsCollectionObjectIdSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{object_id}/subscriptions',
  tags: ['Subscriptions', 'Objects'],
  summary: 'List subscriptions',
  description:
    'List subscriptions for an object. Either list the recipients that subscribe to the provided object, or list the objects that the provided object is subscribed to. Determined by the `mode` query parameter.',
  operationId: 'listSubscriptionsForObject',
  request: {
    query: z.object({
      mode: z
        .enum(['recipient', 'object'])
        .default('object')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mode of the request. `recipient` to list the objects that the provided object is subscribed to, `object` to list the recipients that subscribe to the provided object.',
            in: 'query',
            name: 'mode',
            required: false,
            schema: {
              default: 'object',
              enum: ['recipient', 'object'],
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preferences').openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional fields to include in the response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              items: {
                enum: ['preferences'],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'recipients[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RecipientReferenceSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Recipients to filter by (only used if mode is `object`).',
            in: 'query',
            name: 'recipients[]',
            required: false,
            schema: {
              items: { $ref: '#/components/schemas/RecipientReference' },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'objects[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ObjectReferenceSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Objects to filter by (only used if mode is `recipient`).',
            in: 'query',
            name: 'objects[]',
            required: false,
            schema: {
              items: { $ref: '#/components/schemas/ObjectReference' },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSubscriptionsResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1ObjectsCollectionObjectIdSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/objects/{collection}/{object_id}/subscriptions',
  tags: ['Subscriptions', 'Objects'],
  summary: 'Add subscriptions',
  description:
    'Add subscriptions for an object. If a subscription already exists, it will be updated. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `recipient`.',
  operationId: 'addSubscriptionsForObject',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: UpsertSubscriptionsRequestSchema,
          example: { properties: { key: 'value' }, recipients: ['user_1', 'user_2'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SubscriptionsResponseSchema } },
    },
  },
  callbacks: {},
})

export const deleteV1ObjectsCollectionObjectIdSubscriptionsRoute = createRoute({
  method: 'delete',
  path: '/v1/objects/{collection}/{object_id}/subscriptions',
  tags: ['Subscriptions', 'Objects'],
  summary: 'Delete subscriptions',
  description:
    'Delete subscriptions for the specified recipients from an object. Returns the list of deleted subscriptions.',
  operationId: 'deleteSubscriptionsForObject',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: DeleteSubscriptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SubscriptionsResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}/workflows/{key}',
  tags: ['Objects', 'Preferences'],
  summary: 'Update a workflow preference',
  description: "Updates a specific workflow preference for an object's preference set.",
  operationId: 'updateObjectPreferenceWorkflow',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const putV1MessagesMessageIdReadRoute = createRoute({
  method: 'put',
  path: '/v1/messages/{message_id}/read',
  tags: ['Messages'],
  summary: 'Mark message as read',
  description:
    'Marks a message as `read`. This indicates that the user has read the message content. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageRead',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen', 'read'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: '2025-01-01T00:02:00Z',
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdReadRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/read',
  tags: ['Messages'],
  summary: 'Mark message as unread',
  description:
    'Marks a message as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'markMessageUnread',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdPreferenceCenterConfigRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/preference_center/config',
  tags: ['Users', 'Preference center'],
  summary: 'Get preference center config',
  description: 'Returns the preference center config with environment metadata for the given user.',
  operationId: 'getPreferenceCenterConfig',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PreferenceCenterConfigWithMetadataSchema } },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdChannelDataChannelIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Users'],
  summary: 'Get channel data',
  description: 'Retrieves the channel data for a specific user and channel ID.',
  operationId: 'getUserChannelData',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ChannelDataSchema } } },
  },
  callbacks: {},
})

export const putV1UsersUserIdChannelDataChannelIdRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Users'],
  summary: 'Set channel data',
  description:
    'Updates or creates channel data for a specific user and channel ID. If no user exists in the current environment for the given `user_id`, Knock will create the user entry as part of this request.',
  operationId: 'setUserChannelData',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: ChannelDataRequestSchema,
          example: { data: { tokens: ['push_token_1'] } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ChannelDataSchema } } },
  },
  callbacks: {},
})

export const deleteV1UsersUserIdChannelDataChannelIdRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{user_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Users'],
  summary: 'Unset channel data',
  description: 'Deletes channel data for a specific user and channel ID.',
  operationId: 'unsetUserChannelData',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdWorkflowsKeyRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}/workflows/{key}',
  tags: ['Users', 'Preferences'],
  summary: 'Update workflow in user preference set',
  description:
    'Updates a single workflow in a specific user preference set. This operation is deprecated.',
  operationId: 'updateUserPreferenceWorkflow',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
  deprecated: true,
})

export const getV1SchedulesRoute = createRoute({
  method: 'get',
  path: '/v1/schedules',
  tags: ['Schedules'],
  summary: 'List schedules',
  description:
    'Returns a paginated list of schedules for the current environment, filtered by workflow and optionally by recipients and tenant.',
  operationId: 'listSchedules',
  request: {
    query: z.object({
      workflow: z
        .string()
        .openapi({
          param: {
            description: 'Filter by workflow key.',
            in: 'query',
            name: 'workflow',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'recipients[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RecipientReferenceSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by recipient references.',
            in: 'query',
            name: 'recipients[]',
            required: false,
            schema: {
              description: 'A list of recipient references to filter by.',
              items: { $ref: '#/components/schemas/RecipientReference' },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          description: 'A list of recipient references to filter by.',
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by tenant ID.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1SchedulesRoute = createRoute({
  method: 'put',
  path: '/v1/schedules',
  tags: ['Schedules'],
  summary: 'Update schedules',
  description:
    'Updates one or more existing schedules with new timing, data, or other properties. All specified schedule IDs will be updated with the same values. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.',
  operationId: 'updateSchedules',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: UpdateSchedulesRequestSchema,
          example: {
            actor: null,
            data: { key: 'value' },
            ending_at: null,
            repeats: [
              {
                __typename: 'ScheduleRepeat',
                day_of_month: null,
                days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                frequency: 'daily',
                hours: null,
                interval: 1,
                minutes: null,
              },
            ],
            schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
            scheduled_at: null,
            tenant: 'acme_corp',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1SchedulesRoute = createRoute({
  method: 'post',
  path: '/v1/schedules',
  tags: ['Schedules'],
  summary: 'Create schedules',
  description:
    'Creates one or more schedules for a workflow with the specified recipients, timing, and data. Schedules can be one-time or recurring. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.',
  operationId: 'createSchedules',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: CreateSchedulesRequestSchema,
          example: {
            data: { key: 'value' },
            ending_at: null,
            recipients: ['user_123'],
            repeats: [
              {
                __typename: 'ScheduleRepeat',
                day_of_month: null,
                days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                frequency: 'daily',
                hours: null,
                interval: 1,
                minutes: null,
              },
            ],
            scheduled_at: null,
            tenant: 'acme_corp',
            workflow: 'comment-created',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const deleteV1SchedulesRoute = createRoute({
  method: 'delete',
  path: '/v1/schedules',
  tags: ['Schedules'],
  summary: 'Delete schedules',
  description:
    'Permanently deletes one or more schedules identified by the provided schedule IDs. This operation cannot be undone.',
  operationId: 'deleteSchedules',
  request: {
    body: {
      description: 'Params',
      content: { 'application/json': { schema: DeleteSchedulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1ObjectsCollectionObjectIdPreferencesIdRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}',
  tags: ['Objects', 'Preferences'],
  summary: 'Get object preference set',
  description: 'Returns the preference set for the specified object and preference set `id`.',
  operationId: 'getObjectPreferenceSet',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdPreferencesIdRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}',
  tags: ['Objects', 'Preferences'],
  summary: 'Update a preference set',
  description:
    "Sets preferences within the given preference set. By default, this is a destructive operation and will replace any existing preferences with the preferences given. Use '__persistence_strategy': 'merge' to merge with existing preferences instead. If no object exists in the current environment for the given `:collection` and `:object_id`, Knock will create the object as part of this request. The preference set `:id` can be either `default` or a `tenant.id`. Learn more about [per-tenant preferences](/preferences/tenant-preferences).",
  operationId: 'updateObjectPreferenceSet',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: PreferenceSetRequestSchema,
          example: {
            __persistence_strategy__: 'merge',
            categories: { marketing: false, transactional: { channel_types: { email: false } } },
            channel_types: { email: true },
            channels: {
              '2f641633-95d3-4555-9222-9f1eb7888a80': {
                conditions: [
                  { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                ],
              },
              'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
            },
            commercial_subscribed: true,
            workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
})

export const deleteV1ObjectsCollectionObjectIdPreferencesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/objects/{collection}/{object_id}/preferences/{id}',
  tags: ['Objects', 'Preferences'],
  summary: 'Delete object preference set',
  description: 'Unsets the preference set for the object, removing it entirely.',
  operationId: 'deleteObjectPreferenceSet',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesMessageIdSeenRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/{message_id}/seen',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as seen',
  description:
    'Records that a guide has been seen by a user, triggering any associated seen events.',
  operationId: 'markUserGuideAsSeen',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: GuideSeenRequestSchema,
          example: {
            channel_id: '123e4567-e89b-12d3-a456-426614174000',
            content: {
              body: "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
              title: 'DNA Lab Tour Available',
            },
            data: { next_time: '14:30', spots_left: 8, tour_id: 'dna_lab_tour' },
            guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
            guide_key: 'tour_notification',
            guide_step_ref: 'lab_tours',
            tenant: 'ingen_isla_nublar',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1ObjectsCollectionBulkSetRoute = createRoute({
  method: 'post',
  path: '/v1/objects/{collection}/bulk/set',
  tags: ['Objects', 'Bulk operations'],
  summary: 'Bulk set objects',
  description: 'Bulk sets up to 1,000 objects at a time in the specified collection.',
  operationId: 'bulkSetObjects',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkSetObjectsRequestSchema,
          example: { objects: [{ id: 'project_1', name: 'My project' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const postV1IntegrationsHightouchEmbeddedDestinationRoute = createRoute({
  method: 'post',
  path: '/v1/integrations/hightouch/embedded-destination',
  tags: ['Integrations'],
  summary: 'Process a Hightouch RPC request',
  description: 'Processes a Hightouch embedded destination RPC request.',
  operationId: 'processHightouchRpcRequest',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'The unique identifier for the RPC request.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              jsonrpc: z
                .string()
                .openapi({
                  description: 'The JSON-RPC version.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              method: z
                .string()
                .openapi({
                  description: 'The method name to execute.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              params: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description: 'The parameters for the method.',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              required: ['id', 'method', 'jsonrpc'],
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The request ID.', 'x-struct': null, 'x-validate': null }),
              result: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description: 'The result of the RPC call.',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({ 'x-struct': null, 'x-validate': null, required: [] }),
        },
      },
    },
  },
  callbacks: {},
})

export const postV1MessagesBatchUnseenRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/unseen',
  tags: ['Messages'],
  summary: 'Mark messages as unseen',
  description:
    'Marks the given messages as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'batchMarkMessagesAsUnseen',
  request: {
    body: {
      description: 'Params',
      content: { 'application/json': { schema: BatchMessagesStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: [],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: null,
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: [],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: null,
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1ObjectsCollectionIdSchedulesRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{id}/schedules',
  tags: ['Schedules', 'Objects'],
  summary: 'List object schedules',
  description: 'Returns a paginated list of schedules for an object.',
  operationId: 'listObjectSchedules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the object to list schedules for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection of the object to list schedules for.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter schedules by tenant id.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter schedules by workflow id.',
            in: 'query',
            name: 'workflow',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1SchedulesBulkCreateRoute = createRoute({
  method: 'post',
  path: '/v1/schedules/bulk/create',
  tags: ['Objects', 'Bulk operations'],
  summary: 'Create schedules in bulk',
  description:
    'Bulk creates up to 1,000 schedules at a time. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.',
  operationId: 'bulkCreateSchedules',
  request: {
    body: {
      description: 'Schedule bulk creation request',
      content: {
        'application/json': {
          schema: BulkCreateSchedulesRequestSchema,
          example: {
            schedules: [
              {
                data: { key: 'value' },
                ending_at: null,
                recipient: 'dnedry',
                repeats: [
                  {
                    __typename: 'ScheduleRepeat',
                    day_of_month: null,
                    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                    frequency: 'daily',
                    hours: null,
                    interval: 1,
                    minutes: null,
                  },
                ],
                scheduled_at: null,
                tenant: 'acme_corp',
                workflow: 'comment-created',
              },
              {
                data: { key: 'value' },
                ending_at: null,
                recipient: 'esattler',
                repeats: [
                  {
                    __typename: 'ScheduleRepeat',
                    day_of_month: null,
                    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                    frequency: 'daily',
                    hours: null,
                    interval: 1,
                    minutes: null,
                  },
                ],
                scheduled_at: null,
                tenant: 'acme_corp',
                workflow: 'comment-created',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute = createRoute({
  method: 'get',
  path: '/v1/objects/{collection}/{object_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Objects'],
  summary: 'Get channel data',
  description: 'Returns the channel data for the specified object and channel.',
  operationId: 'getObjectChannelData',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ChannelDataSchema } } },
  },
  callbacks: {},
})

export const putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute = createRoute({
  method: 'put',
  path: '/v1/objects/{collection}/{object_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Objects'],
  summary: 'Set channel data',
  description:
    'Sets the channel data for the specified object and channel. If no object exists in the current environment for the given `collection` and `object_id`, Knock will create the object as part of this request.',
  operationId: 'setObjectChannelData',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: ChannelDataRequestSchema,
          example: { data: { tokens: ['push_token_1'] } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ChannelDataSchema } } },
  },
  callbacks: {},
})

export const deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute = createRoute({
  method: 'delete',
  path: '/v1/objects/{collection}/{object_id}/channel_data/{channel_id}',
  tags: ['Channel data', 'Objects'],
  summary: 'Unset channel data',
  description: 'Unsets the channel data for the specified object and channel.',
  operationId: 'unsetObjectChannelData',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the object.',
            in: 'path',
            name: 'object_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique identifier for the channel.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const postV1MessagesBatchUnreadRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/unread',
  tags: ['Messages'],
  summary: 'Mark messages as unread',
  description:
    'Marks the given messages as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'batchMarkMessagesAsUnread',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesStatusRequestSchema,
          example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1ProvidersSlackChannelIdChannelsRoute = createRoute({
  method: 'get',
  path: '/v1/providers/slack/{channel_id}/channels',
  tags: ['Providers', 'Slack'],
  summary: 'List channels',
  description: 'List Slack channels for a Slack workspace.',
  operationId: 'listChannelsForSlackProvider',
  request: {
    params: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Knock Slack channel to get channels for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      access_token_object: z
        .string()
        .openapi({
          param: {
            description: 'A JSON encoded string containing the access token object reference.',
            example: '{"collection":"projects","object_id":"project_123"}',
            in: 'query',
            name: 'access_token_object',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.cursor': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the cursor parameter to a next_cursor attribute returned by a previous request\'s response_metadata. Default value fetches the first "page" of the collection.',
            in: 'query',
            name: 'query_options.cursor',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.limit': z
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
            description: 'The maximum number of channels to return. Defaults to 200.',
            in: 'query',
            name: 'query_options.limit',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.exclude_archived': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true to exclude archived channels from the list. Defaults to `true` when not explicitly provided.',
            in: 'query',
            name: 'query_options.exclude_archived',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.types': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mix and match channel types by providing a comma-separated list of any combination of public_channel, private_channel, mpim, im. Defaults to `"public_channel,private_channel"`. If the user\'s Slack ID is unavailable, this option is ignored and only public channels are returned.',
            in: 'query',
            name: 'query_options.types',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      'query_options.team_id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Encoded team ID (T1234) to list channels in, required if org token is used.',
            in: 'query',
            name: 'query_options.team_id',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ChannelsForSlackProviderResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .openapi({
                  description: 'The error code.',
                  example: 'authorization',
                  'x-struct': null,
                  'x-validate': null,
                }),
              message: z
                .string()
                .openapi({
                  description: 'The error message.',
                  example: 'Access token not set.',
                  'x-struct': null,
                  'x-validate': null,
                }),
              status: z
                .int()
                .openapi({
                  description: 'The HTTP status code.',
                  example: 403,
                  'x-struct': null,
                  'x-validate': null,
                }),
              type: z
                .string()
                .openapi({
                  description: 'The error type.',
                  example: 'authentication_error',
                  'x-struct': null,
                  'x-validate': null,
                }),
            })
            .openapi({
              description: 'Authentication error response',
              example: {
                code: 'authorization',
                message: 'Access token not set.',
                status: 403,
                type: 'authentication_error',
              },
              required: ['code', 'message', 'status', 'type'],
              title: 'AuthenticationError',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1WorkflowRecipientRunsRoute = createRoute({
  method: 'get',
  path: '/v1/workflow_recipient_runs',
  tags: ['Workflow recipient runs'],
  summary: 'List workflow recipient runs',
  description: 'Returns a paginated list of workflow recipient runs for the current environment.',
  operationId: 'listWorkflowRecipientRuns',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      workflow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to workflow recipient runs for the given workflow key.',
            in: 'query',
            name: 'workflow',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum(['queued', 'processing', 'paused', 'completed', 'cancelled'])
              .openapi({ 'x-struct': null, 'x-validate': null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to workflow recipient runs with the given status.',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              items: {
                enum: ['queued', 'processing', 'paused', 'completed', 'cancelled'],
                type: 'string',
                'x-struct': null,
                'x-validate': null,
              },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to workflow recipient runs for the given tenant.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      has_errors: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the results to workflow recipient runs that have errors.',
            in: 'query',
            name: 'has_errors',
            required: false,
            schema: { type: 'boolean', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      recipient: RecipientReferenceSchema.openapi({
        param: {
          description:
            'Limits the results to workflow recipient runs for the given recipient. Accepts a user ID string or an object reference with `id` and `collection`.',
          in: 'query',
          name: 'recipient',
          required: false,
          schema: { $ref: '#/components/schemas/RecipientReference' },
        },
      }).exactOptional(),
      starting_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to workflow recipient runs started after the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'starting_at',
            required: false,
            schema: { format: 'date-time', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      ending_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to workflow recipient runs started before the given date.',
            example: '2025-01-01T00:00:00Z',
            in: 'query',
            name: 'ending_at',
            required: false,
            schema: { format: 'date-time', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkflowRecipientRunsResponseSchema } },
    },
  },
  callbacks: {},
})

export const postV1MessagesBatchSeenRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/seen',
  tags: ['Messages'],
  summary: 'Mark messages as seen',
  description:
    'Marks the given messages as `seen`. This indicates that the user has viewed the message in their feed or inbox. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'batchMarkMessagesAsSeen',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesStatusRequestSchema,
          example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: null,
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const postV1UsersBulkPreferencesRoute = createRoute({
  method: 'post',
  path: '/v1/users/bulk/preferences',
  tags: ['Users', 'Bulk operations'],
  summary: 'Bulk set preferences',
  description:
    "Bulk sets the preferences for up to 1,000 users at a time. The preference set `:id` can be either `default` or a `tenant.id`. Learn more about [per-tenant preferences](/preferences/tenant-preferences). Note that this is a destructive operation and will replace any existing users' preferences with the preferences sent.",
  operationId: 'bulkSetUserPreferences',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkSetUserPreferencesRequestSchema,
          example: {
            preferences: {
              categories: { marketing: false, transactional: { channel_types: { email: false } } },
              channel_types: { email: true },
              channels: {
                '2f641633-95d3-4555-9222-9f1eb7888a80': {
                  conditions: [
                    { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                  ],
                },
                'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
              },
              commercial_subscribed: true,
              id: 'default',
              workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
            },
            user_ids: ['user_1', 'user_2'],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const postV1MessagesBatchReadRoute = createRoute({
  method: 'post',
  path: '/v1/messages/batch/read',
  tags: ['Messages'],
  summary: 'Mark messages as read',
  description:
    'Marks the given messages as `read`. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).',
  operationId: 'batchMarkMessagesAsRead',
  request: {
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BatchMessagesStatusRequestSchema,
          example: { message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              MessageSchema.openapi({
                example: {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'read'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: '2025-01-01T00:02:00Z',
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
                'x-struct': null,
                'x-validate': null,
              }),
            )
            .openapi({
              description: 'The list of messages that were updated.',
              example: [
                {
                  __typename: 'Message',
                  actors: ['user_123'],
                  archived_at: null,
                  channel_id: '123e4567-e89b-12d3-a456-426614174000',
                  clicked_at: null,
                  data: { foo: 'bar' },
                  engagement_statuses: ['seen', 'read'],
                  id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
                  inserted_at: '2021-01-01T00:00:00Z',
                  interacted_at: null,
                  link_clicked_at: null,
                  metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
                  read_at: '2025-01-01T00:02:00Z',
                  recipient: 'user_123',
                  scheduled_at: null,
                  seen_at: '2025-01-01T00:01:00Z',
                  source: {
                    __typename: 'NotificationSource',
                    categories: ['collaboration'],
                    key: 'comment-created',
                    version_id: '123e4567-e89b-12d3-a456-426614174000',
                  },
                  status: 'sent',
                  tenant: 'tenant_123',
                  updated_at: '2021-01-01T00:00:00Z',
                  workflow: 'comment-created',
                },
              ],
              title: 'BatchListMessagesResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1MessagesBatchContentRoute = createRoute({
  method: 'get',
  path: '/v1/messages/batch/content',
  tags: ['Messages'],
  summary: 'Batch get message contents',
  description: 'Get the contents of multiple messages in a single request.',
  operationId: 'batchGetMessageContents',
  request: {
    query: z.object({
      message_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ 'x-struct': null, 'x-validate': null })),
        )
        .openapi({
          param: {
            description: 'The IDs of the messages to fetch contents of.',
            in: 'query',
            name: 'message_ids',
            required: true,
            schema: {
              items: { type: 'string', 'x-struct': null, 'x-validate': null },
              type: 'array',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(MessageContentsSchema)
            .openapi({
              description: 'A list of `MessageContents`',
              example: [
                {
                  __typename: 'MessageContent',
                  data: {
                    __typename: 'MessageSmsContent',
                    body: 'URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.',
                    to: '+15553982647',
                  },
                  inserted_at: '1993-06-11T20:30:00Z',
                  message_id: '2w3YUpTTOxuDvZFji8OMsKrG176',
                },
              ],
              title: 'BatchGetMessageContentsResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1MessagesMessageIdDeliveryLogsRoute = createRoute({
  method: 'get',
  path: '/v1/messages/{message_id}/delivery_logs',
  tags: ['Messages'],
  summary: 'List delivery logs',
  description: 'Returns a paginated list of delivery logs for the specified message.',
  operationId: 'listMessageDeliveryLogs',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fetch delivery logs for.',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries after.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cursor to fetch entries before.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      page_size: z
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
            description: 'The number of items per page (defaults to 50).',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMessageDeliveryLogsResponseSchema } },
    },
  },
  callbacks: {},
})

export const putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/guides/messages/{message_id}/interacted',
  tags: ['Guides', 'Users'],
  summary: 'Mark guide as interacted',
  description:
    'Records that a user has interacted with a guide, triggering any associated interacted events.',
  operationId: 'markUserGuideAsInteracted',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: { 'application/json': { schema: GuideInteractedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GuideActionResponseSchema } },
    },
  },
  callbacks: {},
})

export const getV1MessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/v1/messages/{message_id}',
  tags: ['Messages'],
  summary: 'Get message',
  description: 'Retrieves a specific message by its ID.',
  operationId: 'getMessage',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MessageSchema } } },
  },
  callbacks: {},
})

export const postV1ChannelsChannelIdMessagesBulkActionRoute = createRoute({
  method: 'post',
  path: '/v1/channels/{channel_id}/messages/bulk/{action}',
  tags: ['Messages', 'Bulk operations'],
  summary: 'Bulk update message statuses for channel',
  description:
    'Bulk update the status of messages for a specific channel. The channel is specified by the `channel_id` parameter. The action to perform is specified by the `action` parameter, where the action is a status change action (e.g. `archive`, `unarchive`).',
  operationId: 'bulkUpdateMessagesForChannel',
  request: {
    params: z.object({
      channel_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the channel to update messages for.',
            in: 'path',
            name: 'channel_id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      action: z
        .enum([
          'seen',
          'unseen',
          'read',
          'unread',
          'archived',
          'unarchived',
          'interacted',
          'archive',
          'unarchive',
          'delete',
        ])
        .openapi({
          param: {
            description: 'The target status to be applied to the messages.',
            in: 'path',
            name: 'action',
            required: true,
            schema: {
              enum: [
                'seen',
                'unseen',
                'read',
                'unread',
                'archived',
                'unarchived',
                'interacted',
                'archive',
                'unarchive',
                'delete',
              ],
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkUpdateMessagesForChannelRequestSchema,
          example: {
            archived: 'include',
            delivery_status: 'delivered',
            engagement_status: 'seen',
            has_tenant: true,
            newer_than: '2024-01-01T00:00:00Z',
            older_than: '2024-01-01T00:00:00Z',
            recipient_ids: ['recipient1', 'recipient2'],
            tenants: ['tenant1', 'tenant2'],
            trigger_data: '{"key":"value"}',
            workflows: ['workflow1', 'workflow2'],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const deleteV1MessagesMessageIdUnarchivedRoute = createRoute({
  method: 'delete',
  path: '/v1/messages/{message_id}/unarchived',
  tags: ['Messages'],
  summary: 'Unarchive message',
  description:
    'Removes a message from the archived state, making it visible in the default message list in the feed again.',
  operationId: 'unarchiveMessage',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the message.',
            example: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageSchema.openapi({
            example: {
              __typename: 'Message',
              actors: ['user_123'],
              archived_at: null,
              channel_id: '123e4567-e89b-12d3-a456-426614174000',
              clicked_at: null,
              data: { foo: 'bar' },
              engagement_statuses: ['seen'],
              id: '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
              inserted_at: '2021-01-01T00:00:00Z',
              interacted_at: null,
              link_clicked_at: null,
              metadata: { external_id: '123e4567-e89b-12d3-a456-426614174000' },
              read_at: null,
              recipient: 'user_123',
              scheduled_at: null,
              seen_at: '2025-01-01T00:01:00Z',
              source: {
                __typename: 'NotificationSource',
                categories: ['collaboration'],
                key: 'comment-created',
                step_ref: 'email_step_1',
                version_id: '123e4567-e89b-12d3-a456-426614174000',
              },
              status: 'sent',
              tenant: 'tenant_123',
              updated_at: '2021-01-01T00:00:00Z',
              workflow: 'comment-created',
            },
            'x-struct': null,
            'x-validate': null,
          }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1BulkOperationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/bulk_operations/{id}',
  tags: ['Bulk operations'],
  summary: 'Get bulk operation',
  description: 'Retrieves a bulk operation (if it exists) and displays the current state of it.',
  operationId: 'getBulkOperation',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the bulk operation to retrieve.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const getV1UsersUserIdPreferencesRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/preferences',
  tags: ['Users', 'Preferences'],
  summary: 'List user preference sets',
  description: 'Retrieves a list of all preference sets for a specific user.',
  operationId: 'listUserPreferenceSets',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(PreferenceSetSchema)
            .openapi({
              description: 'A list of preference sets for the user.',
              example: [
                {
                  categories: {
                    marketing: false,
                    transactional: { channel_types: { email: false } },
                  },
                  channel_types: {
                    email: true,
                    push: false,
                    sms: {
                      conditions: [
                        {
                          argument: 'US',
                          operator: 'equal_to',
                          variable: 'recipient.country_code',
                        },
                      ],
                    },
                  },
                  commercial_subscribed: true,
                  id: 'default',
                  workflows: null,
                },
              ],
              title: 'ListUserPreferenceSetsResponse',
              'x-struct': null,
              'x-validate': null,
            }),
        },
      },
    },
  },
  callbacks: {},
})

export const getV1UsersUserIdPreferencesIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{user_id}/preferences/{id}',
  tags: ['Users', 'Preferences'],
  summary: 'Get user preference set',
  description:
    'Retrieves a specific preference set for a user identified by the preference set ID.',
  operationId: 'getUserPreferenceSet',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    query: z.object({
      tenant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique identifier for the tenant.',
            in: 'query',
            name: 'tenant',
            required: false,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
})

export const putV1UsersUserIdPreferencesIdRoute = createRoute({
  method: 'put',
  path: '/v1/users/{user_id}/preferences/{id}',
  tags: ['Users', 'Preferences'],
  summary: 'Update user preference set',
  description:
    "Updates a complete preference set for a user. By default, this is a destructive operation and will replace any existing preferences with the preferences given. Use '__persistence_strategy__': 'merge' to merge with existing preferences instead.",
  operationId: 'updateUserPreferenceSet',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: PreferenceSetRequestSchema,
          example: {
            __persistence_strategy__: 'merge',
            categories: { marketing: false, transactional: { channel_types: { email: false } } },
            channel_types: { email: true },
            channels: {
              '2f641633-95d3-4555-9222-9f1eb7888a80': {
                conditions: [
                  { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                ],
              },
              'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
            },
            commercial_subscribed: true,
            workflows: { 'dinosaurs-loose': { channel_types: { email: false } } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PreferenceSetSchema } } },
  },
  callbacks: {},
})

export const deleteV1UsersUserIdPreferencesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{user_id}/preferences/{id}',
  tags: ['Users', 'Preferences'],
  summary: 'Delete user preference set',
  description: 'Unsets the preference set for the user, removing it entirely.',
  operationId: 'deleteUserPreferenceSet',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
      id: z
        .string()
        .default('default')
        .openapi({
          param: {
            description: 'Unique identifier for the preference set.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              default: 'default',
              example: 'default',
              type: 'string',
              'x-struct': null,
              'x-validate': null,
            },
          },
          example: 'default',
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  callbacks: {},
})

export const postV1ObjectsCollectionBulkSubscriptionsAddRoute = createRoute({
  method: 'post',
  path: '/v1/objects/{collection}/bulk/subscriptions/add',
  tags: ['Objects', 'Subscriptions', 'Bulk operations'],
  summary: 'Bulk add subscriptions',
  description:
    'Add subscriptions for all objects in a single collection. If a subscription for an object in the collection already exists, it will be updated. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `recipient` field.',
  operationId: 'bulkAddSubscriptions',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'The collection this object belongs to.',
            example: 'projects',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
    body: {
      description: 'Params',
      content: {
        'application/json': {
          schema: BulkUpsertSubscriptionsRequestSchema,
          example: {
            subscriptions: [{ id: 'project-1', properties: null, recipients: [{ id: 'user_1' }] }],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BulkOperationSchema } } },
  },
  callbacks: {},
})

export const postV1UsersUserIdPreferenceCenterSignedUrlRoute = createRoute({
  method: 'post',
  path: '/v1/users/{user_id}/preference_center/signed_url',
  tags: ['Users', 'Preference center'],
  summary: 'Create preference center signed URL',
  description:
    'Generates a signed preference center URL and token for the given user in the current environment.',
  operationId: 'generatePreferenceCenterSignedUrl',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string', 'x-struct': null, 'x-validate': null },
          },
          'x-struct': null,
          'x-validate': null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PreferenceCenterSignedUrlResponseSchema } },
    },
  },
  callbacks: {},
})
