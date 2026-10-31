import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    active: z
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
        description: 'Account activity status',
        example: 0,
      }),
    created_date: z
      .string()
      .openapi({ description: 'Date when account was created', example: '2018-05-22T04:04:04' }),
    email: z.string().openapi({ description: 'User email', example: 'user@domain.com' }),
    first_name: z.string().openapi({ description: 'First Name', example: 'Doe' }),
    group_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Account group id', example: 0 }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Account id', example: 1495682 }),
    institution_id: z
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
        description: 'Account institution',
        example: 1,
      }),
    institution_user_id: z
      .string()
      .openapi({ description: 'Account institution user id', example: 'djohn42' }),
    last_name: z.string().openapi({ description: 'Last Name', example: 'John' }),
    maximum_file_size: z
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
        description: 'Maximum upload size for account',
        example: 0,
      }),
    modified_date: z
      .string()
      .openapi({
        description: 'Date of last account modification',
        example: '2018-05-22T04:04:04',
      }),
    pending_quota_request: z
      .boolean()
      .openapi({ description: 'True if a quota request is pending', example: true }),
    quota: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Account quota', example: 0 }),
    used_quota: z
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
        description: 'Account total used quota',
        example: 0,
      }),
    used_quota_private: z
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
        description: 'Account used private quota',
        example: 0,
      }),
    used_quota_public: z
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
        description: 'Account public used quota',
        example: 0,
      }),
  })
  .openapi({
    required: [
      'id',
      'first_name',
      'last_name',
      'used_quota_private',
      'modified_date',
      'used_quota',
      'created_date',
      'quota',
      'group_id',
      'institution_user_id',
      'institution_id',
      'email',
      'used_quota_public',
      'pending_quota_request',
      'active',
      'maximum_file_size',
    ],
    'x-tag': 'other',
  })
  .openapi('Account')

const AccountCreateSchema = z
  .object({
    email: z
      .string()
      .min(3)
      .max(150)
      .openapi({ description: 'Email of account', example: 'johndoe@example.com' }),
    first_name: z
      .string()
      .max(30)
      .default('')
      .openapi({ description: 'First Name', example: 'John' }),
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    institution_user_id: z
      .string()
      .max(50)
      .default('')
      .exactOptional()
      .openapi({ description: 'Institution user id', example: 'johndoe' }),
    is_active: z.boolean().exactOptional().openapi({ description: 'Is account active' }),
    last_name: z
      .string()
      .max(30)
      .default('')
      .exactOptional()
      .openapi({ description: 'Last Name', example: 'Doe' }),
    quota: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Account quota', example: 1000 }),
    symplectic_user_id: z
      .string()
      .max(50)
      .default('')
      .exactOptional()
      .openapi({ description: 'Symplectic user id', example: 'johndoe' }),
  })
  .openapi({ required: ['email', 'first_name'], 'x-tag': 'institutions' })
  .openapi('AccountCreate')

const AccountGroupRolesSchema = z
  .object({})
  .openapi({
    example: { '2': [{ category: 'group', id: 7, name: 'User' }] },
    'x-tag': 'institutions',
  })
  .openapi('AccountGroupRoles')

const AccountGroupRolesCreateSchema = z
  .object({})
  .openapi({ example: { '2': [2, 7], '3': [7, 9] }, 'x-tag': 'institutions' })
  .openapi('AccountGroupRolesCreate')

const AccountReportSchema = z
  .object({
    account_id: z
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
        description: 'The ID of the account which generated this report.',
      }),
    created_date: z
      .string()
      .openapi({
        description: 'Date when the AccountReport was requested',
        example: '2017-05-15T15:12:26Z',
      }),
    download_url: z
      .url()
      .openapi({
        description: 'The download link for the generated XLSX',
        example: 'https://some.com/storage/path/123/report-456.xlsx',
      }),
    group_id: z
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
        description: 'The group ID that was used to filter the report, if any.',
      }),
    id: z
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
        description: 'A unique ID for the AccountRecord',
      }),
    status: z.enum(['missing', 'pending', 'done']).openapi({ description: 'Status of the report' }),
  })
  .openapi({ required: ['id', 'account_id', 'created_date', 'status', 'download_url', 'group_id'] })
  .openapi('AccountReport')

const AccountUpdateSchema = z
  .object({
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    is_active: z.boolean().openapi({ description: 'Is account active' }),
  })
  .openapi({ required: ['group_id', 'is_active'], 'x-tag': 'institutions' })
  .openapi('AccountUpdate')

const TimelineUpdateSchema = z
  .object({
    firstOnline: z
      .string()
      .exactOptional()
      .openapi({ description: 'Online posted date', example: '2015-12-31' }),
    publisherAcceptance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date when the item was accepted for publication',
        example: '2015-12-31',
      }),
    publisherPublication: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publish date', example: '2015-12-31' }),
  })
  .openapi({ 'x-tag': 'timeline_update', required: [] })
  .openapi('TimelineUpdate')

const TimelineSchema = TimelineUpdateSchema.and(
  z
    .object({
      posted: z.string().nullable().openapi({ description: 'Posted date', example: '2015-12-31' }),
      revision: z
        .string()
        .nullable()
        .openapi({
          description: 'Revision date from curation (if curated)',
          example: '2015-12-31',
        }),
      submission: z
        .string()
        .nullable()
        .openapi({
          description: 'Submission date in curation (if curated)',
          example: '2015-12-31',
        }),
    })
    .openapi({
      required: [
        'posted',
        'submission',
        'revision',
        'firstOnline',
        'publisherPublication',
        'publisherAcceptance',
      ],
    }),
)
  .openapi({
    required: [
      'posted',
      'submission',
      'revision',
      'firstOnline',
      'publisherPublication',
      'publisherAcceptance',
    ],
    'x-tag': 'timeline',
  })
  .openapi('Timeline')

const ArticleSchema = z
  .object({
    defined_type: z
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
        description: 'Type of article identifier',
        example: 3,
      }),
    defined_type_name: z
      .string()
      .openapi({ description: 'Name of the article type identifier', example: 'media' }),
    doi: z.string().openapi({ description: 'DOI', example: '10.6084/m9.figshare.1434614' }),
    group_id: z.number().nullable().openapi({ description: 'Group ID', example: 1234 }),
    handle: z.string().openapi({ description: 'Handle', example: '111184/figshare.1234' }),
    id: z
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
        description: 'Unique identifier for article',
        example: 1434614,
      }),
    published_date: z
      .string()
      .nullable()
      .openapi({ description: 'Posted date', example: '2015-12-31T23:59:59.000Z' }),
    thumb: z
      .url()
      .openapi({
        description: 'Thumbnail image',
        example: 'https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png',
      }),
    timeline: TimelineSchema,
    title: z.string().openapi({ description: 'Title of article', example: 'Test article title' }),
    url: z
      .url()
      .openapi({
        description: 'Api endpoint for article',
        example: 'http://api.figshare.com/articles/1434614',
      }),
    url_private_api: z
      .url()
      .openapi({
        description: 'Private Api endpoint for article',
        example: 'https://api.figshare.com/account/articles/1434614',
      }),
    url_private_html: z
      .url()
      .openapi({
        description: 'Private site endpoint for article',
        example: 'https://figshare.com/account/articles/1434614',
      }),
    url_public_api: z
      .url()
      .openapi({
        description: 'Public Api endpoint for article',
        example: 'https://api.figshare.com/articles/1434614',
      }),
    url_public_html: z
      .url()
      .openapi({
        description: 'Public site endpoint for article',
        example: 'https://figshare.com/articles/media/Test_article_title/1434614',
      }),
  })
  .openapi({
    required: [
      'id',
      'title',
      'doi',
      'handle',
      'group_id',
      'url',
      'url_public_html',
      'url_public_api',
      'url_private_html',
      'url_private_api',
      'published_date',
      'timeline',
      'thumb',
      'defined_type',
      'defined_type_name',
    ],
    'x-tag': 'articles',
  })
  .openapi('Article')

const CategorySchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Category id', example: 11 }),
    parent_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Parent category', example: 1 }),
    path: z
      .string()
      .openapi({ description: 'Path to all ancestor ids', example: '/450/1024/6532' }),
    source_id: z
      .string()
      .openapi({ description: 'ID in original standard taxonomy', example: '300204' }),
    taxonomy_id: z
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
        description: 'Internal id of taxonomy the category is part of',
        example: 4,
      }),
    title: z.string().openapi({ description: 'Category title', example: 'Anatomy' }),
  })
  .openapi({
    required: ['parent_id', 'id', 'title', 'path', 'source_id', 'taxonomy_id'],
    'x-tag': 'common',
  })
  .openapi('Category')

const LicenseSchema = z
  .object({
    name: z.string().openapi({ description: 'License name', example: 'CC BY' }),
    url: z
      .url()
      .openapi({
        description: 'License url',
        example: 'http://creativecommons.org/licenses/by/4.0/',
      }),
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'License value', example: 1 }),
  })
  .openapi({ required: ['value', 'name', 'url'], 'x-tag': 'institutions' })
  .openapi('License')

