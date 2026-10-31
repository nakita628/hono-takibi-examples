import { createRoute, z } from '@hono/zod-openapi'

const AddCustomFieldSettingRequestSchema = z
  .object({
    custom_field: z
      .string()
      .openapi({
        description: 'The custom field to associate with this container.',
        example: '14916',
      }),
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    is_important: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).',
        example: true,
      }),
  })
  .openapi({ required: ['custom_field'] })
  .openapi('AddCustomFieldSettingRequest')

const AddFollowersRequestSchema = z
  .object({
    followers: z
      .string()
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: '521621,621373',
      }),
  })
  .openapi({ required: ['followers'] })
  .openapi('AddFollowersRequest')

const AddMembersRequestSchema = z
  .object({
    members: z
      .string()
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: '521621,621373',
      }),
  })
  .openapi({ required: ['members'] })
  .openapi('AddMembersRequest')

const AsanaResourceSchema = z
  .object({
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Globally unique identifier of the resource, as a string.',
        example: '12345',
        readOnly: true,
        'x-insert-after': false,
      }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The base type of this resource.',
        example: 'task',
        readOnly: true,
        'x-insert-after': 'gid',
      }),
  })
  .openapi({
    description: 'A generic Asana Resource, containing a globally unique identifier.',
    required: [],
  })
  .openapi('AsanaResource')

const AsanaNamedResourceSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the object.', example: 'Bug Task' }),
    })
    .openapi({ required: [] }),
).openapi('AsanaNamedResource')

const AttachmentCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The name of the file.',
          example: 'Screenshot.png',
          readOnly: true,
        }),
      resource_subtype: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.',
          example: 'dropbox',
        }),
    })
    .openapi({
      description:
        'An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.',
      'x-docs-overrides': { 'properties.resource_type.example': 'attachment' },
      required: [],
    }),
).openapi('AttachmentCompact')

const AttachmentBaseSchema = AttachmentCompactSchema.openapi('AttachmentBase')

const AttachmentRequestSchema = z
  .object({
    connect_to_app: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in.\n',
      }),
    file: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Required for `asana` attachments.\n',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the external resource being attached. Required for attachments of type `external`.\n',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required identifier of the parent task, project, or project_brief, as a string.\n',
      }),
    resource_subtype: z
      .enum(['asana', 'dropbox', 'gdrive', 'onedrive', 'box', 'vimeo', 'external'])
      .exactOptional()
      .openapi({
        description:
          'The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.\n',
        example: 'external',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the external resource being attached. Required for attachments of type `external`.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentRequest')

const TaskCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the task.', example: 'Bug Task' }),
      resource_subtype: z
        .enum(['default_task', 'milestone', 'section', 'approval'])
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.\nThe resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.',
          example: 'default_task',
        }),
    })
    .openapi({
      description:
        'The *task* is the basic object around which many operations in Asana are centered.',
      'x-docs-overrides': { 'properties.resource_type.example': 'task' },
      required: [],
    }),
).openapi('TaskCompact')

const AttachmentResponseSchema = AttachmentCompactSchema.and(
  z
    .object({
      connected_to_app: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the attachment is connected to the app making the request for the purposes of showing an app components widget. Only present when the `resource_subtype` is `external` or `gdrive`.',
          readOnly: true,
        }),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      download_url: z
        .url()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The URL containing the content of the attachment.\n*Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.',
          example: 'https://s3.amazonaws.com/assets/123/Screenshot.png',
          readOnly: true,
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.',
          example: 'dropbox',
          readOnly: true,
        }),
      parent: TaskCompactSchema.and(
        z
          .object({
            resource_subtype: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The resource subtype of the parent resource that the filter applies to.',
                example: 'default_task',
              }),
          })
          .openapi({
            description: 'The task this attachment is attached to.',
            readOnly: true,
            required: [],
          }),
      ).exactOptional(),
      permanent_url: z
        .url()
        .nullable()
        .exactOptional()
        .openapi({
          description: '',
          example: 'https://s3.amazonaws.com/assets/123/Screenshot.png',
          readOnly: true,
        }),
      size: z
        .int()
        .exactOptional()
        .openapi({
          description:
            'The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.',
          example: 12345,
          readOnly: true,
        }),
      view_url: z
        .url()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.',
          example: 'https://www.dropbox.com/s/123/Screenshot.png',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('AttachmentResponse')

const AuditLogEventActorSchema = z
  .object({
    actor_type: z
      .enum(['user', 'asana', 'asana_support', 'anonymous', 'external_administrator'])
      .exactOptional()
      .openapi({
        description:
          'The type of actor.\nCan be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.',
        example: 'user',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the actor, if it is a user.',
        example: 'gregsanchez@example.com',
      }),
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Globally unique identifier of the actor, if it is a user.',
        example: '1111',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the actor, if it is a user.', example: 'Greg Sanchez' }),
  })
  .openapi({
    description: 'The entity that triggered the event. Will typically be a user.',
    required: [],
  })
  .openapi('AuditLogEventActor')

const AuditLogEventContextSchema = z
  .object({
    api_authentication_method: z
      .enum(['cookie', 'oauth', 'personal_access_token', 'service_account'])
      .exactOptional()
      .openapi({
        description:
          'The authentication method used in the context of an API request.\nOnly present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.',
      }),
    client_ip_address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IP address of the client that initiated the event, if applicable.',
        example: '1.1.1.1',
      }),
    context_type: z
      .enum(['web', 'desktop', 'mobile', 'asana_support', 'asana', 'email', 'api'])
      .exactOptional()
      .openapi({
        description:
          'The type of context.\nCan be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.',
        example: 'web',
      }),
    oauth_app_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the OAuth App that initiated the event.\nOnly present if the `api_authentication_method` is `oauth`.',
      }),
    user_agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user agent of the client that initiated the event, if applicable.',
        example:
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      }),
  })
  .openapi({ description: 'The context from which this event originated.', required: [] })
  .openapi('AuditLogEventContext')

const AuditLogEventDetailsSchema = z
  .object({})
  .openapi({
    description: 'Event specific details. The schema will vary depending on the `event_type`.',
  })
  .openapi('AuditLogEventDetails')

const AuditLogEventResourceSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the resource, if applicable.' }),
    gid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Globally unique identifier of the resource.', example: '1111' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the resource.', example: 'Example Task' }),
    resource_subtype: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subtype of resource. Most resources will not have a subtype.',
        example: 'milestone',
      }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of resource.', example: 'task' }),
  })
  .openapi({ description: 'The primary object that was affected by this event.', required: [] })
  .openapi('AuditLogEventResource')

const AuditLogEventSchema = z
  .object({
    actor: AuditLogEventActorSchema.exactOptional(),
    context: AuditLogEventContextSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time the event was created.',
        example: '2021-01-01T00:00:00.000Z',
      }),
    details: AuditLogEventDetailsSchema.exactOptional(),
    event_category: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The category that this `event_type` belongs to.',
        example: 'deletion',
      }),
    event_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the event.', example: 'task_deleted' }),
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Globally unique identifier of the `AuditLogEvent`, as a string.',
        example: '12345',
        'x-insert-after': false,
      }),
    resource: AuditLogEventResourceSchema.exactOptional(),
  })
  .openapi({
    description:
      'An object representing a single event within an Asana domain.\n\nEvery audit log event is comprised of an `event_type`, `actor`, `resource`, and `context`. Some events will include additional metadata about the event under `details`. See our [currently supported list of events](/docs/supported-auditlogevents) for more details.',
    required: [],
  })
  .openapi('AuditLogEvent')

const BatchRequestActionSchema = z
  .object({
    data: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'For `GET` requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in `options` instead. For `POST`, `PATCH`, and `PUT` methods, this should be the content you would have normally put in the data field of the body.',
        example: { assignee: 'me', workspace: '1337' },
      }),
    method: z
      .enum(['get', 'post', 'put', 'delete', 'patch', 'head'])
      .openapi({
        description: 'The HTTP method you wish to emulate for the action.',
        example: 'get',
      }),
    options: z
      .object({
        fields: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'The fields to retrieve in the request.',
            example: ['name', 'gid', 'notes', 'completed'],
          }),
        limit: z
          .int()
          .exactOptional()
          .openapi({ description: 'Pagination limit for the request.', example: 50 }),
        offset: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Pagination offset for the request.',
            example: 'eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.',
        example: { fields: ['name', 'notes', 'completed'], limit: 3 },
        required: [],
      }),
    relative_path: z
      .string()
      .openapi({
        description:
          'The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in `data` instead.',
        example: '/tasks/123',
      }),
  })
  .openapi({
    description: 'An action object for use in a batch request.',
    required: ['relative_path', 'method'],
  })
  .openapi('BatchRequestAction')

const BatchRequestSchema = z
  .object({ actions: z.array(BatchRequestActionSchema).exactOptional() })
  .openapi({ description: 'A request object for use in a batch request.', required: [] })
  .openapi('BatchRequest')

const BatchResponseSchema = z
  .object({
    body: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The JSON body that the invoked endpoint returned.',
        example: {
          data: {
            completed: false,
            gid: '1967',
            name: 'Hello, world!',
            notes: 'How are you today?',
          },
        },
      }),
    headers: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A map of HTTP headers specific to this result. This is primarily used for returning a `Location` header to accompany a `201 Created` result.  The parent HTTP response will contain all common headers.',
        example: { location: '/tasks/1234' },
      }),
    status_code: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The HTTP status code that the invoked endpoint returned.',
        example: 200,
      }),
  })
  .openapi({ description: 'A response object returned from a batch request.', required: [] })
  .openapi('BatchResponse')

const EnumOptionSchema = AsanaResourceSchema.and(
  z
    .object({
      color: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The color of the enum option. Defaults to ‘none’.',
          example: 'blue',
        }),
      enabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Whether or not the enum option is a selectable value for the custom field.',
          example: true,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the enum option.', example: 'Low' }),
    })
    .openapi({
      description:
        'Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.\n\nYou can add enum options to a custom field by using the `POST /custom_fields/custom_field_gid/enum_options` endpoint.\n\n**It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the `enabled` field to false with the `PUT /enum_options/enum_option_gid` endpoint. Other attributes can be updated similarly.\n\nOn creation of an enum option, `enabled` is always set to `true`, meaning the enum option is a selectable value for the custom field. Setting `enabled=false` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.\n\nEnum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using `insert_before` or `insert_after` to reference an existing enum option. Only one of `insert_before` and `insert_after` can be provided when creating a new enum option.\n\nAn enum options list can be reordered with the `POST /custom_fields/custom_field_gid/enum_options/insert` endpoint.',
      'x-docs-overrides': { 'properties.resource_type.example': 'enum_option' },
      required: [],
    }),
).openapi('EnumOption')

const CustomFieldCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      date_value: z
        .object({
          date: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A string representing the date in YYYY-MM-DD format.',
              example: '2024-08-23',
            }),
          date_time: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.',
              example: '2024-08-23T22:00:00.000Z',
            }),
        })
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.',
          required: [],
        }),
      display_value: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            "A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.",
          example: 'blue',
          readOnly: true,
        }),
      enabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description: '*Conditional*. Determines if the custom field is enabled or not.',
          example: true,
        }),
      enum_options: z
        .array(EnumOptionSchema)
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).',
        }),
      enum_value: EnumOptionSchema.and(
        z
          .object({})
          .openapi({
            description:
              '*Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an `enum` custom field.',
          }),
      ).exactOptional(),
      multi_enum_values: z
        .array(EnumOptionSchema)
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the custom field.', example: 'Status' }),
      number_value: z
        .number()
        .exactOptional()
        .openapi({
          description: '*Conditional*. This number is the value of a `number` custom field.',
          example: 5.2,
        }),
      resource_subtype: z
        .enum(['text', 'enum', 'multi_enum', 'number', 'date', 'people'])
        .exactOptional()
        .openapi({
          description: 'The type of the custom field. Must be one of the given values.\n',
          example: 'text',
        }),
      text_value: z
        .string()
        .exactOptional()
        .openapi({
          description: '*Conditional*. This string is the value of a `text` custom field.',
          example: 'Some Value',
        }),
      type: z
        .enum(['text', 'enum', 'multi_enum', 'number'])
        .exactOptional()
        .openapi({
          description:
            '*Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.\n',
          readOnly: true,
        }),
    })
    .openapi({
      description:
        'Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.\n\nUsers in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.',
      'x-docs-overrides': { 'properties.resource_type.example': 'custom_field' },
      required: [],
    }),
).openapi('CustomFieldCompact')

const CustomFieldBaseSchema = CustomFieldCompactSchema.and(
  z
    .object({
      asana_created_field: z
        .enum([
          'a_v_requirements',
          'account_name',
          'actionable',
          'align_shipping_link',
          'align_status',
          'allotted_time',
          'appointment',
          'approval_stage',
          'approved',
          'article_series',
          'board_committee',
          'browser',
          'campaign_audience',
          'campaign_project_status',
          'campaign_regions',
          'channel_primary',
          'client_topic_type',
          'complete_by',
          'contact',
          'contact_email_address',
          'content_channels',
          'content_channels_needed',
          'content_stage',
          'content_type',
          'contract',
          'contract_status',
          'cost',
          'creation_stage',
          'creative_channel',
          'creative_needed',
          'creative_needs',
          'data_sensitivity',
          'deal_size',
          'delivery_appt',
          'delivery_appt_date',
          'department',
          'department_responsible',
          'design_request_needed',
          'design_request_type',
          'discussion_category',
          'do_this_task',
          'editorial_content_status',
          'editorial_content_tag',
          'editorial_content_type',
          'effort',
          'effort_level',
          'est_completion_date',
          'estimated_time',
          'estimated_value',
          'expected_cost',
          'external_steps_needed',
          'favorite_idea',
          'feedback_type',
          'financial',
          'funding_amount',
          'grant_application_process',
          'hiring_candidate_status',
          'idea_status',
          'ids_link',
          'ids_patient_link',
          'implementation_stage',
          'insurance',
          'interview_area',
          'interview_question_score',
          'itero_scan_link',
          'job_s_applied_to',
          'lab',
          'launch_status',
          'lead_status',
          'localization_language',
          'localization_market_team',
          'localization_status',
          'meeting_minutes',
          'meeting_needed',
          'minutes',
          'mrr',
          'must_localize',
          'name_of_foundation',
          'need_to_follow_up',
          'next_appointment',
          'next_steps_sales',
          'num_people',
          'number_of_user_reports',
          'office_location',
          'onboarding_activity',
          'owner',
          'participants_needed',
          'patient_date_of_birth',
          'patient_email',
          'patient_phone',
          'patient_status',
          'phone_number',
          'planning_category',
          'point_of_contact',
          'position',
          'post_format',
          'prescription',
          'priority',
          'priority_level',
          'product',
          'product_stage',
          'progress',
          'project_size',
          'project_status',
          'proposed_budget',
          'publish_status',
          'reason_for_scan',
          'referral',
          'request_type',
          'research_status',
          'responsible_department',
          'responsible_team',
          'risk_assessment_status',
          'room_name',
          'sales_counterpart',
          'sentiment',
          'shipping_link',
          'social_channels',
          'stage',
          'status',
          'status_design',
          'status_of_initiative',
          'system_setup',
          'task_progress',
          'team',
          'team_marketing',
          'team_responsible',
          'time_it_takes_to_complete_tasks',
          'timeframe',
          'treatment_type',
          'type_work_requests_it',
          'use_agency',
          'user_name',
          'vendor_category',
          'vendor_type',
          'word_count',
        ])
        .nullable()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. A unique identifier to associate this field with the template source of truth.',
          example: 'priority',
          readOnly: true,
        }),
      currency_code: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.',
          example: 'EUR',
        }),
      custom_label: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.',
          example: 'gold pieces',
        }),
      custom_label_position: z
        .enum(['prefix', 'suffix'])
        .exactOptional()
        .openapi({
          description:
            'Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.',
          example: 'suffix',
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          description: '[Opt In](/docs/input-output-options). The description of the custom field.',
          example: 'Development team priority',
        }),
      enum_options: z
        .array(EnumOptionSchema)
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).',
        }),
      format: z
        .enum(['currency', 'identifier', 'percentage', 'custom', 'none'])
        .exactOptional()
        .openapi({ description: 'The format of this custom field.', example: 'custom' }),
      has_notifications_enabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.',
          example: true,
        }),
      is_global_to_workspace: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.',
          example: true,
          readOnly: true,
        }),
      precision: z
        .int()
        .exactOptional()
        .openapi({
          description:
            'Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.\nFor percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.\nThe identifier format will always have a precision of 0.',
          example: 2,
        }),
    })
    .openapi({ required: [] }),
).openapi('CustomFieldBase')

const CustomFieldRequestSchema = CustomFieldBaseSchema.and(
  z
    .object({
      people_value: z
        .array(z.string().openapi({ description: 'The GID of a user.' }))
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs reflects the users to be written to a `people` custom field. Note that *write* operations will replace existing users (if any) in the custom field with the users specified in this array.',
          example: ['12345'],
        }),
      workspace: z
        .string()
        .openapi({
          description: '*Create-Only* The workspace to create a custom field in.',
          example: '1331',
        }),
    })
    .openapi({ required: ['workspace'] }),
).openapi('CustomFieldRequest')

const UserCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description: '*Read-only except when same user as requester*. The user’s name.',
          example: 'Greg Sanchez',
        }),
    })
    .openapi({
      description:
        'A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.',
      'x-docs-overrides': { 'properties.resource_type.example': 'user' },
      required: [],
    }),
).openapi('UserCompact')

const CustomFieldResponseSchema = CustomFieldBaseSchema.and(
  z
    .object({
      created_by: UserCompactSchema.nullable().exactOptional(),
      people_value: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/docs/user-compact) objects reflects the values of a `people` custom field.',
        }),
    })
    .openapi({ required: [] }),
).openapi('CustomFieldResponse')

const CustomFieldSettingCompactSchema = AsanaResourceSchema.and(
  z
    .object({})
    .openapi({
      description:
        'Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.',
      'x-docs-overrides': { 'properties.resource_type.example': 'custom_field_setting' },
    }),
).openapi('CustomFieldSettingCompact')

const CustomFieldSettingBaseSchema =
  CustomFieldSettingCompactSchema.openapi('CustomFieldSettingBase')

const ProjectCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.',
          example: 'Stuff to buy',
        }),
    })
    .openapi({
      description:
        'A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.',
      'x-docs-overrides': { 'properties.resource_type.example': 'project' },
      required: [],
    }),
).openapi('ProjectCompact')

const CustomFieldSettingResponseSchema = CustomFieldSettingCompactSchema.and(
  z
    .object({
      custom_field: CustomFieldResponseSchema.and(
        z
          .object({})
          .openapi({
            description: 'The custom field that is applied to the `parent`.',
            readOnly: true,
          }),
      ).exactOptional(),
      is_important: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '`is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.',
          example: false,
          readOnly: true,
        }),
      parent: ProjectCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              'The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.',
            readOnly: true,
          }),
      ).exactOptional(),
      project: ProjectCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              '*Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CustomFieldSettingResponse')

const DateVariableCompactSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of what the date variable is used for when instantiating a project.',
        example: 'Choose a start date for your project.',
        readOnly: true,
      }),
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.',
        example: '1',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the date variable.',
        example: 'Start Date',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DateVariableCompact')

const DateVariableRequestSchema = z
  .object({
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.',
        example: '1',
      }),
    value: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date with which the date variable should be replaced when instantiating a project. This takes a date with `YYYY-MM-DD` format.',
        example: '2022-01-01',
      }),
  })
  .openapi({ required: [] })
  .openapi('DateVariableRequest')

const EmptyResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.',
  })
  .openapi('EmptyResponse')

const EnumOptionBaseSchema = EnumOptionSchema.openapi('EnumOptionBase')

const EnumOptionInsertRequestSchema = z
  .object({
    after_enum_option: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.',
        example: '12345',
      }),
    before_enum_option: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.',
        example: '12345',
      }),
    enum_option: z
      .string()
      .openapi({ description: 'The gid of the enum option to relocate.', example: '97285' }),
  })
  .openapi({ required: ['enum_option'] })
  .openapi('EnumOptionInsertRequest')

const EnumOptionRequestSchema = EnumOptionSchema.and(
  z
    .object({
      insert_after: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.',
          example: '12345',
        }),
      insert_before: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.',
          example: '12345',
        }),
    })
    .openapi({ required: [] }),
).openapi('EnumOptionRequest')

const ErrorSchema = z
  .object({
    help: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information directing developers to resources on how to address and fix the problem, if available.',
        example:
          "For more information on API status codes and how to handle them, read the docs on errors: https://asana.github.io/developer-docs/#errors'",
        readOnly: true,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Message providing more detail about the error that occurred, if available.',
        example: 'project: Missing input',
        readOnly: true,
      }),
    phrase: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*500 errors only*. A unique error phrase which can be used when contacting developer support to help identify the exact occurrence of the problem in Asana’s logs.',
        example: '6 sad squid snuggle softly',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ErrorResponseSchema = z
  .object({ errors: z.array(ErrorSchema).exactOptional() })
  .openapi({
    description:
      'Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror.',
    required: [],
  })
  .openapi('ErrorResponse')

const EventResponseSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of action taken on the **resource** that triggered the event.  This can be one of `changed`, `added`, `removed`, `deleted`, or `undeleted` depending on the nature of the event.',
        example: 'changed',
        readOnly: true,
      }),
    change: z
      .object({
        action: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The type of action taken on the **field** which has been changed.  This can be one of `changed`, `added`, or `removed` depending on the nature of the change.',
            example: 'changed',
            readOnly: true,
          }),
        added_value: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "*Conditional.* This property is only present when the **field's** `action` is `added` _and_ the `added_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.",
            example: { gid: '12345', resource_type: 'user' },
          }),
        field: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the field that has changed in the resource.',
            example: 'assignee',
            readOnly: true,
          }),
        new_value: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "*Conditional.* This property is only present when the **field's** `action` is `changed` _and_ the `new_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.",
            example: { gid: '12345', resource_type: 'user' },
          }),
        removed_value: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "*Conditional.* This property is only present when the **field's** `action` is `removed` _and_ the `removed_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.",
            example: { gid: '12345', resource_type: 'user' },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information about the type of change that has occurred. This field is only present when the value of the property `action`, describing the action taken on the **resource**, is `changed`.',
        readOnly: true,
        required: [],
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the event occurred.',
        example: '2012-02-22T02:06:58.147Z',
        readOnly: true,
      }),
    parent: AsanaNamedResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'For added/removed events, the parent object that resource was added to or removed from. The parent will be `null` for other event types.',
        }),
    ).exactOptional(),
    resource: AsanaNamedResourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource which has triggered the event by being modified in some way.',
        }),
    ).exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Deprecated: Refer to the resource_type of the resource.* The type of the resource that generated the event.',
        example: 'task',
        readOnly: true,
      }),
    user: UserCompactSchema.and(
      z.any().openapi({ description: 'The user who triggered the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An *event* is an object representing a change to a resource that was\nobserved by an event subscription or delivered asynchronously to\nthe target location of an active webhook.\n\nThe event may be triggered by a different `user` than the\nsubscriber. For example, if user A subscribes to a task and user B\nmodified it, the event’s user will be user B. Note: Some events\nare generated by the system, and will have `null` as the user. API\nconsumers should make sure to handle this case.\n\nThe `resource` that triggered the event may be different from the one\nthat the events were requested for or the webhook is subscribed to. For\nexample, a subscription to a project will contain events for tasks\ncontained within the project.\n\n**Note:** pay close attention to the relationship between the fields\n`Event.action` and `Event.change.action`.\n`Event.action` represents the action taken on the resource\nitself, and `Event.change.action` represents how the information\nwithin the resource's fields have been modified.\n\nFor instance, consider these scenarios:\n\n\n* When at task is added to a project, `Event.action` will be\n`added`, `Event.parent` will be an object with the `id` and\n`type` of the project, and there will be no `change` field.\n\n\n* When an assignee is set on the task, `Event.parent` will be\n`null`, `Event.action` will be `changed`,\n`Event.change.action` will be `changed`, and `new_value` will\nbe an object with the user's `id` and `type`.\n\n\n* When a collaborator is added to the task, `Event.parent` will\nbe `null`, `Event.action` will be `changed`,\n`Event.change.action` will be `added`, and `added_value` will be\nan object with the user's `id` and `type`.",
    required: [],
  })
  .openapi('EventResponse')

const GoalAddSubgoalRequestSchema = z
  .object({
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    subgoal: z
      .string()
      .openapi({ description: 'The goal gid to add as subgoal to a parent goal', example: '1331' }),
  })
  .openapi({ required: ['subgoal'] })
  .openapi('GoalAddSubgoalRequest')

const GoalAddSupportingRelationshipRequestSchema = z
  .object({
    contribution_weight: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The weight that the supporting resource's progress will contribute to the supported goal's progress. This can only be 0 or 1.",
        example: 1,
      }),
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.',
        example: '1331',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.',
        example: '1331',
      }),
    supporting_resource: z
      .string()
      .openapi({
        description:
          'The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.',
        example: '12345',
      }),
  })
  .openapi({ required: ['supporting_resource'] })
  .openapi('GoalAddSupportingRelationshipRequest')

const GoalAddSupportingWorkRequestSchema = z
  .object({
    supporting_work: z
      .string()
      .openapi({
        description: 'The project/portfolio gid to add as supporting work for a goal',
        example: '1331',
      }),
  })
  .openapi({ required: ['supporting_work'] })
  .openapi('GoalAddSupportingWorkRequest')

