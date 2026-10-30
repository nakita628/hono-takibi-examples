import { createRoute, z } from '@hono/zod-openapi'

const AnySchema = z.looseObject({}).openapi({ description: 'Any', example: [] }).openapi('Any')

const ErrorSchema = z
  .object({
    message: z.string().openapi({ description: 'Error message.', 'x-example': 'Not found' }),
    code: z.string().openapi({ description: 'Error code.', 'x-example': '404' }),
    type: z
      .string()
      .openapi({
        description:
          'Error type. You can learn more about all the error types at https://appwrite.io/docs/error-codes#errorTypes',
        'x-example': 'not_found',
      }),
    version: z.string().openapi({ description: 'Server version number.', 'x-example': '1.0' }),
  })
  .openapi({
    description: 'Error',
    required: ['message', 'code', 'type', 'version'],
    example: { message: 'Not found', code: '404', type: 'not_found', version: '1.0' },
  })
  .openapi('Error')

const DocumentSchema = z
  .looseObject({
    $id: z.string().openapi({ description: 'Document ID.', 'x-example': '5e5ea5c16897e' }),
    $sequence: z
      .int32()
      .openapi({
        description: 'Document automatically incrementing ID.',
        'x-example': 1,
        readOnly: true,
      }),
    $collectionId: z
      .string()
      .openapi({ description: 'Collection ID.', 'x-example': '5e5ea5c15117e', readOnly: true }),
    $databaseId: z
      .string()
      .openapi({ description: 'Database ID.', 'x-example': '5e5ea5c15117e', readOnly: true }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Document creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Document update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $permissions: z
      .array(z.string())
      .openapi({
        description:
          'Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': ['read("any")'],
      }),
  })
  .openapi({
    description: 'Document',
    required: [
      '$id',
      '$sequence',
      '$collectionId',
      '$databaseId',
      '$createdAt',
      '$updatedAt',
      '$permissions',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $sequence: 1,
      $collectionId: '5e5ea5c15117e',
      $databaseId: '5e5ea5c15117e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      $permissions: ['read("any")'],
      username: 'john.doe',
      email: 'john.doe@example.com',
      fullName: 'John Doe',
      age: 30,
      isAdmin: false,
    },
  })
  .openapi('Document')

const DocumentListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of documents documents that matched your query.',
        'x-example': 5,
      }),
    documents: z
      .array(DocumentSchema)
      .openapi({ description: 'List of documents.', 'x-example': '' }),
  })
  .openapi({
    description: 'Documents List',
    required: ['total', 'documents'],
    example: { total: 5, documents: '' },
  })
  .openapi('DocumentList')

const AttributeBooleanSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'isEnabled' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'boolean' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    default: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': false,
      }),
  })
  .openapi({
    description: 'AttributeBoolean',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt'],
    example: {
      key: 'isEnabled',
      type: 'boolean',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      default: false,
    },
  })
  .openapi('AttributeBoolean')

const AttributeIntegerSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'count' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'integer' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    min: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum value to enforce for new documents.', 'x-example': 1 }),
    max: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum value to enforce for new documents.', 'x-example': 10 }),
    default: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 10,
      }),
  })
  .openapi({
    description: 'AttributeInteger',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt'],
    example: {
      key: 'count',
      type: 'integer',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      min: 1,
      max: 10,
      default: 10,
    },
  })
  .openapi('AttributeInteger')

const AttributeFloatSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'percentageCompleted' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'double' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    min: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum value to enforce for new documents.', 'x-example': 1.5 }),
    max: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum value to enforce for new documents.', 'x-example': 10.5 }),
    default: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 2.5,
      }),
  })
  .openapi({
    description: 'AttributeFloat',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt'],
    example: {
      key: 'percentageCompleted',
      type: 'double',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      min: 1.5,
      max: 10.5,
      default: 2.5,
    },
  })
  .openapi('AttributeFloat')

const AttributeEmailSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'userEmail' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    format: z.string().openapi({ description: 'String format.', 'x-example': 'email' }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 'default@example.com',
      }),
  })
  .openapi({
    description: 'AttributeEmail',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt', 'format'],
    example: {
      key: 'userEmail',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      format: 'email',
      default: 'default@example.com',
    },
  })
  .openapi('AttributeEmail')

const AttributeEnumSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'status' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    elements: z
      .array(z.string())
      .openapi({ description: 'Array of elements in enumerated type.', 'x-example': 'element' }),
    format: z.string().openapi({ description: 'String format.', 'x-example': 'enum' }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 'element',
      }),
  })
  .openapi({
    description: 'AttributeEnum',
    required: [
      'key',
      'type',
      'status',
      'error',
      'required',
      '$createdAt',
      '$updatedAt',
      'elements',
      'format',
    ],
    example: {
      key: 'status',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      elements: 'element',
      format: 'enum',
      default: 'element',
    },
  })
  .openapi('AttributeEnum')

const AttributeUrlSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'githubUrl' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    format: z.string().openapi({ description: 'String format.', 'x-example': 'url' }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 'http://example.com',
      }),
  })
  .openapi({
    description: 'AttributeURL',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt', 'format'],
    example: {
      key: 'githubUrl',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      format: 'url',
      default: 'http://example.com',
    },
  })
  .openapi('AttributeUrl')

const AttributeIpSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'ipAddress' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    format: z.string().openapi({ description: 'String format.', 'x-example': 'ip' }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': '192.0.2.0',
      }),
  })
  .openapi({
    description: 'AttributeIP',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt', 'format'],
    example: {
      key: 'ipAddress',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      format: 'ip',
      default: '192.0.2.0',
    },
  })
  .openapi('AttributeIp')

const AttributeDatetimeSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'birthDay' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'datetime' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    format: z.string().openapi({ description: 'ISO 8601 format.', 'x-example': 'datetime' }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Default value for attribute when not provided. Only null is optional',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'AttributeDatetime',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt', 'format'],
    example: {
      key: 'birthDay',
      type: 'datetime',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      format: 'datetime',
      default: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('AttributeDatetime')

const AttributeRelationshipSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'fullName' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    relatedCollection: z
      .string()
      .openapi({ description: 'The ID of the related collection.', 'x-example': 'collection' }),
    relationType: z
      .string()
      .openapi({
        description: 'The type of the relationship.',
        'x-example': 'oneToOne|oneToMany|manyToOne|manyToMany',
      }),
    twoWay: z
      .boolean()
      .openapi({ description: 'Is the relationship two-way?', 'x-example': false }),
    twoWayKey: z
      .string()
      .openapi({ description: 'The key of the two-way relationship.', 'x-example': 'string' }),
    onDelete: z
      .string()
      .openapi({
        description: 'How deleting the parent document will propagate to child documents.',
        'x-example': 'restrict|cascade|setNull',
      }),
    side: z
      .string()
      .openapi({
        description: 'Whether this is the parent or child side of the relationship',
        'x-example': 'parent|child',
      }),
  })
  .openapi({
    description: 'AttributeRelationship',
    required: [
      'key',
      'type',
      'status',
      'error',
      'required',
      '$createdAt',
      '$updatedAt',
      'relatedCollection',
      'relationType',
      'twoWay',
      'twoWayKey',
      'onDelete',
      'side',
    ],
    example: {
      key: 'fullName',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      relatedCollection: 'collection',
      relationType: 'oneToOne|oneToMany|manyToOne|manyToMany',
      twoWay: false,
      twoWayKey: 'string',
      onDelete: 'restrict|cascade|setNull',
      side: 'parent|child',
    },
  })
  .openapi('AttributeRelationship')

const AttributeStringSchema = z
  .object({
    key: z.string().openapi({ description: 'Attribute Key.', 'x-example': 'fullName' }),
    type: z.string().openapi({ description: 'Attribute type.', 'x-example': 'string' }),
    status: z
      .string()
      .openapi({
        description:
          'Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an attribute.',
        'x-example': 'string',
      }),
    required: z.boolean().openapi({ description: 'Is attribute required?', 'x-example': true }),
    array: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is attribute an array?', 'x-example': false }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Attribute creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Attribute update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    size: z.int32().openapi({ description: 'Attribute size.', 'x-example': 128 }),
    default: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Default value for attribute when not provided. Cannot be set when attribute is required.',
        'x-example': 'default',
      }),
    encrypt: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Defines whether this attribute is encrypted or not.',
        'x-example': false,
      }),
  })
  .openapi({
    description: 'AttributeString',
    required: ['key', 'type', 'status', 'error', 'required', '$createdAt', '$updatedAt', 'size'],
    example: {
      key: 'fullName',
      type: 'string',
      status: 'available',
      error: 'string',
      required: true,
      array: false,
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      size: 128,
      default: 'default',
      encrypt: false,
    },
  })
  .openapi('AttributeString')

const IndexSchema = z
  .object({
    key: z.string().openapi({ description: 'Index Key.', 'x-example': 'index1' }),
    type: z.string().openapi({ description: 'Index type.', 'x-example': 'primary' }),
    status: z
      .string()
      .openapi({
        description:
          'Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`',
        'x-example': 'available',
      }),
    error: z
      .string()
      .openapi({
        description:
          'Error message. Displays error generated on failure of creating or deleting an index.',
        'x-example': 'string',
      }),
    attributes: z.array(z.string()).openapi({ description: 'Index attributes.', 'x-example': [] }),
    lengths: z
      .array(z.int32())
      .openapi({ description: 'Index attributes length.', 'x-example': [] }),
    orders: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Index orders.', 'x-example': [] }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Index creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Index update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'Index',
    required: [
      'key',
      'type',
      'status',
      'error',
      'attributes',
      'lengths',
      '$createdAt',
      '$updatedAt',
    ],
    example: {
      key: 'index1',
      type: 'primary',
      status: 'available',
      error: 'string',
      attributes: [],
      lengths: [],
      orders: [],
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('Index')

const CollectionSchema = z
  .object({
    $id: z.string().openapi({ description: 'Collection ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Collection creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Collection update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $permissions: z
      .array(z.string())
      .openapi({
        description:
          'Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': ['read("any")'],
      }),
    databaseId: z.string().openapi({ description: 'Database ID.', 'x-example': '5e5ea5c16897e' }),
    name: z.string().openapi({ description: 'Collection name.', 'x-example': 'My Collection' }),
    enabled: z
      .boolean()
      .openapi({
        description:
          "Collection enabled. Can be 'enabled' or 'disabled'. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.",
        'x-example': false,
      }),
    documentSecurity: z
      .boolean()
      .openapi({
        description:
          'Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': true,
      }),
    attributes: z
      .array(
        z.union([
          AttributeBooleanSchema,
          AttributeIntegerSchema,
          AttributeFloatSchema,
          AttributeEmailSchema,
          AttributeEnumSchema,
          AttributeUrlSchema,
          AttributeIpSchema,
          AttributeDatetimeSchema,
          AttributeRelationshipSchema,
          AttributeStringSchema,
        ]),
      )
      .openapi({ description: 'Collection attributes.', 'x-example': {} }),
    indexes: z.array(IndexSchema).openapi({ description: 'Collection indexes.', 'x-example': {} }),
  })
  .openapi({
    description: 'Collection',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      '$permissions',
      'databaseId',
      'name',
      'enabled',
      'documentSecurity',
      'attributes',
      'indexes',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      $permissions: ['read("any")'],
      databaseId: '5e5ea5c16897e',
      name: 'My Collection',
      enabled: false,
      documentSecurity: true,
      attributes: {},
      indexes: {},
    },
  })
  .openapi('Collection')

const CollectionListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of collections documents that matched your query.',
        'x-example': 5,
      }),
    collections: z
      .array(CollectionSchema)
      .openapi({ description: 'List of collections.', 'x-example': '' }),
  })
  .openapi({
    description: 'Collections List',
    required: ['total', 'collections'],
    example: { total: 5, collections: '' },
  })
  .openapi('CollectionList')

const DatabaseSchema = z
  .object({
    $id: z.string().openapi({ description: 'Database ID.', 'x-example': '5e5ea5c16897e' }),
    name: z.string().openapi({ description: 'Database name.', 'x-example': 'My Database' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Database creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Database update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    enabled: z
      .boolean()
      .openapi({
        description:
          "If database is enabled. Can be 'enabled' or 'disabled'. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.",
        'x-example': false,
      }),
  })
  .openapi({
    description: 'Database',
    required: ['$id', 'name', '$createdAt', '$updatedAt', 'enabled'],
    example: {
      $id: '5e5ea5c16897e',
      name: 'My Database',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      enabled: false,
    },
  })
  .openapi('Database')

const DatabaseListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of databases documents that matched your query.',
        'x-example': 5,
      }),
    databases: z
      .array(DatabaseSchema)
      .openapi({ description: 'List of databases.', 'x-example': '' }),
  })
  .openapi({
    description: 'Databases List',
    required: ['total', 'databases'],
    example: { total: 5, databases: '' },
  })
  .openapi('DatabaseList')

const IndexListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of indexes documents that matched your query.',
        'x-example': 5,
      }),
    indexes: z.array(IndexSchema).openapi({ description: 'List of indexes.', 'x-example': '' }),
  })
  .openapi({
    description: 'Indexes List',
    required: ['total', 'indexes'],
    example: { total: 5, indexes: '' },
  })
  .openapi('IndexList')

const TargetSchema = z
  .object({
    $id: z.string().openapi({ description: 'Target ID.', 'x-example': '259125845563242502' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Target creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Target update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z.string().openapi({ description: 'Target Name.', 'x-example': 'Apple iPhone 12' }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '259125845563242502' }),
    providerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provider ID.', 'x-example': '259125845563242502' }),
    providerType: z
      .string()
      .openapi({
        description:
          'The target provider type. Can be one of the following: `email`, `sms` or `push`.',
        'x-example': 'email',
      }),
    identifier: z.string().openapi({ description: 'The target identifier.', 'x-example': 'token' }),
    expired: z.boolean().openapi({ description: 'Is the target expired.', 'x-example': false }),
  })
  .openapi({
    description: 'Target',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'name',
      'userId',
      'providerType',
      'identifier',
      'expired',
    ],
    example: {
      $id: '259125845563242502',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'Apple iPhone 12',
      userId: '259125845563242502',
      providerId: '259125845563242502',
      providerType: 'email',
      identifier: 'token',
      expired: false,
    },
  })
  .openapi('Target')