const ProjectArticleSchema = ArticleSchema.and(
  z
    .object({
      categories: z
        .array(CategorySchema)
        .openapi({ description: 'List of categories selected for the article' }),
      citation: z
        .string()
        .openapi({
          description: 'Article citation',
          example:
            'lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)',
        }),
      confidential_reason: z
        .string()
        .openapi({ description: 'Confidentiality reason', example: 'none' }),
      created_date: z
        .string()
        .openapi({ description: 'Date when article was created', example: '2017-05-18T11:49:03Z' }),
      description: z
        .string()
        .openapi({ description: 'Article description', example: 'article description' }),
      embargo_date: z
        .string()
        .nullable()
        .openapi({ description: 'Date when embargo lifts', example: '2017-05-18T11:49:03Z' }),
      embargo_reason: z
        .string()
        .openapi({ description: 'Reason for embargo', example: 'not complete' }),
      embargo_title: z
        .string()
        .openapi({ description: 'Title for embargo', example: 'File(s) under embargo' }),
      embargo_type: z
        .string()
        .nullable()
        .openapi({ description: 'Article embargo', example: 'article' }),
      funding: z.string().openapi({ description: 'Article funding', example: 'none' }),
      funding_list: z.array(z.int()),
      has_linked_file: z
        .boolean()
        .openapi({ description: 'True if any files are linked to the article', example: true }),
      is_active: z.boolean().openapi({ description: 'True if article is active', example: true }),
      is_confidential: z
        .boolean()
        .openapi({ description: 'Article Confidentiality', example: true }),
      is_embargoed: z
        .boolean()
        .openapi({ description: 'True if article is embargoed', example: true }),
      is_metadata_record: z
        .boolean()
        .openapi({ description: 'True if article has no files', example: false }),
      is_public: z
        .boolean()
        .openapi({ description: 'True if article is published', example: true }),
      license: LicenseSchema,
      metadata_reason: z
        .string()
        .openapi({ description: 'Article metadata reason', example: 'hosted somewhere else' }),
      modified_date: z
        .string()
        .nullable()
        .openapi({
          description: 'Date when article was last modified',
          example: '2017-05-18T11:49:03Z',
        }),
      references: z
        .array(z.url())
        .openapi({
          description: 'List of references',
          example: ['http://figshare.com', 'http://figshare.com/api'],
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Article size', example: 69939 }),
      status: z.string().openapi({ description: 'Article status', example: 'public' }),
      tags: z
        .array(z.string())
        .openapi({ description: 'List of article tags', example: ['t1', 't2', 't3'] }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Article version', example: 1 }),
    })
    .openapi({
      required: [
        'citation',
        'confidential_reason',
        'embargo_type',
        'is_confidential',
        'size',
        'funding',
        'funding_list',
        'tags',
        'version',
        'is_active',
        'is_metadata_record',
        'metadata_reason',
        'status',
        'description',
        'is_embargoed',
        'embargo_date',
        'is_public',
        'modified_date',
        'created_date',
        'has_linked_file',
        'categories',
        'license',
        'embargo_title',
        'embargo_reason',
        'references',
        'id',
        'title',
        'doi',
        'handle',
        'group_id',
        'url',
        'url_public_html',
        'url_public_api',
        'url_private_html',
        'url_private_api',
        'published_date',
        'timeline',
        'thumb',
        'defined_type',
        'defined_type_name',
      ],
    }),
)
  .openapi({
    required: [
      'citation',
      'confidential_reason',
      'embargo_type',
      'is_confidential',
      'size',
      'funding',
      'funding_list',
      'tags',
      'version',
      'is_active',
      'is_metadata_record',
      'metadata_reason',
      'status',
      'description',
      'is_embargoed',
      'embargo_date',
      'is_public',
      'modified_date',
      'created_date',
      'has_linked_file',
      'categories',
      'license',
      'embargo_title',
      'embargo_reason',
      'references',
      'id',
      'title',
      'doi',
      'handle',
      'group_id',
      'url',
      'url_public_html',
      'url_public_api',
      'url_private_html',
      'url_private_api',
      'published_date',
      'timeline',
      'thumb',
      'defined_type',
      'defined_type_name',
    ],
    'x-tag': 'articles',
  })
  .openapi('ProjectArticle')

const AuthorSchema = z
  .object({
    full_name: z.string().openapi({ description: 'Author full name', example: 'John Doe' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Author id', example: 97657 }),
    is_active: z
      .boolean()
      .openapi({ description: 'True if author has published items', example: 1 }),
    orcid_id: z.string().openapi({ description: 'Author Orcid', example: '1234-5678-9123-1234' }),
    url_name: z.string().openapi({ description: 'Author url name', example: 'John_Doe' }),
  })
  .openapi({
    required: ['id', 'full_name', 'is_active', 'url_name', 'orcid_id'],
    'x-tag': 'authors',
  })
  .openapi('Author')

const CustomArticleFieldSchema = z
  .object({
    is_mandatory: z
      .boolean()
      .nullable()
      .openapi({ description: 'True if field completion is mandatory', example: false }),
    name: z.string().openapi({ description: 'Custom  metadata name', example: 'key' }),
    value: z.string().openapi({ description: 'Custom metadata value', example: 'value' }),
  })
  .openapi({ required: ['name', 'value', 'is_mandatory'], 'x-tag': 'articles' })
  .openapi('CustomArticleField')

const GroupEmbargoOptionsSchema = z
  .object({
    id: z
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
        description: 'Embargo option id',
        example: 364,
      }),
    ip_name: z
      .string()
      .openapi({
        description: 'IP range name; value appears if type is ip_range',
        example: 'Figshare IP range',
      }),
    type: z
      .enum(['logged_in', 'ip_range', 'administrator'])
      .openapi({ description: 'Embargo permission type', example: 'ip_range' }),
  })
  .openapi({ required: ['id', 'type', 'ip_name'], 'x-tag': 'institutions' })
  .openapi('GroupEmbargoOptions')

const PublicFileSchema = z
  .object({
    computed_md5: z
      .string()
      .openapi({ description: 'File computed md5', example: '043a51806d646e88cafbf19e7b82846f' }),
    download_url: z
      .url()
      .openapi({
        description: 'Url for file download',
        example: 'https://ndownloader.figshare.com/files/3000002',
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'File id', example: 3000002 }),
    is_link_only: z
      .boolean()
      .openapi({ description: 'True if file is hosted somewhere else', example: false }),
    name: z.string().openapi({ description: 'File name', example: 'test.xls' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'File size', example: 14848 }),
    supplied_md5: z
      .string()
      .openapi({ description: 'File supplied md5', example: '043a51806d646e88cafbf19e7b82846f' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'size',
      'is_link_only',
      'download_url',
      'supplied_md5',
      'computed_md5',
    ],
    'x-tag': 'common',
  })
  .openapi('PublicFile')

const ArticleCompleteSchema = ProjectArticleSchema.and(
  z
    .object({
      authors: z.array(AuthorSchema).openapi({ description: 'List of article authors' }),
      custom_fields: z
        .array(CustomArticleFieldSchema)
        .openapi({ description: 'List of custom fields values' }),
      embargo_options: z
        .array(GroupEmbargoOptionsSchema)
        .openapi({ description: 'List of embargo options' }),
      figshare_url: z
        .url()
        .openapi({
          description: 'Article public url',
          example: 'http://figshare.com/articles/media/article_name/2000005',
        }),
      files: z.array(PublicFileSchema).openapi({ description: 'List of article files' }),
      resource_doi: z
        .string()
        .nullable()
        .openapi({
          description: 'Article DOI',
          example: '10.5072/FK2.developmentfigshare.2000005',
        }),
      resource_title: z
        .string()
        .nullable()
        .openapi({ description: 'Article resource title', example: 'first article' }),
    })
    .openapi({
      required: [
        'figshare_url',
        'resource_title',
        'resource_doi',
        'files',
        'authors',
        'custom_fields',
        'embargo_options',
        'citation',
        'confidential_reason',
        'embargo_type',
        'is_confidential',
        'size',
        'funding',
        'funding_list',
        'tags',
        'version',
        'is_active',
        'is_metadata_record',
        'metadata_reason',
        'status',
        'description',
        'is_embargoed',
        'embargo_date',
        'is_public',
        'modified_date',
        'created_date',
        'has_linked_file',
        'categories',
        'license',
        'embargo_title',
        'embargo_reason',
        'references',
        'id',
        'title',
        'doi',
        'handle',
        'group_id',
        'url',
        'url_public_html',
        'url_public_api',
        'url_private_html',
        'url_private_api',
        'published_date',
        'timeline',
        'thumb',
        'defined_type',
        'defined_type_name',
      ],
    }),
)
  .openapi({
    required: [
      'figshare_url',
      'resource_title',
      'resource_doi',
      'files',
      'authors',
      'custom_fields',
      'embargo_options',
      'citation',
      'confidential_reason',
      'embargo_type',
      'is_confidential',
      'size',
      'funding',
      'funding_list',
      'tags',
      'version',
      'is_active',
      'is_metadata_record',
      'metadata_reason',
      'status',
      'description',
      'is_embargoed',
      'embargo_date',
      'is_public',
      'modified_date',
      'created_date',
      'has_linked_file',
      'categories',
      'license',
      'embargo_title',
      'embargo_reason',
      'references',
      'id',
      'title',
      'doi',
      'handle',
      'group_id',
      'url',
      'url_public_html',
      'url_public_api',
      'url_private_html',
      'url_private_api',
      'published_date',
      'timeline',
      'thumb',
      'defined_type',
      'defined_type_name',
    ],
    'x-tag': 'articles',
  })
  .openapi('ArticleComplete')

const ArticleCompletePrivateSchema = ArticleCompleteSchema.and(
  z
    .object({
      account_id: z
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
          description: 'ID of the account owning the article',
          example: 1000001,
        }),
      group_resource_id: z
        .string()
        .nullable()
        .openapi({ description: 'Group resource id', example: null }),
    })
    .openapi({
      required: [
        'group_resource_id',
        'account_id',
        'figshare_url',
        'resource_title',
        'resource_doi',
        'files',
        'authors',
        'custom_fields',
        'embargo_options',
        'citation',
        'confidential_reason',
        'embargo_type',
        'is_confidential',
        'size',
        'funding',
        'funding_list',
        'array[integer](optional)',
        'tags',
        'version',
        'is_active',
        'is_metadata_record',
        'metadata_reason',
        'status',
        'description',
        'is_embargoed',
        'embargo_date',
        'is_public',
        'modified_date',
        'created_date',
        'has_linked_file',
        'categories',
        'license',
        'embargo_title',
        'embargo_reason',
        'references',
        'id',
        'title',
        'doi',
        'handle',
        'group_id',
        'url',
        'url_public_html',
        'url_public_api',
        'url_private_html',
        'url_private_api',
        'published_date',
        'timeline',
        'thumb',
        'defined_type',
        'defined_type_name',
      ],
    }),
)
  .openapi({
    required: [
      'group_resource_id',
      'account_id',
      'figshare_url',
      'resource_title',
      'resource_doi',
      'files',
      'authors',
      'custom_fields',
      'embargo_options',
      'citation',
      'confidential_reason',
      'embargo_type',
      'is_confidential',
      'size',
      'funding',
      'funding_list',
      'array[integer](optional)',
      'tags',
      'version',
      'is_active',
      'is_metadata_record',
      'metadata_reason',
      'status',
      'description',
      'is_embargoed',
      'embargo_date',
      'is_public',
      'modified_date',
      'created_date',
      'has_linked_file',
      'categories',
      'license',
      'embargo_title',
      'embargo_reason',
      'references',
      'id',
      'title',
      'doi',
      'handle',
      'group_id',
      'url',
      'url_public_html',
      'url_public_api',
      'url_private_html',
      'url_private_api',
      'published_date',
      'timeline',
      'thumb',
      'defined_type',
      'defined_type_name',
    ],
    'x-tag': 'articles',
  })
  .openapi('ArticleCompletePrivate')

const ArticleConfidentialitySchema = z
  .object({
    is_confidential: z
      .boolean()
      .openapi({ description: 'True if article is confidential', example: true }),
    reason: z.string().openapi({ description: 'Reason for confidentiality', example: 'need to' }),
  })
  .openapi({ required: ['is_confidential', 'reason'], 'x-tag': 'articles' })
  .openapi('ArticleConfidentiality')

const CustomArticleFieldAddSchema = z
  .object({
    name: z.string().openapi({ description: 'Custom  metadata name', example: 'key' }),
    value: z.any().openapi({ description: 'Custom metadata value', example: 'value' }),
  })
  .openapi({ required: ['name', 'value'], 'x-tag': 'articles' })
  .openapi('CustomArticleFieldAdd')

const FundingCreateSchema = z
  .object({
    id: z
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
        description: 'A funding ID as returned by the Funding Search endpoint',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the new user created funding' }),
  })
  .openapi({ 'x-tag': 'funding', required: [] })
  .openapi('FundingCreate')

const ArticleCreateSchema = z
  .object({
    authors: z
      .array(z.object({}))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ name: 'John Doe' }, { id: 1000008 }],
      }),
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of category ids to be associated with the article(e.g [1, 23, 33, 66])',
        example: [1, 10, 11],
      }),
    categories_by_source_id: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category source ids to be associated with the article, supersedes the categories property',
        example: ['300204', '400207'],
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the article',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    defined_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>',
        example: 'media',
      }),
    description: z
      .string()
      .max(10000)
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The article description. In a publisher case, usually this is the remote article description',
        example: 'Test description of article',
      }),
    doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    funding: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Grant number or funding authority' }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    handle: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    is_metadata_record: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if article has no files', example: true }),
    keywords: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Tags can be used instead',
        example: ['tag1', 'tag2'],
      }),
    license: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'License id for this article.',
        example: 1,
      }),
    metadata_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Article metadata reason', example: 'hosted somewhere else' }),
    references: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])',
        example: ['http://figshare.com', 'http://api.figshare.com'],
      }),
    resource_doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article DOI.',
      }),
    resource_title: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article title.',
      }),
    tags: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Keywords can be used instead',
        example: ['tag1', 'tag2'],
      }),
    timeline: TimelineUpdateSchema.exactOptional(),
    title: z
      .string()
      .min(3)
      .max(1000)
      .openapi({ description: 'Title of article', example: 'Test article title' }),
  })
  .openapi({ required: ['title'], 'x-tag': 'articles' })
  .openapi('ArticleCreate')

const ArticleDOISchema = z
  .object({
    doi: z.string().openapi({ description: 'Reserved DOI', example: '10.5072/FK2.FIGSHARE.20345' }),
  })
  .openapi({ required: ['doi'], 'x-tag': 'articles' })
  .openapi('ArticleDOI')

const ArticleEmbargoSchema = z
  .object({
    embargo_date: z
      .string()
      .nullable()
      .openapi({ description: 'Date when embargo lifts', example: '2018-05-22T04:04:04' }),
    embargo_options: z.array(z.object({})).openapi({
      description:
        'List of embargo permissions that are associated with the article. If the type is logged_in and the group_ids list is empty, then the whole institution can see the article; if there are multiple group_ids, then only users that are under those groups can see the article.',
      example: [
        { group_ids: [], id: 13, ip_name: 'bacau', type: 'ip_range' },
        { group_ids: [550, 9448], id: 12, ip_name: '', type: 'logged_in' },
      ],
    }),
    embargo_reason: z.string().openapi({ description: 'Reason for embargo', example: '' }),
    embargo_title: z
      .string()
      .openapi({ description: 'Title for embargo', example: 'File(s) under embargo' }),
    embargo_type: z.string().nullable().openapi({ description: 'Embargo type', example: '' }),
    is_embargoed: z.boolean().openapi({ description: 'True if embargoed', example: true }),
  })
  .openapi({
    required: [
      'is_embargoed',
      'embargo_date',
      'embargo_type',
      'embargo_title',
      'embargo_reason',
      'embargo_options',
    ],
    'x-tag': 'articles',
  })
  .openapi('ArticleEmbargo')

const ArticleEmbargoUpdaterSchema = z
  .object({
    embargo_date: z
      .string()
      .openapi({
        description:
          "Date when the embargo expires and the article gets published, '0' value will set up permanent embargo",
        example: '2018-05-22T04:04:04',
      }),
    embargo_options: z
      .array(z.object({}))
      .exactOptional()
      .openapi({
        description:
          "List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.",
        example: [{ id: 1321 }, { id: 3345 }, { group_ids: [4332, 5433, 678], id: 54621 }],
      }),
    embargo_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason for setting embargo', example: '' }),
    embargo_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for embargo', example: 'File(s) under embargo' }),
    embargo_type: z
      .enum(['article', 'file'])
      .openapi({
        description:
          'Embargo can be enabled at the article or the file level. Possible values: article, file',
        example: 'file',
      }),
    is_embargoed: z.boolean().openapi({ description: 'Embargo status', example: true }),
  })
  .openapi({ required: ['is_embargoed', 'embargo_type', 'embargo_date'], 'x-tag': 'articles' })
  .openapi('ArticleEmbargoUpdater')

const ArticleHandleSchema = z
  .object({
    handle: z
      .string()
      .openapi({ description: 'Reserved Handle', example: '11172/FK2.FIGSHARE.20345' }),
  })
  .openapi({ required: ['handle'], 'x-tag': 'articles' })
  .openapi('ArticleHandle')

const ArticleProjectCreateSchema = z
  .object({
    authors: z
      .array(z.object({}))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ name: 'John Doe' }, { id: 1000008 }],
      }),
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of category ids to be associated with the article(e.g [1, 23, 33, 66])',
        example: [1, 10, 11],
      }),
    categories_by_source_id: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category source ids to be associated with the article, supersedes the categories property',
        example: ['300204', '400207'],
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the article',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    defined_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>',
        example: 'media',
      }),
    description: z
      .string()
      .max(10000)
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The article description. In a publisher case, usually this is the remote article description',
        example: 'Test description of article',
      }),
    doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    funding: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Grant number or funding authority' }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    handle: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    keywords: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Tags can be used instead',
        example: ['tag1', 'tag2'],
      }),
    license: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'License id for this article.',
        example: 1,
      }),
    references: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])',
        example: ['http://figshare.com', 'http://api.figshare.com'],
      }),
    resource_doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article DOI.',
      }),
    resource_title: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article title.',
      }),
    tags: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Keywords can be used instead',
        example: ['tag1', 'tag2'],
      }),
    timeline: TimelineUpdateSchema.exactOptional(),
    title: z
      .string()
      .min(3)
      .max(1000)
      .openapi({ description: 'Title of article', example: 'Test article title' }),
  })
  .openapi({ required: ['title'], 'x-tag': 'articles' })
  .openapi('ArticleProjectCreate')

const CommonSearchSchema = z
  .object({
    group: z
      .int32()
      .exactOptional()
      .openapi({ description: 'only return collections from this group', example: 2000013 }),
    institution: z
      .int32()
      .exactOptional()
      .openapi({ description: 'only return collections from this institution', example: 2000013 }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        description: 'Number of results included on a page. Used for pagination with query',
        example: 10,
      }),
    modified_since: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
        example: '2017-12-22',
      }),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 5000,
        description:
          'Where to start the listing(the offset of the first result). Used for pagination with limit',
        example: 0,
      }),
    order_direction: z
      .enum(['asc', 'desc'])
      .default('desc')
      .exactOptional()
      .openapi({ description: 'Direction of ordering', example: 'desc' }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 5000,
        description: 'Page number. Used for pagination with page_size',
        example: 1,
      }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(10n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 10,
        description: 'The number of results included on a page. Used for pagination with page',
        example: 10,
      }),
    published_since: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
        example: '2017-12-22',
      }),
    search_for: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search term', example: 'figshare' }),
  })
  .openapi({ 'x-tag': 'common', required: [] })
  .openapi('CommonSearch')

const ArticleSearchSchema = CommonSearchSchema.and(
  z
    .object({
      doi: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return articles with this doi',
          example: '10.6084/m9.figshare.1407024',
        }),
      handle: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return articles with this handle',
          example: '111084/m9.figshare.14074',
        }),
      item_type: z
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
            'Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model',
          example: 1,
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'])
        .exactOptional()
        .openapi({
          description: 'The field by which to order',
          example: 'published_date',
          default: 'created_date',
        }),
      project_id: z
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
          description: 'Only return articles in this project',
          example: 1,
        }),
      resource_doi: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return articles with this resource_doi',
          example: '10.6084/m9.figshare.1407024',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ 'x-tag': 'articles' })
  .openapi('ArticleSearch')

const ArticleUpdateSchema = z
  .object({
    authors: z
      .array(z.object({}))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ name: 'John Doe' }, { id: 1000008 }],
      }),
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of category ids to be associated with the article(e.g [1, 23, 33, 66])',
        example: [1, 10, 11],
      }),
    categories_by_source_id: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category source ids to be associated with the article, supersedes the categories property',
        example: ['300204', '400207'],
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the article',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    defined_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>',
        example: 'media',
      }),
    description: z
      .string()
      .max(10000)
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The article description. In a publisher case, usually this is the remote article description',
        example: 'Test description of article',
      }),
    doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    funding: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Grant number or funding authority' }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    handle: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    is_metadata_record: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if article has no files', example: true }),
    keywords: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Tags can be used instead',
        example: ['tag1', 'tag2'],
      }),
    license: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'License id for this article.',
        example: 1,
      }),
    metadata_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Article metadata reason', example: 'hosted somewhere else' }),
    references: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])',
        example: ['http://figshare.com', 'http://api.figshare.com'],
      }),
    resource_doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article DOI.',
      }),
    resource_title: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article title.',
      }),
    tags: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the article. Keywords can be used instead',
        example: ['tag1', 'tag2'],
      }),
    timeline: TimelineUpdateSchema.exactOptional(),
    title: z
      .string()
      .min(3)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'Title of article', example: 'Test article title' }),
  })
  .openapi({ 'x-tag': 'articles', required: [] })
  .openapi('ArticleUpdate')

