import { createRoute, z } from '@hono/zod-openapi'

const ParentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The parent's ID." }),
    isRoot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this is the root folder.' }),
    title: z.string().exactOptional().openapi({ description: "The parent's title." }),
  })
  .openapi({
    description:
      'Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.',
    required: [],
  })
  .openapi('Parent')

const MoveSchema = z
  .object({
    addedParents: z
      .array(ParentSchema)
      .exactOptional()
      .openapi({ description: 'The added parent(s).' }),
    removedParents: z
      .array(ParentSchema)
      .exactOptional()
      .openapi({ description: 'The removed parent(s).' }),
  })
  .openapi({
    description:
      "Contains information about changes in an object's parents as a result of a move type event.",
    required: [],
  })
  .openapi('Move')

const PhotoSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The URL of the photo.' }) })
  .openapi({ description: 'Photo information for a user.', required: [] })
  .openapi('Photo')

const UserSchema = z
  .object({
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted.',
      }),
    isMe: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user is the authenticated user.' }),
    name: z.string().exactOptional().openapi({ description: 'The displayable name of the user.' }),
    permissionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource.",
      }),
    photo: PhotoSchema.exactOptional().openapi({
      description: 'The profile photo of the user. Not present if the user has no profile photo.',
    }),
  })
  .openapi({ description: 'A representation of a user.', required: [] })
  .openapi('User')

const PermissionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user or group the permission applies to.' }),
    permissionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource.",
      }),
    role: z
      .enum(['commenter', 'fileOrganizer', 'owner', 'publishedReader', 'reader', 'writer'])
      .exactOptional()
      .openapi({
        description:
          "Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.",
      }),
    type: z
      .enum(['anyone', 'domain', 'group', 'user'])
      .exactOptional()
      .openapi({ description: 'Indicates how widely permissions are granted.' }),
    user: UserSchema.exactOptional().openapi({
      description: "The user's information if the type is USER.",
    }),
    withLink: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the permission requires a link to the file.' }),
  })
  .openapi({
    description:
      'Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.',
    required: [],
  })
  .openapi('Permission')

const PermissionChangeSchema = z
  .object({
    addedPermissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'Lists all Permission objects added.' }),
    removedPermissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'Lists all Permission objects removed.' }),
  })
  .openapi({
    description:
      "Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.",
    required: [],
  })
  .openapi('PermissionChange')

const RenameSchema = z
  .object({
    newTitle: z.string().exactOptional().openapi({ description: 'The new title.' }),
    oldTitle: z.string().exactOptional().openapi({ description: 'The old title.' }),
  })
  .openapi({ description: 'Contains information about a renametype event.', required: [] })
  .openapi('Rename')

const TargetSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the target. For example, in Google Drive, this is the file or folder ID.',
      }),
    mimeType: z.string().exactOptional().openapi({ description: 'The MIME type of the target.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the target. For example, in Google Drive, this is the title of the file.',
      }),
  })
  .openapi({ description: 'Information about the object modified by the event.', required: [] })
  .openapi('Target')

const EventSchema = z
  .object({
    additionalEventTypes: z
      .array(
        z.enum([
          'comment',
          'create',
          'edit',
          'emptyTrash',
          'move',
          'permissionChange',
          'rename',
          'trash',
          'unknown',
          'untrash',
          'upload',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.',
      }),
    eventTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the event occurred formatted as Unix time in milliseconds.',
      }),
    fromUserDeletion: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this event is caused by a user being deleted.' }),
    move: MoveSchema.exactOptional().openapi({
      description:
        "Extra information for move type events, such as changes in an object's parents.",
    }),
    permissionChanges: z
      .array(PermissionChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Extra information for permissionChange type events, such as the user or group the new permission applies to.',
      }),
    primaryEventType: z
      .enum([
        'comment',
        'create',
        'edit',
        'emptyTrash',
        'move',
        'permissionChange',
        'rename',
        'trash',
        'unknown',
        'untrash',
        'upload',
      ])
      .exactOptional()
      .openapi({ description: 'The main type of event that occurred.' }),
    rename: RenameSchema.exactOptional().openapi({
      description: 'Extra information for rename type events, such as the old and new names.',
    }),
    target: TargetSchema.exactOptional().openapi({
      description: 'Information specific to the Target object modified by the event.',
    }),
    user: UserSchema.exactOptional().openapi({
      description: 'Represents the user responsible for the event.',
    }),
  })
  .openapi({
    description: 'Represents the changes associated with an action taken by a user.',
    required: [],
  })
  .openapi('Event')

const ActivitySchema = z
  .object({
    combinedEvent: EventSchema.exactOptional().openapi({
      description: 'The fields common to all of the singleEvents that make up the Activity.',
    }),
    singleEvents: z
      .array(EventSchema)
      .exactOptional()
      .openapi({ description: 'A list of all the Events that make up the Activity.' }),
  })
  .openapi({
    description:
      'An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.',
    required: [],
  })
  .openapi('Activity')

const ListActivitiesResponseSchema = z
  .object({
    activities: z
      .array(ActivitySchema)
      .exactOptional()
      .openapi({ description: 'List of activities.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token for the next page of results.' }),
  })
  .openapi({
    description:
      'The response from the list request. Contains a list of activities and a token to retrieve the next page of results.',
    required: [],
  })
  .openapi('ListActivitiesResponse')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
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
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
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
        'https://www.googleapis.com/auth/activity': 'View the activity history of your Google apps',
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
        'https://www.googleapis.com/auth/activity': 'View the activity history of your Google apps',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getActivitiesRoute = createRoute({
  method: 'get',
  path: '/activities',
  tags: ['activities'],
  description:
    'Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.',
  operationId: 'appsactivity.activities.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'drive.ancestorId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifies the Drive folder containing the items for which to return activities.',
            in: 'query',
            name: 'drive.ancestorId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'drive.fileId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies the Drive item to return activities for.',
            in: 'query',
            name: 'drive.fileId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      groupingStrategy: z
        .enum(['driveUi', 'none'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.',
            in: 'query',
            name: 'groupingStrategy',
            schema: { enum: ['driveUi', 'none'], type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
              'The maximum number of events to return on a page. The response includes a continuation token if there are more events.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token to retrieve a specific page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Google service from which to return activities. Possible values of source are: \n- drive.google.com',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListActivitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/activity'],
      Oauth2c: ['https://www.googleapis.com/auth/activity'],
    },
  ],
})