const UserSchema = z
  .object({
    $id: z.string().openapi({ description: 'User ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'User creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'User update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z.string().openapi({ description: 'User name.', 'x-example': 'John Doe' }),
    password: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Hashed user password.',
        'x-example':
          '$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE',
      }),
    hash: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Password hashing algorithm.', 'x-example': 'argon2' }),
    hashOptions: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Password hashing algorithm configuration.', 'x-example': {} }),
    registration: z
      .string()
      .openapi({
        description: 'User registration date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    status: z
      .boolean()
      .openapi({
        description: 'User status. Pass `true` for enabled and `false` for disabled.',
        'x-example': true,
      }),
    labels: z
      .array(z.string())
      .openapi({ description: 'Labels for the user.', 'x-example': ['vip'] }),
    passwordUpdate: z
      .string()
      .openapi({
        description: 'Password update time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    email: z
      .string()
      .openapi({ description: 'User email address.', 'x-example': 'john@appwrite.io' }),
    phone: z
      .string()
      .openapi({ description: 'User phone number in E.164 format.', 'x-example': '+4930901820' }),
    emailVerification: z
      .boolean()
      .openapi({ description: 'Email verification status.', 'x-example': true }),
    phoneVerification: z
      .boolean()
      .openapi({ description: 'Phone verification status.', 'x-example': true }),
    mfa: z
      .boolean()
      .openapi({ description: 'Multi factor authentication status.', 'x-example': true }),
    prefs: z
      .object({})
      .openapi({
        description: 'User preferences as a key-value object',
        'x-example': { theme: 'pink', timezone: 'UTC' },
      }),
    targets: z
      .array(TargetSchema)
      .openapi({
        description:
          'A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.',
        'x-example': [],
      }),
    accessedAt: z
      .string()
      .openapi({
        description:
          'Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'User',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'name',
      'registration',
      'status',
      'labels',
      'passwordUpdate',
      'email',
      'phone',
      'emailVerification',
      'phoneVerification',
      'mfa',
      'prefs',
      'targets',
      'accessedAt',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'John Doe',
      password:
        '$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE',
      hash: 'argon2',
      hashOptions: {},
      registration: '2020-10-15T06:38:00.000+00:00',
      status: true,
      labels: ['vip'],
      passwordUpdate: '2020-10-15T06:38:00.000+00:00',
      email: 'john@appwrite.io',
      phone: '+4930901820',
      emailVerification: true,
      phoneVerification: true,
      mfa: true,
      prefs: { theme: 'pink', timezone: 'UTC' },
      targets: [],
      accessedAt: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('User')

const UserListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of users documents that matched your query.',
        'x-example': 5,
      }),
    users: z.array(UserSchema).openapi({ description: 'List of users.', 'x-example': '' }),
  })
  .openapi({
    description: 'Users List',
    required: ['total', 'users'],
    example: { total: 5, users: '' },
  })
  .openapi('UserList')

const SessionSchema = z
  .object({
    $id: z.string().openapi({ description: 'Session ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Session creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Session update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '5e5bb8c16897e' }),
    expire: z
      .string()
      .openapi({
        description: 'Session expiration date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    provider: z.string().openapi({ description: 'Session Provider.', 'x-example': 'email' }),
    providerUid: z
      .string()
      .openapi({ description: 'Session Provider User ID.', 'x-example': 'user@example.com' }),
    providerAccessToken: z
      .string()
      .openapi({
        description: 'Session Provider Access Token.',
        'x-example': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      }),
    providerAccessTokenExpiry: z
      .string()
      .openapi({
        description: 'The date of when the access token expires in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    providerRefreshToken: z
      .string()
      .openapi({
        description: 'Session Provider Refresh Token.',
        'x-example': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      }),
    ip: z
      .string()
      .openapi({
        description: 'IP in use when the session was created.',
        'x-example': '127.0.0.1',
      }),
    osCode: z
      .string()
      .openapi({
        description:
          'Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).',
        'x-example': 'Mac',
      }),
    osName: z.string().openapi({ description: 'Operating system name.', 'x-example': 'Mac' }),
    osVersion: z.string().openapi({ description: 'Operating system version.', 'x-example': 'Mac' }),
    clientType: z.string().openapi({ description: 'Client type.', 'x-example': 'browser' }),
    clientCode: z
      .string()
      .openapi({
        description:
          'Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).',
        'x-example': 'CM',
      }),
    clientName: z
      .string()
      .openapi({ description: 'Client name.', 'x-example': 'Chrome Mobile iOS' }),
    clientVersion: z.string().openapi({ description: 'Client version.', 'x-example': '84.0' }),
    clientEngine: z.string().openapi({ description: 'Client engine name.', 'x-example': 'WebKit' }),
    clientEngineVersion: z
      .string()
      .openapi({ description: 'Client engine name.', 'x-example': '605.1.15' }),
    deviceName: z.string().openapi({ description: 'Device name.', 'x-example': 'smartphone' }),
    deviceBrand: z.string().openapi({ description: 'Device brand name.', 'x-example': 'Google' }),
    deviceModel: z.string().openapi({ description: 'Device model name.', 'x-example': 'Nexus 5' }),
    countryCode: z
      .string()
      .openapi({ description: 'Country two-character ISO 3166-1 alpha code.', 'x-example': 'US' }),
    countryName: z.string().openapi({ description: 'Country name.', 'x-example': 'United States' }),
    current: z
      .boolean()
      .openapi({
        description: 'Returns true if this the current user session.',
        'x-example': true,
      }),
    factors: z
      .array(z.string())
      .openapi({
        description: 'Returns a list of active session factors.',
        'x-example': ['email'],
      }),
    secret: z
      .string()
      .openapi({
        description:
          'Secret used to authenticate the user. Only included if the request was made with an API key',
        'x-example': '5e5bb8c16897e',
      }),
    mfaUpdatedAt: z
      .string()
      .openapi({
        description:
          'Most recent date in ISO 8601 format when the session successfully passed MFA challenge.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'Session',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'userId',
      'expire',
      'provider',
      'providerUid',
      'providerAccessToken',
      'providerAccessTokenExpiry',
      'providerRefreshToken',
      'ip',
      'osCode',
      'osName',
      'osVersion',
      'clientType',
      'clientCode',
      'clientName',
      'clientVersion',
      'clientEngine',
      'clientEngineVersion',
      'deviceName',
      'deviceBrand',
      'deviceModel',
      'countryCode',
      'countryName',
      'current',
      'factors',
      'secret',
      'mfaUpdatedAt',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      userId: '5e5bb8c16897e',
      expire: '2020-10-15T06:38:00.000+00:00',
      provider: 'email',
      providerUid: 'user@example.com',
      providerAccessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      providerAccessTokenExpiry: '2020-10-15T06:38:00.000+00:00',
      providerRefreshToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      ip: '127.0.0.1',
      osCode: 'Mac',
      osName: 'Mac',
      osVersion: 'Mac',
      clientType: 'browser',
      clientCode: 'CM',
      clientName: 'Chrome Mobile iOS',
      clientVersion: '84.0',
      clientEngine: 'WebKit',
      clientEngineVersion: '605.1.15',
      deviceName: 'smartphone',
      deviceBrand: 'Google',
      deviceModel: 'Nexus 5',
      countryCode: 'US',
      countryName: 'United States',
      current: true,
      factors: ['email'],
      secret: '5e5bb8c16897e',
      mfaUpdatedAt: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('Session')

const SessionListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of sessions documents that matched your query.',
        'x-example': 5,
      }),
    sessions: z.array(SessionSchema).openapi({ description: 'List of sessions.', 'x-example': '' }),
  })
  .openapi({
    description: 'Sessions List',
    required: ['total', 'sessions'],
    example: { total: 5, sessions: '' },
  })
  .openapi('SessionList')

const IdentitySchema = z
  .object({
    $id: z.string().openapi({ description: 'Identity ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Identity creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Identity update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '5e5bb8c16897e' }),
    provider: z.string().openapi({ description: 'Identity Provider.', 'x-example': 'email' }),
    providerUid: z
      .string()
      .openapi({
        description: 'ID of the User in the Identity Provider.',
        'x-example': '5e5bb8c16897e',
      }),
    providerEmail: z
      .string()
      .openapi({
        description: 'Email of the User in the Identity Provider.',
        'x-example': 'user@example.com',
      }),
    providerAccessToken: z
      .string()
      .openapi({
        description: 'Identity Provider Access Token.',
        'x-example': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      }),
    providerAccessTokenExpiry: z
      .string()
      .openapi({
        description: 'The date of when the access token expires in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    providerRefreshToken: z
      .string()
      .openapi({
        description: 'Identity Provider Refresh Token.',
        'x-example': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      }),
  })
  .openapi({
    description: 'Identity',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'userId',
      'provider',
      'providerUid',
      'providerEmail',
      'providerAccessToken',
      'providerAccessTokenExpiry',
      'providerRefreshToken',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      userId: '5e5bb8c16897e',
      provider: 'email',
      providerUid: '5e5bb8c16897e',
      providerEmail: 'user@example.com',
      providerAccessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      providerAccessTokenExpiry: '2020-10-15T06:38:00.000+00:00',
      providerRefreshToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
    },
  })
  .openapi('Identity')

const IdentityListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of identities documents that matched your query.',
        'x-example': 5,
      }),
    identities: z
      .array(IdentitySchema)
      .openapi({ description: 'List of identities.', 'x-example': '' }),
  })
  .openapi({
    description: 'Identities List',
    required: ['total', 'identities'],
    example: { total: 5, identities: '' },
  })
  .openapi('IdentityList')

const LogSchema = z
  .object({
    event: z
      .string()
      .openapi({ description: 'Event name.', 'x-example': 'account.sessions.create' }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '610fc2f985ee0' }),
    userEmail: z.string().openapi({ description: 'User Email.', 'x-example': 'john@appwrite.io' }),
    userName: z.string().openapi({ description: 'User Name.', 'x-example': 'John Doe' }),
    mode: z
      .string()
      .openapi({ description: 'API mode when event triggered.', 'x-example': 'admin' }),
    ip: z
      .string()
      .openapi({
        description: 'IP session in use when the session was created.',
        'x-example': '127.0.0.1',
      }),
    time: z
      .string()
      .openapi({
        description: 'Log creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    osCode: z
      .string()
      .openapi({
        description:
          'Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).',
        'x-example': 'Mac',
      }),
    osName: z.string().openapi({ description: 'Operating system name.', 'x-example': 'Mac' }),
    osVersion: z.string().openapi({ description: 'Operating system version.', 'x-example': 'Mac' }),
    clientType: z.string().openapi({ description: 'Client type.', 'x-example': 'browser' }),
    clientCode: z
      .string()
      .openapi({
        description:
          'Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).',
        'x-example': 'CM',
      }),
    clientName: z
      .string()
      .openapi({ description: 'Client name.', 'x-example': 'Chrome Mobile iOS' }),
    clientVersion: z.string().openapi({ description: 'Client version.', 'x-example': '84.0' }),
    clientEngine: z.string().openapi({ description: 'Client engine name.', 'x-example': 'WebKit' }),
    clientEngineVersion: z
      .string()
      .openapi({ description: 'Client engine name.', 'x-example': '605.1.15' }),
    deviceName: z.string().openapi({ description: 'Device name.', 'x-example': 'smartphone' }),
    deviceBrand: z.string().openapi({ description: 'Device brand name.', 'x-example': 'Google' }),
    deviceModel: z.string().openapi({ description: 'Device model name.', 'x-example': 'Nexus 5' }),
    countryCode: z
      .string()
      .openapi({ description: 'Country two-character ISO 3166-1 alpha code.', 'x-example': 'US' }),
    countryName: z.string().openapi({ description: 'Country name.', 'x-example': 'United States' }),
  })
  .openapi({
    description: 'Log',
    required: [
      'event',
      'userId',
      'userEmail',
      'userName',
      'mode',
      'ip',
      'time',
      'osCode',
      'osName',
      'osVersion',
      'clientType',
      'clientCode',
      'clientName',
      'clientVersion',
      'clientEngine',
      'clientEngineVersion',
      'deviceName',
      'deviceBrand',
      'deviceModel',
      'countryCode',
      'countryName',
    ],
    example: {
      event: 'account.sessions.create',
      userId: '610fc2f985ee0',
      userEmail: 'john@appwrite.io',
      userName: 'John Doe',
      mode: 'admin',
      ip: '127.0.0.1',
      time: '2020-10-15T06:38:00.000+00:00',
      osCode: 'Mac',
      osName: 'Mac',
      osVersion: 'Mac',
      clientType: 'browser',
      clientCode: 'CM',
      clientName: 'Chrome Mobile iOS',
      clientVersion: '84.0',
      clientEngine: 'WebKit',
      clientEngineVersion: '605.1.15',
      deviceName: 'smartphone',
      deviceBrand: 'Google',
      deviceModel: 'Nexus 5',
      countryCode: 'US',
      countryName: 'United States',
    },
  })
  .openapi('Log')

const LogListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of logs documents that matched your query.',
        'x-example': 5,
      }),
    logs: z.array(LogSchema).openapi({ description: 'List of logs.', 'x-example': '' }),
  })
  .openapi({
    description: 'Logs List',
    required: ['total', 'logs'],
    example: { total: 5, logs: '' },
  })
  .openapi('LogList')

const FileSchema = z
  .object({
    $id: z.string().openapi({ description: 'File ID.', 'x-example': '5e5ea5c16897e' }),
    bucketId: z.string().openapi({ description: 'Bucket ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'File creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'File update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $permissions: z
      .array(z.string())
      .openapi({
        description:
          'File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': ['read("any")'],
      }),
    name: z.string().openapi({ description: 'File name.', 'x-example': 'Pink.png' }),
    signature: z
      .string()
      .openapi({
        description: 'File MD5 signature.',
        'x-example': '5d529fd02b544198ae075bd57c1762bb',
      }),
    mimeType: z.string().openapi({ description: 'File mime type.', 'x-example': 'image/png' }),
    sizeOriginal: z
      .int32()
      .openapi({ description: 'File original size in bytes.', 'x-example': 17890 }),
    chunksTotal: z
      .int32()
      .openapi({ description: 'Total number of chunks available', 'x-example': 17890 }),
    chunksUploaded: z
      .int32()
      .openapi({ description: 'Total number of chunks uploaded', 'x-example': 17890 }),
  })
  .openapi({
    description: 'File',
    required: [
      '$id',
      'bucketId',
      '$createdAt',
      '$updatedAt',
      '$permissions',
      'name',
      'signature',
      'mimeType',
      'sizeOriginal',
      'chunksTotal',
      'chunksUploaded',
    ],
    example: {
      $id: '5e5ea5c16897e',
      bucketId: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      $permissions: ['read("any")'],
      name: 'Pink.png',
      signature: '5d529fd02b544198ae075bd57c1762bb',
      mimeType: 'image/png',
      sizeOriginal: 17890,
      chunksTotal: 17890,
      chunksUploaded: 17890,
    },
  })
  .openapi('File')

const FileListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of files documents that matched your query.',
        'x-example': 5,
      }),
    files: z.array(FileSchema).openapi({ description: 'List of files.', 'x-example': '' }),
  })
  .openapi({
    description: 'Files List',
    required: ['total', 'files'],
    example: { total: 5, files: '' },
  })
  .openapi('FileList')

const BucketSchema = z
  .object({
    $id: z.string().openapi({ description: 'Bucket ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Bucket creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Bucket update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $permissions: z
      .array(z.string())
      .openapi({
        description:
          'Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': ['read("any")'],
      }),
    fileSecurity: z
      .boolean()
      .openapi({
        description:
          'Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).',
        'x-example': true,
      }),
    name: z.string().openapi({ description: 'Bucket name.', 'x-example': 'Documents' }),
    enabled: z.boolean().openapi({ description: 'Bucket enabled.', 'x-example': false }),
    maximumFileSize: z
      .int32()
      .openapi({ description: 'Maximum file size supported.', 'x-example': 100 }),
    allowedFileExtensions: z
      .array(z.string())
      .openapi({ description: 'Allowed file extensions.', 'x-example': ['jpg', 'png'] }),
    compression: z
      .string()
      .openapi({
        description:
          'Compression algorithm choosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).',
        'x-example': 'gzip',
      }),
    encryption: z.boolean().openapi({ description: 'Bucket is encrypted.', 'x-example': false }),
    antivirus: z
      .boolean()
      .openapi({ description: 'Virus scanning is enabled.', 'x-example': false }),
  })
  .openapi({
    description: 'Bucket',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      '$permissions',
      'fileSecurity',
      'name',
      'enabled',
      'maximumFileSize',
      'allowedFileExtensions',
      'compression',
      'encryption',
      'antivirus',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      $permissions: ['read("any")'],
      fileSecurity: true,
      name: 'Documents',
      enabled: false,
      maximumFileSize: 100,
      allowedFileExtensions: ['jpg', 'png'],
      compression: 'gzip',
      encryption: false,
      antivirus: false,
    },
  })
  .openapi('Bucket')

const BucketListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of buckets documents that matched your query.',
        'x-example': 5,
      }),
    buckets: z.array(BucketSchema).openapi({ description: 'List of buckets.', 'x-example': '' }),
  })
  .openapi({
    description: 'Buckets List',
    required: ['total', 'buckets'],
    example: { total: 5, buckets: '' },
  })
  .openapi('BucketList')

const ResourceTokenSchema = z
  .object({
    $id: z.string().openapi({ description: 'Token ID.', 'x-example': 'bb8ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Token creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    resourceId: z
      .string()
      .openapi({ description: 'Resource ID.', 'x-example': '5e5ea5c168bb8:5e5ea5c168bb8' }),
    resourceType: z.string().openapi({ description: 'Resource type.', 'x-example': 'files' }),
    expire: z
      .string()
      .openapi({
        description: 'Token expiration date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    secret: z
      .string()
      .openapi({
        description: 'JWT encoded string.',
        'x-example':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }),
    accessedAt: z
      .string()
      .openapi({
        description:
          'Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'ResourceToken',
    required: ['$id', '$createdAt', 'resourceId', 'resourceType', 'expire', 'secret', 'accessedAt'],
    example: {
      $id: 'bb8ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      resourceId: '5e5ea5c168bb8:5e5ea5c168bb8',
      resourceType: 'files',
      expire: '2020-10-15T06:38:00.000+00:00',
      secret:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      accessedAt: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('ResourceToken')

const ResourceTokenListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of tokens documents that matched your query.',
        'x-example': 5,
      }),
    tokens: z
      .array(ResourceTokenSchema)
      .openapi({ description: 'List of tokens.', 'x-example': '' }),
  })
  .openapi({
    description: 'Resource Tokens List',
    required: ['total', 'tokens'],
    example: { total: 5, tokens: '' },
  })
  .openapi('ResourceTokenList')

const TeamSchema = z
  .object({
    $id: z.string().openapi({ description: 'Team ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Team creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Team update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z.string().openapi({ description: 'Team name.', 'x-example': 'VIP' }),
    total: z.int32().openapi({ description: 'Total number of team members.', 'x-example': 7 }),
    prefs: z
      .object({})
      .openapi({
        description: 'Team preferences as a key-value object',
        'x-example': { theme: 'pink', timezone: 'UTC' },
      }),
  })
  .openapi({
    description: 'Team',
    required: ['$id', '$createdAt', '$updatedAt', 'name', 'total', 'prefs'],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'VIP',
      total: 7,
      prefs: { theme: 'pink', timezone: 'UTC' },
    },
  })
  .openapi('Team')

const TeamListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of teams documents that matched your query.',
        'x-example': 5,
      }),
    teams: z.array(TeamSchema).openapi({ description: 'List of teams.', 'x-example': '' }),
  })
  .openapi({
    description: 'Teams List',
    required: ['total', 'teams'],
    example: { total: 5, teams: '' },
  })
  .openapi('TeamList')

const MembershipSchema = z
  .object({
    $id: z.string().openapi({ description: 'Membership ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Membership creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Membership update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '5e5ea5c16897e' }),
    userName: z
      .string()
      .openapi({
        description:
          'User name. Hide this attribute by toggling membership privacy in the Console.',
        'x-example': 'John Doe',
      }),
    userEmail: z
      .string()
      .openapi({
        description:
          'User email address. Hide this attribute by toggling membership privacy in the Console.',
        'x-example': 'john@appwrite.io',
      }),
    teamId: z.string().openapi({ description: 'Team ID.', 'x-example': '5e5ea5c16897e' }),
    teamName: z.string().openapi({ description: 'Team name.', 'x-example': 'VIP' }),
    invited: z
      .string()
      .openapi({
        description: 'Date, the user has been invited to join the team in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    joined: z
      .string()
      .openapi({
        description:
          'Date, the user has accepted the invitation to join the team in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    confirm: z
      .boolean()
      .openapi({
        description:
          'User confirmation status, true if the user has joined the team or false otherwise.',
        'x-example': false,
      }),
    mfa: z
      .boolean()
      .openapi({
        description:
          'Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console.',
        'x-example': false,
      }),
    roles: z
      .array(z.string())
      .openapi({ description: 'User list of roles', 'x-example': ['owner'] }),
  })
  .openapi({
    description: 'Membership',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'userId',
      'userName',
      'userEmail',
      'teamId',
      'teamName',
      'invited',
      'joined',
      'confirm',
      'mfa',
      'roles',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      userId: '5e5ea5c16897e',
      userName: 'John Doe',
      userEmail: 'john@appwrite.io',
      teamId: '5e5ea5c16897e',
      teamName: 'VIP',
      invited: '2020-10-15T06:38:00.000+00:00',
      joined: '2020-10-15T06:38:00.000+00:00',
      confirm: false,
      mfa: false,
      roles: ['owner'],
    },
  })
  .openapi('Membership')

const MembershipListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of memberships documents that matched your query.',
        'x-example': 5,
      }),
    memberships: z
      .array(MembershipSchema)
      .openapi({ description: 'List of memberships.', 'x-example': '' }),
  })
  .openapi({
    description: 'Memberships List',
    required: ['total', 'memberships'],
    example: { total: 5, memberships: '' },
  })
  .openapi('MembershipList')

const VariableSchema = z
  .object({
    $id: z.string().openapi({ description: 'Variable ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Variable creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Variable creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    key: z.string().openapi({ description: 'Variable key.', 'x-example': 'API_KEY' }),
    value: z.string().openapi({ description: 'Variable value.', 'x-example': 'myPa$$word1' }),
    secret: z
      .boolean()
      .openapi({
        description:
          'Variable secret flag. Secret variables can only be updated or deleted, but never read.',
        'x-example': false,
      }),
    resourceType: z
      .string()
      .openapi({
        description:
          'Service to which the variable belongs. Possible values are "project", "function"',
        'x-example': 'function',
      }),
    resourceId: z
      .string()
      .openapi({
        description:
          'ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function.',
        'x-example': 'myAwesomeFunction',
      }),
  })
  .openapi({
    description: 'Variable',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'key',
      'value',
      'secret',
      'resourceType',
      'resourceId',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      key: 'API_KEY',
      value: 'myPa$$word1',
      secret: false,
      resourceType: 'function',
      resourceId: 'myAwesomeFunction',
    },
  })
  .openapi('Variable')

const SiteSchema = z
  .object({
    $id: z.string().openapi({ description: 'Site ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Site creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Site update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z.string().openapi({ description: 'Site name.', 'x-example': 'My Site' }),
    enabled: z.boolean().openapi({ description: 'Site enabled.', 'x-example': false }),
    live: z
      .boolean()
      .openapi({
        description:
          "Is the site deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration.",
        'x-example': false,
      }),
    logging: z
      .boolean()
      .openapi({
        description:
          'When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.',
        'x-example': false,
      }),
    framework: z.string().openapi({ description: 'Site framework.', 'x-example': 'react' }),
    deploymentId: z
      .string()
      .openapi({ description: "Site's active deployment ID.", 'x-example': '5e5ea5c16897e' }),
    deploymentCreatedAt: z
      .string()
      .openapi({
        description: 'Active deployment creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    deploymentScreenshotLight: z
      .string()
      .openapi({
        description: 'Screenshot of active deployment with light theme preference file ID.',
        'x-example': '5e5ea5c16897e',
      }),
    deploymentScreenshotDark: z
      .string()
      .openapi({
        description: 'Screenshot of active deployment with dark theme preference file ID.',
        'x-example': '5e5ea5c16897e',
      }),
    latestDeploymentId: z
      .string()
      .openapi({ description: "Site's latest deployment ID.", 'x-example': '5e5ea5c16897e' }),
    latestDeploymentCreatedAt: z
      .string()
      .openapi({
        description: 'Latest deployment creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    latestDeploymentStatus: z
      .string()
      .openapi({
        description:
          'Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".',
        'x-example': 'ready',
      }),
    vars: z.array(VariableSchema).openapi({ description: 'Site variables.', 'x-example': [] }),
    timeout: z
      .int32()
      .openapi({ description: 'Site request timeout in seconds.', 'x-example': 300 }),
    installCommand: z
      .string()
      .openapi({
        description: 'The install command used to install the site dependencies.',
        'x-example': 'npm install',
      }),
    buildCommand: z
      .string()
      .openapi({
        description: 'The build command used to build the site.',
        'x-example': 'npm run build',
      }),
    outputDirectory: z
      .string()
      .openapi({
        description: 'The directory where the site build output is located.',
        'x-example': 'build',
      }),
    installationId: z
      .string()
      .openapi({
        description: 'Site VCS (Version Control System) installation id.',
        'x-example': '6m40at4ejk5h2u9s1hboo',
      }),
    providerRepositoryId: z
      .string()
      .openapi({
        description: 'VCS (Version Control System) Repository ID',
        'x-example': 'appwrite',
      }),
    providerBranch: z
      .string()
      .openapi({ description: 'VCS (Version Control System) branch name', 'x-example': 'main' }),
    providerRootDirectory: z
      .string()
      .openapi({
        description: 'Path to site in VCS (Version Control System) repository',
        'x-example': 'sites/helloWorld',
      }),
    providerSilentMode: z
      .boolean()
      .openapi({
        description:
          'Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests',
        'x-example': false,
      }),
    specification: z
      .string()
      .openapi({
        description: 'Machine specification for builds and executions.',
        'x-example': 's-1vcpu-512mb',
      }),
    buildRuntime: z
      .string()
      .openapi({ description: 'Site build runtime.', 'x-example': 'node-22' }),
    adapter: z.string().openapi({ description: 'Site framework adapter.', 'x-example': 'static' }),
    fallbackFile: z
      .string()
      .openapi({
        description:
          'Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.',
        'x-example': 'index.html',
      }),
  })
  .openapi({
    description: 'Site',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'name',
      'enabled',
      'live',
      'logging',
      'framework',
      'deploymentId',
      'deploymentCreatedAt',
      'deploymentScreenshotLight',
      'deploymentScreenshotDark',
      'latestDeploymentId',
      'latestDeploymentCreatedAt',
      'latestDeploymentStatus',
      'vars',
      'timeout',
      'installCommand',
      'buildCommand',
      'outputDirectory',
      'installationId',
      'providerRepositoryId',
      'providerBranch',
      'providerRootDirectory',
      'providerSilentMode',
      'specification',
      'buildRuntime',
      'adapter',
      'fallbackFile',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'My Site',
      enabled: false,
      live: false,
      logging: false,
      framework: 'react',
      deploymentId: '5e5ea5c16897e',
      deploymentCreatedAt: '2020-10-15T06:38:00.000+00:00',
      deploymentScreenshotLight: '5e5ea5c16897e',
      deploymentScreenshotDark: '5e5ea5c16897e',
      latestDeploymentId: '5e5ea5c16897e',
      latestDeploymentCreatedAt: '2020-10-15T06:38:00.000+00:00',
      latestDeploymentStatus: 'ready',
      vars: [],
      timeout: 300,
      installCommand: 'npm install',
      buildCommand: 'npm run build',
      outputDirectory: 'build',
      installationId: '6m40at4ejk5h2u9s1hboo',
      providerRepositoryId: 'appwrite',
      providerBranch: 'main',
      providerRootDirectory: 'sites/helloWorld',
      providerSilentMode: false,
      specification: 's-1vcpu-512mb',
      buildRuntime: 'node-22',
      adapter: 'static',
      fallbackFile: 'index.html',
    },
  })
  .openapi('Site')

const SiteListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of sites documents that matched your query.',
        'x-example': 5,
      }),
    sites: z.array(SiteSchema).openapi({ description: 'List of sites.', 'x-example': '' }),
  })
  .openapi({
    description: 'Sites List',
    required: ['total', 'sites'],
    example: { total: 5, sites: '' },
  })
  .openapi('SiteList')

const FunctionSchema = z
  .object({
    $id: z.string().openapi({ description: 'Function ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Function creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Function update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    execute: z
      .array(z.string())
      .openapi({ description: 'Execution permissions.', 'x-example': 'users' }),
    name: z.string().openapi({ description: 'Function name.', 'x-example': 'My Function' }),
    enabled: z.boolean().openapi({ description: 'Function enabled.', 'x-example': false }),
    live: z
      .boolean()
      .openapi({
        description:
          "Is the function deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.",
        'x-example': false,
      }),
    logging: z
      .boolean()
      .openapi({
        description:
          'When disabled, executions will exclude logs and errors, and will be slightly faster.',
        'x-example': false,
      }),
    runtime: z
      .string()
      .openapi({ description: 'Function execution and build runtime.', 'x-example': 'python-3.8' }),
    deploymentId: z
      .string()
      .openapi({ description: "Function's active deployment ID.", 'x-example': '5e5ea5c16897e' }),
    deploymentCreatedAt: z
      .string()
      .openapi({
        description: 'Active deployment creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    latestDeploymentId: z
      .string()
      .openapi({ description: "Function's latest deployment ID.", 'x-example': '5e5ea5c16897e' }),
    latestDeploymentCreatedAt: z
      .string()
      .openapi({
        description: 'Latest deployment creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    latestDeploymentStatus: z
      .string()
      .openapi({
        description:
          'Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".',
        'x-example': 'ready',
      }),
    scopes: z
      .array(z.string())
      .openapi({ description: 'Allowed permission scopes.', 'x-example': 'users.read' }),
    vars: z.array(VariableSchema).openapi({ description: 'Function variables.', 'x-example': [] }),
    events: z
      .array(z.string())
      .openapi({ description: 'Function trigger events.', 'x-example': 'account.create' }),
    schedule: z
      .string()
      .openapi({
        description: 'Function execution schedule in CRON format.',
        'x-example': '5 4 * * *',
      }),
    timeout: z
      .int32()
      .openapi({ description: 'Function execution timeout in seconds.', 'x-example': 300 }),
    entrypoint: z
      .string()
      .openapi({
        description: 'The entrypoint file used to execute the deployment.',
        'x-example': 'index.js',
      }),
    commands: z
      .string()
      .openapi({
        description: 'The build command used to build the deployment.',
        'x-example': 'npm install',
      }),
    version: z
      .string()
      .openapi({
        description: 'Version of Open Runtimes used for the function.',
        'x-example': 'v2',
      }),
    installationId: z
      .string()
      .openapi({
        description: 'Function VCS (Version Control System) installation id.',
        'x-example': '6m40at4ejk5h2u9s1hboo',
      }),
    providerRepositoryId: z
      .string()
      .openapi({
        description: 'VCS (Version Control System) Repository ID',
        'x-example': 'appwrite',
      }),
    providerBranch: z
      .string()
      .openapi({ description: 'VCS (Version Control System) branch name', 'x-example': 'main' }),
    providerRootDirectory: z
      .string()
      .openapi({
        description: 'Path to function in VCS (Version Control System) repository',
        'x-example': 'functions/helloWorld',
      }),
    providerSilentMode: z
      .boolean()
      .openapi({
        description:
          'Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests',
        'x-example': false,
      }),
    specification: z
      .string()
      .openapi({
        description: 'Machine specification for builds and executions.',
        'x-example': 's-1vcpu-512mb',
      }),
  })
  .openapi({
    description: 'Function',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'execute',
      'name',
      'enabled',
      'live',
      'logging',
      'runtime',
      'deploymentId',
      'deploymentCreatedAt',
      'latestDeploymentId',
      'latestDeploymentCreatedAt',
      'latestDeploymentStatus',
      'scopes',
      'vars',
      'events',
      'schedule',
      'timeout',
      'entrypoint',
      'commands',
      'version',
      'installationId',
      'providerRepositoryId',
      'providerBranch',
      'providerRootDirectory',
      'providerSilentMode',
      'specification',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      execute: 'users',
      name: 'My Function',
      enabled: false,
      live: false,
      logging: false,
      runtime: 'python-3.8',
      deploymentId: '5e5ea5c16897e',
      deploymentCreatedAt: '2020-10-15T06:38:00.000+00:00',
      latestDeploymentId: '5e5ea5c16897e',
      latestDeploymentCreatedAt: '2020-10-15T06:38:00.000+00:00',
      latestDeploymentStatus: 'ready',
      scopes: 'users.read',
      vars: [],
      events: 'account.create',
      schedule: '5 4 * * *',
      timeout: 300,
      entrypoint: 'index.js',
      commands: 'npm install',
      version: 'v2',
      installationId: '6m40at4ejk5h2u9s1hboo',
      providerRepositoryId: 'appwrite',
      providerBranch: 'main',
      providerRootDirectory: 'functions/helloWorld',
      providerSilentMode: false,
      specification: 's-1vcpu-512mb',
    },
  })
  .openapi('Function')

const FunctionListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of functions documents that matched your query.',
        'x-example': 5,
      }),
    functions: z
      .array(FunctionSchema)
      .openapi({ description: 'List of functions.', 'x-example': '' }),
  })
  .openapi({
    description: 'Functions List',
    required: ['total', 'functions'],
    example: { total: 5, functions: '' },
  })
  .openapi('FunctionList')

const FrameworkAdapterSchema = z
  .object({
    key: z.string().openapi({ description: 'Adapter key.', 'x-example': 'static' }),
    installCommand: z
      .string()
      .openapi({
        description: 'Default command to download dependencies.',
        'x-example': 'npm install',
      }),
    buildCommand: z
      .string()
      .openapi({
        description: 'Default command to build site into output directory.',
        'x-example': 'npm run build',
      }),
    outputDirectory: z
      .string()
      .openapi({ description: 'Default output directory of build.', 'x-example': './dist' }),
    fallbackFile: z
      .string()
      .openapi({
        description:
          'Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.',
        'x-example': 'index.html',
      }),
  })
  .openapi({
    description: 'Framework Adapter',
    required: ['key', 'installCommand', 'buildCommand', 'outputDirectory', 'fallbackFile'],
    example: {
      key: 'static',
      installCommand: 'npm install',
      buildCommand: 'npm run build',
      outputDirectory: './dist',
      fallbackFile: 'index.html',
    },
  })
  .openapi('FrameworkAdapter')

const FrameworkSchema = z
  .object({
    key: z.string().openapi({ description: 'Framework key.', 'x-example': 'sveltekit' }),
    name: z.string().openapi({ description: 'Framework Name.', 'x-example': 'SvelteKit' }),
    buildRuntime: z
      .string()
      .openapi({ description: 'Default runtime version.', 'x-example': 'node-22' }),
    runtimes: z
      .array(z.string())
      .openapi({
        description: 'List of supported runtime versions.',
        'x-example': ['static-1', 'node-22'],
      }),
    adapters: z
      .array(FrameworkAdapterSchema)
      .openapi({
        description: 'List of supported adapters.',
        'x-example': [
          {
            key: 'static',
            buildRuntime: 'node-22',
            buildCommand: 'npm run build',
            installCommand: 'npm install',
            outputDirectory: './dist',
          },
        ],
      }),
  })
  .openapi({
    description: 'Framework',
    required: ['key', 'name', 'buildRuntime', 'runtimes', 'adapters'],
    example: {
      key: 'sveltekit',
      name: 'SvelteKit',
      buildRuntime: 'node-22',
      runtimes: ['static-1', 'node-22'],
      adapters: [
        {
          key: 'static',
          buildRuntime: 'node-22',
          buildCommand: 'npm run build',
          installCommand: 'npm install',
          outputDirectory: './dist',
        },
      ],
    },
  })
  .openapi('Framework')

const FrameworkListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of frameworks documents that matched your query.',
        'x-example': 5,
      }),
    frameworks: z
      .array(FrameworkSchema)
      .openapi({ description: 'List of frameworks.', 'x-example': '' }),
  })
  .openapi({
    description: 'Frameworks List',
    required: ['total', 'frameworks'],
    example: { total: 5, frameworks: '' },
  })
  .openapi('FrameworkList')

const RuntimeSchema = z
  .object({
    $id: z.string().openapi({ description: 'Runtime ID.', 'x-example': 'python-3.8' }),
    key: z.string().openapi({ description: 'Parent runtime key.', 'x-example': 'python' }),
    name: z.string().openapi({ description: 'Runtime Name.', 'x-example': 'Python' }),
    version: z.string().openapi({ description: 'Runtime version.', 'x-example': '3.8' }),
    base: z
      .string()
      .openapi({
        description: 'Base Docker image used to build the runtime.',
        'x-example': 'python:3.8-alpine',
      }),
    image: z
      .string()
      .openapi({
        description: 'Image name of Docker Hub.',
        'x-example': 'appwrite\\/runtime-for-python:3.8',
      }),
    logo: z.string().openapi({ description: 'Name of the logo image.', 'x-example': 'python.png' }),
    supports: z
      .array(z.string())
      .openapi({ description: 'List of supported architectures.', 'x-example': 'amd64' }),
  })
  .openapi({
    description: 'Runtime',
    required: ['$id', 'key', 'name', 'version', 'base', 'image', 'logo', 'supports'],
    example: {
      $id: 'python-3.8',
      key: 'python',
      name: 'Python',
      version: '3.8',
      base: 'python:3.8-alpine',
      image: 'appwrite\\/runtime-for-python:3.8',
      logo: 'python.png',
      supports: 'amd64',
    },
  })
  .openapi('Runtime')

const RuntimeListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of runtimes documents that matched your query.',
        'x-example': 5,
      }),
    runtimes: z.array(RuntimeSchema).openapi({ description: 'List of runtimes.', 'x-example': '' }),
  })
  .openapi({
    description: 'Runtimes List',
    required: ['total', 'runtimes'],
    example: { total: 5, runtimes: '' },
  })
  .openapi('RuntimeList')

const DeploymentSchema = z
  .object({
    $id: z.string().openapi({ description: 'Deployment ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Deployment creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Deployment update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    type: z.string().openapi({ description: 'Type of deployment.', 'x-example': 'vcs' }),
    resourceId: z.string().openapi({ description: 'Resource ID.', 'x-example': '5e5ea6g16897e' }),
    resourceType: z.string().openapi({ description: 'Resource type.', 'x-example': 'functions' }),
    entrypoint: z
      .string()
      .openapi({
        description: 'The entrypoint file to use to execute the deployment code.',
        'x-example': 'index.js',
      }),
    sourceSize: z.int32().openapi({ description: 'The code size in bytes.', 'x-example': 128 }),
    buildSize: z
      .int32()
      .openapi({ description: 'The build output size in bytes.', 'x-example': 128 }),
    totalSize: z
      .int32()
      .openapi({
        description: 'The total size in bytes (source and build output).',
        'x-example': 128,
      }),
    buildId: z
      .string()
      .openapi({ description: 'The current build ID.', 'x-example': '5e5ea5c16897e' }),
    activate: z
      .boolean()
      .openapi({
        description: 'Whether the deployment should be automatically activated.',
        'x-example': true,
      }),
    screenshotLight: z
      .string()
      .openapi({
        description: 'Screenshot with light theme preference file ID.',
        'x-example': '5e5ea5c16897e',
      }),
    screenshotDark: z
      .string()
      .openapi({
        description: 'Screenshot with dark theme preference file ID.',
        'x-example': '5e5ea5c16897e',
      }),
    status: z
      .string()
      .openapi({
        description:
          'The deployment status. Possible values are "waiting", "processing", "building", "ready", and "failed".',
        'x-example': 'ready',
      }),
    buildLogs: z
      .string()
      .openapi({ description: 'The build logs.', 'x-example': 'Compiling source files...' }),
    buildDuration: z
      .int32()
      .openapi({ description: 'The current build time in seconds.', 'x-example': 128 }),
    providerRepositoryName: z
      .string()
      .openapi({ description: 'The name of the vcs provider repository', 'x-example': 'database' }),
    providerRepositoryOwner: z
      .string()
      .openapi({
        description: 'The name of the vcs provider repository owner',
        'x-example': 'utopia',
      }),
    providerRepositoryUrl: z
      .string()
      .openapi({
        description: 'The url of the vcs provider repository',
        'x-example': 'https://github.com/vermakhushboo/g4-node-function',
      }),
    providerBranch: z
      .string()
      .openapi({ description: 'The branch of the vcs repository', 'x-example': '0.7.x' }),
    providerCommitHash: z
      .string()
      .openapi({ description: 'The commit hash of the vcs commit', 'x-example': '7c3f25d' }),
    providerCommitAuthorUrl: z
      .string()
      .openapi({
        description: 'The url of vcs commit author',
        'x-example': 'https://github.com/vermakhushboo',
      }),
    providerCommitAuthor: z
      .string()
      .openapi({ description: 'The name of vcs commit author', 'x-example': 'Khushboo Verma' }),
    providerCommitMessage: z
      .string()
      .openapi({ description: 'The commit message', 'x-example': 'Update index.js' }),
    providerCommitUrl: z
      .string()
      .openapi({
        description: 'The url of the vcs commit',
        'x-example':
          'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
      }),
    providerBranchUrl: z
      .string()
      .openapi({
        description: 'The branch of the vcs repository',
        'x-example': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',
      }),
  })
  .openapi({
    description: 'Deployment',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'type',
      'resourceId',
      'resourceType',
      'entrypoint',
      'sourceSize',
      'buildSize',
      'totalSize',
      'buildId',
      'activate',
      'screenshotLight',
      'screenshotDark',
      'status',
      'buildLogs',
      'buildDuration',
      'providerRepositoryName',
      'providerRepositoryOwner',
      'providerRepositoryUrl',
      'providerBranch',
      'providerCommitHash',
      'providerCommitAuthorUrl',
      'providerCommitAuthor',
      'providerCommitMessage',
      'providerCommitUrl',
      'providerBranchUrl',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      type: 'vcs',
      resourceId: '5e5ea6g16897e',
      resourceType: 'functions',
      entrypoint: 'index.js',
      sourceSize: 128,
      buildSize: 128,
      totalSize: 128,
      buildId: '5e5ea5c16897e',
      activate: true,
      screenshotLight: '5e5ea5c16897e',
      screenshotDark: '5e5ea5c16897e',
      status: 'ready',
      buildLogs: 'Compiling source files...',
      buildDuration: 128,
      providerRepositoryName: 'database',
      providerRepositoryOwner: 'utopia',
      providerRepositoryUrl: 'https://github.com/vermakhushboo/g4-node-function',
      providerBranch: '0.7.x',
      providerCommitHash: '7c3f25d',
      providerCommitAuthorUrl: 'https://github.com/vermakhushboo',
      providerCommitAuthor: 'Khushboo Verma',
      providerCommitMessage: 'Update index.js',
      providerCommitUrl:
        'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
      providerBranchUrl: 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',
    },
  })
  .openapi('Deployment')

const DeploymentListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of deployments documents that matched your query.',
        'x-example': 5,
      }),
    deployments: z
      .array(DeploymentSchema)
      .openapi({ description: 'List of deployments.', 'x-example': '' }),
  })
  .openapi({
    description: 'Deployments List',
    required: ['total', 'deployments'],
    example: { total: 5, deployments: '' },
  })
  .openapi('DeploymentList')

const HeadersSchema = z
  .object({
    name: z.string().openapi({ description: 'Header name.', 'x-example': 'Content-Type' }),
    value: z.string().openapi({ description: 'Header value.', 'x-example': 'application/json' }),
  })
  .openapi({
    description: 'Headers',
    required: ['name', 'value'],
    example: { name: 'Content-Type', value: 'application/json' },
  })
  .openapi('Headers')

const ExecutionSchema = z
  .object({
    $id: z.string().openapi({ description: 'Execution ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Execution creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Execution upate date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $permissions: z
      .array(z.string())
      .openapi({ description: 'Execution roles.', 'x-example': ['any'] }),
    functionId: z.string().openapi({ description: 'Function ID.', 'x-example': '5e5ea6g16897e' }),
    deploymentId: z
      .string()
      .openapi({
        description: "Function's deployment ID used to create the execution.",
        'x-example': '5e5ea5c16897e',
      }),
    trigger: z
      .string()
      .openapi({
        description:
          'The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.',
        'x-example': 'http',
      }),
    status: z
      .string()
      .openapi({
        description:
          'The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.',
        'x-example': 'processing',
      }),
    requestMethod: z
      .string()
      .openapi({ description: 'HTTP request method type.', 'x-example': 'GET' }),
    requestPath: z
      .string()
      .openapi({ description: 'HTTP request path and query.', 'x-example': '/articles?id=5' }),
    requestHeaders: z
      .array(HeadersSchema)
      .openapi({
        description:
          'HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.',
        'x-example': [{ 'Content-Type': 'application/json' }],
      }),
    responseStatusCode: z
      .int32()
      .openapi({ description: 'HTTP response status code.', 'x-example': 200 }),
    responseBody: z
      .string()
      .openapi({
        description:
          'HTTP response body. This will return empty unless execution is created as synchronous.',
        'x-example': '',
      }),
    responseHeaders: z
      .array(HeadersSchema)
      .openapi({
        description:
          'HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.',
        'x-example': [{ 'Content-Type': 'application/json' }],
      }),
    logs: z
      .string()
      .openapi({
        description:
          'Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.',
        'x-example': '',
      }),
    errors: z
      .string()
      .openapi({
        description:
          'Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.',
        'x-example': '',
      }),
    duration: z
      .float64()
      .openapi({
        description: 'Resource(function/site) execution duration in seconds.',
        'x-example': 0.4,
      }),
    scheduledAt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The scheduled time for execution. If left empty, execution will be queued immediately.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'Execution',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      '$permissions',
      'functionId',
      'deploymentId',
      'trigger',
      'status',
      'requestMethod',
      'requestPath',
      'requestHeaders',
      'responseStatusCode',
      'responseBody',
      'responseHeaders',
      'logs',
      'errors',
      'duration',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      $permissions: ['any'],
      functionId: '5e5ea6g16897e',
      deploymentId: '5e5ea5c16897e',
      trigger: 'http',
      status: 'processing',
      requestMethod: 'GET',
      requestPath: '/articles?id=5',
      requestHeaders: [{ 'Content-Type': 'application/json' }],
      responseStatusCode: 200,
      responseBody: '',
      responseHeaders: [{ 'Content-Type': 'application/json' }],
      logs: '',
      errors: '',
      duration: 0.4,
      scheduledAt: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('Execution')

const ExecutionListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of executions documents that matched your query.',
        'x-example': 5,
      }),
    executions: z
      .array(ExecutionSchema)
      .openapi({ description: 'List of executions.', 'x-example': '' }),
  })
  .openapi({
    description: 'Executions List',
    required: ['total', 'executions'],
    example: { total: 5, executions: '' },
  })
  .openapi('ExecutionList')

const CountrySchema = z
  .object({
    name: z.string().openapi({ description: 'Country name.', 'x-example': 'United States' }),
    code: z
      .string()
      .openapi({ description: 'Country two-character ISO 3166-1 alpha code.', 'x-example': 'US' }),
  })
  .openapi({
    description: 'Country',
    required: ['name', 'code'],
    example: { name: 'United States', code: 'US' },
  })
  .openapi('Country')

const CountryListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of countries documents that matched your query.',
        'x-example': 5,
      }),
    countries: z
      .array(CountrySchema)
      .openapi({ description: 'List of countries.', 'x-example': '' }),
  })
  .openapi({
    description: 'Countries List',
    required: ['total', 'countries'],
    example: { total: 5, countries: '' },
  })
  .openapi('CountryList')

const ContinentSchema = z
  .object({
    name: z.string().openapi({ description: 'Continent name.', 'x-example': 'Europe' }),
    code: z.string().openapi({ description: 'Continent two letter code.', 'x-example': 'EU' }),
  })
  .openapi({
    description: 'Continent',
    required: ['name', 'code'],
    example: { name: 'Europe', code: 'EU' },
  })
  .openapi('Continent')

const ContinentListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of continents documents that matched your query.',
        'x-example': 5,
      }),
    continents: z
      .array(ContinentSchema)
      .openapi({ description: 'List of continents.', 'x-example': '' }),
  })
  .openapi({
    description: 'Continents List',
    required: ['total', 'continents'],
    example: { total: 5, continents: '' },
  })
  .openapi('ContinentList')

const LanguageSchema = z
  .object({
    name: z.string().openapi({ description: 'Language name.', 'x-example': 'Italian' }),
    code: z
      .string()
      .openapi({ description: 'Language two-character ISO 639-1 codes.', 'x-example': 'it' }),
    nativeName: z
      .string()
      .openapi({ description: 'Language native name.', 'x-example': 'Italiano' }),
  })
  .openapi({
    description: 'Language',
    required: ['name', 'code', 'nativeName'],
    example: { name: 'Italian', code: 'it', nativeName: 'Italiano' },
  })
  .openapi('Language')

const LanguageListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of languages documents that matched your query.',
        'x-example': 5,
      }),
    languages: z
      .array(LanguageSchema)
      .openapi({ description: 'List of languages.', 'x-example': '' }),
  })
  .openapi({
    description: 'Languages List',
    required: ['total', 'languages'],
    example: { total: 5, languages: '' },
  })
  .openapi('LanguageList')

const CurrencySchema = z
  .object({
    symbol: z.string().openapi({ description: 'Currency symbol.', 'x-example': '$' }),
    name: z.string().openapi({ description: 'Currency name.', 'x-example': 'US dollar' }),
    symbolNative: z.string().openapi({ description: 'Currency native symbol.', 'x-example': '$' }),
    decimalDigits: z.int32().openapi({ description: 'Number of decimal digits.', 'x-example': 2 }),
    rounding: z.float64().openapi({ description: 'Currency digit rounding.', 'x-example': 0 }),
    code: z
      .string()
      .openapi({
        description:
          'Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.',
        'x-example': 'USD',
      }),
    namePlural: z
      .string()
      .openapi({ description: 'Currency plural name', 'x-example': 'US dollars' }),
  })
  .openapi({
    description: 'Currency',
    required: ['symbol', 'name', 'symbolNative', 'decimalDigits', 'rounding', 'code', 'namePlural'],
    example: {
      symbol: '$',
      name: 'US dollar',
      symbolNative: '$',
      decimalDigits: 2,
      rounding: 0,
      code: 'USD',
      namePlural: 'US dollars',
    },
  })
  .openapi('Currency')

const CurrencyListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of currencies documents that matched your query.',
        'x-example': 5,
      }),
    currencies: z
      .array(CurrencySchema)
      .openapi({ description: 'List of currencies.', 'x-example': '' }),
  })
  .openapi({
    description: 'Currencies List',
    required: ['total', 'currencies'],
    example: { total: 5, currencies: '' },
  })
  .openapi('CurrencyList')