const ArticleVersionsSchema = z
  .object({
    url: z
      .url()
      .openapi({
        description: 'Api endpoint for the item version',
        example: 'https://api.figshare.com/v2/articles/2000005/versions/1',
      }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Version number', example: 1 }),
  })
  .openapi({ required: ['version', 'url'], 'x-tag': 'articles' })
  .openapi('ArticleVersions')

const ArticleWithProjectSchema = ArticleSchema.and(
  z
    .object({
      project_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .default(0n)
        .openapi({
          type: 'integer',
          format: 'int64',
          default: 0,
          description: 'Project id for this article.',
          example: 1,
        }),
    })
    .openapi({
      required: [
        'project_id',
        'id',
        'title',
        'doi',
        'handle',
        'group_id',
        'url',
        'url_public_html',
        'url_public_api',
        'url_private_html',
        'url_private_api',
        'published_date',
        'timeline',
        'thumb',
        'defined_type',
        'defined_type_name',
      ],
    }),
)
  .openapi({
    required: [
      'project_id',
      'id',
      'title',
      'doi',
      'handle',
      'group_id',
      'url',
      'url_public_html',
      'url_public_api',
      'url_private_html',
      'url_private_api',
      'published_date',
      'timeline',
      'thumb',
      'defined_type',
      'defined_type_name',
    ],
    'x-tag': 'articles_with_project',
  })
  .openapi('ArticleWithProject')

const ArticlesCreatorSchema = z
  .object({
    articles: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64', description: 'Id of article' }),
      )
      .openapi({ description: 'List of article ids', example: [2000003, 2000004] }),
  })
  .openapi({ required: ['articles'], 'x-tag': 'articles' })
  .openapi('ArticlesCreator')

const AuthorCompleteSchema = AuthorSchema.and(
  z
    .object({
      first_name: z.string().openapi({ description: 'First Name' }),
      group_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Group id' }),
      institution_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Institution id' }),
      is_public: z
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
          description: 'if 1 then the author has published items',
        }),
      job_title: z.string().openapi({ description: 'Job title' }),
      last_name: z.string().openapi({ description: 'Last Name' }),
    })
    .openapi({
      required: [
        'institution_id',
        'group_id',
        'first_name',
        'last_name',
        'is_public',
        'job_title',
        'id',
        'full_name',
        'url_name',
        'orcid_id',
        'is_active',
      ],
    }),
)
  .openapi({
    required: [
      'institution_id',
      'group_id',
      'first_name',
      'last_name',
      'is_public',
      'job_title',
      'id',
      'full_name',
      'url_name',
      'orcid_id',
      'is_active',
    ],
    'x-tag': 'authors',
  })
  .openapi('AuthorComplete')

const AuthorsCreatorSchema = z
  .object({
    authors: z
      .array(z.object({}))
      .openapi({
        description:
          'List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ id: 12121 }, { id: 34345 }, { name: 'John Doe' }],
      }),
  })
  .openapi({ required: ['authors'], 'x-tag': 'articles' })
  .openapi('AuthorsCreator')

const CategoriesCreatorSchema = z
  .object({
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64', description: 'Id of category' }),
      )
      .openapi({ description: 'List of category ids', example: [1, 10, 11] }),
  })
  .openapi({ required: ['categories'], 'x-tag': 'articles' })
  .openapi('CategoriesCreator')

const CollaboratorSchema = z
  .object({
    name: z.string().openapi({ description: 'Collaborator name', example: 'name' }),
    role_name: z.string().openapi({ description: 'Collaborator role', example: 'Owner' }),
    user_id: z.int().openapi({ description: 'Collaborator id', example: 1 }),
  })
  .openapi({ required: ['role_name', 'user_id', 'name'], 'x-tag': 'projects' })
  .openapi('Collaborator')

const CollectionSchema = z
  .object({
    doi: z.string().openapi({ description: 'Collection DOI', example: '10.6084/m9.figshare.123' }),
    handle: z
      .string()
      .openapi({ description: 'Collection Handle', example: '111184/figshare.1234' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Collection id', example: 123 }),
    published_date: z
      .string()
      .nullable()
      .openapi({
        description: 'Date when collection was published ',
        example: '2015-08-12T00:39:55',
      }),
    timeline: TimelineSchema,
    title: z.string().openapi({ description: 'Collection title', example: 'Sample collection' }),
    url: z
      .string()
      .openapi({
        description: 'Api endpoint',
        example: 'https://api.figshare.com/v2/collections/123',
      }),
  })
  .openapi({
    required: ['id', 'title', 'doi', 'handle', 'url', 'timeline', 'published_date'],
    'x-tag': 'collections',
  })
  .openapi('Collection')

const FundingInformationSchema = z
  .object({
    funder_name: z.string().openapi({ description: "Funder's name" }),
    grant_code: z.string().openapi({ description: 'The grant code' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Funding id', example: 1 }),
    is_user_defined: z
      .boolean()
      .openapi({ description: 'Return whether the grant has been introduced manually' }),
    title: z.string().openapi({ description: 'The funding name', example: 'Scholarly funding' }),
    url: z
      .url()
      .openapi({
        description: 'The grant url',
        example: 'https://app.dimensions.ai/details/grant/1',
      }),
  })
  .openapi({
    required: ['id', 'title', 'grant_code', 'funder_name', 'is_user_defined', 'url'],
    'x-tag': 'funding',
  })
  .openapi('FundingInformation')

const CollectionCompleteSchema = CollectionSchema.and(
  z
    .object({
      articles_count: z
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
          description: 'Number of articles in collection',
          example: 1,
        }),
      authors: z.array(AuthorSchema).openapi({ description: 'List of collection authors' }),
      categories: z.array(CategorySchema).openapi({ description: 'List of collection categories' }),
      citation: z.string().openapi({ description: 'Collection citation', example: 'citation' }),
      created_date: z
        .string()
        .openapi({
          description: 'Date when collection was created',
          example: '2017-05-15T15:12:26Z',
        }),
      custom_fields: z
        .array(CustomArticleFieldSchema)
        .openapi({ description: 'Collection custom fields' }),
      description: z
        .string()
        .openapi({ description: 'Collection description', example: 'description' }),
      funding: z
        .array(FundingInformationSchema)
        .openapi({ description: 'Full Collection funding information' }),
      group_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Collection group', example: 1 }),
      group_resource_id: z
        .string()
        .nullable()
        .openapi({ description: 'Collection group resource id', example: 1 }),
      institution_id: z
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
          description: 'Collection institution',
          example: 1,
        }),
      modified_date: z
        .string()
        .openapi({
          description: 'Date when collection was last modified',
          example: '2017-05-15T15:12:26Z',
        }),
      public: z
        .boolean()
        .openapi({ description: 'True if collection is published', example: true }),
      references: z.array(z.url()).openapi({ description: 'List of collection references' }),
      resource_doi: z
        .string()
        .openapi({ description: 'Collection resource doi', example: '10.6084/m9.figshare.123' }),
      resource_id: z.string().openapi({ description: 'Collection resource id', example: '' }),
      resource_link: z
        .string()
        .openapi({ description: 'Collection resource link', example: 'http://figshare.com' }),
      resource_title: z
        .string()
        .openapi({ description: 'Collection resource title', example: 'test' }),
      resource_version: z
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
          description: 'Collection resource version',
          example: 0,
        }),
      tags: z
        .array(z.string())
        .openapi({ description: 'List of collection tags', example: ['t1', 't2'] }),
      timeline: TimelineSchema,
      version: z
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
          description: 'Collection version',
          example: 1,
        }),
    })
    .openapi({
      required: [
        'funding',
        'resource_id',
        'resource_doi',
        'resource_title',
        'resource_link',
        'resource_version',
        'version',
        'description',
        'categories',
        'references',
        'tags',
        'authors',
        'institution_id',
        'group_id',
        'articles_count',
        'public',
        'citation',
        'group_resource_id',
        'custom_fields',
        'modified_date',
        'created_date',
        'timeline',
        'id',
        'title',
        'doi',
        'handle',
        'url',
        'published_date',
      ],
    }),
)
  .openapi({
    required: [
      'funding',
      'resource_id',
      'resource_doi',
      'resource_title',
      'resource_link',
      'resource_version',
      'version',
      'description',
      'categories',
      'references',
      'tags',
      'authors',
      'institution_id',
      'group_id',
      'articles_count',
      'public',
      'citation',
      'group_resource_id',
      'custom_fields',
      'modified_date',
      'created_date',
      'timeline',
      'id',
      'title',
      'doi',
      'handle',
      'url',
      'published_date',
    ],
    'x-tag': 'collections',
  })
  .openapi('CollectionComplete')

const CollectionCompletePrivateSchema = CollectionSchema.and(
  z
    .object({
      account_id: z
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
          description: 'ID of the account owning the collection',
          example: 1000001,
        }),
      articles_count: z
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
          description: 'Number of articles in collection',
          example: 1,
        }),
      authors: z.array(AuthorSchema).openapi({ description: 'List of collection authors' }),
      categories: z.array(CategorySchema).openapi({ description: 'List of collection categories' }),
      citation: z.string().openapi({ description: 'Collection citation', example: 'citation' }),
      created_date: z
        .string()
        .openapi({
          description: 'Date when collection was created',
          example: '2017-05-15T15:12:26Z',
        }),
      custom_fields: z
        .array(CustomArticleFieldSchema)
        .openapi({ description: 'Collection custom fields' }),
      description: z
        .string()
        .openapi({ description: 'Collection description', example: 'description' }),
      funding: z
        .array(FundingInformationSchema)
        .openapi({ description: 'Full Collection funding information' }),
      group_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Collection group', example: 1 }),
      group_resource_id: z
        .string()
        .nullable()
        .openapi({ description: 'Collection group resource id', example: 1 }),
      institution_id: z
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
          description: 'Collection institution',
          example: 1,
        }),
      modified_date: z
        .string()
        .openapi({
          description: 'Date when collection was last modified',
          example: '2017-05-15T15:12:26Z',
        }),
      public: z
        .boolean()
        .openapi({ description: 'True if collection is published', example: true }),
      references: z.array(z.url()).openapi({ description: 'List of collection references' }),
      resource_doi: z
        .string()
        .openapi({ description: 'Collection resource doi', example: '10.6084/m9.figshare.123' }),
      resource_id: z.string().openapi({ description: 'Collection resource id', example: '' }),
      resource_link: z
        .string()
        .openapi({ description: 'Collection resource link', example: 'http://figshare.com' }),
      resource_title: z
        .string()
        .openapi({ description: 'Collection resource title', example: 'test' }),
      resource_version: z
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
          description: 'Collection resource version',
          example: 0,
        }),
      tags: z
        .array(z.string())
        .openapi({ description: 'List of collection tags', example: ['t1', 't2'] }),
      timeline: TimelineSchema,
      version: z
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
          description: 'Collection version',
          example: 1,
        }),
    })
    .openapi({
      required: [
        'account_id',
        'funding',
        'resource_id',
        'resource_doi',
        'resource_title',
        'resource_link',
        'resource_version',
        'version',
        'description',
        'categories',
        'references',
        'tags',
        'authors',
        'institution_id',
        'group_id',
        'articles_count',
        'public',
        'citation',
        'group_resource_id',
        'custom_fields',
        'modified_date',
        'created_date',
        'timeline',
        'id',
        'title',
        'doi',
        'handle',
        'url',
        'published_date',
      ],
    }),
)
  .openapi({
    required: [
      'account_id',
      'funding',
      'resource_id',
      'resource_doi',
      'resource_title',
      'resource_link',
      'resource_version',
      'version',
      'description',
      'categories',
      'references',
      'tags',
      'authors',
      'institution_id',
      'group_id',
      'articles_count',
      'public',
      'citation',
      'group_resource_id',
      'custom_fields',
      'modified_date',
      'created_date',
      'timeline',
      'id',
      'title',
      'doi',
      'handle',
      'url',
      'published_date',
    ],
    'x-tag': 'collections',
  })
  .openapi('CollectionCompletePrivate')

const CollectionCreateSchema = z
  .object({
    articles: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description: 'List of articles to be associated with the collection',
        example: [2000001, 2000005],
      }),
    authors: z
      .array(z.object({}))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ name: 'John Doe' }, { id: 20005 }],
      }),
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category ids to be associated with the collection(e.g [1, 23, 33, 66])',
        example: [1, 10, 11],
      }),
    categories_by_source_id: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category source ids to be associated with the collection, supersedes the categories property',
        example: ['300204', '400207'],
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the collection',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    description: z
      .string()
      .max(10000)
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The collection description. In a publisher case, usually this is the remote collection description',
        example: 'Test description of article',
      }),
    doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    funding: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Grant number or funding authority' }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    handle: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    keywords: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the collection. Tags can be used instead',
        example: ['tag1', 'tag2'],
      }),
    references: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])',
        example: ['http://figshare.com', 'http://api.figshare.com'],
      }),
    resource_doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article DOI.',
      }),
    resource_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article id',
      }),
    resource_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article link',
      }),
    resource_title: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article title.',
      }),
    resource_version: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article version',
      }),
    tags: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of tags to be associated with the collection. Keywords can be used instead',
        example: ['tag1', 'tag2'],
      }),
    timeline: TimelineUpdateSchema.exactOptional(),
    title: z
      .string()
      .min(3)
      .max(1000)
      .openapi({ description: 'Title of collection', example: 'Test collection title' }),
  })
  .openapi({ required: ['title'], 'x-tag': 'collections' })
  .openapi('CollectionCreate')

const CollectionDOISchema = z
  .object({
    doi: z.string().openapi({ description: 'Reserved DOI', example: '10.5072/FK2.FIGSHARE.20345' }),
  })
  .openapi({ required: ['doi'], 'x-tag': 'collections' })
  .openapi('CollectionDOI')

const CollectionHandleSchema = z
  .object({
    handle: z
      .string()
      .openapi({ description: 'Reserved Handle', example: '11172/FK2.FIGSHARE.20345' }),
  })
  .openapi({ required: ['handle'], 'x-tag': 'collections' })
  .openapi('CollectionHandle')

const CollectionPrivateLinkCreatorSchema = z
  .object({
    expires_date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date when this private link should expire - optional. By default private links expire in 365 days.',
        example: '2018-02-22 22:22:22',
      }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional, default true. Set to false to give private link users editing rights for this collection.',
        example: true,
      }),
  })
  .openapi({ 'x-tag': 'collections', required: [] })
  .openapi('CollectionPrivateLinkCreator')

const CollectionSearchSchema = CommonSearchSchema.and(
  z
    .object({
      doi: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return collections with this doi',
          example: '10.6084/m9.figshare.1407024',
        }),
      handle: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return collections with this handle',
          example: '10084/figshare.1407024',
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'cites'])
        .exactOptional()
        .openapi({
          description: 'The field by which to order.',
          example: 'published_date',
          default: 'created_date',
        }),
      resource_doi: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Only return collections with this resource_doi',
          example: '10.6084/m9.figshare.1407024',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ 'x-tag': 'collections' })
  .openapi('CollectionSearch')

const CollectionUpdateSchema = z
  .object({
    articles: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description: 'List of articles to be associated with the collection',
        example: [2000001, 2000005],
      }),
    authors: z
      .array(z.object({}))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.',
        example: [{ name: 'John Doe' }, { id: 20005 }],
      }),
    categories: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category ids to be associated with the collection (e.g [1, 23, 33, 66])',
        example: [1, 10, 11],
      }),
    categories_by_source_id: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of category source ids to be associated with the article, supersedes the categories property',
        example: ['300204', '400207'],
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the collection',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    description: z
      .string()
      .max(10000)
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The collection description. In a publisher case, usually this is the remote collection description',
        example: 'Test description of collection',
      }),
    doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    funding: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Grant number or funding authority' }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    group_id: z
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
          'Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups',
      }),
    handle: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.',
      }),
    keywords: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description: 'List of tags to be associated with the collection. Tags can be used instead',
        example: ['tag1', 'tag2'],
      }),
    references: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])',
        example: ['http://figshare.com', 'http://api.figshare.com'],
      }),
    resource_doi: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article DOI.',
      }),
    resource_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article id',
      }),
    resource_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article link',
      }),
    resource_title: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article title.',
      }),
    resource_version: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Not applicable to regular users. In a publisher case, this is the publisher article version',
      }),
    tags: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of tags to be associated with the collection. Keywords can be used instead',
        example: ['tag1', 'tag2'],
      }),
    timeline: TimelineUpdateSchema.exactOptional(),
    title: z
      .string()
      .min(3)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'Title of collection', example: 'Test collection title' }),
  })
  .openapi({ 'x-tag': 'collections', required: [] })
  .openapi('CollectionUpdate')

const CollectionVersionsSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Version number', example: 1 }),
    url: z
      .url()
      .openapi({
        description: 'Api endpoint for the collection version',
        example: 'https://api.figshare.com/v2/collections/2000005/versions/1',
      }),
  })
  .openapi({ required: ['id', 'url'], 'x-tag': 'collections' })
  .openapi('CollectionVersions')

const ConfidentialityCreatorSchema = z
  .object({ reason: z.string().openapi({ description: 'Reason for confidentiality' }) })
  .openapi({ required: ['reason'] })
  .openapi('ConfidentialityCreator')

const CreateProjectResponseSchema = z
  .object({
    entity_id: z
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
        description: 'Figshare ID of the entity',
        example: 33334444,
      }),
    location: z.url().openapi({ description: 'Url for entity' }),
  })
  .openapi({ required: ['entity_id', 'location'], 'x-tag': 'common' })
  .openapi('CreateProjectResponse')

const CurationSchema = z
  .object({
    account_id: z
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
        description: 'The ID of the account of the owner of the article of this review.',
      }),
    article_id: z
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
        description: 'The ID of the article of this review.',
      }),
    assigned_to: z
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
        description: 'The ID of the account to which this review is assigned.',
      }),
    comments_count: z
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
        description: 'The number of comments in the review.',
      }),
    created_date: z.string().openapi({ description: 'The creation date of the review.' }),
    group_id: z
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
        description: 'The group in which the article is present.',
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The review id' }),
    modified_date: z.string().openapi({ description: 'The date the review has been modified.' }),
    review_date: z
      .string()
      .nullable()
      .openapi({ description: 'The last time a comment has been added to the review.' }),
    status: z
      .enum(['pending', 'approved', 'rejected', 'closed'])
      .openapi({ description: 'The status of the review.' }),
    version: z
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
        description: 'The Version number of the article in review.',
      }),
  })
  .openapi({
    required: [
      'id',
      'group_id',
      'account_id',
      'assigned_to',
      'article_id',
      'version',
      'comments_count',
      'status',
      'created_date',
      'modified_date',
      'review_date',
    ],
    'x-tag': 'institutions',
  })
  .openapi('Curation')

const CurationCommentSchema = z
  .object({
    account_id: z
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
        description: 'The ID of the account which generated this comment.',
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The ID of the comment.' }),
    text: z.string().openapi({ description: 'The value/content of the comment.' }),
    type: z
      .enum(['comment', 'approved', 'rejected', 'closed'])
      .openapi({ description: 'The ID of the account which generated this comment.' }),
  })
  .openapi({ required: ['id', 'account_id', 'type', 'text'], 'x-tag': 'institutions' })
  .openapi('CurationComment')

const CurationCommentCreateSchema = z
  .object({
    text: z.string().min(1).max(2000).openapi({ description: 'The contents/value of the comment' }),
  })
  .openapi({ required: ['text'], 'x-tag': 'institutions' })
  .openapi('CurationCommentCreate')

const CurationDetailSchema = CurationSchema.and(
  z
    .object({ item: ArticleCompleteSchema })
    .openapi({
      required: [
        'item',
        'id',
        'group_id',
        'account_id',
        'assigned_to',
        'article_id',
        'version',
        'comments_count',
        'status',
        'created_date',
        'modified_date',
        'review_date',
      ],
    }),
)
  .openapi({
    required: [
      'item',
      'id',
      'group_id',
      'account_id',
      'assigned_to',
      'article_id',
      'version',
      'comments_count',
      'status',
      'created_date',
      'modified_date',
      'review_date',
    ],
    'x-tag': 'institutions',
  })
  .openapi('CurationDetail')

const ErrorMessageSchema = z
  .object({
    code: z
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
        description: 'A machine friendly error code, used by the dev team to identify the error.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human friendly message explaining the error.' }),
  })
  .openapi({ 'x-tag': 'common', required: [] })
  .openapi('ErrorMessage')

const FileCreatorSchema = z
  .object({
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Url for an existing file that will not be uploaded to Figshare',
        example: 'http://figshare.com/file.txt',
      }),
    md5: z
      .string()
      .exactOptional()
      .openapi({
        description: 'MD5 sum pre-computed on client side.',
        example: '6c16e6e7d7587bd078e5117dda01d565',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'File name including the extension; can be omitted only for linked files.',
        example: 'test.py',
      }),
    size: z
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
        description: 'File size in bytes; can be omitted only for linked files.',
        example: 70,
      }),
  })
  .openapi({ 'x-tag': 'articles', required: [] })
  .openapi('FileCreator')

const FileIdSchema = z
  .object({
    file_id: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'File ID', example: 123 }),
  })
  .openapi({ 'x-tag': 'articles', required: [] })
  .openapi('FileId')

const FundingSearchSchema = z
  .object({ search_for: z.string().exactOptional().openapi({ description: 'Search term' }) })
  .openapi({ 'x-tag': 'funding', required: [] })
  .openapi('FundingSearch')

const GroupSchema = z
  .object({
    association_criteria: z
      .string()
      .openapi({ description: 'HR code associated with group, if code exists', example: 'IT' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Group id', example: 1 }),
    name: z.string().openapi({ description: 'Group name', example: 'Materials' }),
    parent_id: z
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
        description: 'Parent group if any',
        example: 0,
      }),
    resource_id: z.string().openapi({ description: 'Group resource id', example: '' }),
  })
  .openapi({
    required: ['id', 'name', 'resource_id', 'parent_id', 'association_criteria'],
    'x-tag': 'institutions',
  })
  .openapi('Group')

const InstitutionSchema = z
  .object({
    domain: z.string().nullable().openapi({ description: 'Institution domain', example: null }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Institution id', example: 0 }),
    name: z.string().openapi({ description: 'Institution name', example: 'Institution' }),
  })
  .openapi({ required: ['id', 'name', 'domain'], 'x-tag': 'institutions' })
  .openapi('Institution')

const InstitutionAccountsSearchSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'filter by email', example: 'alan@institution.com' }),
    institution_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'filter by institution_user_id', example: 'alan' }),
    is_active: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 1,
        description: 'Filter by active status',
      }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        description: 'Number of results included on a page. Used for pagination with query',
        example: 10,
      }),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 5000,
        description:
          'Where to start the listing(the offset of the first result). Used for pagination with limit',
        example: 0,
      }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 5000,
        description: 'Page number. Used for pagination with page_size',
        example: 1,
      }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(10n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 10,
        description: 'The number of results included on a page. Used for pagination with page',
        example: 10,
      }),
    search_for: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search term', example: 'figshare' }),
  })
  .openapi({ 'x-tag': 'institutions', required: [] })
  .openapi('InstitutionAccountsSearch')

const ItemTypeSchema = z
  .object({
    icon: z
      .string()
      .openapi({
        description: 'The string identifying the icon of the item type.',
        example: 'paper',
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description: 'The ID of the item type.',
      }),
    is_selectable: z.boolean().openapi({ description: 'The selectable status', example: true }),
    name: z
      .string()
      .openapi({ description: 'The name of the item type', example: 'journal contribution' }),
    public_description: z
      .string()
      .openapi({
        description: 'The description of the item type.',
        example: 'This is the description of an item type',
      }),
    string_id: z
      .string()
      .openapi({
        description: 'The string identifier of the item type.',
        example: 'journal_contribution',
      }),
    url_name: z
      .string()
      .openapi({ description: 'The URL name of the item type.', example: 'journal_contribution' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'string_id',
      'icon',
      'public_description',
      'is_selectable',
      'url_name',
    ],
  })
  .openapi('ItemType')

const LocationSchema = z
  .object({ location: z.url().openapi({ description: 'Url for item' }) })
  .openapi({ required: ['location'], 'x-tag': 'common' })
  .openapi('Location')

const LocationWarningsSchema = z
  .object({
    entity_id: z
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
        description: 'Figshare ID of the entity',
        example: 33334444,
      }),
    location: z.url().openapi({ description: 'Url for entity' }),
    warnings: z
      .array(z.string())
      .openapi({ description: 'Issues encountered during the operation' }),
  })
  .openapi({ required: ['entity_id', 'location', 'warnings'], 'x-tag': 'common' })
  .openapi('LocationWarnings')

const LocationWarningsUpdateSchema = z
  .object({
    location: z.url().openapi({ description: 'Url for entity' }),
    warnings: z
      .array(z.string())
      .openapi({ description: 'Issues encountered during the operation' }),
  })
  .openapi({ required: ['location', 'warnings'], 'x-tag': 'common' })
  .openapi('LocationWarningsUpdate')

const PrivateArticleSearchSchema = ArticleSearchSchema.and(
  z
    .object({
      resource_id: z
        .string()
        .exactOptional()
        .openapi({
          description: 'only return collections with this resource_id',
          example: '1407024',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ 'x-tag': 'articles' })
  .openapi('PrivateArticleSearch')

const PrivateAuthorsSearchSchema = z
  .object({
    group_id: z
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
        description: 'Return only authors in this group or subgroups of the group',
      }),
    institution_id: z
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
        description: 'Return only authors associated to this institution',
        example: 1,
      }),
    is_active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Return only active authors if True' }),
    is_public: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Return only authors that have published items if True' }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        description: 'Number of results included on a page. Used for pagination with query',
        example: 10,
      }),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 5000,
        description:
          'Where to start the listing(the offset of the first result). Used for pagination with limit',
        example: 0,
      }),
    orcid: z.string().exactOptional().openapi({ description: 'Orcid of author' }),
    order: z
      .enum(['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'])
      .default('published_date')
      .exactOptional()
      .openapi({
        description: 'The field by which to order. Default varies by endpoint/resource.',
        example: 'published_date',
      }),
    order_direction: z
      .enum(['asc', 'desc'])
      .default('desc')
      .exactOptional()
      .openapi({ description: 'Direction of ordering', example: 'desc' }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(5000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 5000,
        description: 'Page number. Used for pagination with page_size',
        example: 1,
      }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(10n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 10,
        description: 'The number of results included on a page. Used for pagination with page',
        example: 10,
      }),
    search_for: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search term', example: 'figshare' }),
  })
  .openapi({ 'x-tag': 'authors', required: [] })
  .openapi('PrivateAuthorsSearch')

const PrivateCollectionSearchSchema = CollectionSearchSchema.and(
  z
    .object({
      resource_id: z
        .string()
        .exactOptional()
        .openapi({
          description: 'only return collections with this resource_id',
          example: '1407024',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ 'x-tag': 'collections' })
  .openapi('PrivateCollectionSearch')

const PrivateFileSchema = PublicFileSchema.and(
  z
    .object({
      is_attached_to_public_version: z
        .boolean()
        .openapi({
          description: 'True if the file is attached to a public item version',
          example: true,
        }),
      preview_state: z
        .string()
        .openapi({ description: 'File preview state', example: 'preview not available' }),
      status: z
        .string()
        .nullable()
        .openapi({ description: 'Status for file upload', example: 'created' }),
      upload_token: z
        .string()
        .openapi({
          description: 'Token for file upload',
          example: '9dfc5fe3-d617-4d93-ac11-8afe7e984a4b',
        }),
      upload_url: z
        .url()
        .openapi({ description: 'Upload url for file', example: 'https://uploads.figshare.com' }),
      viewer_type: z.string().openapi({ description: 'File viewer type' }),
    })
    .openapi({
      required: [
        'status',
        'viewer_type',
        'preview_state',
        'upload_url',
        'upload_token',
        'is_attached_to_public_version',
        'id',
        'name',
        'size',
        'is_link_only',
        'download_url',
        'supplied_md5',
        'computed_md5',
      ],
    }),
)
  .openapi({
    required: [
      'status',
      'viewer_type',
      'preview_state',
      'upload_url',
      'upload_token',
      'is_attached_to_public_version',
      'id',
      'name',
      'size',
      'is_link_only',
      'download_url',
      'supplied_md5',
      'computed_md5',
    ],
    'x-tag': 'common',
  })
  .openapi('PrivateFile')

const PrivateLinkSchema = z
  .object({
    expires_date: z
      .string()
      .openapi({ description: 'Date when link will expire', example: '2015-07-03T00:00:00' }),
    html_location: z
      .url()
      .openapi({
        description: 'HTML url for private link',
        example: 'https://figshare.com/s/d5ec7a85bcd6dbe9d9b2',
      }),
    id: z
      .string()
      .openapi({
        description: 'Private link id',
        example:
          '0cfb0dbeac92df445df4aba45f63fdc85fa0b9a888b64e157ce3c93b576aa300fb3621ef3a219515dd482',
      }),
    is_active: z
      .boolean()
      .openapi({ description: 'True if private link is active', example: true }),
  })
  .openapi({ required: ['id', 'is_active', 'expires_date', 'html_location'], 'x-tag': 'articles' })
  .openapi('PrivateLink')

const PrivateLinkCreatorSchema = z
  .object({
    expires_date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date when this private link should expire - optional. By default private links expire in 365 days.',
        example: '2018-02-22 22:22:22',
      }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional, default true. Set to false to give private link users editing rights for this collection.',
        example: true,
      }),
  })
  .openapi({ 'x-tag': 'articles', required: [] })
  .openapi('PrivateLinkCreator')

const PrivateLinkResponseSchema = z
  .object({
    html_location: z
      .url()
      .openapi({
        description: 'HTML url for private link',
        example: 'https://figshare.com/s/d5ec7a85bcd6dbe9d9b2',
      }),
    location: z.url().openapi({ description: 'Url for private link' }),
    token: z
      .string()
      .openapi({ description: 'Token for private link', example: 'd5ec7a85bcd6dbe9d9b2' }),
  })
  .openapi({ required: ['location', 'token', 'html_location'], 'x-tag': 'common' })
  .openapi('PrivateLinkResponse')

const ProjectSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Project id', example: 1 }),
    published_date: z
      .string()
      .nullable()
      .openapi({ description: 'Date when project was published', example: '2017-05-16T14:55:08Z' }),
    title: z.string().openapi({ description: 'Project title', example: 'project' }),
    url: z
      .string()
      .openapi({
        description: 'Api endpoint',
        example: 'http://api.figshare.com/v2/account/projects/1',
      }),
  })
  .openapi({ required: ['url', 'published_date', 'id', 'title'], 'x-tag': 'projects' })
  .openapi('Project')

const ProjectCollaboratorSchema = z
  .object({
    name: z.string().openapi({ description: 'Collaborator name', example: 'name' }),
    role_name: z.string().openapi({ description: 'Collaborator role', example: 'Owner' }),
    status: z
      .string()
      .openapi({ description: 'Status of collaborator invitation', example: 'invited' }),
    user_id: z.int().openapi({ description: 'Collaborator id', example: 1 }),
  })
  .openapi({ required: ['status', 'role_name', 'user_id', 'name'], 'x-tag': 'projects' })
  .openapi('ProjectCollaborator')

const ProjectCollaboratorInviteSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text sent when inviting the user to the project', example: 'hey' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Collaborator email', example: 'user@domain.com' }),
    role_name: z
      .enum(['viewer', 'collaborator'])
      .openapi({
        description: 'Role of the the collaborator inside the project',
        example: 'viewer',
      }),
    user_id: z
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
        description: 'User id of the collaborator',
        example: 100008,
      }),
  })
  .openapi({ required: ['role_name'], 'x-tag': 'projects' })
  .openapi('ProjectCollaboratorInvite')