const GoalBaseSchema = AsanaResourceSchema.and(
  z
    .object({
      due_on: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.',
          example: '2019-09-15',
        }),
      html_notes: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The notes of the goal with formatting as HTML.',
          example: '<body>Start building brand awareness.</body>',
        }),
      is_workspace_level: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.',
          example: true,
        }),
      liked: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the goal is liked by the authorized user, false if not.',
          example: false,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the goal.', example: 'Grow web traffic by 30%' }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Free-form textual information associated with the goal (i.e. its description).',
          example: 'Start building brand awareness.',
        }),
      start_on: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.',
          example: '2019-09-14',
        }),
      status: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`.\n*Note* you can only write to this property if `metric` is set.',
          example: 'green',
        }),
    })
    .openapi({ 'x-docs-overrides': { 'properties.resource_type.example': 'goal' }, required: [] }),
).openapi('GoalBase')

const GoalCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the goal.', example: 'Grow web traffic by 30%' }),
      owner: UserCompactSchema.and(z.object({}).nullable()).exactOptional(),
    })
    .openapi({ 'x-docs-overrides': { 'properties.resource_type.example': 'goal' }, required: [] }),
).openapi('GoalCompact')

const GoalMembershipCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      is_commenter: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Describes if the user is comment only in goal.', example: false }),
      is_editor: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Describes if the user is editor in goal.', example: false }),
      member: UserCompactSchema.exactOptional(),
    })
    .openapi({
      description: "This object represents a user's connection to a goal.",
      'x-docs-overrides': { 'properties.resource_type.example': 'goal_membership' },
      required: [],
    }),
).openapi('GoalMembershipCompact')

const GoalMembershipBaseSchema = GoalMembershipCompactSchema.openapi('GoalMembershipBase')

const GoalMembershipResponseSchema = GoalMembershipCompactSchema.openapi('GoalMembershipResponse')

const GoalMetricBaseSchema = AsanaResourceSchema.and(
  z
    .object({
      currency_code: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.',
          example: 'EUR',
        }),
      current_display_value: z
        .string()
        .exactOptional()
        .openapi({
          description: 'This string is the current value of a goal metric of type string.',
          example: '8.12',
          readOnly: true,
        }),
      current_number_value: z
        .number()
        .exactOptional()
        .openapi({
          description: 'This number is the current value of a goal metric of type number.',
          example: 8.12,
        }),
      initial_number_value: z
        .number()
        .exactOptional()
        .openapi({
          description: 'This number is the start value of a goal metric of type number.',
          example: 5.2,
        }),
      precision: z
        .int()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.\nFor percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.',
          example: 2,
        }),
      progress_source: z
        .enum([
          'manual',
          'subgoal_progress',
          'project_task_completion',
          'project_milestone_completion',
          'external',
        ])
        .exactOptional()
        .openapi({
          description:
            "This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals or projects, or managed by an integration with an external data source, such as Salesforce.",
          example: 'manual',
        }),
      resource_subtype: z
        .literal('number')
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.',
          example: 'number',
          readOnly: true,
        }),
      target_number_value: z
        .number()
        .exactOptional()
        .openapi({
          description:
            'This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.',
          example: 10.2,
        }),
      unit: z
        .enum(['none', 'currency', 'percentage'])
        .exactOptional()
        .openapi({ description: 'A supported unit of measure for the goal metric, or none.' }),
    })
    .openapi({ required: [] }),
).openapi('GoalMetricBase')

const GoalMetricCurrentValueRequestSchema = AsanaResourceSchema.and(
  z
    .object({
      current_number_value: z
        .number()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. This number is the current value of a goal metric of type number.',
          example: 8.12,
        }),
    })
    .openapi({ required: [] }),
).openapi('GoalMetricCurrentValueRequest')

const GoalMetricRequestSchema = GoalMetricBaseSchema.openapi('GoalMetricRequest')

const GoalRelationshipCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      contribution_weight: z
        .number()
        .exactOptional()
        .openapi({
          description:
            "The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.",
          example: 1,
        }),
      resource_subtype: z
        .enum(['subgoal', 'supporting_work'])
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.',
          example: 'subgoal',
          readOnly: true,
        }),
      supporting_resource: ProjectCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              'The supporting resource that supports the goal. This can be either a project, portfolio, or goal.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({
      description:
        'A *goal relationship* is an object representing the relationship between a goal and another goal, a project, or a portfolio.',
      'x-docs-overrides': { 'properties.resource_type.example': 'goal_relationship' },
      required: [],
    }),
).openapi('GoalRelationshipCompact')

const GoalRelationshipBaseSchema = GoalRelationshipCompactSchema.and(
  z
    .object({
      supported_goal: GoalCompactSchema.and(
        z
          .object({})
          .openapi({
            description: 'The goal that the supporting resource supports.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('GoalRelationshipBase')

const GoalRelationshipRequestSchema = GoalRelationshipBaseSchema.and(z.object({})).openapi(
  'GoalRelationshipRequest',
)

const GoalRelationshipResponseSchema = GoalRelationshipBaseSchema.and(z.object({})).openapi(
  'GoalRelationshipResponse',
)

const GoalRemoveSubgoalRequestSchema = z
  .object({
    subgoal: z
      .string()
      .openapi({
        description: 'The goal gid to remove as subgoal from the parent goal',
        example: '1331',
      }),
  })
  .openapi({ required: ['subgoal'] })
  .openapi('GoalRemoveSubgoalRequest')

const GoalRemoveSupportingRelationshipRequestSchema = z
  .object({
    supporting_resource: z
      .string()
      .openapi({
        description:
          'The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, or portfolio.',
        example: '12345',
      }),
  })
  .openapi({ required: ['supporting_resource'] })
  .openapi('GoalRemoveSupportingRelationshipRequest')

const GoalRequestSchema = GoalBaseSchema.and(
  z
    .object({
      followers: z
        .array(z.string().openapi({ description: 'The `gid` of a user.' }))
        .exactOptional()
        .openapi({ example: ['12345'] }),
      owner: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The `gid` of a user.', example: '12345' }),
      team: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. This property is only present when the `workspace` provided is an organization.',
          example: '12345',
        }),
      time_period: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The `gid` of a time period.', example: '12345' }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({ description: 'The `gid` of a workspace.', example: '12345' }),
    })
    .openapi({ required: [] }),
).openapi('GoalRequest')

const StatusUpdateCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      resource_subtype: z
        .enum(['project_status_update', 'portfolio_status_update', 'goal_status_update'])
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.\nThe `resource_subtype`s for `status` objects represent the type of their parent.',
          example: 'project_status_update',
          readOnly: true,
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The title of the status update.',
          example: 'Status Update - Jun 15',
        }),
    })
    .openapi({
      description:
        "A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.",
      'x-docs-overrides': { 'properties.resource_type.example': 'status_update' },
      required: [],
    }),
).openapi('StatusUpdateCompact')

const LikeSchema = z
  .object({
    gid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Globally unique identifier of the object, as a string.',
        example: '12345',
        readOnly: true,
      }),
    user: UserCompactSchema.exactOptional(),
  })
  .openapi({ description: "An object to represent a user's like.", required: [] })
  .openapi('Like')

const TeamCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the team.', example: 'Marketing' }),
    })
    .openapi({
      description:
        'A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.',
      'x-docs-overrides': { 'properties.resource_type.example': 'team' },
      required: [],
    }),
).openapi('TeamCompact')

const TimePeriodCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      display_name: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A string representing the cadence code and the fiscal year.',
          example: 'Q1 FY22',
        }),
      end_on: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The localized end date of the time period in `YYYY-MM-DD` format.',
          example: '2019-09-14',
        }),
      period: z
        .enum(['FY', 'H1', 'H2', 'Q1', 'Q2', 'Q3', 'Q4'])
        .exactOptional()
        .openapi({
          description:
            'The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.',
          example: 'Q1',
        }),
      start_on: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The localized start date of the time period in `YYYY-MM-DD` format.',
          example: '2019-09-13',
        }),
    })
    .openapi({
      'x-docs-overrides': { 'properties.resource_type.example': 'time_period' },
      required: [],
    }),
).openapi('TimePeriodCompact')

const WorkspaceCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the workspace.', example: 'My Company Workspace' }),
    })
    .openapi({
      description:
        'A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.',
      'x-docs-overrides': { 'properties.resource_type.example': 'workspace' },
      required: [],
    }),
).openapi('WorkspaceCompact')

const GoalResponseSchema = GoalBaseSchema.and(
  z
    .object({
      current_status_update: StatusUpdateCompactSchema.nullable()
        .exactOptional()
        .openapi({ description: 'The latest `status_update` posted to this goal.' }),
      followers: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({ description: 'Array of users who are members of this goal.' }),
      likes: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description: 'Array of likes for users who have liked this goal.',
          readOnly: true,
        }),
      metric: GoalMetricBaseSchema.and(
        z
          .object({
            can_manage: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  '*Conditional*. Only relevant for `progress_source` of type `external`. This boolean indicates whether the requester has the ability to update the current value of this metric. This returns `true` if the external metric was created by the requester, `false` otherwise.',
                example: true,
                readOnly: true,
              }),
          })
          .nullable()
          .openapi({ required: [] }),
      ).exactOptional(),
      num_likes: z
        .int()
        .exactOptional()
        .openapi({
          description: 'The number of users who have liked this goal.',
          example: 5,
          readOnly: true,
        }),
      owner: UserCompactSchema.and(z.object({}).nullable()).exactOptional(),
      team: TeamCompactSchema.and(z.object({}).nullable())
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. This property is only present when the `workspace` provided is an organization.',
        }),
      time_period: TimePeriodCompactSchema.and(z.object({}).nullable()).exactOptional(),
      workspace: WorkspaceCompactSchema.and(z.object({})).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('GoalResponse')

const ProjectTemplateCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'Name of the project template.', example: 'Packing list' }),
    })
    .openapi({
      description:
        'A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.',
      'x-docs-overrides': { 'properties.resource_type.example': 'project_template' },
      required: [],
    }),
).openapi('ProjectTemplateCompact')

const JobCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      new_project: ProjectCompactSchema.exactOptional(),
      new_project_template: ProjectTemplateCompactSchema.exactOptional(),
      new_task: TaskCompactSchema.exactOptional(),
      resource_subtype: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.',
          example: 'duplicate_task',
          readOnly: true,
        }),
      status: z
        .enum(['not_started', 'in_progress', 'succeeded', 'failed'])
        .exactOptional()
        .openapi({
          description:
            'The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.',
          example: 'in_progress',
          readOnly: true,
        }),
    })
    .openapi({
      description: 'A *job* is an object representing a process that handles asynchronous work.',
      'x-docs-overrides': { 'properties.resource_type.example': 'job' },
      required: [],
    }),
).openapi('JobCompact')

const JobBaseSchema = JobCompactSchema.openapi('JobBase')

const JobResponseSchema = JobCompactSchema.openapi('JobResponse')

const ModifyDependenciesRequestSchema = z
  .object({
    dependencies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of task gids that a task depends on.' }),
  })
  .openapi({ example: { dependencies: ['133713', '184253'] }, required: [] })
  .openapi('ModifyDependenciesRequest')

const ModifyDependentsRequestSchema = z
  .object({
    dependents: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of task gids that are dependents of the given task.' }),
  })
  .openapi({
    description: 'A set of dependent tasks.',
    example: { dependents: ['133713', '184253'] },
    required: [],
  })
  .openapi('ModifyDependentsRequest')

const OrganizationExportCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      download_url: z
        .url()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'Download this URL to retreive the full export of the organization\nin JSON format. It will be compressed in a gzip (.gz) container.\n\n*Note: May be null if the export is still in progress or\nfailed.  If present, this URL may only be valid for 1 hour from\nthe time of retrieval. You should avoid persisting this URL\nsomewhere and rather refresh on demand to ensure you do not keep\nstale URLs.*',
          example:
            'https://asana-export.s3.amazonaws.com/export-4632784536274-20170127-43246.json.gz?AWSAccessKeyId=xxxxxxxx',
          readOnly: true,
        }),
      organization: WorkspaceCompactSchema.exactOptional(),
      state: z
        .enum(['pending', 'started', 'finished', 'error'])
        .exactOptional()
        .openapi({
          description: 'The current state of the export.',
          example: 'started',
          readOnly: true,
        }),
    })
    .openapi({
      description:
        'An *organization_export* object represents a request to export the complete data of an Organization in JSON format.',
      'x-docs-overrides': { 'properties.resource_type.example': 'organization_export' },
      required: [],
    }),
).openapi('OrganizationExportCompact')

const OrganizationExportBaseSchema =
  OrganizationExportCompactSchema.openapi('OrganizationExportBase')

const OrganizationExportRequestSchema = z
  .object({
    organization: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Globally unique identifier for the workspace or organization.',
        example: '1331',
      }),
  })
  .openapi({
    description:
      'An *organization_export* request starts a job to export the complete data of the given Organization.',
    required: [],
  })
  .openapi('OrganizationExportRequest')

const OrganizationExportResponseSchema = OrganizationExportCompactSchema.openapi(
  'OrganizationExportResponse',
)

const PortfolioAddItemRequestSchema = z
  .object({
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of an item in this portfolio. The new item will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id of an item in this portfolio. The new item will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.',
        example: '1331',
      }),
    item: z.string().openapi({ description: 'The item to add to the portfolio.', example: '1331' }),
  })
  .openapi({ required: ['item'] })
  .openapi('PortfolioAddItemRequest')

const PortfolioCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the portfolio.', example: 'Bug Portfolio' }),
    })
    .openapi({
      description:
        'A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.\nPortfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.',
      'x-docs-overrides': { 'properties.resource_type.example': 'portfolio' },
      required: [],
    }),
).openapi('PortfolioCompact')

const PortfolioBaseSchema = PortfolioCompactSchema.and(
  z
    .object({
      color: z
        .enum([
          'dark-pink',
          'dark-green',
          'dark-blue',
          'dark-red',
          'dark-teal',
          'dark-brown',
          'dark-orange',
          'dark-purple',
          'dark-warm-gray',
          'light-pink',
          'light-green',
          'light-blue',
          'light-red',
          'light-teal',
          'light-brown',
          'light-orange',
          'light-purple',
          'light-warm-gray',
        ])
        .exactOptional()
        .openapi({ description: 'Color of the portfolio.', example: 'light-green' }),
    })
    .openapi({ required: [] }),
).openapi('PortfolioBase')

const PortfolioMembershipCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      portfolio: PortfolioCompactSchema.exactOptional().openapi({
        description: '[Opt In](/docs/input-output-options). The portfolio the user is a member of.',
      }),
      user: UserCompactSchema.exactOptional(),
    })
    .openapi({
      description: 'This object determines if a user is a member of a portfolio.',
      'x-docs-overrides': { 'properties.resource_type.example': 'portfolio_membership' },
      required: [],
    }),
).openapi('PortfolioMembershipCompact')

const PortfolioMembershipBaseSchema =
  PortfolioMembershipCompactSchema.openapi('PortfolioMembershipBase')

const PortfolioMembershipResponseSchema = PortfolioMembershipCompactSchema.openapi(
  'PortfolioMembershipResponse',
)

const PortfolioRemoveItemRequestSchema = z
  .object({
    item: z
      .string()
      .openapi({ description: 'The item to remove from the portfolio.', example: '1331' }),
  })
  .openapi({ required: ['item'] })
  .openapi('PortfolioRemoveItemRequest')

const PortfolioRequestSchema = PortfolioBaseSchema.and(
  z
    .object({
      members: z
        .array(z.string().openapi({ description: 'Gid of an object.' }))
        .exactOptional()
        .openapi({
          description:
            'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
          example: ['52164', '15363'],
          readOnly: true,
        }),
      public: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the portfolio is public to its workspace members.',
          example: false,
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({ description: 'Gid of an object.', example: '167589' }),
    })
    .openapi({ required: [] }),
).openapi('PortfolioRequest')

const PortfolioResponseSchema = PortfolioBaseSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      created_by: UserCompactSchema.exactOptional(),
      current_status_update: StatusUpdateCompactSchema.nullable()
        .exactOptional()
        .openapi({ description: 'The latest `status_update` posted to this portfolio.' }),
      custom_field_settings: z
        .array(CustomFieldSettingResponseSchema)
        .exactOptional()
        .openapi({ description: 'Array of custom field settings applied to the portfolio.' }),
      custom_fields: z
        .array(CustomFieldCompactSchema)
        .exactOptional()
        .openapi({ description: 'Array of Custom Fields.' }),
      due_on: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD.',
          example: '2019-09-15',
        }),
      members: z.array(UserCompactSchema).exactOptional().openapi({ readOnly: true }),
      owner: UserCompactSchema.exactOptional(),
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/resource/123456789/list',
          readOnly: true,
        }),
      public: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the portfolio is public to its workspace members.',
          example: false,
        }),
      start_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*',
          example: '2019-09-14',
        }),
      workspace: WorkspaceCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              '*Create-only*. The workspace or organization that the portfolio belongs to.',
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('PortfolioResponse')

const PreviewSchema = z
  .object({
    fallback: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Some fallback text to display if unable to display the full preview.',
        example:
          'Greg: Great! I like this idea.\\n\\nhttps//a_company.slack.com/archives/ABCDEFG/12345678',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text to display in the footer.', example: 'Mar 17, 2019 1:25 PM' }),
    header: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text to display in the header.', example: 'Asana for Slack' }),
    header_link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Where the header will link to.',
        example: 'https://asana.comn/apps/slack',
      }),
    html_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML formatted text for the body of the preview.',
        example: '<body>Great! I like this idea.</body>',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text for the body of the preview.',
        example: 'Great! I like this idea.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text to display as the title.', example: 'Greg' }),
    title_link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Where to title will link to.',
        example: 'https://asana.slack.com/archives/ABCDEFG/12345678',
      }),
  })
  .openapi({
    description:
      'A collection of rich text that will be displayed as a preview to another app.\n\nThis is read-only except for a small group of whitelisted apps.',
    readOnly: true,
    required: [],
  })
  .openapi('Preview')

const ProjectStatusCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The title of the project status update.',
          example: 'Status Update - Jun 15',
        }),
    })
    .openapi({
      description:
        '*Deprecated: new integrations should prefer the `status_update` resource.*\nA *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.',
      'x-docs-overrides': { 'properties.resource_type.example': 'project_status' },
      required: [],
    }),
).openapi('ProjectStatusCompact')

const ProjectStatusBaseSchema = ProjectStatusCompactSchema.and(
  z
    .object({
      color: z
        .enum(['green', 'yellow', 'red', 'blue'])
        .openapi({ description: 'The color associated with the status update.' }),
      html_text: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.',
          example:
            '<body>The project <strong>is</strong> moving forward according to plan...</body>',
        }),
      text: z
        .string()
        .openapi({
          description: 'The text content of the status update.',
          example: 'The project is moving forward according to plan...',
        }),
    })
    .openapi({ required: ['text', 'color'] }),
).openapi('ProjectStatusBase')

const ProjectStatusResponseSchema = ProjectStatusBaseSchema.and(
  z
    .object({
      author: UserCompactSchema.exactOptional(),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      created_by: UserCompactSchema.exactOptional(),
      modified_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The time at which this project status was last modified.\n*Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('ProjectStatusResponse')

const ProjectBaseSchema = ProjectCompactSchema.and(
  z
    .object({
      archived: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.',
          example: false,
        }),
      color: z
        .enum([
          'dark-pink',
          'dark-green',
          'dark-blue',
          'dark-red',
          'dark-teal',
          'dark-brown',
          'dark-orange',
          'dark-purple',
          'dark-warm-gray',
          'light-pink',
          'light-green',
          'light-blue',
          'light-red',
          'light-teal',
          'light-brown',
          'light-orange',
          'light-purple',
          'light-warm-gray',
        ])
        .nullable()
        .exactOptional()
        .openapi({ description: 'Color of the project.', example: 'light-green' }),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      current_status: ProjectStatusResponseSchema.nullable()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated: new integrations should prefer the `current_status_update` resource.*',
        }),
      current_status_update: StatusUpdateCompactSchema.nullable()
        .exactOptional()
        .openapi({ description: 'The latest `status_update` posted to this project.' }),
      custom_field_settings: z
        .array(CustomFieldSettingResponseSchema)
        .exactOptional()
        .openapi({
          description: 'Array of Custom Field Settings (in compact form).',
          readOnly: true,
        }),
      default_view: z
        .enum(['list', 'board', 'calendar', 'timeline'])
        .exactOptional()
        .openapi({
          description: 'The default view (list, board, calendar, or timeline) of a project.',
          example: 'calendar',
        }),
      due_date: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description: '*Deprecated: new integrations should prefer the `due_on` field.*',
          example: '2019-09-15',
        }),
      due_on: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The day on which this project is due. This takes a date with format YYYY-MM-DD.',
          example: '2019-09-15',
        }),
      html_notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.',
          example: '<body>These are things we need to purchase.</body>',
        }),
      is_template: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.',
          example: false,
        }),
      members: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({
          description: 'Array of users who are members of this project.',
          readOnly: true,
        }),
      modified_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The time at which this project was last modified.\n*Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Free-form textual information associated with the project (ie., its description).',
          example: 'These are things we need to purchase.',
        }),
      public: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'True if the project is public to its team.', example: false }),
      start_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*',
          example: '2019-09-14',
        }),
      workspace: WorkspaceCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              '*Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ProjectBase')

const ProjectBriefCompactSchema = AsanaResourceSchema.and(
  z
    .object({})
    .openapi({
      description:
        'A *Project Brief* allows you to explain the what and why of the project to your team.',
      'x-docs-overrides': { 'properties.resource_type.example': 'project_brief' },
    }),
).openapi('ProjectBriefCompact')

const ProjectBriefBaseSchema = ProjectBriefCompactSchema.and(
  z
    .object({
      html_text: z
        .string()
        .exactOptional()
        .openapi({
          description: 'HTML formatted text for the project brief.',
          example: '<body>This is a <strong>project brief</strong>.</body>',
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The title of the project brief.',
          example: 'Stuff to buy — Project Brief',
        }),
    })
    .openapi({ required: [] }),
).openapi('ProjectBriefBase')

const ProjectBriefRequestSchema = ProjectBriefBaseSchema.and(
  z
    .object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The plain text of the project brief. When writing to a project brief, you can specify either `html_text` (preferred) or `text`, but not both.',
          example: 'This is a project brief.',
        }),
    })
    .openapi({ required: [] }),
).openapi('ProjectBriefRequest')

const ProjectBriefResponseSchema = ProjectBriefBaseSchema.and(
  z
    .object({
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/11111111/22222222',
          readOnly: true,
        }),
      project: ProjectCompactSchema.and(
        z
          .object({})
          .openapi({ description: 'The project with which this project brief is associated.' }),
      ).exactOptional(),
      text: z
        .string()
        .exactOptional()
        .openapi({
          description: '[Opt In](/docs/input-output-options). The plain text of the project brief.',
          example: 'This is a project brief.',
        }),
    })
    .openapi({ required: [] }),
).openapi('ProjectBriefResponse')

const ProjectDuplicateRequestSchema = z
  .object({
    include: z
      .enum([
        'members',
        'notes',
        'forms',
        'task_notes',
        'task_assignee',
        'task_subtasks',
        'task_attachments',
        'task_dates',
        'task_dependencies',
        'task_followers',
        'task_tags',
        'task_projects',
      ])
      .exactOptional()
      .openapi({
        description:
          'The elements that will be duplicated to the new project. Tasks are always included.',
        example: ['members', 'task_notes'],
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the new project.', example: 'New Project Name' }),
    schedule_dates: z
      .object({
        due_on: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.',
            example: '2019-05-21',
          }),
        should_skip_weekends: z
          .boolean()
          .openapi({
            description: 'Determines if the auto-shifted dates should skip weekends.',
            example: true,
          }),
        start_on: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.',
            example: '2019-05-21',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.',
        required: ['should_skip_weekends'],
      }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project.',
        example: '12345',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectDuplicateRequest')

const ProjectMembershipCompactSchema = AsanaResourceSchema.and(
  z
    .object({ user: UserCompactSchema.exactOptional() })
    .openapi({
      description:
        'With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.',
      'x-docs-overrides': { 'properties.resource_type.example': 'project_membership' },
      required: [],
    }),
).openapi('ProjectMembershipCompact')

const ProjectMembershipBaseSchema = ProjectMembershipCompactSchema.openapi('ProjectMembershipBase')

const ProjectMembershipResponseSchema = ProjectMembershipCompactSchema.and(
  z
    .object({
      project: ProjectCompactSchema.exactOptional().openapi({
        description: '[Opt In](/docs/input-output-options). The project the user is a member of.',
      }),
      write_access: z
        .enum(['full_write', 'comment_only'])
        .exactOptional()
        .openapi({
          description:
            'Whether the user has full access to the project or has comment-only access.',
          example: 'full_write',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('ProjectMembershipResponse')

const ProjectRequestSchema = ProjectBaseSchema.and(
  z
    .object({
      custom_fields: z
        .record(
          z.string(),
          z
            .string()
            .openapi({ description: '"{custom_field_gid}" => Value (Can be text, number, etc.)' }),
        )
        .exactOptional()
        .openapi({
          description:
            'An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.',
          example: { '4578152156': 'Not Started', '5678904321': 'On Hold' },
        }),
      followers: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '*Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.',
          example: '12345,23456',
        }),
      owner: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The current owner of the project, may be null.',
          example: '12345',
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({ description: 'The team that this project is shared with.', example: '12345' }),
    })
    .openapi({ required: [] }),
).openapi('ProjectRequest')

const ProjectResponseSchema = ProjectBaseSchema.and(
  z
    .object({
      completed: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the project is currently marked complete, false if not.',
          example: false,
          readOnly: true,
        }),
      completed_at: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The time at which this project was completed, or null if the project is not completed.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      completed_by: UserCompactSchema.nullable()
        .exactOptional()
        .openapi({
          description:
            'The user that marked this project complete, or null if the project is not completed.',
          readOnly: true,
        }),
      created_from_template: ProjectTemplateCompactSchema.and(
        z
          .object({})
          .nullable()
          .openapi({
            description:
              '[Opt In](/docs/input-output-options). The project template from which this project was created. If the project was not created from a template, this field will be null.',
          }),
      ).exactOptional(),
      custom_fields: z
        .array(CustomFieldCompactSchema)
        .exactOptional()
        .openapi({ description: 'Array of Custom Fields.', readOnly: true }),
      followers: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({
          description:
            'Array of users following this project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.',
          readOnly: true,
        }),
      icon: z
        .enum([
          'list',
          'board',
          'timeline',
          'calendar',
          'rocket',
          'people',
          'graph',
          'star',
          'bug',
          'light_bulb',
          'globe',
          'gear',
          'notebook',
          'computer',
          'check',
          'target',
          'html',
          'megaphone',
          'chat_bubbles',
          'briefcase',
          'page_layout',
          'mountain_flag',
          'puzzle',
          'presentation',
          'line_and_symbols',
          'speed_dial',
          'ribbon',
          'shoe',
          'shopping_basket',
          'map',
          'ticket',
          'coins',
        ])
        .nullable()
        .exactOptional()
        .openapi({ description: 'The icon for a project.', example: 'chat_bubbles' }),
      owner: UserCompactSchema.nullable()
        .exactOptional()
        .openapi({ description: 'The current owner of the project, may be null.' }),
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/resource/123456789/list',
          readOnly: true,
        }),
      project_brief: ProjectBriefCompactSchema.and(
        z
          .object({})
          .nullable()
          .openapi({
            description:
              '[Opt In](/docs/input-output-options). The project brief associated with this project.',
          }),
      ).exactOptional(),
      team: TeamCompactSchema.and(
        z.object({}).openapi({ description: 'The team that this project is shared with.' }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ProjectResponse')

const ProjectSaveAsTemplateRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The name of the new project template.',
        example: 'New Project Template',
      }),
    public: z
      .boolean()
      .openapi({ description: 'Sets the project template to public to its team.', example: true }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.',
        example: '12345',
      }),
    workspace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.',
        example: '12345',
      }),
  })
  .openapi({ required: ['name', 'public'] })
  .openapi('ProjectSaveAsTemplateRequest')

const ProjectSectionInsertRequestSchema = z
  .object({
    after_section: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Insert the given section immediately after the section specified by this parameter.',
        example: '987654',
      }),
    before_section: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Insert the given section immediately before the section specified by this parameter.',
        example: '86420',
      }),
    project: z
      .string()
      .openapi({
        description: 'The project in which to reorder the given section.',
        example: '123456',
      }),
    section: z.string().openapi({ description: 'The section to reorder.', example: '321654' }),
  })
  .openapi({ required: ['project', 'section'] })
  .openapi('ProjectSectionInsertRequest')

const ProjectStatusRequestSchema = ProjectStatusBaseSchema.openapi('ProjectStatusRequest')

const ProjectTemplateBaseSchema = ProjectTemplateCompactSchema.and(
  z
    .object({
      color: z
        .enum([
          'dark-pink',
          'dark-green',
          'dark-blue',
          'dark-red',
          'dark-teal',
          'dark-brown',
          'dark-orange',
          'dark-purple',
          'dark-warm-gray',
          'light-pink',
          'light-green',
          'light-blue',
          'light-red',
          'light-teal',
          'light-brown',
          'light-orange',
          'light-purple',
          'light-warm-gray',
        ])
        .nullable()
        .exactOptional()
        .openapi({ description: 'Color of the project template.', example: 'light-green' }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Free-form textual information associated with the project template',
          example: 'These are things we need to pack for a trip.',
        }),
      html_description: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The description of the project template with formatting as HTML.',
          example: '<body>These are things we need to pack for a trip.</body>',
        }),
      owner: UserCompactSchema.nullable()
        .exactOptional()
        .openapi({ description: 'The current owner of the project template, may be null.' }),
      public: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the project template is public to its team.',
          example: false,
        }),
      requested_dates: z
        .array(DateVariableCompactSchema)
        .exactOptional()
        .openapi({
          description:
            'Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.',
          readOnly: true,
        }),
      team: TeamCompactSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ProjectTemplateBase')

const ProjectTemplateInstantiateProjectRequestSchema = z
  .object({
    is_strict: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. If set to `true`, the endpoint returns an "Unprocessable Entity" error if you fail to provide a calendar date value for any date variable. If set to `false`, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project).',
        example: true,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the new project.', example: 'New Project Name' }),
    public: z
      .boolean()
      .openapi({ description: 'Sets the project to public to its team.', example: true }),
    requested_dates: z
      .array(DateVariableRequestSchema)
      .exactOptional()
      .openapi({ description: 'Array of mappings of date variables to calendar dates.' }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Conditional*. Sets the team of the new project. If the project template exists in an _organization_, you must specify a value for `team` and not `workspace`.',
        example: '12345',
      }),
    workspace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Conditional*. Sets the workspace of the new project. If the project template exists in a _workspace_, you must specify a value for `workspace` and not `team`.',
        example: '12345',
      }),
  })
  .openapi({ required: ['name', 'public'] })
  .openapi('ProjectTemplateInstantiateProjectRequest')

const ProjectTemplateResponseSchema = ProjectTemplateBaseSchema.openapi('ProjectTemplateResponse')

const RemoveCustomFieldSettingRequestSchema = z
  .object({
    custom_field: z
      .string()
      .openapi({
        description: 'The custom field to remove from this portfolio.',
        example: '14916',
      }),
  })
  .openapi({ required: ['custom_field'] })
  .openapi('RemoveCustomFieldSettingRequest')

const RemoveFollowersRequestSchema = z
  .object({
    followers: z
      .string()
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: '521621,621373',
      }),
  })
  .openapi({ required: ['followers'] })
  .openapi('RemoveFollowersRequest')

const RemoveMembersRequestSchema = z
  .object({
    members: z
      .string()
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: '521621,621373',
      }),
  })
  .openapi({ required: ['members'] })
  .openapi('RemoveMembersRequest')

const SectionCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The name of the section (i.e. the text displayed as the section header).',
          example: 'Next Actions',
        }),
    })
    .openapi({
      description:
        'A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.',
      'x-docs-overrides': { 'properties.resource_type.example': 'section' },
      required: [],
    }),
).openapi('SectionCompact')

const SectionBaseSchema = SectionCompactSchema.openapi('SectionBase')

const SectionRequestSchema = z
  .object({
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.',
        example: '987654',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.',
        example: '86420',
      }),
    name: z
      .string()
      .openapi({
        description:
          'The text to be displayed as the section name. This cannot be an empty string.',
        example: 'Next Actions',
      }),
  })
  .openapi({ required: ['project', 'name'] })
  .openapi('SectionRequest')

const SectionResponseSchema = SectionCompactSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      project: ProjectCompactSchema.exactOptional(),
      projects: z
        .array(ProjectCompactSchema)
        .exactOptional()
        .openapi({ description: '*Deprecated - please use project instead*', readOnly: true }),
    })
    .openapi({ required: [] }),
).openapi('SectionResponse')

const SectionTaskInsertRequestSchema = z
  .object({
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.',
        example: '987654',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.',
        example: '86420',
      }),
    task: z
      .string()
      .openapi({ description: 'The task to add to this section.', example: '123456' }),
  })
  .openapi({ required: ['task'] })
  .openapi('SectionTaskInsertRequest')

const StatusUpdateBaseSchema = StatusUpdateCompactSchema.and(
  z
    .object({
      html_text: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.',
          example:
            '<body>The project <strong>is</strong> moving forward according to plan...</body>',
        }),
      status_type: z
        .enum([
          'on_track',
          'at_risk',
          'off_track',
          'on_hold',
          'complete',
          'achieved',
          'partial',
          'missed',
          'dropped',
        ])
        .openapi({
          description:
            'The type associated with the status update. This represents the current state of the object this object is on.',
        }),
      text: z
        .string()
        .openapi({
          description: 'The text content of the status update.',
          example: 'The project is moving forward according to plan...',
        }),
    })
    .openapi({ required: ['text', 'status_type'] }),
).openapi('StatusUpdateBase')

const StatusUpdateRequestSchema = StatusUpdateBaseSchema.and(
  z
    .object({
      parent: z
        .string()
        .openapi({
          description:
            'The id of parent to send this status update to. This can be a project, goal or portfolio.',
        }),
    })
    .openapi({ required: ['parent'] }),
).openapi('StatusUpdateRequest')

const StatusUpdateResponseSchema = StatusUpdateBaseSchema.and(
  z
    .object({
      author: UserCompactSchema.exactOptional(),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      created_by: UserCompactSchema.exactOptional(),
      hearted: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not.',
          example: true,
          readOnly: true,
        }),
      hearts: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead* Array of likes for users who have hearted this status.',
          readOnly: true,
        }),
      liked: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the status is liked by the authorized user, false if not.',
          example: true,
        }),
      likes: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description: 'Array of likes for users who have liked this status.',
          readOnly: true,
        }),
      modified_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The time at which this project status was last modified.\n*Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.*',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      num_hearts: z
        .int()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead* The number of users who have hearted this status.',
          example: 5,
          readOnly: true,
        }),
      num_likes: z
        .int()
        .exactOptional()
        .openapi({
          description: 'The number of users who have liked this status.',
          example: 5,
          readOnly: true,
        }),
      parent: ProjectCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              'The parent of the status update. This can be a project, goal or portfolio, and indicates that this status was sent on that object.',
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('StatusUpdateResponse')

const StoryBaseSchema = AsanaResourceSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      html_text: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.',
          example: '<body>This is a comment.</body>',
        }),
      is_pinned: z
        .boolean()
        .exactOptional()
        .openapi({
          description: '*Conditional*. Whether the story should be pinned on the resource.',
          example: false,
        }),
      resource_subtype: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.',
          example: 'comment_added',
          readOnly: true,
        }),
      sticker_name: z
        .enum([
          'green_checkmark',
          'people_dancing',
          'dancing_unicorn',
          'heart',
          'party_popper',
          'people_waving_flags',
          'splashing_narwhal',
          'trophy',
          'yeti_riding_unicorn',
          'celebrating_people',
          'determined_climbers',
          'phoenix_spreading_love',
        ])
        .exactOptional()
        .openapi({
          description: 'The name of the sticker in this story. `null` if there is no sticker.',
          example: 'dancing_unicorn',
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The plain text of the comment to add. Cannot be used with html_text.',
          example: 'This is a comment.',
        }),
    })
    .openapi({
      description: 'A story represents an activity associated with an object in the Asana system.',
      'x-docs-overrides': { 'properties.resource_type.example': 'story' },
      required: [],
    }),
).openapi('StoryBase')

const StoryCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      created_by: UserCompactSchema.exactOptional(),
      resource_subtype: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.',
          example: 'comment_added',
          readOnly: true,
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '*Create-only*. Human-readable text for the story or comment.\nThis will not include the name of the creator.\n*Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.*\nUse the `resource_subtype` property to discover the action that created the story.',
          example: 'marked today',
        }),
    })
    .openapi({
      description: 'A story represents an activity associated with an object in the Asana system.',
      'x-docs-overrides': { 'properties.resource_type.example': 'story' },
      required: [],
    }),
).openapi('StoryCompact')

const StoryRequestSchema = StoryBaseSchema.openapi('StoryRequest')

const StoryResponseDatesSchema = z
  .object({
    due_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.',
        example: '2019-09-15T02:06:58.158Z',
      }),
    due_on: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.',
        example: '2019-09-15',
      }),
    start_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.',
        example: '2019-09-14',
      }),
  })
  .openapi({ description: '*Conditional*', readOnly: true, required: [] })
  .openapi('StoryResponseDates')

const TagCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.',
          example: 'Stuff to buy',
        }),
    })
    .openapi({
      description:
        'A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.',
      'x-docs-overrides': { 'properties.resource_type.example': 'tag' },
      required: [],
    }),
).openapi('TagCompact')

const StoryResponseSchema = StoryBaseSchema.and(
  z
    .object({
      assignee: UserCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      created_by: UserCompactSchema.exactOptional(),
      custom_field: CustomFieldCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      dependency: TaskCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      duplicate_of: TaskCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      duplicated_from: TaskCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      follower: UserCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      hearted: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead*\n*Conditional*. True if the story is hearted by the authorized user, false if not.',
          example: false,
          readOnly: true,
        }),
      hearts: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead*\n\n*Conditional*. Array of likes for users who have hearted this story.',
          readOnly: true,
        }),
      is_editable: z
        .boolean()
        .exactOptional()
        .openapi({
          description: '*Conditional*. Whether the text of the story can be edited after creation.',
          example: false,
          readOnly: true,
        }),
      is_edited: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. Whether the text of the story has been edited after creation.',
          example: false,
          readOnly: true,
        }),
      liked: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. True if the story is liked by the authorized user, false if not.',
          example: false,
          readOnly: true,
        }),
      likes: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description: '*Conditional*. Array of likes for users who have liked this story.',
          readOnly: true,
        }),
      new_approval_status: z
        .string()
        .exactOptional()
        .openapi({
          description: '*Conditional*. The new value of approval status.',
          example: 'approved',
          readOnly: true,
        }),
      new_date_value: StoryResponseDatesSchema.and(
        z
          .any()
          .openapi({ description: '*Conditional* The new value of a date custom field story.' }),
      )
        .exactOptional()
        .openapi({ readOnly: true }),
      new_dates: StoryResponseDatesSchema.exactOptional(),
      new_enum_value: EnumOptionSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      new_multi_enum_values: z
        .array(EnumOptionSchema)
        .exactOptional()
        .openapi({
          description: '*Conditional*. The new value of a multi-enum custom field story.',
          readOnly: true,
        }),
      new_name: z
        .string()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 'This is the New Name', readOnly: true }),
      new_number_value: z
        .int()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 2, readOnly: true }),
      new_people_value: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({
          description: '*Conditional*. The new value of a people custom field story.',
          readOnly: true,
        }),
      new_resource_subtype: z
        .string()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 'milestone', readOnly: true }),
      new_section: SectionCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      new_text_value: z
        .string()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 'This is the New Text', readOnly: true }),
      num_hearts: z
        .int()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead*\n\n*Conditional*. The number of users who have hearted this story.',
          example: 5,
          readOnly: true,
        }),
      num_likes: z
        .int()
        .exactOptional()
        .openapi({
          description: '*Conditional*. The number of users who have liked this story.',
          example: 5,
          readOnly: true,
        }),
      old_approval_status: z
        .string()
        .exactOptional()
        .openapi({
          description: '*Conditional*. The old value of approval status.',
          example: 'pending',
          readOnly: true,
        }),
      old_date_value: StoryResponseDatesSchema.and(
        z
          .any()
          .openapi({ description: '*Conditional*. The old value of a date custom field story.' }),
      )
        .exactOptional()
        .openapi({ readOnly: true }),
      old_dates: StoryResponseDatesSchema.exactOptional(),
      old_enum_value: EnumOptionSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      old_multi_enum_values: z
        .array(EnumOptionSchema)
        .exactOptional()
        .openapi({
          description: '*Conditional*. The old value of a multi-enum custom field story.',
          readOnly: true,
        }),
      old_name: z
        .string()
        .exactOptional()
        .openapi({ description: "*Conditional*'", example: 'This was the Old Name' }),
      old_number_value: z
        .int()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 1, readOnly: true }),
      old_people_value: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({
          description: '*Conditional*. The old value of a people custom field story.',
          readOnly: true,
        }),
      old_resource_subtype: z
        .string()
        .exactOptional()
        .openapi({ description: '*Conditional*', example: 'default_task', readOnly: true }),
      old_section: SectionCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      old_text_value: z
        .string()
        .exactOptional()
        .openapi({
          description: '*Conditional*',
          example: 'This was the Old Text',
          readOnly: true,
        }),
      previews: z
        .array(PreviewSchema)
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. A collection of previews to be displayed in the story.\n\n*Note: This property only exists for comment stories.*',
          readOnly: true,
        }),
      project: ProjectCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      source: z
        .enum(['web', 'email', 'mobile', 'api', 'unknown'])
        .exactOptional()
        .openapi({
          description: 'The component of the Asana product the user used to trigger the story.',
          example: 'web',
          readOnly: true,
        }),
      story: StoryCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      tag: TagCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      target: TaskCompactSchema.and(
        z
          .object({})
          .openapi({
            description: 'The object this story is associated with. Currently may only be a task.',
            readOnly: true,
          }),
      ).exactOptional(),
      task: TaskCompactSchema.exactOptional().openapi({
        description: '*Conditional*',
        readOnly: true,
      }),
      type: z
        .enum(['comment', 'system'])
        .exactOptional()
        .openapi({ example: 'comment', readOnly: true }),
    })
    .openapi({ required: [] }),
).openapi('StoryResponse')

const TagBaseSchema = TagCompactSchema.and(
  z
    .object({
      color: z
        .enum([
          'dark-pink',
          'dark-green',
          'dark-blue',
          'dark-red',
          'dark-teal',
          'dark-brown',
          'dark-orange',
          'dark-purple',
          'dark-warm-gray',
          'light-pink',
          'light-green',
          'light-blue',
          'light-red',
          'light-teal',
          'light-brown',
          'light-orange',
          'light-purple',
          'light-warm-gray',
        ])
        .nullable()
        .exactOptional()
        .openapi({ description: 'Color of the tag.', example: 'light-green' }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Free-form textual information associated with the tag (i.e. its description).',
          example: 'Mittens really likes the stuff from Humboldt.',
        }),
    })
    .openapi({ required: [] }),
).openapi('TagBase')

const TagRequestSchema = TagBaseSchema.and(
  z
    .object({
      followers: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
          example: ['12345', '42563'],
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({ description: 'Gid of an object.', example: '12345', 'x-env-variable': true }),
    })
    .openapi({ required: [] }),
).openapi('TagRequest')

const TagResponseSchema = TagBaseSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      followers: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({ description: 'Array of users following this tag.', readOnly: true }),
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/resource/123456789/list',
          readOnly: true,
        }),
      workspace: WorkspaceCompactSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('TagResponse')

const TaskAddFollowersRequestSchema = z
  .object({
    followers: z
      .array(z.string())
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: ['13579', '321654'],
      }),
  })
  .openapi({ required: ['followers'] })
  .openapi('TaskAddFollowersRequest')

const TaskAddProjectRequestSchema = z
  .object({
    insert_after: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A task in the project to insert the task after, or `null` to insert at the beginning of the list.',
        example: '124816',
      }),
    insert_before: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A task in the project to insert the task before, or `null` to insert at the end of the list.',
        example: '432134',
      }),
    project: z
      .string()
      .openapi({ description: 'The project to add the task to.', example: '13579' }),
    section: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A section in the project to insert the task into. The task will be inserted at the bottom of the section.',
        example: '987654',
      }),
  })
  .openapi({ required: ['project'] })
  .openapi('TaskAddProjectRequest')

const TaskAddTagRequestSchema = z
  .object({
    tag: z.string().openapi({ description: 'The tag to add to the task.', example: '13579' }),
  })
  .openapi({ required: ['tag'] })
  .openapi('TaskAddTagRequest')

const TaskBaseSchema = TaskCompactSchema.and(
  z
    .object({
      actual_time_minutes: z
        .number()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.',
          example: 200,
          readOnly: true,
        }),
      approval_status: z
        .enum(['pending', 'approved', 'rejected', 'changes_requested'])
        .exactOptional()
        .openapi({
          description:
            '*Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.',
          example: 'pending',
        }),
      assignee_status: z
        .enum(['today', 'upcoming', 'later', 'new', 'inbox'])
        .exactOptional()
        .openapi({
          description:
            '*Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.',
          example: 'upcoming',
        }),
      completed: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the task is currently marked complete, false if not.',
          example: false,
        }),
      completed_at: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The time at which this task was completed, or null if the task is incomplete.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      completed_by: UserCompactSchema.exactOptional().openapi({ readOnly: true }),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      dependencies: z
        .array(AsanaResourceSchema)
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.',
          readOnly: true,
        }),
      dependents: z
        .array(AsanaResourceSchema)
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.',
          readOnly: true,
        }),
      due_at: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.',
          example: '2019-09-15T02:06:58.147Z',
        }),
      due_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.',
          example: '2019-09-15',
        }),
      external: z
        .object({
          data: z.string().exactOptional().openapi({ example: 'A blob of information.' }),
          gid: z.string().exactOptional().openapi({ example: '1234' }),
        })
        .exactOptional()
        .openapi({
          description:
            '*OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).\nThe external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.',
          example: { data: 'A blob of information', gid: 'my_gid' },
          required: [],
        }),
      hearted: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.',
          example: true,
          readOnly: true,
        }),
      hearts: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead* Array of likes for users who have hearted this task.',
          readOnly: true,
        }),
      html_notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The notes of the text with formatting as HTML.',
          example: '<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>',
        }),
      is_rendered_as_separator: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.',
          example: false,
          readOnly: true,
        }),
      liked: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the task is liked by the authorized user, false if not.',
          example: true,
        }),
      likes: z
        .array(LikeSchema)
        .exactOptional()
        .openapi({
          description: 'Array of likes for users who have liked this task.',
          readOnly: true,
        }),
      memberships: z
        .array(
          z
            .object({
              project: ProjectCompactSchema.exactOptional(),
              section: SectionCompactSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({
          description:
            '*Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.',
          readOnly: true,
        }),
      modified_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The time at which this task was last modified.\n\n*Note: This does not currently reflect any changes in\nassociations such as projects or comments that may have been\nadded or removed from the task.*',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.',
          example: 'Buy catnip',
        }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Free-form textual information associated with the task (i.e. its description).',
          example: 'Mittens really likes the stuff from Humboldt.',
        }),
      num_hearts: z
        .int()
        .exactOptional()
        .openapi({
          description:
            '*Deprecated - please use likes instead* The number of users who have hearted this task.',
          example: 5,
          readOnly: true,
        }),
      num_likes: z
        .int()
        .exactOptional()
        .openapi({
          description: 'The number of users who have liked this task.',
          example: 5,
          readOnly: true,
        }),
      num_subtasks: z
        .int()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The number of subtasks on this task.\n',
          example: 3,
          readOnly: true,
        }),
      start_at: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`.\n*Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*',
          example: '2019-09-14T02:06:58.147Z',
        }),
      start_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`.\n*Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*',
          example: '2019-09-14',
        }),
    })
    .openapi({ required: [] }),
).openapi('TaskBase')

const TaskCountResponseSchema = z
  .object({
    num_completed_milestones: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of completed milestones in a project.', example: 3 }),
    num_completed_tasks: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of completed tasks in a project.', example: 150 }),
    num_incomplete_milestones: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of incomplete milestones in a project.', example: 7 }),
    num_incomplete_tasks: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of incomplete tasks in a project.', example: 50 }),
    num_milestones: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of milestones in a project.', example: 10 }),
    num_tasks: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of tasks in a project.', example: 200 }),
  })
  .openapi({
    description: 'A response object returned from the task count endpoint.',
    required: [],
  })
  .openapi('TaskCountResponse')

const TaskDuplicateRequestSchema = z
  .object({
    include: z
      .enum([
        'notes',
        'assignee',
        'subtasks',
        'attachments',
        'tags',
        'followers',
        'projects',
        'dates',
        'dependencies',
        'parent',
      ])
      .exactOptional()
      .openapi({
        description: 'The fields that will be duplicated to the new task.',
        example: ['notes', 'assignee'],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the new task.', example: 'New Task Name' }),
  })
  .openapi({ required: [] })
  .openapi('TaskDuplicateRequest')

const TaskRemoveFollowersRequestSchema = z
  .object({
    followers: z
      .array(z.string())
      .openapi({
        description:
          'An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.',
        example: ['13579', '321654'],
      }),
  })
  .openapi({ required: ['followers'] })
  .openapi('TaskRemoveFollowersRequest')

const TaskRemoveProjectRequestSchema = z
  .object({
    project: z
      .string()
      .openapi({ description: 'The project to remove the task from.', example: '13579' }),
  })
  .openapi({ required: ['project'] })
  .openapi('TaskRemoveProjectRequest')

const TaskRemoveTagRequestSchema = z
  .object({
    tag: z.string().openapi({ description: 'The tag to remove from the task.', example: '13579' }),
  })
  .openapi({ required: ['tag'] })
  .openapi('TaskRemoveTagRequest')

const TaskRequestSchema = TaskBaseSchema.and(
  z
    .object({
      assignee: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'Gid of a user.',
          example: '12345',
          readOnly: false,
          'x-env-variable': true,
        }),
      assignee_section: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The *assignee section* is a subdivision of a project that groups tasks together in the assignee\'s "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."\nThe `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user\'s "My Tasks" list.',
          example: '12345',
        }),
      custom_fields: z
        .record(
          z.string(),
          z
            .string()
            .openapi({ description: '"{custom_field_gid}" => Value (Can be text, number, etc.)' }),
        )
        .exactOptional()
        .openapi({
          description:
            'An object where each key is a Custom Field GID and each value is an enum GID, string, number, object, or array.',
          example: { '4578152156': 'Not Started', '5678904321': 'On Hold' },
        }),
      followers: z
        .array(z.string().openapi({ description: 'Gid of a user.' }))
        .exactOptional()
        .openapi({
          description:
            '*Create-Only* An array of strings identifying users. These can either be the string "me", an email, or the gid of a user. In order to change followers on an existing task use `addFollowers` and `removeFollowers`.',
          example: ['12345'],
        }),
      parent: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'Gid of a task.',
          example: '12345',
          readOnly: false,
          'x-env-variable': true,
        }),
      projects: z
        .array(z.string().openapi({ description: 'Gid of a project.' }))
        .exactOptional()
        .openapi({
          description:
            '*Create-Only* Array of project gids. In order to change projects on an existing task use `addProject` and `removeProject`.',
          example: ['12345'],
        }),
      tags: z
        .array(z.string().openapi({ description: 'Gid of a tag.' }))
        .exactOptional()
        .openapi({
          description:
            '*Create-Only* Array of tag gids. In order to change tags on an existing task use `addTag` and `removeTag`.',
          example: ['12345'],
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Gid of a workspace.',
          example: '12345',
          readOnly: false,
          'x-env-variable': true,
        }),
    })
    .openapi({ required: [] }),
).openapi('TaskRequest')