const PhoneSchema = z
  .object({
    code: z.string().openapi({ description: 'Phone code.', 'x-example': '+1' }),
    countryCode: z
      .string()
      .openapi({ description: 'Country two-character ISO 3166-1 alpha code.', 'x-example': 'US' }),
    countryName: z.string().openapi({ description: 'Country name.', 'x-example': 'United States' }),
  })
  .openapi({
    description: 'Phone',
    required: ['code', 'countryCode', 'countryName'],
    example: { code: '+1', countryCode: 'US', countryName: 'United States' },
  })
  .openapi('Phone')

const PhoneListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of phones documents that matched your query.',
        'x-example': 5,
      }),
    phones: z.array(PhoneSchema).openapi({ description: 'List of phones.', 'x-example': '' }),
  })
  .openapi({
    description: 'Phones List',
    required: ['total', 'phones'],
    example: { total: 5, phones: '' },
  })
  .openapi('PhoneList')

const VariableListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of variables documents that matched your query.',
        'x-example': 5,
      }),
    variables: z
      .array(VariableSchema)
      .openapi({ description: 'List of variables.', 'x-example': '' }),
  })
  .openapi({
    description: 'Variables List',
    required: ['total', 'variables'],
    example: { total: 5, variables: '' },
  })
  .openapi('VariableList')

const LocaleCodeSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)',
        'x-example': 'en-us',
      }),
    name: z.string().openapi({ description: 'Locale name', 'x-example': 'US' }),
  })
  .openapi({
    description: 'LocaleCode',
    required: ['code', 'name'],
    example: { code: 'en-us', name: 'US' },
  })
  .openapi('LocaleCode')

const LocaleCodeListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of localeCodes documents that matched your query.',
        'x-example': 5,
      }),
    localeCodes: z
      .array(LocaleCodeSchema)
      .openapi({ description: 'List of localeCodes.', 'x-example': '' }),
  })
  .openapi({
    description: 'Locale codes list',
    required: ['total', 'localeCodes'],
    example: { total: 5, localeCodes: '' },
  })
  .openapi('LocaleCodeList')

const ProviderSchema = z
  .object({
    $id: z.string().openapi({ description: 'Provider ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Provider creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Provider update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z
      .string()
      .openapi({ description: 'The name for the provider instance.', 'x-example': 'Mailgun' }),
    provider: z
      .string()
      .openapi({ description: 'The name of the provider service.', 'x-example': 'mailgun' }),
    enabled: z.boolean().openapi({ description: 'Is provider enabled?', 'x-example': true }),
    type: z.string().openapi({ description: 'Type of provider.', 'x-example': 'sms' }),
    credentials: z
      .object({})
      .openapi({ description: 'Provider credentials.', 'x-example': { key: '123456789' } }),
    options: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Provider options.',
        'x-example': { from: 'sender-email@mydomain' },
      }),
  })
  .openapi({
    description: 'Provider',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'name',
      'provider',
      'enabled',
      'type',
      'credentials',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'Mailgun',
      provider: 'mailgun',
      enabled: true,
      type: 'sms',
      credentials: { key: '123456789' },
      options: { from: 'sender-email@mydomain' },
    },
  })
  .openapi('Provider')

const ProviderListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of providers documents that matched your query.',
        'x-example': 5,
      }),
    providers: z
      .array(ProviderSchema)
      .openapi({ description: 'List of providers.', 'x-example': '' }),
  })
  .openapi({
    description: 'Provider list',
    required: ['total', 'providers'],
    example: { total: 5, providers: '' },
  })
  .openapi('ProviderList')

const MessageSchema = z
  .object({
    $id: z.string().openapi({ description: 'Message ID.', 'x-example': '5e5ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Message creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Message update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    providerType: z
      .string()
      .openapi({ description: 'Message provider type.', 'x-example': 'email' }),
    topics: z
      .array(z.string())
      .openapi({ description: 'Topic IDs set as recipients.', 'x-example': ['5e5ea5c16897e'] }),
    users: z
      .array(z.string())
      .openapi({ description: 'User IDs set as recipients.', 'x-example': ['5e5ea5c16897e'] }),
    targets: z
      .array(z.string())
      .openapi({ description: 'Target IDs set as recipients.', 'x-example': ['5e5ea5c16897e'] }),
    scheduledAt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The scheduled time for message.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    deliveredAt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The time when the message was delivered.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    deliveryErrors: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Delivery errors if any.',
        'x-example': ['Failed to send message to target 5e5ea5c16897e: Credentials not valid.'],
      }),
    deliveredTotal: z
      .int32()
      .openapi({
        description: 'Number of recipients the message was delivered to.',
        'x-example': 1,
      }),
    data: z
      .object({})
      .openapi({
        description: 'Data of the message.',
        'x-example': {
          subject: 'Welcome to Appwrite',
          content: 'Hi there, welcome to Appwrite family.',
        },
      }),
    status: z
      .string()
      .openapi({
        description: 'Status of delivery.',
        'x-example':
          'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',
      }),
  })
  .openapi({
    description: 'Message',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'providerType',
      'topics',
      'users',
      'targets',
      'deliveredTotal',
      'data',
      'status',
    ],
    example: {
      $id: '5e5ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      providerType: 'email',
      topics: ['5e5ea5c16897e'],
      users: ['5e5ea5c16897e'],
      targets: ['5e5ea5c16897e'],
      scheduledAt: '2020-10-15T06:38:00.000+00:00',
      deliveredAt: '2020-10-15T06:38:00.000+00:00',
      deliveryErrors: ['Failed to send message to target 5e5ea5c16897e: Credentials not valid.'],
      deliveredTotal: 1,
      data: { subject: 'Welcome to Appwrite', content: 'Hi there, welcome to Appwrite family.' },
      status:
        'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',
    },
  })
  .openapi('Message')

const MessageListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of messages documents that matched your query.',
        'x-example': 5,
      }),
    messages: z.array(MessageSchema).openapi({ description: 'List of messages.', 'x-example': '' }),
  })
  .openapi({
    description: 'Message list',
    required: ['total', 'messages'],
    example: { total: 5, messages: '' },
  })
  .openapi('MessageList')

const TopicSchema = z
  .object({
    $id: z.string().openapi({ description: 'Topic ID.', 'x-example': '259125845563242502' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Topic creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Topic update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    name: z.string().openapi({ description: 'The name of the topic.', 'x-example': 'events' }),
    emailTotal: z
      .int32()
      .openapi({
        description: 'Total count of email subscribers subscribed to the topic.',
        'x-example': 100,
      }),
    smsTotal: z
      .int32()
      .openapi({
        description: 'Total count of SMS subscribers subscribed to the topic.',
        'x-example': 100,
      }),
    pushTotal: z
      .int32()
      .openapi({
        description: 'Total count of push subscribers subscribed to the topic.',
        'x-example': 100,
      }),
    subscribe: z
      .array(z.string())
      .openapi({ description: 'Subscribe permissions.', 'x-example': 'users' }),
  })
  .openapi({
    description: 'Topic',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'name',
      'emailTotal',
      'smsTotal',
      'pushTotal',
      'subscribe',
    ],
    example: {
      $id: '259125845563242502',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      name: 'events',
      emailTotal: 100,
      smsTotal: 100,
      pushTotal: 100,
      subscribe: 'users',
    },
  })
  .openapi('Topic')

const TopicListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of topics documents that matched your query.',
        'x-example': 5,
      }),
    topics: z.array(TopicSchema).openapi({ description: 'List of topics.', 'x-example': '' }),
  })
  .openapi({
    description: 'Topic list',
    required: ['total', 'topics'],
    example: { total: 5, topics: '' },
  })
  .openapi('TopicList')

const SubscriberSchema = z
  .object({
    $id: z.string().openapi({ description: 'Subscriber ID.', 'x-example': '259125845563242502' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Subscriber creation time in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    $updatedAt: z
      .string()
      .openapi({
        description: 'Subscriber update date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    targetId: z.string().openapi({ description: 'Target ID.', 'x-example': '259125845563242502' }),
    target: z
      .object({})
      .openapi({
        description: 'Target.',
        'x-example': {
          $id: '259125845563242502',
          $createdAt: '2020-10-15T06:38:00.000+00:00',
          $updatedAt: '2020-10-15T06:38:00.000+00:00',
          providerType: 'email',
          providerId: '259125845563242502',
          name: 'ageon-app-email',
          identifier: 'random-mail@email.org',
          userId: '5e5ea5c16897e',
        },
      }),
    userId: z.string().openapi({ description: 'Topic ID.', 'x-example': '5e5ea5c16897e' }),
    userName: z.string().openapi({ description: 'User Name.', 'x-example': 'Aegon Targaryen' }),
    topicId: z.string().openapi({ description: 'Topic ID.', 'x-example': '259125845563242502' }),
    providerType: z
      .string()
      .openapi({
        description:
          'The target provider type. Can be one of the following: `email`, `sms` or `push`.',
        'x-example': 'email',
      }),
  })
  .openapi({
    description: 'Subscriber',
    required: [
      '$id',
      '$createdAt',
      '$updatedAt',
      'targetId',
      'target',
      'userId',
      'userName',
      'topicId',
      'providerType',
    ],
    example: {
      $id: '259125845563242502',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      $updatedAt: '2020-10-15T06:38:00.000+00:00',
      targetId: '259125845563242502',
      target: {
        $id: '259125845563242502',
        $createdAt: '2020-10-15T06:38:00.000+00:00',
        $updatedAt: '2020-10-15T06:38:00.000+00:00',
        providerType: 'email',
        providerId: '259125845563242502',
        name: 'ageon-app-email',
        identifier: 'random-mail@email.org',
        userId: '5e5ea5c16897e',
      },
      userId: '5e5ea5c16897e',
      userName: 'Aegon Targaryen',
      topicId: '259125845563242502',
      providerType: 'email',
    },
  })
  .openapi('Subscriber')

const SubscriberListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of subscribers documents that matched your query.',
        'x-example': 5,
      }),
    subscribers: z
      .array(SubscriberSchema)
      .openapi({ description: 'List of subscribers.', 'x-example': '' }),
  })
  .openapi({
    description: 'Subscriber list',
    required: ['total', 'subscribers'],
    example: { total: 5, subscribers: '' },
  })
  .openapi('SubscriberList')

const TargetListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of targets documents that matched your query.',
        'x-example': 5,
      }),
    targets: z.array(TargetSchema).openapi({ description: 'List of targets.', 'x-example': '' }),
  })
  .openapi({
    description: 'Target list',
    required: ['total', 'targets'],
    example: { total: 5, targets: '' },
  })
  .openapi('TargetList')

const SpecificationSchema = z
  .object({
    memory: z.int32().openapi({ description: 'Memory size in MB.', 'x-example': 512 }),
    cpus: z.float64().openapi({ description: 'Number of CPUs.', 'x-example': 1 }),
    enabled: z.boolean().openapi({ description: 'Is size enabled.', 'x-example': true }),
    slug: z.string().openapi({ description: 'Size slug.', 'x-example': 's-1vcpu-512mb' }),
  })
  .openapi({
    description: 'Specification',
    required: ['memory', 'cpus', 'enabled', 'slug'],
    example: { memory: 512, cpus: 1, enabled: true, slug: 's-1vcpu-512mb' },
  })
  .openapi('Specification')

const SpecificationListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of specifications documents that matched your query.',
        'x-example': 5,
      }),
    specifications: z
      .array(SpecificationSchema)
      .openapi({ description: 'List of specifications.', 'x-example': '' }),
  })
  .openapi({
    description: 'Specifications List',
    required: ['total', 'specifications'],
    example: { total: 5, specifications: '' },
  })
  .openapi('SpecificationList')

const AttributeListSchema = z
  .object({
    total: z
      .int32()
      .openapi({
        description: 'Total number of attributes in the given collection.',
        'x-example': 5,
      }),
    attributes: z
      .array(
        z.union([
          AttributeBooleanSchema,
          AttributeIntegerSchema,
          AttributeFloatSchema,
          AttributeEmailSchema,
          AttributeEnumSchema,
          AttributeUrlSchema,
          AttributeIpSchema,
          AttributeDatetimeSchema,
          AttributeRelationshipSchema,
          AttributeStringSchema,
        ]),
      )
      .openapi({ description: 'List of attributes.', 'x-example': '' }),
  })
  .openapi({
    description: 'Attributes List',
    required: ['total', 'attributes'],
    example: { total: 5, attributes: '' },
  })
  .openapi('AttributeList')

const AlgoMd5Schema = z
  .object({ type: z.string().openapi({ description: 'Algo type.', 'x-example': 'md5' }) })
  .openapi({ description: 'AlgoMD5', required: ['type'], example: { type: 'md5' } })
  .openapi('AlgoMd5')

const AlgoShaSchema = z
  .object({ type: z.string().openapi({ description: 'Algo type.', 'x-example': 'sha' }) })
  .openapi({ description: 'AlgoSHA', required: ['type'], example: { type: 'sha' } })
  .openapi('AlgoSha')

const AlgoPhpassSchema = z
  .object({ type: z.string().openapi({ description: 'Algo type.', 'x-example': 'phpass' }) })
  .openapi({ description: 'AlgoPHPass', required: ['type'], example: { type: 'phpass' } })
  .openapi('AlgoPhpass')

const AlgoBcryptSchema = z
  .object({ type: z.string().openapi({ description: 'Algo type.', 'x-example': 'bcrypt' }) })
  .openapi({ description: 'AlgoBcrypt', required: ['type'], example: { type: 'bcrypt' } })
  .openapi('AlgoBcrypt')

const AlgoScryptSchema = z
  .object({
    type: z.string().openapi({ description: 'Algo type.', 'x-example': 'scrypt' }),
    costCpu: z.int32().openapi({ description: 'CPU complexity of computed hash.', 'x-example': 8 }),
    costMemory: z
      .int32()
      .openapi({ description: 'Memory complexity of computed hash.', 'x-example': 14 }),
    costParallel: z
      .int32()
      .openapi({ description: 'Parallelization of computed hash.', 'x-example': 1 }),
    length: z.int32().openapi({ description: 'Length used to compute hash.', 'x-example': 64 }),
  })
  .openapi({
    description: 'AlgoScrypt',
    required: ['type', 'costCpu', 'costMemory', 'costParallel', 'length'],
    example: { type: 'scrypt', costCpu: 8, costMemory: 14, costParallel: 1, length: 64 },
  })
  .openapi('AlgoScrypt')

const AlgoScryptModifiedSchema = z
  .object({
    type: z.string().openapi({ description: 'Algo type.', 'x-example': 'scryptMod' }),
    salt: z
      .string()
      .openapi({ description: 'Salt used to compute hash.', 'x-example': 'UxLMreBr6tYyjQ==' }),
    saltSeparator: z
      .string()
      .openapi({ description: 'Separator used to compute hash.', 'x-example': 'Bw==' }),
    signerKey: z
      .string()
      .openapi({
        description: 'Key used to compute hash.',
        'x-example':
          'XyEKE9RcTDeLEsL/RjwPDBv/RqDl8fb3gpYEOQaPihbxf1ZAtSOHCjuAAa7Q3oHpCYhXSN9tizHgVOwn6krflQ==',
      }),
  })
  .openapi({
    description: 'AlgoScryptModified',
    required: ['type', 'salt', 'saltSeparator', 'signerKey'],
    example: {
      type: 'scryptMod',
      salt: 'UxLMreBr6tYyjQ==',
      saltSeparator: 'Bw==',
      signerKey:
        'XyEKE9RcTDeLEsL/RjwPDBv/RqDl8fb3gpYEOQaPihbxf1ZAtSOHCjuAAa7Q3oHpCYhXSN9tizHgVOwn6krflQ==',
    },
  })
  .openapi('AlgoScryptModified')

const AlgoArgon2Schema = z
  .object({
    type: z.string().openapi({ description: 'Algo type.', 'x-example': 'argon2' }),
    memoryCost: z
      .int32()
      .openapi({ description: 'Memory used to compute hash.', 'x-example': 65536 }),
    timeCost: z
      .int32()
      .openapi({ description: 'Amount of time consumed to compute hash', 'x-example': 4 }),
    threads: z
      .int32()
      .openapi({ description: 'Number of threads used to compute hash.', 'x-example': 3 }),
  })
  .openapi({
    description: 'AlgoArgon2',
    required: ['type', 'memoryCost', 'timeCost', 'threads'],
    example: { type: 'argon2', memoryCost: 65536, timeCost: 4, threads: 3 },
  })
  .openapi('AlgoArgon2')

const PreferencesSchema = z
  .looseObject({})
  .openapi({
    description: 'Preferences',
    example: { language: 'en', timezone: 'UTC', darkTheme: true },
  })
  .openapi('Preferences')

const TokenSchema = z
  .object({
    $id: z.string().openapi({ description: 'Token ID.', 'x-example': 'bb8ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Token creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '5e5ea5c168bb8' }),
    secret: z
      .string()
      .openapi({
        description:
          'Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.',
        'x-example': '',
      }),
    expire: z
      .string()
      .openapi({
        description: 'Token expiration date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    phrase: z
      .string()
      .openapi({
        description:
          'Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email.',
        'x-example': 'Golden Fox',
      }),
  })
  .openapi({
    description: 'Token',
    required: ['$id', '$createdAt', 'userId', 'secret', 'expire', 'phrase'],
    example: {
      $id: 'bb8ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      userId: '5e5ea5c168bb8',
      secret: '',
      expire: '2020-10-15T06:38:00.000+00:00',
      phrase: 'Golden Fox',
    },
  })
  .openapi('Token')

const JwtSchema = z
  .object({
    jwt: z
      .string()
      .openapi({
        description: 'JWT encoded string.',
        'x-example':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }),
  })
  .openapi({
    description: 'JWT',
    required: ['jwt'],
    example: {
      jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    },
  })
  .openapi('Jwt')

const LocaleSchema = z
  .object({
    ip: z.string().openapi({ description: 'User IP address.', 'x-example': '127.0.0.1' }),
    countryCode: z
      .string()
      .openapi({
        description:
          'Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format',
        'x-example': 'US',
      }),
    country: z
      .string()
      .openapi({
        description: 'Country name. This field support localization.',
        'x-example': 'United States',
      }),
    continentCode: z
      .string()
      .openapi({
        description:
          'Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.',
        'x-example': 'NA',
      }),
    continent: z
      .string()
      .openapi({
        description: 'Continent name. This field support localization.',
        'x-example': 'North America',
      }),
    eu: z
      .boolean()
      .openapi({
        description: 'True if country is part of the European Union.',
        'x-example': false,
      }),
    currency: z
      .string()
      .openapi({
        description:
          'Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format',
        'x-example': 'USD',
      }),
  })
  .openapi({
    description: 'Locale',
    required: ['ip', 'countryCode', 'country', 'continentCode', 'continent', 'eu', 'currency'],
    example: {
      ip: '127.0.0.1',
      countryCode: 'US',
      country: 'United States',
      continentCode: 'NA',
      continent: 'North America',
      eu: false,
      currency: 'USD',
    },
  })
  .openapi('Locale')

const HealthAntivirusSchema = z
  .object({
    version: z.string().openapi({ description: 'Antivirus version.', 'x-example': '1.0.0' }),
    status: z
      .string()
      .openapi({
        description: 'Antivirus status. Possible values can are: `disabled`, `offline`, `online`',
        'x-example': 'online',
      }),
  })
  .openapi({
    description: 'Health Antivirus',
    required: ['version', 'status'],
    example: { version: '1.0.0', status: 'online' },
  })
  .openapi('HealthAntivirus')

const HealthQueueSchema = z
  .object({
    size: z.int32().openapi({ description: 'Amount of actions in the queue.', 'x-example': 8 }),
  })
  .openapi({ description: 'Health Queue', required: ['size'], example: { size: 8 } })
  .openapi('HealthQueue')

const HealthStatusSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the service.', 'x-example': 'database' }),
    ping: z
      .int32()
      .openapi({
        description: 'Duration in milliseconds how long the health check took.',
        'x-example': 128,
      }),
    status: z
      .string()
      .openapi({
        description: 'Service status. Possible values can are: `pass`, `fail`',
        'x-example': 'pass',
      }),
  })
  .openapi({
    description: 'Health Status',
    required: ['name', 'ping', 'status'],
    example: { name: 'database', ping: 128, status: 'pass' },
  })
  .openapi('HealthStatus')

const HealthCertificateSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Certificate name', 'x-example': '/CN=www.google.com' }),
    subjectSN: z.string().openapi({ description: 'Subject SN', 'x-example': '' }),
    issuerOrganisation: z.string().openapi({ description: 'Issuer organisation', 'x-example': '' }),
    validFrom: z.string().openapi({ description: 'Valid from', 'x-example': '1704200998' }),
    validTo: z.string().openapi({ description: 'Valid to', 'x-example': '1711458597' }),
    signatureTypeSN: z
      .string()
      .openapi({ description: 'Signature type SN', 'x-example': 'RSA-SHA256' }),
  })
  .openapi({
    description: 'Health Certificate',
    required: [
      'name',
      'subjectSN',
      'issuerOrganisation',
      'validFrom',
      'validTo',
      'signatureTypeSN',
    ],
    example: {
      name: '/CN=www.google.com',
      subjectSN: '',
      issuerOrganisation: '',
      validFrom: '1704200998',
      validTo: '1711458597',
      signatureTypeSN: 'RSA-SHA256',
    },
  })
  .openapi('HealthCertificate')

const HealthTimeSchema = z
  .object({
    remoteTime: z
      .int32()
      .openapi({
        description: 'Current unix timestamp on trustful remote server.',
        'x-example': 1639490751,
      }),
    localTime: z
      .int32()
      .openapi({
        description: 'Current unix timestamp of local server where Appwrite runs.',
        'x-example': 1639490844,
      }),
    diff: z
      .int32()
      .openapi({
        description: 'Difference of unix remote and local timestamps in milliseconds.',
        'x-example': 93,
      }),
  })
  .openapi({
    description: 'Health Time',
    required: ['remoteTime', 'localTime', 'diff'],
    example: { remoteTime: 1639490751, localTime: 1639490844, diff: 93 },
  })
  .openapi('HealthTime')