const ProjectCompleteSchema = ProjectSchema.and(
  z
    .object({
      collaborators: z
        .array(CollaboratorSchema)
        .openapi({ description: 'List of project collaborators' }),
      description: z
        .string()
        .openapi({ description: 'Project description', example: 'description' }),
      figshare_url: z
        .string()
        .nullable()
        .openapi({
          description: 'Project public url',
          example: 'https://figshare.com/projects/project/1',
        }),
      funding: z.string().openapi({ description: 'Project funding', example: '' }),
      funding_list: z
        .array(FundingInformationSchema)
        .openapi({ description: 'Full Project funding information' }),
    })
    .openapi({
      required: [
        'funding',
        'funding_list',
        'description',
        'figshare_url',
        'collaborators',
        'url',
        'published_date',
        'id',
        'title',
      ],
    }),
)
  .openapi({
    required: [
      'funding',
      'funding_list',
      'description',
      'figshare_url',
      'collaborators',
      'url',
      'published_date',
      'id',
      'title',
    ],
    'x-tag': 'projects',
  })
  .openapi('ProjectComplete')

const ProjectPrivateSchema = ProjectSchema.and(
  z
    .object({
      role: z
        .enum(['Owner', 'Collaborator', 'Viewer'])
        .openapi({ description: 'Role inside this project', example: 'Owner' }),
      storage: z
        .enum(['individual', 'group'])
        .openapi({ description: 'Project storage type', example: 'individual' }),
    })
    .openapi({ required: ['role', 'storage', 'url', 'published_date', 'id', 'title'] }),
)
  .openapi({
    required: ['role', 'storage', 'url', 'published_date', 'id', 'title'],
    'x-tag': 'projects',
  })
  .openapi('ProjectPrivate')

const ProjectCompletePrivateSchema = ProjectPrivateSchema.and(
  z
    .object({
      account_id: z
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
          description: 'ID of the account owning the project',
          example: 1000001,
        }),
      collaborators: z
        .array(CollaboratorSchema)
        .openapi({ description: 'List of project collaborators' }),
      created_date: z
        .string()
        .openapi({ description: 'Date when project was created', example: '2017-05-16T14:52:54Z' }),
      custom_fields: z
        .array(CustomArticleFieldSchema)
        .openapi({ description: 'Collection custom fields' }),
      description: z
        .string()
        .openapi({ description: 'Project description', example: 'description' }),
      figshare_url: z
        .string()
        .nullable()
        .openapi({
          description: 'Project public url',
          example: 'https://figshare.com/projects/project/1',
        }),
      funding: z.string().openapi({ description: 'Project funding', example: 'none' }),
      funding_list: z
        .array(FundingInformationSchema)
        .openapi({ description: 'Full Project funding information' }),
      group_id: z
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
          description: 'Group of project if any',
          example: 0,
        }),
      modified_date: z
        .string()
        .openapi({
          description: 'Date when project was last modified',
          example: '2017-05-16T14:52:54Z',
        }),
      quota: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Project quota', example: 0 }),
      used_quota: z
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
          description: 'Project used quota',
          example: 0,
        }),
      used_quota_private: z
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
          description: 'Project private quota used',
          example: 0,
        }),
      used_quota_public: z
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
          description: 'Project public quota used',
          example: 0,
        }),
    })
    .openapi({
      required: [
        'funding',
        'funding_list',
        'description',
        'figshare_url',
        'collaborators',
        'quota',
        'used_quota',
        'created_date',
        'modified_date',
        'used_quota_private',
        'used_quota_public',
        'group_id',
        'account_id',
        'custom_fields',
        'role',
        'storage',
        'url',
        'published_date',
        'id',
        'title',
      ],
    }),
)
  .openapi({
    required: [
      'funding',
      'funding_list',
      'description',
      'figshare_url',
      'collaborators',
      'quota',
      'used_quota',
      'created_date',
      'modified_date',
      'used_quota_private',
      'used_quota_public',
      'group_id',
      'account_id',
      'custom_fields',
      'role',
      'storage',
      'url',
      'published_date',
      'id',
      'title',
    ],
    'x-tag': 'projects',
  })
  .openapi('ProjectCompletePrivate')

const ProjectCreateSchema = z
  .object({
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the project',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    description: z
      .string()
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Project description', example: 'project description' }),
    funding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Grant number or organization(s) that funded this project. Up to 2000 characters permitted.',
        example: '',
      }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    group_id: z
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
        description: 'Only if project type is group.',
        example: 0,
      }),
    title: z
      .string()
      .min(3)
      .max(1000)
      .openapi({
        description: 'The title for this project - mandatory. 3 - 1000 characters.',
        example: 'project title',
      }),
  })
  .openapi({ required: ['title'], 'x-tag': 'projects' })
  .openapi('ProjectCreate')

const ProjectNoteSchema = z
  .object({
    abstract: z
      .string()
      .openapi({ description: 'Note Abstract - short/truncated content', example: 'text' }),
    created_date: z
      .string()
      .openapi({ description: 'Date when note was created', example: '2017-05-16T16:49:11Z' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Project note id', example: 1 }),
    modified_date: z
      .string()
      .openapi({
        description: 'Date when note was last modified',
        example: '2017-05-16T16:49:11Z',
      }),
    user_id: z
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
        description: 'User who wrote the note',
        example: 100008,
      }),
    user_name: z
      .string()
      .openapi({ description: 'Username of the one who wrote the note', example: 'user' }),
  })
  .openapi({
    required: ['id', 'user_id', 'abstract', 'user_name', 'created_date', 'modified_date'],
    'x-tag': 'projects',
  })
  .openapi('ProjectNote')

const ProjectNoteCreateSchema = z
  .object({
    text: z
      .string()
      .min(3)
      .openapi({ description: 'Text of the note', example: 'note to remember' }),
  })
  .openapi({ required: ['text'], 'x-tag': 'projects' })
  .openapi('ProjectNoteCreate')

const ProjectNotePrivateSchema = ProjectNoteSchema.and(
  z
    .object({ text: z.string().openapi({ description: 'Full text of note', example: 'text' }) })
    .openapi({
      required: ['text', 'id', 'user_id', 'abstract', 'user_name', 'created_date', 'modified_date'],
    }),
)
  .openapi({
    required: ['text', 'id', 'user_id', 'abstract', 'user_name', 'created_date', 'modified_date'],
    'x-tag': 'projects',
  })
  .openapi('ProjectNotePrivate')

const ProjectUpdateSchema = z
  .object({
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'List of key, values pairs to be associated with the project',
        example: { defined_key: 'value for it' },
      }),
    custom_fields_list: z
      .array(CustomArticleFieldAddSchema)
      .exactOptional()
      .openapi({ description: 'List of custom fields values, supersedes custom_fields parameter' }),
    description: z
      .string()
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Project description', example: 'project description' }),
    funding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Grant number or organization(s) that funded this project. Up to 2000 characters permitted.',
        example: '',
      }),
    funding_list: z
      .array(FundingCreateSchema)
      .exactOptional()
      .openapi({ description: 'Funding creation / update items' }),
    title: z
      .string()
      .min(3)
      .max(1000)
      .exactOptional()
      .openapi({
        description: 'The title for this project - mandatory. 3 - 1000 characters.',
        example: 'project title',
      }),
  })
  .openapi({ 'x-tag': 'projects', required: [] })
  .openapi('ProjectUpdate')

const ProjectsSearchSchema = CommonSearchSchema.and(
  z
    .object({
      order: z
        .enum(['published_date', 'modified_date', 'views'])
        .default('published_date')
        .exactOptional()
        .openapi({ description: 'The field by which to order.', example: 'published_date' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ 'x-tag': 'projects' })
  .openapi('ProjectsSearch')

const ResourceSchema = z
  .object({
    doi: z.string().default('').exactOptional().openapi({ description: 'DOI of resource item' }),
    id: z
      .string()
      .max(255)
      .default('')
      .exactOptional()
      .openapi({ description: 'ID of resource item', example: 'aaaa23512' }),
    link: z
      .string()
      .max(255)
      .default('')
      .exactOptional()
      .openapi({ description: 'Link of resource item', example: 'https://docs.figshare.com' }),
    status: z
      .string()
      .max(100)
      .default('')
      .exactOptional()
      .openapi({ description: 'Status of resource item', example: 'frozen' }),
    title: z
      .string()
      .max(1000)
      .default('')
      .exactOptional()
      .openapi({ description: 'Title of resource item', example: 'Test title' }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'Version of resource item',
        example: 1,
      }),
  })
  .openapi({ 'x-tag': 'resource', required: [] })
  .openapi('Resource')

const ResponseMessageSchema = z
  .object({
    message: z
      .string()
      .openapi({ description: 'Response message text', example: 'Project 1 has been published' }),
  })
  .openapi({ required: ['message'], 'x-tag': 'common' })
  .openapi('ResponseMessage')

const RoleSchema = z
  .object({
    category: z.string().openapi({ description: 'Role category', example: 'group' }),
    description: z.string().openapi({ description: 'Role description' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Role id', example: 1 }),
    name: z.string().openapi({ description: 'Role name', example: 'Curator' }),
  })
  .openapi({ required: ['id', 'name', 'category', 'description'], 'x-tag': 'institutions' })
  .openapi('Role')

const ShortAccountSchema = z
  .object({
    active: z
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
        description: 'Account activity status',
        example: 0,
      }),
    email: z.string().openapi({ description: 'User email', example: 'user@domain.com' }),
    first_name: z.string().openapi({ description: 'First Name', example: 'Doe' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Account id', example: 1495682 }),
    institution_id: z
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
        description: 'Account institution',
        example: 1,
      }),
    institution_user_id: z
      .string()
      .openapi({ description: 'Account institution user id', example: 1 }),
    last_name: z.string().openapi({ description: 'Last Name', example: 'John' }),
    orcid_id: z
      .string()
      .openapi({ description: 'ORCID iD associated to account', example: '0000-0001-2345-6789' }),
    quota: z
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
        description: 'Total storage available to account, in bytes',
        example: 1074000000,
      }),
    used_quota: z
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
        description: 'Storage used by the account, in bytes',
        example: 1074000000,
      }),
    user_id: z
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
          'User id associated with account, useful for example for adding the account as an author to an item',
        example: 1000001,
      }),
  })
  .openapi({
    required: [
      'id',
      'first_name',
      'last_name',
      'institution_id',
      'email',
      'active',
      'institution_user_id',
      'quota',
      'used_quota',
      'user_id',
      'orcid_id',
    ],
    'x-tag': 'other',
  })
  .openapi('ShortAccount')

const ShortCustomFieldSchema = z
  .object({
    field_type: z
      .enum(['text', 'textarea', 'dropdown', 'url', 'email', 'date', 'dropdown_large_list'])
      .openapi({ description: 'Custom field type', example: 'textarea' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Custom field id', example: 365 }),
    name: z.string().openapi({ description: 'Custom field name', example: 'my custom field' }),
  })
  .openapi({ required: ['id', 'name', 'field_type'], 'x-tag': 'institutions' })
  .openapi('ShortCustomField')

const UploadFilePartSchema = z
  .object({
    endOffset: z
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
        description: 'Indexes on byte range. zero-based and inclusive',
        example: 69,
      }),
    locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When a part is being uploaded it is being locked, by setting the locked flag to true. No changes/uploads can happen on this part from other requests.',
      }),
    partNo: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'File part id', example: 1 }),
    startOffset: z
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
        description: 'Indexes on byte range. zero-based and inclusive',
        example: 0,
      }),
    status: z.enum(['PENDING', 'COMPLETE']).exactOptional().openapi({ description: 'part status' }),
  })
  .openapi({ 'x-tag': 'upload', required: [] })
  .openapi('UploadFilePart')

const UploadInfoSchema = z
  .object({
    md5: z
      .string()
      .exactOptional()
      .openapi({
        description: 'md5 provided on upload initialization',
        example: '3a7f451c068f4e13260034c611378140',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of file on upload server', example: '3000017/test.py' }),
    parts: z.array(UploadFilePartSchema).exactOptional().openapi({ description: 'Uploads parts' }),
    size: z
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
        description: 'size of file in bytes',
        example: 70,
      }),
    status: z
      .enum(['PENDING', 'COMPLETED', 'ABORTED'])
      .exactOptional()
      .openapi({ description: 'Upload status' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'token received after initializing a file upload',
        example: '693a2802-cd61-430d-b89f-507f0f6d8fd3',
      }),
  })
  .openapi({ 'x-tag': 'upload', required: [] })
  .openapi('UploadInfo')

const UserSchema = z
  .object({
    first_name: z.string().openapi({ description: 'First Name', example: 'Doe' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'User id', example: 1495682 }),
    is_active: z.boolean().openapi({ description: 'Account activity status', example: true }),
    is_public: z.boolean().openapi({ description: 'Account public status', example: true }),
    job_title: z.string().openapi({ description: 'User Job title', example: 'programmer' }),
    last_name: z.string().openapi({ description: 'Last Name', example: 'John' }),
    name: z.string().openapi({ description: 'Full Name', example: 'John Doe' }),
    orcid_id: z
      .string()
      .openapi({ description: 'Orcid associated to this User', example: '1234-5678-9123-1234' }),
    url_name: z
      .string()
      .openapi({ description: 'Name that appears in website url', example: 'John_Doe' }),
  })
  .openapi({
    required: [
      'id',
      'first_name',
      'last_name',
      'name',
      'is_active',
      'url_name',
      'is_public',
      'job_title',
      'orcid_id',
    ],
    'x-tag': 'other',
  })
  .openapi('User')

const ArticleUpdateRequestBody = {
  description: 'Article description',
  content: { 'application/json': { schema: ArticleUpdateSchema } },
  required: true,
}

const AuthorsCreatorRequestBody = {
  description: 'Authors description',
  content: { 'application/json': { schema: AuthorsCreatorSchema } },
  required: true,
}

const AuthorsCreator2RequestBody = {
  description: 'List of authors',
  content: { 'application/json': { schema: AuthorsCreatorSchema } },
  required: true,
}

const CategoriesCreatorRequestBody = {
  content: { 'application/json': { schema: CategoriesCreatorSchema } },
  required: true,
}

const CategoriesCreator2RequestBody = {
  description: 'Categories list',
  content: { 'application/json': { schema: CategoriesCreatorSchema } },
  required: true,
}

const CollectionPrivateLinkCreatorRequestBody = {
  content: { 'application/json': { schema: CollectionPrivateLinkCreatorSchema } },
}

const PrivateLinkCreatorRequestBody = {
  content: { 'application/json': { schema: PrivateLinkCreatorSchema } },
}

const ProjectNoteCreateRequestBody = {
  description: 'Note message',
  content: { 'application/json': { schema: ProjectNoteCreateSchema } },
  required: true,
}

const ProjectsSearchRequestBody = {
  description: 'Search Parameters',
  content: { 'application/json': { schema: ProjectsSearchSchema } },
}

const ResourceRequestBody = {
  description: 'Resource data',
  content: { 'application/json': { schema: ResourceSchema } },
  required: true,
}

