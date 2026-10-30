import { createRoute, z } from '@hono/zod-openapi'

const FoldersSchema: z.ZodType<FoldersType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the folder.',
            example: '0cf0e03d-4364-45df-b77b-ca61f61869d2',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the folder.', example: 'New York' }),
        parent: z
          .xor([z.string(), FoldersSchema])
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Unique identifier of the parent folder. This allows for nested folders.',
            example: null,
          }),
        type: z
          .enum(['files', 'flows'])
          .default('files')
          .exactOptional()
          .openapi({
            description: 'The type of folder. One of `files` (file library) or `flows`.',
            example: 'files',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Folders')

const UsersSchema: z.ZodType<UsersType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the user.',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        first_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'First name of the user.', example: 'Admin' }),
        last_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Last name of the user.', example: 'User' }),
        email: z
          .email()
          .exactOptional()
          .openapi({
            description: 'Unique email address for the user.',
            example: 'admin@example.com',
          }),
        password: z.string().exactOptional().openapi({ description: 'Password of the user.' }),
        location: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "The user's location.", example: null }),
        title: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "The user's title.", example: null }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "The user's description.", example: null }),
        tags: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: "The user's tags.", example: null }),
        avatar: z
          .xor([z.string(), FilesSchema])
          .nullable()
          .exactOptional()
          .openapi({ description: "The user's avatar.", example: null }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: "The user's language used in Directus.", example: 'en-US' }),
        theme: z
          .enum(['light', 'dark', 'auto'])
          .exactOptional()
          .openapi({ description: 'What theme the user is using.', example: 'auto' }),
        tfa_secret: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: "The 2FA secret string that's used to generate one time passwords.",
            example: null,
          }),
        status: z
          .enum(['active', 'invited', 'draft', 'suspended', 'deleted'])
          .exactOptional()
          .openapi({ description: 'Status of the user.', example: 'active' }),
        role: z
          .xor([z.string(), RolesSchema])
          .exactOptional()
          .openapi({
            description: 'Unique identifier of the role of this user.',
            example: '2f24211d-d928-469a-aea3-3c8f53d4e426',
          }),
        token: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Static token for the user.' }),
        last_access: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'When this user used the API last.',
            example: '2020-05-31T14:32:37Z',
          }),
        last_page: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Last page that the user was on.',
            example: '/my-project/settings/collections/a',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Users')

type FilesType = {
  id?: string
  storage?: string
  filename_disk?: string
  filename_download?: string
  title?: string
  type?: string
  folder?: (string | z.infer<typeof FoldersSchema>) | null
  created_on?: string
  uploaded_by?: string | z.infer<typeof UsersSchema>
  uploaded_on?: string
  charset?: string | null
  filesize?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  embed?: string | null
  description?: string | null
  location?: string | null
  tags?: string[] | null
  metadata?: { [key: string]: unknown } | null
}

const OperationsSchema: z.ZodType<OperationsType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the operation.',
            example: '2f24211d-d928-469a-aea3-3c8f53d4e426',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the operation.', example: 'Log to Console' }),
        key: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Key for the operation. Must be unique within a given flow.',
            example: 'log_console',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of operation. One of `log`, `mail`, `notification`, `create`, `read`, `request`, `sleep`, `transform`, `trigger`, `condition`, or any type of custom operation extensions.',
            example: 'log',
          }),
        options: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Options depending on the type of the operation.',
            example: null,
          }),
        position_x: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Position of the operation on the X axis within the flow workspace.',
            example: 12,
          }),
        position_y: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Position of the operation on the Y axis within the flow workspace.',
            example: 12,
          }),
        date_created: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Timestamp in ISO8601 when the operation was created.',
            example: '2022-05-11T13:14:52Z',
          }),
        user_created: z
          .xor([z.string(), UsersSchema])
          .exactOptional()
          .openapi({
            description: 'The user who created the operation.',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        resolve: z
          .xor([z.string(), OperationsSchema])
          .exactOptional()
          .openapi({
            description:
              'The operation triggered when the current operation succeeds (or `then` logic of a condition operation).',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        reject: z
          .xor([z.string(), OperationsSchema])
          .exactOptional()
          .openapi({
            description:
              'The operation triggered when the current operation fails (or `otherwise` logic of a condition operation).',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        operation: z
          .xor([z.string(), FlowsSchema])
          .exactOptional()
          .openapi({
            description: 'The flow containing this operation.',
            example: '92e82998-e421-412f-a513-13701e83e4ce',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Operations')

type FlowsType = {
  id?: string
  name?: string
  icon?: string
  color?: string | null
  note?: string
  status?: 'active' | 'inactive'
  trigger?: string
  options?: { [key: string]: unknown } | null
  accountability?: string
  date_created?: string | null
  user_created?: string | z.infer<typeof UsersSchema>
  operation?: string | z.infer<typeof OperationsSchema>
  folder?: (string | z.infer<typeof FoldersSchema>) | null
}

type FoldersType = {
  id?: string
  name?: string
  parent?: (string | FoldersType) | null
  type?: 'files' | 'flows'
}

const FlowsSchema: z.ZodType<FlowsType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the flow.',
            example: '2f24211d-d928-469a-aea3-3c8f53d4e426',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the flow.', example: 'Update Articles Flow' }),
        icon: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Icon displayed in the Admin App for the flow.',
            example: 'bolt',
          }),
        color: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Color of the icon displayed in the Admin App for the flow.',
            example: '#112233',
          }),
        note: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Short description displayed in the Admin App.',
            example: 'This flow is used to update articles periodically.',
          }),
        status: z
          .enum(['active', 'inactive'])
          .default('active')
          .exactOptional()
          .openapi({ description: 'Current status of the flow.', example: 'active' }),
        trigger: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of trigger for the flow. One of `hook`, `webhook`, `operation`, `schedule`, `manual`.',
            example: 'manual',
          }),
        options: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({ description: 'Options of the selected trigger for the flow.', example: null }),
        accountability: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The permission used during the flow. One of `$public`, `$trigger`, `$full`, or UUID of a role.',
            example: '$trigger',
          }),
        date_created: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Timestamp in ISO8601 when the flow was created.',
            example: '2022-05-11T13:14:52Z',
          }),
        user_created: z
          .xor([z.string(), UsersSchema])
          .exactOptional()
          .openapi({
            description: 'The user who created the flow.',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        operation: z
          .xor([z.string(), OperationsSchema])
          .exactOptional()
          .openapi({
            description: 'UUID of the operation connected to the trigger in the flow.',
            example: '92e82998-e421-412f-a513-13701e83e4ce',
          }),
        folder: z
          .xor([z.string(), FoldersSchema])
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The UUID of the folder containing the flow.',
            example: '0cf0e03d-4364-45df-b77b-ca61f61869d2',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Flows')

type OperationsType = {
  id?: string
  name?: string
  key?: string
  type?: string
  options?: { [key: string]: unknown } | null
  position_x?: number
  position_y?: number
  date_created?: string | null
  user_created?: string | z.infer<typeof UsersSchema>
  resolve?: string | OperationsType
  reject?: string | OperationsType
  operation?: string | z.infer<typeof FlowsSchema>
}

type RolesType = {
  id?: string
  name?: string
  icon?: string
  description?: string | null
  ip_access?: string[]
  enforce_tfa?: boolean
  admin_access?: boolean
  app_access?: boolean
}

const FilesSchema: z.ZodType<FilesType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the file.',
            example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
          }),
        storage: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).',
            example: 'local',
          }),
        filename_disk: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Name of the file on disk. By default, Directus uses a random hash for the filename.',
            example: 'a88c3b72-ac58-5436-a4ec-b2858531333a.jpg',
          }),
        filename_download: z
          .string()
          .exactOptional()
          .openapi({
            description: "How you want to the file to be named when it's being downloaded.",
            example: 'avatar.jpg',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Title for the file. Is extracted from the filename on upload, but can be edited by the user.',
            example: 'User Avatar',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'MIME type of the file.', example: 'image/jpeg' }),
        folder: z
          .xor([z.string(), FoldersSchema])
          .nullable()
          .exactOptional()
          .openapi({ description: 'Virtual folder where this file resides in.', example: null }),
        created_on: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'When the file was created.',
            example: '2019-12-03T00:10:15+00:00',
          }),
        uploaded_by: z
          .xor([z.string(), UsersSchema])
          .exactOptional()
          .openapi({
            description: 'Who uploaded the file.',
            example: '63716273-0f29-4648-8a2a-2af2948f6f78',
          }),
        uploaded_on: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'When the file was last uploaded/replaced.',
            example: '2019-12-03T00:10:15+00:00',
          }),
        charset: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Character set of the file.', example: 'binary' }),
        filesize: z
          .int()
          .exactOptional()
          .openapi({ description: 'Size of the file in bytes.', example: 137862 }),
        width: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Width of the file in pixels. Only applies to images.',
            example: 800,
          }),
        height: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Height of the file in pixels. Only applies to images.',
            example: 838,
          }),
        duration: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Duration of the file in seconds. Only applies to audio and video.',
            example: 0,
          }),
        embed: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Where the file was embedded from.', example: null }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description for the file.' }),
        location: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Where the file was created. Is automatically populated based on Exif data for images.',
          }),
        tags: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tags for the file. Is automatically populated based on Exif data for images.',
          }),
        metadata: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({ description: 'IPTC, Exif, and ICC metadata extracted from file' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Files')

const RolesSchema: z.ZodType<RolesType> = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the role.',
        example: '2f24211d-d928-469a-aea3-3c8f53d4e426',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the role.', example: 'Administrator' }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: "The role's icon.", example: 'verified_user' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Description of the role.',
        example: 'Admins have access to all managed data within the system by default',
      }),
    ip_access: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Array of IP addresses that are allowed to connect to the API as a user of this role.',
        example: [],
      }),
    enforce_tfa: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not this role enforces the use of 2FA.',
        example: false,
      }),
    admin_access: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Admin role. If true, skips all permission checks.',
        example: false,
      }),
    app_access: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The users in the role are allowed to use the app.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('Roles')

type UsersType = {
  id?: string
  first_name?: string
  last_name?: string
  email?: string
  password?: string
  location?: string | null
  title?: string | null
  description?: string | null
  tags?: string[] | null
  avatar?: (string | z.infer<typeof FilesSchema>) | null
  language?: string
  theme?: 'light' | 'dark' | 'auto'
  tfa_secret?: string | null
  status?: 'active' | 'invited' | 'draft' | 'suspended' | 'deleted'
  role?: string | z.infer<typeof RolesSchema>
  token?: string | null
  last_access?: string | null
  last_page?: string | null
}

const CollectionsSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The collection key.', example: 'customers' }),
    meta: z
      .object({
        collection: z
          .string()
          .exactOptional()
          .openapi({ description: 'The collection key.', example: 'customers' }),
        icon: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Name of a Google Material Design Icon that's assigned to this collection.",
            example: 'people',
          }),
        color: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Choose an accent color for this collection.',
            example: '#6644ff',
          }),
        note: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A note describing the collection.', example: null }),
        display_template: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Text representation of how items from this collection are shown across the system.',
            example: null,
          }),
        hidden: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not the collection is hidden from the navigation in the admin app.',
            example: false,
          }),
        singleton: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not the collection is treated as a single object.',
            example: false,
          }),
        translations: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Key value pairs of how to show this collection's name in different languages in the admin app.",
            example: null,
          }),
        versioning: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not Content Versioning is enabled for this collection.',
            example: false,
          }),
        archive_field: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'What field holds the archive value.', example: null }),
        archive_app_filter: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'What value to use for "archived" items.', example: null }),
        archive_value: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'What value to use to "unarchive" items.', example: null }),
        unarchive_value: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Whether or not to show the "archived" filter.', example: null }),
        sort_field: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The sort field in the collection.', example: null }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Metadata of the collection.', example: null, required: [] }),
    schema: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The collection key.', example: 'customers' }),
        schema: z
          .string()
          .exactOptional()
          .openapi({ description: 'Database schema (pg only).', example: 'public' }),
        comment: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Comment as saved in the database.', example: null }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Collections')

const ActivitySchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', example: 2 }),
    action: z
      .enum(['create', 'update', 'delete', 'login'])
      .exactOptional()
      .openapi({ description: 'Action that was performed.', example: 'update' }),
    user: z
      .xor([z.string(), UsersSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user who performed this action.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the action happened.', example: '2019-12-05T22:52:09Z' }),
    ip: z
      .xor([z.ipv4()])
      .exactOptional()
      .openapi({
        description: 'The IP address of the user at the time the action took place.',
        example: '127.0.0.1',
      }),
    user_agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User agent string of the browser the user used when the action took place.',
        example:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/78.0.3904.108 Safari/537.36',
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Origin of the request when the action took place.',
        example: 'https://directus.com',
      }),
    collection: z
      .xor([z.string(), CollectionsSchema])
      .exactOptional()
      .openapi({ description: 'Collection identifier in which the item resides.' }),
    item: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the item the action applied to. This is always a string, even for integer primary keys.',
        example: '328',
      }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.',
        example: null,
      }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const CommentsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for this single collection preset.',
        example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28',
      }),
    collection: z
      .xor([z.string(), CollectionsSchema])
      .exactOptional()
      .openapi({
        description: 'The collection of the item the Comment is created for.',
        example: 'articles',
      }),
    item: z
      .string()
      .exactOptional()
      .openapi({ description: 'The item the Comment is created for.', example: '123' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.',
        example: 'This is a comment',
      }),
    date_created: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'When the Comment was created.', example: '2024-01-23T12:34:56Z' }),
    date_updated: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'When the Comment was updated.', example: '2024-01-23T12:34:56Z' }),
    user_created: z
      .xor([z.string(), UsersSchema])
      .exactOptional()
      .openapi({
        description: 'User that created the Comment.',
        example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28',
      }),
    user_updated: z
      .xor([z.string(), UsersSchema])
      .exactOptional()
      .openapi({
        description: 'User that updated the Comment.',
        example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28',
      }),
  })
  .openapi({ required: [] })
  .openapi('Comments')