const MfaChallengeSchema = z
  .object({
    $id: z.string().openapi({ description: 'Token ID.', 'x-example': 'bb8ea5c16897e' }),
    $createdAt: z
      .string()
      .openapi({
        description: 'Token creation date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
    userId: z.string().openapi({ description: 'User ID.', 'x-example': '5e5ea5c168bb8' }),
    expire: z
      .string()
      .openapi({
        description: 'Token expiration date in ISO 8601 format.',
        'x-example': '2020-10-15T06:38:00.000+00:00',
      }),
  })
  .openapi({
    description: 'MFA Challenge',
    required: ['$id', '$createdAt', 'userId', 'expire'],
    example: {
      $id: 'bb8ea5c16897e',
      $createdAt: '2020-10-15T06:38:00.000+00:00',
      userId: '5e5ea5c168bb8',
      expire: '2020-10-15T06:38:00.000+00:00',
    },
  })
  .openapi('MfaChallenge')

const MfaRecoveryCodesSchema = z
  .object({
    recoveryCodes: z
      .array(z.string())
      .openapi({ description: 'Recovery codes.', 'x-example': ['a3kf0-s0cl2', 's0co1-as98s'] }),
  })
  .openapi({
    description: 'MFA Recovery Codes',
    required: ['recoveryCodes'],
    example: { recoveryCodes: ['a3kf0-s0cl2', 's0co1-as98s'] },
  })
  .openapi('MfaRecoveryCodes')

const MfaTypeSchema = z
  .object({
    secret: z
      .string()
      .openapi({ description: 'Secret token used for TOTP factor.', 'x-example': true }),
    uri: z.string().openapi({ description: 'URI for authenticator apps.', 'x-example': true }),
  })
  .openapi({
    description: 'MFAType',
    required: ['secret', 'uri'],
    example: { secret: true, uri: true },
  })
  .openapi('MfaType')

const MfaFactorsSchema = z
  .object({
    totp: z
      .boolean()
      .openapi({
        description: 'Can TOTP be used for MFA challenge for this account.',
        'x-example': true,
      }),
    phone: z
      .boolean()
      .openapi({
        description: 'Can phone (SMS) be used for MFA challenge for this account.',
        'x-example': true,
      }),
    email: z
      .boolean()
      .openapi({
        description: 'Can email be used for MFA challenge for this account.',
        'x-example': true,
      }),
    recoveryCode: z
      .boolean()
      .openapi({
        description: 'Can recovery code be used for MFA challenge for this account.',
        'x-example': true,
      }),
  })
  .openapi({
    description: 'MFAFactors',
    required: ['totp', 'phone', 'email', 'recoveryCode'],
    example: { totp: true, phone: true, email: true, recoveryCode: true },
  })
  .openapi('MfaFactors')

const ProjectSecurityScheme = {
  type: 'apiKey',
  name: 'X-Appwrite-Project',
  description: 'Your project ID',
  in: 'header',
  'x-appwrite': { demo: '<YOUR_PROJECT_ID>' },
}

const KeySecurityScheme = {
  type: 'apiKey',
  name: 'X-Appwrite-Key',
  description: 'Your secret API key',
  in: 'header',
  'x-appwrite': { demo: '<YOUR_API_KEY>' },
}

const JWTSecurityScheme = {
  type: 'apiKey',
  name: 'X-Appwrite-JWT',
  description: 'Your secret JSON Web Token',
  in: 'header',
}

const LocaleSecurityScheme = {
  type: 'apiKey',
  name: 'X-Appwrite-Locale',
  description: '',
  in: 'header',
  'x-appwrite': { demo: 'en' },
}

const SessionSecurityScheme = {
  type: 'apiKey',
  name: 'X-Appwrite-Session',
  description: 'The user session to authenticate with',
  in: 'header',
}

const ForwardedUserAgentSecurityScheme = {
  type: 'apiKey',
  name: 'X-Forwarded-User-Agent',
  description: 'The user agent string of the client that made the request',
  in: 'header',
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['account'],
  summary: 'Get account',
  description: 'Get the currently logged in user.',
  operationId: 'accountGet',
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountRoute = createRoute({
  method: 'post',
  path: '/account',
  tags: ['account'],
  summary: 'Create account',
  description:
    'Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).',
  operationId: 'accountCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'New user password. Must be between 8 and 256 chars.',
                  'x-example': null,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [] }],
})

export const patchAccountEmailRoute = createRoute({
  method: 'patch',
  path: '/account/email',
  tags: ['account'],
  summary: 'Update email',
  description:
    'Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.\nThis endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.\n',
  operationId: 'accountUpdateEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password. Must be at least 8 chars.',
                  'x-example': 'password',
                }),
            })
            .openapi({ required: ['email', 'password'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getAccountIdentitiesRoute = createRoute({
  method: 'get',
  path: '/account/identities',
  tags: ['account'],
  summary: 'List identities',
  description: 'Get the list of identities for the currently logged in user.',
  operationId: 'accountListIdentities',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Identities List',
      content: { 'application/json': { schema: IdentityListSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const deleteAccountIdentitiesIdentityIdRoute = createRoute({
  method: 'delete',
  path: '/account/identities/{identityId}',
  tags: ['account'],
  summary: 'Delete identity',
  description: 'Delete an identity by its unique ID.',
  operationId: 'accountDeleteIdentity',
  request: {
    params: z.object({
      identityId: z
        .string()
        .openapi({
          param: {
            name: 'identityId',
            description: 'Identity ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<IDENTITY_ID>' },
            in: 'path',
          },
          'x-example': '<IDENTITY_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountJwtsRoute = createRoute({
  method: 'post',
  path: '/account/jwts',
  tags: ['account'],
  summary: 'Create JWT',
  description:
    'Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.',
  operationId: 'accountCreateJWT',
  responses: {
    201: { description: 'JWT', content: { 'application/json': { schema: JwtSchema } } },
  },
  security: [{ Project: [] }],
})

export const getAccountLogsRoute = createRoute({
  method: 'get',
  path: '/account/logs',
  tags: ['account'],
  summary: 'List logs',
  description:
    'Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.',
  operationId: 'accountListLogs',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountMfaRoute = createRoute({
  method: 'patch',
  path: '/account/mfa',
  tags: ['account'],
  summary: 'Update MFA',
  description: 'Enable or disable MFA on an account.',
  operationId: 'accountUpdateMFA',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mfa: z
                .boolean()
                .openapi({ description: 'Enable or disable MFA.', 'x-example': false }),
            })
            .openapi({ required: ['mfa'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const putAccountMfaAuthenticatorsTypeRoute = createRoute({
  method: 'put',
  path: '/account/mfa/authenticators/{type}',
  tags: ['account'],
  summary: 'Update authenticator (confirmation)',
  description:
    'Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.',
  operationId: 'accountUpdateMfaAuthenticator',
  request: {
    params: z.object({
      type: z
        .literal('totp')
        .openapi({
          param: {
            name: 'type',
            description: 'Type of authenticator.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'totp',
              enum: ['totp'],
              'x-enum-name': 'AuthenticatorType',
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'totp',
          'x-enum-name': 'AuthenticatorType',
          'x-enum-keys': [],
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              otp: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<OTP>' }),
            })
            .openapi({ required: ['otp'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountMfaAuthenticatorsTypeRoute = createRoute({
  method: 'post',
  path: '/account/mfa/authenticators/{type}',
  tags: ['account'],
  summary: 'Create authenticator',
  description:
    'Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.',
  operationId: 'accountCreateMfaAuthenticator',
  request: {
    params: z.object({
      type: z
        .literal('totp')
        .openapi({
          param: {
            name: 'type',
            description: 'Type of authenticator. Must be `totp`',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'totp',
              enum: ['totp'],
              'x-enum-name': 'AuthenticatorType',
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'totp',
          'x-enum-name': 'AuthenticatorType',
          'x-enum-keys': [],
        }),
    }),
  },
  responses: {
    200: { description: 'MFAType', content: { 'application/json': { schema: MfaTypeSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const deleteAccountMfaAuthenticatorsTypeRoute = createRoute({
  method: 'delete',
  path: '/account/mfa/authenticators/{type}',
  tags: ['account'],
  summary: 'Delete authenticator',
  description: 'Delete an authenticator for a user by ID.',
  operationId: 'accountDeleteMfaAuthenticator',
  request: {
    params: z.object({
      type: z
        .literal('totp')
        .openapi({
          param: {
            name: 'type',
            description: 'Type of authenticator.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'totp',
              enum: ['totp'],
              'x-enum-name': 'AuthenticatorType',
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'totp',
          'x-enum-name': 'AuthenticatorType',
          'x-enum-keys': [],
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const putAccountMfaChallengeRoute = createRoute({
  method: 'put',
  path: '/account/mfa/challenge',
  tags: ['account'],
  summary: 'Update MFA challenge (confirmation)',
  description:
    'Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.',
  operationId: 'accountUpdateMfaChallenge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              challengeId: z
                .string()
                .openapi({ description: 'ID of the challenge.', 'x-example': '<CHALLENGE_ID>' }),
              otp: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<OTP>' }),
            })
            .openapi({ required: ['challengeId', 'otp'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountMfaChallengeRoute = createRoute({
  method: 'post',
  path: '/account/mfa/challenge',
  tags: ['account'],
  summary: 'Create MFA challenge',
  description:
    'Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.',
  operationId: 'accountCreateMfaChallenge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              factor: z
                .enum(['email', 'phone', 'totp', 'recoverycode'])
                .openapi({
                  description:
                    'Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.',
                  'x-example': 'email',
                  'x-enum-name': 'AuthenticationFactor',
                  'x-enum-keys': [],
                }),
            })
            .openapi({ required: ['factor'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'MFA Challenge',
      content: { 'application/json': { schema: MfaChallengeSchema } },
    },
  },
  security: [{ Project: [] }],
})

export const getAccountMfaFactorsRoute = createRoute({
  method: 'get',
  path: '/account/mfa/factors',
  tags: ['account'],
  summary: 'List factors',
  description: 'List the factors available on the account to be used as a MFA challange.',
  operationId: 'accountListMfaFactors',
  responses: {
    200: {
      description: 'MFAFactors',
      content: { 'application/json': { schema: MfaFactorsSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getAccountMfaRecoveryCodesRoute = createRoute({
  method: 'get',
  path: '/account/mfa/recovery-codes',
  tags: ['account'],
  summary: 'List MFA recovery codes',
  description:
    'Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.',
  operationId: 'accountGetMfaRecoveryCodes',
  responses: {
    200: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountMfaRecoveryCodesRoute = createRoute({
  method: 'post',
  path: '/account/mfa/recovery-codes',
  tags: ['account'],
  summary: 'Create MFA recovery codes',
  description:
    "Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.",
  operationId: 'accountCreateMfaRecoveryCodes',
  responses: {
    201: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountMfaRecoveryCodesRoute = createRoute({
  method: 'patch',
  path: '/account/mfa/recovery-codes',
  tags: ['account'],
  summary: 'Update MFA recovery codes (regenerate)',
  description:
    'Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.',
  operationId: 'accountUpdateMfaRecoveryCodes',
  responses: {
    200: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountNameRoute = createRoute({
  method: 'patch',
  path: '/account/name',
  tags: ['account'],
  summary: 'Update name',
  description: 'Update currently logged in user account name.',
  operationId: 'accountUpdateName',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountPasswordRoute = createRoute({
  method: 'patch',
  path: '/account/password',
  tags: ['account'],
  summary: 'Update password',
  description:
    'Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.',
  operationId: 'accountUpdatePassword',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .openapi({
                  description: 'New user password. Must be at least 8 chars.',
                  'x-example': null,
                }),
              oldPassword: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Current user password. Must be at least 8 chars.',
                  'x-example': 'password',
                }),
            })
            .openapi({ required: ['password'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountPhoneRoute = createRoute({
  method: 'patch',
  path: '/account/phone',
  tags: ['account'],
  summary: 'Update phone',
  description:
    "Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.",
  operationId: 'accountUpdatePhone',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              phone: z
                .string()
                .openapi({
                  description:
                    "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              password: z
                .string()
                .openapi({
                  description: 'User password. Must be at least 8 chars.',
                  'x-example': 'password',
                }),
            })
            .openapi({ required: ['phone', 'password'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getAccountPrefsRoute = createRoute({
  method: 'get',
  path: '/account/prefs',
  tags: ['account'],
  summary: 'Get account preferences',
  description: 'Get the preferences as a key-value object for the currently logged in user.',
  operationId: 'accountGetPrefs',
  responses: {
    200: {
      description: 'Preferences',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountPrefsRoute = createRoute({
  method: 'patch',
  path: '/account/prefs',
  tags: ['account'],
  summary: 'Update preferences',
  description:
    'Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.',
  operationId: 'accountUpdatePrefs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              prefs: z
                .object({})
                .openapi({ description: 'Prefs key-value JSON object.', 'x-example': '{}' }),
            })
            .openapi({ required: ['prefs'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const putAccountRecoveryRoute = createRoute({
  method: 'put',
  path: '/account/recovery',
  tags: ['account'],
  summary: 'Update password recovery (confirmation)',
  description:
    'Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.\n\nPlease note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.',
  operationId: 'accountUpdateRecovery',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z.string().openapi({ description: 'User ID.', 'x-example': '<USER_ID>' }),
              secret: z
                .string()
                .openapi({ description: 'Valid reset token.', 'x-example': '<SECRET>' }),
              password: z
                .string()
                .openapi({
                  description: 'New user password. Must be between 8 and 256 chars.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['userId', 'secret', 'password'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountRecoveryRoute = createRoute({
  method: 'post',
  path: '/account/recovery',
  tags: ['account'],
  summary: 'Create password recovery',
  description:
    "Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.",
  operationId: 'accountCreateRecovery',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              url: z
                .string()
                .openapi({
                  description:
                    'URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.',
                  'x-example': 'https://example.com',
                }),
            })
            .openapi({ required: ['email', 'url'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getAccountSessionsRoute = createRoute({
  method: 'get',
  path: '/account/sessions',
  tags: ['account'],
  summary: 'List sessions',
  description:
    'Get the list of active sessions across different devices for the currently logged in user.',
  operationId: 'accountListSessions',
  responses: {
    200: {
      description: 'Sessions List',
      content: { 'application/json': { schema: SessionListSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const deleteAccountSessionsRoute = createRoute({
  method: 'delete',
  path: '/account/sessions',
  tags: ['account'],
  summary: 'Delete sessions',
  description:
    'Delete all sessions from the user account and remove any sessions cookies from the end client.',
  operationId: 'accountDeleteSessions',
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountSessionsAnonymousRoute = createRoute({
  method: 'post',
  path: '/account/sessions/anonymous',
  tags: ['account'],
  summary: 'Create anonymous session',
  description:
    'Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).',
  operationId: 'accountCreateAnonymousSession',
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [] }],
})

export const postAccountSessionsEmailRoute = createRoute({
  method: 'post',
  path: '/account/sessions/email',
  tags: ['account'],
  summary: 'Create email password session',
  description:
    'Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.\n\nA user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).',
  operationId: 'accountCreateEmailPasswordSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password. Must be at least 8 chars.',
                  'x-example': 'password',
                }),
            })
            .openapi({ required: ['email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [] }],
})

export const putAccountSessionsMagicUrlRoute = createRoute({
  method: 'put',
  path: '/account/sessions/magic-url',
  tags: ['account'],
  summary: 'Update magic URL session',
  description:
    'Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.',
  operationId: 'accountUpdateMagicURLSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              secret: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<SECRET>' }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [] }],
})

export const putAccountSessionsPhoneRoute = createRoute({
  method: 'put',
  path: '/account/sessions/phone',
  tags: ['account'],
  summary: 'Update phone session',
  description:
    'Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.',
  operationId: 'accountUpdatePhoneSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              secret: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<SECRET>' }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [] }],
})

export const postAccountSessionsTokenRoute = createRoute({
  method: 'post',
  path: '/account/sessions/token',
  tags: ['account'],
  summary: 'Create session',
  description:
    'Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.',
  operationId: 'accountCreateSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              secret: z
                .string()
                .openapi({
                  description:
                    'Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.',
                  'x-example': '<SECRET>',
                }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [] }],
})

export const getAccountSessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/account/sessions/{sessionId}',
  tags: ['account'],
  summary: 'Get session',
  description:
    "Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.",
  operationId: 'accountGetSession',
  request: {
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            description: "Session ID. Use the string 'current' to get the current device session.",
            required: true,
            schema: { type: 'string', 'x-example': '<SESSION_ID>' },
            in: 'path',
          },
          'x-example': '<SESSION_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const deleteAccountSessionsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/account/sessions/{sessionId}',
  tags: ['account'],
  summary: 'Delete session',
  description:
    "Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.",
  operationId: 'accountDeleteSession',
  request: {
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            description:
              "Session ID. Use the string 'current' to delete the current device session.",
            required: true,
            schema: { type: 'string', 'x-example': '<SESSION_ID>' },
            in: 'path',
          },
          'x-example': '<SESSION_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountSessionsSessionIdRoute = createRoute({
  method: 'patch',
  path: '/account/sessions/{sessionId}',
  tags: ['account'],
  summary: 'Update session',
  description:
    "Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.",
  operationId: 'accountUpdateSession',
  request: {
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            description:
              "Session ID. Use the string 'current' to update the current device session.",
            required: true,
            schema: { type: 'string', 'x-example': '<SESSION_ID>' },
            in: 'path',
          },
          'x-example': '<SESSION_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const patchAccountStatusRoute = createRoute({
  method: 'patch',
  path: '/account/status',
  tags: ['account'],
  summary: 'Update status',
  description:
    'Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.',
  operationId: 'accountUpdateStatus',
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountTokensEmailRoute = createRoute({
  method: 'post',
  path: '/account/tokens/email',
  tags: ['account'],
  summary: 'Create email token (OTP)',
  description:
    "Sends the user an email with a secret key for creating a session. If the email address has never been used, a **new account is created** using the provided `userId`. Otherwise, if the email address is already attached to an account, the **user ID is ignored**. Then, the user will receive an email with the one-time password. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.\n\nA user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).\n",
  operationId: 'accountCreateEmailToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              phrase: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['userId', 'email'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [] }],
})

export const postAccountTokensMagicUrlRoute = createRoute({
  method: 'post',
  path: '/account/tokens/magic-url',
  tags: ['account'],
  summary: 'Create magic URL token',
  description:
    "Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour.\n\nA user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).\n",
  operationId: 'accountCreateMagicURLToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.',
                  'x-example': 'https://example.com',
                }),
              phrase: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['userId', 'email'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [] }],
})

export const getAccountTokensOauth2ProviderRoute = createRoute({
  method: 'get',
  path: '/account/tokens/oauth2/{provider}',
  tags: ['account'],
  summary: 'Create OAuth2 token',
  description:
    "Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed. \n\nIf authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.\n\nA user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).",
  operationId: 'accountCreateOAuth2Token',
  request: {
    params: z.object({
      provider: z
        .enum([
          'amazon',
          'apple',
          'auth0',
          'authentik',
          'autodesk',
          'bitbucket',
          'bitly',
          'box',
          'dailymotion',
          'discord',
          'disqus',
          'dropbox',
          'etsy',
          'facebook',
          'figma',
          'github',
          'gitlab',
          'google',
          'linkedin',
          'microsoft',
          'notion',
          'oidc',
          'okta',
          'paypal',
          'paypalSandbox',
          'podio',
          'salesforce',
          'slack',
          'spotify',
          'stripe',
          'tradeshift',
          'tradeshiftBox',
          'twitch',
          'wordpress',
          'yahoo',
          'yammer',
          'yandex',
          'zoho',
          'zoom',
          'mock',
        ])
        .openapi({
          param: {
            name: 'provider',
            description:
              'OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'amazon',
              enum: [
                'amazon',
                'apple',
                'auth0',
                'authentik',
                'autodesk',
                'bitbucket',
                'bitly',
                'box',
                'dailymotion',
                'discord',
                'disqus',
                'dropbox',
                'etsy',
                'facebook',
                'figma',
                'github',
                'gitlab',
                'google',
                'linkedin',
                'microsoft',
                'notion',
                'oidc',
                'okta',
                'paypal',
                'paypalSandbox',
                'podio',
                'salesforce',
                'slack',
                'spotify',
                'stripe',
                'tradeshift',
                'tradeshiftBox',
                'twitch',
                'wordpress',
                'yahoo',
                'yammer',
                'yandex',
                'zoho',
                'zoom',
                'mock',
              ],
              'x-enum-name': 'OAuthProvider',
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'amazon',
          'x-enum-name': 'OAuthProvider',
          'x-enum-keys': [],
        }),
    }),
    query: z.object({
      success: z
        .url()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'success',
            description:
              "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
            required: false,
            schema: {
              type: 'string',
              format: 'url',
              'x-example': 'https://example.com',
              default: '',
            },
            in: 'query',
          },
          'x-example': 'https://example.com',
        }),
      failure: z
        .url()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'failure',
            description:
              "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
            required: false,
            schema: {
              type: 'string',
              format: 'url',
              'x-example': 'https://example.com',
              default: '',
            },
            in: 'query',
          },
          'x-example': 'https://example.com',
        }),
      scopes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'scopes',
            description:
              'A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: { 301: { description: 'File' } },
  security: [{ Project: [] }],
})

export const postAccountTokensPhoneRoute = createRoute({
  method: 'post',
  path: '/account/tokens/phone',
  tags: ['account'],
  summary: 'Create phone token',
  description:
    "Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.\n\nA user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).",
  operationId: 'accountCreatePhoneToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the phone number has never been used, a new account is created using the provided userId. Otherwise, if the phone number is already attached to an account, the user ID is ignored.",
                  'x-example': '<USER_ID>',
                }),
              phone: z
                .string()
                .openapi({
                  description:
                    "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
            })
            .openapi({ required: ['userId', 'phone'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [] }],
})

export const putAccountVerificationRoute = createRoute({
  method: 'put',
  path: '/account/verification',
  tags: ['account'],
  summary: 'Update email verification (confirmation)',
  description:
    'Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.',
  operationId: 'accountUpdateVerification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z.string().openapi({ description: 'User ID.', 'x-example': '<USER_ID>' }),
              secret: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<SECRET>' }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountVerificationRoute = createRoute({
  method: 'post',
  path: '/account/verification',
  tags: ['account'],
  summary: 'Create email verification',
  description:
    "Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.\n\nPlease note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.\n",
  operationId: 'accountCreateVerification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .openapi({
                  description:
                    'URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.',
                  'x-example': 'https://example.com',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const putAccountVerificationPhoneRoute = createRoute({
  method: 'put',
  path: '/account/verification/phone',
  tags: ['account'],
  summary: 'Update phone verification (confirmation)',
  description:
    "Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.",
  operationId: 'accountUpdatePhoneVerification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z.string().openapi({ description: 'User ID.', 'x-example': '<USER_ID>' }),
              secret: z
                .string()
                .openapi({ description: 'Valid verification token.', 'x-example': '<SECRET>' }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const postAccountVerificationPhoneRoute = createRoute({
  method: 'post',
  path: '/account/verification/phone',
  tags: ['account'],
  summary: 'Create phone verification',
  description:
    "Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.",
  operationId: 'accountCreatePhoneVerification',
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getAvatarsBrowsersCodeRoute = createRoute({
  method: 'get',
  path: '/avatars/browsers/{code}',
  tags: ['avatars'],
  summary: 'Get browser icon',
  description:
    'You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.\n\nWhen one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.',
  operationId: 'avatarsGetBrowser',
  request: {
    params: z.object({
      code: z
        .enum(['aa', 'an', 'ch', 'ci', 'cm', 'cr', 'ff', 'sf', 'mf', 'ps', 'oi', 'om', 'op', 'on'])
        .openapi({
          param: {
            name: 'code',
            description: 'Browser Code.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'aa',
              enum: [
                'aa',
                'an',
                'ch',
                'ci',
                'cm',
                'cr',
                'ff',
                'sf',
                'mf',
                'ps',
                'oi',
                'om',
                'op',
                'on',
              ],
              'x-enum-name': 'Browser',
              'x-enum-keys': [
                'Avant Browser',
                'Android WebView Beta',
                'Google Chrome',
                'Google Chrome (iOS)',
                'Google Chrome (Mobile)',
                'Chromium',
                'Mozilla Firefox',
                'Safari',
                'Mobile Safari',
                'Microsoft Edge',
                'Microsoft Edge (iOS)',
                'Opera Mini',
                'Opera',
                'Opera (Next)',
              ],
            },
            in: 'path',
          },
          'x-example': 'aa',
          'x-enum-name': 'Browser',
          'x-enum-keys': [
            'Avant Browser',
            'Android WebView Beta',
            'Google Chrome',
            'Google Chrome (iOS)',
            'Google Chrome (Mobile)',
            'Chromium',
            'Mozilla Firefox',
            'Safari',
            'Mobile Safari',
            'Microsoft Edge',
            'Microsoft Edge (iOS)',
            'Opera Mini',
            'Opera',
            'Opera (Next)',
          ],
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description: 'Image width. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description: 'Image height. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            description:
              'Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': -1, default: -1 },
            in: 'query',
          },
          'x-example': -1,
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsCreditCardsCodeRoute = createRoute({
  method: 'get',
  path: '/avatars/credit-cards/{code}',
  tags: ['avatars'],
  summary: 'Get credit card icon',
  description:
    'The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.\n\nWhen one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.\n',
  operationId: 'avatarsGetCreditCard',
  request: {
    params: z.object({
      code: z
        .enum([
          'amex',
          'argencard',
          'cabal',
          'cencosud',
          'diners',
          'discover',
          'elo',
          'hipercard',
          'jcb',
          'mastercard',
          'naranja',
          'targeta-shopping',
          'unionpay',
          'visa',
          'mir',
          'maestro',
          'rupay',
        ])
        .openapi({
          param: {
            name: 'code',
            description:
              'Credit Card Code. Possible values: amex, argencard, cabal, cencosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, unionpay, visa, mir, maestro, rupay.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'amex',
              enum: [
                'amex',
                'argencard',
                'cabal',
                'cencosud',
                'diners',
                'discover',
                'elo',
                'hipercard',
                'jcb',
                'mastercard',
                'naranja',
                'targeta-shopping',
                'unionpay',
                'visa',
                'mir',
                'maestro',
                'rupay',
              ],
              'x-enum-name': 'CreditCard',
              'x-enum-keys': [
                'American Express',
                'Argencard',
                'Cabal',
                'Cencosud',
                'Diners Club',
                'Discover',
                'Elo',
                'Hipercard',
                'JCB',
                'Mastercard',
                'Naranja',
                'Tarjeta Shopping',
                'Union Pay',
                'Visa',
                'MIR',
                'Maestro',
                'Rupay',
              ],
            },
            in: 'path',
          },
          'x-example': 'amex',
          'x-enum-name': 'CreditCard',
          'x-enum-keys': [
            'American Express',
            'Argencard',
            'Cabal',
            'Cencosud',
            'Diners Club',
            'Discover',
            'Elo',
            'Hipercard',
            'JCB',
            'Mastercard',
            'Naranja',
            'Tarjeta Shopping',
            'Union Pay',
            'Visa',
            'MIR',
            'Maestro',
            'Rupay',
          ],
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description: 'Image width. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description: 'Image height. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            description:
              'Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': -1, default: -1 },
            in: 'query',
          },
          'x-example': -1,
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsFaviconRoute = createRoute({
  method: 'get',
  path: '/avatars/favicon',
  tags: ['avatars'],
  summary: 'Get favicon',
  description:
    'Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.\n\nThis endpoint does not follow HTTP redirects.',
  operationId: 'avatarsGetFavicon',
  request: {
    query: z.object({
      url: z
        .url()
        .openapi({
          param: {
            name: 'url',
            description: 'Website URL which you want to fetch the favicon from.',
            required: true,
            schema: { type: 'string', format: 'url', 'x-example': 'https://example.com' },
            in: 'query',
          },
          'x-example': 'https://example.com',
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsFlagsCodeRoute = createRoute({
  method: 'get',
  path: '/avatars/flags/{code}',
  tags: ['avatars'],
  summary: 'Get country flag',
  description:
    'You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.\n\nWhen one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.\n',
  operationId: 'avatarsGetFlag',
  request: {
    params: z.object({
      code: z
        .enum([
          'af',
          'ao',
          'al',
          'ad',
          'ae',
          'ar',
          'am',
          'ag',
          'au',
          'at',
          'az',
          'bi',
          'be',
          'bj',
          'bf',
          'bd',
          'bg',
          'bh',
          'bs',
          'ba',
          'by',
          'bz',
          'bo',
          'br',
          'bb',
          'bn',
          'bt',
          'bw',
          'cf',
          'ca',
          'ch',
          'cl',
          'cn',
          'ci',
          'cm',
          'cd',
          'cg',
          'co',
          'km',
          'cv',
          'cr',
          'cu',
          'cy',
          'cz',
          'de',
          'dj',
          'dm',
          'dk',
          'do',
          'dz',
          'ec',
          'eg',
          'er',
          'es',
          'ee',
          'et',
          'fi',
          'fj',
          'fr',
          'fm',
          'ga',
          'gb',
          'ge',
          'gh',
          'gn',
          'gm',
          'gw',
          'gq',
          'gr',
          'gd',
          'gt',
          'gy',
          'hn',
          'hr',
          'ht',
          'hu',
          'id',
          'in',
          'ie',
          'ir',
          'iq',
          'is',
          'il',
          'it',
          'jm',
          'jo',
          'jp',
          'kz',
          'ke',
          'kg',
          'kh',
          'ki',
          'kn',
          'kr',
          'kw',
          'la',
          'lb',
          'lr',
          'ly',
          'lc',
          'li',
          'lk',
          'ls',
          'lt',
          'lu',
          'lv',
          'ma',
          'mc',
          'md',
          'mg',
          'mv',
          'mx',
          'mh',
          'mk',
          'ml',
          'mt',
          'mm',
          'me',
          'mn',
          'mz',
          'mr',
          'mu',
          'mw',
          'my',
          'na',
          'ne',
          'ng',
          'ni',
          'nl',
          'no',
          'np',
          'nr',
          'nz',
          'om',
          'pk',
          'pa',
          'pe',
          'ph',
          'pw',
          'pg',
          'pl',
          'pf',
          'kp',
          'pt',
          'py',
          'qa',
          'ro',
          'ru',
          'rw',
          'sa',
          'sd',
          'sn',
          'sg',
          'sb',
          'sl',
          'sv',
          'sm',
          'so',
          'rs',
          'ss',
          'st',
          'sr',
          'sk',
          'si',
          'se',
          'sz',
          'sc',
          'sy',
          'td',
          'tg',
          'th',
          'tj',
          'tm',
          'tl',
          'to',
          'tt',
          'tn',
          'tr',
          'tv',
          'tz',
          'ug',
          'ua',
          'uy',
          'us',
          'uz',
          'va',
          'vc',
          've',
          'vn',
          'vu',
          'ws',
          'ye',
          'za',
          'zm',
          'zw',
        ])
        .openapi({
          param: {
            name: 'code',
            description: 'Country Code. ISO Alpha-2 country code format.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'af',
              enum: [
                'af',
                'ao',
                'al',
                'ad',
                'ae',
                'ar',
                'am',
                'ag',
                'au',
                'at',
                'az',
                'bi',
                'be',
                'bj',
                'bf',
                'bd',
                'bg',
                'bh',
                'bs',
                'ba',
                'by',
                'bz',
                'bo',
                'br',
                'bb',
                'bn',
                'bt',
                'bw',
                'cf',
                'ca',
                'ch',
                'cl',
                'cn',
                'ci',
                'cm',
                'cd',
                'cg',
                'co',
                'km',
                'cv',
                'cr',
                'cu',
                'cy',
                'cz',
                'de',
                'dj',
                'dm',
                'dk',
                'do',
                'dz',
                'ec',
                'eg',
                'er',
                'es',
                'ee',
                'et',
                'fi',
                'fj',
                'fr',
                'fm',
                'ga',
                'gb',
                'ge',
                'gh',
                'gn',
                'gm',
                'gw',
                'gq',
                'gr',
                'gd',
                'gt',
                'gy',
                'hn',
                'hr',
                'ht',
                'hu',
                'id',
                'in',
                'ie',
                'ir',
                'iq',
                'is',
                'il',
                'it',
                'jm',
                'jo',
                'jp',
                'kz',
                'ke',
                'kg',
                'kh',
                'ki',
                'kn',
                'kr',
                'kw',
                'la',
                'lb',
                'lr',
                'ly',
                'lc',
                'li',
                'lk',
                'ls',
                'lt',
                'lu',
                'lv',
                'ma',
                'mc',
                'md',
                'mg',
                'mv',
                'mx',
                'mh',
                'mk',
                'ml',
                'mt',
                'mm',
                'me',
                'mn',
                'mz',
                'mr',
                'mu',
                'mw',
                'my',
                'na',
                'ne',
                'ng',
                'ni',
                'nl',
                'no',
                'np',
                'nr',
                'nz',
                'om',
                'pk',
                'pa',
                'pe',
                'ph',
                'pw',
                'pg',
                'pl',
                'pf',
                'kp',
                'pt',
                'py',
                'qa',
                'ro',
                'ru',
                'rw',
                'sa',
                'sd',
                'sn',
                'sg',
                'sb',
                'sl',
                'sv',
                'sm',
                'so',
                'rs',
                'ss',
                'st',
                'sr',
                'sk',
                'si',
                'se',
                'sz',
                'sc',
                'sy',
                'td',
                'tg',
                'th',
                'tj',
                'tm',
                'tl',
                'to',
                'tt',
                'tn',
                'tr',
                'tv',
                'tz',
                'ug',
                'ua',
                'uy',
                'us',
                'uz',
                'va',
                'vc',
                've',
                'vn',
                'vu',
                'ws',
                'ye',
                'za',
                'zm',
                'zw',
              ],
              'x-enum-name': 'Flag',
              'x-enum-keys': [
                'Afghanistan',
                'Angola',
                'Albania',
                'Andorra',
                'United Arab Emirates',
                'Argentina',
                'Armenia',
                'Antigua and Barbuda',
                'Australia',
                'Austria',
                'Azerbaijan',
                'Burundi',
                'Belgium',
                'Benin',
                'Burkina Faso',
                'Bangladesh',
                'Bulgaria',
                'Bahrain',
                'Bahamas',
                'Bosnia and Herzegovina',
                'Belarus',
                'Belize',
                'Bolivia',
                'Brazil',
                'Barbados',
                'Brunei Darussalam',
                'Bhutan',
                'Botswana',
                'Central African Republic',
                'Canada',
                'Switzerland',
                'Chile',
                'China',
                "Côte d'Ivoire",
                'Cameroon',
                'Democratic Republic of the Congo',
                'Republic of the Congo',
                'Colombia',
                'Comoros',
                'Cape Verde',
                'Costa Rica',
                'Cuba',
                'Cyprus',
                'Czech Republic',
                'Germany',
                'Djibouti',
                'Dominica',
                'Denmark',
                'Dominican Republic',
                'Algeria',
                'Ecuador',
                'Egypt',
                'Eritrea',
                'Spain',
                'Estonia',
                'Ethiopia',
                'Finland',
                'Fiji',
                'France',
                'Micronesia (Federated States of)',
                'Gabon',
                'United Kingdom',
                'Georgia',
                'Ghana',
                'Guinea',
                'Gambia',
                'Guinea-Bissau',
                'Equatorial Guinea',
                'Greece',
                'Grenada',
                'Guatemala',
                'Guyana',
                'Honduras',
                'Croatia',
                'Haiti',
                'Hungary',
                'Indonesia',
                'India',
                'Ireland',
                'Iran (Islamic Republic of)',
                'Iraq',
                'Iceland',
                'Israel',
                'Italy',
                'Jamaica',
                'Jordan',
                'Japan',
                'Kazakhstan',
                'Kenya',
                'Kyrgyzstan',
                'Cambodia',
                'Kiribati',
                'Saint Kitts and Nevis',
                'South Korea',
                'Kuwait',
                "Lao People's Democratic Republic",
                'Lebanon',
                'Liberia',
                'Libya',
                'Saint Lucia',
                'Liechtenstein',
                'Sri Lanka',
                'Lesotho',
                'Lithuania',
                'Luxembourg',
                'Latvia',
                'Morocco',
                'Monaco',
                'Moldova',
                'Madagascar',
                'Maldives',
                'Mexico',
                'Marshall Islands',
                'North Macedonia',
                'Mali',
                'Malta',
                'Myanmar',
                'Montenegro',
                'Mongolia',
                'Mozambique',
                'Mauritania',
                'Mauritius',
                'Malawi',
                'Malaysia',
                'Namibia',
                'Niger',
                'Nigeria',
                'Nicaragua',
                'Netherlands',
                'Norway',
                'Nepal',
                'Nauru',
                'New Zealand',
                'Oman',
                'Pakistan',
                'Panama',
                'Peru',
                'Philippines',
                'Palau',
                'Papua New Guinea',
                'Poland',
                'French Polynesia',
                'North Korea',
                'Portugal',
                'Paraguay',
                'Qatar',
                'Romania',
                'Russia',
                'Rwanda',
                'Saudi Arabia',
                'Sudan',
                'Senegal',
                'Singapore',
                'Solomon Islands',
                'Sierra Leone',
                'El Salvador',
                'San Marino',
                'Somalia',
                'Serbia',
                'South Sudan',
                'Sao Tome and Principe',
                'Suriname',
                'Slovakia',
                'Slovenia',
                'Sweden',
                'Eswatini',
                'Seychelles',
                'Syria',
                'Chad',
                'Togo',
                'Thailand',
                'Tajikistan',
                'Turkmenistan',
                'Timor-Leste',
                'Tonga',
                'Trinidad and Tobago',
                'Tunisia',
                'Turkey',
                'Tuvalu',
                'Tanzania',
                'Uganda',
                'Ukraine',
                'Uruguay',
                'United States',
                'Uzbekistan',
                'Vatican City',
                'Saint Vincent and the Grenadines',
                'Venezuela',
                'Vietnam',
                'Vanuatu',
                'Samoa',
                'Yemen',
                'South Africa',
                'Zambia',
                'Zimbabwe',
              ],
            },
            in: 'path',
          },
          'x-example': 'af',
          'x-enum-name': 'Flag',
          'x-enum-keys': [
            'Afghanistan',
            'Angola',
            'Albania',
            'Andorra',
            'United Arab Emirates',
            'Argentina',
            'Armenia',
            'Antigua and Barbuda',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Burundi',
            'Belgium',
            'Benin',
            'Burkina Faso',
            'Bangladesh',
            'Bulgaria',
            'Bahrain',
            'Bahamas',
            'Bosnia and Herzegovina',
            'Belarus',
            'Belize',
            'Bolivia',
            'Brazil',
            'Barbados',
            'Brunei Darussalam',
            'Bhutan',
            'Botswana',
            'Central African Republic',
            'Canada',
            'Switzerland',
            'Chile',
            'China',
            "Côte d'Ivoire",
            'Cameroon',
            'Democratic Republic of the Congo',
            'Republic of the Congo',
            'Colombia',
            'Comoros',
            'Cape Verde',
            'Costa Rica',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Germany',
            'Djibouti',
            'Dominica',
            'Denmark',
            'Dominican Republic',
            'Algeria',
            'Ecuador',
            'Egypt',
            'Eritrea',
            'Spain',
            'Estonia',
            'Ethiopia',
            'Finland',
            'Fiji',
            'France',
            'Micronesia (Federated States of)',
            'Gabon',
            'United Kingdom',
            'Georgia',
            'Ghana',
            'Guinea',
            'Gambia',
            'Guinea-Bissau',
            'Equatorial Guinea',
            'Greece',
            'Grenada',
            'Guatemala',
            'Guyana',
            'Honduras',
            'Croatia',
            'Haiti',
            'Hungary',
            'Indonesia',
            'India',
            'Ireland',
            'Iran (Islamic Republic of)',
            'Iraq',
            'Iceland',
            'Israel',
            'Italy',
            'Jamaica',
            'Jordan',
            'Japan',
            'Kazakhstan',
            'Kenya',
            'Kyrgyzstan',
            'Cambodia',
            'Kiribati',
            'Saint Kitts and Nevis',
            'South Korea',
            'Kuwait',
            "Lao People's Democratic Republic",
            'Lebanon',
            'Liberia',
            'Libya',
            'Saint Lucia',
            'Liechtenstein',
            'Sri Lanka',
            'Lesotho',
            'Lithuania',
            'Luxembourg',
            'Latvia',
            'Morocco',
            'Monaco',
            'Moldova',
            'Madagascar',
            'Maldives',
            'Mexico',
            'Marshall Islands',
            'North Macedonia',
            'Mali',
            'Malta',
            'Myanmar',
            'Montenegro',
            'Mongolia',
            'Mozambique',
            'Mauritania',
            'Mauritius',
            'Malawi',
            'Malaysia',
            'Namibia',
            'Niger',
            'Nigeria',
            'Nicaragua',
            'Netherlands',
            'Norway',
            'Nepal',
            'Nauru',
            'New Zealand',
            'Oman',
            'Pakistan',
            'Panama',
            'Peru',
            'Philippines',
            'Palau',
            'Papua New Guinea',
            'Poland',
            'French Polynesia',
            'North Korea',
            'Portugal',
            'Paraguay',
            'Qatar',
            'Romania',
            'Russia',
            'Rwanda',
            'Saudi Arabia',
            'Sudan',
            'Senegal',
            'Singapore',
            'Solomon Islands',
            'Sierra Leone',
            'El Salvador',
            'San Marino',
            'Somalia',
            'Serbia',
            'South Sudan',
            'Sao Tome and Principe',
            'Suriname',
            'Slovakia',
            'Slovenia',
            'Sweden',
            'Eswatini',
            'Seychelles',
            'Syria',
            'Chad',
            'Togo',
            'Thailand',
            'Tajikistan',
            'Turkmenistan',
            'Timor-Leste',
            'Tonga',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Tuvalu',
            'Tanzania',
            'Uganda',
            'Ukraine',
            'Uruguay',
            'United States',
            'Uzbekistan',
            'Vatican City',
            'Saint Vincent and the Grenadines',
            'Venezuela',
            'Vietnam',
            'Vanuatu',
            'Samoa',
            'Yemen',
            'South Africa',
            'Zambia',
            'Zimbabwe',
          ],
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description: 'Image width. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description: 'Image height. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 100 },
            in: 'query',
          },
          'x-example': 0,
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            description:
              'Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': -1, default: -1 },
            in: 'query',
          },
          'x-example': -1,
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsImageRoute = createRoute({
  method: 'get',
  path: '/avatars/image',
  tags: ['avatars'],
  summary: 'Get image from URL',
  description:
    'Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.\n\nWhen one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.\n\nThis endpoint does not follow HTTP redirects.',
  operationId: 'avatarsGetImage',
  request: {
    query: z.object({
      url: z
        .url()
        .openapi({
          param: {
            name: 'url',
            description: 'Image URL which you want to crop.',
            required: true,
            schema: { type: 'string', format: 'url', 'x-example': 'https://example.com' },
            in: 'query',
          },
          'x-example': 'https://example.com',
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(400)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description:
              'Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 400 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(400)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description:
              'Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 400 },
            in: 'query',
          },
          'x-example': 0,
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsInitialsRoute = createRoute({
  method: 'get',
  path: '/avatars/initials',
  tags: ['avatars'],
  summary: 'Get user initials',
  description:
    "Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.\n\nYou can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.\n\nWhen one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.\n",
  operationId: 'avatarsGetInitials',
  request: {
    query: z.object({
      name: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            description:
              'Full Name. When empty, current user name or email will be used. Max length: 128 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<NAME>', default: '' },
            in: 'query',
          },
          'x-example': '<NAME>',
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description: 'Image width. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 500 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description: 'Image height. Pass an integer between 0 to 2000. Defaults to 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 500 },
            in: 'query',
          },
          'x-example': 0,
        }),
      background: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'background',
            description:
              'Changes background color. By default a random color will be picked and stay will persistent to the given name.',
            required: false,
            schema: { type: 'string', default: '' },
            in: 'query',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getAvatarsQrRoute = createRoute({
  method: 'get',
  path: '/avatars/qr',
  tags: ['avatars'],
  summary: 'Get QR code',
  description:
    'Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.\n',
  operationId: 'avatarsGetQR',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            description: 'Plain text to be converted to QR code image.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEXT>' },
            in: 'query',
          },
          'x-example': '<TEXT>',
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(400)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            description: 'QR code size. Pass an integer between 1 to 1000. Defaults to 400.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 1, default: 400 },
            in: 'query',
          },
          'x-example': 1,
        }),
      margin: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'margin',
            description: 'Margin from edge. Pass an integer between 0 to 10. Defaults to 1.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 1 },
            in: 'query',
          },
          'x-example': 0,
        }),
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            description:
              "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.",
            required: false,
            schema: { type: 'boolean', 'x-example': false, default: false },
            in: 'query',
          },
          'x-example': false,
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getDatabasesRoute = createRoute({
  method: 'get',
  path: '/databases',
  tags: ['databases'],
  summary: 'List databases',
  description:
    'Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.',
  operationId: 'databasesList',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Databases List',
      content: { 'application/json': { schema: DatabaseListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesRoute = createRoute({
  method: 'post',
  path: '/databases',
  tags: ['databases'],
  summary: 'Create database',
  description: 'Create a new Database.\n',
  operationId: 'databasesCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              databaseId: z
                .string()
                .openapi({
                  description:
                    "Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<DATABASE_ID>',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Database name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['databaseId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Database', content: { 'application/json': { schema: DatabaseSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}',
  tags: ['databases'],
  summary: 'Get database',
  description:
    'Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.',
  operationId: 'databasesGet',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Database', content: { 'application/json': { schema: DatabaseSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putDatabasesDatabaseIdRoute = createRoute({
  method: 'put',
  path: '/databases/{databaseId}',
  tags: ['databases'],
  summary: 'Update database',
  description: 'Update a database by its unique ID.',
  operationId: 'databasesUpdate',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Database name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Database', content: { 'application/json': { schema: DatabaseSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteDatabasesDatabaseIdRoute = createRoute({
  method: 'delete',
  path: '/databases/{databaseId}',
  tags: ['databases'],
  summary: 'Delete database',
  description:
    'Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.',
  operationId: 'databasesDelete',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections',
  tags: ['databases'],
  summary: 'List collections',
  description:
    'Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.',
  operationId: 'databasesListCollections',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collections List',
      content: { 'application/json': { schema: CollectionListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections',
  tags: ['databases'],
  summary: 'Create collection',
  description:
    'Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.',
  operationId: 'databasesCreateCollection',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collectionId: z
                .string()
                .openapi({
                  description:
                    "Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<COLLECTION_ID>',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Collection name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
              documentSecurity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': false,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['collectionId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Collection',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}',
  tags: ['databases'],
  summary: 'Get collection',
  description:
    'Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.',
  operationId: 'databasesGetCollection',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const putDatabasesDatabaseIdCollectionsCollectionIdRoute = createRoute({
  method: 'put',
  path: '/databases/{databaseId}/collections/{collectionId}',
  tags: ['databases'],
  summary: 'Update collection',
  description: 'Update a collection by its unique ID.',
  operationId: 'databasesUpdateCollection',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Collection name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
              documentSecurity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': false,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Collection',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteDatabasesDatabaseIdCollectionsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/databases/{databaseId}/collections/{collectionId}',
  tags: ['databases'],
  summary: 'Delete collection',
  description:
    'Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.',
  operationId: 'databasesDeleteCollection',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsCollectionIdAttributesRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes',
  tags: ['databases'],
  summary: 'List attributes',
  description: 'List attributes in the collection.',
  operationId: 'databasesListAttributes',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attributes List',
      content: { 'application/json': { schema: AttributeListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/boolean',
  tags: ['databases'],
  summary: 'Create boolean attribute',
  description: 'Create a boolean attribute.\n',
  operationId: 'databasesCreateBooleanAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': false,
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeBoolean',
      content: { 'application/json': { schema: AttributeBooleanSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRoute = createRoute(
  {
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}',
    tags: ['databases'],
    summary: 'Update boolean attribute',
    description:
      'Update a boolean attribute. Changing the `default` value will not update already existing documents.',
    operationId: 'databasesUpdateBooleanAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        key: z
          .string()
          .openapi({
            param: {
              name: 'key',
              description: 'Attribute Key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                required: z
                  .boolean()
                  .openapi({ description: 'Is attribute required?', 'x-example': false }),
                default: z
                  .boolean()
                  .openapi({
                    description:
                      'Default value for attribute when not provided. Cannot be set when attribute is required.',
                    'x-example': false,
                    'x-nullable': true,
                  }),
                newKey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'New attribute key.', 'x-example': null }),
              })
              .openapi({ required: ['required', 'default'] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'AttributeBoolean',
        content: { 'application/json': { schema: AttributeBooleanSchema } },
      },
    },
    security: [{ Project: [], Key: [] }],
  },
)

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/datetime',
  tags: ['databases'],
  summary: 'Create datetime attribute',
  description: 'Create a date time attribute according to the ISO 8601 standard.',
  operationId: 'databasesCreateDatetimeAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.',
                  'x-example': null,
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeDatetime',
      content: { 'application/json': { schema: AttributeDatetimeSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRoute =
  createRoute({
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}',
    tags: ['databases'],
    summary: 'Update dateTime attribute',
    description:
      'Update a date time attribute. Changing the `default` value will not update already existing documents.',
    operationId: 'databasesUpdateDatetimeAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        key: z
          .string()
          .openapi({
            param: {
              name: 'key',
              description: 'Attribute Key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                required: z
                  .boolean()
                  .openapi({ description: 'Is attribute required?', 'x-example': false }),
                default: z
                  .string()
                  .openapi({
                    description:
                      'Default value for attribute when not provided. Cannot be set when attribute is required.',
                    'x-example': null,
                    'x-nullable': true,
                  }),
                newKey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'New attribute key.', 'x-example': null }),
              })
              .openapi({ required: ['required', 'default'] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'AttributeDatetime',
        content: { 'application/json': { schema: AttributeDatetimeSchema } },
      },
    },
    security: [{ Project: [], Key: [] }],
  })

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/email',
  tags: ['databases'],
  summary: 'Create email attribute',
  description: 'Create an email attribute.\n',
  operationId: 'databasesCreateEmailAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': 'email@example.com',
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeEmail',
      content: { 'application/json': { schema: AttributeEmailSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}',
  tags: ['databases'],
  summary: 'Update email attribute',
  description:
    'Update an email attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateEmailAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': 'email@example.com',
                  'x-nullable': true,
                }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeEmail',
      content: { 'application/json': { schema: AttributeEmailSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/enum',
  tags: ['databases'],
  summary: 'Create enum attribute',
  description:
    'Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. \n',
  operationId: 'databasesCreateEnumAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              elements: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.',
                  'x-example': null,
                }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': '<DEFAULT>',
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'elements', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeEnum',
      content: { 'application/json': { schema: AttributeEnumSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}',
  tags: ['databases'],
  summary: 'Update enum attribute',
  description:
    'Update an enum attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateEnumAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              elements: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.',
                  'x-example': null,
                }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': '<DEFAULT>',
                  'x-nullable': true,
                }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['elements', 'required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeEnum',
      content: { 'application/json': { schema: AttributeEnumSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/float',
  tags: ['databases'],
  summary: 'Create float attribute',
  description:
    'Create a float attribute. Optionally, minimum and maximum values can be provided.\n',
  operationId: 'databasesCreateFloatAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              min: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Minimum value to enforce on new documents',
                  'x-example': null,
                }),
              max: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Maximum value to enforce on new documents',
                  'x-example': null,
                }),
              default: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': null,
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeFloat',
      content: { 'application/json': { schema: AttributeFloatSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}',
  tags: ['databases'],
  summary: 'Update float attribute',
  description:
    'Update a float attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateFloatAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              min: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Minimum value to enforce on new documents',
                  'x-example': null,
                }),
              max: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Maximum value to enforce on new documents',
                  'x-example': null,
                }),
              default: z
                .number()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': null,
                  'x-nullable': true,
                }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeFloat',
      content: { 'application/json': { schema: AttributeFloatSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/integer',
  tags: ['databases'],
  summary: 'Create integer attribute',
  description:
    'Create an integer attribute. Optionally, minimum and maximum values can be provided.\n',
  operationId: 'databasesCreateIntegerAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              min: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Minimum value to enforce on new documents',
                  'x-example': null,
                }),
              max: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum value to enforce on new documents',
                  'x-example': null,
                }),
              default: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': null,
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeInteger',
      content: { 'application/json': { schema: AttributeIntegerSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRoute = createRoute(
  {
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}',
    tags: ['databases'],
    summary: 'Update integer attribute',
    description:
      'Update an integer attribute. Changing the `default` value will not update already existing documents.\n',
    operationId: 'databasesUpdateIntegerAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        key: z
          .string()
          .openapi({
            param: {
              name: 'key',
              description: 'Attribute Key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                required: z
                  .boolean()
                  .openapi({ description: 'Is attribute required?', 'x-example': false }),
                min: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Minimum value to enforce on new documents',
                    'x-example': null,
                  }),
                max: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Maximum value to enforce on new documents',
                    'x-example': null,
                  }),
                default: z
                  .int()
                  .openapi({
                    description:
                      'Default value for attribute when not provided. Cannot be set when attribute is required.',
                    'x-example': null,
                    'x-nullable': true,
                  }),
                newKey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'New attribute key.', 'x-example': null }),
              })
              .openapi({ required: ['required', 'default'] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'AttributeInteger',
        content: { 'application/json': { schema: AttributeIntegerSchema } },
      },
    },
    security: [{ Project: [], Key: [] }],
  },
)

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/ip',
  tags: ['databases'],
  summary: 'Create IP address attribute',
  description: 'Create IP address attribute.\n',
  operationId: 'databasesCreateIpAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': null,
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeIP',
      content: { 'application/json': { schema: AttributeIpSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}',
  tags: ['databases'],
  summary: 'Update IP address attribute',
  description:
    'Update an ip attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateIpAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': null,
                  'x-nullable': true,
                }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeIP',
      content: { 'application/json': { schema: AttributeIpSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRoute =
  createRoute({
    method: 'post',
    path: '/databases/{databaseId}/collections/{collectionId}/attributes/relationship',
    tags: ['databases'],
    summary: 'Create relationship attribute',
    description:
      'Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).\n',
    operationId: 'databasesCreateRelationshipAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                relatedCollectionId: z
                  .string()
                  .openapi({
                    description:
                      'Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
                    'x-example': '<RELATED_COLLECTION_ID>',
                  }),
                type: z
                  .enum(['oneToOne', 'manyToOne', 'manyToMany', 'oneToMany'])
                  .openapi({
                    description: 'Relation type',
                    'x-example': 'oneToOne',
                    'x-enum-name': 'RelationshipType',
                    'x-enum-keys': [],
                  }),
                twoWay: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Is Two Way?', 'x-example': false }),
                key: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Attribute Key.', 'x-example': null }),
                twoWayKey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Two Way Attribute Key.', 'x-example': null }),
                onDelete: z
                  .enum(['cascade', 'restrict', 'setNull'])
                  .exactOptional()
                  .openapi({
                    description: 'Constraints option',
                    'x-example': 'cascade',
                    'x-enum-name': 'RelationMutate',
                    'x-enum-keys': [],
                  }),
              })
              .openapi({ required: ['relatedCollectionId', 'type'] }),
          },
        },
      },
    },
    responses: {
      202: {
        description: 'AttributeRelationship',
        content: { 'application/json': { schema: AttributeRelationshipSchema } },
      },
    },
    security: [{ Project: [], Key: [] }],
  })

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/string',
  tags: ['databases'],
  summary: 'Create string attribute',
  description: 'Create a string attribute.\n',
  operationId: 'databasesCreateStringAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              size: z
                .int()
                .openapi({
                  description: 'Attribute size for text attributes, in number of characters.',
                  'x-example': 1,
                }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': '<DEFAULT>',
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
              encrypt: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['key', 'size', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeString',
      content: { 'application/json': { schema: AttributeStringSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}',
  tags: ['databases'],
  summary: 'Update string attribute',
  description:
    'Update a string attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateStringAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': '<DEFAULT>',
                  'x-nullable': true,
                }),
              size: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum size of the string attribute.', 'x-example': 1 }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeString',
      content: { 'application/json': { schema: AttributeStringSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/url',
  tags: ['databases'],
  summary: 'Create URL attribute',
  description: 'Create a URL attribute.\n',
  operationId: 'databasesCreateUrlAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Attribute Key.', 'x-example': null }),
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': 'https://example.com',
                }),
              array: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is attribute an array?', 'x-example': false }),
            })
            .openapi({ required: ['key', 'required'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'AttributeURL',
      content: { 'application/json': { schema: AttributeUrlSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}',
  tags: ['databases'],
  summary: 'Update URL attribute',
  description:
    'Update an url attribute. Changing the `default` value will not update already existing documents.\n',
  operationId: 'databasesUpdateUrlAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              required: z
                .boolean()
                .openapi({ description: 'Is attribute required?', 'x-example': false }),
              default: z
                .string()
                .openapi({
                  description:
                    'Default value for attribute when not provided. Cannot be set when attribute is required.',
                  'x-example': 'https://example.com',
                  'x-nullable': true,
                }),
              newKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'New attribute key.', 'x-example': null }),
            })
            .openapi({ required: ['required', 'default'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AttributeURL',
      content: { 'application/json': { schema: AttributeUrlSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/{key}',
  tags: ['databases'],
  summary: 'Get attribute',
  description: 'Get attribute by ID.',
  operationId: 'databasesGetAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'AttributeBoolean, or AttributeInteger, or AttributeFloat, or AttributeEmail, or AttributeEnum, or AttributeURL, or AttributeIP, or AttributeDatetime, or AttributeRelationship, or AttributeString',
      content: {
        'application/json': {
          schema: z.xor([
            AttributeBooleanSchema,
            AttributeIntegerSchema,
            AttributeFloatSchema,
            AttributeEmailSchema,
            AttributeEnumSchema,
            AttributeUrlSchema,
            AttributeIpSchema,
            AttributeDatetimeSchema,
            AttributeRelationshipSchema,
            AttributeStringSchema,
          ]),
        },
      },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute = createRoute({
  method: 'delete',
  path: '/databases/{databaseId}/collections/{collectionId}/attributes/{key}',
  tags: ['databases'],
  summary: 'Delete attribute',
  description: 'Deletes an attribute.',
  operationId: 'databasesDeleteAttribute',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Attribute Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRoute =
  createRoute({
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship',
    tags: ['databases'],
    summary: 'Update relationship attribute',
    description:
      'Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).\n',
    operationId: 'databasesUpdateRelationshipAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        key: z
          .string()
          .openapi({
            param: {
              name: 'key',
              description: 'Attribute Key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                onDelete: z
                  .enum(['cascade', 'restrict', 'setNull'])
                  .exactOptional()
                  .openapi({
                    description: 'Constraints option',
                    'x-example': 'cascade',
                    'x-enum-name': 'RelationMutate',
                    'x-enum-keys': [],
                  }),
                newKey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'New attribute key.', 'x-example': null }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'AttributeRelationship',
        content: { 'application/json': { schema: AttributeRelationshipSchema } },
      },
    },
    security: [{ Project: [], Key: [] }],
  })

export const getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/documents',
  tags: ['databases'],
  summary: 'List documents',
  description:
    "Get a list of all the user's documents in a given collection. You can use the query params to filter your results.",
  operationId: 'databasesListDocuments',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Documents List',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute = createRoute({
  method: 'put',
  path: '/databases/{databaseId}/collections/{collectionId}/documents',
  tags: ['databases'],
  summary: 'Upsert documents',
  description:
    'Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.\n',
  operationId: 'databasesUpsertDocuments',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documents: z
                .array(z.object({}))
                .openapi({
                  description:
                    'Array of document data as JSON objects. May contain partial documents.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['documents'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Documents List',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/documents',
  tags: ['databases'],
  summary: 'Create document',
  description:
    'Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.',
  operationId: 'databasesCreateDocument',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<DOCUMENT_ID>',
                }),
              data: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Document data as JSON object.', 'x-example': '{}' }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
              documents: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description: 'Array of documents data as JSON objects.',
                  'x-example': null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute = createRoute({
  method: 'delete',
  path: '/databases/{databaseId}/collections/{collectionId}/documents',
  tags: ['databases'],
  summary: 'Delete documents',
  description:
    'Bulk delete documents using queries, if no queries are passed then all documents are deleted.',
  operationId: 'databasesDeleteDocuments',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              queries: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.',
                  'x-example': null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Documents List',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/documents',
  tags: ['databases'],
  summary: 'Update documents',
  description:
    'Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.',
  operationId: 'databasesUpdateDocuments',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Document data as JSON object. Include only attribute and value pairs to be updated.',
                  'x-example': '{}',
                }),
              queries: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.',
                  'x-example': null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Documents List',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}',
  tags: ['databases'],
  summary: 'Get document',
  description:
    'Get a document by its unique ID. This endpoint response returns a JSON object with the document data.',
  operationId: 'databasesGetDocument',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            description: 'Document ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DOCUMENT_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute = createRoute({
  method: 'put',
  path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}',
  tags: ['databases'],
  summary: 'Upsert document',
  description:
    'Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.',
  operationId: 'databasesUpsertDocument',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            description: 'Document ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DOCUMENT_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({})
                .openapi({
                  description:
                    'Document data as JSON object. Include all required attributes of the document to be created or updated.',
                  'x-example': '{}',
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute = createRoute(
  {
    method: 'delete',
    path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}',
    tags: ['databases'],
    summary: 'Delete document',
    description: 'Delete a document by its unique ID.',
    operationId: 'databasesDeleteDocument',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description:
                'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              name: 'documentId',
              description: 'Document ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
              in: 'path',
            },
            'x-example': '<DOCUMENT_ID>',
          }),
      }),
    },
    responses: { 204: { description: 'No content' } },
    security: [{ Project: [], Session: [], Key: [], JWT: [] }],
  },
)

export const patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}',
  tags: ['databases'],
  summary: 'Update document',
  description:
    'Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.',
  operationId: 'databasesUpdateDocument',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description: 'Collection ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            description: 'Document ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DOCUMENT_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Document data as JSON object. Include only attribute and value pairs to be updated.',
                  'x-example': '{}',
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRoute =
  createRoute({
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement',
    tags: ['databases'],
    summary: 'Decrement document attribute',
    description: 'Decrement a specific attribute of a document by a given value.',
    operationId: 'databasesDecrementDocumentAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description: 'Collection ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              name: 'documentId',
              description: 'Document ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
              in: 'path',
            },
            'x-example': '<DOCUMENT_ID>',
          }),
        attribute: z
          .string()
          .openapi({
            param: {
              name: 'attribute',
              description: 'Attribute key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                value: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'Value to decrement the attribute by. The value must be a number.',
                    'x-example': null,
                  }),
                min: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.',
                    'x-example': null,
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
    },
    security: [{ Project: [], Key: [], Session: [], JWT: [] }],
  })

export const patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRoute =
  createRoute({
    method: 'patch',
    path: '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment',
    tags: ['databases'],
    summary: 'Increment document attribute',
    description: 'Increment a specific attribute of a document by a given value.',
    operationId: 'databasesIncrementDocumentAttribute',
    request: {
      params: z.object({
        databaseId: z
          .string()
          .openapi({
            param: {
              name: 'databaseId',
              description: 'Database ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
              in: 'path',
            },
            'x-example': '<DATABASE_ID>',
          }),
        collectionId: z
          .string()
          .openapi({
            param: {
              name: 'collectionId',
              description: 'Collection ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
              in: 'path',
            },
            'x-example': '<COLLECTION_ID>',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              name: 'documentId',
              description: 'Document ID.',
              required: true,
              schema: { type: 'string', 'x-example': '<DOCUMENT_ID>' },
              in: 'path',
            },
            'x-example': '<DOCUMENT_ID>',
          }),
        attribute: z
          .string()
          .openapi({
            param: {
              name: 'attribute',
              description: 'Attribute key.',
              required: true,
              schema: { type: 'string' },
              in: 'path',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                value: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'Value to increment the attribute by. The value must be a number.',
                    'x-example': null,
                  }),
                max: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.',
                    'x-example': null,
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: { description: 'Document', content: { 'application/json': { schema: DocumentSchema } } },
    },
    security: [{ Project: [], Key: [], Session: [], JWT: [] }],
  })

export const getDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/indexes',
  tags: ['databases'],
  summary: 'List indexes',
  description: 'List indexes in the collection.',
  operationId: 'databasesListIndexes',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indexes List',
      content: { 'application/json': { schema: IndexListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute = createRoute({
  method: 'post',
  path: '/databases/{databaseId}/collections/{collectionId}/indexes',
  tags: ['databases'],
  summary: 'Create index',
  description:
    'Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.\nAttributes can be `key`, `fulltext`, and `unique`.',
  operationId: 'databasesCreateIndex',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ description: 'Index Key.', 'x-example': null }),
              type: z
                .enum(['key', 'fulltext', 'unique'])
                .openapi({
                  description: 'Index type.',
                  'x-example': 'key',
                  'x-enum-name': 'IndexType',
                  'x-enum-keys': [],
                }),
              attributes: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.',
                  'x-example': null,
                }),
              orders: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Array of index orders. Maximum of 100 orders are allowed.',
                  'x-example': null,
                }),
              lengths: z
                .array(z.int())
                .exactOptional()
                .openapi({ description: 'Length of index. Maximum of 100', 'x-example': null }),
            })
            .openapi({ required: ['key', 'type', 'attributes'] }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Index', content: { 'application/json': { schema: IndexSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute = createRoute({
  method: 'get',
  path: '/databases/{databaseId}/collections/{collectionId}/indexes/{key}',
  tags: ['databases'],
  summary: 'Get index',
  description: 'Get index by ID.',
  operationId: 'databasesGetIndex',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Index Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Index', content: { 'application/json': { schema: IndexSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute = createRoute({
  method: 'delete',
  path: '/databases/{databaseId}/collections/{collectionId}/indexes/{key}',
  tags: ['databases'],
  summary: 'Delete index',
  description: 'Delete an index.',
  operationId: 'databasesDeleteIndex',
  request: {
    params: z.object({
      databaseId: z
        .string()
        .openapi({
          param: {
            name: 'databaseId',
            description: 'Database ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DATABASE_ID>' },
            in: 'path',
          },
          'x-example': '<DATABASE_ID>',
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            name: 'collectionId',
            description:
              'Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).',
            required: true,
            schema: { type: 'string', 'x-example': '<COLLECTION_ID>' },
            in: 'path',
          },
          'x-example': '<COLLECTION_ID>',
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'Index Key.',
            required: true,
            schema: { type: 'string' },
            in: 'path',
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsRoute = createRoute({
  method: 'get',
  path: '/functions',
  tags: ['functions'],
  summary: 'List functions',
  description:
    "Get a list of all the project's functions. You can use the query params to filter your results.",
  operationId: 'functionsList',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Functions List',
      content: { 'application/json': { schema: FunctionListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsRoute = createRoute({
  method: 'post',
  path: '/functions',
  tags: ['functions'],
  summary: 'Create function',
  description:
    'Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.',
  operationId: 'functionsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              functionId: z
                .string()
                .openapi({
                  description:
                    "Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<FUNCTION_ID>',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Function name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              runtime: z
                .enum([
                  'node-14.5',
                  'node-16.0',
                  'node-18.0',
                  'node-19.0',
                  'node-20.0',
                  'node-21.0',
                  'node-22',
                  'php-8.0',
                  'php-8.1',
                  'php-8.2',
                  'php-8.3',
                  'ruby-3.0',
                  'ruby-3.1',
                  'ruby-3.2',
                  'ruby-3.3',
                  'python-3.8',
                  'python-3.9',
                  'python-3.10',
                  'python-3.11',
                  'python-3.12',
                  'python-ml-3.11',
                  'python-ml-3.12',
                  'deno-1.21',
                  'deno-1.24',
                  'deno-1.35',
                  'deno-1.40',
                  'deno-1.46',
                  'deno-2.0',
                  'dart-2.15',
                  'dart-2.16',
                  'dart-2.17',
                  'dart-2.18',
                  'dart-2.19',
                  'dart-3.0',
                  'dart-3.1',
                  'dart-3.3',
                  'dart-3.5',
                  'dart-3.8',
                  'dotnet-6.0',
                  'dotnet-7.0',
                  'dotnet-8.0',
                  'java-8.0',
                  'java-11.0',
                  'java-17.0',
                  'java-18.0',
                  'java-21.0',
                  'java-22',
                  'swift-5.5',
                  'swift-5.8',
                  'swift-5.9',
                  'swift-5.10',
                  'kotlin-1.6',
                  'kotlin-1.8',
                  'kotlin-1.9',
                  'kotlin-2.0',
                  'cpp-17',
                  'cpp-20',
                  'bun-1.0',
                  'bun-1.1',
                  'go-1.23',
                  'static-1',
                  'flutter-3.24',
                  'flutter-3.27',
                  'flutter-3.29',
                  'flutter-3.32',
                ])
                .openapi({
                  description: 'Execution runtime.',
                  'x-example': 'node-14.5',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              execute: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.',
                  'x-example': '["any"]',
                }),
              events: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Events list. Maximum of 100 events are allowed.',
                  'x-example': null,
                }),
              schedule: z
                .string()
                .exactOptional()
                .openapi({ description: 'Schedule CRON syntax.', 'x-example': null }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Function maximum execution time in seconds.',
                  'x-example': 1,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.",
                  'x-example': false,
                }),
              logging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When disabled, executions will exclude logs and errors, and will be slightly faster.',
                  'x-example': false,
                }),
              entrypoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Entrypoint File. This path is relative to the "providerRootDirectory".',
                  'x-example': '<ENTRYPOINT>',
                }),
              commands: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Commands.', 'x-example': '<COMMANDS>' }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.',
                  'x-example': null,
                }),
              installationId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Appwrite Installation ID for VCS (Version Control System) deployment.',
                  'x-example': '<INSTALLATION_ID>',
                }),
              providerRepositoryId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Repository ID of the repo linked to the function.',
                  'x-example': '<PROVIDER_REPOSITORY_ID>',
                }),
              providerBranch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Production branch for the repo linked to the function.',
                  'x-example': '<PROVIDER_BRANCH>',
                }),
              providerSilentMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.',
                  'x-example': false,
                }),
              providerRootDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to function code in the linked repo.',
                  'x-example': '<PROVIDER_ROOT_DIRECTORY>',
                }),
              specification: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Runtime specification for the function and builds.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['functionId', 'name', 'runtime'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Function', content: { 'application/json': { schema: FunctionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsRuntimesRoute = createRoute({
  method: 'get',
  path: '/functions/runtimes',
  tags: ['functions'],
  summary: 'List runtimes',
  description: 'Get a list of all runtimes that are currently active on your instance.',
  operationId: 'functionsListRuntimes',
  responses: {
    200: {
      description: 'Runtimes List',
      content: { 'application/json': { schema: RuntimeListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsSpecificationsRoute = createRoute({
  method: 'get',
  path: '/functions/specifications',
  tags: ['functions'],
  summary: 'List specifications',
  description: 'List allowed function specifications for this instance.',
  operationId: 'functionsListSpecifications',
  responses: {
    200: {
      description: 'Specifications List',
      content: { 'application/json': { schema: SpecificationListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}',
  tags: ['functions'],
  summary: 'Get function',
  description: 'Get a function by its unique ID.',
  operationId: 'functionsGet',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Function', content: { 'application/json': { schema: FunctionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putFunctionsFunctionIdRoute = createRoute({
  method: 'put',
  path: '/functions/{functionId}',
  tags: ['functions'],
  summary: 'Update function',
  description: 'Update function by its unique ID.',
  operationId: 'functionsUpdate',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Function name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              runtime: z
                .enum([
                  'node-14.5',
                  'node-16.0',
                  'node-18.0',
                  'node-19.0',
                  'node-20.0',
                  'node-21.0',
                  'node-22',
                  'php-8.0',
                  'php-8.1',
                  'php-8.2',
                  'php-8.3',
                  'ruby-3.0',
                  'ruby-3.1',
                  'ruby-3.2',
                  'ruby-3.3',
                  'python-3.8',
                  'python-3.9',
                  'python-3.10',
                  'python-3.11',
                  'python-3.12',
                  'python-ml-3.11',
                  'python-ml-3.12',
                  'deno-1.21',
                  'deno-1.24',
                  'deno-1.35',
                  'deno-1.40',
                  'deno-1.46',
                  'deno-2.0',
                  'dart-2.15',
                  'dart-2.16',
                  'dart-2.17',
                  'dart-2.18',
                  'dart-2.19',
                  'dart-3.0',
                  'dart-3.1',
                  'dart-3.3',
                  'dart-3.5',
                  'dart-3.8',
                  'dotnet-6.0',
                  'dotnet-7.0',
                  'dotnet-8.0',
                  'java-8.0',
                  'java-11.0',
                  'java-17.0',
                  'java-18.0',
                  'java-21.0',
                  'java-22',
                  'swift-5.5',
                  'swift-5.8',
                  'swift-5.9',
                  'swift-5.10',
                  'kotlin-1.6',
                  'kotlin-1.8',
                  'kotlin-1.9',
                  'kotlin-2.0',
                  'cpp-17',
                  'cpp-20',
                  'bun-1.0',
                  'bun-1.1',
                  'go-1.23',
                  'static-1',
                  'flutter-3.24',
                  'flutter-3.27',
                  'flutter-3.29',
                  'flutter-3.32',
                ])
                .exactOptional()
                .openapi({
                  description: 'Execution runtime.',
                  'x-example': 'node-14.5',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              execute: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.',
                  'x-example': '["any"]',
                }),
              events: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Events list. Maximum of 100 events are allowed.',
                  'x-example': null,
                }),
              schedule: z
                .string()
                .exactOptional()
                .openapi({ description: 'Schedule CRON syntax.', 'x-example': null }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum execution time in seconds.', 'x-example': 1 }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.",
                  'x-example': false,
                }),
              logging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When disabled, executions will exclude logs and errors, and will be slightly faster.',
                  'x-example': false,
                }),
              entrypoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Entrypoint File. This path is relative to the "providerRootDirectory".',
                  'x-example': '<ENTRYPOINT>',
                }),
              commands: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Commands.', 'x-example': '<COMMANDS>' }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.',
                  'x-example': null,
                }),
              installationId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Appwrite Installation ID for VCS (Version Controle System) deployment.',
                  'x-example': '<INSTALLATION_ID>',
                }),
              providerRepositoryId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Repository ID of the repo linked to the function',
                  'x-example': '<PROVIDER_REPOSITORY_ID>',
                  'x-nullable': true,
                }),
              providerBranch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Production branch for the repo linked to the function',
                  'x-example': '<PROVIDER_BRANCH>',
                }),
              providerSilentMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.',
                  'x-example': false,
                }),
              providerRootDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to function code in the linked repo.',
                  'x-example': '<PROVIDER_ROOT_DIRECTORY>',
                }),
              specification: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Runtime specification for the function and builds.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Function', content: { 'application/json': { schema: FunctionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteFunctionsFunctionIdRoute = createRoute({
  method: 'delete',
  path: '/functions/{functionId}',
  tags: ['functions'],
  summary: 'Delete function',
  description: 'Delete a function by its unique ID.',
  operationId: 'functionsDelete',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchFunctionsFunctionIdDeploymentRoute = createRoute({
  method: 'patch',
  path: '/functions/{functionId}/deployment',
  tags: ['functions'],
  summary: "Update function's deployment",
  description:
    'Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.',
  operationId: 'functionsUpdateFunctionDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deploymentId: z
                .string()
                .openapi({ description: 'Deployment ID.', 'x-example': '<DEPLOYMENT_ID>' }),
            })
            .openapi({ required: ['deploymentId'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Function', content: { 'application/json': { schema: FunctionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/deployments',
  tags: ['functions'],
  summary: 'List deployments',
  description:
    "Get a list of all the function's code deployments. You can use the query params to filter your results.",
  operationId: 'functionsListDeployments',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployments List',
      content: { 'application/json': { schema: DeploymentListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsFunctionIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/deployments',
  tags: ['functions'],
  summary: 'Create deployment',
  description:
    'Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you\'ll need to update the function\'s deployment to use your new deployment UID.\n\nThis endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).\n\nUse the "command" param to set the entrypoint used to execute your code.',
  operationId: 'functionsCreateDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              entrypoint: z
                .string()
                .exactOptional()
                .openapi({ description: 'Entrypoint File.', 'x-example': '<ENTRYPOINT>' }),
              commands: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Commands.', 'x-example': '<COMMANDS>' }),
              code: z
                .string()
                .openapi({
                  description:
                    'Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.',
                  'x-example': null,
                }),
              activate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['code', 'activate'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsFunctionIdDeploymentsDuplicateRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/deployments/duplicate',
  tags: ['functions'],
  summary: 'Create duplicate deployment',
  description:
    "Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.",
  operationId: 'functionsCreateDuplicateDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deploymentId: z
                .string()
                .openapi({ description: 'Deployment ID.', 'x-example': '<DEPLOYMENT_ID>' }),
              buildId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build unique ID.', 'x-example': '<BUILD_ID>' }),
            })
            .openapi({ required: ['deploymentId'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsFunctionIdDeploymentsTemplateRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/deployments/template',
  tags: ['functions'],
  summary: 'Create template deployment',
  description:
    'Create a deployment based on a template.\n\nUse this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/functions#listTemplates) to find the template details.',
  operationId: 'functionsCreateTemplateDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              repository: z
                .string()
                .openapi({
                  description: 'Repository name of the template.',
                  'x-example': '<REPOSITORY>',
                }),
              owner: z
                .string()
                .openapi({
                  description: 'The name of the owner of the template.',
                  'x-example': '<OWNER>',
                }),
              rootDirectory: z
                .string()
                .openapi({
                  description: 'Path to function code in the template repo.',
                  'x-example': '<ROOT_DIRECTORY>',
                }),
              version: z
                .string()
                .openapi({
                  description: 'Version (tag) for the repo linked to the function template.',
                  'x-example': '<VERSION>',
                }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['repository', 'owner', 'rootDirectory', 'version'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsFunctionIdDeploymentsVcsRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/deployments/vcs',
  tags: ['functions'],
  summary: 'Create VCS deployment',
  description:
    'Create a deployment when a function is connected to VCS.\n\nThis endpoint lets you create deployment from a branch, commit, or a tag.',
  operationId: 'functionsCreateVcsDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['branch', 'commit'])
                .openapi({
                  description: 'Type of reference passed. Allowed values are: branch, commit',
                  'x-example': 'branch',
                  'x-enum-name': 'VCSDeploymentType',
                  'x-enum-keys': [],
                }),
              reference: z
                .string()
                .openapi({
                  description:
                    'VCS reference to create deployment from. Depending on type this can be: branch name, commit hash',
                  'x-example': '<REFERENCE>',
                }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['type', 'reference'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/deployments/{deploymentId}',
  tags: ['functions'],
  summary: 'Get deployment',
  description: 'Get a function deployment by its unique ID.',
  operationId: 'functionsGetDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteFunctionsFunctionIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/functions/{functionId}/deployments/{deploymentId}',
  tags: ['functions'],
  summary: 'Delete deployment',
  description: 'Delete a code deployment by its unique ID.',
  operationId: 'functionsDeleteDeployment',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/deployments/{deploymentId}/download',
  tags: ['functions'],
  summary: 'Get deployment download',
  description:
    "Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.",
  operationId: 'functionsGetDeploymentDownload',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
    query: z.object({
      type: z
        .enum(['source', 'output'])
        .default('source')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            description: 'Deployment file to download. Can be: "source", "output".',
            required: false,
            schema: {
              type: 'string',
              'x-example': 'source',
              enum: ['source', 'output'],
              'x-enum-name': 'DeploymentDownloadType',
              'x-enum-keys': [],
              default: 'source',
            },
            in: 'query',
          },
          'x-example': 'source',
          'x-enum-name': 'DeploymentDownloadType',
          'x-enum-keys': [],
        }),
    }),
  },
  responses: { 200: { description: 'File' } },
  security: [{ Project: [], Key: [], JWT: [] }],
})

export const patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRoute = createRoute({
  method: 'patch',
  path: '/functions/{functionId}/deployments/{deploymentId}/status',
  tags: ['functions'],
  summary: 'Update deployment status',
  description:
    "Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.",
  operationId: 'functionsUpdateDeploymentStatus',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/executions',
  tags: ['functions'],
  summary: 'List executions',
  description:
    'Get a list of all the current user function execution logs. You can use the query params to filter your results.',
  operationId: 'functionsListExecutions',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Executions List',
      content: { 'application/json': { schema: ExecutionListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const postFunctionsFunctionIdExecutionsRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/executions',
  tags: ['functions'],
  summary: 'Create execution',
  description:
    'Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.',
  operationId: 'functionsCreateExecution',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'HTTP body of execution. Default value is empty string.',
                  'x-example': '<BODY>',
                }),
              async: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Execute code in the background. Default value is false.',
                  'x-example': false,
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'HTTP path of execution. Path can include query params. Default value is /',
                  'x-example': '<PATH>',
                }),
              method: z
                .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])
                .exactOptional()
                .openapi({
                  description: 'HTTP method of execution. Default value is GET.',
                  'x-example': 'GET',
                  'x-enum-name': 'ExecutionMethod',
                  'x-enum-keys': [],
                }),
              headers: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'HTTP headers of execution. Defaults to empty.',
                  'x-example': null,
                }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.',
                  'x-example': '<SCHEDULED_AT>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Execution',
      content: { 'multipart/form-data': { schema: ExecutionSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getFunctionsFunctionIdExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/executions/{executionId}',
  tags: ['functions'],
  summary: 'Get execution',
  description: 'Get a function execution log by its unique ID.',
  operationId: 'functionsGetExecution',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            name: 'executionId',
            description: 'Execution ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<EXECUTION_ID>' },
            in: 'path',
          },
          'x-example': '<EXECUTION_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Execution', content: { 'application/json': { schema: ExecutionSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteFunctionsFunctionIdExecutionsExecutionIdRoute = createRoute({
  method: 'delete',
  path: '/functions/{functionId}/executions/{executionId}',
  tags: ['functions'],
  summary: 'Delete execution',
  description: 'Delete a function execution by its unique ID.',
  operationId: 'functionsDeleteExecution',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            name: 'executionId',
            description: 'Execution ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<EXECUTION_ID>' },
            in: 'path',
          },
          'x-example': '<EXECUTION_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdVariablesRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/variables',
  tags: ['functions'],
  summary: 'List variables',
  description: 'Get a list of all variables of a specific function.',
  operationId: 'functionsListVariables',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Variables List',
      content: { 'application/json': { schema: VariableListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postFunctionsFunctionIdVariablesRoute = createRoute({
  method: 'post',
  path: '/functions/{functionId}/variables',
  tags: ['functions'],
  summary: 'Create variable',
  description:
    'Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.',
  operationId: 'functionsCreateVariable',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .openapi({
                  description: 'Variable key. Max length: 255 chars.',
                  'x-example': '<KEY>',
                }),
              value: z
                .string()
                .openapi({
                  description: 'Variable value. Max length: 8192 chars.',
                  'x-example': '<VALUE>',
                }),
              secret: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Secret variables can be updated or deleted, but only functions can read them during build and runtime.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['key', 'value'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getFunctionsFunctionIdVariablesVariableIdRoute = createRoute({
  method: 'get',
  path: '/functions/{functionId}/variables/{variableId}',
  tags: ['functions'],
  summary: 'Get variable',
  description: 'Get a variable by its unique ID.',
  operationId: 'functionsGetVariable',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putFunctionsFunctionIdVariablesVariableIdRoute = createRoute({
  method: 'put',
  path: '/functions/{functionId}/variables/{variableId}',
  tags: ['functions'],
  summary: 'Update variable',
  description: 'Update variable by its unique ID.',
  operationId: 'functionsUpdateVariable',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .openapi({
                  description: 'Variable key. Max length: 255 chars.',
                  'x-example': '<KEY>',
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Variable value. Max length: 8192 chars.',
                  'x-example': '<VALUE>',
                }),
              secret: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Secret variables can be updated or deleted, but only functions can read them during build and runtime.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['key'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteFunctionsFunctionIdVariablesVariableIdRoute = createRoute({
  method: 'delete',
  path: '/functions/{functionId}/variables/{variableId}',
  tags: ['functions'],
  summary: 'Delete variable',
  description: 'Delete a variable by its unique ID.',
  operationId: 'functionsDeleteVariable',
  request: {
    params: z.object({
      functionId: z
        .string()
        .openapi({
          param: {
            name: 'functionId',
            description: 'Function unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FUNCTION_ID>' },
            in: 'path',
          },
          'x-example': '<FUNCTION_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const postGraphqlRoute = createRoute({
  method: 'post',
  path: '/graphql',
  tags: ['graphql'],
  summary: 'GraphQL endpoint',
  description: 'Execute a GraphQL mutation.',
  operationId: 'graphqlQuery',
  responses: {
    200: { description: 'Any', content: { 'application/json': { schema: AnySchema } } },
  },
  security: [{ Project: [], Key: [], Session: [], JWT: [] }],
})

export const postGraphqlMutationRoute = createRoute({
  method: 'post',
  path: '/graphql/mutation',
  tags: ['graphql'],
  summary: 'GraphQL endpoint',
  description: 'Execute a GraphQL mutation.',
  operationId: 'graphqlMutation',
  responses: {
    200: { description: 'Any', content: { 'application/json': { schema: AnySchema } } },
  },
  security: [{ Project: [], Key: [], Session: [], JWT: [] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  summary: 'Get HTTP',
  description: 'Check the Appwrite HTTP server is up and responsive.',
  operationId: 'healthGet',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthAntiVirusRoute = createRoute({
  method: 'get',
  path: '/health/anti-virus',
  tags: ['health'],
  summary: 'Get antivirus',
  description: 'Check the Appwrite Antivirus server is up and connection is successful.',
  operationId: 'healthGetAntivirus',
  responses: {
    200: {
      description: 'Health Antivirus',
      content: { 'application/json': { schema: HealthAntivirusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthCacheRoute = createRoute({
  method: 'get',
  path: '/health/cache',
  tags: ['health'],
  summary: 'Get cache',
  description: 'Check the Appwrite in-memory cache servers are up and connection is successful.',
  operationId: 'healthGetCache',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthCertificateRoute = createRoute({
  method: 'get',
  path: '/health/certificate',
  tags: ['health'],
  summary: 'Get the SSL certificate for a domain',
  description: 'Get the SSL certificate for a domain',
  operationId: 'healthGetCertificate',
  request: {
    query: z.object({
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'domain',
            description: 'string',
            required: false,
            schema: { type: 'string' },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Certificate',
      content: { 'application/json': { schema: HealthCertificateSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthDbRoute = createRoute({
  method: 'get',
  path: '/health/db',
  tags: ['health'],
  summary: 'Get DB',
  description: 'Check the Appwrite database servers are up and connection is successful.',
  operationId: 'healthGetDB',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthPubsubRoute = createRoute({
  method: 'get',
  path: '/health/pubsub',
  tags: ['health'],
  summary: 'Get pubsub',
  description: 'Check the Appwrite pub-sub servers are up and connection is successful.',
  operationId: 'healthGetPubSub',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueBuildsRoute = createRoute({
  method: 'get',
  path: '/health/queue/builds',
  tags: ['health'],
  summary: 'Get builds queue',
  description:
    'Get the number of builds that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueBuilds',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueCertificatesRoute = createRoute({
  method: 'get',
  path: '/health/queue/certificates',
  tags: ['health'],
  summary: 'Get certificates queue',
  description:
    'Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.',
  operationId: 'healthGetQueueCertificates',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueDatabasesRoute = createRoute({
  method: 'get',
  path: '/health/queue/databases',
  tags: ['health'],
  summary: 'Get databases queue',
  description:
    'Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueDatabases',
  request: {
    query: z.object({
      name: z
        .string()
        .default('database_db_main')
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            description: 'Queue name for which to check the queue size',
            required: false,
            schema: { type: 'string', 'x-example': '<NAME>', default: 'database_db_main' },
            in: 'query',
          },
          'x-example': '<NAME>',
        }),
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueDeletesRoute = createRoute({
  method: 'get',
  path: '/health/queue/deletes',
  tags: ['health'],
  summary: 'Get deletes queue',
  description:
    'Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueDeletes',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueFailedNameRoute = createRoute({
  method: 'get',
  path: '/health/queue/failed/{name}',
  tags: ['health'],
  summary: 'Get number of failed queue jobs',
  description: 'Returns the amount of failed jobs in a given queue.\n',
  operationId: 'healthGetFailedJobs',
  request: {
    params: z.object({
      name: z
        .enum([
          'v1-database',
          'v1-deletes',
          'v1-audits',
          'v1-mails',
          'v1-functions',
          'v1-stats-resources',
          'v1-stats-usage',
          'v1-webhooks',
          'v1-certificates',
          'v1-builds',
          'v1-messaging',
          'v1-migrations',
        ])
        .openapi({
          param: {
            name: 'name',
            description: 'The name of the queue',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'v1-database',
              enum: [
                'v1-database',
                'v1-deletes',
                'v1-audits',
                'v1-mails',
                'v1-functions',
                'v1-stats-resources',
                'v1-stats-usage',
                'v1-webhooks',
                'v1-certificates',
                'v1-builds',
                'v1-messaging',
                'v1-migrations',
              ],
              'x-enum-name': null,
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'v1-database',
          'x-enum-name': null,
          'x-enum-keys': [],
        }),
    }),
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueFunctionsRoute = createRoute({
  method: 'get',
  path: '/health/queue/functions',
  tags: ['health'],
  summary: 'Get functions queue',
  description:
    'Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueFunctions',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueLogsRoute = createRoute({
  method: 'get',
  path: '/health/queue/logs',
  tags: ['health'],
  summary: 'Get logs queue',
  description:
    'Get the number of logs that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueLogs',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueMailsRoute = createRoute({
  method: 'get',
  path: '/health/queue/mails',
  tags: ['health'],
  summary: 'Get mails queue',
  description:
    'Get the number of mails that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueMails',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueMessagingRoute = createRoute({
  method: 'get',
  path: '/health/queue/messaging',
  tags: ['health'],
  summary: 'Get messaging queue',
  description:
    'Get the number of messages that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueMessaging',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueMigrationsRoute = createRoute({
  method: 'get',
  path: '/health/queue/migrations',
  tags: ['health'],
  summary: 'Get migrations queue',
  description:
    'Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueMigrations',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueStatsResourcesRoute = createRoute({
  method: 'get',
  path: '/health/queue/stats-resources',
  tags: ['health'],
  summary: 'Get stats  resources queue',
  description:
    'Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.',
  operationId: 'healthGetQueueStatsResources',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueStatsUsageRoute = createRoute({
  method: 'get',
  path: '/health/queue/stats-usage',
  tags: ['health'],
  summary: 'Get stats usage queue',
  description:
    'Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueUsage',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthQueueWebhooksRoute = createRoute({
  method: 'get',
  path: '/health/queue/webhooks',
  tags: ['health'],
  summary: 'Get webhooks queue',
  description:
    'Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.',
  operationId: 'healthGetQueueWebhooks',
  request: {
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5000)
        .exactOptional()
        .openapi({
          param: {
            name: 'threshold',
            description:
              'Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 5000 },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Health Queue',
      content: { 'application/json': { schema: HealthQueueSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthStorageRoute = createRoute({
  method: 'get',
  path: '/health/storage',
  tags: ['health'],
  summary: 'Get storage',
  description: 'Check the Appwrite storage device is up and connection is successful.',
  operationId: 'healthGetStorage',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthStorageLocalRoute = createRoute({
  method: 'get',
  path: '/health/storage/local',
  tags: ['health'],
  summary: 'Get local storage',
  description: 'Check the Appwrite local storage device is up and connection is successful.',
  operationId: 'healthGetStorageLocal',
  responses: {
    200: {
      description: 'Health Status',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getHealthTimeRoute = createRoute({
  method: 'get',
  path: '/health/time',
  tags: ['health'],
  summary: 'Get time',
  description:
    'Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.',
  operationId: 'healthGetTime',
  responses: {
    200: {
      description: 'Health Time',
      content: { 'application/json': { schema: HealthTimeSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getLocaleRoute = createRoute({
  method: 'get',
  path: '/locale',
  tags: ['locale'],
  summary: 'Get user locale',
  description:
    'Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.\n\n([IP Geolocation by DB-IP](https://db-ip.com))',
  operationId: 'localeGet',
  responses: {
    200: { description: 'Locale', content: { 'application/json': { schema: LocaleSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleCodesRoute = createRoute({
  method: 'get',
  path: '/locale/codes',
  tags: ['locale'],
  summary: 'List locale codes',
  description:
    'List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).',
  operationId: 'localeListCodes',
  responses: {
    200: {
      description: 'Locale codes list',
      content: { 'application/json': { schema: LocaleCodeListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleContinentsRoute = createRoute({
  method: 'get',
  path: '/locale/continents',
  tags: ['locale'],
  summary: 'List continents',
  description:
    'List of all continents. You can use the locale header to get the data in a supported language.',
  operationId: 'localeListContinents',
  responses: {
    200: {
      description: 'Continents List',
      content: { 'application/json': { schema: ContinentListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleCountriesRoute = createRoute({
  method: 'get',
  path: '/locale/countries',
  tags: ['locale'],
  summary: 'List countries',
  description:
    'List of all countries. You can use the locale header to get the data in a supported language.',
  operationId: 'localeListCountries',
  responses: {
    200: {
      description: 'Countries List',
      content: { 'application/json': { schema: CountryListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleCountriesEuRoute = createRoute({
  method: 'get',
  path: '/locale/countries/eu',
  tags: ['locale'],
  summary: 'List EU countries',
  description:
    'List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.',
  operationId: 'localeListCountriesEU',
  responses: {
    200: {
      description: 'Countries List',
      content: { 'application/json': { schema: CountryListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleCountriesPhonesRoute = createRoute({
  method: 'get',
  path: '/locale/countries/phones',
  tags: ['locale'],
  summary: 'List countries phone codes',
  description:
    'List of all countries phone codes. You can use the locale header to get the data in a supported language.',
  operationId: 'localeListCountriesPhones',
  responses: {
    200: {
      description: 'Phones List',
      content: { 'application/json': { schema: PhoneListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleCurrenciesRoute = createRoute({
  method: 'get',
  path: '/locale/currencies',
  tags: ['locale'],
  summary: 'List currencies',
  description:
    'List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.',
  operationId: 'localeListCurrencies',
  responses: {
    200: {
      description: 'Currencies List',
      content: { 'application/json': { schema: CurrencyListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getLocaleLanguagesRoute = createRoute({
  method: 'get',
  path: '/locale/languages',
  tags: ['locale'],
  summary: 'List languages',
  description:
    'List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.',
  operationId: 'localeListLanguages',
  responses: {
    200: {
      description: 'Languages List',
      content: { 'application/json': { schema: LanguageListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getMessagingMessagesRoute = createRoute({
  method: 'get',
  path: '/messaging/messages',
  tags: ['messaging'],
  summary: 'List messages',
  description: 'Get a list of all messages from the current Appwrite project.',
  operationId: 'messagingListMessages',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message list',
      content: { 'application/json': { schema: MessageListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingMessagesEmailRoute = createRoute({
  method: 'post',
  path: '/messaging/messages/email',
  tags: ['messaging'],
  summary: 'Create email',
  description: 'Create a new email message.',
  operationId: 'messagingCreateEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z
                .string()
                .openapi({
                  description:
                    "Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<MESSAGE_ID>',
                }),
              subject: z
                .string()
                .openapi({ description: 'Email Subject.', 'x-example': '<SUBJECT>' }),
              content: z
                .string()
                .openapi({ description: 'Email Content.', 'x-example': '<CONTENT>' }),
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              cc: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Array of target IDs to be added as CC.',
                  'x-example': null,
                }),
              bcc: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Array of target IDs to be added as BCC.',
                  'x-example': null,
                }),
              attachments: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.',
                  'x-example': null,
                }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              html: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is content of type HTML', 'x-example': false }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['messageId', 'subject', 'content'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingMessagesEmailMessageIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/messages/email/{messageId}',
  tags: ['messaging'],
  summary: 'Update email',
  description:
    'Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.\n',
  operationId: 'messagingUpdateEmail',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              subject: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email Subject.', 'x-example': '<SUBJECT>' }),
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email Content.', 'x-example': '<CONTENT>' }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              html: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is content of type HTML', 'x-example': false }),
              cc: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Array of target IDs to be added as CC.',
                  'x-example': null,
                }),
              bcc: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Array of target IDs to be added as BCC.',
                  'x-example': null,
                }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
              attachments: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.',
                  'x-example': null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingMessagesPushRoute = createRoute({
  method: 'post',
  path: '/messaging/messages/push',
  tags: ['messaging'],
  summary: 'Create push notification',
  description: 'Create a new push notification.',
  operationId: 'messagingCreatePush',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z
                .string()
                .openapi({
                  description:
                    "Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<MESSAGE_ID>',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Title for push notification.', 'x-example': '<TITLE>' }),
              body: z
                .string()
                .exactOptional()
                .openapi({ description: 'Body for push notification.', 'x-example': '<BODY>' }),
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Additional key-value pair data for push notification.',
                  'x-example': '{}',
                }),
              action: z
                .string()
                .exactOptional()
                .openapi({ description: 'Action for push notification.', 'x-example': '<ACTION>' }),
              image: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.',
                  'x-example': '[ID1:ID2]',
                }),
              icon: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Icon for push notification. Available only for Android and Web Platform.',
                  'x-example': '<ICON>',
                }),
              sound: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Sound for push notification. Available only for Android and iOS Platform.',
                  'x-example': '<SOUND>',
                }),
              color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Color for push notification. Available only for Android Platform.',
                  'x-example': '<COLOR>',
                }),
              tag: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Tag for push notification. Available only for Android Platform.',
                  'x-example': '<TAG>',
                }),
              badge: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Badge for push notification. Available only for iOS Platform.',
                  'x-example': null,
                }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
              contentAvailable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the notification will be delivered in the background. Available only for iOS Platform.',
                  'x-example': false,
                }),
              critical: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.',
                  'x-example': false,
                }),
              priority: z
                .enum(['normal', 'high'])
                .exactOptional()
                .openapi({
                  description:
                    'Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.',
                  'x-example': 'normal',
                  'x-enum-name': 'MessagePriority',
                  'x-enum-keys': [],
                }),
            })
            .openapi({ required: ['messageId'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingMessagesPushMessageIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/messages/push/{messageId}',
  tags: ['messaging'],
  summary: 'Update push notification',
  description:
    'Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.\n',
  operationId: 'messagingUpdatePush',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Title for push notification.', 'x-example': '<TITLE>' }),
              body: z
                .string()
                .exactOptional()
                .openapi({ description: 'Body for push notification.', 'x-example': '<BODY>' }),
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Additional Data for push notification.',
                  'x-example': '{}',
                }),
              action: z
                .string()
                .exactOptional()
                .openapi({ description: 'Action for push notification.', 'x-example': '<ACTION>' }),
              image: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.',
                  'x-example': '[ID1:ID2]',
                }),
              icon: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Icon for push notification. Available only for Android and Web platforms.',
                  'x-example': '<ICON>',
                }),
              sound: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Sound for push notification. Available only for Android and iOS platforms.',
                  'x-example': '<SOUND>',
                }),
              color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Color for push notification. Available only for Android platforms.',
                  'x-example': '<COLOR>',
                }),
              tag: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Tag for push notification. Available only for Android platforms.',
                  'x-example': '<TAG>',
                }),
              badge: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Badge for push notification. Available only for iOS platforms.',
                  'x-example': null,
                }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
              contentAvailable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the notification will be delivered in the background. Available only for iOS Platform.',
                  'x-example': false,
                }),
              critical: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.',
                  'x-example': false,
                }),
              priority: z
                .enum(['normal', 'high'])
                .exactOptional()
                .openapi({
                  description:
                    'Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.',
                  'x-example': 'normal',
                  'x-enum-name': 'MessagePriority',
                  'x-enum-keys': [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingMessagesSmsRoute = createRoute({
  method: 'post',
  path: '/messaging/messages/sms',
  tags: ['messaging'],
  summary: 'Create SMS',
  description: 'Create a new SMS message.',
  operationId: 'messagingCreateSms',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z
                .string()
                .openapi({
                  description:
                    "Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<MESSAGE_ID>',
                }),
              content: z
                .string()
                .openapi({ description: 'SMS Content.', 'x-example': '<CONTENT>' }),
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['messageId', 'content'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingMessagesSmsMessageIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/messages/sms/{messageId}',
  tags: ['messaging'],
  summary: 'Update SMS',
  description:
    'Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.\n',
  operationId: 'messagingUpdateSms',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topics: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Topic IDs.', 'x-example': null }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of User IDs.', 'x-example': null }),
              targets: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of Targets IDs.', 'x-example': null }),
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email Content.', 'x-example': '<CONTENT>' }),
              draft: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is message a draft', 'x-example': false }),
              scheduledAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.',
                  'x-example': null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/messaging/messages/{messageId}',
  tags: ['messaging'],
  summary: 'Get message',
  description: 'Get a message by its unique ID.\n',
  operationId: 'messagingGetMessage',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Message', content: { 'application/json': { schema: MessageSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteMessagingMessagesMessageIdRoute = createRoute({
  method: 'delete',
  path: '/messaging/messages/{messageId}',
  tags: ['messaging'],
  summary: 'Delete message',
  description:
    'Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.',
  operationId: 'messagingDelete',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingMessagesMessageIdLogsRoute = createRoute({
  method: 'get',
  path: '/messaging/messages/{messageId}/logs',
  tags: ['messaging'],
  summary: 'List message logs',
  description: 'Get the message activity logs listed by its unique ID.',
  operationId: 'messagingListMessageLogs',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingMessagesMessageIdTargetsRoute = createRoute({
  method: 'get',
  path: '/messaging/messages/{messageId}/targets',
  tags: ['messaging'],
  summary: 'List message targets',
  description: 'Get a list of the targets associated with a message.',
  operationId: 'messagingListTargets',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            description: 'Message ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MESSAGE_ID>' },
            in: 'path',
          },
          'x-example': '<MESSAGE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Target list',
      content: { 'application/json': { schema: TargetListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingProvidersRoute = createRoute({
  method: 'get',
  path: '/messaging/providers',
  tags: ['messaging'],
  summary: 'List providers',
  description: 'Get a list of all providers from the current Appwrite project.',
  operationId: 'messagingListProviders',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Provider list',
      content: { 'application/json': { schema: ProviderListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersApnsRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/apns',
  tags: ['messaging'],
  summary: 'Create APNS provider',
  description: 'Create a new Apple Push Notification service provider.',
  operationId: 'messagingCreateApnsProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              authKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS authentication key.', 'x-example': '<AUTH_KEY>' }),
              authKeyId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'APNS authentication key ID.',
                  'x-example': '<AUTH_KEY_ID>',
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS team ID.', 'x-example': '<TEAM_ID>' }),
              bundleId: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS bundle ID.', 'x-example': '<BUNDLE_ID>' }),
              sandbox: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use APNS sandbox environment.', 'x-example': false }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersApnsProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/apns/{providerId}',
  tags: ['messaging'],
  summary: 'Update APNS provider',
  description: 'Update a Apple Push Notification service provider by its unique ID.',
  operationId: 'messagingUpdateApnsProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              authKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS authentication key.', 'x-example': '<AUTH_KEY>' }),
              authKeyId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'APNS authentication key ID.',
                  'x-example': '<AUTH_KEY_ID>',
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS team ID.', 'x-example': '<TEAM_ID>' }),
              bundleId: z
                .string()
                .exactOptional()
                .openapi({ description: 'APNS bundle ID.', 'x-example': '<BUNDLE_ID>' }),
              sandbox: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use APNS sandbox environment.', 'x-example': false }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersFcmRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/fcm',
  tags: ['messaging'],
  summary: 'Create FCM provider',
  description: 'Create a new Firebase Cloud Messaging provider.',
  operationId: 'messagingCreateFcmProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              serviceAccountJSON: z
                .object({})
                .exactOptional()
                .openapi({ description: 'FCM service account JSON.', 'x-example': '{}' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersFcmProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/fcm/{providerId}',
  tags: ['messaging'],
  summary: 'Update FCM provider',
  description: 'Update a Firebase Cloud Messaging provider by its unique ID.',
  operationId: 'messagingUpdateFcmProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              serviceAccountJSON: z
                .object({})
                .exactOptional()
                .openapi({ description: 'FCM service account JSON.', 'x-example': '{}' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersMailgunRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/mailgun',
  tags: ['messaging'],
  summary: 'Create Mailgun provider',
  description: 'Create a new Mailgun provider.',
  operationId: 'messagingCreateMailgunProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Mailgun API Key.', 'x-example': '<API_KEY>' }),
              domain: z
                .string()
                .exactOptional()
                .openapi({ description: 'Mailgun Domain.', 'x-example': '<DOMAIN>' }),
              isEuRegion: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as EU region.', 'x-example': false }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.',
                  'x-example': 'email@example.com',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersMailgunProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/mailgun/{providerId}',
  tags: ['messaging'],
  summary: 'Update Mailgun provider',
  description: 'Update a Mailgun provider by its unique ID.',
  operationId: 'messagingUpdateMailgunProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Mailgun API Key.', 'x-example': '<API_KEY>' }),
              domain: z
                .string()
                .exactOptional()
                .openapi({ description: 'Mailgun Domain.', 'x-example': '<DOMAIN>' }),
              isEuRegion: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as EU region.', 'x-example': false }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the reply to field for the mail. Default value is sender name.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the reply to field for the mail. Default value is sender email.',
                  'x-example': '<REPLY_TO_EMAIL>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersMsg91Route = createRoute({
  method: 'post',
  path: '/messaging/providers/msg91',
  tags: ['messaging'],
  summary: 'Create Msg91 provider',
  description: 'Create a new MSG91 provider.',
  operationId: 'messagingCreateMsg91Provider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              templateId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 template ID', 'x-example': '<TEMPLATE_ID>' }),
              senderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 sender ID.', 'x-example': '<SENDER_ID>' }),
              authKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 auth key.', 'x-example': '<AUTH_KEY>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersMsg91ProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/msg91/{providerId}',
  tags: ['messaging'],
  summary: 'Update Msg91 provider',
  description: 'Update a MSG91 provider by its unique ID.',
  operationId: 'messagingUpdateMsg91Provider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              templateId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 template ID.', 'x-example': '<TEMPLATE_ID>' }),
              senderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 sender ID.', 'x-example': '<SENDER_ID>' }),
              authKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Msg91 auth key.', 'x-example': '<AUTH_KEY>' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersSendgridRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/sendgrid',
  tags: ['messaging'],
  summary: 'Create Sendgrid provider',
  description: 'Create a new Sendgrid provider.',
  operationId: 'messagingCreateSendgridProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sendgrid API key.', 'x-example': '<API_KEY>' }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the reply to field for the mail. Default value is sender name.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the reply to field for the mail. Default value is sender email.',
                  'x-example': 'email@example.com',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersSendgridProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/sendgrid/{providerId}',
  tags: ['messaging'],
  summary: 'Update Sendgrid provider',
  description: 'Update a Sendgrid provider by its unique ID.',
  operationId: 'messagingUpdateSendgridProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sendgrid API key.', 'x-example': '<API_KEY>' }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the Reply To field for the mail. Default value is Sender Name.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the Reply To field for the mail. Default value is Sender Email.',
                  'x-example': '<REPLY_TO_EMAIL>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersSmtpRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/smtp',
  tags: ['messaging'],
  summary: 'Create SMTP provider',
  description: 'Create a new SMTP provider.',
  operationId: 'messagingCreateSmtpProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              host: z
                .string()
                .openapi({
                  description:
                    'SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.',
                  'x-example': '<HOST>',
                }),
              port: z
                .int()
                .exactOptional()
                .openapi({ description: 'The default SMTP server port.', 'x-example': 1 }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication username.', 'x-example': '<USERNAME>' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication password.', 'x-example': '<PASSWORD>' }),
              encryption: z
                .enum(['none', 'ssl', 'tls'])
                .exactOptional()
                .openapi({
                  description: "Encryption type. Can be omitted, 'ssl', or 'tls'",
                  'x-example': 'none',
                  'x-enum-name': 'SmtpEncryption',
                  'x-enum-keys': [],
                }),
              autoTLS: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable SMTP AutoTLS feature.', 'x-example': false }),
              mailer: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The value to use for the X-Mailer header.',
                  'x-example': '<MAILER>',
                }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the reply to field for the mail. Default value is sender name.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the reply to field for the mail. Default value is sender email.',
                  'x-example': 'email@example.com',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name', 'host'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersSmtpProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/smtp/{providerId}',
  tags: ['messaging'],
  summary: 'Update SMTP provider',
  description: 'Update a SMTP provider by its unique ID.',
  operationId: 'messagingUpdateSmtpProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              host: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.',
                  'x-example': '<HOST>',
                }),
              port: z.int().exactOptional().openapi({ description: 'SMTP port.', 'x-example': 1 }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication username.', 'x-example': '<USERNAME>' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication password.', 'x-example': '<PASSWORD>' }),
              encryption: z
                .enum(['none', 'ssl', 'tls'])
                .exactOptional()
                .openapi({
                  description: "Encryption type. Can be 'ssl' or 'tls'",
                  'x-example': 'none',
                  'x-enum-name': 'SmtpEncryption',
                  'x-enum-keys': [],
                }),
              autoTLS: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable SMTP AutoTLS feature.', 'x-example': false }),
              mailer: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The value to use for the X-Mailer header.',
                  'x-example': '<MAILER>',
                }),
              fromName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender Name.', 'x-example': '<FROM_NAME>' }),
              fromEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sender email address.',
                  'x-example': 'email@example.com',
                }),
              replyToName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name set in the Reply To field for the mail. Default value is Sender Name.',
                  'x-example': '<REPLY_TO_NAME>',
                }),
              replyToEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Email set in the Reply To field for the mail. Default value is Sender Email.',
                  'x-example': '<REPLY_TO_EMAIL>',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersTelesignRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/telesign',
  tags: ['messaging'],
  summary: 'Create Telesign provider',
  description: 'Create a new Telesign provider.',
  operationId: 'messagingCreateTelesignProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              customerId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Telesign customer ID.', 'x-example': '<CUSTOMER_ID>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Telesign API key.', 'x-example': '<API_KEY>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersTelesignProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/telesign/{providerId}',
  tags: ['messaging'],
  summary: 'Update Telesign provider',
  description: 'Update a Telesign provider by its unique ID.',
  operationId: 'messagingUpdateTelesignProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              customerId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Telesign customer ID.', 'x-example': '<CUSTOMER_ID>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Telesign API key.', 'x-example': '<API_KEY>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender number.', 'x-example': '<FROM>' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersTextmagicRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/textmagic',
  tags: ['messaging'],
  summary: 'Create Textmagic provider',
  description: 'Create a new Textmagic provider.',
  operationId: 'messagingCreateTextmagicProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'Textmagic username.', 'x-example': '<USERNAME>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Textmagic apiKey.', 'x-example': '<API_KEY>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersTextmagicProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/textmagic/{providerId}',
  tags: ['messaging'],
  summary: 'Update Textmagic provider',
  description: 'Update a Textmagic provider by its unique ID.',
  operationId: 'messagingUpdateTextmagicProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'Textmagic username.', 'x-example': '<USERNAME>' }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Textmagic apiKey.', 'x-example': '<API_KEY>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender number.', 'x-example': '<FROM>' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersTwilioRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/twilio',
  tags: ['messaging'],
  summary: 'Create Twilio provider',
  description: 'Create a new Twilio provider.',
  operationId: 'messagingCreateTwilioProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              accountSid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Twilio account secret ID.',
                  'x-example': '<ACCOUNT_SID>',
                }),
              authToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Twilio authentication token.',
                  'x-example': '<AUTH_TOKEN>',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersTwilioProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/twilio/{providerId}',
  tags: ['messaging'],
  summary: 'Update Twilio provider',
  description: 'Update a Twilio provider by its unique ID.',
  operationId: 'messagingUpdateTwilioProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              accountSid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Twilio account secret ID.',
                  'x-example': '<ACCOUNT_SID>',
                }),
              authToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Twilio authentication token.',
                  'x-example': '<AUTH_TOKEN>',
                }),
              from: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender number.', 'x-example': '<FROM>' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingProvidersVonageRoute = createRoute({
  method: 'post',
  path: '/messaging/providers/vonage',
  tags: ['messaging'],
  summary: 'Create Vonage provider',
  description: 'Create a new Vonage provider.',
  operationId: 'messagingCreateVonageProvider',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerId: z
                .string()
                .openapi({
                  description:
                    "Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z.string().openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vonage API key.', 'x-example': '<API_KEY>' }),
              apiSecret: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vonage API secret.', 'x-example': '<API_SECRET>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
            })
            .openapi({ required: ['providerId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingProvidersVonageProviderIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/providers/vonage/{providerId}',
  tags: ['messaging'],
  summary: 'Update Vonage provider',
  description: 'Update a Vonage provider by its unique ID.',
  operationId: 'messagingUpdateVonageProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Provider name.', 'x-example': '<NAME>' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set as enabled.', 'x-example': false }),
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vonage API key.', 'x-example': '<API_KEY>' }),
              apiSecret: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vonage API secret.', 'x-example': '<API_SECRET>' }),
              from: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender number.', 'x-example': '<FROM>' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/messaging/providers/{providerId}',
  tags: ['messaging'],
  summary: 'Get provider',
  description: 'Get a provider by its unique ID.\n',
  operationId: 'messagingGetProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Provider', content: { 'application/json': { schema: ProviderSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteMessagingProvidersProviderIdRoute = createRoute({
  method: 'delete',
  path: '/messaging/providers/{providerId}',
  tags: ['messaging'],
  summary: 'Delete provider',
  description: 'Delete a provider by its unique ID.',
  operationId: 'messagingDeleteProvider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingProvidersProviderIdLogsRoute = createRoute({
  method: 'get',
  path: '/messaging/providers/{providerId}/logs',
  tags: ['messaging'],
  summary: 'List provider logs',
  description: 'Get the provider activity logs listed by its unique ID.',
  operationId: 'messagingListProviderLogs',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            description: 'Provider ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<PROVIDER_ID>' },
            in: 'path',
          },
          'x-example': '<PROVIDER_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingSubscribersSubscriberIdLogsRoute = createRoute({
  method: 'get',
  path: '/messaging/subscribers/{subscriberId}/logs',
  tags: ['messaging'],
  summary: 'List subscriber logs',
  description: 'Get the subscriber activity logs listed by its unique ID.',
  operationId: 'messagingListSubscriberLogs',
  request: {
    params: z.object({
      subscriberId: z
        .string()
        .openapi({
          param: {
            name: 'subscriberId',
            description: 'Subscriber ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SUBSCRIBER_ID>' },
            in: 'path',
          },
          'x-example': '<SUBSCRIBER_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingTopicsRoute = createRoute({
  method: 'get',
  path: '/messaging/topics',
  tags: ['messaging'],
  summary: 'List topics',
  description: 'Get a list of all topics from the current Appwrite project.',
  operationId: 'messagingListTopics',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Topic list',
      content: { 'application/json': { schema: TopicListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingTopicsRoute = createRoute({
  method: 'post',
  path: '/messaging/topics',
  tags: ['messaging'],
  summary: 'Create topic',
  description: 'Create a new topic.',
  operationId: 'messagingCreateTopic',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topicId: z
                .string()
                .openapi({
                  description: 'Topic ID. Choose a custom Topic ID or a new Topic ID.',
                  'x-example': '<TOPIC_ID>',
                }),
              name: z.string().openapi({ description: 'Topic Name.', 'x-example': '<NAME>' }),
              subscribe: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.',
                  'x-example': '["any"]',
                }),
            })
            .openapi({ required: ['topicId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Topic', content: { 'application/json': { schema: TopicSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingTopicsTopicIdRoute = createRoute({
  method: 'get',
  path: '/messaging/topics/{topicId}',
  tags: ['messaging'],
  summary: 'Get topic',
  description: 'Get a topic by its unique ID.\n',
  operationId: 'messagingGetTopic',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Topic', content: { 'application/json': { schema: TopicSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteMessagingTopicsTopicIdRoute = createRoute({
  method: 'delete',
  path: '/messaging/topics/{topicId}',
  tags: ['messaging'],
  summary: 'Delete topic',
  description: 'Delete a topic by its unique ID.',
  operationId: 'messagingDeleteTopic',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchMessagingTopicsTopicIdRoute = createRoute({
  method: 'patch',
  path: '/messaging/topics/{topicId}',
  tags: ['messaging'],
  summary: 'Update topic',
  description: 'Update a topic by its unique ID.\n',
  operationId: 'messagingUpdateTopic',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Topic Name.', 'x-example': '<NAME>' }),
              subscribe: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.',
                  'x-example': '["any"]',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Topic', content: { 'application/json': { schema: TopicSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingTopicsTopicIdLogsRoute = createRoute({
  method: 'get',
  path: '/messaging/topics/{topicId}/logs',
  tags: ['messaging'],
  summary: 'List topic logs',
  description: 'Get the topic activity logs listed by its unique ID.',
  operationId: 'messagingListTopicLogs',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getMessagingTopicsTopicIdSubscribersRoute = createRoute({
  method: 'get',
  path: '/messaging/topics/{topicId}/subscribers',
  tags: ['messaging'],
  summary: 'List subscribers',
  description: 'Get a list of all subscribers from the current Appwrite project.',
  operationId: 'messagingListSubscribers',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID. The topic ID subscribed to.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Subscriber list',
      content: { 'application/json': { schema: SubscriberListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postMessagingTopicsTopicIdSubscribersRoute = createRoute({
  method: 'post',
  path: '/messaging/topics/{topicId}/subscribers',
  tags: ['messaging'],
  summary: 'Create subscriber',
  description: 'Create a new subscriber.',
  operationId: 'messagingCreateSubscriber',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID. The topic ID to subscribe to.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              subscriberId: z
                .string()
                .openapi({
                  description:
                    'Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.',
                  'x-example': '<SUBSCRIBER_ID>',
                }),
              targetId: z
                .string()
                .openapi({
                  description: 'Target ID. The target ID to link to the specified Topic ID.',
                  'x-example': '<TARGET_ID>',
                }),
            })
            .openapi({ required: ['subscriberId', 'targetId'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Subscriber',
      content: { 'application/json': { schema: SubscriberSchema } },
    },
  },
  security: [{ Project: [], JWT: [], Session: [], Key: [] }],
})

export const getMessagingTopicsTopicIdSubscribersSubscriberIdRoute = createRoute({
  method: 'get',
  path: '/messaging/topics/{topicId}/subscribers/{subscriberId}',
  tags: ['messaging'],
  summary: 'Get subscriber',
  description: 'Get a subscriber by its unique ID.\n',
  operationId: 'messagingGetSubscriber',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID. The topic ID subscribed to.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
      subscriberId: z
        .string()
        .openapi({
          param: {
            name: 'subscriberId',
            description: 'Subscriber ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SUBSCRIBER_ID>' },
            in: 'path',
          },
          'x-example': '<SUBSCRIBER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Subscriber',
      content: { 'application/json': { schema: SubscriberSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteMessagingTopicsTopicIdSubscribersSubscriberIdRoute = createRoute({
  method: 'delete',
  path: '/messaging/topics/{topicId}/subscribers/{subscriberId}',
  tags: ['messaging'],
  summary: 'Delete subscriber',
  description: 'Delete a subscriber by its unique ID.',
  operationId: 'messagingDeleteSubscriber',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: {
            name: 'topicId',
            description: 'Topic ID. The topic ID subscribed to.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOPIC_ID>' },
            in: 'path',
          },
          'x-example': '<TOPIC_ID>',
        }),
      subscriberId: z
        .string()
        .openapi({
          param: {
            name: 'subscriberId',
            description: 'Subscriber ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SUBSCRIBER_ID>' },
            in: 'path',
          },
          'x-example': '<SUBSCRIBER_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], JWT: [], Session: [], Key: [] }],
})

export const getSitesRoute = createRoute({
  method: 'get',
  path: '/sites',
  tags: ['sites'],
  summary: 'List sites',
  description:
    "Get a list of all the project's sites. You can use the query params to filter your results.",
  operationId: 'sitesList',
  request: {
    query: z.object({
      queries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId',
            required: false,
            schema: { type: 'string', default: [] },
            in: 'query',
          },
          default: [],
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: { description: 'Sites List', content: { 'application/json': { schema: SiteListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesRoute = createRoute({
  method: 'post',
  path: '/sites',
  tags: ['sites'],
  summary: 'Create site',
  description: 'Create a new site.',
  operationId: 'sitesCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              siteId: z
                .string()
                .openapi({
                  description:
                    "Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<SITE_ID>',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Site name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              framework: z
                .enum([
                  'analog',
                  'angular',
                  'nextjs',
                  'react',
                  'nuxt',
                  'vue',
                  'sveltekit',
                  'astro',
                  'remix',
                  'lynx',
                  'flutter',
                  'react-native',
                  'vite',
                  'other',
                ])
                .openapi({
                  description: 'Sites framework.',
                  'x-example': 'analog',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.",
                  'x-example': false,
                }),
              logging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.',
                  'x-example': false,
                }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum request time in seconds.', 'x-example': 1 }),
              installCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Install Command.', 'x-example': '<INSTALL_COMMAND>' }),
              buildCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Command.', 'x-example': '<BUILD_COMMAND>' }),
              outputDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Output Directory for site.',
                  'x-example': '<OUTPUT_DIRECTORY>',
                }),
              buildRuntime: z
                .enum([
                  'node-14.5',
                  'node-16.0',
                  'node-18.0',
                  'node-19.0',
                  'node-20.0',
                  'node-21.0',
                  'node-22',
                  'php-8.0',
                  'php-8.1',
                  'php-8.2',
                  'php-8.3',
                  'ruby-3.0',
                  'ruby-3.1',
                  'ruby-3.2',
                  'ruby-3.3',
                  'python-3.8',
                  'python-3.9',
                  'python-3.10',
                  'python-3.11',
                  'python-3.12',
                  'python-ml-3.11',
                  'python-ml-3.12',
                  'deno-1.21',
                  'deno-1.24',
                  'deno-1.35',
                  'deno-1.40',
                  'deno-1.46',
                  'deno-2.0',
                  'dart-2.15',
                  'dart-2.16',
                  'dart-2.17',
                  'dart-2.18',
                  'dart-2.19',
                  'dart-3.0',
                  'dart-3.1',
                  'dart-3.3',
                  'dart-3.5',
                  'dart-3.8',
                  'dotnet-6.0',
                  'dotnet-7.0',
                  'dotnet-8.0',
                  'java-8.0',
                  'java-11.0',
                  'java-17.0',
                  'java-18.0',
                  'java-21.0',
                  'java-22',
                  'swift-5.5',
                  'swift-5.8',
                  'swift-5.9',
                  'swift-5.10',
                  'kotlin-1.6',
                  'kotlin-1.8',
                  'kotlin-1.9',
                  'kotlin-2.0',
                  'cpp-17',
                  'cpp-20',
                  'bun-1.0',
                  'bun-1.1',
                  'go-1.23',
                  'static-1',
                  'flutter-3.24',
                  'flutter-3.27',
                  'flutter-3.29',
                  'flutter-3.32',
                ])
                .openapi({
                  description: 'Runtime to use during build step.',
                  'x-example': 'node-14.5',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              adapter: z
                .enum(['static', 'ssr'])
                .exactOptional()
                .openapi({
                  description:
                    'Framework adapter defining rendering strategy. Allowed values are: static, ssr',
                  'x-example': 'static',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              installationId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Appwrite Installation ID for VCS (Version Control System) deployment.',
                  'x-example': '<INSTALLATION_ID>',
                }),
              fallbackFile: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Fallback file for single page application sites.',
                  'x-example': '<FALLBACK_FILE>',
                }),
              providerRepositoryId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Repository ID of the repo linked to the site.',
                  'x-example': '<PROVIDER_REPOSITORY_ID>',
                }),
              providerBranch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Production branch for the repo linked to the site.',
                  'x-example': '<PROVIDER_BRANCH>',
                }),
              providerSilentMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.',
                  'x-example': false,
                }),
              providerRootDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to site code in the linked repo.',
                  'x-example': '<PROVIDER_ROOT_DIRECTORY>',
                }),
              specification: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Framework specification for the site and builds.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['siteId', 'name', 'framework', 'buildRuntime'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Site', content: { 'application/json': { schema: SiteSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesFrameworksRoute = createRoute({
  method: 'get',
  path: '/sites/frameworks',
  tags: ['sites'],
  summary: 'List frameworks',
  description: 'Get a list of all frameworks that are currently available on the server instance.',
  operationId: 'sitesListFrameworks',
  responses: {
    200: {
      description: 'Frameworks List',
      content: { 'application/json': { schema: FrameworkListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSpecificationsRoute = createRoute({
  method: 'get',
  path: '/sites/specifications',
  tags: ['sites'],
  summary: 'List specifications',
  description: 'List allowed site specifications for this instance.',
  operationId: 'sitesListSpecifications',
  responses: {
    200: {
      description: 'Specifications List',
      content: { 'application/json': { schema: SpecificationListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}',
  tags: ['sites'],
  summary: 'Get site',
  description: 'Get a site by its unique ID.',
  operationId: 'sitesGet',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Site', content: { 'application/json': { schema: SiteSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putSitesSiteIdRoute = createRoute({
  method: 'put',
  path: '/sites/{siteId}',
  tags: ['sites'],
  summary: 'Update site',
  description: 'Update site by its unique ID.',
  operationId: 'sitesUpdate',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Site name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              framework: z
                .enum([
                  'analog',
                  'angular',
                  'nextjs',
                  'react',
                  'nuxt',
                  'vue',
                  'sveltekit',
                  'astro',
                  'remix',
                  'lynx',
                  'flutter',
                  'react-native',
                  'vite',
                  'other',
                ])
                .openapi({
                  description: 'Sites framework.',
                  'x-example': 'analog',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.",
                  'x-example': false,
                }),
              logging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.',
                  'x-example': false,
                }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum request time in seconds.', 'x-example': 1 }),
              installCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Install Command.', 'x-example': '<INSTALL_COMMAND>' }),
              buildCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Command.', 'x-example': '<BUILD_COMMAND>' }),
              outputDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Output Directory for site.',
                  'x-example': '<OUTPUT_DIRECTORY>',
                }),
              buildRuntime: z
                .enum([
                  'node-14.5',
                  'node-16.0',
                  'node-18.0',
                  'node-19.0',
                  'node-20.0',
                  'node-21.0',
                  'node-22',
                  'php-8.0',
                  'php-8.1',
                  'php-8.2',
                  'php-8.3',
                  'ruby-3.0',
                  'ruby-3.1',
                  'ruby-3.2',
                  'ruby-3.3',
                  'python-3.8',
                  'python-3.9',
                  'python-3.10',
                  'python-3.11',
                  'python-3.12',
                  'python-ml-3.11',
                  'python-ml-3.12',
                  'deno-1.21',
                  'deno-1.24',
                  'deno-1.35',
                  'deno-1.40',
                  'deno-1.46',
                  'deno-2.0',
                  'dart-2.15',
                  'dart-2.16',
                  'dart-2.17',
                  'dart-2.18',
                  'dart-2.19',
                  'dart-3.0',
                  'dart-3.1',
                  'dart-3.3',
                  'dart-3.5',
                  'dart-3.8',
                  'dotnet-6.0',
                  'dotnet-7.0',
                  'dotnet-8.0',
                  'java-8.0',
                  'java-11.0',
                  'java-17.0',
                  'java-18.0',
                  'java-21.0',
                  'java-22',
                  'swift-5.5',
                  'swift-5.8',
                  'swift-5.9',
                  'swift-5.10',
                  'kotlin-1.6',
                  'kotlin-1.8',
                  'kotlin-1.9',
                  'kotlin-2.0',
                  'cpp-17',
                  'cpp-20',
                  'bun-1.0',
                  'bun-1.1',
                  'go-1.23',
                  'static-1',
                  'flutter-3.24',
                  'flutter-3.27',
                  'flutter-3.29',
                  'flutter-3.32',
                ])
                .exactOptional()
                .openapi({
                  description: 'Runtime to use during build step.',
                  'x-example': 'node-14.5',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              adapter: z
                .enum(['static', 'ssr'])
                .exactOptional()
                .openapi({
                  description:
                    'Framework adapter defining rendering strategy. Allowed values are: static, ssr',
                  'x-example': 'static',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              fallbackFile: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Fallback file for single page application sites.',
                  'x-example': '<FALLBACK_FILE>',
                }),
              installationId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Appwrite Installation ID for VCS (Version Control System) deployment.',
                  'x-example': '<INSTALLATION_ID>',
                }),
              providerRepositoryId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Repository ID of the repo linked to the site.',
                  'x-example': '<PROVIDER_REPOSITORY_ID>',
                }),
              providerBranch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Production branch for the repo linked to the site.',
                  'x-example': '<PROVIDER_BRANCH>',
                }),
              providerSilentMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.',
                  'x-example': false,
                }),
              providerRootDirectory: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to site code in the linked repo.',
                  'x-example': '<PROVIDER_ROOT_DIRECTORY>',
                }),
              specification: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Framework specification for the site and builds.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['name', 'framework'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Site', content: { 'application/json': { schema: SiteSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteSitesSiteIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteId}',
  tags: ['sites'],
  summary: 'Delete site',
  description: 'Delete a site by its unique ID.',
  operationId: 'sitesDelete',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchSitesSiteIdDeploymentRoute = createRoute({
  method: 'patch',
  path: '/sites/{siteId}/deployment',
  tags: ['sites'],
  summary: "Update site's deployment",
  description:
    'Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.',
  operationId: 'sitesUpdateSiteDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deploymentId: z
                .string()
                .openapi({ description: 'Deployment ID.', 'x-example': '<DEPLOYMENT_ID>' }),
            })
            .openapi({ required: ['deploymentId'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Site', content: { 'application/json': { schema: SiteSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/deployments',
  tags: ['sites'],
  summary: 'List deployments',
  description:
    "Get a list of all the site's code deployments. You can use the query params to filter your results.",
  operationId: 'sitesListDeployments',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployments List',
      content: { 'application/json': { schema: DeploymentListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesSiteIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/sites/{siteId}/deployments',
  tags: ['sites'],
  summary: 'Create deployment',
  description:
    "Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the function's deployment to use your new deployment ID.",
  operationId: 'sitesCreateDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              installCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Install Commands.', 'x-example': '<INSTALL_COMMAND>' }),
              buildCommand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Build Commands.', 'x-example': '<BUILD_COMMAND>' }),
              outputDirectory: z
                .string()
                .exactOptional()
                .openapi({ description: 'Output Directory.', 'x-example': '<OUTPUT_DIRECTORY>' }),
              code: z
                .string()
                .openapi({
                  description:
                    'Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.',
                  'x-example': null,
                }),
              activate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['code', 'activate'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesSiteIdDeploymentsDuplicateRoute = createRoute({
  method: 'post',
  path: '/sites/{siteId}/deployments/duplicate',
  tags: ['sites'],
  summary: 'Create duplicate deployment',
  description:
    "Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.",
  operationId: 'sitesCreateDuplicateDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deploymentId: z
                .string()
                .openapi({ description: 'Deployment ID.', 'x-example': '<DEPLOYMENT_ID>' }),
            })
            .openapi({ required: ['deploymentId'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesSiteIdDeploymentsTemplateRoute = createRoute({
  method: 'post',
  path: '/sites/{siteId}/deployments/template',
  tags: ['sites'],
  summary: 'Create template deployment',
  description:
    'Create a deployment based on a template.\n\nUse this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/sites#listTemplates) to find the template details.',
  operationId: 'sitesCreateTemplateDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              repository: z
                .string()
                .openapi({
                  description: 'Repository name of the template.',
                  'x-example': '<REPOSITORY>',
                }),
              owner: z
                .string()
                .openapi({
                  description: 'The name of the owner of the template.',
                  'x-example': '<OWNER>',
                }),
              rootDirectory: z
                .string()
                .openapi({
                  description: 'Path to site code in the template repo.',
                  'x-example': '<ROOT_DIRECTORY>',
                }),
              version: z
                .string()
                .openapi({
                  description: 'Version (tag) for the repo linked to the site template.',
                  'x-example': '<VERSION>',
                }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['repository', 'owner', 'rootDirectory', 'version'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesSiteIdDeploymentsVcsRoute = createRoute({
  method: 'post',
  path: '/sites/{siteId}/deployments/vcs',
  tags: ['sites'],
  summary: 'Create VCS deployment',
  description:
    'Create a deployment when a site is connected to VCS.\n\nThis endpoint lets you create deployment from a branch, commit, or a tag.',
  operationId: 'sitesCreateVcsDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['branch', 'commit', 'tag'])
                .openapi({
                  description: 'Type of reference passed. Allowed values are: branch, commit',
                  'x-example': 'branch',
                  'x-enum-name': 'VCSDeploymentType',
                  'x-enum-keys': [],
                }),
              reference: z
                .string()
                .openapi({
                  description:
                    'VCS reference to create deployment from. Depending on type this can be: branch name, commit hash',
                  'x-example': '<REFERENCE>',
                }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Automatically activate the deployment when it is finished building.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['type', 'reference'] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/deployments/{deploymentId}',
  tags: ['sites'],
  summary: 'Get deployment',
  description: 'Get a site deployment by its unique ID.',
  operationId: 'sitesGetDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteSitesSiteIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteId}/deployments/{deploymentId}',
  tags: ['sites'],
  summary: 'Delete deployment',
  description: 'Delete a site deployment by its unique ID.',
  operationId: 'sitesDeleteDeployment',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdDeploymentsDeploymentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/deployments/{deploymentId}/download',
  tags: ['sites'],
  summary: 'Get deployment download',
  description:
    "Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.",
  operationId: 'sitesGetDeploymentDownload',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
    query: z.object({
      type: z
        .enum(['source', 'output'])
        .default('source')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            description: 'Deployment file to download. Can be: "source", "output".',
            required: false,
            schema: {
              type: 'string',
              'x-example': 'source',
              enum: ['source', 'output'],
              'x-enum-name': 'DeploymentDownloadType',
              'x-enum-keys': [],
              default: 'source',
            },
            in: 'query',
          },
          'x-example': 'source',
          'x-enum-name': 'DeploymentDownloadType',
          'x-enum-keys': [],
        }),
    }),
  },
  responses: { 200: { description: 'File' } },
  security: [{ Project: [], Key: [], JWT: [] }],
})

export const patchSitesSiteIdDeploymentsDeploymentIdStatusRoute = createRoute({
  method: 'patch',
  path: '/sites/{siteId}/deployments/{deploymentId}/status',
  tags: ['sites'],
  summary: 'Update deployment status',
  description:
    "Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.",
  operationId: 'sitesUpdateDeploymentStatus',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            description: 'Deployment ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<DEPLOYMENT_ID>' },
            in: 'path',
          },
          'x-example': '<DEPLOYMENT_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deployment',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdLogsRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/logs',
  tags: ['sites'],
  summary: 'List logs',
  description: 'Get a list of all site logs. You can use the query params to filter your results.',
  operationId: 'sitesListLogs',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId',
            required: false,
            schema: { type: 'string', default: [] },
            in: 'query',
          },
          default: [],
        }),
    }),
  },
  responses: {
    200: {
      description: 'Executions List',
      content: { 'application/json': { schema: ExecutionListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdLogsLogIdRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/logs/{logId}',
  tags: ['sites'],
  summary: 'Get log',
  description: 'Get a site request log by its unique ID.',
  operationId: 'sitesGetLog',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      logId: z
        .string()
        .openapi({
          param: {
            name: 'logId',
            description: 'Log ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<LOG_ID>' },
            in: 'path',
          },
          'x-example': '<LOG_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Execution', content: { 'application/json': { schema: ExecutionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteSitesSiteIdLogsLogIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteId}/logs/{logId}',
  tags: ['sites'],
  summary: 'Delete log',
  description: 'Delete a site log by its unique ID.',
  operationId: 'sitesDeleteLog',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      logId: z
        .string()
        .openapi({
          param: {
            name: 'logId',
            description: 'Log ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<LOG_ID>' },
            in: 'path',
          },
          'x-example': '<LOG_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdVariablesRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/variables',
  tags: ['sites'],
  summary: 'List variables',
  description: 'Get a list of all variables of a specific site.',
  operationId: 'sitesListVariables',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Variables List',
      content: { 'application/json': { schema: VariableListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postSitesSiteIdVariablesRoute = createRoute({
  method: 'post',
  path: '/sites/{siteId}/variables',
  tags: ['sites'],
  summary: 'Create variable',
  description:
    'Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.',
  operationId: 'sitesCreateVariable',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .openapi({
                  description: 'Variable key. Max length: 255 chars.',
                  'x-example': '<KEY>',
                }),
              value: z
                .string()
                .openapi({
                  description: 'Variable value. Max length: 8192 chars.',
                  'x-example': '<VALUE>',
                }),
              secret: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Secret variables can be updated or deleted, but only sites can read them during build and runtime.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['key', 'value'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getSitesSiteIdVariablesVariableIdRoute = createRoute({
  method: 'get',
  path: '/sites/{siteId}/variables/{variableId}',
  tags: ['sites'],
  summary: 'Get variable',
  description: 'Get a variable by its unique ID.',
  operationId: 'sitesGetVariable',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putSitesSiteIdVariablesVariableIdRoute = createRoute({
  method: 'put',
  path: '/sites/{siteId}/variables/{variableId}',
  tags: ['sites'],
  summary: 'Update variable',
  description: 'Update variable by its unique ID.',
  operationId: 'sitesUpdateVariable',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .openapi({
                  description: 'Variable key. Max length: 255 chars.',
                  'x-example': '<KEY>',
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Variable value. Max length: 8192 chars.',
                  'x-example': '<VALUE>',
                }),
              secret: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Secret variables can be updated or deleted, but only sites can read them during build and runtime.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['key'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Variable', content: { 'application/json': { schema: VariableSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteSitesSiteIdVariablesVariableIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteId}/variables/{variableId}',
  tags: ['sites'],
  summary: 'Delete variable',
  description: 'Delete a variable by its unique ID.',
  operationId: 'sitesDeleteVariable',
  request: {
    params: z.object({
      siteId: z
        .string()
        .openapi({
          param: {
            name: 'siteId',
            description: 'Site unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SITE_ID>' },
            in: 'path',
          },
          'x-example': '<SITE_ID>',
        }),
      variableId: z
        .string()
        .openapi({
          param: {
            name: 'variableId',
            description: 'Variable unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<VARIABLE_ID>' },
            in: 'path',
          },
          'x-example': '<VARIABLE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getStorageBucketsRoute = createRoute({
  method: 'get',
  path: '/storage/buckets',
  tags: ['storage'],
  summary: 'List buckets',
  description:
    'Get a list of all the storage buckets. You can use the query params to filter your results.',
  operationId: 'storageListBuckets',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Buckets List',
      content: { 'application/json': { schema: BucketListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postStorageBucketsRoute = createRoute({
  method: 'post',
  path: '/storage/buckets',
  tags: ['storage'],
  summary: 'Create bucket',
  description: 'Create a new storage bucket.',
  operationId: 'storageCreateBucket',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bucketId: z
                .string()
                .openapi({
                  description:
                    "Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<BUCKET_ID>',
                }),
              name: z.string().openapi({ description: 'Bucket name', 'x-example': '<NAME>' }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
              fileSecurity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': false,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.",
                  'x-example': false,
                }),
              maximumFileSize: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum file size allowed in bytes. Maximum allowed value is 30MB.',
                  'x-example': 1,
                }),
              allowedFileExtensions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.',
                  'x-example': null,
                }),
              compression: z
                .enum(['none', 'gzip', 'zstd'])
                .exactOptional()
                .openapi({
                  description:
                    "Compression algorithm choosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled",
                  'x-example': 'none',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              encryption: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled",
                  'x-example': false,
                }),
              antivirus: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['bucketId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Bucket', content: { 'application/json': { schema: BucketSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getStorageBucketsBucketIdRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}',
  tags: ['storage'],
  summary: 'Get bucket',
  description:
    'Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.',
  operationId: 'storageGetBucket',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description: 'Bucket unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Bucket', content: { 'application/json': { schema: BucketSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putStorageBucketsBucketIdRoute = createRoute({
  method: 'put',
  path: '/storage/buckets/{bucketId}',
  tags: ['storage'],
  summary: 'Update bucket',
  description: 'Update a storage bucket by its unique ID.',
  operationId: 'storageUpdateBucket',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description: 'Bucket unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Bucket name', 'x-example': '<NAME>' }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
              fileSecurity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': false,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.",
                  'x-example': false,
                }),
              maximumFileSize: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum file size allowed in bytes. Maximum allowed value is 30MB.',
                  'x-example': 1,
                }),
              allowedFileExtensions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.',
                  'x-example': null,
                }),
              compression: z
                .enum(['none', 'gzip', 'zstd'])
                .exactOptional()
                .openapi({
                  description:
                    "Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled",
                  'x-example': 'none',
                  'x-enum-name': null,
                  'x-enum-keys': [],
                }),
              encryption: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled",
                  'x-example': false,
                }),
              antivirus: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
                  'x-example': false,
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Bucket', content: { 'application/json': { schema: BucketSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteStorageBucketsBucketIdRoute = createRoute({
  method: 'delete',
  path: '/storage/buckets/{bucketId}',
  tags: ['storage'],
  summary: 'Delete bucket',
  description: 'Delete a storage bucket by its unique ID.',
  operationId: 'storageDeleteBucket',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description: 'Bucket unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getStorageBucketsBucketIdFilesRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}/files',
  tags: ['storage'],
  summary: 'List files',
  description:
    'Get a list of all the user files. You can use the query params to filter your results.',
  operationId: 'storageListFiles',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: { description: 'Files List', content: { 'application/json': { schema: FileListSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const postStorageBucketsBucketIdFilesRoute = createRoute({
  method: 'post',
  path: '/storage/buckets/{bucketId}/files',
  tags: ['storage'],
  summary: 'Create file',
  description:
    "Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.\n\nLarger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.\n\nWhen the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.\n\nIf you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.\n",
  operationId: 'storageCreateFile',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              fileId: z
                .string()
                .openapi({
                  description:
                    "File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<FILE_ID>',
                  'x-upload-id': true,
                }),
              file: z
                .string()
                .openapi({
                  description:
                    'Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).',
                  'x-example': null,
                }),
              permissions: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
            })
            .openapi({ required: ['fileId', 'file'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'File', content: { 'application/json': { schema: FileSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getStorageBucketsBucketIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}/files/{fileId}',
  tags: ['storage'],
  summary: 'Get file',
  description:
    'Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.',
  operationId: 'storageGetFile',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'File', content: { 'application/json': { schema: FileSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const putStorageBucketsBucketIdFilesFileIdRoute = createRoute({
  method: 'put',
  path: '/storage/buckets/{bucketId}/files/{fileId}',
  tags: ['storage'],
  summary: 'Update file',
  description:
    'Update a file by its unique ID. Only users with write permissions have access to update this resource.',
  operationId: 'storageUpdateFile',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the file', 'x-example': '<NAME>' }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).',
                  'x-example': '["read("any")"]',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'File', content: { 'application/json': { schema: FileSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteStorageBucketsBucketIdFilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/storage/buckets/{bucketId}/files/{fileId}',
  tags: ['storage'],
  summary: 'Delete file',
  description:
    'Delete a file by its unique ID. Only users with write permissions have access to delete this resource.',
  operationId: 'storageDeleteFile',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getStorageBucketsBucketIdFilesFileIdDownloadRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}/files/{fileId}/download',
  tags: ['storage'],
  summary: 'Get file for download',
  description:
    "Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.",
  operationId: 'storageGetFileDownload',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    query: z.object({
      token: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            description: 'File token for accessing this file.',
            required: false,
            schema: { type: 'string', 'x-example': '<TOKEN>', default: '' },
            in: 'query',
          },
          'x-example': '<TOKEN>',
        }),
    }),
  },
  responses: { 200: { description: 'File' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getStorageBucketsBucketIdFilesFileIdPreviewRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}/files/{fileId}/preview',
  tags: ['storage'],
  summary: 'Get file preview',
  description:
    'Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.',
  operationId: 'storageGetFilePreview',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File ID',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'width',
            description: 'Resize preview image width, Pass an integer between 0 to 4000.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 0 },
            in: 'query',
          },
          'x-example': 0,
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            description: 'Resize preview image height, Pass an integer between 0 to 4000.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 0 },
            in: 'query',
          },
          'x-example': 0,
        }),
      gravity: z
        .enum([
          'center',
          'top-left',
          'top',
          'top-right',
          'left',
          'right',
          'bottom-left',
          'bottom',
          'bottom-right',
        ])
        .default('center')
        .exactOptional()
        .openapi({
          param: {
            name: 'gravity',
            description:
              'Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right',
            required: false,
            schema: {
              type: 'string',
              'x-example': 'center',
              enum: [
                'center',
                'top-left',
                'top',
                'top-right',
                'left',
                'right',
                'bottom-left',
                'bottom',
                'bottom-right',
              ],
              'x-enum-name': 'ImageGravity',
              'x-enum-keys': [],
              default: 'center',
            },
            in: 'query',
          },
          'x-example': 'center',
          'x-enum-name': 'ImageGravity',
          'x-enum-keys': [],
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            description:
              'Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': -1, default: -1 },
            in: 'query',
          },
          'x-example': -1,
        }),
      borderWidth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'borderWidth',
            description:
              'Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 0 },
            in: 'query',
          },
          'x-example': 0,
        }),
      borderColor: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'borderColor',
            description:
              'Preview image border color. Use a valid HEX color, no # is needed for prefix.',
            required: false,
            schema: { type: 'string', default: '' },
            in: 'query',
          },
        }),
      borderRadius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'borderRadius',
            description:
              'Preview image border radius in pixels. Pass an integer between 0 to 4000.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': 0, default: 0 },
            in: 'query',
          },
          'x-example': 0,
        }),
      opacity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'opacity',
            description:
              'Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.',
            required: false,
            schema: { type: 'number', format: 'float', 'x-example': 0, default: 1 },
            in: 'query',
          },
          'x-example': 0,
        }),
      rotation: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'rotation',
            description: 'Preview image rotation in degrees. Pass an integer between -360 and 360.',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-example': -360, default: 0 },
            in: 'query',
          },
          'x-example': -360,
        }),
      background: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'background',
            description:
              'Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.',
            required: false,
            schema: { type: 'string', default: '' },
            in: 'query',
          },
        }),
      output: z
        .enum(['jpg', 'jpeg', 'png', 'webp', 'heic', 'avif', 'gif'])
        .exactOptional()
        .openapi({
          param: {
            name: 'output',
            description: 'Output format type (jpeg, jpg, png, gif and webp).',
            required: false,
            schema: {
              type: 'string',
              'x-example': 'jpg',
              enum: ['jpg', 'jpeg', 'png', 'webp', 'heic', 'avif', 'gif'],
              'x-enum-name': 'ImageFormat',
              'x-enum-keys': [],
              default: '',
            },
            in: 'query',
          },
          'x-example': 'jpg',
          'x-enum-name': 'ImageFormat',
          'x-enum-keys': [],
          default: '',
        }),
      token: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            description: 'File token for accessing this file.',
            required: false,
            schema: { type: 'string', 'x-example': '<TOKEN>', default: '' },
            in: 'query',
          },
          'x-example': '<TOKEN>',
        }),
    }),
  },
  responses: { 200: { description: 'Image' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getStorageBucketsBucketIdFilesFileIdViewRoute = createRoute({
  method: 'get',
  path: '/storage/buckets/{bucketId}/files/{fileId}/view',
  tags: ['storage'],
  summary: 'Get file for view',
  description:
    "Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.",
  operationId: 'storageGetFileView',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    query: z.object({
      token: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            description: 'File token for accessing this file.',
            required: false,
            schema: { type: 'string', 'x-example': '<TOKEN>', default: '' },
            in: 'query',
          },
          'x-example': '<TOKEN>',
        }),
    }),
  },
  responses: { 200: { description: 'File' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getTeamsRoute = createRoute({
  method: 'get',
  path: '/teams',
  tags: ['teams'],
  summary: 'List teams',
  description:
    'Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.',
  operationId: 'teamsList',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: { description: 'Teams List', content: { 'application/json': { schema: TeamListSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const postTeamsRoute = createRoute({
  method: 'post',
  path: '/teams',
  tags: ['teams'],
  summary: 'Create team',
  description:
    'Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.',
  operationId: 'teamsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<TEAM_ID>',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Team name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
              roles: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['teamId', 'name'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Team', content: { 'application/json': { schema: TeamSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getTeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}',
  tags: ['teams'],
  summary: 'Get team',
  description: 'Get a team by its ID. All team members have read access for this resource.',
  operationId: 'teamsGet',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Team', content: { 'application/json': { schema: TeamSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const putTeamsTeamIdRoute = createRoute({
  method: 'put',
  path: '/teams/{teamId}',
  tags: ['teams'],
  summary: 'Update name',
  description: "Update the team's name by its unique ID.",
  operationId: 'teamsUpdateName',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'New team name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Team', content: { 'application/json': { schema: TeamSchema } } },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteTeamsTeamIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{teamId}',
  tags: ['teams'],
  summary: 'Delete team',
  description:
    'Delete a team using its ID. Only team members with the owner role can delete the team.',
  operationId: 'teamsDelete',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getTeamsTeamIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/memberships',
  tags: ['teams'],
  summary: 'List team memberships',
  description:
    "Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.",
  operationId: 'teamsListMemberships',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Memberships List',
      content: { 'application/json': { schema: MembershipListSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const postTeamsTeamIdMembershipsRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/memberships',
  tags: ['teams'],
  summary: 'Create team membership',
  description:
    "Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.\n\nYou only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.\n\nUse the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. \n\nPlease note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.\n",
  operationId: 'teamsCreateMembership',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Email of the new team member.',
                  'x-example': 'email@example.com',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the user to be added to a team.',
                  'x-example': '<USER_ID>',
                }),
              phone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              roles: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.',
                  'x-example': null,
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.',
                  'x-example': 'https://example.com',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Name of the new team member. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['roles'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Membership',
      content: { 'application/json': { schema: MembershipSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const getTeamsTeamIdMembershipsMembershipIdRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/memberships/{membershipId}',
  tags: ['teams'],
  summary: 'Get team membership',
  description:
    'Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.',
  operationId: 'teamsGetMembership',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
      membershipId: z
        .string()
        .openapi({
          param: {
            name: 'membershipId',
            description: 'Membership ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MEMBERSHIP_ID>' },
            in: 'path',
          },
          'x-example': '<MEMBERSHIP_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Membership',
      content: { 'application/json': { schema: MembershipSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const deleteTeamsTeamIdMembershipsMembershipIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{teamId}/memberships/{membershipId}',
  tags: ['teams'],
  summary: 'Delete team membership',
  description:
    'This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.',
  operationId: 'teamsDeleteMembership',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
      membershipId: z
        .string()
        .openapi({
          param: {
            name: 'membershipId',
            description: 'Membership ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MEMBERSHIP_ID>' },
            in: 'path',
          },
          'x-example': '<MEMBERSHIP_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const patchTeamsTeamIdMembershipsMembershipIdRoute = createRoute({
  method: 'patch',
  path: '/teams/{teamId}/memberships/{membershipId}',
  tags: ['teams'],
  summary: 'Update membership',
  description:
    'Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).\n',
  operationId: 'teamsUpdateMembership',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
      membershipId: z
        .string()
        .openapi({
          param: {
            name: 'membershipId',
            description: 'Membership ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MEMBERSHIP_ID>' },
            in: 'path',
          },
          'x-example': '<MEMBERSHIP_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roles: z
                .array(z.string())
                .openapi({
                  description:
                    "An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.",
                  'x-example': null,
                }),
            })
            .openapi({ required: ['roles'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Membership',
      content: { 'application/json': { schema: MembershipSchema } },
    },
  },
  security: [{ Project: [], Session: [], Key: [], JWT: [] }],
})

export const patchTeamsTeamIdMembershipsMembershipIdStatusRoute = createRoute({
  method: 'patch',
  path: '/teams/{teamId}/memberships/{membershipId}/status',
  tags: ['teams'],
  summary: 'Update team membership status',
  description:
    'Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.\n\nIf the request is successful, a session for the user is automatically created.\n',
  operationId: 'teamsUpdateMembershipStatus',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
      membershipId: z
        .string()
        .openapi({
          param: {
            name: 'membershipId',
            description: 'Membership ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<MEMBERSHIP_ID>' },
            in: 'path',
          },
          'x-example': '<MEMBERSHIP_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z.string().openapi({ description: 'User ID.', 'x-example': '<USER_ID>' }),
              secret: z.string().openapi({ description: 'Secret key.', 'x-example': '<SECRET>' }),
            })
            .openapi({ required: ['userId', 'secret'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Membership',
      content: { 'application/json': { schema: MembershipSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getTeamsTeamIdPrefsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/prefs',
  tags: ['teams'],
  summary: 'Get team preferences',
  description:
    "Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).",
  operationId: 'teamsGetPrefs',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preferences',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const putTeamsTeamIdPrefsRoute = createRoute({
  method: 'put',
  path: '/teams/{teamId}/prefs',
  tags: ['teams'],
  summary: 'Update preferences',
  description:
    "Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.",
  operationId: 'teamsUpdatePrefs',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            description: 'Team ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TEAM_ID>' },
            in: 'path',
          },
          'x-example': '<TEAM_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              prefs: z
                .object({})
                .openapi({ description: 'Prefs key-value JSON object.', 'x-example': '{}' }),
            })
            .openapi({ required: ['prefs'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Preferences',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
  },
  security: [{ Project: [], Session: [], JWT: [] }],
})

export const getTokensBucketsBucketIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/tokens/buckets/{bucketId}/files/{fileId}',
  tags: ['tokens'],
  summary: 'List tokens',
  description:
    'List all the tokens created for a specific file or bucket. You can use the query params to filter your results.',
  operationId: 'tokensList',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire',
            required: false,
            schema: { type: 'string', default: [] },
            in: 'query',
          },
          default: [],
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resource Tokens List',
      content: { 'application/json': { schema: ResourceTokenListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postTokensBucketsBucketIdFilesFileIdRoute = createRoute({
  method: 'post',
  path: '/tokens/buckets/{bucketId}/files/{fileId}',
  tags: ['tokens'],
  summary: 'Create file token',
  description:
    'Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.',
  operationId: 'tokensCreateFileToken',
  request: {
    params: z.object({
      bucketId: z
        .string()
        .openapi({
          param: {
            name: 'bucketId',
            description:
              'Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).',
            required: true,
            schema: { type: 'string', 'x-example': '<BUCKET_ID>' },
            in: 'path',
          },
          'x-example': '<BUCKET_ID>',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            name: 'fileId',
            description: 'File unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<FILE_ID>' },
            in: 'path',
          },
          'x-example': '<FILE_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expire: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Token expiry date',
                  'x-example': null,
                  'x-nullable': true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'ResourceToken',
      content: { 'application/json': { schema: ResourceTokenSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getTokensTokenIdRoute = createRoute({
  method: 'get',
  path: '/tokens/{tokenId}',
  tags: ['tokens'],
  summary: 'Get token',
  description: 'Get a token by its unique ID.',
  operationId: 'tokensGet',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            name: 'tokenId',
            description: 'Token ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOKEN_ID>' },
            in: 'path',
          },
          'x-example': '<TOKEN_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'ResourceToken',
      content: { 'application/json': { schema: ResourceTokenSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteTokensTokenIdRoute = createRoute({
  method: 'delete',
  path: '/tokens/{tokenId}',
  tags: ['tokens'],
  summary: 'Delete token',
  description: 'Delete a token by its unique ID.',
  operationId: 'tokensDelete',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            name: 'tokenId',
            description: 'Token ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOKEN_ID>' },
            in: 'path',
          },
          'x-example': '<TOKEN_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchTokensTokenIdRoute = createRoute({
  method: 'patch',
  path: '/tokens/{tokenId}',
  tags: ['tokens'],
  summary: 'Update token',
  description:
    "Update a token by its unique ID. Use this endpoint to update a token's expiry date.",
  operationId: 'tokensUpdate',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            name: 'tokenId',
            description: 'Token unique ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TOKEN_ID>' },
            in: 'path',
          },
          'x-example': '<TOKEN_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expire: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'File token expiry date',
                  'x-example': null,
                  'x-nullable': true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'ResourceToken',
      content: { 'application/json': { schema: ResourceTokenSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  summary: 'List users',
  description:
    "Get a list of all the project's users. You can use the query params to filter your results.",
  operationId: 'usersList',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: { description: 'Users List', content: { 'application/json': { schema: UserListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['users'],
  summary: 'Create user',
  description: 'Create a new user.',
  operationId: 'usersCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              phone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.",
                  'x-example': '+12065550100',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Plain text user password. Must be at least 8 chars.',
                  'x-example': null,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersArgon2Route = createRoute({
  method: 'post',
  path: '/users/argon2',
  tags: ['users'],
  summary: 'Create user with Argon2 password',
  description:
    'Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateArgon2User',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using Argon2.',
                  'x-example': 'password',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersBcryptRoute = createRoute({
  method: 'post',
  path: '/users/bcrypt',
  tags: ['users'],
  summary: 'Create user with bcrypt password',
  description:
    'Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateBcryptUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using Bcrypt.',
                  'x-example': 'password',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersIdentitiesRoute = createRoute({
  method: 'get',
  path: '/users/identities',
  tags: ['users'],
  summary: 'List identities',
  description: 'Get identities for all users.',
  operationId: 'usersListIdentities',
  request: {
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Identities List',
      content: { 'application/json': { schema: IdentityListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersIdentitiesIdentityIdRoute = createRoute({
  method: 'delete',
  path: '/users/identities/{identityId}',
  tags: ['users'],
  summary: 'Delete identity',
  description: 'Delete an identity by its unique ID.',
  operationId: 'usersDeleteIdentity',
  request: {
    params: z.object({
      identityId: z
        .string()
        .openapi({
          param: {
            name: 'identityId',
            description: 'Identity ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<IDENTITY_ID>' },
            in: 'path',
          },
          'x-example': '<IDENTITY_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const postUsersMd5Route = createRoute({
  method: 'post',
  path: '/users/md5',
  tags: ['users'],
  summary: 'Create user with MD5 password',
  description:
    'Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateMD5User',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using MD5.',
                  'x-example': 'password',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersPhpassRoute = createRoute({
  method: 'post',
  path: '/users/phpass',
  tags: ['users'],
  summary: 'Create user with PHPass password',
  description:
    'Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreatePHPassUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using PHPass.',
                  'x-example': 'password',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersScryptRoute = createRoute({
  method: 'post',
  path: '/users/scrypt',
  tags: ['users'],
  summary: 'Create user with Scrypt password',
  description:
    'Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateScryptUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using Scrypt.',
                  'x-example': 'password',
                }),
              passwordSalt: z
                .string()
                .openapi({
                  description: 'Optional salt used to hash password.',
                  'x-example': '<PASSWORD_SALT>',
                }),
              passwordCpu: z
                .int()
                .openapi({
                  description: 'Optional CPU cost used to hash password.',
                  'x-example': null,
                }),
              passwordMemory: z
                .int()
                .openapi({
                  description: 'Optional memory cost used to hash password.',
                  'x-example': null,
                }),
              passwordParallel: z
                .int()
                .openapi({
                  description: 'Optional parallelization cost used to hash password.',
                  'x-example': null,
                }),
              passwordLength: z
                .int()
                .openapi({
                  description: 'Optional hash length used to hash password.',
                  'x-example': null,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({
              required: [
                'userId',
                'email',
                'password',
                'passwordSalt',
                'passwordCpu',
                'passwordMemory',
                'passwordParallel',
                'passwordLength',
              ],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersScryptModifiedRoute = createRoute({
  method: 'post',
  path: '/users/scrypt-modified',
  tags: ['users'],
  summary: 'Create user with Scrypt modified password',
  description:
    'Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateScryptModifiedUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using Scrypt Modified.',
                  'x-example': 'password',
                }),
              passwordSalt: z
                .string()
                .openapi({
                  description: 'Salt used to hash password.',
                  'x-example': '<PASSWORD_SALT>',
                }),
              passwordSaltSeparator: z
                .string()
                .openapi({
                  description: 'Salt separator used to hash password.',
                  'x-example': '<PASSWORD_SALT_SEPARATOR>',
                }),
              passwordSignerKey: z
                .string()
                .openapi({
                  description: 'Signer key used to hash password.',
                  'x-example': '<PASSWORD_SIGNER_KEY>',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({
              required: [
                'userId',
                'email',
                'password',
                'passwordSalt',
                'passwordSaltSeparator',
                'passwordSignerKey',
              ],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersShaRoute = createRoute({
  method: 'post',
  path: '/users/sha',
  tags: ['users'],
  summary: 'Create user with SHA password',
  description:
    'Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.',
  operationId: 'usersCreateSHAUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<USER_ID>',
                }),
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
              password: z
                .string()
                .openapi({
                  description: 'User password hashed using SHA.',
                  'x-example': 'password',
                }),
              passwordVersion: z
                .enum([
                  'sha1',
                  'sha224',
                  'sha256',
                  'sha384',
                  'sha512/224',
                  'sha512/256',
                  'sha512',
                  'sha3-224',
                  'sha3-256',
                  'sha3-384',
                  'sha3-512',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512'",
                  'x-example': 'sha1',
                  'x-enum-name': 'PasswordHash',
                  'x-enum-keys': [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['userId', 'email', 'password'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['users'],
  summary: 'Get user',
  description: 'Get a user by its unique ID.',
  operationId: 'usersGet',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  tags: ['users'],
  summary: 'Delete user',
  description:
    "Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.",
  operationId: 'usersDelete',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdEmailRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/email',
  tags: ['users'],
  summary: 'Update email',
  description: 'Update the user email by its unique ID.',
  operationId: 'usersUpdateEmail',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'User email.', 'x-example': 'email@example.com' }),
            })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersUserIdJwtsRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/jwts',
  tags: ['users'],
  summary: 'Create user JWT',
  description:
    'Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.',
  operationId: 'usersCreateJWT',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Session ID. Use the string 'recent' to use the most recent session. Defaults to the most recent session.",
                  'x-example': '<SESSION_ID>',
                }),
              duration: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.',
                  'x-example': 0,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'JWT', content: { 'application/json': { schema: JwtSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const putUsersUserIdLabelsRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/labels',
  tags: ['users'],
  summary: 'Update user labels',
  description:
    "Update the user labels by its unique ID. \n\nLabels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.",
  operationId: 'usersUpdateLabels',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
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
                  description:
                    'Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['labels'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdLogsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/logs',
  tags: ['users'],
  summary: 'List user logs',
  description: 'Get the user activity logs list by its unique ID.',
  operationId: 'usersListLogs',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Logs List', content: { 'application/json': { schema: LogListSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/memberships',
  tags: ['users'],
  summary: 'List user memberships',
  description: 'Get the user membership list by its unique ID.',
  operationId: 'usersListMemberships',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            description: 'Search term to filter your list results. Max length: 256 chars.',
            required: false,
            schema: { type: 'string', 'x-example': '<SEARCH>', default: '' },
            in: 'query',
          },
          'x-example': '<SEARCH>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Memberships List',
      content: { 'application/json': { schema: MembershipListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdMfaRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/mfa',
  tags: ['users'],
  summary: 'Update MFA',
  description: 'Enable or disable MFA on a user account.',
  operationId: 'usersUpdateMfa',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mfa: z
                .boolean()
                .openapi({ description: 'Enable or disable MFA.', 'x-example': false }),
            })
            .openapi({ required: ['mfa'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersUserIdMfaAuthenticatorsTypeRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}/mfa/authenticators/{type}',
  tags: ['users'],
  summary: 'Delete authenticator',
  description: 'Delete an authenticator app.',
  operationId: 'usersDeleteMfaAuthenticator',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
      type: z
        .literal('totp')
        .openapi({
          param: {
            name: 'type',
            description: 'Type of authenticator.',
            required: true,
            schema: {
              type: 'string',
              'x-example': 'totp',
              enum: ['totp'],
              'x-enum-name': 'AuthenticatorType',
              'x-enum-keys': [],
            },
            in: 'path',
          },
          'x-example': 'totp',
          'x-enum-name': 'AuthenticatorType',
          'x-enum-keys': [],
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdMfaFactorsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/mfa/factors',
  tags: ['users'],
  summary: 'List factors',
  description: 'List the factors available on the account to be used as a MFA challange.',
  operationId: 'usersListMfaFactors',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MFAFactors',
      content: { 'application/json': { schema: MfaFactorsSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdMfaRecoveryCodesRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/mfa/recovery-codes',
  tags: ['users'],
  summary: 'Get MFA recovery codes',
  description:
    'Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.',
  operationId: 'usersGetMfaRecoveryCodes',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const putUsersUserIdMfaRecoveryCodesRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/mfa/recovery-codes',
  tags: ['users'],
  summary: 'Update MFA recovery codes (regenerate)',
  description:
    'Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.',
  operationId: 'usersUpdateMfaRecoveryCodes',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdMfaRecoveryCodesRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/mfa/recovery-codes',
  tags: ['users'],
  summary: 'Create MFA recovery codes',
  description:
    'Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.',
  operationId: 'usersCreateMfaRecoveryCodes',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    201: {
      description: 'MFA Recovery Codes',
      content: { 'application/json': { schema: MfaRecoveryCodesSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdNameRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/name',
  tags: ['users'],
  summary: 'Update name',
  description: 'Update the user name by its unique ID.',
  operationId: 'usersUpdateName',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'User name. Max length: 128 chars.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdPasswordRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/password',
  tags: ['users'],
  summary: 'Update password',
  description: 'Update the user password by its unique ID.',
  operationId: 'usersUpdatePassword',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .openapi({
                  description: 'New user password. Must be at least 8 chars.',
                  'x-example': null,
                }),
            })
            .openapi({ required: ['password'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdPhoneRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/phone',
  tags: ['users'],
  summary: 'Update phone',
  description: 'Update the user phone by its unique ID.',
  operationId: 'usersUpdatePhone',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              number: z
                .string()
                .openapi({ description: 'User phone number.', 'x-example': '+12065550100' }),
            })
            .openapi({ required: ['number'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdPrefsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/prefs',
  tags: ['users'],
  summary: 'Get user preferences',
  description: 'Get the user preferences by its unique ID.',
  operationId: 'usersGetPrefs',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preferences',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdPrefsRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/prefs',
  tags: ['users'],
  summary: 'Update user preferences',
  description:
    'Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.',
  operationId: 'usersUpdatePrefs',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              prefs: z
                .object({})
                .openapi({ description: 'Prefs key-value JSON object.', 'x-example': '{}' }),
            })
            .openapi({ required: ['prefs'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Preferences',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdSessionsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/sessions',
  tags: ['users'],
  summary: 'List user sessions',
  description: 'Get the user sessions list by its unique ID.',
  operationId: 'usersListSessions',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sessions List',
      content: { 'application/json': { schema: SessionListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersUserIdSessionsRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/sessions',
  tags: ['users'],
  summary: 'Create session',
  description:
    'Creates a session for a user. Returns an immediately usable session object.\n\nIf you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.',
  operationId: 'usersCreateSession',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description:
              "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: {
    201: { description: 'Session', content: { 'application/json': { schema: SessionSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersUserIdSessionsRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}/sessions',
  tags: ['users'],
  summary: 'Delete user sessions',
  description: "Delete all user's sessions by using the user's unique ID.",
  operationId: 'usersDeleteSessions',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersUserIdSessionsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}/sessions/{sessionId}',
  tags: ['users'],
  summary: 'Delete user session',
  description: 'Delete a user sessions by its unique ID.',
  operationId: 'usersDeleteSession',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            description: 'Session ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<SESSION_ID>' },
            in: 'path',
          },
          'x-example': '<SESSION_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdStatusRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/status',
  tags: ['users'],
  summary: 'Update user status',
  description:
    "Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.",
  operationId: 'usersUpdateStatus',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .boolean()
                .openapi({
                  description:
                    'User Status. To activate the user pass `true` and to block the user pass `false`.',
                  'x-example': false,
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdTargetsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/targets',
  tags: ['users'],
  summary: 'List user targets',
  description: 'List the messaging targets that are associated with a user.',
  operationId: 'usersListTargets',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    query: z.object({
      queries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'queries',
            description:
              'Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, default: [] },
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Target list',
      content: { 'application/json': { schema: TargetListSchema } },
    },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersUserIdTargetsRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/targets',
  tags: ['users'],
  summary: 'Create user target',
  description: 'Create a messaging target.',
  operationId: 'usersCreateTarget',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              targetId: z
                .string()
                .openapi({
                  description:
                    "Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
                  'x-example': '<TARGET_ID>',
                }),
              providerType: z
                .enum(['email', 'sms', 'push'])
                .openapi({
                  description:
                    'The target provider type. Can be one of the following: `email`, `sms` or `push`.',
                  'x-example': 'email',
                  'x-enum-name': 'MessagingProviderType',
                  'x-enum-keys': [],
                }),
              identifier: z
                .string()
                .openapi({
                  description: 'The target identifier (token, email, phone etc.)',
                  'x-example': '<IDENTIFIER>',
                }),
              providerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.',
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: ['targetId', 'providerType', 'identifier'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Target', content: { 'application/json': { schema: TargetSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const getUsersUserIdTargetsTargetIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/targets/{targetId}',
  tags: ['users'],
  summary: 'Get user target',
  description: "Get a user's push notification target by ID.",
  operationId: 'usersGetTarget',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
      targetId: z
        .string()
        .openapi({
          param: {
            name: 'targetId',
            description: 'Target ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TARGET_ID>' },
            in: 'path',
          },
          'x-example': '<TARGET_ID>',
        }),
    }),
  },
  responses: {
    200: { description: 'Target', content: { 'application/json': { schema: TargetSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const deleteUsersUserIdTargetsTargetIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}/targets/{targetId}',
  tags: ['users'],
  summary: 'Delete user target',
  description: 'Delete a messaging target.',
  operationId: 'usersDeleteTarget',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
      targetId: z
        .string()
        .openapi({
          param: {
            name: 'targetId',
            description: 'Target ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TARGET_ID>' },
            in: 'path',
          },
          'x-example': '<TARGET_ID>',
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdTargetsTargetIdRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/targets/{targetId}',
  tags: ['users'],
  summary: 'Update user target',
  description: 'Update a messaging target.',
  operationId: 'usersUpdateTarget',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
      targetId: z
        .string()
        .openapi({
          param: {
            name: 'targetId',
            description: 'Target ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<TARGET_ID>' },
            in: 'path',
          },
          'x-example': '<TARGET_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The target identifier (token, email, phone etc.)',
                  'x-example': '<IDENTIFIER>',
                }),
              providerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.',
                  'x-example': '<PROVIDER_ID>',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.',
                  'x-example': '<NAME>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Target', content: { 'application/json': { schema: TargetSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const postUsersUserIdTokensRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/tokens',
  tags: ['users'],
  summary: 'Create token',
  description:
    'Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.\n',
  operationId: 'usersCreateToken',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              length: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Token length in characters. The default length is 6 characters',
                  'x-example': 4,
                }),
              expire: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Token expiration period in seconds. The default expiration is 15 minutes.',
                  'x-example': 60,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Token', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdVerificationRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/verification',
  tags: ['users'],
  summary: 'Update email verification',
  description: 'Update the user email verification status by its unique ID.',
  operationId: 'usersUpdateEmailVerification',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emailVerification: z
                .boolean()
                .openapi({ description: 'User email verification status.', 'x-example': false }),
            })
            .openapi({ required: ['emailVerification'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})

export const patchUsersUserIdVerificationPhoneRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}/verification/phone',
  tags: ['users'],
  summary: 'Update phone verification',
  description: 'Update the user phone verification status by its unique ID.',
  operationId: 'usersUpdatePhoneVerification',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            description: 'User ID.',
            required: true,
            schema: { type: 'string', 'x-example': '<USER_ID>' },
            in: 'path',
          },
          'x-example': '<USER_ID>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              phoneVerification: z
                .boolean()
                .openapi({ description: 'User phone verification status.', 'x-example': false }),
            })
            .openapi({ required: ['phoneVerification'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ Project: [], Key: [] }],
})