const TaskResponseSchema = TaskBaseSchema.and(
  z
    .object({
      assignee: UserCompactSchema.nullable().exactOptional(),
      assignee_section: SectionCompactSchema.and(
        z
          .any()
          .openapi({
            description:
              'The *assignee section* is a subdivision of a project that groups tasks together in the assignee\'s "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."\nThe `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user\'s "My Tasks" list.',
          }),
      )
        .nullable()
        .exactOptional(),
      custom_fields: z
        .array(CustomFieldResponseSchema)
        .exactOptional()
        .openapi({
          description:
            'Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.',
          readOnly: true,
        }),
      followers: z
        .array(UserCompactSchema)
        .exactOptional()
        .openapi({ description: 'Array of users following this task.', readOnly: true }),
      parent: TaskCompactSchema.and(
        z
          .object({})
          .nullable()
          .openapi({
            description:
              'The parent of this task, or `null` if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the `setParent` endpoint. You can create subtasks by using the subtasks endpoint.',
            readOnly: true,
          }),
      ).exactOptional(),
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/resource/123456789/list',
          readOnly: true,
        }),
      projects: z
        .array(ProjectCompactSchema)
        .exactOptional()
        .openapi({
          description:
            '*Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.',
          readOnly: true,
        }),
      tags: z
        .array(TagCompactSchema)
        .exactOptional()
        .openapi({
          description:
            'Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.',
          example: [{ gid: '59746', name: 'Grade A' }],
          readOnly: true,
        }),
      workspace: WorkspaceCompactSchema.and(
        z
          .object({})
          .openapi({
            description:
              '*Create-only*. The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('TaskResponse')

const TaskSetParentRequestSchema = z
  .object({
    insert_after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A subtask of the parent to insert the task after, or `null` to insert at the beginning of the list.',
        example: 'null',
      }),
    insert_before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A subtask of the parent to insert the task before, or `null` to insert at the end of the list.',
        example: '124816',
      }),
    parent: z
      .string()
      .openapi({
        description: 'The new parent of the task, or `null` for no parent.',
        example: '987654',
      }),
  })
  .openapi({ required: ['parent'] })
  .openapi('TaskSetParentRequest')

const TeamAddUserRequestSchema = z
  .object({
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
        example: '12345',
      }),
  })
  .openapi({
    description:
      'A user identification object for specification with the addUser/removeUser endpoints.',
    required: [],
  })
  .openapi('TeamAddUserRequest')

const TeamBaseSchema = TeamCompactSchema.openapi('TeamBase')

const TeamMembershipCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      is_guest: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Describes if the user is a guest in the team.', example: false }),
      team: TeamCompactSchema.exactOptional(),
      user: UserCompactSchema.exactOptional(),
    })
    .openapi({
      description: "This object represents a user's connection to a team.",
      'x-docs-overrides': { 'properties.resource_type.example': 'team_membership' },
      required: [],
    }),
).openapi('TeamMembershipCompact')

const TeamMembershipBaseSchema = TeamMembershipCompactSchema.openapi('TeamMembershipBase')

const TeamMembershipResponseSchema = TeamMembershipCompactSchema.openapi('TeamMembershipResponse')

const TeamRemoveUserRequestSchema = z
  .object({
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
        example: '12345',
      }),
  })
  .openapi({
    description:
      'A user identification object for specification with the addUser/removeUser endpoints.',
    required: [],
  })
  .openapi('TeamRemoveUserRequest')

const TeamRequestSchema = TeamCompactSchema.and(
  z
    .object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The description of the team.\n',
          example: 'All developers should be members of this team.',
        }),
      html_description: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The description of the team with formatting as HTML.\n',
          example: '<body><em>All</em> developers should be members of this team.</body>',
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The organization/workspace the team belongs to. This must be the same organization you are in and cannot be changed once set.\n',
          example: '123456789',
        }),
      visibility: z
        .enum(['secret', 'request_to_join', 'public'])
        .exactOptional()
        .openapi({ description: 'The visibility of the team to users in the same organization\n' }),
    })
    .openapi({ required: [] }),
).openapi('TeamRequest')

const TeamResponseSchema = TeamCompactSchema.and(
  z
    .object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          description: '[Opt In](/docs/input-output-options). The description of the team.\n',
          example: 'All developers should be members of this team.',
        }),
      html_description: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '[Opt In](/docs/input-output-options). The description of the team with formatting as HTML.\n',
          example: '<body><em>All</em> developers should be members of this team.</body>',
        }),
      organization: WorkspaceCompactSchema.and(
        z.object({}).openapi({ description: 'The organization/workspace the team belongs to.\n' }),
      ).exactOptional(),
      permalink_url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A url that points directly to the object within Asana.',
          example: 'https://app.asana.com/0/resource/123456789/list',
          readOnly: true,
        }),
      visibility: z
        .enum(['secret', 'request_to_join', 'public'])
        .exactOptional()
        .openapi({ description: 'The visibility of the team to users in the same organization\n' }),
    })
    .openapi({ required: [] }),
).openapi('TeamResponse')

const TimePeriodBaseSchema = TimePeriodCompactSchema.and(
  z.object({ parent: TimePeriodCompactSchema.exactOptional() }).openapi({ required: [] }),
).openapi('TimePeriodBase')

const TimePeriodResponseSchema = TimePeriodBaseSchema.and(z.object({})).openapi(
  'TimePeriodResponse',
)

const UserBaseSchema = UserCompactSchema.openapi('UserBase')

const UserBaseResponseSchema = UserCompactSchema.and(
  z
    .object({
      email: z
        .email()
        .exactOptional()
        .openapi({
          description: "The user's email address.",
          example: 'gsanchez@example.com',
          readOnly: true,
        }),
      photo: z
        .object({
          image_1024x1024: z.url().exactOptional(),
          image_128x128: z.url().exactOptional(),
          image_21x21: z.url().exactOptional(),
          image_27x27: z.url().exactOptional(),
          image_36x36: z.url().exactOptional(),
          image_60x60: z.url().exactOptional(),
        })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).',
          example: {
            image_1024x1024: 'https://...',
            image_128x128: 'https://...',
            image_21x21: 'https://...',
            image_27x27: 'https://...',
            image_36x36: 'https://...',
            image_60x60: 'https://...',
          },
          readOnly: true,
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('UserBaseResponse')

const UserRequestSchema = UserCompactSchema.openapi('UserRequest')

const UserResponseSchema = UserBaseResponseSchema.and(
  z
    .object({
      workspaces: z
        .array(WorkspaceCompactSchema)
        .exactOptional()
        .openapi({
          description:
            'Workspaces and organizations this user may access.\nNote\\: The API will only return workspaces and organizations that also contain the authenticated user.',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('UserResponse')

const UserTaskListCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The name of the user task list.',
          example: 'My Tasks in My Workspace',
        }),
      owner: UserCompactSchema.exactOptional().openapi({
        description:
          'The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.',
        readOnly: true,
      }),
      workspace: WorkspaceCompactSchema.exactOptional().openapi({
        description: 'The workspace in which the user task list is located.',
        readOnly: true,
      }),
    })
    .openapi({
      description:
        'A user task list represents the tasks assigned to a particular user. It provides API access to a user’s [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) view in Asana.',
      'x-docs-overrides': { 'properties.resource_type.example': 'user_task_list' },
      required: [],
    }),
).openapi('UserTaskListCompact')

const UserTaskListBaseSchema = UserTaskListCompactSchema.openapi('UserTaskListBase')

const UserTaskListRequestSchema = UserTaskListCompactSchema.openapi('UserTaskListRequest')

const UserTaskListResponseSchema = UserTaskListCompactSchema.openapi('UserTaskListResponse')

const WebhookCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      active: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'If true, the webhook will send events - if false it is considered inactive and will not generate events.',
          example: false,
          readOnly: true,
        }),
      resource: AsanaNamedResourceSchema.exactOptional(),
      target: z
        .url()
        .exactOptional()
        .openapi({
          description: 'The URL to receive the HTTP POST.',
          example: 'https://example.com/receive-webhook/7654',
          readOnly: true,
        }),
    })
    .openapi({
      description:
        'Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.',
      'x-docs-overrides': { 'properties.resource_type.example': 'webhook' },
      required: [],
    }),
).openapi('WebhookCompact')

const WebhookFilterSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of change on the **resource** to pass through the filter. For more information refer to `Event.action` in the [Event](/docs/tocS_Event) schema. This can be one of `changed`, `added`, `removed`, `deleted`, and `undeleted` depending on the nature of what has occurred on the resource.',
        example: 'changed',
      }),
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '*Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for `action` of type `changed`',
        example: ['due_at', 'due_on', 'dependencies'],
      }),
    resource_subtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the `resource_subtype` field on the resources themselves.',
        example: 'milestone',
      }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to `task`.',
        example: 'task',
      }),
  })
  .openapi({
    description:
      'A WebhookFilter can be passed on creation of a webhook in order to filter the types of actions that trigger delivery of an [Event](/docs/tocS_Event)',
    required: [],
  })
  .openapi('WebhookFilter')

const WebhookRequestSchema = z
  .object({
    filters: z
      .array(
        WebhookFilterSchema.and(
          z
            .any()
            .openapi({
              description:
                'A set of filters to specify a whitelist for what types of events will be delivered.',
            }),
        ).and(z.object({})),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.',
      }),
    resource: z
      .string()
      .openapi({
        description:
          'A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters.',
        example: '12345',
      }),
    target: z
      .url()
      .openapi({
        description:
          'The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created.',
        example: 'https://example.com/receive-webhook/7654?app_specific_param=app_specific_value',
      }),
  })
  .openapi({ required: ['resource', 'target'] })
  .openapi('WebhookRequest')

const WebhookResponseSchema = WebhookCompactSchema.and(
  z
    .object({
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The time at which this resource was created.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      filters: z
        .array(
          WebhookFilterSchema.and(
            z
              .any()
              .openapi({
                description:
                  'A set of filters to specify a whitelist for what types of events will be delivered.',
              }),
          ).and(z.object({})),
        )
        .exactOptional()
        .openapi({
          description:
            'Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.',
        }),
      last_failure_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The timestamp when the webhook last received an error when sending an event to the target.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
      last_failure_content: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The contents of the last error response sent to the webhook when attempting to deliver events to the target.',
          example: '500 Server Error\\n\\nCould not complete the request',
          readOnly: true,
        }),
      last_success_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The timestamp when the webhook last successfully sent an event to the target.',
          example: '2012-02-22T02:06:58.147Z',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('WebhookResponse')

const WebhookUpdateRequestSchema = z
  .object({
    filters: z
      .array(
        WebhookFilterSchema.and(
          z
            .any()
            .openapi({
              description:
                'A set of filters to specify a whitelist for what types of events will be delivered.',
            }),
        ).and(z.object({})),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookUpdateRequest')

const WorkspaceAddUserRequestSchema = z
  .object({
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
        example: '12345',
      }),
  })
  .openapi({
    description:
      'A user identification object for specification with the addUser/removeUser endpoints.',
    required: [],
  })
  .openapi('WorkspaceAddUserRequest')

const WorkspaceBaseSchema = WorkspaceCompactSchema.openapi('WorkspaceBase')

const WorkspaceMembershipCompactSchema = AsanaResourceSchema.and(
  z
    .object({
      user: UserCompactSchema.exactOptional(),
      workspace: WorkspaceCompactSchema.exactOptional(),
    })
    .openapi({
      description: 'This object determines if a user is a member of a workspace.',
      'x-docs-overrides': { 'properties.resource_type.example': 'workspace_membership' },
      required: [],
    }),
).openapi('WorkspaceMembershipCompact')

const WorkspaceMembershipBaseSchema =
  WorkspaceMembershipCompactSchema.openapi('WorkspaceMembershipBase')

const WorkspaceMembershipRequestSchema = WorkspaceMembershipCompactSchema.openapi(
  'WorkspaceMembershipRequest',
)

const WorkspaceMembershipResponseSchema = WorkspaceMembershipCompactSchema.and(
  z
    .object({
      is_active: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Reflects if this user still a member of the workspace.',
          readOnly: true,
        }),
      is_admin: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Reflects if this user is an admin of the workspace.',
          readOnly: true,
        }),
      is_guest: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Reflects if this user is a guest of the workspace.',
          readOnly: true,
        }),
      user_task_list: UserTaskListCompactSchema.exactOptional().openapi({
        description: 'The user\'s "My Tasks" in the workspace.',
        readOnly: true,
      }),
      vacation_dates: z
        .object({
          end_on: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "The day on which the user's vacation in this workspace ends, or null if there is no end date. This is a date with `YYYY-MM-DD` format.",
              example: '2022-11-07',
            }),
          start_on: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "The day on which the user's vacation in this workspace starts. This is a date with `YYYY-MM-DD` format.",
              example: '2022-11-05',
            }),
        })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before today, the entire `vacation_dates` object will be null.',
          readOnly: true,
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('WorkspaceMembershipResponse')