const DiffSchema = z
  .object({
    hash: z.string().exactOptional(),
    diff: z
      .object({
        collections: z
          .array(
            z
              .object({
                collection: z.string().exactOptional(),
                diff: z.array(z.object({})).exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        fields: z
          .array(
            z
              .object({
                collection: z.string().exactOptional(),
                field: z.string().exactOptional(),
                diff: z.array(z.object({})).exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        relations: z
          .array(
            z
              .object({
                collection: z.string().exactOptional(),
                field: z.string().exactOptional(),
                related_collection: z.string().exactOptional(),
                diff: z.array(z.object({})).exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Diff')

const ErrorSchema = z
  .object({
    message: z.string(),
    extensions: z.looseObject({ code: z.string() }).openapi({ required: ['code'] }),
  })
  .openapi({ required: ['message', 'extensions'] })
  .openapi('Error')

const ExtensionsSchema = z
  .object({
    bundle: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the bundle the extension is in.',
        example: 'directus-extension-my-bundle',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique name of the extension.', example: 'my-bundle-operation' }),
    meta: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not the extension is enabled.', example: true }),
      })
      .exactOptional()
      .openapi({
        description:
          'Directus metadata for the extension. Where the configuration for the extension in the current project is stored.',
        required: [],
      }),
    schema: z
      .object({
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type of the extension.', example: 'operation' }),
        local: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the extension exists in the local extensions folder or is loaded from `node_modules``.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: "Information about the installed extension. Can't be changed.",
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Extensions')

const FieldsSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique name of the collection this field is in.',
        example: 'about_us',
      }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique name of the field. Field name is unique within the collection.',
        example: 'id',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Directus specific data type. Used to cast values in the API.',
        example: 'integer',
      }),
    schema: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the field.', example: 'title' }),
        table: z
          .string()
          .exactOptional()
          .openapi({ description: 'The collection of the field.', example: 'posts' }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The datatype of the field.', example: 'string' }),
        default_value: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The default value of the field.', example: null }),
        max_length: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The max length of the field.', example: null }),
        is_nullable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If the field is nullable.', example: false }),
        is_primary_key: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If the field is primary key.', example: false }),
        has_auto_increment: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If the field has auto increment.', example: false }),
        foreign_key_column: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Related column from the foreign key constraint.',
            example: null,
          }),
        foreign_key_table: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Related table from the foreign key constraint.',
            example: null,
          }),
        comment: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Comment as saved in the database.', example: null }),
        schema: z
          .string()
          .exactOptional()
          .openapi({ description: 'Database schema (pg only).', example: 'public' }),
        foreign_key_schema: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Related schema from the foreign key constraint (pg only).',
            example: null,
          }),
      })
      .exactOptional()
      .openapi({ description: 'The schema info.', required: [] }),
    meta: z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Unique identifier for the field in the `directus_fields` collection.',
            example: 3,
          }),
        collection: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique name of the collection this field is in.',
            example: 'posts',
          }),
        field: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique name of the field. Field name is unique within the collection.',
            example: 'title',
          }),
        special: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'Transformation flags for field', example: null }),
        'system-interface': z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'What interface is used in the admin app to edit the value for this field.',
            example: 'primary-key',
          }),
        options: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Options for the interface that's used. This format is based on the individual interface.",
            example: null,
          }),
        display: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'What display is used in the admin app to display the value for this field.',
            example: null,
          }),
        display_options: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Options for the display that's used. This format is based on the individual display.",
            example: null,
          }),
        locked: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If the field can be altered by the end user. Most Directus system fields have this value set to `true`.',
            example: true,
          }),
        readonly: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Prevents the user from editing the value in the field.',
            example: false,
          }),
        hidden: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If this field should be hidden.', example: true }),
        sort: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Sort order of this field on the edit page of the admin app.',
            example: 1,
          }),
        width: z
          .union([
            z.literal('half'),
            z.literal('half-left'),
            z.literal('half-right'),
            z.literal('full'),
            z.literal('fill'),
            z.literal(null),
          ])
          .nullable()
          .exactOptional()
          .openapi({ description: 'Width of the field on the edit form.', example: null }),
        group: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'What field group this field is part of.', example: null }),
        translations: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.',
            example: null,
          }),
        note: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'A user provided note for the field. Will be rendered alongside the interface on the edit page.',
            example: '',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The meta info.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Fields')

const ItemsSchema = z.object({}).openapi('Items')

const MetadataSchema = z
  .object({
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: "Returns the total item count of the collection you're querying." }),
    filter_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Returns the item count of the collection you're querying, taking the current filter/search parameters into account.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Metadata')

const PermissionsSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the permission.', example: 1 }),
    role: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the role this permission applies to.',
        example: '2f24211d-d928-469a-aea3-3c8f53d4e426',
      }),
    collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'What collection this permission applies to.',
        example: 'customers',
      }),
    action: z
      .enum(['create', 'read', 'update', 'delete'])
      .exactOptional()
      .openapi({ description: 'What action this permission applies to.', example: 'create' }),
    permissions: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'JSON structure containing the permissions checks for this permission.',
      }),
    validation: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'JSON structure containing the validation checks for this permission.',
      }),
    presets: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'JSON structure containing the preset value for created/updated items.',
      }),
    fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'CSV of fields that the user is allowed to interact with.' }),
  })
  .openapi({ required: [] })
  .openapi('Permissions')

const PresetsSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for this single collection preset.',
        example: 155,
      }),
    bookmark: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name for the bookmark. If this is set, the preset will be considered a bookmark.',
      }),
    user: z
      .xor([z.string(), UsersSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user to whom this collection preset applies.',
        example: '63716273-0f29-4648-8a2a-2af2948f6f78',
      }),
    role: z
      .xor([z.string(), RolesSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of a role in the platform. If `user` is null, this will be used to apply the collection preset or bookmark for all users in the role.',
        example: '50419801-0f30-8644-2b3c-9bc2d980d0a0',
      }),
    collection: z
      .xor([z.string(), CollectionsSchema])
      .exactOptional()
      .openapi({
        description: 'What collection this collection preset is used for.',
        example: 'articles',
      }),
    search: z.string().nullable().exactOptional().openapi({ description: 'Search query.' }),
    filters: z
      .array(z.object({}))
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The filters that the user applied.',
        example: [
          { key: '7RwVrquB5dPmfbrI1rcWy', field: 'title', operator: 'contains', value: 'Hello' },
        ],
      }),
    layout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key of the layout that is used.', example: null }),
    layout_query: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.",
        example: { cards: { sort: '-published_on' } },
      }),
    layout_options: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Options of the views. The properties in here are controlled by the layout.',
        example: {
          cards: {
            icon: 'account_circle',
            title: '{{ first_name }} {{ last_name }}',
            subtitle: '{{ title }}',
            size: 3,
          },
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('Presets')

const QuerySchema = z
  .object({
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).\n',
        example: ['title', 'author.name', '*.*'],
      }),
    filter: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Select items in the collection that match the given filter conditions.',
        example: { title: { _eq: 'Hello' } },
      }),
    search: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.\n',
      }),
    sort: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).\n',
        example: ['-date_created'],
      }),
    limit: z
      .int()
      .min(-1)
      .exactOptional()
      .openapi({
        description:
          'Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.\n',
        example: 50,
      }),
    offset: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.\n',
        example: 100,
      }),
    page: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.\n',
        example: 2,
      }),
    meta: z
      .xor([z.string(), z.array(z.enum(['total_count', 'filter_count']))])
      .exactOptional()
      .openapi({
        description:
          'What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.\n',
        example: '*',
      }),
    aggregate: z
      .object({
        count: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        countDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        sum: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        sumDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        avg: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        avgDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        min: z.xor([z.string(), z.array(z.string())]).exactOptional(),
        max: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.\n',
        example: { count: ['*'] },
        required: [],
      }),
    groupBy: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Group the returned items by the given field(s).',
        example: ['status'],
      }),
    deep: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.',
        example: { related_articles: { _limit: 3 } },
      }),
    alias: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.\n',
        example: { author_name: 'author.name' },
      }),
    export: z
      .enum(['csv', 'csv_utf8', 'json', 'xml', 'yaml'])
      .exactOptional()
      .openapi({ description: 'Saves the API response to a file.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Retrieve an item\'s state from a specific Content Version. The value corresponds to the "key" of the Content Version.\n',
        example: 'site-redesign-2027',
      }),
    versionRaw: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When used with `version`, returns the raw revision data instead of the merged item data.',
      }),
    backlink: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Query')

const RelationsSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the relation.', example: 1 }),
    many_collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Collection that has the field that holds the foreign key.',
        example: 'directus_activity',
      }),
    many_field: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Foreign key. Field that holds the primary key of the related collection.',
        example: 'user',
      }),
    many_primary: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary key field of the current collection.', example: 'id' }),
    one_collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Collection on the _one_ side of the relationship.',
        example: 'directus_users',
      }),
    one_field: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Alias column that serves as the _one_ side of the relationship.',
        example: null,
      }),
    one_primary: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary key field of the related collection.', example: 'id' }),
    junction_field: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Field on the junction table that holds the many field of the related relation.',
        example: null,
      }),
  })
  .openapi({ required: [] })
  .openapi('Relations')

const VersionsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary key of the Content Version.',
        example: '63716273-0f29-4648-8a2a-2af2948f6f78',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key of the Content Version, used as the value for the "version" query parameter.',
        example: 'draft',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Descriptive name of the Content Version.', example: 'My Draft' }),
    collection: z
      .xor([z.string(), CollectionsSchema])
      .exactOptional()
      .openapi({
        description: 'Name of the collection the Content Version is created on.',
        example: 'articles',
      }),
    item: z
      .string()
      .exactOptional()
      .openapi({ description: 'The item the Content Version is created on.', example: '168' }),
    date_created: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'When the Content Version was created.',
        example: '2022-05-11T13:14:52Z',
      }),
    date_updated: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'When the Content Version was last updated.',
        example: '2022-05-11T13:14:53Z',
      }),
    user_created: z
      .xor([z.string(), UsersSchema])
      .exactOptional()
      .openapi({
        description: 'User that created the Content Version.',
        example: '63716273-0f29-4648-8a2a-2af2948f6f78',
      }),
    user_updated: z
      .xor([z.string(), UsersSchema])
      .exactOptional()
      .openapi({
        description: 'User that last updated the Content Version.',
        example: '63716273-0f29-4648-8a2a-2af2948f6f78',
      }),
    delta: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The current changes compared to the main version of the item.',
        example: { my_field: 'Updated Value' },
      }),
  })
  .openapi({ required: [] })
  .openapi('Versions')

const RevisionsSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the revision.', example: 1 }),
    activity: z
      .xor([z.int(), ActivitySchema])
      .exactOptional()
      .openapi({ description: 'Unique identifier for the activity record.', example: 2 }),
    collection: z
      .xor([z.string(), CollectionsSchema])
      .exactOptional()
      .openapi({ description: 'Collection of the updated item.', example: 'articles' }),
    item: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary key of updated item.', example: '168' }),
    data: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Copy of item state at time of update.',
        example: {
          author: 1,
          body: 'This is my first post',
          featured_image: 15,
          id: '168',
          title: 'Hello, World!',
        },
      }),
    delta: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Changes between the previous and the current revision.',
        example: { title: 'Hello, World!' },
      }),
    parent: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the current item was updated relationally, this is the id of the parent revision record',
        example: null,
      }),
    version: z
      .xor([z.string(), VersionsSchema])
      .exactOptional()
      .openapi({ description: 'Associated version of this revision.', example: 'draft' }),
  })
  .openapi({ required: [] })
  .openapi('Revisions')

const SchemaSchema = z
  .object({
    version: z.int().exactOptional().openapi({ example: 1 }),
    directus: z.string().exactOptional(),
    vendor: z.string().exactOptional(),
    collections: z.array(CollectionsSchema).exactOptional(),
    fields: z.array(FieldsSchema).exactOptional(),
    relations: z.array(RelationsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Schema')

const SettingsSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the setting.', example: 1 }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the project.', example: 'Directus' }),
    project_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The url of the project.', example: null }),
    project_color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The brand color of the project.', example: null }),
    project_logo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The logo of the project.', example: null }),
    public_foreground: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The foreground of the project.', example: null }),
    public_background: z
      .object({ id: z.string().exactOptional(), type: z.string().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The background of the project.', example: null, required: [] }),
    public_note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Note rendered on the public pages of the app.', example: null }),
    auth_login_attempts: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Allowed authentication login attempts before the user's status is set to blocked.",
        example: 25,
      }),
    auth_password_policy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Authentication password policy.' }),
    storage_default_folder: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Default folder to place files' }),
    default_exports_folder: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Default folder to place exported files' }),
    storage_asset_transform: z
      .enum(['all', 'none', 'presets'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'What transformations are allowed in the assets endpoint.',
        example: 'all',
      }),
    storage_asset_presets: z
      .array(
        z
          .object({
            key: z
              .string()
              .exactOptional()
              .openapi({ description: 'Key for the asset. Used in the assets endpoint.' }),
            fit: z
              .enum(['cover', 'contain', 'inside', 'outside'])
              .exactOptional()
              .openapi({
                description:
                  'Whether to crop the thumbnail to match the size, or maintain the aspect ratio.',
              }),
            width: z.int().exactOptional().openapi({ description: 'Width of the thumbnail.' }),
            height: z.int().exactOptional().openapi({ description: 'Height of the thumbnail.' }),
            withoutEnlargement: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'No image upscale' }),
            quality: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quality of the compression used.' }),
            format: z
              .enum(['', 'jpeg', 'png', 'webp', 'tiff', 'avif'])
              .exactOptional()
              .openapi({ description: 'Reformat output image' }),
            transforms: z
              .array(
                z
                  .object({
                    method: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The Sharp method name' }),
                    arguments: z
                      .array(
                        z
                          .object({
                            argument: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'A JSON representation of the argument value',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'A list of arguments to pass to the Sharp method' }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'Additional transformations to apply' }),
          })
          .openapi({ required: [] }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of allowed', example: null }),
  })
  .openapi({ required: [] })
  .openapi('Settings')

const BadRequestErrorResponse = {
  description: 'Error: Bad request.',
  content: {
    'application/json': {
      schema: z.object({ errors: z.array(ErrorSchema).exactOptional() }).openapi({ required: [] }),
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Error: Forbidden.',
  content: {
    'application/json': {
      schema: z.object({ errors: z.array(ErrorSchema).exactOptional() }).openapi({ required: [] }),
    },
  },
}

const NoContentResponseResponse = { description: 'No content' }

const NotFoundErrorResponse = {
  description: 'Error: Not found.',
  content: {
    'application/json': {
      schema: z.object({ errors: z.array(ErrorSchema).exactOptional() }).openapi({ required: [] }),
    },
  },
}

const RedirectResponseResponse = {
  description: 'Redirect to another location',
  headers: z.object({
    Location: {
      description: 'URL the client is redirected to.',
      schema: z
        .url()
        .exactOptional()
        .openapi({ description: 'URL the client is redirected to.', param: { required: false } }),
    },
  }),
}

const TooManyRequestsErrorResponse = {
  description: 'Error: Too many requests.',
  content: {
    'application/json': {
      schema: z.object({ errors: z.array(ErrorSchema).exactOptional() }).openapi({ required: [] }),
    },
  },
}

const UnauthorizedErrorResponse = {
  description: 'Error: Unauthorized request.',
  content: {
    'application/json': {
      schema: z.object({ errors: z.array(ErrorSchema).exactOptional() }).openapi({ required: [] }),
    },
  },
}

const IdParamsSchema = z
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
      description: 'Index',
      name: 'id',
      in: 'path',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UUIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier for the object.',
      name: 'id',
      in: 'path',
      required: true,
      schema: { example: '8cbb43fe-4cdf-4991-8352-c461779cec02', type: 'string' },
    },
    example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
  })

const CollectionParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Collection of which you want to retrieve the items from.',
      name: 'collection',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const AggregateParamsSchema = z
  .preprocess(
    (val) => {
      if (typeof val !== 'string') return val
      try {
        return JSON.parse(val)
      } catch {
        return val
      }
    },
    z.object({
      count: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      countDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      sum: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      sumDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      avg: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      avgDistinct: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      min: z.xor([z.string(), z.array(z.string())]).exactOptional(),
      max: z.xor([z.string(), z.array(z.string())]).exactOptional(),
    }),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.\n',
      in: 'query',
      name: 'aggregate',
      required: false,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              count: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
              countDistinct: {
                oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
              },
              sum: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
              sumDistinct: {
                oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
              },
              avg: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
              avgDistinct: {
                oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
              },
              min: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
              max: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
            },
          },
          examples: {
            none: { summary: 'No aggregation specified (default)' },
            countAll: { summary: 'Count all items', value: { count: ['*'] } },
            multiField: {
              summary: 'Multiple aggregate functions',
              value: { count: ['views', 'comments'], avg: ['rating'] },
            },
          },
        },
      },
    },
    required: [],
  })

const AliasParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string') return val
    try {
      return JSON.parse(val)
    } catch {
      return val
    }
  }, z.object({}))
  .exactOptional()
  .openapi({
    param: {
      description:
        'Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.\n',
      in: 'query',
      name: 'alias',
      required: false,
      content: {
        'application/json': {
          schema: { type: 'object' },
          examples: {
            none: { summary: 'No aliasing (default)' },
            singleRename: { summary: 'Rename a field', value: { user_id: 'id' } },
            functionAlias: {
              summary: 'Alias a field function',
              value: { release_year: 'year(date_created)' },
            },
            multipleRenames: {
              summary: 'Multiple renames in one request',
              value: { user_id: 'id', user_status: 'status' },
            },
          },
        },
      },
    },
  })

const BacklinkParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.\n',
      in: 'query',
      name: 'backlink',
      required: false,
      schema: { type: 'boolean', default: true },
    },
  })

const DeepParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string') return val
    try {
      return JSON.parse(val)
    } catch {
      return val
    }
  }, z.object({}))
  .exactOptional()
  .openapi({
    param: {
      description:
        'Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.\n',
      in: 'query',
      name: 'deep',
      required: false,
      content: {
        'application/json': {
          schema: { type: 'object' },
          examples: {
            none: { summary: 'No nested query (default)' },
            limitOnRelation: {
              summary: 'Limit items on a related collection',
              value: { related_articles: { _limit: 3 } },
            },
            fullNestedQuery: {
              summary: 'Full nested query with filter, sort, and limit',
              value: {
                related_articles: {
                  _filter: { status: { _eq: 'published' } },
                  _sort: ['-date_created'],
                  _limit: 5,
                },
              },
            },
          },
        },
      },
    },
  })

const ExportParamsSchema = z
  .enum(['csv', 'csv_utf8', 'json', 'xml', 'yaml'])
  .exactOptional()
  .openapi({
    param: {
      name: 'export',
      description: 'Saves the API response to a file.',
      in: 'query',
      required: false,
      schema: { type: 'string', enum: ['csv', 'csv_utf8', 'json', 'xml', 'yaml'] },
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
        'Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).\n',
      in: 'query',
      name: 'fields',
      required: false,
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      examples: {
        none: { summary: 'No fields specified (default)' },
        wildcardAll: { summary: 'All fields', value: ['*'] },
        wildcardOneLevel: { summary: 'All fields plus one level of relations', value: ['*.*'] },
        wildcardScoped: {
          summary: 'All fields plus a scoped relation wildcard',
          value: ['*', 'images.*'],
        },
        plainList: { summary: 'Plain field list', value: ['first_name', 'last_name'] },
        relational: { summary: 'Dot notation for related fields', value: ['title', 'author.name'] },
        manyToAny: {
          summary: 'Many-to-Any (M2A) collection-scoped fields',
          value: ['sections.item:headings.title'],
        },
        function: { summary: 'Field function', value: ['year(date_published)'] },
      },
    },
  })

const FilterParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string') return val
    try {
      return JSON.parse(val)
    } catch {
      return val
    }
  }, z.object({}))
  .exactOptional()
  .openapi({
    param: {
      description: 'Select items in the collection that match the given filter conditions.',
      in: 'query',
      name: 'filter',
      required: false,
      content: {
        'application/json': {
          schema: { type: 'object' },
          examples: {
            none: { summary: 'No filter (default)' },
            basicField: { summary: 'Basic field filter', value: { title: { _eq: 'Hello' } } },
            manyToOne: {
              summary: 'Many-to-One relational filter',
              value: { author: { name: { _eq: 'Rijk van Zanten' } } },
            },
            manyToMany: {
              summary: 'Many-to-Many relational filter (through junction collection)',
              value: { authors: { authors_id: { name: { _eq: 'Rijk van Zanten' } } } },
            },
            logicalCombination: {
              summary: '`_and`/`_or` logical combination',
              value: {
                _or: [
                  { status: { _eq: 'published' } },
                  { _and: [{ status: { _eq: 'draft' } }, { owner: { _eq: '$CURRENT_USER' } }] },
                ],
              },
            },
            dynamicVariable: {
              summary: 'Dynamic variable',
              value: { date_created: { _gte: '$NOW(-1 year)' } },
            },
            relationalSomeNone: {
              summary: '`_some`/`_none` relational filter',
              value: { categories: { _none: { name: { _eq: 'Recipe' } } } },
            },
          },
        },
      },
    },
  })

const GroupByParamsSchema = z
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
      description: 'Group the returned items by the given field(s).',
      in: 'query',
      name: 'groupBy',
      required: false,
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
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
    z.int().min(-1),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.\n',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { type: 'integer', minimum: -1 },
      examples: {
        none: { summary: 'No limit specified (default of 100)' },
        fixed: { summary: 'Fixed limit', value: 50 },
        unlimited: { summary: 'All items', value: -1 },
      },
    },
  })

const MetaParamsSchema = z
  .xor([z.string(), z.array(z.enum(['total_count', 'filter_count']))])
  .exactOptional()
  .openapi({
    param: {
      description:
        'What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.\n',
      in: 'query',
      name: 'meta',
      required: false,
      style: 'form',
      explode: false,
      schema: {
        oneOf: [
          { type: 'string' },
          { type: 'array', items: { type: 'string', enum: ['total_count', 'filter_count'] } },
        ],
      },
      examples: {
        none: { summary: 'No metadata specified (default)' },
        shorthand: { summary: 'Both total and filtered counts', value: '*' },
      },
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.\n',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { type: 'integer', minimum: 0 },
      examples: {
        none: { summary: 'No offset specified (default)' },
        skip: { summary: 'Skip the first 100 items', value: 100 },
      },
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
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.\n',
      in: 'query',
      name: 'page',
      required: false,
      schema: { type: 'integer', minimum: 0 },
      examples: {
        none: { summary: 'No page specified (default)' },
        second: { summary: 'Second page', value: 2 },
      },
    },
  })

const SearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.\n',
      in: 'query',
      name: 'search',
      required: false,
      schema: { type: 'string' },
      examples: {
        none: { summary: 'No search specified (default)' },
        textMatch: { summary: 'Substring match on string/text fields', value: 'Directus' },
        numericMatch: { summary: 'Exact match on numeric fields', value: '42' },
        uuidMatch: {
          summary: 'Exact match on UUID fields',
          value: '8cbb43fe-4cdf-4991-8352-c461779cec02',
        },
      },
    },
  })

const SortParamsSchema = z
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
        'How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).\n',
      in: 'query',
      name: 'sort',
      required: false,
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      examples: {
        none: { summary: 'No sort specified (default)' },
        ascending: { summary: 'Ascending sort', value: ['sort'] },
        descending: { summary: 'Descending sort', value: ['-date_created'] },
        multiField: {
          summary: 'Multiple fields, prioritized in order',
          value: ['sort', '-date_created'],
        },
        relational: { summary: 'Sort by a related field', value: ['author.name'] },
        function: { summary: 'Sort by a field function', value: ['year(date_created)'] },
      },
    },
  })

const VersionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'version',
      description:
        'Retrieve an item\'s state from a specific Content Version. The value corresponds to the "key" of the Content Version.\n',
      in: 'query',
      required: false,
      schema: { type: 'string' },
      examples: {
        none: { summary: 'No version specified (default)' },
        named: { summary: 'A named Content Version', value: 'site-redesign-2027' },
        draft: {
          summary: 'Reserved key for itemless Content Versions (e.g. Visual Editor live edits)',
          value: 'draft',
        },
      },
    },
  })

const VersionRawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'When used with `version`, returns the raw revision data instead of the merged item data.',
      in: 'query',
      name: 'versionRaw',
      required: false,
      schema: { type: 'boolean', default: false },
    },
  })

const KeyAuthSecurityScheme = { type: 'apiKey', in: 'query', name: 'access_token' }

const AuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'Authorization' }

export const getActivityRoute = createRoute({
  method: 'get',
  path: '/activity',
  tags: ['Activity'],
  summary: 'List Activity Actions',
  description: 'Returns a list of activity actions.',
  operationId: 'getActivities',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ActivitySchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getActivityIdRoute = createRoute({
  method: 'get',
  path: '/activity/{id}',
  tags: ['Activity'],
  summary: 'Retrieve an Activity Action',
  description:
    'Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information.',
  operationId: 'getActivity',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: ActivitySchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getAssetsIdRoute = createRoute({
  method: 'get',
  path: '/assets/{id}',
  tags: ['Assets'],
  summary: 'Get an Asset',
  description: 'Image typed files can be dynamically resized and transformed to fit any need.',
  operationId: 'getAsset',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the file.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            description: 'The key of the asset size configured in settings.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      transforms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'transforms',
            in: 'query',
            description: 'A JSON array of image transformations',
            schema: { type: 'string' },
            required: false,
          },
        }),
      download: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            in: 'query',
            description: 'Download the asset to your computer',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request', content: { 'text/plain': { schema: z.string() } } },
    404: NotFoundErrorResponse,
  },
})

export const postAuthLoginRoute = createRoute({
  method: 'post',
  path: '/auth/login',
  tags: ['Authentication'],
  summary: 'Retrieve a Temporary Access Token',
  description: 'Retrieve a Temporary Access Token',
  operationId: 'login',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  example: 'admin@example.com',
                  description: "Email address of the user you're retrieving the access token for.",
                }),
              password: z
                .string()
                .openapi({ description: 'Password of the user.', example: 'password' }),
              mode: z
                .enum(['json', 'cookie', 'session'])
                .default('json')
                .exactOptional()
                .openapi({
                  description:
                    'Whether to retrieve the refresh token in the JSON response, or in a httpOnly cookie.',
                }),
              otp: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's one-time-password (if MFA is enabled)." }),
            })
            .openapi({ required: ['email', 'password'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful authentification',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  access_token: z.string().exactOptional().openapi({ example: 'eyJhbGciOiJI...' }),
                  expires: z.int().exactOptional().openapi({ example: 900 }),
                  refresh_token: z.string().exactOptional().openapi({ example: 'yuOJkjdPXMd...' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAuthRefreshRoute = createRoute({
  method: 'post',
  path: '/auth/refresh',
  tags: ['Authentication'],
  summary: 'Refresh Token',
  description: 'Refresh a Temporary Access Token.',
  operationId: 'refresh',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'eyJ0eXAiOiJKV...',
                  description: "JWT access token you want to refresh. This token can't be expired.",
                }),
              mode: z
                .enum(['json', 'cookie', 'session'])
                .default('json')
                .exactOptional()
                .openapi({
                  description:
                    'Whether to submit and retrieve the refresh token in the JSON response, or in a httpOnly cookie.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  access_token: z.string().exactOptional().openapi({ example: 'eyJhbGciOiJI...' }),
                  expires: z.int().exactOptional().openapi({ example: 900 }),
                  refresh_token: z.string().exactOptional().openapi({ example: 'Gy-caJMpmGTA...' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const postAuthLogoutRoute = createRoute({
  method: 'post',
  path: '/auth/logout',
  tags: ['Authentication'],
  summary: 'Log Out',
  description: 'Log Out',
  operationId: 'logout',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'eyJ0eXAiOiJKV...',
                  description:
                    "The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don't have to submit it here.",
                }),
              mode: z
                .enum(['json', 'cookie', 'session'])
                .exactOptional()
                .openapi({
                  description:
                    'Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Request successful' } },
})

export const postAuthPasswordRequestRoute = createRoute({
  method: 'post',
  path: '/auth/password/request',
  tags: ['Authentication'],
  summary: 'Request a Password Reset',
  description:
    'Request that a password reset email be sent. This does not apply to users authenticated through external providers (OAuth, SAML, LDAP, etc.).',
  operationId: 'passwordRequest',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  example: 'admin@example.com',
                  description: "Email address of the user you're requesting a reset for.",
                }),
            })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: { 401: UnauthorizedErrorResponse },
})

export const postAuthPasswordResetRoute = createRoute({
  method: 'post',
  path: '/auth/password/reset',
  tags: ['Authentication'],
  summary: 'Reset a Password',
  description:
    'The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.',
  operationId: 'passwordReset',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  example: 'eyJ0eXAiOiJKV1Qi...',
                  description: 'One-time use JWT token that is used to verify the user.',
                }),
              password: z
                .string()
                .openapi({ example: 'password', description: 'New password for the user.' }),
            })
            .openapi({ required: ['token', 'password'] }),
        },
      },
    },
  },
  responses: { 401: UnauthorizedErrorResponse },
})

export const getAuthOauthRoute = createRoute({
  method: 'get',
  path: '/auth/oauth',
  tags: ['Authentication'],
  summary: 'List OAuth Providers',
  description: 'List configured OAuth providers.',
  operationId: 'oauth',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              public: z.boolean().exactOptional(),
              data: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['github', 'facebook'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getAuthOauthProviderRoute = createRoute({
  method: 'get',
  path: '/auth/oauth/{provider}',
  tags: ['Authentication'],
  summary: 'Authenticated using an OAuth provider',
  description: 'Start OAuth flow using the specified provider',
  operationId: 'oauthProvider',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            description: 'Key of the activated OAuth provider.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      redirect: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect',
            in: 'query',
            required: false,
            description:
              'Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              public: z.boolean().exactOptional(),
              data: z
                .object({ token: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getItemsCollectionRoute = createRoute({
  method: 'get',
  path: '/items/{collection}',
  tags: ['Items'],
  summary: 'List Items',
  description: 'List the items.',
  operationId: 'getItems',
  request: {
    params: z.object({ collection: CollectionParamsSchema }),
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      version: VersionParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(z.object({})).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ Auth: [] }],
})

export const postItemsCollectionRoute = createRoute({
  method: 'post',
  path: '/items/{collection}',
  tags: ['Items'],
  summary: 'Create an Item',
  description: 'Create a new item.',
  operationId: 'createItem',
  request: {
    params: z.object({ collection: CollectionParamsSchema }),
    body: { content: { 'application/json': {} } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const deleteItemsCollectionRoute = createRoute({
  method: 'delete',
  path: '/items/{collection}',
  tags: ['Items'],
  summary: 'Delete Multiple Items',
  description: 'Delete multiple existing items.',
  operationId: 'deleteItems',
  request: { params: z.object({ collection: CollectionParamsSchema }) },
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchItemsCollectionRoute = createRoute({
  method: 'patch',
  path: '/items/{collection}',
  tags: ['Items'],
  summary: 'Update Multiple Items',
  description: 'Update multiple items at the same time.',
  operationId: 'updateItems',
  request: {
    params: z.object({ collection: CollectionParamsSchema }),
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(z.object({})).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getItemsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/items/{collection}/{id}',
  tags: ['Items'],
  summary: 'Retrieve an Item',
  description: 'Retrieve a single item by unique identifier.',
  operationId: 'getItem',
  request: {
    params: z.object({
      collection: CollectionParamsSchema,
      id: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Incremental index of the item.', example: 1 }),
          z
            .string()
            .openapi({
              description: 'Unique identifier of the item.',
              example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
            }),
        ]),
      ).openapi({
        param: {
          name: 'id',
          description: 'Index of the item.',
          in: 'path',
          required: true,
          schema: {
            oneOf: [
              { type: 'integer', description: 'Incremental index of the item.', example: 1 },
              {
                type: 'string',
                description: 'Unique identifier of the item.',
                example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
              },
            ],
          },
        },
      }),
    }),
    query: z.object({
      fields: FieldsParamsSchema,
      version: VersionParamsSchema,
      versionRaw: VersionRawParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteItemsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/items/{collection}/{id}',
  tags: ['Items'],
  summary: 'Delete an Item',
  description: 'Delete an existing item.',
  operationId: 'deleteItem',
  request: {
    params: z.object({
      collection: CollectionParamsSchema,
      id: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Incremental index of the item.', example: 1 }),
          z
            .string()
            .openapi({
              description: 'Unique identifier of the item.',
              example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
            }),
        ]),
      ).openapi({
        param: {
          name: 'id',
          description: 'Index of the item.',
          in: 'path',
          required: true,
          schema: {
            oneOf: [
              { type: 'integer', description: 'Incremental index of the item.', example: 1 },
              {
                type: 'string',
                description: 'Unique identifier of the item.',
                example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
              },
            ],
          },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchItemsCollectionIdRoute = createRoute({
  method: 'patch',
  path: '/items/{collection}/{id}',
  tags: ['Items'],
  summary: 'Update an Item',
  description: 'Update an existing item.',
  operationId: 'updateItem',
  request: {
    params: z.object({
      collection: CollectionParamsSchema,
      id: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Incremental index of the item.', example: 1 }),
          z
            .string()
            .openapi({
              description: 'Unique identifier of the item.',
              example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
            }),
        ]),
      ).openapi({
        param: {
          name: 'id',
          description: 'Index of the item.',
          in: 'path',
          required: true,
          schema: {
            oneOf: [
              { type: 'integer', description: 'Incremental index of the item.', example: 1 },
              {
                type: 'string',
                description: 'Unique identifier of the item.',
                example: '8cbb43fe-4cdf-4991-8352-c461779cec02',
              },
            ],
          },
        },
      }),
    }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.object({}) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getPresetsRoute = createRoute({
  method: 'get',
  path: '/presets',
  tags: ['Presets'],
  summary: 'List Presets',
  description: 'List the presets.',
  operationId: 'getPresets',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PresetsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ Auth: [] }],
})

export const postPresetsRoute = createRoute({
  method: 'post',
  path: '/presets',
  tags: ['Presets'],
  summary: 'Create a Preset',
  description: 'Create a new preset.',
  operationId: 'createPreset',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .string()
                .openapi({
                  description: 'What collection this collection preset is used for.',
                  example: 'articles',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.',
                  example: 'Highly rated articles',
                }),
              role: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.',
                  example: null,
                }),
              search: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'What the user searched for in search/filter in the header bar.',
                }),
              filters: z
                .array(
                  z
                    .object({
                      key: z.string().exactOptional().openapi({ example: 'aHKLAakdVghzD' }),
                      field: z.string().exactOptional().openapi({ example: 'rating' }),
                      operator: z.string().exactOptional().openapi({ example: 'gte' }),
                      value: z.int().exactOptional().openapi({ example: 4.5 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              layout: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the view type that is used.' }),
              layout_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.",
                }),
              layout_options: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Options of the views. The properties in here are controlled by the layout.',
                }),
            })
            .openapi({ required: ['collection'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PresetsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const deletePresetsRoute = createRoute({
  method: 'delete',
  path: '/presets',
  tags: ['Presets'],
  summary: 'Delete Multiple Presets',
  description: 'Delete multiple existing presets.',
  operationId: 'deletePresets',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchPresetsRoute = createRoute({
  method: 'patch',
  path: '/presets',
  tags: ['Presets'],
  summary: 'Update Multiple Presets',
  description: 'Update multiple presets at the same time.',
  operationId: 'updatePresets',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keys: z.array(z.string()).exactOptional(),
              data: z
                .object({
                  collection: z
                    .string()
                    .openapi({
                      description: 'What collection this collection preset is used for.',
                      example: 'articles',
                    }),
                  title: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.',
                      example: 'Highly rated articles',
                    }),
                  role: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.',
                      example: null,
                    }),
                  search: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'What the user searched for in search/filter in the header bar.',
                    }),
                  filters: z
                    .array(
                      z
                        .object({
                          key: z.string().exactOptional().openapi({ example: 'aHKLAakdVghzD' }),
                          field: z.string().exactOptional().openapi({ example: 'rating' }),
                          operator: z.string().exactOptional().openapi({ example: 'gte' }),
                          value: z.int().exactOptional().openapi({ example: 4.5 }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  layout: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Name of the view type that is used.' }),
                  layout_query: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.",
                    }),
                  layout_options: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Options of the views. The properties in here are controlled by the layout.',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['collection'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PresetsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getPresetsIdRoute = createRoute({
  method: 'get',
  path: '/presets/{id}',
  tags: ['Presets'],
  summary: 'Retrieve a Preset',
  description: 'Retrieve a single preset by unique identifier.',
  operationId: 'getPreset',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PresetsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ Auth: [] }],
})

export const deletePresetsIdRoute = createRoute({
  method: 'delete',
  path: '/presets/{id}',
  tags: ['Presets'],
  summary: 'Delete a Preset',
  description: 'Delete an existing preset.',
  operationId: 'deletePreset',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
  security: [{ Auth: [] }],
})

export const patchPresetsIdRoute = createRoute({
  method: 'patch',
  path: '/presets/{id}',
  tags: ['Presets'],
  summary: 'Update a Preset',
  description: 'Update an existing preset.',
  operationId: 'updatePreset',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .string()
                .openapi({
                  description: 'What collection this collection preset is used for.',
                  example: 'articles',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.',
                  example: 'Highly rated articles',
                }),
              role: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.',
                }),
              search_query: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'What the user searched for in search/filter in the header bar.',
                }),
              filters: z
                .array(
                  z
                    .object({
                      field: z.string().exactOptional().openapi({ example: 'rating' }),
                      operator: z.string().exactOptional().openapi({ example: 'gte' }),
                      value: z.int().exactOptional().openapi({ example: 4.5 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              view_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Name of the view type that is used. Defaults to tabular.',
                }),
              view_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "View query that's saved per view type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.",
                }),
              view_options: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Options of the views. The properties in here are controlled by the layout.',
                }),
              translation: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Key value pair of language-translation. Can be used to translate the bookmark title in multiple languages.',
                }),
            })
            .openapi({ required: ['collection'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PresetsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Collections'],
  summary: 'List Collections',
  description: 'Returns a list of the collections available in the project.',
  operationId: 'getCollections',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CollectionsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['Collections'],
  summary: 'Create a Collection',
  description: 'Create a new collection in Directus.',
  operationId: 'createCollection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'schema')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['schema'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'meta')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['meta'] }),
            ])
            .and(
              z
                .object({
                  collection: z
                    .string()
                    .openapi({
                      description: 'Unique name of the collection.',
                      example: 'my_collection',
                    }),
                  fields: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'The fields contained in this collection. See the fields reference for more information. Each individual field requires field, type, and interface to be provided.',
                    }),
                  schema: z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The collection key.', example: 'customers' }),
                      schema: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Database schema (pg only).', example: 'public' }),
                      comment: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Comment as saved in the database.',
                          example: null,
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Database schema for the collection. Required unless `meta` is provided; a collection with no `schema` exists only as an alias/group collection.',
                      required: [],
                    }),
                  meta: z
                    .object({
                      icon: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            "Name of a Google Material Design Icon that's assigned to this collection.",
                          example: 'people',
                        }),
                      note: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'A note describing the collection.',
                          example: null,
                        }),
                      display_template: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Text representation of how items from this collection are shown across the system.',
                          example: null,
                        }),
                      hidden: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not the collection is hidden from the navigation in the admin app.',
                          example: false,
                        }),
                      singleton: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not the collection is treated as a single object.',
                          example: false,
                        }),
                      translation: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            "Key value pairs of how to show this collection's name in different languages in the admin app.",
                          example: null,
                        }),
                      versioning: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not Content Versioning is enabled for this collection.',
                          example: false,
                        }),
                      archive_field: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'What field holds the archive value.',
                          example: null,
                        }),
                      archive_app_filter: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'What value to use for "archived" items.',
                          example: null,
                        }),
                      archive_value: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'What value to use to "unarchive" items.',
                          example: null,
                        }),
                      unarchive_value: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Whether or not to show the "archived" filter.',
                          example: null,
                        }),
                      sort_field: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'The sort field in the collection.',
                          example: null,
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Metadata of the collection. Required unless `schema` is provided.',
                      required: [],
                    }),
                })
                .openapi({ required: ['collection'] }),
            )
            .openapi({ required: ['collection'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CollectionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/collections/{id}',
  tags: ['Collections'],
  summary: 'Retrieve a Collection',
  description: 'Retrieves the details of a single collection.',
  operationId: 'getCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Unique identifier of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CollectionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteCollectionsIdRoute = createRoute({
  method: 'delete',
  path: '/collections/{id}',
  tags: ['Collections'],
  summary: 'Delete a Collection',
  description:
    'Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.',
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Unique identifier of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchCollectionsIdRoute = createRoute({
  method: 'patch',
  path: '/collections/{id}',
  tags: ['Collections'],
  summary: 'Update a Collection',
  description: 'Update an existing collection.',
  operationId: 'updateCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Unique identifier of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({
                  icon: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Name of a Google Material Design Icon that's assigned to this collection.",
                      example: 'people',
                    }),
                  color: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Choose the color for the icon assigned to this collection.',
                      example: '#6644ff',
                    }),
                  note: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'A note describing the collection.', example: null }),
                  display_template: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Text representation of how items from this collection are shown across the system.',
                      example: null,
                    }),
                  hidden: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether or not the collection is hidden from the navigation in the admin app.',
                      example: false,
                    }),
                  singleton: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not the collection is treated as a single object.',
                      example: false,
                    }),
                  translation: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Key value pairs of how to show this collection's name in different languages in the admin app.",
                      example: null,
                    }),
                  versioning: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether or not Content Versioning is enabled for this collection.',
                      example: false,
                    }),
                  archive_field: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'What field holds the archive value.', example: null }),
                  archive_app_filter: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'What value to use for "archived" items.',
                      example: null,
                    }),
                  archive_value: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'What value to use to "unarchive" items.',
                      example: null,
                    }),
                  unarchive_value: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not to show the "archived" filter.',
                      example: null,
                    }),
                  sort_field: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The sort field in the collection.', example: null }),
                })
                .exactOptional()
                .openapi({ description: 'Metadata of the collection.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CollectionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getCommentsRoute = createRoute({
  method: 'get',
  path: '/comments',
  tags: ['Comments'],
  summary: 'List Comments',
  description: 'List the comments.',
  operationId: 'getComments',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CommentsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ Auth: [] }],
})

export const postCommentsRoute = createRoute({
  method: 'post',
  path: '/comments',
  tags: ['Comments'],
  summary: 'Create a Comment',
  description: 'Create a new comment.',
  operationId: 'createComment',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .string()
                .openapi({
                  description: 'Which collection this collection comment is for.',
                  example: 'projects',
                }),
              item: z.string().openapi({ example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28' }),
              comment: z.string().openapi({ example: 'A new comment' }),
            })
            .openapi({ required: ['collection', 'item', 'comment'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CommentsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const deleteCommentsRoute = createRoute({
  method: 'delete',
  path: '/comments',
  tags: ['Comments'],
  summary: 'Delete Multiple Comments',
  description: 'Delete multiple existing comments.',
  operationId: 'deleteComments',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchCommentsRoute = createRoute({
  method: 'patch',
  path: '/comments',
  tags: ['Comments'],
  summary: 'Update Multiple Comments',
  description: 'Update multiple comments at the same time.',
  operationId: 'updateComments',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keys: z.array(z.string()).exactOptional(),
              data: z
                .object({
                  collection: z
                    .string()
                    .openapi({
                      description: 'Which collection this collection comment is for.',
                      example: 'projects',
                    }),
                  item: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28' }),
                  comment: z.string().exactOptional().openapi({ example: 'A new comment' }),
                })
                .exactOptional()
                .openapi({ required: ['collection'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CommentsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getCommentsIdRoute = createRoute({
  method: 'get',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Retrieve a Comment',
  description: 'Retrieve a single comment by unique identifier.',
  operationId: 'getComment',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CommentsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ Auth: [] }],
})

export const deleteCommentsIdRoute = createRoute({
  method: 'delete',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Delete a Comment',
  description: 'Delete an existing comment.',
  operationId: 'deleteComment',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
  security: [{ Auth: [] }],
})

export const patchCommentsIdRoute = createRoute({
  method: 'patch',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Update a Comment',
  description: 'Update an existing comment.',
  operationId: 'updateComment',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .string()
                .openapi({
                  description: 'Which collection this comment is for.',
                  example: 'projects',
                }),
              item: z
                .string()
                .exactOptional()
                .openapi({ example: '81dfa7e0-56d2-471f-b96a-1cf8a62bdf28' }),
              comment: z.string().exactOptional().openapi({ example: 'An updated comment' }),
            })
            .openapi({ required: ['collection'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: CommentsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getExtensionsRoute = createRoute({
  method: 'get',
  path: '/extensions',
  tags: ['Extensions'],
  summary: 'List Extensions',
  description: 'List the installed extensions and their configuration in the project.',
  operationId: 'listExtensions',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ExtensionsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const patchExtensionsNameRoute = createRoute({
  method: 'patch',
  path: '/extensions/{name}',
  tags: ['Extensions'],
  summary: 'Update an Extension',
  description: 'Update an existing extension.',
  operationId: 'updateExtensions',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not the extension is enabled.',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Directus metadata for the extension. Where the configuration for the extension in the current project is stored.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: ExtensionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchExtensionsBundleNameRoute = createRoute({
  method: 'patch',
  path: '/extensions/{bundle}/{name}',
  tags: ['Extensions'],
  summary: 'Update an Extension',
  description: 'Update an existing extension.',
  operationId: 'updateExtensionBundle',
  request: {
    params: z.object({
      bundle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bundle', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not the extension is enabled.',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Directus metadata for the extension. Where the configuration for the extension in the current project is stored.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: ExtensionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFieldsRoute = createRoute({
  method: 'get',
  path: '/fields',
  tags: ['Fields'],
  summary: 'List All Fields',
  description: 'Returns a list of the fields available in the project.',
  operationId: 'getFields',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(FieldsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFieldsCollectionRoute = createRoute({
  method: 'get',
  path: '/fields/{collection}',
  tags: ['Fields'],
  summary: 'List Fields in Collection',
  description: 'Returns a list of the fields available in the given collection.',
  operationId: 'getCollectionFields',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the collection the item resides in.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(FieldsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postFieldsCollectionRoute = createRoute({
  method: 'post',
  path: '/fields/{collection}',
  tags: ['Fields'],
  summary: 'Create Field in Collection',
  description: 'Create a new field in a given collection.',
  operationId: 'createField',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the collection the item resides in.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              field: z
                .string()
                .openapi({
                  description:
                    'Unique name of the field. Field name is unique within the collection.',
                  example: 'id',
                }),
              type: z
                .string()
                .openapi({
                  description: 'Directus specific data type. Used to cast values in the API.',
                  example: 'integer',
                }),
              schema: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the field.', example: 'title' }),
                  table: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The collection of the field.', example: 'posts' }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The type of the field.', example: 'string' }),
                  default_value: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The default value of the field.', example: null }),
                  max_length: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The max length of the field.', example: null }),
                  is_nullable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field is nullable.', example: false }),
                  is_primary_key: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field is primary key.', example: false }),
                  has_auto_increment: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field has auto increment.', example: false }),
                  foreign_key_column: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related column from the foreign key constraint.',
                      example: null,
                    }),
                  foreign_key_table: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related table from the foreign key constraint.',
                      example: null,
                    }),
                  comment: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Comment as saved in the database.', example: null }),
                  schema: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Database schema (pg only).', example: 'public' }),
                  foreign_key_schema: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related schema from the foreign key constraint (pg only).',
                      example: null,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'The schema info.', required: [] }),
              meta: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique identifier for the field in the `directus_fields` collection.',
                      example: 3,
                    }),
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Unique name of the collection this field is in.',
                      example: 'posts',
                    }),
                  field: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique name of the field. Field name is unique within the collection.',
                      example: 'title',
                    }),
                  special: z
                    .array(z.string())
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Transformation flag for field', example: null }),
                  'system-interface': z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'What interface is used in the admin app to edit the value for this field.',
                      example: 'primary-key',
                    }),
                  options: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Options for the interface that's used. This format is based on the individual interface.",
                      example: null,
                    }),
                  display: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'What display is used in the admin app to display the value for this field.',
                      example: null,
                    }),
                  display_options: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Options for the display that's used. This format is based on the individual display.",
                      example: null,
                    }),
                  locked: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If the field can be altered by the end user. Directus system fields have this value set to `true`.',
                      example: true,
                    }),
                  readonly: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Prevents the user from editing the value in the field.',
                      example: false,
                    }),
                  hidden: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If this field should be hidden.', example: true }),
                  sort: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Sort order of this field on the edit page of the admin app.',
                      example: 1,
                    }),
                  width: z
                    .union([
                      z.literal('half'),
                      z.literal('half-left'),
                      z.literal('half-right'),
                      z.literal('full'),
                      z.literal('fill'),
                      z.literal(null),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Width of the field on the edit form.',
                      example: null,
                    }),
                  group: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'What field group this field is part of.',
                      example: null,
                    }),
                  translation: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.',
                      example: null,
                    }),
                  note: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'A user provided note for the field. Will be rendered alongside the interface on the edit page.',
                      example: '',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'The meta info.', required: [] }),
            })
            .openapi({ required: ['field', 'datatype', 'type', 'length'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FieldsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFieldsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/fields/{collection}/{id}',
  tags: ['Fields'],
  summary: 'Retrieve a Field',
  description: 'Retrieves the details of a single field in a given collection.',
  operationId: 'getCollectionField',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            name: 'collection',
            in: 'path',
            description: 'Unique identifier of the collection the item resides in.',
            schema: { type: 'string' },
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Unique identifier of the field.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FieldsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteFieldsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/fields/{collection}/{id}',
  tags: ['Fields'],
  summary: 'Delete a Field',
  description: 'Delete an existing field.',
  operationId: 'deleteField',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            name: 'collection',
            in: 'path',
            description: 'Unique identifier of the collection the item resides in.',
            schema: { type: 'string' },
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Unique identifier of the field.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchFieldsCollectionIdRoute = createRoute({
  method: 'patch',
  path: '/fields/{collection}/{id}',
  tags: ['Fields'],
  summary: 'Update a Field',
  description: 'Update an existing field.',
  operationId: 'updateField',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            name: 'collection',
            in: 'path',
            description: 'Unique identifier of the collection the item resides in.',
            schema: { type: 'string' },
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Unique identifier of the field.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              field: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique name of the field. Field name is unique within the collection.',
                  example: 'id',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Directus specific data type. Used to cast values in the API.',
                  example: 'integer',
                }),
              schema: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the field.', example: 'title' }),
                  table: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The collection of the field.', example: 'posts' }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The type of the field.', example: 'string' }),
                  default_value: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The default value of the field.', example: null }),
                  max_length: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The max length of the field.', example: null }),
                  is_nullable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field is nullable.', example: false }),
                  is_primary_key: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field is primary key.', example: false }),
                  has_auto_increment: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If the field has auto increment.', example: false }),
                  foreign_key_column: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related column from the foreign key constraint.',
                      example: null,
                    }),
                  foreign_key_table: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related table from the foreign key constraint.',
                      example: null,
                    }),
                  comment: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Comment as saved in the database.', example: null }),
                  schema: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Database schema (pg only).', example: 'public' }),
                  foreign_key_schema: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Related schema from the foreign key constraint (pg only).',
                      example: null,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'The schema info.', required: [] }),
              meta: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique identifier for the field in the `directus_fields` collection.',
                      example: 3,
                    }),
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Unique name of the collection this field is in.',
                      example: 'posts',
                    }),
                  field: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique name of the field. Field name is unique within the collection.',
                      example: 'title',
                    }),
                  special: z
                    .array(z.string())
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Transformation flag for field', example: null }),
                  'system-interface': z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'What interface is used in the admin app to edit the value for this field.',
                      example: 'primary-key',
                    }),
                  options: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Options for the interface that's used. This format is based on the individual interface.",
                      example: null,
                    }),
                  display: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'What display is used in the admin app to display the value for this field.',
                      example: null,
                    }),
                  display_options: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Options for the display that's used. This format is based on the individual display.",
                      example: null,
                    }),
                  locked: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If the field can be altered by the end user. Directus system fields have this value set to `true`.',
                      example: true,
                    }),
                  readonly: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Prevents the user from editing the value in the field.',
                      example: false,
                    }),
                  hidden: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If this field should be hidden.', example: true }),
                  sort: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Sort order of this field on the edit page of the admin app.',
                      example: 1,
                    }),
                  width: z
                    .union([
                      z.literal('half'),
                      z.literal('half-left'),
                      z.literal('half-right'),
                      z.literal('full'),
                      z.literal('fill'),
                      z.literal(null),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Width of the field on the edit form.',
                      example: null,
                    }),
                  group: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'What field group this field is part of.',
                      example: null,
                    }),
                  translation: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.',
                      example: null,
                    }),
                  note: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'A user provided note for the field. Will be rendered alongside the interface on the edit page.',
                      example: '',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({ description: 'The meta info.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FieldsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/files',
  tags: ['Files'],
  summary: 'List Files',
  description: 'List the files.',
  operationId: 'getFiles',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FilesSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  tags: ['Files'],
  summary: 'Create a File',
  description: 'Create a new file',
  operationId: 'createFile',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ data: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FilesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const deleteFilesRoute = createRoute({
  method: 'delete',
  path: '/files',
  tags: ['Files'],
  summary: 'Delete Multiple Files',
  description: 'Delete multiple existing files.',
  operationId: 'deleteFiles',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchFilesRoute = createRoute({
  method: 'patch',
  path: '/files',
  tags: ['Files'],
  summary: 'Update Multiple Files',
  description: 'Update multiple files at the same time.',
  operationId: 'updateFiles',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ data: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(FilesSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getFilesIdRoute = createRoute({
  method: 'get',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Retrieve a Files',
  description: 'Retrieve a single file by unique identifier.',
  operationId: 'getFile',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FilesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const deleteFilesIdRoute = createRoute({
  method: 'delete',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Delete a File',
  description: 'Delete an existing file.',
  operationId: 'deleteFile',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchFilesIdRoute = createRoute({
  method: 'patch',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Update a File',
  description: "Update an existing file, and/or replace it's file contents.",
  operationId: 'updateFile',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'multipart/data': {
          schema: z
            .object({
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Title for the file. Is extracted from the filename on upload, but can be edited by the user.',
                  example: 'User Avatar',
                }),
              filename_download: z
                .string()
                .exactOptional()
                .openapi({ description: 'Preferred filename when file is downloaded.' }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the file.' }),
              folder: z
                .xor([z.string(), FoldersSchema])
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Virtual folder where this file resides in.',
                  example: null,
                }),
              tags: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Tags for the file. Is automatically populated based on Exif data for images.',
                }),
              file: z.any().openapi({ description: 'File contents.' }),
            })
            .openapi({ required: ['file'] }),
        },
        'application/json': {
          schema: z
            .object({
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Title for the file. Is extracted from the filename on upload, but can be edited by the user.',
                  example: 'User Avatar',
                }),
              filename_download: z
                .string()
                .exactOptional()
                .openapi({ description: 'Preferred filename when file is downloaded.' }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Description for the file.' }),
              folder: z
                .xor([z.string(), FoldersSchema])
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Virtual folder where this file resides in.',
                  example: null,
                }),
              tags: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Tags for the file. Is automatically populated based on Exif data for images.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FilesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getFlowsRoute = createRoute({
  method: 'get',
  path: '/flows',
  tags: ['Flows'],
  summary: 'List Flows',
  description: 'Get all flows.',
  operationId: 'getFlows',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FlowsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postFlowsRoute = createRoute({
  method: 'post',
  path: '/flows',
  tags: ['Flows'],
  summary: 'Create a Flow',
  description: 'Create a new flow.',
  operationId: 'createFlow',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([FlowsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FlowsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteFlowsRoute = createRoute({
  method: 'delete',
  path: '/flows',
  tags: ['Flows'],
  summary: 'Delete Multiple Flows',
  description: 'Delete multiple existing flows.',
  operationId: 'deleteFlows',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchFlowsRoute = createRoute({
  method: 'patch',
  path: '/flows',
  tags: ['Flows'],
  summary: 'Update Multiple Flows',
  description: 'Update multiple flows at the same time.',
  operationId: 'updateFlows',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.union([FlowsSchema]).exactOptional(),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(FlowsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getFlowsIdRoute = createRoute({
  method: 'get',
  path: '/flows/{id}',
  tags: ['Flows'],
  summary: 'Retrieve a Flow',
  description: 'Retrieve a single flow by unique identifier.',
  operationId: 'getFlow',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FlowsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteFlowsIdRoute = createRoute({
  method: 'delete',
  path: '/flows/{id}',
  tags: ['Flows'],
  summary: 'Delete a Flow',
  description: 'Delete an existing flow',
  operationId: 'deleteFlow',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchFlowsIdRoute = createRoute({
  method: 'patch',
  path: '/flows/{id}',
  tags: ['Flows'],
  summary: 'Update a Flow',
  description: 'Update an existing flow',
  operationId: 'updateFlow',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([FlowsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FlowsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFoldersRoute = createRoute({
  method: 'get',
  path: '/folders',
  tags: ['Folders'],
  summary: 'List Folders',
  description: 'List the folders.',
  operationId: 'getFolders',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FoldersSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postFoldersRoute = createRoute({
  method: 'post',
  path: '/folders',
  tags: ['Folders'],
  summary: 'Create a Folder',
  description: 'Create a new folder.',
  operationId: 'createFolder',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ example: 'Amsterdam', description: 'Name of the folder.' }),
              parent: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier of the parent folder. This allows for nested folders.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FoldersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteFoldersRoute = createRoute({
  method: 'delete',
  path: '/folders',
  tags: ['Folders'],
  summary: 'Delete Multiple Folders',
  description: 'Delete multiple existing folders.',
  operationId: 'deleteFolders',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchFoldersRoute = createRoute({
  method: 'patch',
  path: '/folders',
  tags: ['Folders'],
  summary: 'Update Multiple Folders',
  description: 'Update multiple folders at the same time.',
  operationId: 'updateFolders',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  name: z
                    .string()
                    .openapi({ example: 'Amsterdam', description: 'Name of the folder.' }),
                  parent: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique identifier of the parent folder. This allows for nested folders.',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['name'] }),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(FoldersSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getFoldersIdRoute = createRoute({
  method: 'get',
  path: '/folders/{id}',
  tags: ['Folders'],
  summary: 'Retrieve a Folder',
  description: 'Retrieve a single folder by unique identifier.',
  operationId: 'getFolder',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FoldersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteFoldersIdRoute = createRoute({
  method: 'delete',
  path: '/folders/{id}',
  tags: ['Folders'],
  summary: 'Delete a Folder',
  description: 'Delete an existing folder',
  operationId: 'deleteFolder',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchFoldersIdRoute = createRoute({
  method: 'patch',
  path: '/folders/{id}',
  tags: ['Folders'],
  summary: 'Update a Folder',
  description: 'Update an existing folder',
  operationId: 'updateFolder',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: "Name of the folder. Can't be null or empty." }),
              parent: z
                .int()
                .exactOptional()
                .openapi({
                  example: 3,
                  description:
                    'Unique identifier of the parent folder. This allows for nested folders.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: FoldersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getOperationsRoute = createRoute({
  method: 'get',
  path: '/operations',
  tags: ['Operations'],
  summary: 'List Operations',
  description: 'Get all operations.',
  operationId: 'getOperations',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(OperationsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postOperationsRoute = createRoute({
  method: 'post',
  path: '/operations',
  tags: ['Operations'],
  summary: 'Create an Operation',
  description: 'Create a new operation.',
  operationId: 'createOperation',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([OperationsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: OperationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteOperationsRoute = createRoute({
  method: 'delete',
  path: '/operations',
  tags: ['Operations'],
  summary: 'Delete Multiple Operations',
  description: 'Delete multiple existing operations.',
  operationId: 'deleteOperations',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchOperationsRoute = createRoute({
  method: 'patch',
  path: '/operations',
  tags: ['Operations'],
  summary: 'Update Multiple Operations',
  description: 'Update multiple operations at the same time.',
  operationId: 'updateOperations',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.union([OperationsSchema]).exactOptional(),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(OperationsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getOperationsIdRoute = createRoute({
  method: 'get',
  path: '/operations/{id}',
  tags: ['Operations'],
  summary: 'Retrieve an Operation',
  description: 'Retrieve a single operation by unique identifier.',
  operationId: 'getOperation',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: OperationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteOperationsIdRoute = createRoute({
  method: 'delete',
  path: '/operations/{id}',
  tags: ['Operations'],
  summary: 'Delete an Operation',
  description: 'Delete an existing operation',
  operationId: 'deleteOperation',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchOperationsIdRoute = createRoute({
  method: 'patch',
  path: '/operations/{id}',
  tags: ['Operations'],
  summary: 'Update an Operation',
  description: 'Update an existing operation',
  operationId: 'updateOperation',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([OperationsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: OperationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getPermissionsRoute = createRoute({
  method: 'get',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'List Permissions',
  description: 'List all permissions.',
  operationId: 'getPermissions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      offset: OffsetParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PermissionsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postPermissionsRoute = createRoute({
  method: 'post',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'Create a Permission',
  description: 'Create a new permission.',
  operationId: 'createPermission',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'What collection this permission applies to.',
                  example: 'customers',
                }),
              comment: z
                .enum(['none', 'create', 'update', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can post comments.' }),
              create: z
                .enum(['none', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can create items.' }),
              delete: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can update items.' }),
              explain: z
                .enum(['none', 'create', 'update', 'always'])
                .exactOptional()
                .openapi({
                  description:
                    'If the user is required to leave a comment explaining what was changed.',
                }),
              read: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can read items.' }),
              role: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Unique identifier of the role this permission applies to.',
                  example: 3,
                }),
              read_field_blacklist: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Explicitly denies read access for specific fields.',
                  example: ['featured_image'],
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'What status this permission applies to.' }),
              status_blacklist: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Explicitly denies specific statuses to be used.' }),
              update: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can update items.' }),
              write_field_blacklist: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Explicitly denies write access for specific fields.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PermissionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deletePermissionsRoute = createRoute({
  method: 'delete',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'Delete Multiple Permissions',
  description: 'Delete multiple existing permissions.',
  operationId: 'deletePermissions',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchPermissionsRoute = createRoute({
  method: 'patch',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'Update Multiple Permissions',
  description: 'Update multiple permissions at the same time.',
  operationId: 'updatePermissions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keys: z.array(z.string()).exactOptional(),
              data: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'What collection this permission applies to.',
                      example: 'customers',
                    }),
                  comment: z
                    .enum(['none', 'create', 'update', 'full'])
                    .exactOptional()
                    .openapi({ description: 'If the user can post comments.' }),
                  create: z
                    .enum(['none', 'full'])
                    .exactOptional()
                    .openapi({ description: 'If the user can create items.' }),
                  delete: z
                    .enum(['none', 'mine', 'role', 'full'])
                    .exactOptional()
                    .openapi({ description: 'If the user can update items.' }),
                  explain: z
                    .enum(['none', 'create', 'update', 'always'])
                    .exactOptional()
                    .openapi({
                      description:
                        'If the user is required to leave a comment explaining what was changed.',
                    }),
                  read: z
                    .enum(['none', 'mine', 'role', 'full'])
                    .exactOptional()
                    .openapi({ description: 'If the user can read items.' }),
                  role: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the role this permission applies to.',
                      example: 3,
                    }),
                  read_field_blacklist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'Explicitly denies read access for specific fields.',
                      example: ['featured_image'],
                    }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'What status this permission applies to.' }),
                  status_blacklist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Explicitly denies specific statuses to be used.' }),
                  update: z
                    .enum(['none', 'mine', 'role', 'full'])
                    .exactOptional()
                    .openapi({ description: 'If the user can update items.' }),
                  write_field_blacklist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'Explicitly denies write access for specific fields.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PermissionsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getPermissionsMeRoute = createRoute({
  method: 'get',
  path: '/permissions/me',
  tags: ['Permissions'],
  summary: 'List My Permissions',
  description: 'List the permissions that apply to the current user.',
  operationId: 'getMyPermissions',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(PermissionsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getPermissionsIdRoute = createRoute({
  method: 'get',
  path: '/permissions/{id}',
  tags: ['Permissions'],
  summary: 'Retrieve a Permission',
  description: 'Retrieve a single permissions object by unique identifier.',
  operationId: 'getPermission',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PermissionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deletePermissionsIdRoute = createRoute({
  method: 'delete',
  path: '/permissions/{id}',
  tags: ['Permissions'],
  summary: 'Delete a Permission',
  description: 'Delete an existing permission',
  operationId: 'deletePermission',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchPermissionsIdRoute = createRoute({
  method: 'patch',
  path: '/permissions/{id}',
  tags: ['Permissions'],
  summary: 'Update a Permission',
  description: 'Update an existing permission',
  operationId: 'updatePermission',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({})
                .exactOptional()
                .openapi({ description: 'What collection this permission applies to.' }),
              comment: z
                .enum(['none', 'create', 'update'])
                .exactOptional()
                .openapi({ description: 'If the user can post comments. `full`.' }),
              create: z
                .enum(['none', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can create items.' }),
              delete: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can update items.' }),
              explain: z
                .enum(['none', 'create', 'update', 'always'])
                .exactOptional()
                .openapi({
                  description:
                    'If the user is required to leave a comment explaining what was changed.',
                }),
              read: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can read items.' }),
              read_field_blacklist: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Explicitly denies read access for specific fields.' }),
              role: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Unique identifier of the role this permission applies to.',
                }),
              status: z
                .object({})
                .exactOptional()
                .openapi({ description: 'What status this permission applies to.' }),
              status_blacklist: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Explicitly denies specific statuses to be used.' }),
              update: z
                .enum(['none', 'mine', 'role', 'full'])
                .exactOptional()
                .openapi({ description: 'If the user can update items.' }),
              write_field_blacklist: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Explicitly denies write access for specific fields.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: PermissionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getRelationsRoute = createRoute({
  method: 'get',
  path: '/relations',
  tags: ['Relations'],
  summary: 'List Relations',
  description: 'List the relations.',
  operationId: 'getRelations',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(RelationsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postRelationsRoute = createRoute({
  method: 'post',
  path: '/relations',
  tags: ['Relations'],
  summary: 'Create a Relation',
  description: 'Create a new relation.',
  operationId: 'createRelation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection_many: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Collection that has the field that holds the foreign key.',
                  example: 'articles',
                }),
              collection_one: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Collection on the _one_ side of the relationship.',
                  example: 'authors',
                }),
              field_many: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Foreign key. Field that holds the primary key of the related collection.',
                  example: 'author',
                }),
              field_one: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Alias column that serves as the _one_ side of the relationship.',
                  example: 'books',
                }),
              junction_field: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Field on the junction table that holds the primary key of the related collection.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RelationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getRelationsIdRoute = createRoute({
  method: 'get',
  path: '/relations/{id}',
  tags: ['Relations'],
  summary: 'Retrieve a Relation',
  description: 'Retrieve a single relation by unique identifier.',
  operationId: 'getRelation',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RelationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteRelationsIdRoute = createRoute({
  method: 'delete',
  path: '/relations/{id}',
  tags: ['Relations'],
  summary: 'Delete a Relation',
  description: 'Delete an existing relation.',
  operationId: 'deleteRelation',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchRelationsIdRoute = createRoute({
  method: 'patch',
  path: '/relations/{id}',
  tags: ['Relations'],
  summary: 'Update a Relation',
  description: 'Update an existing relation',
  operationId: 'updateRelation',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection_many: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Collection that has the field that holds the foreign key.',
                }),
              collection_one: z
                .string()
                .exactOptional()
                .openapi({ description: 'Collection on the _one_ side of the relationship.' }),
              field_many: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Foreign key. Field that holds the primary key of the related collection.',
                }),
              field_one: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Alias column that serves as the _one_ side of the relationship.',
                  example: 'books',
                }),
              junction_field: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Field on the junction table that holds the primary key of the related collection.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RelationsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getRevisionsRoute = createRoute({
  method: 'get',
  path: '/revisions',
  tags: ['Revisions'],
  summary: 'List Revisions',
  description: 'List the revisions.',
  operationId: 'getRevisions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RevisionsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getRevisionsIdRoute = createRoute({
  method: 'get',
  path: '/revisions/{id}',
  tags: ['Revisions'],
  summary: 'Retrieve a Revision',
  description: 'Retrieve a single revision by unique identifier.',
  operationId: 'getRevision',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RevisionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['Roles'],
  summary: 'List Roles',
  description: 'List the roles.',
  operationId: 'getRoles',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RolesSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postRolesRoute = createRoute({
  method: 'post',
  path: '/roles',
  tags: ['Roles'],
  summary: 'Create a Role',
  description: 'Create a new role.',
  operationId: 'createRole',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description of the role.' }),
              enforce_tfa: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not this role enforces the use of 2FA.' }),
              external_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID used with external services in SCIM.' }),
              ip_access: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of IP addresses that are allowed to connect to the API as a user of this role.',
                }),
              module_listing: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Custom override for the admin app module bar navigation.',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the role.', example: 'Interns' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RolesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteRolesRoute = createRoute({
  method: 'delete',
  path: '/roles',
  tags: ['Roles'],
  summary: 'Delete Multiple Roles',
  description: 'Delete multiple existing roles.',
  operationId: 'deleteRoles',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchRolesRoute = createRoute({
  method: 'patch',
  path: '/roles',
  tags: ['Roles'],
  summary: 'Update Multiple Roles',
  description: 'Update multiple roles at the same time.',
  operationId: 'updateRoles',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keys: z.array(z.string()).exactOptional(),
              data: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Description of the role.' }),
                  enforce_tfa: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether or not this role enforces the use of 2FA.' }),
                  external_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'ID used with external services in SCIM.' }),
                  ip_access: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Array of IP addresses that are allowed to connect to the API as a user of this role.',
                    }),
                  module_listing: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Custom override for the admin app module bar navigation.',
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Name of the role.', example: 'Interns' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(RolesSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getRolesIdRoute = createRoute({
  method: 'get',
  path: '/roles/{id}',
  tags: ['Roles'],
  summary: 'Retrieve a Role',
  description: 'Retrieve a single role by unique identifier.',
  operationId: 'getRole',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RolesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteRolesIdRoute = createRoute({
  method: 'delete',
  path: '/roles/{id}',
  tags: ['Roles'],
  summary: 'Delete a Role',
  description: 'Delete an existing role',
  operationId: 'deleteRole',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchRolesIdRoute = createRoute({
  method: 'patch',
  path: '/roles/{id}',
  tags: ['Roles'],
  summary: 'Update a Role',
  description: 'Update an existing role',
  operationId: 'updateRole',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description of the role.' }),
              enforce_tfa: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not this role enforces the use of 2FA.' }),
              external_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID used with external services in SCIM.' }),
              ip_access: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of IP addresses that are allowed to connect to the API as a user of this role.',
                }),
              module_listing: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Custom override for the admin app module bar navigation.',
                }),
              name: z.string().exactOptional().openapi({ description: 'Name of the role.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: RolesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getSchemaSnapshotRoute = createRoute({
  method: 'get',
  path: '/schema/snapshot',
  tags: ['Schema'],
  summary: 'Retrieve Schema Snapshot',
  description: 'Retrieve the current schema. This endpoint is only available to admin users.',
  operationId: 'schemaSnapshot',
  request: {
    query: z.object({
      export: ExportParamsSchema,
      includeCollections: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'includeCollections',
            description:
              'Restrict the snapshot to these collections (produces a partial snapshot, version 2). Mutually exclusive with `excludeCollections`.',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      excludeCollections: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeCollections',
            description:
              'Exclude these collections from the snapshot (produces a partial snapshot, version 2). Mutually exclusive with `includeCollections`.',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: SchemaSchema.exactOptional() }).openapi({ required: [] }),
        },
        'text/yaml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    403: UnauthorizedErrorResponse,
  },
})

export const postSchemaApplyRoute = createRoute({
  method: 'post',
  path: '/schema/apply',
  tags: ['Schema'],
  summary: 'Apply Schema Difference',
  description:
    "Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users.",
  operationId: 'schemaApply',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ data: DiffSchema.exactOptional() }).openapi({ required: [] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: NoContentResponseResponse, 403: UnauthorizedErrorResponse },
})

export const postSchemaDiffRoute = createRoute({
  method: 'post',
  path: '/schema/diff',
  tags: ['Schema'],
  summary: 'Retrieve Schema Difference',
  description:
    "Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.",
  operationId: 'schemaDiff',
  request: {
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            description: 'Bypass version and database vendor restrictions.',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      mode: z
        .enum(['merge', 'mirror'])
        .default('mirror')
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            description:
              '`mirror` (default) returns all operations. `merge` yields an additive diff, excluding deletions so existing collections, fields, and relations are never removed.',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['merge', 'mirror'], default: 'mirror' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ data: SchemaSchema.exactOptional() }).openapi({ required: [] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: DiffSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    204: { description: 'No schema difference.' },
    403: UnauthorizedErrorResponse,
  },
})

export const getServerInfoRoute = createRoute({
  method: 'get',
  path: '/server/info',
  tags: ['Server'],
  summary: 'System Info',
  description: 'Perform a system status check and return the options.',
  operationId: 'serverInfo',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getServerPingRoute = createRoute({
  method: 'get',
  path: '/server/ping',
  tags: ['Server'],
  summary: 'Ping',
  description: 'Ping, pong. Ping.. pong.',
  operationId: 'ping',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/text': { schema: z.string().regex(/pong/).openapi({ example: 'pong' }) },
      },
    },
  },
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  tags: ['Settings'],
  summary: 'Retrieve Settings',
  description: 'List the settings.',
  operationId: 'getSettings',
  request: { query: z.object({ fields: FieldsParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: SettingsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchSettingsRoute = createRoute({
  method: 'patch',
  path: '/settings',
  tags: ['Settings'],
  summary: 'Update Settings',
  description: 'Update the settings',
  operationId: 'updateSetting',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: SettingsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'List Users',
  description: 'List the users.',
  operationId: 'getUsers',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UsersSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a User',
  description: 'Create a new user.',
  operationId: 'createUser',
  request: { body: { content: { 'application/json': { schema: UsersSchema } } } },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: UsersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteUsersRoute = createRoute({
  method: 'delete',
  path: '/users',
  tags: ['Users'],
  summary: 'Delete Multiple Users',
  description: 'Delete multiple existing users.',
  operationId: 'deleteUsers',
  responses: { 204: NoContentResponseResponse, 401: UnauthorizedErrorResponse },
})

export const patchUsersRoute = createRoute({
  method: 'patch',
  path: '/users',
  tags: ['Users'],
  summary: 'Update Multiple Users',
  description: 'Update multiple users at the same time.',
  operationId: 'updateUsers',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: UsersSchema.exactOptional(),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(UsersSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Retrieve a User',
  description: 'Retrieve a single user by unique identifier.',
  operationId: 'getUser',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: UsersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteUsersIdRoute = createRoute({
  method: 'delete',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Delete a User',
  description: 'Delete an existing user',
  operationId: 'deleteUser',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchUsersIdRoute = createRoute({
  method: 'patch',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Update a User',
  description: 'Update an existing user',
  operationId: 'updateUser',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: UsersSchema } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersIdTfaDisableRoute = createRoute({
  method: 'post',
  path: '/users/{id}/tfa/disable',
  tags: ['Users'],
  summary: 'Disable 2FA for User',
  description: 'Disables two-factor authentication for a specific user. Requires admin access.',
  operationId: 'disableUserTfa',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postUsersInviteRoute = createRoute({
  method: 'post',
  path: '/users/invite',
  tags: ['Users'],
  summary: 'Invite User(s)',
  description:
    'Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account.',
  operationId: 'invite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email address or array of email addresses of the to-be-invited user(s).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersInviteAcceptRoute = createRoute({
  method: 'post',
  path: '/users/invite/accept',
  tags: ['Users'],
  summary: 'Accept User Invite',
  description: 'Accepts and enables an invited user using a JWT invitation token.',
  operationId: 'acceptInvite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .exactOptional()
                .openapi({ example: 'eyJh...KmUk', description: 'Accept invite token.' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password of the user.', example: 'd1r3ctu5' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Retrieve Current User',
  description: 'Retrieve the currently authenticated user.',
  operationId: 'getMe',
  request: { query: z.object({ fields: FieldsParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: UsersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchUsersMeRoute = createRoute({
  method: 'patch',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Update Current User',
  description: 'Update the currently authenticated user.',
  operationId: 'updateMe',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: UsersSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersMeTfaDisableRoute = createRoute({
  method: 'post',
  path: '/users/me/tfa/disable',
  tags: ['Users'],
  summary: 'Disable 2FA',
  description: 'Disables two-factor authentication for the currently authenticated user.',
  operationId: 'meTfaDisable',
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersMeTfaEnableRoute = createRoute({
  method: 'post',
  path: '/users/me/tfa/enable',
  tags: ['Users'],
  summary: 'Enable 2FA',
  description: 'Enables two-factor authentication for the currently authenticated user.',
  operationId: 'meTfaEnable',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              secret: z
                .string()
                .openapi({
                  description: 'The secret from the tfa/generate endpoint.',
                  example: 'JBSWY3DPEHPK3PXP',
                }),
              otp: z
                .string()
                .openapi({
                  description: "One-time-password from the user's authenticator app.",
                  example: '123456',
                }),
            })
            .openapi({ required: ['secret', 'otp'] }),
        },
      },
    },
  },
  responses: {
    204: NoContentResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
  },
})

export const postUsersMeTfaGenerateRoute = createRoute({
  method: 'post',
  path: '/users/me/tfa/generate',
  tags: ['Users'],
  summary: 'Generate 2FA Secret',
  description: 'Generates a TOTP secret and OTPauth URI for the currently authenticated user.',
  operationId: 'meTfaGenerate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's current password. Required when using the default authentication provider.",
                  example: 'password',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  secret: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Base32-encoded TOTP secret to store in the authenticator app.',
                      example: 'JBSWY3DPEHPK3PXP',
                    }),
                  otpauth_url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'OTPauth URI for QR code generation.',
                      example:
                        'otpauth://totp/Directus:admin%40example.com?secret=JBSWY3DPEHPK3PXP&issuer=Directus',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
  },
})

export const patchUsersMeTrackPageRoute = createRoute({
  method: 'patch',
  path: '/users/me/track/page',
  tags: ['Users'],
  summary: 'Update Last Page',
  description:
    'Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used.',
  operationId: 'updateLastUsedPageMe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              last_page: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path of the page you used last.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: NoContentResponseResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postUsersRegisterRoute = createRoute({
  method: 'post',
  path: '/users/register',
  tags: ['Users'],
  summary: 'Register a New User',
  description: 'Register a new user with the configured self-registration settings.',
  operationId: 'registerUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .email()
                .openapi({
                  description: 'Email address of the new user.',
                  example: 'user@example.com',
                }),
              password: z
                .string()
                .openapi({ description: 'Password for the new user.', example: 'password' }),
              first_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'First name of the new user.', example: 'Jane' }),
              last_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Last name of the new user.', example: 'Doe' }),
              verification_url: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'Custom URL for the email verification link.',
                  example: 'https://example.com/verify',
                }),
            })
            .openapi({ required: ['email', 'password'] }),
        },
      },
    },
  },
  responses: {
    204: NoContentResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    429: TooManyRequestsErrorResponse,
  },
  security: [],
})

export const getUsersRegisterVerifyEmailRoute = createRoute({
  method: 'get',
  path: '/users/register/verify-email',
  tags: ['Users'],
  summary: 'Verify Registration Email',
  description:
    'Verifies the email address for a newly registered user via the token from the verification email.',
  operationId: 'registerUserVerifyEmail',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: true,
            description: 'Email verification token.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    302: RedirectResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
  },
  security: [],
})

export const postUtilsSortCollectionRoute = createRoute({
  method: 'post',
  path: '/utils/sort/{collection}',
  tags: ['Utilities'],
  summary: 'Sort Items',
  description: 'Re-sort items in collection based on start and to value of item',
  operationId: 'sort',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'Collection identifier',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              item: z
                .number()
                .exactOptional()
                .openapi({ description: 'Primary key of item to move' }),
              to: z
                .number()
                .exactOptional()
                .openapi({ description: 'Primary key of item where to move the current item to' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Successful request' } },
})

export const postUtilsImportRoute = createRoute({
  method: 'post',
  path: '/utils/import',
  tags: ['Utilities'],
  summary: 'Import Multiple Collections',
  description:
    'Import flat data for multiple related collections in a single request. Relations are resolved from the schema so collections are imported in dependency order and primary keys (and the foreign keys referencing them) are remapped. The payload is uploaded as a JSON file (`multipart/form-data`).',
  operationId: 'importBatch',
  request: {
    query: z.object({
      mode: z
        .enum(['add', 'merge'])
        .default('add')
        .exactOptional()
        .openapi({
          param: {
            description:
              '`add` (default) inserts new items and remaps conflicting primary keys, `merge` upserts items.',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { type: 'string', enum: ['add', 'merge'], default: 'add' },
          },
        }),
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When true, no data is persisted; the computed id mappings are still returned.',
            in: 'query',
            name: 'dryRun',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      dangerouslyAllowDelete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only valid with `mode=merge`. Deletes any existing records in the imported collections whose primary key is absent from the import, mirroring the payload. Destructive.',
            in: 'query',
            name: 'dangerouslyAllowDelete',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'A JSON file containing an array of `{ collection, items }` objects.',
                }),
            })
            .openapi({ required: [] }),
          example: [
            { collection: 'authors', items: [{ id: '123', name: 'Lorem Ipsum' }] },
            { collection: 'articles', items: [{ id: '123', title: 'Hello World', author: '123' }] },
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  applied: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether the changes were committed. `false` for a dry run.',
                    }),
                  mode: z.enum(['add', 'merge']).exactOptional(),
                  collections: z
                    .record(
                      z.string(),
                      z
                        .object({
                          existing: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'Primary keys of pre-existing records that were matched and updated.',
                            }),
                          new: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({ description: 'Primary keys of newly created records.' }),
                          deleted: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'Primary keys of records that were deleted (only when `dangerouslyAllowDelete` is set).',
                            }),
                          mapped: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Provided primary key -> new primary key, for records whose key was remapped.',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Per-collection summary of the changes made.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    422: {
      description:
        'Error: The import could not be planned, e.g. the requested collections form an unresolvable (non-nullable) relational cycle.',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ErrorSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUtilsImportCollectionRoute = createRoute({
  method: 'post',
  path: '/utils/import/{collection}',
  tags: ['Utilities'],
  summary: 'Import Items',
  description: 'Import multiple records from a JSON or CSV file into a collection.',
  operationId: 'import',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'Collection identifier',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When true, the upload is received and the import is processed asynchronously in the background. The endpoint responds once the upload has been received.',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Successful request (synchronous import completed, or background upload accepted)',
    },
    413: { description: 'The uploaded file exceeds `IMPORT_MAX_FILE_SIZE`' },
  },
})

export const postUtilsExportCollectionRoute = createRoute({
  method: 'post',
  path: '/utils/export/{collection}',
  tags: ['Utilities'],
  summary: 'Export Items',
  description: 'Export a larger data set to a file in the File Library',
  operationId: 'export',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description: 'Collection identifier',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              format: z
                .enum(['csv', 'csv_utf8', 'xml', 'json', 'yaml'])
                .openapi({ description: 'What file format to save the export to.' }),
              query: QuerySchema,
              file: FilesSchema.exactOptional().openapi({
                description: 'Optional file metadata to apply to the created file.',
              }),
            })
            .openapi({ required: ['format', 'query'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Successful request' } },
})

export const postUtilsCacheClearRoute = createRoute({
  method: 'post',
  path: '/utils/cache/clear',
  tags: ['Utilities'],
  summary: 'Clear Cache',
  description: 'Resets both the data and schema cache of Directus.',
  operationId: 'clear-cache',
  responses: { 200: { description: 'Successful request' } },
})

export const getUtilsRandomStringRoute = createRoute({
  method: 'get',
  path: '/utils/random/string',
  tags: ['Utilities'],
  summary: 'Get a Random String',
  description: 'Returns a random string of given length.',
  operationId: 'random',
  request: {
    query: z.object({
      length: z
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
            description: 'Length of the random string.',
            in: 'query',
            name: 'length',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.string().exactOptional().openapi({ example: '1>M3+4oh.S' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getVersionsRoute = createRoute({
  method: 'get',
  path: '/versions',
  tags: ['Versions'],
  summary: 'List Content Versions',
  description: 'Get all Content Versions.',
  operationId: 'getContentVersions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
      aggregate: AggregateParamsSchema,
      groupBy: GroupByParamsSchema,
      deep: DeepParamsSchema,
      alias: AliasParamsSchema,
      export: ExportParamsSchema,
      backlink: BacklinkParamsSchema,
      meta: MetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VersionsSchema).exactOptional(),
              meta: MetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postVersionsRoute = createRoute({
  method: 'post',
  path: '/versions',
  tags: ['Versions'],
  summary: 'Create Multiple Content Versions',
  description: 'Create multiple new Content Versions.',
  operationId: 'createContentVersion',
  request: {
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([VersionsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: VersionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteVersionsRoute = createRoute({
  method: 'delete',
  path: '/versions',
  tags: ['Versions'],
  summary: 'Delete Multiple Content Versions',
  description: 'Delete multiple existing Content Versions.',
  operationId: 'deleteContentVersions',
  responses: { 200: { description: 'Successful request' }, 401: UnauthorizedErrorResponse },
})

export const patchVersionsRoute = createRoute({
  method: 'patch',
  path: '/versions',
  tags: ['Versions'],
  summary: 'Update Multiple Content Versions',
  description: 'Update multiple Content Versions at the same time.',
  operationId: 'updateContentVersions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      filter: FilterParamsSchema,
      search: SearchParamsSchema,
      sort: SortParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      page: PageParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.union([VersionsSchema]).exactOptional(),
              keys: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(VersionsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
})

export const getVersionsIdRoute = createRoute({
  method: 'get',
  path: '/versions/{id}',
  tags: ['Versions'],
  summary: 'Retrieve a Content Version',
  description: 'Retrieve a single Content Version by unique identifier.',
  operationId: 'getContentVersion',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: VersionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteVersionsIdRoute = createRoute({
  method: 'delete',
  path: '/versions/{id}',
  tags: ['Versions'],
  summary: 'Delete a Content Version',
  description: 'Delete an existing Content Version.',
  operationId: 'deleteContentVersion',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: { description: 'Successful request' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchVersionsIdRoute = createRoute({
  method: 'patch',
  path: '/versions/{id}',
  tags: ['Versions'],
  summary: 'Update a Content Version',
  description: 'Update an existing Content Version.',
  operationId: 'updateContentVersion',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: z.union([VersionsSchema]) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: VersionsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postVersionsIdSaveRoute = createRoute({
  method: 'post',
  path: '/versions/{id}/save',
  tags: ['Versions'],
  summary: 'Save to a Content Version',
  description: 'Save item changes to an existing Content Version.',
  operationId: 'saveContentVersion',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    body: { content: { 'application/json': { schema: z.object({}) } } },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getVersionsIdCompareRoute = createRoute({
  method: 'get',
  path: '/versions/{id}/compare',
  tags: ['Versions'],
  summary: 'Compare a Content Version',
  description: 'Compare an existing Content Version with the main version of the item.',
  operationId: 'compareContentVersion',
  request: { params: z.object({ id: UUIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postVersionsIdPromoteRoute = createRoute({
  method: 'post',
  path: '/versions/{id}/promote',
  tags: ['Versions'],
  summary: 'Promote a Content Version',
  description:
    'Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected).',
  operationId: 'promoteContentVersion',
  request: {
    params: z.object({ id: UUIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mainHash: z
                .string()
                .exactOptional()
                .openapi({ description: 'Hash of the main version of the item to be promoted.' }),
              fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional array of field names of which the values are to be promoted.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})
