import { createRoute, z } from '@hono/zod-openapi'

const DeleteObjectResponseSchema = z.object({}).openapi('DeleteObjectResponse')

const ContainerNotFoundExceptionSchema = z.any().openapi('ContainerNotFoundException')

const ObjectNotFoundExceptionSchema = z.any().openapi('ObjectNotFoundException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const DescribeObjectResponseSchema = z.object({}).openapi('DescribeObjectResponse')

const PayloadBlobSchema = z.string().openapi('PayloadBlob')

const StatusCodeSchema = z.int().openapi('StatusCode')

const GetObjectResponseSchema = z
  .object({
    Body: PayloadBlobSchema.and(
      z.any().openapi({ description: 'The bytes of the object. ' }),
    ).exactOptional(),
    StatusCode: StatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTML status code of the request. Status codes ranging from 200 to 299 indicate success. All other status codes indicate the type of error that occurred.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetObjectResponse')

const RequestedRangeNotSatisfiableExceptionSchema = z
  .any()
  .openapi('RequestedRangeNotSatisfiableException')

const ItemNameSchema = z
  .string()
  .regex(/[A-Za-z0-9_\.\-\~]+/)
  .openapi('ItemName')

const ItemTypeSchema = z.enum(['OBJECT', 'FOLDER']).openapi('ItemType')

const ETagSchema = z
  .string()
  .regex(/[0-9A-Fa-f]+/)
  .min(1)
  .max(64)
  .openapi('ETag')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const ContentTypeSchema = z
  .string()
  .regex(/^[\w\-\/\.\+]{1,255}$/)
  .openapi('ContentType')

const NonNegativeLongSchema = z.int().min(0).openapi('NonNegativeLong')

const ItemSchema = z
  .object({
    Name: ItemNameSchema.and(
      z.any().openapi({ description: 'The name of the item.' }),
    ).exactOptional(),
    Type: ItemTypeSchema.and(
      z.any().openapi({ description: 'The item type (folder or object).' }),
    ).exactOptional(),
    ETag: ETagSchema.and(
      z.any().openapi({ description: 'The ETag that represents a unique instance of the item.' }),
    ).exactOptional(),
    LastModified: TimeStampSchema.and(
      z.any().openapi({ description: 'The date and time that the item was last modified.' }),
    ).exactOptional(),
    ContentType: ContentTypeSchema.and(
      z.any().openapi({ description: 'The content type of the item.' }),
    ).exactOptional(),
    ContentLength: NonNegativeLongSchema.and(
      z.any().openapi({ description: 'The length of the item in bytes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A metadata entry for a folder or object.', required: [] })
  .openapi('Item')

const ItemListSchema = z.array(ItemSchema).openapi('ItemList')

const PaginationTokenSchema = z.string().openapi('PaginationToken')

const ListItemsResponseSchema = z
  .object({
    Items: ItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'The metadata entries for the folders and objects at the requested path.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that can be used in a request to view the next set of results. For example, you submit a <code>ListItems</code> request that matches 2,000 items with <code>MaxResults</code> set at 500. The service returns the first batch of results (up to 500) and a <code>NextToken</code> value that can be used to fetch the next batch of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListItemsResponse')

const SHA256HashSchema = z
  .string()
  .regex(/[0-9A-Fa-f]{64}/)
  .length(64)
  .openapi('SHA256Hash')

const StorageClassSchema = z.literal('TEMPORAL').openapi('StorageClass')

const PutObjectResponseSchema = z
  .object({
    ContentSHA256: SHA256HashSchema.and(
      z.any().openapi({ description: 'The SHA256 digest of the object that is persisted.' }),
    ).exactOptional(),
    ETag: ETagSchema.and(
      z.any().openapi({ description: 'Unique identifier of the object in the container.' }),
    ).exactOptional(),
    StorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The storage class where the object was persisted. The class should be “Temporal”.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutObjectResponse')

const ContentRangePatternSchema = z
  .string()
  .regex(/^bytes=\d+\-\d+\/\d+$/)
  .openapi('ContentRangePattern')

const PathNamingSchema = z
  .string()
  .regex(/(?:[A-Za-z0-9_\.\-\~]+\/){0,10}[A-Za-z0-9_\.\-\~]+/)
  .min(1)
  .max(900)
  .openapi('PathNaming')

const DeleteObjectRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteObjectRequest' })
  .openapi('DeleteObjectRequest')

const DescribeObjectRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeObjectRequest' })
  .openapi('DescribeObjectRequest')

const StringPrimitiveSchema = z.string().openapi('StringPrimitive')

const RangePatternSchema = z
  .string()
  .regex(/^bytes=(?:\d+\-\d*|\d*\-\d+)$/)
  .openapi('RangePattern')

const GetObjectRequestSchema = z
  .object({})
  .openapi({ title: 'GetObjectRequest' })
  .openapi('GetObjectRequest')

const ListPathNamingSchema = z
  .string()
  .regex(/\/?(?:[A-Za-z0-9_\.\-\~]+\/){0,10}(?:[A-Za-z0-9_\.\-\~]+)?\/?/)
  .min(0)
  .max(900)
  .openapi('ListPathNaming')

const ListLimitSchema = z.int().min(1).max(1000).openapi('ListLimit')

const ListItemsRequestSchema = z
  .object({})
  .openapi({ title: 'ListItemsRequest' })
  .openapi('ListItemsRequest')

const UploadAvailabilitySchema = z.enum(['STANDARD', 'STREAMING']).openapi('UploadAvailability')

const PutObjectRequestSchema = z
  .object({
    Body: PayloadBlobSchema.and(z.any().openapi({ description: 'The bytes to be stored. ' })),
  })
  .openapi({ required: ['Body'], title: 'PutObjectRequest' })
  .openapi('PutObjectRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getPathRoute = createRoute({
  method: 'get',
  path: '/{Path}',
  description:
    'Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.',
  operationId: 'GetObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Range: z
        .string()
        .regex(/^bytes=(?:\d+\-\d*|\d*\-\d+)$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Range',
            in: 'header',
            required: false,
            description:
              'The range bytes of an object to retrieve. For more information about the <code>Range</code> header, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>. AWS Elemental MediaStore ignores this header for partially uploaded objects that have streaming upload availability.',
            schema: { type: 'string', pattern: '^bytes=(?:\\d+\\-\\d*|\\d*\\-\\d+)$' },
          },
        }),
    }),
    params: z.object({
      Path: z
        .string()
        .regex(/(?:[A-Za-z0-9_\.\-\~]+\/){0,10}[A-Za-z0-9_\.\-\~]+/)
        .min(1)
        .max(900)
        .openapi({
          param: {
            name: 'Path',
            in: 'path',
            required: true,
            description:
              '<p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don\'t exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>',
            schema: {
              type: 'string',
              pattern: '(?:[A-Za-z0-9_\\.\\-\\~]+/){0,10}[A-Za-z0-9_\\.\\-\\~]+',
              minLength: 1,
              maxLength: 900,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetObjectResponseSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ObjectNotFoundException',
      content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
    },
    482: {
      description: 'RequestedRangeNotSatisfiableException',
      content: { 'application/json': { schema: RequestedRangeNotSatisfiableExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPathRoute = createRoute({
  method: 'put',
  path: '/{Path}',
  description:
    'Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.',
  operationId: 'PutObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'Content-Type': z
        .string()
        .regex(/^[\w\-\/\.\+]{1,255}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            required: false,
            description: 'The content type of the object.',
            schema: { type: 'string', pattern: '^[\\w\\-\\/\\.\\+]{1,255}$' },
          },
        }),
      'Cache-Control': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Cache-Control',
            in: 'header',
            required: false,
            description:
              '<p>An optional <code>CacheControl</code> header that allows the caller to control the object\'s cache behavior. Headers can be passed in as specified in the HTTP at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p> <p>Headers with a custom user-defined value are also accepted.</p>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-storage-class': z
        .literal('TEMPORAL')
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-storage-class',
            in: 'header',
            required: false,
            description:
              'Indicates the storage class of a <code>Put</code> request. Defaults to high-performance temporal storage class, and objects are persisted into durable storage shortly after being received.',
            schema: { type: 'string', enum: ['TEMPORAL'], minLength: 1, maxLength: 16 },
          },
        }),
      'x-amz-upload-availability': z
        .enum(['STANDARD', 'STREAMING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-upload-availability',
            in: 'header',
            required: false,
            description:
              '<p>Indicates the availability of an object while it is still uploading. If the value is set to <code>streaming</code>, the object is available for downloading after some initial buffering but before the object is uploaded completely. If the value is set to <code>standard</code>, the object is available for downloading only when it is uploaded completely. The default value for this header is <code>standard</code>.</p> <p>To use this header, you must also set the HTTP <code>Transfer-Encoding</code> header to <code>chunked</code>.</p>',
            schema: {
              type: 'string',
              enum: ['STANDARD', 'STREAMING'],
              minLength: 1,
              maxLength: 16,
            },
          },
        }),
    }),
    params: z.object({
      Path: z
        .string()
        .regex(/(?:[A-Za-z0-9_\.\-\~]+\/){0,10}[A-Za-z0-9_\.\-\~]+/)
        .min(1)
        .max(900)
        .openapi({
          param: {
            name: 'Path',
            in: 'path',
            required: true,
            description:
              '<p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don\'t exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>',
            schema: {
              type: 'string',
              pattern: '(?:[A-Za-z0-9_\\.\\-\\~]+/){0,10}[A-Za-z0-9_\\.\\-\\~]+',
              minLength: 1,
              maxLength: 900,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ Body: z.string().openapi({ description: 'The bytes to be stored. ' }) })
            .openapi({ required: ['Body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutObjectResponseSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deletePathRoute = createRoute({
  method: 'delete',
  path: '/{Path}',
  description: 'Deletes an object at the specified path.',
  operationId: 'DeleteObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Path: z
        .string()
        .regex(/(?:[A-Za-z0-9_\.\-\~]+\/){0,10}[A-Za-z0-9_\.\-\~]+/)
        .min(1)
        .max(900)
        .openapi({
          param: {
            name: 'Path',
            in: 'path',
            required: true,
            description:
              'The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;',
            schema: {
              type: 'string',
              pattern: '(?:[A-Za-z0-9_\\.\\-\\~]+/){0,10}[A-Za-z0-9_\\.\\-\\~]+',
              minLength: 1,
              maxLength: 900,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteObjectResponseSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ObjectNotFoundException',
      content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const headPathRoute = createRoute({
  method: 'head',
  path: '/{Path}',
  description: 'Gets the headers for an object at the specified path.',
  operationId: 'DescribeObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Path: z
        .string()
        .regex(/(?:[A-Za-z0-9_\.\-\~]+\/){0,10}[A-Za-z0-9_\.\-\~]+/)
        .min(1)
        .max(900)
        .openapi({
          param: {
            name: 'Path',
            in: 'path',
            required: true,
            description:
              'The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;',
            schema: {
              type: 'string',
              pattern: '(?:[A-Za-z0-9_\\.\\-\\~]+/){0,10}[A-Za-z0-9_\\.\\-\\~]+',
              minLength: 1,
              maxLength: 900,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeObjectResponseSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ObjectNotFoundException',
      content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description:
    'Provides a list of metadata entries about folders and objects in the specified folder.',
  operationId: 'ListItems',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Path: z
        .string()
        .regex(/\/?(?:[A-Za-z0-9_\.\-\~]+\/){0,10}(?:[A-Za-z0-9_\.\-\~]+)?\/?/)
        .min(0)
        .max(900)
        .exactOptional()
        .openapi({
          param: {
            name: 'Path',
            in: 'query',
            required: false,
            description:
              'The path in the container from which to retrieve items. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;',
            schema: {
              type: 'string',
              pattern: '/?(?:[A-Za-z0-9_\\.\\-\\~]+/){0,10}(?:[A-Za-z0-9_\\.\\-\\~]+)?/?',
              minLength: 0,
              maxLength: 900,
            },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return per API request. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. Although 2,000 items match your request, the service returns no more than the first 500 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) The service might return fewer results than the <code>MaxResults</code> value.</p> <p>If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 1,000 results per page.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>The token that identifies which batch of results that you want to see. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. The service returns the first batch of results (up to 500) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListItems</code> request a second time and specify the <code>NextToken</code> value.</p> <p>Tokens expire after 15 minutes.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListItemsResponseSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})