const WorkspaceRemoveUserRequestSchema = z
  .object({
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
        example: '12345',
      }),
  })
  .openapi({
    description:
      'A user identification object for specification with the addUser/removeUser endpoints.',
    required: [],
  })
  .openapi('WorkspaceRemoveUserRequest')

const WorkspaceRequestSchema = WorkspaceCompactSchema.openapi('WorkspaceRequest')

const WorkspaceResponseSchema = WorkspaceCompactSchema.and(
  z
    .object({
      email_domains: z
        .array(z.url())
        .exactOptional()
        .openapi({
          description: 'The email domains that are associated with this workspace.',
          example: ['asana.com'],
        }),
      is_organization: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether the workspace is an *organization*.', example: false }),
    })
    .openapi({ required: [] }),
).openapi('WorkspaceResponse')

const BadGatewayResponse = {
  description: "There is an issue between the load balancers and Asana's API.",
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const BadRequestResponse = {
  description:
    'This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ForbiddenResponse = {
  description:
    'The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const GatewayTimeoutResponse = {
  description: 'This request took too long to complete.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const GenericErrorResponseResponse = {
  description:
    'Sadly, sometimes requests to the API are not successful. Failures can occur for a wide range of reasons. In all cases, the API should return an HTTP Status Code that indicates the nature of the failure, with a response body in JSON format containing additional information. In the event of a server error the response body will contain an error phrase. These phrases are automatically generated using the [node-asana-phrase library](https://github.com/Asana/node-asana-phrase) and can be used by Asana support to quickly look up the incident that caused the server error.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const InternalServerErrorResponse = {
  description:
    'There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const NotFoundResponse = {
  description:
    'Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const PaymentRequiredResponse = {
  description:
    'The request was valid, but the queried object or object mutation specified in the request is above your current premium level.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ServiceUnavailableResponse = {
  description:
    'Either the upstream service is unavailable to the API, or the API has been intentionally shut off.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const TooManyRequestsResponse = {
  description:
    'You have exceeded one of the enforced rate limits in the API. See the [documentation on rate limiting](https://developers.asana.com/docs/#rate-limits) for more information.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const UnauthorizedResponse = {
  description:
    'A valid authentication token was not provided with the request, so the API could not associate a user with the request.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ArchivedQueryParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Only return projects whose `archived` field takes on the value of this parameter.',
      example: false,
      in: 'query',
      name: 'archived',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const AttachmentPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the attachment.',
      example: '12345',
      in: 'path',
      name: 'attachment_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'attachment',
    },
  })

const AuditLogActorGidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter to events triggered by the actor with this ID.',
      in: 'query',
      name: 'actor_gid',
      required: false,
      schema: { type: 'string' },
    },
  })

const AuditLogActorTypeParamsSchema = z
  .enum(['user', 'asana', 'asana_support', 'anonymous', 'external_administrator'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter to events with an actor of this type.\nThis only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.',
      in: 'query',
      name: 'actor_type',
      required: false,
      schema: {
        enum: ['user', 'asana', 'asana_support', 'anonymous', 'external_administrator'],
        type: 'string',
      },
    },
  })

const AuditLogEndAtParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter to events created before this time (exclusive).',
      in: 'query',
      name: 'end_at',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const AuditLogEventTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter to events of this type.\nRefer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list of values.',
      in: 'query',
      name: 'event_type',
      required: false,
      schema: { type: 'string' },
    },
  })

const AuditLogResourceGidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter to events with this resource ID.',
      in: 'query',
      name: 'resource_gid',
      required: false,
      schema: { type: 'string' },
    },
  })

const AuditLogStartAtParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter to events created after this time (inclusive).',
      in: 'query',
      name: 'start_at',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const CompletedSinceParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.\n',
      example: '2012-02-22T02:06:58.158Z',
      in: 'query',
      name: 'completed_since',
      required: false,
      schema: { type: 'string' },
    },
  })

const CustomFieldPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the custom field.',
      example: '12345',
      in: 'path',
      name: 'custom_field_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'custom_field',
    },
  })

const FieldsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Defines fields to return.\nSome requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.\nThe id of included objects will always be returned, regardless of the field options.',
      example: ['followers', 'assignee'],
      explode: false,
      in: 'query',
      name: 'opt_fields',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const GoalPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the goal.',
      example: '12345',
      in: 'path',
      name: 'goal_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'goal',
    },
  })

const GoalRelationshipPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the goal relationship.',
      example: '12345',
      in: 'path',
      name: 'goal_relationship_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'goal_relationship',
    },
  })

const JobPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the job.',
      example: '12345',
      in: 'path',
      name: 'job_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'job',
    },
  })

const LimitParamsSchema = z
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
        'Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.',
      example: 50,
      in: 'query',
      name: 'limit',
      schema: { type: 'integer' },
      required: false,
    },
  })

const MemberParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Member object gid can be user or team.\n',
      example: '123',
      in: 'query',
      name: 'member',
      required: false,
      schema: { type: 'string' },
    },
  })

const MessagePathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The message to get.',
      example: '321654',
      in: 'path',
      name: 'message_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'message',
    },
  })

const OffsetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
      example: 'eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
      in: 'query',
      name: 'offset',
      schema: { type: 'string' },
      required: false,
    },
  })

const OrganizationExportPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the organization export.',
      example: '12345',
      in: 'path',
      name: 'organization_export_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'organization_export',
    },
  })

const ParentParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Membership parent object gid.\n',
      example: '123',
      in: 'query',
      name: 'parent',
      required: true,
      schema: { type: 'string' },
    },
  })

const PortfolioMembershipPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      example: '1331',
      in: 'path',
      name: 'portfolio_membership_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'portfolio_membership',
    },
  })

const PortfolioPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the portfolio.',
      example: '12345',
      in: 'path',
      name: 'portfolio_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'portfolio',
    },
  })

const PortfolioQueryParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The portfolio to filter results on.',
      example: '12345',
      in: 'query',
      name: 'portfolio',
      schema: { type: 'string' },
      'x-env-variable': 'portfolio',
      required: false,
    },
  })

const PrettyParamsSchema = z
  .preprocess((val) => (val === '' ? undefined : val), z.stringbool().optional())
  .exactOptional()
  .openapi({
    param: {
      allowEmptyValue: true,
      description:
        'Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.',
      example: true,
      in: 'query',
      name: 'opt_pretty',
      required: false,
      schema: { type: 'boolean' },
      style: 'form',
    },
  })

const ProjectBriefPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the project brief.',
      example: '12345',
      in: 'path',
      name: 'project_brief_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'project_brief',
    },
  })

const ProjectMembershipPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      example: '1331',
      in: 'path',
      name: 'project_membership_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'project_membership',
    },
  })

const ProjectPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the project.',
      example: '1331',
      in: 'path',
      name: 'project_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'project',
    },
  })

const ProjectStatusPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The project status update to get.',
      example: '321654',
      in: 'path',
      name: 'project_status_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'project_status',
    },
  })

const ProjectTemplatePathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the project template.',
      example: '1331',
      in: 'path',
      name: 'project_template_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'project_template',
    },
  })

const SectionPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The globally unique identifier for the section.',
      example: '321654',
      in: 'path',
      name: 'section_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'section',
    },
  })

const StatusPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The status update to get.',
      example: '321654',
      in: 'path',
      name: 'status_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'status',
    },
  })

const StoryPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the story.',
      example: '35678',
      in: 'path',
      name: 'story_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'story',
    },
  })

const TagPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the tag.',
      example: '11235',
      in: 'path',
      name: 'tag_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'tag',
    },
  })

const TaskPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The task to operate on.',
      example: '321654',
      in: 'path',
      name: 'task_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'task',
    },
  })

const TeamMembershipPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      example: '724362',
      in: 'path',
      name: 'team_membership_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'team_membership',
    },
  })

const TeamPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the team.',
      example: '159874',
      in: 'path',
      name: 'team_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'team',
    },
  })

const TeamQueryParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The team to filter projects on.',
      example: '14916',
      in: 'query',
      name: 'team',
      schema: { type: 'string' },
      'x-env-variable': 'team',
      required: false,
    },
  })

const TimePeriodPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the time period.',
      example: '917392',
      in: 'path',
      name: 'time_period_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'time_period',
    },
  })

const UserPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
      example: 'me',
      in: 'path',
      name: 'user_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'user',
    },
  })

const UserQueryParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A string identifying a user. This can either be the string "me", an email, or the gid of a user.',
      example: 'me',
      in: 'query',
      name: 'user',
      schema: { type: 'string' },
      'x-env-variable': 'user',
      required: false,
    },
  })

const UserTaskListPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the user task list.',
      example: '12345',
      in: 'path',
      name: 'user_task_list_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'user_task_list',
    },
  })

const WebhookPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the webhook.',
      example: '12345',
      in: 'path',
      name: 'webhook_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'webhook',
    },
  })

const WorkspaceMembershipPathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      example: '12345',
      in: 'path',
      name: 'workspace_membership_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'workspace_membership',
    },
  })

const WorkspacePathGidParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Globally unique identifier for the workspace or organization.',
      example: '12345',
      in: 'path',
      name: 'workspace_gid',
      required: true,
      schema: { type: 'string' },
      'x-env-variable': 'workspace',
    },
  })

const WorkspaceQueryParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The workspace to filter results on.',
      example: '12345',
      in: 'query',
      name: 'workspace',
      schema: { type: 'string' },
      'x-env-variable': 'workspace',
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description:
    'We require that applications designed to access the Asana API on behalf of multiple users implement OAuth 2.0.\nAsana supports the Authorization Code Grant flow.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.asana.com/-/oauth_authorize',
      refreshUrl: 'https://app.asana.com/-/oauth_token',
      scopes: {
        default:
          'Provides access to all endpoints documented in our API reference. If no scopes are requested, this scope is assumed by default.',
        email: 'Provides access to the user’s email through the OpenID Connect user info endpoint.',
        openid:
          'Provides access to OpenID Connect ID tokens and the OpenID Connect user info endpoint.',
        profile:
          'Provides access to the user’s name and profile photo through the OpenID Connect user info endpoint.',
      },
      tokenUrl: 'https://app.asana.com/-/oauth_token',
    },
  },
  type: 'oauth2',
}

const PersonalAccessTokenSecurityScheme = {
  description:
    'A personal access token allows access to the api for the user who created it. This should be kept a secret and be treated like a password.',
  scheme: 'bearer',
  type: 'http',
}