const OAuth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://figshare.com/account/applications/authorize',
      scopes: { all: 'Grants all access' },
      tokenUrl: 'https://api.figshare.com/v2/token',
    },
  },
  type: 'oauth2',
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['other'],
  summary: 'Private Account information',
  description: 'Account information for token/personal token',
  operationId: 'private_account',
  responses: {
    200: {
      description: 'OK. Account representation',
      content: { 'application/json': { schema: AccountSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesRoute = createRoute({
  method: 'get',
  path: '/account/articles',
  tags: ['articles'],
  summary: 'Private Articles',
  description: 'Get Own Articles',
  operationId: 'private_articles_list',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of articles belonging to the account',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesRoute = createRoute({
  method: 'post',
  path: '/account/articles',
  tags: ['articles'],
  summary: 'Create new Article',
  description: 'Create a new Article by sending article information',
  operationId: 'private_article_create',
  request: {
    body: {
      description: 'Article description',
      content: { 'application/json': { schema: ArticleCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationWarningsSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesExportRoute = createRoute({
  method: 'get',
  path: '/account/articles/export',
  tags: ['articles'],
  summary: 'Account Article Report',
  description: 'Return status on all reports generated for the account from the oauth credentials',
  operationId: 'account_article_report',
  request: {
    query: z.object({
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'A group ID to filter by',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of account report entries',
      content: { 'application/json': { schema: z.array(AccountReportSchema) } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesExportRoute = createRoute({
  method: 'post',
  path: '/account/articles/export',
  tags: ['articles'],
  summary: 'Initiate a new Report',
  description:
    'Initiate a new Article Report for this Account. There is a limit of 1 report per day.',
  operationId: 'account_article_report_generate',
  responses: {
    200: {
      description: 'OK. AccountReport created.',
      content: { 'application/json': { schema: AccountReportSchema } },
    },
    429: { description: 'Too Many Requests' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesSearchRoute = createRoute({
  method: 'post',
  path: '/account/articles/search',
  tags: ['articles'],
  summary: 'Private Articles search',
  description: 'Returns a list of private articles filtered by the search parameters',
  operationId: 'private_articles_search',
  request: {
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: PrivateArticleSearchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. An array of articles',
      content: { 'application/json': { schema: z.array(ArticleWithProjectSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}',
  tags: ['articles'],
  summary: 'Article details',
  description: 'View a private article',
  operationId: 'private_article_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article representation',
      content: { 'application/json': { schema: ArticleCompletePrivateSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}',
  tags: ['articles'],
  summary: 'Update article',
  description:
    'Updating an article by passing body parameters; request can also be made with the PATCH method.',
  operationId: 'private_article_update',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ArticleUpdateRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationWarningsUpdateSchema } },
      headers: z.object({
        Location: {
          description: 'Location of newly created article',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly created article',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}',
  tags: ['articles'],
  summary: 'Delete article',
  description: 'Delete an article',
  operationId: 'private_article_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdAuthorsRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/authors',
  tags: ['articles'],
  summary: 'List article authors',
  description: 'List article authors',
  operationId: 'private_article_authors_list',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Authors list for article',
      content: { 'application/json': { schema: z.array(AuthorSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdAuthorsRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/authors',
  tags: ['articles'],
  summary: 'Replace article authors',
  description:
    'Associate new authors with the article. This will remove all already associated authors and add these new ones',
  operationId: 'private_article_authors_replace',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: AuthorsCreatorRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of list of authors',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of authors', param: { required: false } }),
        },
      }),
    },
    400: {
      description:
        'Bad Request. Article ID must be an integer and bigger than 0. Author with ID Not Found.',
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdAuthorsRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/authors',
  tags: ['articles'],
  summary: 'Add article authors',
  description:
    'Associate new authors with the article. This will add new authors to the list of already associated authors',
  operationId: 'private_article_authors_add',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: AuthorsCreatorRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of list of authors',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of authors', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdAuthorsAuthorIdRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/authors/{author_id}',
  tags: ['articles'],
  summary: 'Delete article author',
  description: 'De-associate author from article',
  operationId: 'private_article_author_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      author_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Author unique identifier',
            in: 'path',
            name: 'author_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/categories',
  tags: ['articles'],
  summary: 'List article categories',
  description: 'List article categories',
  operationId: 'private_article_categories_list',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article categories',
      content: { 'application/json': { schema: z.array(CategorySchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdCategoriesRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/categories',
  tags: ['articles'],
  summary: 'Replace article categories',
  description:
    'Associate new categories with the article. This will remove all already associated categories and add these new ones',
  operationId: 'private_article_categories_replace',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: CategoriesCreatorRequestBody,
  },
  responses: {
    205: { description: 'Reset Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdCategoriesRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/categories',
  tags: ['articles'],
  summary: 'Add article categories',
  description:
    'Associate new categories with the article. This will add new categories to the list of already associated categories',
  operationId: 'private_article_categories_add',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: CategoriesCreatorRequestBody,
  },
  responses: {
    205: { description: 'Reset Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdCategoriesCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/categories/{category_id}',
  tags: ['articles'],
  summary: 'Delete article category',
  description: 'De-associate category from article',
  operationId: 'private_article_category_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      category_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Category unique identifier',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdConfidentialityRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/confidentiality',
  tags: ['articles'],
  summary: 'Article confidentiality details',
  description:
    'View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.',
  operationId: 'private_article_confidentiality_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article categories',
      content: { 'application/json': { schema: ArticleConfidentialitySchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdConfidentialityRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/confidentiality',
  tags: ['articles'],
  summary: 'Update article confidentiality',
  description:
    'Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.',
  operationId: 'private_article_confidentiality_update',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfidentialityCreatorSchema } },
      required: true,
    },
  },
  responses: {
    205: { description: 'Reset Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdConfidentialityRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/confidentiality',
  tags: ['articles'],
  summary: 'Delete article confidentiality',
  description:
    'Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.',
  operationId: 'private_article_confidentiality_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdEmbargoRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/embargo',
  tags: ['articles'],
  summary: 'Article Embargo Details',
  description: 'View a private article embargo details',
  operationId: 'private_article_embargo_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Embargo for article',
      content: { 'application/json': { schema: ArticleEmbargoSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdEmbargoRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/embargo',
  tags: ['articles'],
  summary: 'Update Article Embargo',
  description:
    'Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.',
  operationId: 'private_article_embargo_update',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Embargo description',
      content: { 'application/json': { schema: ArticleEmbargoUpdaterSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of embargo',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of embargo', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdEmbargoRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/embargo',
  tags: ['articles'],
  summary: 'Delete Article Embargo',
  description: 'Will lift the embargo for the specified article',
  operationId: 'private_article_embargo_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdFilesRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/files',
  tags: ['articles'],
  summary: 'List article files',
  description: 'List private files',
  operationId: 'private_article_files_list',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article files list',
      content: { 'application/json': { schema: z.array(PrivateFileSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdFilesRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/files',
  tags: ['articles'],
  summary: 'Initiate Upload',
  description:
    'Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).',
  operationId: 'private_article_upload_initiate',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FileCreatorSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of new file',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of new file', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity. Parameters missing or incorrect' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/files/{file_id}',
  tags: ['articles'],
  summary: 'Single File',
  description: 'View details of file for specified article',
  operationId: 'private_article_file',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'File unique identifier',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article private file',
      content: { 'application/json': { schema: PrivateFileSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdFilesFileIdRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/files/{file_id}',
  tags: ['articles'],
  summary: 'Complete Upload',
  description: 'Complete file upload',
  operationId: 'private_article_upload_complete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'File unique identifier',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdFilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/files/{file_id}',
  tags: ['articles'],
  summary: 'File Delete',
  description: 'Complete file upload',
  operationId: 'private_article_file_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'File unique identifier',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountArticlesArticleIdPrivateLinksRoute = createRoute({
  method: 'get',
  path: '/account/articles/{article_id}/private_links',
  tags: ['articles'],
  summary: 'List private links',
  description: 'List private links',
  operationId: 'private_article_private_link',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article private links',
      content: { 'application/json': { schema: z.array(PrivateLinkSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdPrivateLinksRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/private_links',
  tags: ['articles'],
  summary: 'Create private link',
  description: 'Create new private link for this article',
  operationId: 'private_article_private_link_create',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: PrivateLinkCreatorRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: PrivateLinkResponseSchema } },
      headers: z.object({
        Location: {
          description: 'Location of private link',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of private link', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdPrivateLinksLinkIdRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/private_links/{link_id}',
  tags: ['articles'],
  summary: 'Update private link',
  description: 'Update existing private link for this article',
  operationId: 'private_article_private_link_update',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      link_id: z
        .string()
        .openapi({
          param: {
            description: 'Private link token',
            in: 'path',
            name: 'link_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrivateLinkCreatorRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of private link',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of private link', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountArticlesArticleIdPrivateLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/account/articles/{article_id}/private_links/{link_id}',
  tags: ['articles'],
  summary: 'Disable private link',
  description: 'Disable/delete private link for this article',
  operationId: 'private_article_private_link_delete',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      link_id: z
        .string()
        .openapi({
          param: {
            description: 'Private link token',
            in: 'path',
            name: 'link_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdPublishRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/publish',
  tags: ['articles'],
  summary: 'Private Article Publish',
  description:
    '- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.\n- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.',
  operationId: 'private_article_publish',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of newly published article',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly published article',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdReserveDoiRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/reserve_doi',
  tags: ['articles'],
  summary: 'Private Article Reserve DOI',
  description: 'Reserve DOI for article',
  operationId: 'private_article_reserve_doi',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArticleDOISchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdReserveHandleRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/reserve_handle',
  tags: ['articles'],
  summary: 'Private Article Reserve Handle',
  description: 'Reserve Handle for article',
  operationId: 'private_article_reserve_handle',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArticleHandleSchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountArticlesArticleIdResourceRoute = createRoute({
  method: 'post',
  path: '/account/articles/{article_id}/resource',
  tags: ['articles'],
  summary: 'Private Article Resource',
  description: 'Edit article resource data.',
  operationId: 'private_article_resource',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ResourceRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location for account article details',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location for account article details',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdVersionsVersionIdIndexRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/versions/{version_id}/',
  tags: ['articles'],
  summary: 'Update article version',
  description:
    'Updating an article version by passing body parameters; request can also be made with the PATCH method.',
  operationId: 'article_version_update',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      version_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article version identifier',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ArticleUpdateRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationWarningsUpdateSchema } },
      headers: z.object({
        Location: {
          description: 'Location of newly created article',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly created article',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRoute = createRoute({
  method: 'put',
  path: '/account/articles/{article_id}/versions/{version_id}/update_thumb',
  tags: ['articles'],
  summary: 'Update article version thumbnail',
  description:
    'For a given public article version update the article thumbnail by choosing one of the associated files',
  operationId: 'article_version_update_thumb',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      version_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article version identifier',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'File ID',
      content: { 'application/json': { schema: FileIdSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location for article version details',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location for article version details',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountAuthorsSearchRoute = createRoute({
  method: 'post',
  path: '/account/authors/search',
  tags: ['authors'],
  summary: 'Search Authors',
  description: 'Search for authors',
  operationId: 'private_authors_search',
  request: {
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: PrivateAuthorsSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK. An array of authors',
      content: { 'application/json': { schema: z.array(AuthorSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountAuthorsAuthorIdRoute = createRoute({
  method: 'get',
  path: '/account/authors/{author_id}',
  tags: ['authors'],
  summary: 'Author details',
  description: 'View author details',
  operationId: 'private_author_details',
  request: {
    params: z.object({
      author_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Author unique identifier',
            in: 'path',
            name: 'author_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article representation',
      content: { 'application/json': { schema: AuthorCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCategoriesRoute = createRoute({
  method: 'get',
  path: '/account/categories',
  tags: ['institutions'],
  summary: 'Private Account Categories',
  description: 'List institution categories (including parent Categories)',
  operationId: 'private_categories_list',
  responses: {
    200: {
      description: 'OK. An array of categories',
      content: { 'application/json': { schema: z.array(CategorySchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsRoute = createRoute({
  method: 'get',
  path: '/account/collections',
  tags: ['collections'],
  summary: 'Private Collections List',
  description: 'List private collections',
  operationId: 'private_collections_list',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'cites'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order. Default varies by endpoint/resource.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views', 'shares', 'cites'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of collections',
      content: { 'application/json': { schema: z.array(CollectionSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsRoute = createRoute({
  method: 'post',
  path: '/account/collections',
  tags: ['collections'],
  summary: 'Create collection',
  description: 'Create a new Collection by sending collection information',
  operationId: 'private_collection_create',
  request: {
    body: {
      description: 'Collection description',
      content: { 'application/json': { schema: CollectionCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationWarningsSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsSearchRoute = createRoute({
  method: 'post',
  path: '/account/collections/search',
  tags: ['collections'],
  summary: 'Private Collections Search',
  description: 'Returns a list of private Collections',
  operationId: 'private_collections_search',
  request: {
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: PrivateCollectionSearchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. An array of collections',
      content: { 'application/json': { schema: z.array(CollectionSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/account/collections/{collection_id}',
  tags: ['collections'],
  summary: 'Collection details',
  description: 'View a collection',
  operationId: 'private_collection_details',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Collection representation',
      content: { 'application/json': { schema: CollectionCompletePrivateSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountCollectionsCollectionIdRoute = createRoute({
  method: 'put',
  path: '/account/collections/{collection_id}',
  tags: ['collections'],
  summary: 'Update collection',
  description: 'Update collection details; request can also be made with the PATCH method.',
  operationId: 'private_collection_update',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Collection description',
      content: { 'application/json': { schema: CollectionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationWarningsUpdateSchema } },
      headers: z.object({
        Location: {
          description: 'Location of collection',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of collection', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountCollectionsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/account/collections/{collection_id}',
  tags: ['collections'],
  summary: 'Delete collection',
  description: 'Delete n collection',
  operationId: 'private_collection_delete',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsCollectionIdArticlesRoute = createRoute({
  method: 'get',
  path: '/account/collections/{collection_id}/articles',
  tags: ['collections'],
  summary: 'List collection articles',
  description: 'List collection articles',
  operationId: 'private_collection_articles_list',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Articles List',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountCollectionsCollectionIdArticlesRoute = createRoute({
  method: 'put',
  path: '/account/collections/{collection_id}/articles',
  tags: ['collections'],
  summary: 'Replace collection articles',
  description:
    'Associate new articles with the collection. This will remove all already associated articles and add these new ones',
  operationId: 'private_collection_articles_replace',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Articles List',
      content: { 'application/json': { schema: ArticlesCreatorSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of list of articles',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of articles', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdArticlesRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/articles',
  tags: ['collections'],
  summary: 'Add collection articles',
  description:
    'Associate new articles with the collection. This will add new articles to the list of already associated articles',
  operationId: 'private_collection_articles_add',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Articles list',
      content: { 'application/json': { schema: ArticlesCreatorSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of new articles',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of new articles', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountCollectionsCollectionIdArticlesArticleIdRoute = createRoute({
  method: 'delete',
  path: '/account/collections/{collection_id}/articles/{article_id}',
  tags: ['collections'],
  summary: 'Delete collection article',
  description: 'De-associate article from collection',
  operationId: 'private_collection_article_delete',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsCollectionIdAuthorsRoute = createRoute({
  method: 'get',
  path: '/account/collections/{collection_id}/authors',
  tags: ['collections'],
  summary: 'List collection authors',
  description: 'List collection authors',
  operationId: 'private_collection_authors_list',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Embargo for article',
      content: { 'application/json': { schema: z.array(AuthorSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountCollectionsCollectionIdAuthorsRoute = createRoute({
  method: 'put',
  path: '/account/collections/{collection_id}/authors',
  tags: ['collections'],
  summary: 'Replace collection authors',
  description:
    'Associate new authors with the collection. This will remove all already associated authors and add these new ones',
  operationId: 'private_collection_authors_replace',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: AuthorsCreator2RequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of list of authors',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of authors', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdAuthorsRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/authors',
  tags: ['collections'],
  summary: 'Add collection authors',
  description:
    'Associate new authors with the collection. This will add new authors to the list of already associated authors',
  operationId: 'private_collection_authors_add',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: AuthorsCreator2RequestBody,
  },
  responses: {
    201: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of list of authors',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of authors', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountCollectionsCollectionIdAuthorsAuthorIdRoute = createRoute({
  method: 'delete',
  path: '/account/collections/{collection_id}/authors/{author_id}',
  tags: ['collections'],
  summary: 'Delete collection author',
  description: 'Delete collection author',
  operationId: 'private_collection_author_delete',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      author_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Author unique identifier',
            in: 'path',
            name: 'author_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsCollectionIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/account/collections/{collection_id}/categories',
  tags: ['collections'],
  summary: 'List collection categories',
  description: 'List collection categories',
  operationId: 'private_collection_categories_list',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Categories list',
      content: { 'application/json': { schema: z.array(CategorySchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountCollectionsCollectionIdCategoriesRoute = createRoute({
  method: 'put',
  path: '/account/collections/{collection_id}/categories',
  tags: ['collections'],
  summary: 'Replace collection categories',
  description:
    'Associate new categories with the collection. This will remove all already associated categories and add these new ones',
  operationId: 'private_collection_categories_replace',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: CategoriesCreator2RequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of list of categories',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of categories', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdCategoriesRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/categories',
  tags: ['collections'],
  summary: 'Add collection categories',
  description:
    'Associate new categories with the collection. This will add new categories to the list of already associated categories',
  operationId: 'private_collection_categories_add',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: CategoriesCreator2RequestBody,
  },
  responses: {
    201: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of list of categories',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of list of categories', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountCollectionsCollectionIdCategoriesCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/account/collections/{collection_id}/categories/{category_id}',
  tags: ['collections'],
  summary: 'Delete collection category',
  description: 'De-associate category from collection',
  operationId: 'private_collection_category_delete',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      category_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection category unique identifier',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountCollectionsCollectionIdPrivateLinksRoute = createRoute({
  method: 'get',
  path: '/account/collections/{collection_id}/private_links',
  tags: ['collections'],
  summary: 'List collection private links',
  description: 'List article private links',
  operationId: 'private_collection_private_links_list',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Collection private links',
      content: { 'application/json': { schema: z.array(PrivateLinkSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdPrivateLinksRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/private_links',
  tags: ['collections'],
  summary: 'Create collection private link',
  description: 'Create new private link',
  operationId: 'private_collection_private_link_create',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: CollectionPrivateLinkCreatorRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: PrivateLinkResponseSchema } },
      headers: z.object({
        Location: {
          description: 'Location of private link',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of private link', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountCollectionsCollectionIdPrivateLinksLinkIdRoute = createRoute({
  method: 'put',
  path: '/account/collections/{collection_id}/private_links/{link_id}',
  tags: ['collections'],
  summary: 'Update collection private link',
  description: 'Update existing private link for this collection',
  operationId: 'private_collection_private_link_update',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      link_id: z
        .string()
        .openapi({
          param: {
            description: 'Private link token',
            in: 'path',
            name: 'link_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: CollectionPrivateLinkCreatorRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of new private link',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of new private link', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/account/collections/{collection_id}/private_links/{link_id}',
  tags: ['collections'],
  summary: 'Disable private link',
  description: 'Disable/delete private link for this collection',
  operationId: 'private_collection_private_link_delete',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      link_id: z
        .string()
        .openapi({
          param: {
            description: 'Private link token',
            in: 'path',
            name: 'link_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdPublishRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/publish',
  tags: ['collections'],
  summary: 'Private Collection Publish',
  description:
    'When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.',
  operationId: 'private_collection_publish',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location of collection',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of collection', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdReserveDoiRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/reserve_doi',
  tags: ['collections'],
  summary: 'Private Collection Reserve DOI',
  description: 'Reserve DOI for collection',
  operationId: 'private_collection_reserve_doi',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CollectionDOISchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdReserveHandleRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/reserve_handle',
  tags: ['collections'],
  summary: 'Private Collection Reserve Handle',
  description: 'Reserve Handle for collection',
  operationId: 'private_collection_reserve_handle',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CollectionHandleSchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountCollectionsCollectionIdResourceRoute = createRoute({
  method: 'post',
  path: '/account/collections/{collection_id}/resource',
  tags: ['collections'],
  summary: 'Private Collection Resource',
  description: 'Edit collection resource data.',
  operationId: 'private_collection_resource',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ResourceRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location for account collection details',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location for account collection details',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountFundingSearchRoute = createRoute({
  method: 'post',
  path: '/account/funding/search',
  tags: ['other'],
  summary: 'Search Funding',
  description: 'Search for fundings',
  operationId: 'private_funding_search',
  request: {
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: FundingSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK. An array of funding information',
      content: { 'application/json': { schema: z.array(FundingInformationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionRoute = createRoute({
  method: 'get',
  path: '/account/institution',
  tags: ['institutions'],
  summary: 'Private Account Institutions',
  description: 'Account institution details',
  operationId: 'private_institution_details',
  responses: {
    200: {
      description: 'OK. An array of institutions',
      content: { 'application/json': { schema: InstitutionSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionAccountsRoute = createRoute({
  method: 'get',
  path: '/account/institution/accounts',
  tags: ['institutions'],
  summary: 'Private Account Institution Accounts',
  description:
    'Returns the accounts for which the account has administrative privileges (assigned and inherited).',
  operationId: 'private_institution_accounts_list',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      is_active: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(1n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by active status',
            in: 'query',
            name: 'is_active',
            required: false,
            schema: { format: 'int64', maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
      institution_user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by institution_user_id',
            in: 'query',
            name: 'institution_user_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by email',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_lte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve accounts with an ID lower or equal to the specified value',
            in: 'query',
            name: 'id_lte',
            required: false,
            schema: { format: 'int64', minimum: 0, type: 'integer' },
          },
        }),
      id_gte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve accounts with an ID greater or equal to the specified value',
            in: 'query',
            name: 'id_gte',
            required: false,
            schema: { format: 'int64', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of Accounts',
      content: { 'application/json': { schema: z.array(ShortAccountSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountInstitutionAccountsRoute = createRoute({
  method: 'post',
  path: '/account/institution/accounts',
  tags: ['institutions'],
  summary: 'Create new Institution Account',
  description: 'Create a new Account by sending account information',
  operationId: 'private_institution_accounts_create',
  request: {
    body: {
      description: 'Account description',
      content: { 'application/json': { schema: AccountCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountInstitutionAccountsSearchRoute = createRoute({
  method: 'post',
  path: '/account/institution/accounts/search',
  tags: ['institutions'],
  summary: 'Private Account Institution Accounts Search',
  description:
    'Returns the accounts for which the account has administrative privileges (assigned and inherited).',
  operationId: 'private_institution_accounts_search',
  request: {
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: InstitutionAccountsSearchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. An array of Accounts',
      content: { 'application/json': { schema: z.array(ShortAccountSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountInstitutionAccountsAccountIdRoute = createRoute({
  method: 'put',
  path: '/account/institution/accounts/{account_id}',
  tags: ['institutions'],
  summary: 'Update Institution Account',
  description: 'Update Institution Account',
  operationId: 'private_institution_accounts_update',
  request: {
    params: z.object({
      account_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Account identifier the user is associated to',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Account description',
      content: { 'application/json': { schema: AccountUpdateSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of newly created article',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly created article',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionArticlesRoute = createRoute({
  method: 'get',
  path: '/account/institution/articles',
  tags: ['institutions'],
  summary: 'Private Institution Articles',
  description: 'Get Articles from own institution. User must be administrator of the institution',
  operationId: 'private_institution_articles',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order. Default varies by endpoint/resource.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      published_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'published_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'modified_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections with this status',
            in: 'query',
            name: 'status',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      resource_doi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections with this resource_doi',
            in: 'query',
            name: 'resource_doi',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_type: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model',
            in: 'query',
            name: 'item_type',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of articles belonging to the institution',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/account/institution/custom_fields',
  tags: ['institutions'],
  summary: 'Private account institution group custom fields',
  description:
    'Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.',
  operationId: 'custom_fields_list',
  request: {
    query: z.object({
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Group_id',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of custom fields',
      content: { 'application/json': { schema: z.array(ShortCustomFieldSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute = createRoute({
  method: 'post',
  path: '/account/institution/custom_fields/{custom_field_id}/items/upload',
  tags: ['institutions'],
  summary: 'Custom fields values files upload',
  description:
    'Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>',
  operationId: 'custom_fields_upload',
  request: {
    params: z.object({
      custom_field_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Custom field identifier',
            in: 'path',
            name: 'custom_field_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              external_file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'CSV file to be uploaded',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ example: { code: 200, message: 'OK' } }),
        },
      },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionEmbargoOptionsRoute = createRoute({
  method: 'get',
  path: '/account/institution/embargo_options',
  tags: ['institutions'],
  summary: 'Private Account Institution embargo options',
  description: 'Account institution embargo options details',
  operationId: 'private_institution_embargo_options_details',
  responses: {
    200: {
      description: 'OK. An array of embargo options',
      content: { 'application/json': { schema: z.array(GroupEmbargoOptionsSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionGroupsRoute = createRoute({
  method: 'get',
  path: '/account/institution/groups',
  tags: ['institutions'],
  summary: 'Private Account Institution Groups',
  description:
    'Returns the groups for which the account has administrative privileges (assigned and inherited).',
  operationId: 'private_institution_groups_list',
  responses: {
    200: {
      description: 'OK. An array of Groups',
      content: { 'application/json': { schema: z.array(GroupSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute = createRoute({
  method: 'get',
  path: '/account/institution/groups/{group_id}/embargo_options',
  tags: ['institutions'],
  summary: 'Private Account Institution Group Embargo Options',
  description: 'Account institution group embargo options details',
  operationId: 'private_group_embargo_options_details',
  request: {
    params: z.object({
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Group identifier',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of embargo options',
      content: { 'application/json': { schema: z.array(GroupEmbargoOptionsSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionReviewCurationIdRoute = createRoute({
  method: 'get',
  path: '/account/institution/review/{curation_id}',
  tags: ['institutions'],
  summary: 'Institution Curation Review',
  description: 'Retrieve a certain curation review by its ID',
  operationId: 'account_institution_curation',
  request: {
    params: z.object({
      curation_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'ID of the curation',
            in: 'path',
            name: 'curation_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. A curation review.',
      content: { 'application/json': { schema: CurationDetailSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionReviewCurationIdCommentsRoute = createRoute({
  method: 'get',
  path: '/account/institution/review/{curation_id}/comments',
  tags: ['institutions'],
  summary: 'Institution Curation Review Comments',
  description: "Retrieve a certain curation review's comments.",
  operationId: 'account_institution_curation_comments',
  request: {
    params: z.object({
      curation_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'ID of the curation',
            in: 'path',
            name: 'curation_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "OK. A curation review's comments.",
      content: { 'application/json': { schema: CurationCommentSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountInstitutionReviewCurationIdCommentsRoute = createRoute({
  method: 'post',
  path: '/account/institution/review/{curation_id}/comments',
  tags: ['institutions'],
  summary: 'POST Institution Curation Review Comment',
  description: 'Add a new comment to the review.',
  request: {
    params: z.object({
      curation_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'ID of the curation',
            in: 'path',
            name: 'curation_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The content/value of the comment.',
      content: { 'application/json': { schema: CurationCommentCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK.' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionReviewsRoute = createRoute({
  method: 'get',
  path: '/account/institution/reviews',
  tags: ['institutions'],
  summary: 'Institution Curation Reviews',
  description: 'Retrieve a list of curation reviews for this institution',
  operationId: 'account_institution_curations',
  request: {
    query: z.object({
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the group ID',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { format: 'int64', minimum: 0, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve the reviews for this article',
            in: 'query',
            name: 'article_id',
            required: false,
            schema: { format: 'int64', minimum: 0, type: 'integer' },
          },
        }),
      status: z
        .enum(['pending', 'approved', 'rejected', 'closed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the status of the review',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['pending', 'approved', 'rejected', 'closed'], type: 'string' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. A list of curation reviews.',
      content: { 'application/json': { schema: CurationSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionRolesRoute = createRoute({
  method: 'get',
  path: '/account/institution/roles',
  tags: ['institutions'],
  summary: 'Private Account Institution Roles',
  description: 'Returns the roles available for groups and the institution group.',
  operationId: 'private_institution_roles_list',
  responses: {
    200: {
      description: 'OK. An array of Roles',
      content: { 'application/json': { schema: z.array(RoleSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionRolesAccountIdRoute = createRoute({
  method: 'get',
  path: '/account/institution/roles/{account_id}',
  tags: ['institutions'],
  summary: 'List Institution Account Group Roles',
  description: 'List Institution Account Group Roles',
  operationId: 'private_institution_account_group_roles',
  request: {
    params: z.object({
      account_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Account identifier the user is associated to',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Account Group Roles',
      content: { 'application/json': { schema: AccountGroupRolesSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountInstitutionRolesAccountIdRoute = createRoute({
  method: 'post',
  path: '/account/institution/roles/{account_id}',
  tags: ['institutions'],
  summary: 'Add Institution Account Group Roles',
  description: 'Add Institution Account Group Roles',
  operationId: 'private_institution_account_group_roles_create',
  request: {
    params: z.object({
      account_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Account identifier the user is associated to',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Account description',
      content: { 'application/json': { schema: AccountGroupRolesCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute = createRoute({
  method: 'delete',
  path: '/account/institution/roles/{account_id}/{group_id}/{role_id}',
  tags: ['institutions'],
  summary: 'Delete Institution Account Group Role',
  description: 'Delete Institution Account Group Role',
  operationId: 'private_institution_account_group_role_delete',
  request: {
    params: z.object({
      account_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Account identifier for which to remove the role',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Group identifier for which to remove the role',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      role_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Role identifier',
            in: 'path',
            name: 'role_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountInstitutionUsersAccountIdRoute = createRoute({
  method: 'get',
  path: '/account/institution/users/{account_id}',
  tags: ['institutions'],
  summary: 'Private Account Institution User',
  description: 'Retrieve institution user information using the account_id',
  operationId: 'private_account_institution_user',
  request: {
    params: z.object({
      account_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Account identifier the user is associated to',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. User representation',
      content: { 'application/json': { schema: UserSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountLicensesRoute = createRoute({
  method: 'get',
  path: '/account/licenses',
  tags: ['other'],
  summary: 'Private Account Licenses',
  description:
    "This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.",
  operationId: 'private_licenses_list',
  responses: {
    200: {
      description: 'OK. An array of personal licenses',
      content: { 'application/json': { schema: z.array(LicenseSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsRoute = createRoute({
  method: 'get',
  path: '/account/projects',
  tags: ['projects'],
  summary: 'Private Projects',
  description: 'List private projects',
  operationId: 'private_projects_list',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      storage: z
        .enum(['group', 'individual'])
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections from this institution',
            in: 'query',
            name: 'storage',
            required: false,
            schema: { enum: ['group', 'individual'], type: 'string' },
          },
        }),
      roles: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".',
            in: 'query',
            name: 'roles',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of projects',
      content: { 'application/json': { schema: z.array(ProjectPrivateSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsRoute = createRoute({
  method: 'post',
  path: '/account/projects',
  tags: ['projects'],
  summary: 'Create project',
  description: 'Create a new project',
  operationId: 'private_project_create',
  request: {
    body: {
      description: 'Project  description',
      content: { 'application/json': { schema: ProjectCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsSearchRoute = createRoute({
  method: 'post',
  path: '/account/projects/search',
  tags: ['projects'],
  summary: 'Private Projects search',
  description: 'Search inside the private projects',
  operationId: 'private_projects_search',
  request: { body: ProjectsSearchRequestBody },
  responses: {
    200: {
      description: 'OK. An array of projects',
      content: { 'application/json': { schema: z.array(ProjectPrivateSchema) } },
    },
    400: { description: 'Bad Request' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getAccountProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}',
  tags: ['projects'],
  summary: 'View project details',
  description: 'View a private project',
  operationId: 'private_project_details',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Project representation',
      content: { 'application/json': { schema: ProjectCompletePrivateSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountProjectsProjectIdRoute = createRoute({
  method: 'put',
  path: '/account/projects/{project_id}',
  tags: ['projects'],
  summary: 'Update project',
  description:
    'Updating an project by passing body parameters; request can also be made with the PATCH method.',
  operationId: 'private_project_update',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Project description',
      content: { 'application/json': { schema: ProjectUpdateSchema } },
      required: true,
    },
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location of project',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of project', param: { required: false } }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/account/projects/{project_id}',
  tags: ['projects'],
  summary: 'Delete project',
  description:
    'A project can be deleted only if: - it is not public - it does not have public articles.\n\nWhen an individual project is deleted, all the articles are moved to my data of each owner.\n\nWhen a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.\n',
  operationId: 'private_project_delete',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdArticlesRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/articles',
  tags: ['projects'],
  summary: 'List project articles',
  description: 'List project articles',
  operationId: 'private_project_articles_list',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. List of articles',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsProjectIdArticlesRoute = createRoute({
  method: 'post',
  path: '/account/projects/{project_id}/articles',
  tags: ['projects'],
  summary: 'Create project article',
  description: 'Create a new Article and associate it with this project',
  operationId: 'private_project_articles_create',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Article description',
      content: { 'application/json': { schema: ArticleProjectCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationWarningsSchema } },
      headers: z.object({
        Location: {
          description: 'Location of article',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location of article', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdArticlesArticleIdRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/articles/{article_id}',
  tags: ['projects'],
  summary: 'Project article details',
  description: 'Project article details',
  operationId: 'private_project_article_details',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article representation',
      content: { 'application/json': { schema: ProjectArticleSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountProjectsProjectIdArticlesArticleIdRoute = createRoute({
  method: 'delete',
  path: '/account/projects/{project_id}/articles/{article_id}',
  tags: ['projects'],
  summary: 'Delete project article',
  description: 'Delete project article',
  operationId: 'private_project_article_delete',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdArticlesArticleIdFilesRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/articles/{article_id}/files',
  tags: ['projects'],
  summary: 'Project article list files',
  description: 'List article files',
  operationId: 'private_project_article_files',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. List of files',
      content: { 'application/json': { schema: z.array(PrivateFileSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/articles/{article_id}/files/{file_id}',
  tags: ['projects'],
  summary: 'Project article file details',
  description: 'Project article file details',
  operationId: 'private_project_article_file',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Article unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'File unique identifier',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. File representation',
      content: { 'application/json': { schema: PrivateFileSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdCollaboratorsRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/collaborators',
  tags: ['projects'],
  summary: 'List project collaborators',
  description: 'List Project collaborators and invited users',
  operationId: 'private_project_collaborators_list',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. List of Collaborators',
      content: { 'application/json': { schema: z.array(ProjectCollaboratorSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsProjectIdCollaboratorsRoute = createRoute({
  method: 'post',
  path: '/account/projects/{project_id}/collaborators',
  tags: ['projects'],
  summary: 'Invite project collaborators',
  description: 'Invite users to collaborate on project or view the project',
  operationId: 'private_project_collaborators_invite',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'viewer or collaborator role. User user_id or email of user',
      content: { 'application/json': { schema: ProjectCollaboratorInviteSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ResponseMessageSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountProjectsProjectIdCollaboratorsUserIdRoute = createRoute({
  method: 'delete',
  path: '/account/projects/{project_id}/collaborators/{user_id}',
  tags: ['projects'],
  summary: 'Remove project collaborator',
  description: 'Remove project collaborator',
  operationId: 'private_project_collaborator__Delete',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'User unique identifier',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsProjectIdLeaveRoute = createRoute({
  method: 'post',
  path: '/account/projects/{project_id}/leave',
  tags: ['projects'],
  summary: 'Private Project Leave',
  description: "Please note: project's owner cannot leave the project.",
  operationId: 'private_project_leave',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdNotesRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/notes',
  tags: ['projects'],
  summary: 'List project notes',
  description: 'List project notes',
  operationId: 'private_project_notes_list',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. List of project notes',
      content: { 'application/json': { schema: z.array(ProjectNoteSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsProjectIdNotesRoute = createRoute({
  method: 'post',
  path: '/account/projects/{project_id}/notes',
  tags: ['projects'],
  summary: 'Create project note',
  description: 'Create a new project note',
  operationId: 'private_project_notes_create',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ProjectNoteCreateRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        Location: {
          description: 'Location note',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location note', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getAccountProjectsProjectIdNotesNoteIdRoute = createRoute({
  method: 'get',
  path: '/account/projects/{project_id}/notes/{note_id}',
  tags: ['projects'],
  summary: 'Project note details',
  operationId: 'private_project_note',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      note_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Note unique identifier',
            in: 'path',
            name: 'note_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Note representation',
      content: { 'application/json': { schema: ProjectNotePrivateSchema } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const putAccountProjectsProjectIdNotesNoteIdRoute = createRoute({
  method: 'put',
  path: '/account/projects/{project_id}/notes/{note_id}',
  tags: ['projects'],
  summary: 'Update project note',
  operationId: 'private_project_note_update',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      note_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Note unique identifier',
            in: 'path',
            name: 'note_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: ProjectNoteCreateRequestBody,
  },
  responses: {
    205: {
      description: 'Reset Content',
      headers: z.object({
        Location: {
          description: 'Location note',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Location note', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const deleteAccountProjectsProjectIdNotesNoteIdRoute = createRoute({
  method: 'delete',
  path: '/account/projects/{project_id}/notes/{note_id}',
  tags: ['projects'],
  summary: 'Delete project note',
  operationId: 'private_project_note_delete',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      note_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Note unique identifier',
            in: 'path',
            name: 'note_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const postAccountProjectsProjectIdPublishRoute = createRoute({
  method: 'post',
  path: '/account/projects/{project_id}/publish',
  tags: ['projects'],
  summary: 'Private Project Publish',
  description: 'Publish a project. Possible after all items inside it are public',
  operationId: 'private_project_publish',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ResponseMessageSchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getArticlesRoute = createRoute({
  method: 'get',
  path: '/articles',
  tags: ['articles'],
  summary: 'Public Articles',
  description: 'Returns a list of public articles',
  operationId: 'articles_list',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order. Default varies by endpoint/resource.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views', 'shares', 'downloads', 'cites'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      institution: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return articles from this institution',
            in: 'query',
            name: 'institution',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      published_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'published_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'modified_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return articles from this group',
            in: 'query',
            name: 'group',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      resource_doi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return articles with this resource_doi',
            in: 'query',
            name: 'resource_doi',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_type: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model',
            in: 'query',
            name: 'item_type',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      doi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return articles with this doi',
            in: 'query',
            name: 'doi',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handle: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return articles with this handle',
            in: 'query',
            name: 'handle',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of articles',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: {
      description:
        "Unprocessable Entity. Syntax is correct but one of the parameters isn't correctly processed",
    },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const postArticlesSearchRoute = createRoute({
  method: 'post',
  path: '/articles/search',
  tags: ['articles'],
  summary: 'Public Articles Search',
  description: 'Returns a list of public articles, filtered by the search parameters',
  operationId: 'articles_search',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: ArticleSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK. An array of articles',
      content: { 'application/json': { schema: z.array(ArticleWithProjectSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: {
      description:
        "Unprocessable Entity. Syntax is correct but one of the parameters isn't correctly processed",
    },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}',
  tags: ['articles'],
  summary: 'View article details',
  description: 'View an article',
  operationId: 'article_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article representation',
      content: { 'application/json': { schema: ArticleCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdFilesRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/files',
  tags: ['articles'],
  summary: 'List article files',
  description: 'Files list for article',
  operationId: 'article_files',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. List of article files',
      content: { 'application/json': { schema: z.array(PublicFileSchema) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/files/{file_id}',
  tags: ['articles'],
  summary: 'Article file details',
  description: 'File by id',
  operationId: 'article_file_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'File Unique identifier',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. File representation',
      content: { 'application/json': { schema: PublicFileSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdVersionsRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/versions',
  tags: ['articles'],
  summary: 'List article versions',
  description: 'List public article versions',
  operationId: 'article_versions',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article version representations',
      content: { 'application/json': { schema: z.array(ArticleVersionsSchema) } },
    },
    400: { description: 'Bad Request. Article ID must be an integer and bigger than 0.' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdVersionsVNumberRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/versions/{v_number}',
  tags: ['articles'],
  summary: 'Article details for version',
  description: 'Article with specified version',
  operationId: 'article_version_details',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      v_number: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Version Number',
            in: 'path',
            name: 'v_number',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Article representation',
      content: { 'application/json': { schema: ArticleCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdVersionsVNumberConfidentialityRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/versions/{v_number}/confidentiality',
  tags: ['articles'],
  summary: 'Public Article Confidentiality for article version',
  description:
    'Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.',
  operationId: 'article_version_confidentiality',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      v_number: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Version Number',
            in: 'path',
            name: 'v_number',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Confidentiality representation',
      content: { 'application/json': { schema: ArticleConfidentialitySchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getArticlesArticleIdVersionsVNumberEmbargoRoute = createRoute({
  method: 'get',
  path: '/articles/{article_id}/versions/{v_number}/embargo',
  tags: ['articles'],
  summary: 'Public Article Embargo for article version',
  description: 'Embargo for article version',
  operationId: 'article_version_embargo',
  request: {
    params: z.object({
      article_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Article Unique identifier',
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      v_number: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Version Number',
            in: 'path',
            name: 'v_number',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Embargo representation',
      content: { 'application/json': { schema: ArticleEmbargoSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['other'],
  summary: 'Public Categories',
  description: 'Returns a list of public categories',
  operationId: 'categories_list',
  responses: {
    200: {
      description: 'OK. An array of categories',
      content: { 'application/json': { schema: z.array(CategorySchema) } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['collections'],
  summary: 'Public Collections',
  description: 'Returns a list of public collections',
  operationId: 'collections_list',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views', 'shares', 'cites'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order. Default varies by endpoint/resource.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views', 'shares', 'cites'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      institution: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections from this institution',
            in: 'query',
            name: 'institution',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      published_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'published_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'modified_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections from this group',
            in: 'query',
            name: 'group',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      resource_doi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections with this resource_doi',
            in: 'query',
            name: 'resource_doi',
            required: false,
            schema: { type: 'string' },
          },
        }),
      doi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections with this doi',
            in: 'query',
            name: 'doi',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handle: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections with this handle',
            in: 'query',
            name: 'handle',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of collections',
      content: { 'application/json': { schema: z.array(CollectionSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const postCollectionsSearchRoute = createRoute({
  method: 'post',
  path: '/collections/search',
  tags: ['collections'],
  summary: 'Public Collections Search',
  description: 'Returns a list of public collections',
  operationId: 'collections_search',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Search Parameters',
      content: { 'application/json': { schema: CollectionSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK. An array of collections',
      content: { 'application/json': { schema: z.array(CollectionSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_id}',
  tags: ['collections'],
  summary: 'Collection details',
  description: 'View a collection',
  operationId: 'collection_details',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Collection representation',
      content: { 'application/json': { schema: CollectionCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCollectionsCollectionIdArticlesRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_id}/articles',
  tags: ['collections'],
  summary: 'Public Collection Articles',
  description: 'Returns a list of public collection articles',
  operationId: 'collection_articles',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of articles belonging to the collection',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCollectionsCollectionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_id}/versions',
  tags: ['collections'],
  summary: 'Collection Versions list',
  description: 'Returns a list of public collection Versions',
  operationId: 'collection_versions',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of versions',
      content: { 'application/json': { schema: z.array(CollectionVersionsSchema) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getCollectionsCollectionIdVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_id}/versions/{version_id}',
  tags: ['collections'],
  summary: 'Collection Version details',
  description: 'View details for a certain version of a collection',
  operationId: 'collection_version_details',
  request: {
    params: z.object({
      collection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Collection Unique identifier',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
      version_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Version Number',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Collection for that version',
      content: { 'application/json': { schema: CollectionCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getFileDownloadFileIdRoute = createRoute({
  method: 'get',
  path: '/file/download/{file_id}',
  tags: ['other'],
  summary: 'Public File Download',
  description: 'Starts the download of a file',
  operationId: 'file_download',
  request: {
    params: z.object({
      file_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 500: { description: 'Internal Server Error' } },
  security: [],
})

export const postInstitutionHrfeedUploadRoute = createRoute({
  method: 'post',
  path: '/institution/hrfeed/upload',
  tags: ['institutions'],
  summary: 'Private Institution HRfeed Upload',
  description: 'More info in the <a href="#hr_feed">HR Feed section</a>',
  operationId: 'institution_hrfeed_upload',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              hrfeed: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'You can find an example in the Hr Feed section',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ResponseMessageSchema } } },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getInstitutionsInstitutionStringIdArticlesFilterByRoute = createRoute({
  method: 'get',
  path: '/institutions/{institution_string_id}/articles/filter-by',
  tags: ['institutions'],
  summary: 'Public Licenses',
  description: 'Returns a list of articles belonging to the institution',
  operationId: 'institution_articles',
  request: {
    params: z.object({
      institution_string_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'institution_string_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      resource_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'resource_id', required: true, schema: { type: 'string' } },
        }),
      filename: z
        .string()
        .openapi({
          param: { in: 'query', name: 'filename', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of articles',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    500: { description: 'Internal Server Error' },
  },
})

export const getItemTypesRoute = createRoute({
  method: 'get',
  path: '/item_types',
  tags: ['other'],
  summary: 'Item Types',
  description:
    'Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.',
  operationId: 'item_types_list',
  request: {
    query: z.object({
      group_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifier of the group for which the item types are requested',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { default: 0, format: 'int64', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of item types',
      content: { 'application/json': { schema: z.array(ItemTypeSchema) } },
    },
    400: { description: 'Bad Request' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ OAuth2: ['all'] }],
})

export const getLicensesRoute = createRoute({
  method: 'get',
  path: '/licenses',
  tags: ['other'],
  summary: 'Public Licenses',
  description: 'Returns a list of public licenses',
  operationId: 'licenses_list',
  responses: {
    200: {
      description: 'OK. An array of licenses',
      content: { 'application/json': { schema: z.array(LicenseSchema) } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['projects'],
  summary: 'Public Projects',
  description: 'Returns a list of public projects',
  operationId: 'projects_list',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Used for pagination with page_size',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results included on a page. Used for pagination with page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results included on a page. Used for pagination with query',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(5000n))
        .exactOptional()
        .openapi({
          param: {
            description:
              'Where to start the listing(the offset of the first result). Used for pagination with limit',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int64', maximum: 5000, minimum: 0, type: 'integer' },
          },
        }),
      order: z
        .enum(['published_date', 'modified_date', 'views'])
        .default('published_date')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to order. Default varies by endpoint/resource.',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'published_date',
              enum: ['published_date', 'modified_date', 'views'],
              type: 'string',
            },
          },
        }),
      order_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_direction',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      institution: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections from this institution',
            in: 'query',
            name: 'institution',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      published_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD',
            in: 'query',
            name: 'published_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only return collections from this group',
            in: 'query',
            name: 'group',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. An array of projects',
      content: { 'application/json': { schema: z.array(ProjectSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const postProjectsSearchRoute = createRoute({
  method: 'post',
  path: '/projects/search',
  tags: ['projects'],
  summary: 'Public Projects Search',
  description: 'Returns a list of public articles',
  operationId: 'projects_search',
  request: {
    headers: z.object({
      'X-Cursor': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.',
            in: 'header',
            name: 'X-Cursor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: ProjectsSearchRequestBody,
  },
  responses: {
    200: {
      description: 'OK. An array of projects',
      content: { 'application/json': { schema: z.array(ProjectSchema) } },
      headers: z.object({
        'X-Cursor': {
          description: 'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique hash used for bypassing the item retrieval limit of 9,000 entities.',
              param: { required: false },
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    422: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}',
  tags: ['projects'],
  summary: 'Public Project',
  description: 'View a project',
  operationId: 'project_details',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Project representation',
      content: { 'application/json': { schema: ProjectCompleteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})

export const getProjectsProjectIdArticlesRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/articles',
  tags: ['projects'],
  summary: 'Public Project Articles',
  description: 'List articles in project',
  operationId: 'project_articles',
  request: {
    params: z.object({
      project_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'Project Unique identifier',
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Project articles list',
      content: { 'application/json': { schema: z.array(ArticleSchema) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [],
})