export const getAttachmentsRoute = createRoute({
  method: 'get',
  path: '/attachments',
  tags: ['Attachments'],
  summary: 'Get attachments from an object',
  description:
    'Returns the compact records for all attachments on the object.\n\nThere are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.',
  operationId: 'getAttachmentsForObject',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`.',
            example: '159874',
            in: 'query',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified object's attachments.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(AttachmentCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAttachmentsRoute = createRoute({
  method: 'post',
  path: '/attachments',
  tags: ['Attachments'],
  summary: 'Upload an attachment',
  description:
    'Upload an attachment.\n\nThis method uploads an attachment on an object and returns the compact\nrecord for the created attachment object. This is possible by either:\n\n- Providing the URL of the external resource being attached, or\n- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach\nfiles from third party services such as Dropbox, Box, Vimeo & Google Drive via the API\n\nThe 100MB size limit on attachments in Asana is enforced on this endpoint.\n\nThis endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.\n\nRequests made should follow the HTTP/1.1 specification that line\nterminators are of the form `CRLF` or `\\r\\n` outlined\n[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.',
  operationId: 'createAttachmentForObject',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description:
        'The file you want to upload.\n\n*Note when using curl:*\n\nBe sure to add an `‘@’` before the file path, and use the `--form`\noption instead of the `-d` option.\n\nWhen uploading PDFs with curl, force the content-type to be pdf by\nappending the content type to the file path: `--form\n"file=@file.pdf;type=application/pdf"`.',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              connect_to_app: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    '*Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in.\n',
                }),
              file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Required for `asana` attachments.\n',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the external resource being attached. Required for attachments of type `external`.\n',
                }),
              parent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Required identifier of the parent task, project, or project_brief, as a string.\n',
                }),
              resource_subtype: z
                .enum(['asana', 'dropbox', 'gdrive', 'onedrive', 'box', 'vimeo', 'external'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.\n',
                  example: 'external',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the external resource being attached. Required for attachments of type `external`.\n',
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
      description: 'Successfully uploaded the attachment to the parent object.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AttachmentResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAttachmentsAttachmentGidRoute = createRoute({
  method: 'get',
  path: '/attachments/{attachment_gid}',
  tags: ['Attachments'],
  summary: 'Get an attachment',
  description: 'Get the full record for a single attachment.',
  operationId: 'getAttachment',
  request: {
    params: z.object({ attachment_gid: AttachmentPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for a single attachment.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AttachmentResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    424: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    501: BadGatewayResponse,
    503: ServiceUnavailableResponse,
    504: GatewayTimeoutResponse,
  },
})

export const deleteAttachmentsAttachmentGidRoute = createRoute({
  method: 'delete',
  path: '/attachments/{attachment_gid}',
  tags: ['Attachments'],
  summary: 'Delete an attachment',
  description: 'Deletes a specific, existing attachment.\n\nReturns an empty data record.',
  operationId: 'deleteAttachment',
  request: {
    params: z.object({ attachment_gid: AttachmentPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified attachment.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postBatchRoute = createRoute({
  method: 'post',
  path: '/batch',
  tags: ['Batch API'],
  summary: 'Submit parallel requests',
  description: "Make multiple requests in parallel to Asana's API.",
  operationId: 'createBatchRequest',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The requests to batch together via the Batch API.',
      content: {
        'application/json': {
          schema: z.object({ data: BatchRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully completed the requested batch API operations.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(BatchResponseSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCustomFieldsRoute = createRoute({
  method: 'post',
  path: '/custom_fields',
  tags: ['Custom fields'],
  summary: 'Create a custom field',
  description:
    'Creates a new custom field in a workspace. Every custom field is required\nto be created in a specific workspace, and this workspace cannot be\nchanged once set.\n\nA custom field’s name must be unique within a workspace and not conflict\nwith names of existing task properties such as `Due Date` or `Assignee`.\nA custom field’s type must be one of `text`, `enum`, `multi_enum`, `number`,\n`date`, or `people`.\n\nReturns the full record of the newly created custom field.',
  operationId: 'createCustomField',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The custom field object to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Custom field successfully created.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCustomFieldsCustomFieldGidRoute = createRoute({
  method: 'get',
  path: '/custom_fields/{custom_field_gid}',
  tags: ['Custom fields'],
  summary: 'Get a custom field',
  description:
    'Get the complete definition of a custom field’s metadata.\n\nSince custom fields can be defined for one of a number of types, and\nthese types have different data and behaviors, there are fields that are\nrelevant to a particular type. For instance, as noted above, enum_options\nis only relevant for the enum type and defines the set of choices that\nthe enum could represent. The examples below show some of these\ntype-specific custom field definitions.',
  operationId: 'getCustomField',
  request: {
    params: z.object({ custom_field_gid: CustomFieldPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the complete definition of a custom field’s metadata.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putCustomFieldsCustomFieldGidRoute = createRoute({
  method: 'put',
  path: '/custom_fields/{custom_field_gid}',
  tags: ['Custom fields'],
  summary: 'Update a custom field',
  description:
    'A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged\nWhen using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.\nA custom field’s `type` cannot be updated.\nAn enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.\nLocked custom fields can only be updated by the user who locked the field.\nReturns the complete updated custom field record.',
  operationId: 'updateCustomField',
  request: {
    params: z.object({ custom_field_gid: CustomFieldPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The custom field object with all updated properties.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The custom field was successfully updated.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteCustomFieldsCustomFieldGidRoute = createRoute({
  method: 'delete',
  path: '/custom_fields/{custom_field_gid}',
  tags: ['Custom fields'],
  summary: 'Delete a custom field',
  description:
    'A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.\nLocked custom fields can only be deleted by the user who locked the field.\nReturns an empty data record.',
  operationId: 'deleteCustomField',
  request: {
    params: z.object({ custom_field_gid: CustomFieldPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'The custom field was successfully deleted.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCustomFieldsCustomFieldGidEnumOptionsRoute = createRoute({
  method: 'post',
  path: '/custom_fields/{custom_field_gid}/enum_options',
  tags: ['Custom fields'],
  summary: 'Create an enum option',
  description:
    'Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.\nLocked custom fields can only have enum options added by the user who locked the field.\nReturns the full record of the newly created enum option.',
  operationId: 'createEnumOptionForCustomField',
  request: {
    params: z.object({ custom_field_gid: CustomFieldPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The enum option object to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: EnumOptionRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Custom field enum option successfully created.',
      content: {
        'application/json': {
          schema: z.object({ data: EnumOptionSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCustomFieldsCustomFieldGidEnumOptionsInsertRoute = createRoute({
  method: 'post',
  path: '/custom_fields/{custom_field_gid}/enum_options/insert',
  tags: ['Custom fields'],
  summary: "Reorder a custom field's enum",
  description:
    'Moves a particular enum option to be either before or after another specified enum option in the custom field.\nLocked custom fields can only be reordered by the user who locked the field.',
  operationId: 'insertEnumOptionForCustomField',
  request: {
    params: z.object({ custom_field_gid: CustomFieldPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The enum option object to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: EnumOptionInsertRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Custom field enum option successfully reordered.',
      content: {
        'application/json': {
          schema: z.object({ data: EnumOptionSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putEnumOptionsEnumOptionGidRoute = createRoute({
  method: 'put',
  path: '/enum_options/{enum_option_gid}',
  tags: ['Custom fields'],
  summary: 'Update an enum option',
  description:
    'Updates an existing enum option. Enum custom fields require at least one enabled enum option.\nLocked custom fields can only be updated by the user who locked the field.\nReturns the full record of the updated enum option.',
  operationId: 'updateEnumOption',
  request: {
    params: z.object({
      enum_option_gid: z
        .string()
        .openapi({
          param: {
            description: 'Globally unique identifier for the enum option.',
            example: '124578',
            in: 'path',
            name: 'enum_option_gid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The enum option object to update',
      content: {
        'application/json': {
          schema: z
            .object({ data: EnumOptionRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the specified custom field enum.',
      content: {
        'application/json': {
          schema: z.object({ data: EnumOptionSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Get events on a resource',
  description:
    'Returns the full record for all events that have occurred since the sync\ntoken was created.\n\nA `GET` request to the endpoint `/[path_to_resource]/events` can be made in\nlieu of including the resource ID in the data for the request.\n\nAsana limits a single sync token to 100 events. If more than 100 events exist\nfor a given resource, `has_more: true` will be returned in the response, indicating\nthat there are more events to pull. \n\n*Note: The resource returned will be the resource that triggered the\nevent. This may be different from the one that the events were requested\nfor. For example, a subscription to a project will contain events for\ntasks contained within the project.*',
  operationId: 'getEvents',
  request: {
    query: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description: 'A resource ID to subscribe to. The resource can be a task or project.',
            example: '12345',
            in: 'query',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sync: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.\n*Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*',
            example: 'de4774f6915eae04714ca93bb2f5ee81',
            in: 'query',
            name: 'sync',
            required: false,
            schema: { type: 'string' },
          },
        }),
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved events.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(EventResponseSchema).exactOptional(),
              has_more: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indicates whether there are more events to pull.',
                  example: true,
                }),
              sync: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A sync token to be used with the next call to the /events endpoint.',
                  example: 'de4774f6915eae04714ca93bb2f5ee81',
                }),
            })
            .openapi({
              description:
                'The full record for all events that have occurred since the sync token was created.',
              required: [],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getGoalRelationshipsRoute = createRoute({
  method: 'get',
  path: '/goal_relationships',
  tags: ['Goal relationships'],
  summary: 'Get goal relationships',
  description: 'Returns compact goal relationship records.',
  operationId: 'getGoalRelationships',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      supported_goal: z
        .string()
        .openapi({
          param: {
            description:
              'Globally unique identifier for the supported goal in the goal relationship.',
            example: '12345',
            in: 'query',
            name: 'supported_goal',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resource_subtype: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If provided, filter to goal relationships with a given resource_subtype.',
            example: 'subgoal',
            in: 'query',
            name: 'resource_subtype',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested goal relationships.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(GoalRelationshipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getGoalRelationshipsGoalRelationshipGidRoute = createRoute({
  method: 'get',
  path: '/goal_relationships/{goal_relationship_gid}',
  tags: ['Goal relationships'],
  summary: 'Get a goal relationship',
  description:
    'Returns the complete updated goal relationship record for a single goal relationship.',
  operationId: 'getGoalRelationship',
  request: {
    params: z.object({ goal_relationship_gid: GoalRelationshipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for the goal relationship.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalRelationshipResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putGoalRelationshipsGoalRelationshipGidRoute = createRoute({
  method: 'put',
  path: '/goal_relationships/{goal_relationship_gid}',
  tags: ['Goal relationships'],
  summary: 'Update a goal relationship',
  description:
    'An existing goal relationship can be updated by making a PUT request on the URL for\nthat goal relationship. Only the fields provided in the `data` block will be updated;\nany unspecified fields will remain unchanged.\n\nReturns the complete updated goal relationship record.',
  operationId: 'updateGoalRelationship',
  request: {
    params: z.object({ goal_relationship_gid: GoalRelationshipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the goal relationship.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalRelationshipRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the goal relationship.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalRelationshipResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getGoalsRoute = createRoute({
  method: 'get',
  path: '/goals',
  tags: ['Goals'],
  summary: 'Get goals',
  description: 'Returns compact goal records.',
  operationId: 'getGoals',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      portfolio: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifier for supporting portfolio.',
            example: '159874',
            in: 'query',
            name: 'portfolio',
            schema: { type: 'string' },
            required: false,
          },
        }),
      project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifier for supporting project.',
            example: '512241',
            in: 'query',
            name: 'project',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_workspace_level: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.',
            example: false,
            in: 'query',
            name: 'is_workspace_level',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifier for the team.',
            example: '31326',
            in: 'query',
            name: 'team',
            schema: { type: 'string' },
            required: false,
          },
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifier for the workspace.',
            example: '31326',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      time_periods: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifiers for the time periods.',
            example: '221693,506165',
            in: 'query',
            name: 'time_periods',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested goals.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(GoalCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsRoute = createRoute({
  method: 'post',
  path: '/goals',
  tags: ['Goals'],
  summary: 'Create a goal',
  description:
    'Creates a new goal in a workspace or team.\n\nReturns the full record of the newly created goal.',
  operationId: 'createGoal',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The goal to create.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new goal.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getGoalsGoalGidRoute = createRoute({
  method: 'get',
  path: '/goals/{goal_gid}',
  tags: ['Goals'],
  summary: 'Get a goal',
  description: 'Returns the complete goal record for a single goal.',
  operationId: 'getGoal',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for a single goal.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putGoalsGoalGidRoute = createRoute({
  method: 'put',
  path: '/goals/{goal_gid}',
  tags: ['Goals'],
  summary: 'Update a goal',
  description:
    'An existing goal can be updated by making a PUT request on the URL for\nthat goal. Only the fields provided in the `data` block will be updated;\nany unspecified fields will remain unchanged.\n\nReturns the complete updated goal record.',
  operationId: 'updateGoal',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the goal.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the goal.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteGoalsGoalGidRoute = createRoute({
  method: 'delete',
  path: '/goals/{goal_gid}',
  tags: ['Goals'],
  summary: 'Delete a goal',
  description:
    'A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.\n\nReturns an empty data record.',
  operationId: 'deleteGoal',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified goal.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidAddFollowersRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/addFollowers',
  tags: ['Goals'],
  summary: 'Add a collaborator to a goal',
  description:
    'Adds followers to a goal. Returns the goal the followers were added to.\nEach goal can be associated with zero or more followers in the system.\nRequests to add/remove followers, if successful, will return the complete updated goal record, described above.',
  operationId: 'addFollowers',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The followers to be added as collaborators',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskAddFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added users as collaborators.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidAddSupportingRelationshipRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/addSupportingRelationship',
  tags: ['Goal relationships'],
  summary: 'Add a supporting goal relationship',
  description:
    'Creates a goal relationship by adding a supporting resource to a given goal.\n\nReturns the newly created goal relationship record.',
  operationId: 'addSupportingRelationship',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The supporting resource to be added to the goal',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalAddSupportingRelationshipRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created the goal relationship.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalRelationshipResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getGoalsGoalGidParentGoalsRoute = createRoute({
  method: 'get',
  path: '/goals/{goal_gid}/parentGoals',
  tags: ['Goals'],
  summary: 'Get parent goals from a goal',
  description: 'Returns a compact representation of all of the parent goals of a goal.',
  operationId: 'getParentGoalsForGoal',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified goal's parent goals.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(GoalCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidRemoveFollowersRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/removeFollowers',
  tags: ['Goals'],
  summary: 'Remove a collaborator from a goal',
  description:
    'Removes followers from a goal. Returns the goal the followers were removed from.\nEach goal can be associated with zero or more followers in the system.\nRequests to add/remove followers, if successful, will return the complete updated goal record, described above.',
  operationId: 'removeFollowers',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The followers to be removed as collaborators',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskAddFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed users as collaborators.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidRemoveSupportingRelationshipRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/removeSupportingRelationship',
  tags: ['Goal relationships'],
  summary: 'Removes a supporting goal relationship',
  description: 'Removes a goal relationship for a given parent goal.',
  operationId: 'removeSupportingRelationship',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The supporting resource to be removed from the goal',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalRemoveSupportingRelationshipRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the goal relationship.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidSetMetricRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/setMetric',
  tags: ['Goals'],
  summary: 'Create a goal metric',
  description:
    'Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.',
  operationId: 'createGoalMetric',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The goal metric to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalMetricBaseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created a new goal metric.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postGoalsGoalGidSetMetricCurrentValueRoute = createRoute({
  method: 'post',
  path: '/goals/{goal_gid}/setMetricCurrentValue',
  tags: ['Goals'],
  summary: 'Update a goal metric',
  description:
    "Updates a goal's existing metric's `current_number_value` if one exists,\notherwise responds with a 400 status code.\n\nReturns the complete updated goal metric record.",
  operationId: 'updateGoalMetric',
  request: {
    params: z.object({ goal_gid: GoalPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the goal metric.',
      content: {
        'application/json': {
          schema: z
            .object({ data: GoalMetricCurrentValueRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the goal metric.',
      content: {
        'application/json': {
          schema: z.object({ data: GoalResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getJobsJobGidRoute = createRoute({
  method: 'get',
  path: '/jobs/{job_gid}',
  tags: ['Jobs'],
  summary: 'Get a job by id',
  description: 'Returns the full record for a job.',
  operationId: 'getJob',
  request: {
    params: z.object({ job_gid: JobPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved Job.',
      content: {
        'application/json': {
          schema: z.object({ data: JobCompactSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postOrganizationExportsRoute = createRoute({
  method: 'post',
  path: '/organization_exports',
  tags: ['Organization exports'],
  summary: 'Create an organization export request',
  description:
    'This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.',
  operationId: 'createOrganizationExport',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The organization to export.',
      content: {
        'application/json': {
          schema: z
            .object({ data: OrganizationExportRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created organization export request.',
      content: {
        'application/json': {
          schema: z
            .object({ data: OrganizationExportCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrganizationExportsOrganizationExportGidRoute = createRoute({
  method: 'get',
  path: '/organization_exports/{organization_export_gid}',
  tags: ['Organization exports'],
  summary: 'Get details on an org export request',
  description: 'Returns details of a previously-requested Organization export.',
  operationId: 'getOrganizationExport',
  request: {
    params: z.object({ organization_export_gid: OrganizationExportPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved organization export object.',
      content: {
        'application/json': {
          schema: z
            .object({ data: OrganizationExportCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfolioMembershipsRoute = createRoute({
  method: 'get',
  path: '/portfolio_memberships',
  tags: ['Portfolio memberships'],
  summary: 'Get multiple portfolio memberships',
  description:
    'Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.',
  operationId: 'getPortfolioMemberships',
  request: {
    query: z.object({
      portfolio: PortfolioQueryParamParamsSchema,
      workspace: WorkspaceQueryParamParamsSchema,
      user: UserQueryParamParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved portfolio memberships.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PortfolioMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfolioMembershipsPortfolioMembershipGidRoute = createRoute({
  method: 'get',
  path: '/portfolio_memberships/{portfolio_membership_gid}',
  tags: ['Portfolio memberships'],
  summary: 'Get a portfolio membership',
  description: 'Returns the complete portfolio record for a single portfolio membership.',
  operationId: 'getPortfolioMembership',
  request: {
    params: z.object({ portfolio_membership_gid: PortfolioMembershipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested portfolio membership.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioMembershipCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfoliosRoute = createRoute({
  method: 'get',
  path: '/portfolios',
  tags: ['Portfolios'],
  summary: 'Get multiple portfolios',
  description:
    'Returns a list of the portfolios in compact representation that are owned by the current API user.',
  operationId: 'getPortfolios',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'The workspace or organization to filter portfolios on.',
            example: '1331',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      owner: z
        .string()
        .openapi({
          param: {
            description:
              'The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own.',
            example: '14916',
            in: 'query',
            name: 'owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved portfolios.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PortfolioCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosRoute = createRoute({
  method: 'post',
  path: '/portfolios',
  tags: ['Portfolios'],
  summary: 'Create a portfolio',
  description:
    'Creates a new portfolio in the given workspace with the supplied name.\n\nNote that portfolios created in the Asana UI may have some state\n(like the “Priority” custom field) which is automatically added\nto the portfolio when it is created. Portfolios created via our\nAPI will *not* be created with the same initial state to allow\nintegrations to create their own starting state on a portfolio.',
  operationId: 'createPortfolio',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The portfolio to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfoliosPortfolioGidRoute = createRoute({
  method: 'get',
  path: '/portfolios/{portfolio_gid}',
  tags: ['Portfolios'],
  summary: 'Get a portfolio',
  description: 'Returns the complete portfolio record for a single portfolio.',
  operationId: 'getPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putPortfoliosPortfolioGidRoute = createRoute({
  method: 'put',
  path: '/portfolios/{portfolio_gid}',
  tags: ['Portfolios'],
  summary: 'Update a portfolio',
  description:
    'An existing portfolio can be updated by making a PUT request on the URL for\nthat portfolio. Only the fields provided in the `data` block will be updated;\nany unspecified fields will remain unchanged.\n\nReturns the complete updated portfolio record.',
  operationId: 'updatePortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deletePortfoliosPortfolioGidRoute = createRoute({
  method: 'delete',
  path: '/portfolios/{portfolio_gid}',
  tags: ['Portfolios'],
  summary: 'Delete a portfolio',
  description:
    'An existing portfolio can be deleted by making a DELETE request on\nthe URL for that portfolio.\n\nReturns an empty data record.',
  operationId: 'deletePortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified portfolio.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidAddCustomFieldSettingRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/addCustomFieldSetting',
  tags: ['Portfolios'],
  summary: 'Add a custom field to a portfolio',
  description:
    'Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.',
  operationId: 'addCustomFieldSettingForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema }),
    body: {
      description: 'Information about the custom field setting.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AddCustomFieldSettingRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the custom field to the portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldSettingResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidAddItemRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/addItem',
  tags: ['Portfolios'],
  summary: 'Add a portfolio item',
  description: 'Add an item to a portfolio.\nReturns an empty data block.',
  operationId: 'addItemForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the item being inserted.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioAddItemRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the item to the portfolio.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidAddMembersRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/addMembers',
  tags: ['Portfolios'],
  summary: 'Add users to a portfolio',
  description:
    'Adds the specified list of users as members of the portfolio.\nReturns the updated portfolio record.',
  operationId: 'addMembersForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the members being added.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AddMembersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added members to the portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfoliosPortfolioGidCustomFieldSettingsRoute = createRoute({
  method: 'get',
  path: '/portfolios/{portfolio_gid}/custom_field_settings',
  tags: ['Custom field settings'],
  summary: "Get a portfolio's custom fields",
  description:
    'Returns a list of all of the custom fields settings on a portfolio, in compact form.',
  operationId: 'getCustomFieldSettingsForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved custom field settings objects for a portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CustomFieldSettingResponseSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfoliosPortfolioGidItemsRoute = createRoute({
  method: 'get',
  path: '/portfolios/{portfolio_gid}/items',
  tags: ['Portfolios'],
  summary: 'Get portfolio items',
  description: 'Get a list of the items in compact form in a portfolio.',
  operationId: 'getItemsForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested portfolio's items.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPortfoliosPortfolioGidPortfolioMembershipsRoute = createRoute({
  method: 'get',
  path: '/portfolios/{portfolio_gid}/portfolio_memberships',
  tags: ['Portfolio memberships'],
  summary: 'Get memberships from a portfolio',
  description: 'Returns the compact portfolio membership records for the portfolio.',
  operationId: 'getPortfolioMembershipsForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({
      user: UserQueryParamParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested portfolio's memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PortfolioMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/removeCustomFieldSetting',
  tags: ['Portfolios'],
  summary: 'Remove a custom field from a portfolio',
  description: 'Removes a custom field setting from a portfolio.',
  operationId: 'removeCustomFieldSettingForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema }),
    body: {
      description: 'Information about the custom field setting being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: RemoveCustomFieldSettingRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the custom field from the portfolio.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidRemoveItemRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/removeItem',
  tags: ['Portfolios'],
  summary: 'Remove a portfolio item',
  description: 'Remove an item from a portfolio.\nReturns an empty data block.',
  operationId: 'removeItemForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the item being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioRemoveItemRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the item from the portfolio.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postPortfoliosPortfolioGidRemoveMembersRoute = createRoute({
  method: 'post',
  path: '/portfolios/{portfolio_gid}/removeMembers',
  tags: ['Portfolios'],
  summary: 'Remove users from a portfolio',
  description:
    'Removes the specified list of users from members of the portfolio.\nReturns the updated portfolio record.',
  operationId: 'removeMembersForPortfolio',
  request: {
    params: z.object({ portfolio_gid: PortfolioPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the members being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: RemoveMembersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the members from the portfolio.',
      content: {
        'application/json': {
          schema: z
            .object({ data: PortfolioResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectBriefsProjectBriefGidRoute = createRoute({
  method: 'get',
  path: '/project_briefs/{project_brief_gid}',
  tags: ['Project briefs'],
  summary: 'Get a project brief',
  description: 'Get the full record for a project brief.',
  operationId: 'getProjectBrief',
  request: {
    params: z.object({ project_brief_gid: ProjectBriefPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for a project brief.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectBriefResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    424: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    501: BadGatewayResponse,
    503: ServiceUnavailableResponse,
    504: GatewayTimeoutResponse,
  },
})

export const putProjectBriefsProjectBriefGidRoute = createRoute({
  method: 'put',
  path: '/project_briefs/{project_brief_gid}',
  tags: ['Project briefs'],
  summary: 'Update a project brief',
  description:
    'An existing project brief can be updated by making a PUT request on the URL for\nthat project brief. Only the fields provided in the `data` block will be updated;\nany unspecified fields will remain unchanged.\n\nReturns the complete updated project brief record.',
  operationId: 'updateProjectBrief',
  request: {
    params: z.object({ project_brief_gid: ProjectBriefPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the project brief.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectBriefRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the project brief.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectBriefResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteProjectBriefsProjectBriefGidRoute = createRoute({
  method: 'delete',
  path: '/project_briefs/{project_brief_gid}',
  tags: ['Project briefs'],
  summary: 'Delete a project brief',
  description: 'Deletes a specific, existing project brief.\n\nReturns an empty data record.',
  operationId: 'deleteProjectBrief',
  request: {
    params: z.object({ project_brief_gid: ProjectBriefPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified project brief.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectMembershipsProjectMembershipGidRoute = createRoute({
  method: 'get',
  path: '/project_memberships/{project_membership_gid}',
  tags: ['Project memberships'],
  summary: 'Get a project membership',
  description: 'Returns the complete project record for a single project membership.',
  operationId: 'getProjectMembership',
  request: {
    params: z.object({ project_membership_gid: ProjectMembershipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested project membership.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectMembershipResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectStatusesProjectStatusGidRoute = createRoute({
  method: 'get',
  path: '/project_statuses/{project_status_gid}',
  tags: ['Project statuses'],
  summary: 'Get a project status',
  description:
    '*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*\n\nReturns the complete record for a single status update.',
  operationId: 'getProjectStatus',
  request: {
    params: z.object({ project_status_gid: ProjectStatusPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified project's status updates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectStatusResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteProjectStatusesProjectStatusGidRoute = createRoute({
  method: 'delete',
  path: '/project_statuses/{project_status_gid}',
  tags: ['Project statuses'],
  summary: 'Delete a project status',
  description:
    '*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*\n\nDeletes a specific, existing project status update.\n\nReturns an empty data record.',
  operationId: 'deleteProjectStatus',
  request: {
    params: z.object({ project_status_gid: ProjectStatusPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified project status.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectTemplatesRoute = createRoute({
  method: 'get',
  path: '/project_templates',
  tags: ['Project templates'],
  summary: 'Get multiple project templates',
  description:
    'Returns the compact project template records for all project templates in the given team or workspace.',
  operationId: 'getProjectTemplates',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      workspace: WorkspaceQueryParamParamsSchema,
      team: TeamQueryParamParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested team's or workspace's project templates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectTemplateCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectTemplatesProjectTemplateGidRoute = createRoute({
  method: 'get',
  path: '/project_templates/{project_template_gid}',
  tags: ['Project templates'],
  summary: 'Get a project template',
  description: 'Returns the complete project template record for a single project template.',
  operationId: 'getProjectTemplate',
  request: {
    params: z.object({ project_template_gid: ProjectTemplatePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested project template.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectTemplateResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectTemplatesProjectTemplateGidInstantiateProjectRoute = createRoute({
  method: 'post',
  path: '/project_templates/{project_template_gid}/instantiateProject',
  tags: ['Project templates'],
  summary: 'Instantiate a project from a project template',
  description:
    'Creates and returns a job that will asynchronously handle the project instantiation.\n\nTo form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.\n\n_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._',
  operationId: 'instantiateProject',
  request: {
    params: z.object({ project_template_gid: ProjectTemplatePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description:
        "Describes the inputs used for instantiating a project, such as the resulting project's name, which team it should be created in, and values for date variables.",
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectTemplateInstantiateProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successfully created the job to handle project instantiation.',
      content: {
        'application/json': {
          schema: z.object({ data: JobCompactSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['Projects'],
  summary: 'Get multiple projects',
  description:
    'Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.\n*Note: This endpoint may timeout for large domains. Try filtering by team!*',
  operationId: 'getProjects',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The workspace or organization to filter projects on.',
            example: '1331',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The team to filter projects on.',
            example: '14916',
            in: 'query',
            name: 'team',
            schema: { type: 'string' },
            required: false,
          },
        }),
      archived: ArchivedQueryParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved projects.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Projects'],
  summary: 'Create a project',
  description:
    'Create a new project in a workspace or team.\n\nEvery project is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe `workspace` parameter regardless of whether or not it is an\norganization.\n\nIf the workspace for your project is an organization, you must also\nsupply a `team` to share the project with.\n\nReturns the full record of the newly created project.',
  operationId: 'createProject',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The project to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully retrieved projects.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}',
  tags: ['Projects'],
  summary: 'Get a project',
  description: 'Returns the complete project record for a single project.',
  operationId: 'getProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putProjectsProjectGidRoute = createRoute({
  method: 'put',
  path: '/projects/{project_gid}',
  tags: ['Projects'],
  summary: 'Update a project',
  description:
    'A specific, existing project can be updated by making a PUT request on\nthe URL for that project. Only the fields provided in the `data` block\nwill be updated; any unspecified fields will remain unchanged.\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated project record.',
  operationId: 'updateProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated fields for the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteProjectsProjectGidRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_gid}',
  tags: ['Projects'],
  summary: 'Delete a project',
  description:
    'A specific, existing project can be deleted by making a DELETE request on\nthe URL for that project.\n\nReturns an empty data record.',
  operationId: 'deleteProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified project.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidAddCustomFieldSettingRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/addCustomFieldSetting',
  tags: ['Projects'],
  summary: 'Add a custom field to a project',
  description:
    'Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.',
  operationId: 'addCustomFieldSettingForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema }),
    body: {
      description: 'Information about the custom field setting.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AddCustomFieldSettingRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the custom field to the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: CustomFieldSettingResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidAddFollowersRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/addFollowers',
  tags: ['Projects'],
  summary: 'Add followers to a project',
  description:
    'Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.\nReturns the updated project record.',
  operationId: 'addFollowersForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the followers being added.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AddFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added followers to the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidAddMembersRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/addMembers',
  tags: ['Projects'],
  summary: 'Add users to a project',
  description:
    'Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user\'s default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint\'s default behavior of setting "Tasks added" notifications to `false`.\nReturns the updated project record.',
  operationId: 'addMembersForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the members being added.',
      content: {
        'application/json': {
          schema: z
            .object({ data: AddMembersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added members to the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidCustomFieldSettingsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/custom_field_settings',
  tags: ['Custom field settings'],
  summary: "Get a project's custom fields",
  description:
    'Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.',
  operationId: 'getCustomFieldSettingsForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved custom field settings objects for a project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CustomFieldSettingResponseSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidDuplicateRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/duplicate',
  tags: ['Projects'],
  summary: 'Duplicate a project',
  description: 'Creates and returns a job that will asynchronously handle the duplication.',
  operationId: 'duplicateProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: "Describes the duplicate's name and the elements that will be duplicated.",
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectDuplicateRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successfully created the job to handle duplication.',
      content: {
        'application/json': {
          schema: z.object({ data: JobCompactSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidProjectBriefsRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/project_briefs',
  tags: ['Project briefs'],
  summary: 'Create a project brief',
  description:
    'Creates a new project brief.\n\nReturns the full record of the newly created project brief.',
  operationId: 'createProjectBrief',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The project brief to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectBriefRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new project brief.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectBriefResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidProjectMembershipsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/project_memberships',
  tags: ['Project memberships'],
  summary: 'Get memberships from a project',
  description: 'Returns the compact project membership records for the project.',
  operationId: 'getProjectMembershipsForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({
      user: UserQueryParamParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested project's memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidProjectStatusesRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/project_statuses',
  tags: ['Project statuses'],
  summary: 'Get statuses from a project',
  description:
    '*Deprecated: new integrations should prefer the `/status_updates` route.*\n\nReturns the compact project status update records for all updates on the project.',
  operationId: 'getProjectStatusesForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified project's status updates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectStatusCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidProjectStatusesRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/project_statuses',
  tags: ['Project statuses'],
  summary: 'Create a project status',
  description:
    '*Deprecated: new integrations should prefer the `/status_updates` route.*\n\nCreates a new status update on the project.\n\nReturns the full record of the newly created project status update.',
  operationId: 'createProjectStatusForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The project status to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectStatusBaseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new story.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectStatusResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidRemoveCustomFieldSettingRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/removeCustomFieldSetting',
  tags: ['Projects'],
  summary: 'Remove a custom field from a project',
  description: 'Removes a custom field setting from a project.',
  operationId: 'removeCustomFieldSettingForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema }),
    body: {
      description: 'Information about the custom field setting being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: RemoveCustomFieldSettingRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the custom field from the project.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidRemoveFollowersRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/removeFollowers',
  tags: ['Projects'],
  summary: 'Remove followers from a project',
  description:
    'Removes the specified list of users from following the project, this will not affect project membership status.\nReturns the updated project record.',
  operationId: 'removeFollowersForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the followers being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: RemoveFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed followers from the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidRemoveMembersRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/removeMembers',
  tags: ['Projects'],
  summary: 'Remove users from a project',
  description:
    'Removes the specified list of users from members of the project.\nReturns the updated project record.',
  operationId: 'removeMembersForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'Information about the members being removed.',
      content: {
        'application/json': {
          schema: z
            .object({ data: RemoveMembersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the members from the project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidSaveAsTemplateRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/saveAsTemplate',
  tags: ['Projects'],
  summary: 'Create a project template from a project',
  description:
    "Creates and returns a job that will asynchronously handle the project template creation. Note that\nwhile the resulting project template can be accessed with the API, it won't be visible in the Asana\nUI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).",
  operationId: 'projectSaveAsTemplate',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description:
        "Describes the inputs used for creating a project template, such as the resulting project template's name, which team it should be created in.",
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectSaveAsTemplateRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the job to handle project template creation.',
      content: {
        'application/json': {
          schema: z.object({ data: JobCompactSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidSectionsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/sections',
  tags: ['Sections'],
  summary: 'Get sections in a project',
  description: 'Returns the compact records for all sections in the specified project.',
  operationId: 'getSectionsForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved sections in project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(SectionCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidSectionsRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/sections',
  tags: ['Sections'],
  summary: 'Create a section in a project',
  description:
    'Creates a new section in a project.\nReturns the full record of the newly created section.',
  operationId: 'createSectionForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The section to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the specified section.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postProjectsProjectGidSectionsInsertRoute = createRoute({
  method: 'post',
  path: '/projects/{project_gid}/sections/insert',
  tags: ['Sections'],
  summary: 'Move or Insert sections',
  description:
    'Move sections relative to each other. One of\n`before_section` or `after_section` is required.\n\nSections cannot be moved between projects.\n\nReturns an empty data block.',
  operationId: 'insertSectionForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: "The section's move action.",
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectSectionInsertRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully moved the specified section.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidTaskCountsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/task_counts',
  tags: ['Projects'],
  summary: 'Get task count of a project',
  description:
    'Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.\n\nThis endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).\n\nMilestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.',
  operationId: 'getTaskCountsForProject',
  request: {
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested project's task counts.",
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskCountResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getProjectsProjectGidTasksRoute = createRoute({
  method: 'get',
  path: '/projects/{project_gid}/tasks',
  tags: ['Tasks'],
  summary: 'Get tasks from a project',
  description:
    'Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.',
  operationId: 'getTasksForProject',
  request: {
    query: z.object({
      completed_since: CompletedSinceParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    params: z.object({ project_gid: ProjectPathGidParamsSchema }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested project's tasks.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSectionsSectionGidRoute = createRoute({
  method: 'get',
  path: '/sections/{section_gid}',
  tags: ['Sections'],
  summary: 'Get a section',
  description: 'Returns the complete record for a single section.',
  operationId: 'getSection',
  request: {
    params: z.object({ section_gid: SectionPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved section.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putSectionsSectionGidRoute = createRoute({
  method: 'put',
  path: '/sections/{section_gid}',
  tags: ['Sections'],
  summary: 'Update a section',
  description:
    'A specific, existing section can be updated by making a PUT request on\nthe URL for that project. Only the fields provided in the `data` block\nwill be updated; any unspecified fields will remain unchanged. (note that\nat this time, the only field that can be updated is the `name` field.)\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated section record.',
  operationId: 'updateSection',
  request: {
    params: z.object({ section_gid: SectionPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The section to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the specified section.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteSectionsSectionGidRoute = createRoute({
  method: 'delete',
  path: '/sections/{section_gid}',
  tags: ['Sections'],
  summary: 'Delete a section',
  description:
    'A specific, existing section can be deleted by making a DELETE request on\nthe URL for that section.\n\nNote that sections must be empty to be deleted.\n\nThe last remaining section cannot be deleted.\n\nReturns an empty data block.',
  operationId: 'deleteSection',
  request: {
    params: z.object({ section_gid: SectionPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified section.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postSectionsSectionGidAddTaskRoute = createRoute({
  method: 'post',
  path: '/sections/{section_gid}/addTask',
  tags: ['Sections'],
  summary: 'Add task to section',
  description:
    'Add a task to a specific, existing section. This will remove the task from other sections of the project.\n\nThe task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.\n\nThis does not work for separators (tasks with the resource_subtype of section).',
  operationId: 'addTaskForSection',
  request: {
    params: z.object({ section_gid: SectionPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The task and optionally the insert location.',
      content: {
        'application/json': {
          schema: z
            .object({ data: SectionTaskInsertRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSectionsSectionGidTasksRoute = createRoute({
  method: 'get',
  path: '/sections/{section_gid}/tasks',
  tags: ['Tasks'],
  summary: 'Get tasks from a section',
  description:
    '*Board view only*: Returns the compact section records for all tasks within the given section.',
  operationId: 'getTasksForSection',
  request: {
    params: z.object({ section_gid: SectionPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the section's tasks.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getStatusUpdatesRoute = createRoute({
  method: 'get',
  path: '/status_updates',
  tags: ['Status updates'],
  summary: 'Get status updates from an object',
  description: 'Returns the compact status update records for all updates on the object.',
  operationId: 'getStatusesForObject',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.',
            example: '159874',
            in: 'query',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      created_since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return statuses that have been created since the given time.',
            example: '2012-02-22T02:06:58.158Z',
            in: 'query',
            name: 'created_since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified object's status updates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(StatusUpdateCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postStatusUpdatesRoute = createRoute({
  method: 'post',
  path: '/status_updates',
  tags: ['Status updates'],
  summary: 'Create a status update',
  description:
    'Creates a new status update on an object.\nReturns the full record of the newly created status update.',
  operationId: 'createStatusForObject',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The status update to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: StatusUpdateRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new status update.',
      content: {
        'application/json': {
          schema: z
            .object({ data: StatusUpdateResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getStatusUpdatesStatusGidRoute = createRoute({
  method: 'get',
  path: '/status_updates/{status_gid}',
  tags: ['Status updates'],
  summary: 'Get a status update',
  description: 'Returns the complete record for a single status update.',
  operationId: 'getStatus',
  request: {
    params: z.object({ status_gid: StatusPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified object's status updates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: StatusUpdateResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteStatusUpdatesStatusGidRoute = createRoute({
  method: 'delete',
  path: '/status_updates/{status_gid}',
  tags: ['Status updates'],
  summary: 'Delete a status update',
  description: 'Deletes a specific, existing status update.\n\nReturns an empty data record.',
  operationId: 'deleteStatus',
  request: {
    params: z.object({ status_gid: StatusPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified status.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getStoriesStoryGidRoute = createRoute({
  method: 'get',
  path: '/stories/{story_gid}',
  tags: ['Stories'],
  summary: 'Get a story',
  description: 'Returns the full record for a single story.',
  operationId: 'getStory',
  request: {
    params: z.object({ story_gid: StoryPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified story.',
      content: {
        'application/json': {
          schema: z.object({ data: StoryResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putStoriesStoryGidRoute = createRoute({
  method: 'put',
  path: '/stories/{story_gid}',
  tags: ['Stories'],
  summary: 'Update a story',
  description:
    'Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.',
  operationId: 'updateStory',
  request: {
    params: z.object({ story_gid: StoryPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The comment story to update.',
      content: {
        'application/json': {
          schema: z.object({ data: StoryBaseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified story.',
      content: {
        'application/json': {
          schema: z.object({ data: StoryResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteStoriesStoryGidRoute = createRoute({
  method: 'delete',
  path: '/stories/{story_gid}',
  tags: ['Stories'],
  summary: 'Delete a story',
  description:
    'Deletes a story. A user can only delete stories they have created.\n\nReturns an empty data record.',
  operationId: 'deleteStory',
  request: {
    params: z.object({ story_gid: StoryPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified story.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Get multiple tags',
  description:
    'Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.',
  operationId: 'getTags',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The workspace to filter tags on.',
            example: '1331',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified set of tags.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TagCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Create a tag',
  description:
    'Creates a new tag in a workspace or organization.\n\nEvery tag is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe workspace parameter regardless of whether or not it is an\norganization.\n\nReturns the full record of the newly created tag.',
  operationId: 'createTag',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The tag to create.',
      content: {
        'application/json': {
          schema: z.object({ data: TagRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the newly specified tag.',
      content: {
        'application/json': {
          schema: z.object({ data: TagResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTagsTagGidRoute = createRoute({
  method: 'get',
  path: '/tags/{tag_gid}',
  tags: ['Tags'],
  summary: 'Get a tag',
  description: 'Returns the complete tag record for a single tag.',
  operationId: 'getTag',
  request: {
    params: z.object({ tag_gid: TagPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified tag.',
      content: {
        'application/json': {
          schema: z.object({ data: TagResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTagsTagGidRoute = createRoute({
  method: 'put',
  path: '/tags/{tag_gid}',
  tags: ['Tags'],
  summary: 'Update a tag',
  description:
    'Updates the properties of a tag. Only the fields provided in the `data`\nblock will be updated; any unspecified fields will remain unchanged.\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the tag.\n\nReturns the complete updated tag record.',
  operationId: 'updateTag',
  request: {
    params: z.object({ tag_gid: TagPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully updated the specified tag.',
      content: {
        'application/json': {
          schema: z.object({ data: TagResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteTagsTagGidRoute = createRoute({
  method: 'delete',
  path: '/tags/{tag_gid}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  description:
    'A specific, existing tag can be deleted by making a DELETE request on\nthe URL for that tag.\n\nReturns an empty data record.',
  operationId: 'deleteTag',
  request: {
    params: z.object({ tag_gid: TagPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified tag.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTagsTagGidTasksRoute = createRoute({
  method: 'get',
  path: '/tags/{tag_gid}/tasks',
  tags: ['Tasks'],
  summary: 'Get tasks from a tag',
  description:
    'Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.',
  operationId: 'getTasksForTag',
  request: {
    params: z.object({ tag_gid: TagPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the tasks associated with the specified tag.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Get multiple tasks',
  description:
    'Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.\n\nFor more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).',
  operationId: 'getTasks',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      assignee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.\n*Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*',
            example: '14641',
            in: 'query',
            name: 'assignee',
            schema: { type: 'string' },
            'x-env-variable': 'assignee',
            required: false,
          },
        }),
      project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to filter tasks on.',
            example: '321654',
            in: 'query',
            name: 'project',
            schema: { type: 'string' },
            'x-env-variable': 'project',
            required: false,
          },
        }),
      section: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The section to filter tasks on.\n*Note: Currently, this is only supported in board views.*',
            example: '321654',
            in: 'query',
            name: 'section',
            schema: { type: 'string' },
            'x-env-variable': 'section',
            required: false,
          },
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The workspace to filter tasks on.\n*Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*',
            example: '321654',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            'x-env-variable': 'workspace',
            required: false,
          },
        }),
      completed_since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return tasks that are either incomplete or that have been completed since this time.',
            in: 'query',
            name: 'completed_since',
            schema: { example: '2012-02-22T02:06:58.158Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2012-02-22T02:06:58.158Z',
        }),
      modified_since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return tasks that have been modified since the given time.\n\n*Note: A task is considered “modified” if any of its properties\nchange, or associations between it and other objects are modified\n(e.g.  a task being added to a project). A task is not considered\nmodified just because another object it is associated with (e.g. a\nsubtask) is modified. Actions that count as modifying the task\ninclude assigning, renaming, completing, and adding stories.*',
            example: '2012-02-22T02:06:58.158Z',
            in: 'query',
            name: 'modified_since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved requested tasks.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksRoute = createRoute({
  method: 'post',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Create a task',
  description:
    'Creating a new task is as easy as POSTing to the `/tasks` endpoint with a\ndata block containing the fields you’d like to set on the task. Any\nunspecified fields will take on default values.\n\nEvery task is required to be created in a specific workspace, and this\nworkspace cannot be changed once set. The workspace need not be set\nexplicitly if you specify `projects` or a `parent` task instead.',
  operationId: 'createTask',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The task to create.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new task.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}',
  tags: ['Tasks'],
  summary: 'Get a task',
  description: 'Returns the complete task record for a single task.',
  operationId: 'getTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified task.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTasksTaskGidRoute = createRoute({
  method: 'put',
  path: '/tasks/{task_gid}',
  tags: ['Tasks'],
  summary: 'Update a task',
  description:
    'A specific, existing task can be updated by making a PUT request on the\nURL for that task. Only the fields provided in the `data` block will be\nupdated; any unspecified fields will remain unchanged.\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated task record.',
  operationId: 'updateTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The task to update.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the specified task.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteTasksTaskGidRoute = createRoute({
  method: 'delete',
  path: '/tasks/{task_gid}',
  tags: ['Tasks'],
  summary: 'Delete a task',
  description:
    'A specific, existing task can be deleted by making a DELETE request on\nthe URL for that task. Deleted tasks go into the “trash” of the user\nmaking the delete request. Tasks can be recovered from the trash within a\nperiod of 30 days; afterward they are completely removed from the system.\n\nReturns an empty data record.',
  operationId: 'deleteTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the specified task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidAddDependenciesRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/addDependencies',
  tags: ['Tasks'],
  summary: 'Set dependencies for a task',
  description:
    'Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.',
  operationId: 'addDependenciesForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The list of tasks to set as dependencies.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ModifyDependenciesRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully set the specified dependencies on the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidAddDependentsRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/addDependents',
  tags: ['Tasks'],
  summary: 'Set dependents for a task',
  description:
    'Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.',
  operationId: 'addDependentsForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The list of tasks to add as dependents.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ModifyDependentsRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully set the specified dependents on the given task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidAddFollowersRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/addFollowers',
  tags: ['Tasks'],
  summary: 'Add followers to a task',
  description:
    'Adds followers to a task. Returns an empty data block.\nEach task can be associated with zero or more followers in the system.\nRequests to add/remove followers, if successful, will return the complete updated task record, described above.',
  operationId: 'addFollowersForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The followers to add to the task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskAddFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the specified followers to the task.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidAddProjectRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/addProject',
  tags: ['Tasks'],
  summary: 'Add a project to a task',
  description:
    'Adds the task to the specified project, in the optional location\nspecified. If no location arguments are given, the task will be added to\nthe end of the project.\n\n`addProject` can also be used to reorder a task within a project or\nsection that already contains it.\n\nAt most one of `insert_before`, `insert_after`, or `section` should be\nspecified. Inserting into a section in an non-order-dependent way can be\ndone by specifying section, otherwise, to insert within a section in a\nparticular place, specify `insert_before` or `insert_after` and a task\nwithin the section to anchor the position of this task.\n\nReturns an empty data block.',
  operationId: 'addProjectForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The project to add the task to.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskAddProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the specified project to the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidAddTagRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/addTag',
  tags: ['Tasks'],
  summary: 'Add a tag to a task',
  description: 'Adds a tag to a task. Returns an empty data block.',
  operationId: 'addTagForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The tag to add to the task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskAddTagRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added the specified tag to the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidDependenciesRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/dependencies',
  tags: ['Tasks'],
  summary: 'Get dependencies from a task',
  description: 'Returns the compact representations of all of the dependencies of a task.',
  operationId: 'getDependenciesForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified task's dependencies.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidDependentsRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/dependents',
  tags: ['Tasks'],
  summary: 'Get dependents from a task',
  description: 'Returns the compact representations of all of the dependents of a task.',
  operationId: 'getDependentsForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified dependents of the task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidDuplicateRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/duplicate',
  tags: ['Tasks'],
  summary: 'Duplicate a task',
  description: 'Creates and returns a job that will asynchronously handle the duplication.',
  operationId: 'duplicateTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: "Describes the duplicate's name and the fields that will be duplicated.",
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskDuplicateRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the job to handle duplication.',
      content: {
        'application/json': {
          schema: z.object({ data: JobCompactSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidProjectsRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/projects',
  tags: ['Projects'],
  summary: 'Get projects a task is in',
  description: 'Returns a compact representation of all of the projects the task is in.',
  operationId: 'getProjectsForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the projects for the given task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidRemoveDependenciesRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/removeDependencies',
  tags: ['Tasks'],
  summary: 'Unlink dependencies from a task',
  description: 'Unlinks a set of dependencies from this task.',
  operationId: 'removeDependenciesForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The list of tasks to unlink as dependencies.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ModifyDependenciesRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully unlinked the dependencies from the specified task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidRemoveDependentsRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/removeDependents',
  tags: ['Tasks'],
  summary: 'Unlink dependents from a task',
  description: 'Unlinks a set of dependents from this task.',
  operationId: 'removeDependentsForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The list of tasks to remove as dependents.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ModifyDependentsRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully unlinked the specified tasks as dependents.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidRemoveFollowersRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/removeFollowers',
  tags: ['Tasks'],
  summary: 'Remove followers from a task',
  description:
    'Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.',
  operationId: 'removeFollowerForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The followers to remove from the task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskRemoveFollowersRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the specified followers from the task.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidRemoveProjectRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/removeProject',
  tags: ['Tasks'],
  summary: 'Remove a project from a task',
  description:
    'Removes the task from the specified project. The task will still exist in\nthe system, but it will not be in the project anymore.\n\nReturns an empty data block.',
  operationId: 'removeProjectForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The project to remove the task from.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskRemoveProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the specified project from the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidRemoveTagRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/removeTag',
  tags: ['Tasks'],
  summary: 'Remove a tag from a task',
  description: 'Removes a tag from a task. Returns an empty data block.',
  operationId: 'removeTagForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The tag to remove from the task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskRemoveTagRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully removed the specified tag from the task.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidSetParentRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/setParent',
  tags: ['Tasks'],
  summary: 'Set the parent of a task',
  description:
    'parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.',
  operationId: 'setParentForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The new parent of the subtask.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TaskSetParentRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully changed the parent of the specified subtask.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidStoriesRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/stories',
  tags: ['Stories'],
  summary: 'Get stories from a task',
  description: 'Returns the compact records for all stories on the task.',
  operationId: 'getStoriesForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified task's stories.",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = StoryCompactSchema
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidStoriesRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/stories',
  tags: ['Stories'],
  summary: 'Create a story on a task',
  description:
    'Adds a story to a task. This endpoint currently only allows for comment\nstories to be created. The comment will be authored by the currently\nauthenticated user, and timestamped when the server receives the request.\n\nReturns the full record for the new story added to the task.',
  operationId: 'createStoryForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The story to create.',
      content: {
        'application/json': {
          schema: z.object({ data: StoryBaseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new story.',
      content: {
        'application/json': {
          schema: z.object({ data: StoryResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidSubtasksRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/subtasks',
  tags: ['Tasks'],
  summary: 'Get subtasks from a task',
  description: 'Returns a compact representation of all of the subtasks of a task.',
  operationId: 'getSubtasksForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the specified task's subtasks.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTasksTaskGidSubtasksRoute = createRoute({
  method: 'post',
  path: '/tasks/{task_gid}/subtasks',
  tags: ['Tasks'],
  summary: 'Create a subtask',
  description:
    'Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.',
  operationId: 'createSubtaskForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The new subtask to create.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the specified subtask.',
      content: {
        'application/json': {
          schema: z.object({ data: TaskResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTasksTaskGidTagsRoute = createRoute({
  method: 'get',
  path: '/tasks/{task_gid}/tags',
  tags: ['Tags'],
  summary: "Get a task's tags",
  description: 'Get a compact representation of all of the tags the task has.',
  operationId: 'getTagsForTask',
  request: {
    params: z.object({ task_gid: TaskPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the tags for the given task.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TagCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamMembershipsRoute = createRoute({
  method: 'get',
  path: '/team_memberships',
  tags: ['Team memberships'],
  summary: 'Get team memberships',
  description: 'Returns compact team membership records.',
  operationId: 'getTeamMemberships',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Globally unique identifier for the team.',
            example: '159874',
            in: 'query',
            name: 'team',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string identifying a user. This can either be the string "me", an email, or the gid of a user. This parameter must be used with the workspace parameter.',
            example: '512241',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Globally unique identifier for the workspace. This parameter must be used with the user parameter.',
            example: '31326',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested team memberships.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TeamMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamMembershipsTeamMembershipGidRoute = createRoute({
  method: 'get',
  path: '/team_memberships/{team_membership_gid}',
  tags: ['Team memberships'],
  summary: 'Get a team membership',
  description: 'Returns the complete team membership record for a single team membership.',
  operationId: 'getTeamMembership',
  request: {
    params: z.object({ team_membership_gid: TeamMembershipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested team membership.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TeamMembershipCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTeamsRoute = createRoute({
  method: 'put',
  path: '/teams',
  tags: ['Teams'],
  summary: 'Update a team',
  description: 'Updates a team within the current workspace.',
  operationId: 'updateTeam',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The team to update.',
      content: {
        'application/json': {
          schema: z.object({ data: TeamRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the team.',
      content: {
        'application/json': {
          schema: z.object({ data: TeamResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsRoute = createRoute({
  method: 'post',
  path: '/teams',
  tags: ['Teams'],
  summary: 'Create a team',
  description: 'Creates a team within the current workspace.',
  operationId: 'createTeam',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    body: {
      description: 'The team to create.',
      content: {
        'application/json': {
          schema: z.object({ data: TeamRequestSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new team.',
      content: {
        'application/json': {
          schema: z.object({ data: TeamResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamGidRoute = createRoute({
  method: 'get',
  path: '/teams/{team_gid}',
  tags: ['Teams'],
  summary: 'Get a team',
  description: 'Returns the full record for a single team.',
  operationId: 'getTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for a single team.',
      content: {
        'application/json': {
          schema: z.object({ data: TeamResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsTeamGidAddUserRoute = createRoute({
  method: 'post',
  path: '/teams/{team_gid}/addUser',
  tags: ['Teams'],
  summary: 'Add a user to a team',
  description:
    'The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.\n\nReturns the complete team membership record for the newly added user.',
  operationId: 'addUserForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The user to add to the team.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TeamAddUserRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added user to the team.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TeamMembershipCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamGidProjectTemplatesRoute = createRoute({
  method: 'get',
  path: '/teams/{team_gid}/project_templates',
  tags: ['Project templates'],
  summary: "Get a team's project templates",
  description:
    'Returns the compact project template records for all project templates in the team.',
  operationId: 'getProjectTemplatesForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested team's project templates.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectTemplateCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamGidProjectsRoute = createRoute({
  method: 'get',
  path: '/teams/{team_gid}/projects',
  tags: ['Projects'],
  summary: "Get a team's projects",
  description: 'Returns the compact project records for all projects in the team.',
  operationId: 'getProjectsForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      archived: ArchivedQueryParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested team's projects.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsTeamGidProjectsRoute = createRoute({
  method: 'post',
  path: '/teams/{team_gid}/projects',
  tags: ['Projects'],
  summary: 'Create a project in a team',
  description:
    'Creates a project shared with the given team.\n\nReturns the full record of the newly created project.',
  operationId: 'createProjectForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The new project to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the specified project.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsTeamGidRemoveUserRoute = createRoute({
  method: 'post',
  path: '/teams/{team_gid}/removeUser',
  tags: ['Teams'],
  summary: 'Remove a user from a team',
  description:
    'The user making this call must be a member of the team in order to remove themselves or others.',
  operationId: 'removeUserForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The user to remove from the team.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TeamRemoveUserRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Returns an empty data record',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamGidTeamMembershipsRoute = createRoute({
  method: 'get',
  path: '/teams/{team_gid}/team_memberships',
  tags: ['Team memberships'],
  summary: 'Get memberships from a team',
  description: 'Returns the compact team memberships for the team.',
  operationId: 'getTeamMembershipsForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested team's memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TeamMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamGidUsersRoute = createRoute({
  method: 'get',
  path: '/teams/{team_gid}/users',
  tags: ['Users'],
  summary: 'Get users in a team',
  description:
    'Returns the compact records for all users that are members of the team.\nResults are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.',
  operationId: 'getUsersForTeam',
  request: {
    params: z.object({ team_gid: TeamPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Returns the user records for all the members of the team, including guests and limited access users',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(UserCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTimePeriodsRoute = createRoute({
  method: 'get',
  path: '/time_periods',
  tags: ['Time periods'],
  summary: 'Get time periods',
  description: 'Returns compact time period records.',
  operationId: 'getTimePeriods',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      start_on: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'start_on',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      end_on: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'end_on',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'Globally unique identifier for the workspace.',
            example: '31326',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested time periods.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TimePeriodCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTimePeriodsTimePeriodGidRoute = createRoute({
  method: 'get',
  path: '/time_periods/{time_period_gid}',
  tags: ['Time periods'],
  summary: 'Get a time period',
  description: 'Returns the full record for a single time period.',
  operationId: 'getTimePeriod',
  request: {
    params: z.object({ time_period_gid: TimePeriodPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the record for a single time period.',
      content: {
        'application/json': {
          schema: z
            .object({ data: TimePeriodResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUserTaskListsUserTaskListGidRoute = createRoute({
  method: 'get',
  path: '/user_task_lists/{user_task_list_gid}',
  tags: ['User task lists'],
  summary: 'Get a user task list',
  description: 'Returns the full record for a user task list.',
  operationId: 'getUserTaskList',
  request: {
    params: z.object({ user_task_list_gid: UserTaskListPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the user task list.',
      content: {
        'application/json': {
          schema: z
            .object({ data: UserTaskListCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUserTaskListsUserTaskListGidTasksRoute = createRoute({
  method: 'get',
  path: '/user_task_lists/{user_task_list_gid}/tasks',
  tags: ['Tasks'],
  summary: 'Get tasks from a user task list',
  description:
    'Returns the compact list of tasks in a user’s My Tasks list.\n*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*\n*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*',
  operationId: 'getTasksForUserTaskList',
  request: {
    query: z.object({
      completed_since: CompletedSinceParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    params: z.object({ user_task_list_gid: UserTaskListPathGidParamsSchema }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the user task list's tasks.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Get multiple users',
  description:
    'Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.\nResults are sorted by user ID.',
  operationId: 'getUsers',
  request: {
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The workspace or organization ID to filter users on.',
            example: '1331',
            in: 'query',
            name: 'workspace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The team ID to filter users on.',
            example: '15627',
            in: 'query',
            name: 'team',
            schema: { type: 'string' },
            required: false,
          },
        }),
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested user records.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(UserCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}',
  tags: ['Users'],
  summary: 'Get a user',
  description: 'Returns the full user record for the single user with the provided ID.',
  operationId: 'getUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the user specified.',
      content: {
        'application/json': {
          schema: z.object({ data: UserResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidFavoritesRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}/favorites',
  tags: ['Users'],
  summary: "Get a user's favorites",
  description:
    "Returns all of a user's favorites in the given workspace, of the given type.\nResults are given in order (The same order as Asana's sidebar).",
  operationId: 'getFavoritesForUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      resource_type: z
        .enum(['portfolio', 'project', 'tag', 'task', 'user', 'project_template'])
        .default('project')
        .openapi({
          param: {
            description: 'The resource type of favorites to be returned.',
            in: 'query',
            name: 'resource_type',
            required: true,
            schema: {
              default: 'project',
              enum: ['portfolio', 'project', 'tag', 'task', 'user', 'project_template'],
              type: 'string',
            },
          },
        }),
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'The workspace in which to get favorites.',
            example: '1234',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the specified user's favorites.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(AsanaNamedResourceSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidTeamMembershipsRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}/team_memberships',
  tags: ['Team memberships'],
  summary: 'Get memberships from a user',
  description: 'Returns the compact team membership records for the user.',
  operationId: 'getTeamMembershipsForUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'Globally unique identifier for the workspace.',
            example: '31326',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested users's memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TeamMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidTeamsRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}/teams',
  tags: ['Teams'],
  summary: 'Get teams for a user',
  description: 'Returns the compact records for all teams to which the given user is assigned.',
  operationId: 'getTeamsForUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      organization: z
        .string()
        .openapi({
          param: {
            description: 'The workspace or organization to filter teams on.',
            example: '1331',
            in: 'query',
            name: 'organization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the team records for all teams in the organization or workspace to which the given user is assigned.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TeamCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidUserTaskListRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}/user_task_list',
  tags: ['User task lists'],
  summary: "Get a user's task list",
  description: "Returns the full record for a user's task list.",
  operationId: 'getUserTaskListForUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'The workspace in which to get the user task list.',
            example: '1234',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the user's task list.",
      content: {
        'application/json': {
          schema: z
            .object({ data: UserTaskListCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserGidWorkspaceMembershipsRoute = createRoute({
  method: 'get',
  path: '/users/{user_gid}/workspace_memberships',
  tags: ['Workspace memberships'],
  summary: 'Get workspace memberships for a user',
  description: 'Returns the compact workspace membership records for the user.',
  operationId: 'getWorkspaceMembershipsForUser',
  request: {
    params: z.object({ user_gid: UserPathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested user's workspace memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(WorkspaceMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Get multiple webhooks',
  description:
    'Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.',
  operationId: 'getWebhooks',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      workspace: z
        .string()
        .openapi({
          param: {
            description: 'The workspace to query for webhooks in.',
            example: '1331',
            in: 'query',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return webhooks for the given resource.',
            example: '51648',
            in: 'query',
            name: 'resource',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested webhooks.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(WebhookResponseSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Establish a webhook',
  description:
    'Establishing a webhook is a two-part process. First, a simple HTTP POST\nrequest initiates the creation similar to creating any other resource.\n\nNext, in the middle of this request comes the confirmation handshake.\nWhen a webhook is created, we will send a test POST to the target with an\n`X-Hook-Secret` header. The target must respond with a `200 OK` or `204\nNo Content` and a matching `X-Hook-Secret` header to confirm that this\nwebhook subscription is indeed expected. We strongly recommend storing\nthis secret to be used to verify future webhook event signatures.\n\nThe POST request to create the webhook will then return with the status\nof the request. If you do not acknowledge the webhook’s confirmation\nhandshake it will fail to setup, and you will receive an error in\nresponse to your attempt to create it. This means you need to be able to\nreceive and complete the webhook *while* the POST request is in-flight\n(in other words, have a server that can handle requests asynchronously).\n\nInvalid hostnames like localhost will recieve a 403 Forbidden status code.\n\n```\n# Request\ncurl -H "Authorization: Bearer <personal_access_token>" \\\n-X POST https://app.asana.com/api/1.0/webhooks \\\n-d "resource=8675309" \\\n-d "target=https://example.com/receive-webhook/7654"\n```\n\n```\n# Handshake sent to https://example.com/\nPOST /receive-webhook/7654\nX-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81\n```\n\n```\n# Handshake response sent by example.com\nHTTP/1.1 200\nX-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81\n```\n\n```\n# Response\nHTTP/1.1 201\n{\n  "data": {\n    "gid": "43214",\n    "resource": {\n      "gid": "8675309",\n      "name": "Bugs"\n    },\n    "target": "https://example.com/receive-webhook/7654",\n    "active": false,\n    "last_success_at": null,\n    "last_failure_at": null,\n    "last_failure_content": null\n  }\n}\n```',
  operationId: 'createWebhook',
  request: {
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The webhook workspace and target.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the requested webhook.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWebhooksWebhookGidRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_gid}',
  tags: ['Webhooks'],
  summary: 'Get a webhook',
  description: 'Returns the full record for the given webhook.',
  operationId: 'getWebhook',
  request: {
    params: z.object({ webhook_gid: WebhookPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested webhook.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putWebhooksWebhookGidRoute = createRoute({
  method: 'put',
  path: '/webhooks/{webhook_gid}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  description:
    "An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.",
  operationId: 'updateWebhook',
  request: {
    params: z.object({ webhook_gid: WebhookPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The updated filters for the webhook.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookUpdateRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the webhook.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteWebhooksWebhookGidRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_gid}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description:
    'This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.',
  operationId: 'deleteWebhook',
  request: {
    params: z.object({ webhook_gid: WebhookPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested webhook.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspaceMembershipsWorkspaceMembershipGidRoute = createRoute({
  method: 'get',
  path: '/workspace_memberships/{workspace_membership_gid}',
  tags: ['Workspace memberships'],
  summary: 'Get a workspace membership',
  description: 'Returns the complete workspace record for a single workspace membership.',
  operationId: 'getWorkspaceMembership',
  request: {
    params: z.object({ workspace_membership_gid: WorkspaceMembershipPathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested workspace membership.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceMembershipResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesRoute = createRoute({
  method: 'get',
  path: '/workspaces',
  tags: ['Workspaces'],
  summary: 'Get multiple workspaces',
  description: 'Returns the compact records for all workspaces visible to the authorized user.',
  operationId: 'getWorkspaces',
  request: {
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Return all workspaces visible to the authorized user.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(WorkspaceCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}',
  tags: ['Workspaces'],
  summary: 'Get a workspace',
  description: 'Returns the full workspace record for a single workspace.',
  operationId: 'getWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Return the full workspace record.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const putWorkspacesWorkspaceGidRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspace_gid}',
  tags: ['Workspaces'],
  summary: 'Update a workspace',
  description:
    'A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.\nCurrently the only field that can be modified for a workspace is its name.\nReturns the complete, updated workspace record.',
  operationId: 'updateWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The workspace object with all updated properties.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceCompactSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Update for the workspace was successful.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postWorkspacesWorkspaceGidAddUserRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspace_gid}/addUser',
  tags: ['Workspaces'],
  summary: 'Add a user to a workspace or organization',
  description:
    'Add a user to a workspace or organization.\nThe user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.',
  operationId: 'addUserForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The user to add to the workspace.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceAddUserRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The user was added successfully to the workspace or organization.',
      content: {
        'application/json': {
          schema: z
            .object({ data: UserBaseResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidAuditLogEventsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/audit_log_events',
  tags: ['Audit log API'],
  summary: 'Get audit log events',
  description:
    'Retrieve the audit log events that have been captured in your domain.\n\nThis endpoint will return a list of [AuditLogEvent](/docs/audit-log-event) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.\n\nThere are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/docs/audit-log-event) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.\n\nThe list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.\n\nWhen no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/docs/audit-log-event) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.',
  operationId: 'getAuditLogEvents',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      start_at: AuditLogStartAtParamsSchema,
      end_at: AuditLogEndAtParamsSchema,
      event_type: AuditLogEventTypeParamsSchema,
      actor_type: AuditLogActorTypeParamsSchema,
      actor_gid: AuditLogActorGidParamsSchema,
      resource_gid: AuditLogResourceGidParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'AuditLogEvents were successfully retrieved.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(AuditLogEventSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/custom_fields',
  tags: ['Custom fields'],
  summary: "Get a workspace's custom fields",
  description:
    'Returns a list of the compact representation of all of the custom fields in a workspace.',
  operationId: 'getCustomFieldsForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved all custom fields for the given workspace.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CustomFieldResponseSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidProjectsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/projects',
  tags: ['Projects'],
  summary: 'Get all projects in a workspace',
  description:
    'Returns the compact project records for all projects in the workspace.\n*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*',
  operationId: 'getProjectsForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      archived: ArchivedQueryParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested workspace's projects.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ProjectCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postWorkspacesWorkspaceGidProjectsRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspace_gid}/projects',
  tags: ['Projects'],
  summary: 'Create a project in a workspace',
  description:
    'Returns the compact project records for all projects in the workspace.\n\nIf the workspace for your project is an organization, you must also\nsupply a team to share the project with.\n\nReturns the full record of the newly created project.',
  operationId: 'createProjectForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The new project to create.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created a new project in the specified workspace.',
      content: {
        'application/json': {
          schema: z
            .object({ data: ProjectResponseSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postWorkspacesWorkspaceGidRemoveUserRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspace_gid}/removeUser',
  tags: ['Workspaces'],
  summary: 'Remove a user from a workspace or organization',
  description:
    'Remove a user from a workspace or organization.\nThe user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.\nReturns an empty data record.',
  operationId: 'removeUserForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The user to remove from the workspace.',
      content: {
        'application/json': {
          schema: z
            .object({ data: WorkspaceRemoveUserRequestSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The user was removed successfully to the workspace or organization.',
      content: {
        'application/json': {
          schema: z.object({ data: EmptyResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidTagsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/tags',
  tags: ['Tags'],
  summary: 'Get tags in a workspace',
  description:
    'Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.',
  operationId: 'getTagsForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the specified set of tags.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TagCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postWorkspacesWorkspaceGidTagsRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspace_gid}/tags',
  tags: ['Tags'],
  summary: 'Create a tag in a workspace',
  description:
    'Creates a new tag in a workspace or organization.\n\nEvery tag is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe workspace parameter regardless of whether or not it is an\norganization.\n\nReturns the full record of the newly created tag.',
  operationId: 'createTagForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({ opt_pretty: PrettyParamsSchema, opt_fields: FieldsParamsSchema }),
    body: {
      description: 'The tag to create.',
      content: {
        'application/json': {
          schema: z.object({ data: TagResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created the newly specified tag.',
      content: {
        'application/json': {
          schema: z.object({ data: TagResponseSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidTasksSearchRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/tasks/search',
  tags: ['Tasks'],
  summary: 'Search tasks in a workspace',
  description:
    "To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.\n#### Premium access\nLike the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:\n\n- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace\n\nEven if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.\n#### Pagination\nSearch results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.\n#### Eventual consistency\nChanges in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.\n#### Rate limits\nYou may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).\n#### Custom field parameters\n| Parameter name | Custom field type | Accepted type |\n|---|---|---|\n| custom_fields.{gid}.is_set | All | Boolean |\n| custom_fields.{gid}.value | Text | String |\n| custom_fields.{gid}.value | Number | Number |\n| custom_fields.{gid}.value | Enum | Enum option ID |\n| custom_fields.{gid}.starts_with | Text only | String |\n| custom_fields.{gid}.ends_with | Text only | String |\n| custom_fields.{gid}.contains | Text only | String |\n| custom_fields.{gid}.less_than | Number only | Number |\n| custom_fields.{gid}.greater_than | Number only | Number |\n\n\nFor example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.\n\n**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field\n\n*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*",
  operationId: 'searchTasksForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Performs full-text search on both task name and description',
            example: 'Bug',
            in: 'query',
            name: 'text',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resource_subtype: z
        .enum(['default_task', 'milestone'])
        .default('milestone')
        .exactOptional()
        .openapi({
          param: {
            description: "Filters results by the task's resource_subtype",
            in: 'query',
            name: 'resource_subtype',
            schema: { default: 'milestone', enum: ['default_task', 'milestone'], type: 'string' },
            required: false,
          },
        }),
      'assignee.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'assignee.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'assignee.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'assignee.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'portfolios.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of portfolio IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'portfolios.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'projects.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of project IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'projects.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'projects.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of project IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'projects.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'projects.all': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of project IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'projects.all',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sections.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of section or column IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'sections.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sections.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of section or column IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'sections.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sections.all': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of section or column IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'sections.all',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'tags.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of tag IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'tags.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'tags.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of tag IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'tags.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'tags.all': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of tag IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'tags.all',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'teams.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of team IDs',
            example: '12345,23456,34567',
            in: 'query',
            name: 'teams.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'followers.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'followers.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'created_by.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'created_by.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'created_by.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'created_by.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'assigned_by.any': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'assigned_by.any',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'assigned_by.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'assigned_by.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'liked_by.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'liked_by.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'commented_on_by.not': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of user identifiers',
            example: '12345,23456,34567',
            in: 'query',
            name: 'commented_on_by.not',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'due_on.before': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'due_on.before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      'due_on.after': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'due_on.after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      due_on: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string or `null`',
            example: '2019-09-15',
            in: 'query',
            name: 'due_on',
            schema: { format: 'date', nullable: true, type: 'string' },
            required: false,
          },
        }),
      'due_at.before': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'due_at.before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'due_at.after': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'due_at.after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'start_on.before': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'start_on.before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      'start_on.after': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'start_on.after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      start_on: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string or `null`',
            example: '2019-09-15',
            in: 'query',
            name: 'start_on',
            schema: { format: 'date', nullable: true, type: 'string' },
            required: false,
          },
        }),
      'created_on.before': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'created_on.before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      'created_on.after': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'created_on.after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      created_on: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string or `null`',
            example: '2019-09-15',
            in: 'query',
            name: 'created_on',
            schema: { format: 'date', nullable: true, type: 'string' },
            required: false,
          },
        }),
      'created_at.before': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'created_at.before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'created_at.after': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'created_at.after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'completed_on.before': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'completed_on.before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      'completed_on.after': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'completed_on.after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      completed_on: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string or `null`',
            example: '2019-09-15',
            in: 'query',
            name: 'completed_on',
            schema: { format: 'date', nullable: true, type: 'string' },
            required: false,
          },
        }),
      'completed_at.before': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'completed_at.before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'completed_at.after': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'completed_at.after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'modified_on.before': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'modified_on.before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      'modified_on.after': z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string',
            example: '2019-09-15',
            in: 'query',
            name: 'modified_on.after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      modified_on: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 date string or `null`',
            example: '2019-09-15',
            in: 'query',
            name: 'modified_on',
            schema: { format: 'date', nullable: true, type: 'string' },
            required: false,
          },
        }),
      'modified_at.before': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'modified_at.before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'modified_at.after': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 8601 datetime string',
            example: '2019-04-15T01:01:46.055Z',
            in: 'query',
            name: 'modified_at.after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      is_blocking: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to incomplete tasks with dependents',
            example: false,
            in: 'query',
            name: 'is_blocking',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      is_blocked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to tasks with incomplete dependencies',
            example: false,
            in: 'query',
            name: 'is_blocked',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      has_attachment: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to tasks with attachments',
            example: false,
            in: 'query',
            name: 'has_attachment',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      completed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to completed tasks',
            example: false,
            in: 'query',
            name: 'completed',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      is_subtask: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to subtasks',
            example: false,
            in: 'query',
            name: 'is_subtask',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sort_by: z
        .enum(['due_date', 'created_at', 'completed_at', 'likes', 'modified_at'])
        .default('modified_at')
        .exactOptional()
        .openapi({
          param: {
            description:
              'One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`',
            example: 'likes',
            in: 'query',
            name: 'sort_by',
            schema: {
              default: 'modified_at',
              enum: ['due_date', 'created_at', 'completed_at', 'likes', 'modified_at'],
              type: 'string',
            },
            required: false,
          },
        }),
      sort_ascending: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Default `false`',
            example: true,
            in: 'query',
            name: 'sort_ascending',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the section's tasks.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidTeamsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/teams',
  tags: ['Teams'],
  summary: 'Get teams in a workspace',
  description:
    'Returns the compact records for all teams in the workspace visible to the authorized user.',
  operationId: 'getTeamsForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Returns the team records for all teams in the organization or workspace accessible to the authenticated user.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TeamCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidTypeaheadRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/typeahead',
  tags: ['Typeahead'],
  summary: 'Get objects via typeahead',
  description:
    "Retrieves objects in the workspace based via an auto-completion/typeahead\nsearch algorithm. This feature is meant to provide results quickly, so do\nnot rely on this API to provide extremely accurate search results. The\nresult set is limited to a single page of results with a maximum size, so\nyou won’t be able to fetch large numbers of results.\n\nThe typeahead search API provides search for objects from a single\nworkspace. This endpoint should be used to query for objects when\ncreating an auto-completion/typeahead search feature. This API is meant\nto provide results quickly and should not be relied upon for accurate or\nexhaustive search results. The results sets are limited in size and\ncannot be paginated.\n\nQueries return a compact representation of each object which is typically\nthe gid and name fields. Interested in a specific set of fields or all of\nthe fields?! Of course you are. Use field selectors to manipulate what\ndata is included in a response.\n\nResources with type `user` are returned in order of most contacted to\nleast contacted. This is determined by task assignments, adding the user\nto projects, and adding the user as a follower to tasks, messages,\netc.\n\nResources with type `project` are returned in order of recency. This is\ndetermined when the user visits the project, is added to the project, and\ncompletes tasks in the project.\n\nResources with type `task` are returned with priority placed on tasks\nthe user is following, but no guarantee on the order of those tasks.\n\nResources with type `project_template` are returned with priority\nplaced on favorited project templates.\n\nLeaving the `query` string empty or omitted will give you results, still\nfollowing the resource ordering above. This could be used to list users or\nprojects that are relevant for the requesting user's api token.",
  operationId: 'typeaheadForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      resource_type: z
        .enum(['custom_field', 'project', 'project_template', 'portfolio', 'tag', 'task', 'user'])
        .default('user')
        .openapi({
          param: {
            description:
              'The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.',
            in: 'query',
            name: 'resource_type',
            required: true,
            schema: {
              default: 'user',
              enum: [
                'custom_field',
                'project',
                'project_template',
                'portfolio',
                'tag',
                'task',
                'user',
              ],
              type: 'string',
            },
          },
        }),
      type: z
        .enum(['custom_field', 'portfolio', 'project', 'tag', 'task', 'user'])
        .default('user')
        .exactOptional()
        .openapi({
          param: {
            description: '*Deprecated: new integrations should prefer the resource_type field.*',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'user',
              enum: ['custom_field', 'portfolio', 'project', 'tag', 'task', 'user'],
              type: 'string',
            },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.',
            example: 'Greg',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
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
              'The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.',
            example: 20,
            in: 'query',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved objects via a typeahead search algorithm.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(AsanaNamedResourceSchema).exactOptional() })
            .openapi({
              description:
                'A generic list of objects, such as those returned by the typeahead search endpoint.',
              required: [],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidUsersRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/users',
  tags: ['Users'],
  summary: 'Get users in a workspace or organization',
  description:
    'Returns the compact records for all users in the specified workspace or organization.\nResults are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.',
  operationId: 'getUsersForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Return the users in the specified workspace or org.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(UserCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getWorkspacesWorkspaceGidWorkspaceMembershipsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_gid}/workspace_memberships',
  tags: ['Workspace memberships'],
  summary: 'Get the workspace memberships for a workspace',
  description: 'Returns the compact workspace membership records for the workspace.',
  operationId: 'getWorkspaceMembershipsForWorkspace',
  request: {
    params: z.object({ workspace_gid: WorkspacePathGidParamsSchema }),
    query: z.object({
      user: UserQueryParamParamsSchema,
      opt_pretty: PrettyParamsSchema,
      opt_fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully retrieved the requested workspace's memberships.",
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(WorkspaceMembershipCompactSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
