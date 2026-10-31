import { createRoute, z } from '@hono/zod-openapi'

export const getChangesRoute = createRoute({
  method: 'get',
  path: '/changes',
  tags: ['Tracking changes'],
  summary: 'List changes',
  description:
    'Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.',
  request: {
    query: z.object({
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              Changes: z
                .array(z.object({}))
                .exactOptional()
                .openapi({ description: 'The individual changes' }),
              Done: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the last reported change is the last of the full history',
                }),
              Last: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last reported change, can be used for the `since` argument in subsequent calls to this route',
                }),
            })
            .openapi({
              description: 'The list of changes',
              example: {
                Changes: [
                  {
                    ChangeType: 'NewInstance',
                    Date: '20180414T091510',
                    ID: '055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000',
                    Path: '/instances/055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000',
                    ResourceType: 'Instance',
                    Seq: 1,
                  },
                  {
                    ChangeType: 'NewSeries',
                    Date: '20180414T091510',
                    ID: '318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb',
                    Path: '/series/318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb',
                    ResourceType: 'Series',
                    Seq: 2,
                  },
                ],
                Done: false,
                Last: 2,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const deleteChangesRoute = createRoute({
  method: 'delete',
  path: '/changes',
  tags: ['Tracking changes'],
  summary: 'Clear changes',
  description: 'Clear the full history stored in the changes log',
  responses: { 200: { description: '' } },
})

export const getExportsRoute = createRoute({
  method: 'get',
  path: '/exports',
  tags: ['Tracking changes'],
  summary: 'List exports',
  description:
    'For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.',
  request: {
    query: z.object({
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'The list of exports' }),
          examples: {},
        },
      },
    },
  },
})

export const deleteExportsRoute = createRoute({
  method: 'delete',
  path: '/exports',
  tags: ['Tracking changes'],
  summary: 'Clear exports',
  description: 'Clear the full history stored in the exports log',
  responses: { 200: { description: '' } },
})

export const getInstancesRoute = createRoute({
  method: 'get',
  path: '/instances',
  tags: ['Instances'],
  summary: 'List the available instances',
  description: 'List the Orthanc identifiers of all the available DICOM instances',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual instances',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the Orthanc identifiers, or detailed information about the reported instances (if `expand` argument is provided)',
              example: [
                '055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000',
                '62dc1ec1-9fc2dd9d-aa66eae1-0db608b1-e17f8ce8',
              ],
            }),
        },
      },
    },
  },
})

export const postInstancesRoute = createRoute({
  method: 'post',
  path: '/instances',
  tags: ['Instances'],
  summary: 'Upload DICOM instances',
  description: 'Upload DICOM instances',
  request: {
    body: {
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'DICOM file to be uploaded' }),
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'ZIP archive containing DICOM files (new in Orthanc 1.8.2)' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Orthanc identifier of the new instance' }),
              ParentPatient: z
                .string()
                .exactOptional()
                .openapi({ description: 'Orthanc identifier of the parent patient' }),
              ParentSeries: z
                .string()
                .exactOptional()
                .openapi({ description: 'Orthanc identifier of the parent series' }),
              ParentStudy: z
                .string()
                .exactOptional()
                .openapi({ description: 'Orthanc identifier of the parent study' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to the new instance in the REST API' }),
              Status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Can be `Success`, `AlreadyStored`, `Failure`, or `FilteredOut` (removed by some `NewInstanceFilter`)',
                }),
            })
            .openapi({
              description:
                'Information about the uploaded instance, or list of information for each uploaded instance in the case of ZIP archive',
              example: {
                ID: '19816330-cb02e1cf-df3a8fe8-bf510623-ccefe9f5',
                ParentPatient: 'ef9d77db-eb3b2bef-9b31fd3e-bf42ae46-dbdb0cc3',
                ParentSeries: '3774320f-ccda46d8-69ee8641-9e791cbf-3ecbbcc6',
                ParentStudy: '66c8e41e-ac3a9029-0b85e42a-8195ee0a-92c2e62e',
                Path: '/instances/19816330-cb02e1cf-df3a8fe8-bf510623-ccefe9f5',
                Status: 'Success',
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getInstancesIdRoute = createRoute({
  method: 'get',
  path: '/instances/{id}',
  tags: ['Instances'],
  summary: 'Get information about some instance',
  description:
    'Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM instance',
              example: {
                FileSize: 526744,
                FileUuid: 'dc031d9e-ef02-4871-821f-ffe445deb7c2',
                ID: 'd94d9a03-3003b047-a4affc69-322313b2-680530a2',
                IndexInSeries: 155,
                MainDicomTags: {
                  AcquisitionNumber: '4',
                  ImageOrientationPatient: '1\\0\\0\\0\\1\\0',
                  ImagePositionPatient: '-249.51171875\\-458.51171875\\314',
                  InstanceCreationDate: '20151217',
                  InstanceCreationTime: '125204.215000',
                  InstanceNumber: '155',
                  SOPInstanceUID:
                    '1.3.6.1.4.1.14519.5.2.1.2193.7172.168997935789297163075628247666',
                },
                ParentSeries: '52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2',
                Type: 'Instance',
              },
            }),
        },
      },
    },
  },
})

export const deleteInstancesIdRoute = createRoute({
  method: 'delete',
  path: '/instances/{id}',
  tags: ['Instances'],
  summary: 'Delete some instance',
  description: 'Delete the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postInstancesIdAnonymizeRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/anonymize',
  tags: ['Instances'],
  summary: 'Anonymize instance',
  description:
    'Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
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
              DicomVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              KeepPrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Keep the private tags from the DICOM instances (defaults to `false`)',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'The anonymized DICOM instance' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments',
  tags: ['Instances'],
  summary: 'List attachments',
  description: 'Get the list of attachments that are associated with the given instance',
  request: {
    query: z.object({
      full: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve the attachments list and their numerical ids',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the names of the attachments',
              example: ['dicom', 'dicom-as-json'],
            }),
        },
      },
    },
  },
})

export const getInstancesIdAttachmentsNameRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}',
  tags: ['Other'],
  summary: 'List operations on attachments',
  description:
    'Get the list of the operations that are available for attachments associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'compress',
                'compressed-data',
                'compressed-md5',
                'compressed-size',
                'data',
                'info',
                'is-compressed',
                'md5',
                'size',
                'uncompress',
                'verify-md5',
                'uuid',
              ],
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putInstancesIdAttachmentsNameRoute = createRoute({
  method: 'put',
  path: '/instances/{id}/attachments/{name}',
  tags: ['Instances'],
  summary: 'Set attachment',
  description:
    'Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, if this is not the first time this attachment is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'Binary data containing the attachment' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const deleteInstancesIdAttachmentsNameRoute = createRoute({
  method: 'delete',
  path: '/instances/{id}/attachments/{name}',
  tags: ['Instances'],
  summary: 'Delete attachment',
  description:
    'Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postInstancesIdAttachmentsNameCompressRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/attachments/{name}/compress',
  tags: ['Instances'],
  summary: 'Compress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getInstancesIdAttachmentsNameCompressedDataRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/compressed-data',
  tags: ['Instances'],
  summary: 'Get attachment (no decompression)',
  description:
    'Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameCompressedMd5Route = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/compressed-md5',
  tags: ['Instances'],
  summary: 'Get MD5 of attachment on disk',
  description:
    'Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The MD5 of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameCompressedSizeRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/compressed-size',
  tags: ['Instances'],
  summary: 'Get size of attachment on disk',
  description:
    'Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The size of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameDataRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/data',
  tags: ['Instances'],
  summary: 'Get attachment',
  description: 'Get the (binary) content of one attachment associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameInfoRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/info',
  tags: ['Instances'],
  summary: 'Get info about the attachment',
  description: 'Get all the information about the attachment associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the information about the attachment',
              example: {
                CompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                CompressedSize: 526970,
                ContentType: 1,
                UncompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                UncompressedSize: 526970,
                Uuid: 'b7c99eb7-229f-464e-8f46-6878c8e79e5c',
              },
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameIsCompressedRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/is-compressed',
  tags: ['Instances'],
  summary: 'Is attachment compressed?',
  description: 'Test whether the attachment has been stored as a compressed file on the disk.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                '`0` if the attachment was stored uncompressed, `1` if it was compressed',
            }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameMd5Route = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/md5',
  tags: ['Instances'],
  summary: 'Get MD5 of attachment',
  description: 'Get the MD5 hash of one attachment associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The MD5 of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getInstancesIdAttachmentsNameSizeRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/attachments/{name}/size',
  tags: ['Instances'],
  summary: 'Get size of attachment',
  description: 'Get the size of one attachment associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The size of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postInstancesIdAttachmentsNameUncompressRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/attachments/{name}/uncompress',
  tags: ['Instances'],
  summary: 'Uncompress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postInstancesIdAttachmentsNameVerifyMd5Route = createRoute({
  method: 'post',
  path: '/instances/{id}/attachments/{name}/verify-md5',
  tags: ['Instances'],
  summary: 'Verify attachment',
  description: 'Verify that the attachment is not corrupted, by validating its MD5 hash',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'On success, a valid JSON object is returned' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdContentRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/content',
  tags: ['Instances'],
  summary: 'Get raw tag',
  description: 'Get the raw content of one DICOM tag in the hierarchy of DICOM dataset',
  request: {
    query: z.object({
      '...': z
        .string()
        .openapi({
          param: {
            description:
              'Path to the DICOM tag. This is the interleaving of one DICOM tag, possibly followed by an index for sequences. Sequences are accessible as, for instance, `/0008-1140/1/0008-1150`',
            in: 'query',
            name: '...',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'The raw value of the tag of intereset (binary data, whose memory layout depends on the underlying transfer syntax), or JSON array containing the list of available tags if accessing a dataset',
            }),
          examples: {},
        },
      },
    },
  },
})

export const postInstancesIdExportRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/export',
  tags: ['Instances'],
  summary: 'Write DICOM onto filesystem',
  description: 'Write the DICOM file onto the filesystem where Orthanc is running',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'Target path on the filesystem' }) },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getInstancesIdFileRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/file',
  tags: ['Instances'],
  summary: 'Download DICOM',
  description: 'Download one DICOM instance',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This HTTP header can be set to retrieve the DICOM instance in DICOMweb format',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'The DICOM instance' }),
          examples: {},
        },
        'application/dicom+json': {
          schema: z.any().openapi({ description: 'The DICOM instance, in DICOMweb JSON format' }),
          examples: {},
        },
        'application/dicom+xml': {
          schema: z.any().openapi({ description: 'The DICOM instance, in DICOMweb XML format' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames',
  tags: ['Instances'],
  summary: 'List available frames',
  description: 'List the frames that are available in the DICOM instance of interest',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'The list of the indices of the available frames',
              example: [0],
            }),
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}',
  tags: ['Other'],
  summary: 'List operations',
  description: 'List the available operations under URI `/instances/{id}/frames/{frame}/`',
  request: {
    params: z.object({
      frame: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'image-int16',
                'image-uint16',
                'image-uint8',
                'matlab',
                'numpy',
                'preview',
                'raw',
                'raw.gz',
                'rendered',
              ],
            }),
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameImageInt16Route = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/image-int16',
  tags: ['Instances'],
  summary: 'Decode a frame (int16)',
  description:
    "Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.",
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameImageUint16Route = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/image-uint16',
  tags: ['Instances'],
  summary: 'Decode a frame (uint16)',
  description:
    'Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameImageUint8Route = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/image-uint8',
  tags: ['Instances'],
  summary: 'Decode a frame (uint8)',
  description:
    'Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameMatlabRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/matlab',
  tags: ['Instances'],
  summary: 'Decode frame for Matlab',
  description:
    'Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html',
  request: {
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Octave/Matlab matrix' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameNumpyRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/numpy',
  tags: ['Instances'],
  summary: 'Decode frame for numpy',
  description:
    'Decode one frame of interest from the given DICOM instance, for use with numpy in Python. The numpy array has 3 dimensions: (height, width, color channel).',
  request: {
    query: z.object({
      compress: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compress the file as `.npz`',
            in: 'query',
            name: 'compress',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      rescale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'On grayscale images, apply the rescaling and return floating-point values',
            in: 'query',
            name: 'rescale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM resource of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'Numpy file: https://numpy.org/devdocs/reference/generated/numpy.lib.format.html',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFramePreviewRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/preview',
  tags: ['Instances'],
  summary: 'Decode a frame (preview)',
  description:
    'Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameRawRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/raw',
  tags: ['Instances'],
  summary: 'Access raw frame',
  description:
    'Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.',
  request: {
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The raw frame' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameRawGzRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/raw.gz',
  tags: ['Instances'],
  summary: 'Access raw frame (compressed)',
  description:
    'Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip',
  request: {
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/gzip': {
          schema: z.any().openapi({ description: 'The raw frame, compressed using gzip' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdFramesFrameRenderedRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/frames/{frame}/rendered',
  tags: ['Instances'],
  summary: 'Render a frame',
  description:
    'Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.',
  request: {
    query: z.object({
      height: z
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
            description: 'Height of the resized image',
            in: 'query',
            name: 'height',
            required: false,
            schema: { type: 'number' },
          },
        }),
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      smooth: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to smooth image on resize',
            in: 'query',
            name: 'smooth',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      width: z
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
            description: 'Width of the resized image',
            in: 'query',
            name: 'width',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'window-center': z
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
            description: 'Windowing center',
            in: 'query',
            name: 'window-center',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'window-width': z
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
            description: 'Windowing width',
            in: 'query',
            name: 'window-width',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      frame: z
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
            description: 'Index of the frame (starts at `0`)',
            in: 'path',
            name: 'frame',
            required: true,
            schema: { type: 'number' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdHeaderRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/header',
  tags: ['Instances'],
  summary: 'Get DICOM meta-header',
  description:
    'Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the DICOM tags and their associated value',
              example: {
                '0002,0000': {
                  Name: 'FileMetaInformationGroupLength',
                  Type: 'String',
                  Value: '202',
                },
                '0002,0002': {
                  Name: 'MediaStorageSOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.2',
                },
                '0002,0003': {
                  Name: 'MediaStorageSOPInstanceUID',
                  Type: 'String',
                  Value: '1.3.12.2.1107.5.1.4.54693.30000006100507010800000005269',
                },
                '0002,0010': {
                  Name: 'TransferSyntaxUID',
                  Type: 'String',
                  Value: '1.2.840.10008.1.2.1',
                },
                '0002,0012': {
                  Name: 'ImplementationClassUID',
                  Type: 'String',
                  Value: '1.3.6.1.4.1.19291.2.1',
                },
                '0002,0013': {
                  Name: 'ImplementationVersionName',
                  Type: 'String',
                  Value: 'OSIRIX001',
                },
                '0002,0016': {
                  Name: 'SourceApplicationEntityTitle',
                  Type: 'String',
                  Value: 'OSIRIX',
                },
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdImageInt16Route = createRoute({
  method: 'get',
  path: '/instances/{id}/image-int16',
  tags: ['Instances'],
  summary: 'Decode an image (int16)',
  description:
    "Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.",
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdImageUint16Route = createRoute({
  method: 'get',
  path: '/instances/{id}/image-uint16',
  tags: ['Instances'],
  summary: 'Decode an image (uint16)',
  description:
    'Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdImageUint8Route = createRoute({
  method: 'get',
  path: '/instances/{id}/image-uint8',
  tags: ['Instances'],
  summary: 'Decode an image (uint8)',
  description:
    'Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdMatlabRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/matlab',
  tags: ['Instances'],
  summary: 'Decode frame for Matlab',
  description:
    'Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Octave/Matlab matrix' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdMetadataRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/metadata',
  tags: ['Instances'],
  summary: 'List metadata',
  description: 'Get the list of metadata that are associated with the given instance',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, also retrieve the value of the individual metadata',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing the names of the available metadata, or JSON associative array mapping metadata to their values (if `expand` argument is provided)',
              example: [
                'IndexInSeries',
                'ReceptionDate',
                'RemoteAET',
                'Origin',
                'TransferSyntax',
                'SopClassUid',
                'RemoteIP',
                'HttpUsername',
              ],
            }),
        },
      },
    },
  },
})

export const getInstancesIdMetadataNameRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/metadata/{name}',
  tags: ['Instances'],
  summary: 'Get metadata',
  description: 'Get the value of a metadata that is associated with the given instance',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Value of the metadata' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putInstancesIdMetadataNameRoute = createRoute({
  method: 'put',
  path: '/instances/{id}/metadata/{name}',
  tags: ['Instances'],
  summary: 'Set metadata',
  description:
    'Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, if this is not the first time this metadata is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'String value of the metadata' }) },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteInstancesIdMetadataNameRoute = createRoute({
  method: 'delete',
  path: '/instances/{id}/metadata/{name}',
  tags: ['Instances'],
  summary: 'Delete metadata',
  description:
    'Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postInstancesIdModifyRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/modify',
  tags: ['Instances'],
  summary: 'Modify instance',
  description:
    'Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
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
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              RemovePrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Remove the private tags from the DICOM instances (defaults to `false`)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'The modified DICOM instance' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdModuleRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/module',
  tags: ['Instances'],
  summary: 'Get instance module',
  description:
    'Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM instance',
              example: {
                '0008,0005': { Name: 'SpecificCharacterSet', Type: 'String', Value: 'ISO_IR 192' },
                '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20151217' },
                '0008,0013': {
                  Name: 'InstanceCreationTime',
                  Type: 'String',
                  Value: '125204.215000',
                },
                '0008,0016': {
                  Name: 'SOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.2',
                },
                '0008,0018': {
                  Name: 'SOPInstanceUID',
                  Type: 'String',
                  Value: '1.3.6.1.4.1.14519.5.2.1.2193.7172.168997935789297163075628247666',
                },
                '0020,0013': { Name: 'InstanceNumber', Type: 'String', Value: '155' },
                '0028,0303': {
                  Name: 'LongitudinalTemporalInformationModified',
                  Type: 'String',
                  Value: 'MODIFIED',
                },
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdNumpyRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/numpy',
  tags: ['Instances'],
  summary: 'Decode instance for numpy',
  description:
    'Decode the given DICOM instance, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).',
  request: {
    query: z.object({
      compress: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compress the file as `.npz`',
            in: 'query',
            name: 'compress',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      rescale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'On grayscale images, apply the rescaling and return floating-point values',
            in: 'query',
            name: 'rescale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM resource of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'Numpy file: https://numpy.org/devdocs/reference/generated/numpy.lib.format.html',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdPatientRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/patient',
  tags: ['Instances'],
  summary: 'Get parent patient',
  description:
    'Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM patient',
              example: {
                ID: '65ce8003-696b2eb6-03adeee7-6561ce8e-3e03f13a',
                IsStable: true,
                LastUpdate: '20200803T131236',
                MainDicomTags: {
                  PatientBirthDate: '',
                  PatientID: 'HN_P001',
                  PatientName: 'HN_P001',
                  PatientSex: 'M',
                },
                Studies: ['1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b'],
                Type: 'Patient',
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdPdfRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/pdf',
  tags: ['Instances'],
  summary: 'Get embedded PDF',
  description:
    "Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/pdf': { schema: z.any().openapi({ description: 'PDF file' }), examples: {} },
      },
    },
  },
})

export const getInstancesIdPreviewRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/preview',
  tags: ['Instances'],
  summary: 'Decode an image (preview)',
  description:
    'Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.',
  request: {
    query: z.object({
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const postInstancesIdReconstructRoute = createRoute({
  method: 'post',
  path: '/instances/{id}/reconstruct',
  tags: ['Instances'],
  summary: 'Reconstruct tags & optionally files of instance',
  description:
    'Reconstruct the main DICOM tags in DB of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
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
              ReconstructFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getInstancesIdRenderedRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/rendered',
  tags: ['Instances'],
  summary: 'Render an image',
  description:
    'Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.',
  request: {
    query: z.object({
      height: z
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
            description: 'Height of the resized image',
            in: 'query',
            name: 'height',
            required: false,
            schema: { type: 'number' },
          },
        }),
      quality: z
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
            description: 'Quality for JPEG images (between 1 and 100, defaults to 90)',
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
          },
        }),
      returnUnsupportedImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)',
            in: 'query',
            name: 'returnUnsupportedImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      smooth: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to smooth image on resize',
            in: 'query',
            name: 'smooth',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      width: z
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
            description: 'Width of the resized image',
            in: 'query',
            name: 'width',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'window-center': z
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
            description: 'Windowing center',
            in: 'query',
            name: 'window-center',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'window-width': z
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
            description: 'Windowing width',
            in: 'query',
            name: 'window-width',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'image/jpeg': { schema: z.any().openapi({ description: 'JPEG image' }), examples: {} },
        'image/png': { schema: z.any().openapi({ description: 'PNG image' }), examples: {} },
        'image/x-portable-arbitrarymap': {
          schema: z.any().openapi({ description: 'PAM image (Portable Arbitrary Map)' }),
          examples: {},
        },
      },
    },
  },
})

export const getInstancesIdSeriesRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/series',
  tags: ['Instances'],
  summary: 'Get parent series',
  description:
    'Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM series',
              example: {
                ExpectedNumberOfInstances: null,
                ID: '52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2',
                Instances: [
                  'ccc7cee2-81566098-5531d590-57b3c148-1787d177',
                  'af464afa-bf0c7970-02a3c666-337a8df8-1d955e27',
                  '42616941-88cbd2a7-f30ceecb-3f53b658-c641372c',
                  '1470f579-11b80cb9-ecf22279-041175d9-d8f3c3ef',
                  '373622cf-43a0259b-ebf55c2a-02e5ef32-1a3115f0',
                  '72b68848-9729ad79-e8762db4-50d97dd3-f3591322',
                  '73e2f25f-aa47b7ba-5d1c6e7b-91b98261-a195316e',
                  'c22831de-6ddaa06c-1f877da5-400a8f03-83668321',
                  '0c322d30-98af6f31-0bd59c19-99e07f68-317aeb3b',
                  'dd69d888-f3065dac-a47c947c-1aed47c8-fc181d11',
                  '...',
                ],
                IsStable: true,
                LastUpdate: '20200803T131236',
                MainDicomTags: {
                  BodyPartExamined: 'CHEST',
                  ImageOrientationPatient: '1\\0\\0\\0\\1\\0',
                  Manufacturer: 'SIEMENS',
                  Modality: 'CT',
                  SeriesDate: '20091022',
                  SeriesDescription: 'HEAD/NECK  2.0  B30s',
                  SeriesInstanceUID:
                    '1.3.6.1.4.1.14519.5.2.1.2193.7172.215111709746721743805035350686',
                  SeriesNumber: '4',
                  SeriesTime: '173151.203000',
                },
                ParentStudy: '1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b',
                Status: 'Unknown',
                Type: 'Series',
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdSimplifiedTagsRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/simplified-tags',
  tags: ['Instances'],
  summary: 'Get human-readable tags',
  description:
    'Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the DICOM tags and their associated value',
              example: {
                AccessionNumber: '0',
                AcquisitionDate: '20061005',
                AcquisitionNumber: '3',
                AcquisitionTime: '101812.967223',
                BitsAllocated: '16',
                BitsStored: '12',
                BodyPartExamined: 'EXTREMITY',
                Columns: '512',
                ContentDate: '20061005',
                ContentTime: '101812.967223',
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/statistics',
  tags: ['Instances'],
  summary: 'Get instance statistics',
  description: 'Get statistics about the given instance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              DicomDiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the instance, expressed in bytes',
                }),
              DicomDiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the instance, expressed in megabytes (MB)',
                }),
              DicomUncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the instance, expressed in bytes',
                }),
              DicomUncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the instance, expressed in megabytes (MB)',
                }),
              DiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the instance on the disk in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              DiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Size of the instance on the disk, expressed in megabytes (MB)',
                }),
              UncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the instance after decompression in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              UncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the instance after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.',
                }),
            })
            .openapi({
              description: '',
              example: {
                DicomDiskSize: '526744',
                DicomDiskSizeMB: 0,
                DicomUncompressedSize: '526744',
                DicomUncompressedSizeMB: 0,
                DiskSize: '539420',
                DiskSizeMB: 0,
                UncompressedSize: '539420',
                UncompressedSizeMB: 0,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getInstancesIdStudyRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/study',
  tags: ['Instances'],
  summary: 'Get parent study',
  description:
    'Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM study',
              example: {
                ID: '1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b',
                IsStable: true,
                LastUpdate: '20200803T131236',
                MainDicomTags: {
                  AccessionNumber: '2819497684894126',
                  ReferringPhysicianName: '',
                  StudyDate: '20091022',
                  StudyDescription: 'RT^HEAD_NECK (Adult)',
                  StudyID: '',
                  StudyInstanceUID:
                    '1.3.6.1.4.1.14519.5.2.1.2193.7172.847236098565581057121195872945',
                  StudyTime: '172721.327000',
                },
                ParentPatient: '65ce8003-696b2eb6-03adeee7-6561ce8e-3e03f13a',
                PatientMainDicomTags: {
                  PatientBirthDate: '',
                  PatientID: 'HN_P001',
                  PatientName: 'HN_P001',
                  PatientSex: 'M',
                },
                Series: [
                  '9c7031b2-97909802-c35563e6-168bf0af-5cfbdce4',
                  '1d9c4560-6480f3d9-0a4d3654-65715f38-755ad2e0',
                  '52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2',
                ],
                Type: 'Study',
              },
            }),
        },
      },
    },
  },
})

export const getInstancesIdTagsRoute = createRoute({
  method: 'get',
  path: '/instances/{id}/tags',
  tags: ['Instances'],
  summary: 'Get DICOM tags',
  description:
    'Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM instance of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the DICOM tags and their associated value',
              example: {
                '0008,0005': { Name: 'SpecificCharacterSet', Type: 'String', Value: 'ISO_IR 100' },
                '0008,0008': {
                  Name: 'ImageType',
                  Type: 'String',
                  Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                },
                '0008,0016': {
                  Name: 'SOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.2',
                },
                '0008,0018': {
                  Name: 'SOPInstanceUID',
                  Type: 'String',
                  Value: '1.3.12.2.1107.5.1.4.54693.30000006100507010800000005269',
                },
                '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20061005' },
                '0008,0021': { Name: 'SeriesDate', Type: 'String', Value: '20061005' },
                '0008,0022': { Name: 'AcquisitionDate', Type: 'String', Value: '20061005' },
                '0008,0023': { Name: 'ContentDate', Type: 'String', Value: '20061005' },
                '0008,0030': { Name: 'StudyTime', Type: 'String', Value: '101556.921000' },
                '0008,0031': { Name: 'SeriesTime', Type: 'String', Value: '102051.046000' },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['Jobs'],
  summary: 'List jobs',
  description: 'List all the available jobs',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual jobs',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the jobs identifiers, or detailed information about the reported jobs (if `expand` argument is provided)',
              example: [
                '088d9652-7ca3-4dfc-ba70-8da881f13e7e',
                '1461a56a-f046-47c3-bf2c-ad891dff319a',
                '4e22e7a9-467f-4957-8ab5-4a86834e66e6',
                '...',
              ],
            }),
        },
      },
    },
  },
})

export const getJobsIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}',
  tags: ['Jobs'],
  summary: 'Get job',
  description:
    'Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object detailing the job',
              example: {
                CompletionTime: '20201227T161842.520129',
                Content: {
                  ArchiveSizeMB: 22,
                  Description: 'REST API',
                  InstancesCount: 232,
                  UncompressedSizeMB: 64,
                },
                CreationTime: '20201227T161836.428311',
                EffectiveRuntime: 6.081,
                ErrorCode: 0,
                ErrorDescription: 'Success',
                ID: '645ecb02-7c0e-4465-b767-df873222dcfb',
                Priority: 0,
                Progress: 100,
                State: 'Success',
                Timestamp: '20201228T160340.253201',
                Type: 'Media',
              },
            }),
        },
      },
    },
  },
})

export const postJobsIdCancelRoute = createRoute({
  method: 'post',
  path: '/jobs/{id}/cancel',
  tags: ['Jobs'],
  summary: 'Cancel job',
  description:
    'Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const postJobsIdPauseRoute = createRoute({
  method: 'post',
  path: '/jobs/{id}/pause',
  tags: ['Jobs'],
  summary: 'Pause job',
  description:
    'Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const postJobsIdResubmitRoute = createRoute({
  method: 'post',
  path: '/jobs/{id}/resubmit',
  tags: ['Jobs'],
  summary: 'Resubmit job',
  description:
    'Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const postJobsIdResumeRoute = createRoute({
  method: 'post',
  path: '/jobs/{id}/resume',
  tags: ['Jobs'],
  summary: 'Resume job',
  description:
    'Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const getJobsIdKeyRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}/{key}',
  tags: ['Jobs'],
  summary: 'Get job output',
  description:
    'Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Name of the output of interest',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'Content of the output of the job' }),
          examples: {},
        },
      },
    },
  },
})

export const getModalitiesRoute = createRoute({
  method: 'get',
  path: '/modalities',
  tags: ['Networking'],
  summary: 'List DICOM modalities',
  description:
    'List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, retrieve detailed information about the individual DICOM modalities',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the identifiers of the modalities, or detailed information about the modalities (if `expand` argument is provided)',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getModalitiesIdRoute = createRoute({
  method: 'get',
  path: '/modalities/{id}',
  tags: ['Networking'],
  summary: 'List operations on modality',
  description: 'List the operations that are available for a DICOM modality.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the DICOM modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'List of the available operations' }),
          examples: {},
        },
      },
    },
  },
})

export const putModalitiesIdRoute = createRoute({
  method: 'put',
  path: '/modalities/{id}',
  tags: ['Networking'],
  summary: 'Update DICOM modality',
  description:
    'Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the new/updated DICOM modality',
            in: 'path',
            name: 'id',
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
              AET: z
                .string()
                .exactOptional()
                .openapi({ description: 'AET of the remote DICOM modality' }),
              AllowEcho: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept C-ECHO SCU commands issued by the remote modality',
                }),
              AllowFind: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept C-FIND SCU commands issued by the remote modality',
                }),
              AllowFindWorklist: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept C-FIND SCU commands for worklists issued by the remote modality',
                }),
              AllowGet: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to accept C-GET SCU commands issued by the remote modality',
                }),
              AllowMove: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept C-MOVE SCU commands issued by the remote modality',
                }),
              AllowStorageCommitment: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept storage commitment requests issued by the remote modality',
                }),
              AllowStore: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to accept C-STORE SCU commands issued by the remote modality',
                }),
              AllowTranscoding: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to allow transcoding for operations initiated by this modality. This option applies to Orthanc C-GET SCP and to Orthanc C-STORE SCU. It only has an effect if the global option `EnableTranscoding` is set to `true`.',
                }),
              Host: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Host address of the remote DICOM modality (typically, an IP address)',
                }),
              Manufacturer: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Manufacturer of the remote DICOM modality (check configuration option `DicomModalities` for possible values',
                }),
              Port: z
                .number()
                .exactOptional()
                .openapi({ description: 'TCP port of the remote DICOM modality' }),
              UseDicomTls: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to use DICOM TLS in the SCU connection initiated by Orthanc (new in Orthanc 1.9.0)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteModalitiesIdRoute = createRoute({
  method: 'delete',
  path: '/modalities/{id}',
  tags: ['Networking'],
  summary: 'Delete DICOM modality',
  description:
    'Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the DICOM modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getModalitiesIdConfigurationRoute = createRoute({
  method: 'get',
  path: '/modalities/{id}/configuration',
  tags: ['Networking'],
  summary: 'Get modality configuration',
  description: 'Get detailed information about the configuration of some DICOM modality',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Configuration of the modality',
              example: {
                AET: 'ORTHANCTEST',
                AllowEcho: true,
                AllowEventReport: true,
                AllowFind: true,
                AllowFindWorklist: true,
                AllowGet: true,
                AllowMove: true,
                AllowNAction: true,
                AllowStore: true,
                AllowTranscoding: true,
                Host: '127.0.1.1',
                Manufacturer: 'Generic',
                Port: 5001,
              },
            }),
        },
      },
    },
  },
})

export const postModalitiesIdEchoRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/echo',
  tags: ['Networking'],
  summary: 'Trigger C-ECHO SCU',
  description:
    'Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              CheckFind: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Issue a dummy C-FIND command after the C-GET SCU, in order to check whether the remote modality knows about Orthanc. This field defaults to the value of the `DicomEchoChecksFind` configuration option. New in Orthanc 1.8.1.',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-ECHO command, in seconds' }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postModalitiesIdFindRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find',
  tags: ['Networking'],
  summary: 'Hierarchical C-FIND SCU',
  description:
    'Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Associative array containing the query on the values of the DICOM tags',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array describing the DICOM tags of the matching patients, embedding the matching studies, then the matching series.',
            }),
          examples: {},
        },
      },
    },
  },
  deprecated: true,
})

export const postModalitiesIdFindInstanceRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find-instance',
  tags: ['Networking'],
  summary: 'C-FIND SCU for instances',
  description:
    'Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Associative array containing the query on the values of the DICOM tags',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array describing the DICOM tags of the matching instances',
            }),
          examples: {},
        },
      },
    },
  },
  deprecated: true,
})

export const postModalitiesIdFindPatientRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find-patient',
  tags: ['Networking'],
  summary: 'C-FIND SCU for patients',
  description:
    'Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Associative array containing the query on the values of the DICOM tags',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array describing the DICOM tags of the matching patients',
            }),
          examples: {},
        },
      },
    },
  },
  deprecated: true,
})

export const postModalitiesIdFindSeriesRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find-series',
  tags: ['Networking'],
  summary: 'C-FIND SCU for series',
  description:
    'Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Associative array containing the query on the values of the DICOM tags',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array describing the DICOM tags of the matching series',
            }),
          examples: {},
        },
      },
    },
  },
  deprecated: true,
})

export const postModalitiesIdFindStudyRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find-study',
  tags: ['Networking'],
  summary: 'C-FIND SCU for studies',
  description:
    'Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Associative array containing the query on the values of the DICOM tags',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array describing the DICOM tags of the matching studies',
            }),
          examples: {},
        },
      },
    },
  },
  deprecated: true,
})

export const postModalitiesIdFindWorklistRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/find-worklist',
  tags: ['Networking'],
  summary: 'C-FIND SCU for worklist',
  description:
    'Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              Full: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
                }),
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              Short: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, report the DICOM tags in hexadecimal format',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array describing the DICOM tags of the matching worklists',
            }),
          examples: {},
        },
      },
    },
  },
})

export const postModalitiesIdMoveRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/move',
  tags: ['Networking'],
  summary: 'Trigger C-MOVE SCU',
  description:
    'Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Level: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Level of the query (`Patient`, `Study`, `Series` or `Instance`)',
                }),
              LocalAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description: 'List of queries identifying all the DICOM resources to be sent',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              TargetAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Target AET that will be used by the remote DICOM modality as a target for its C-STORE SCU commands, defaults to `DicomAet` configuration option in order to do a simple query/retrieve',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-MOVE command, in seconds' }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postModalitiesIdQueryRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/query',
  tags: ['Networking'],
  summary: 'Trigger C-FIND SCU',
  description:
    'Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              Level: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Level of the query (`Patient`, `Study`, `Series` or `Instance`)',
                }),
              LocalAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.',
                }),
              Normalize: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to normalize the query, i.e. whether to wipe out from the query, the DICOM tags that are not applicable for the query-retrieve level of interest',
                }),
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Timeout for the C-FIND command and subsequent C-MOVE retrievals, in seconds (new in Orthanc 1.9.1)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Identifier of the query, to be used with `/queries/{id}`',
                }),
              Path: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Root path to the query in the REST API' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postModalitiesIdStorageCommitmentRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/storage-commitment',
  tags: ['Networking'],
  summary: 'Trigger storage commitment request',
  description:
    'Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              DicomInstances: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM resources that are not necessarily stored within Orthanc, but that must be checked by storage commitment. This is a list of JSON objects that must contain the `SOPClassUID` and `SOPInstanceUID` fields.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of the DICOM resources to be checked by storage commitment',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timeout for the storage commitment command (new in Orthanc 1.9.1)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Identifier of the storage commitment report, to be used with `/storage-commitment/{id}`',
                }),
              Path: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Root path to the storage commitment report in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postModalitiesIdStoreRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/store',
  tags: ['Networking'],
  summary: 'Trigger C-STORE SCU',
  description:
    'Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              CalledAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Called AET that is used for this commands, defaults to `AET` configuration option. Allows you to overwrite the destination AET for a specific operation.',
                }),
              Host: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Host that is used for this commands, defaults to `Host` configuration option. Allows you to overwrite the destination host for a specific operation.',
                }),
              LocalAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.',
                }),
              MoveOriginatorAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Move originator AET that is used for this commands, in order to fake a C-MOVE SCU',
                }),
              MoveOriginatorID: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Move originator ID that is used for this commands, in order to fake a C-MOVE SCU',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Port: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Port that is used for this commands, defaults to `Port` configuration option. Allows you to overwrite the destination port for a specific operation.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of all the DICOM resources to be sent',
                }),
              StorageCommitment: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to chain C-STORE with DICOM storage commitment to validate the success of the transmission: https://book.orthanc-server.com/users/storage-commitment.html#chaining-c-store-with-storage-commitment',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-STORE command, in seconds' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The Orthanc identifier of one resource to be sent' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postModalitiesIdStoreStraightRoute = createRoute({
  method: 'post',
  path: '/modalities/{id}/store-straight',
  tags: ['Networking'],
  summary: 'Straight C-STORE SCU',
  description:
    'Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'DICOM instance to be sent' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              SOPClassUID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SOP class UID of the DICOM instance, if the C-STORE SCU has succeeded',
                }),
              SOPInstanceUID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SOP instance UID of the DICOM instance, if the C-STORE SCU has succeeded',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsRoute = createRoute({
  method: 'get',
  path: '/patients',
  tags: ['Patients'],
  summary: 'List the available patients',
  description: 'List the Orthanc identifiers of all the available DICOM patients',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual patients',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the Orthanc identifiers, or detailed information about the reported patients (if `expand` argument is provided)',
              example: [
                '0946fcb6-cf12ab43-bad958c1-bf057ad5-0fc6f54c',
                'da39a3ee-5e6b4b0d-3255bfef-95601890-afd80709',
              ],
            }),
        },
      },
    },
  },
})

export const getPatientsIdRoute = createRoute({
  method: 'get',
  path: '/patients/{id}',
  tags: ['Patients'],
  summary: 'Get information about some patient',
  description:
    'Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM patient',
              example: {
                ID: '46e6332c-677825b6-202fcf7c-f787bc5f-7b07c382',
                IsStable: true,
                LastUpdate: '20180414T091542',
                MainDicomTags: { PatientID: 'SOtNwu', PatientName: 'INCISIX' },
                Studies: ['e98b9ac7-dd31ac40-ff046cb2-f0400d30-12f81d85'],
                Type: 'Patient',
              },
            }),
        },
      },
    },
  },
})

export const deletePatientsIdRoute = createRoute({
  method: 'delete',
  path: '/patients/{id}',
  tags: ['Patients'],
  summary: 'Delete some patient',
  description: 'Delete the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postPatientsIdAnonymizeRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/anonymize',
  tags: ['Patients'],
  summary: 'Anonymize patient',
  description:
    'Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              DicomVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              KeepPrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Keep the private tags from the DICOM instances (defaults to `false`)',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsIdArchiveRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/archive',
  tags: ['Patients'],
  summary: 'Create ZIP archive',
  description:
    'Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postPatientsIdArchiveRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/archive',
  tags: ['Patients'],
  summary: 'Create ZIP archive',
  description:
    'Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments',
  tags: ['Patients'],
  summary: 'List attachments',
  description: 'Get the list of attachments that are associated with the given patient',
  request: {
    query: z.object({
      full: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve the attachments list and their numerical ids',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the names of the attachments',
              example: [],
            }),
        },
      },
    },
  },
})

export const getPatientsIdAttachmentsNameRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}',
  tags: ['Other'],
  summary: 'List operations on attachments',
  description:
    'Get the list of the operations that are available for attachments associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'compress',
                'compressed-data',
                'compressed-md5',
                'compressed-size',
                'data',
                'info',
                'is-compressed',
                'md5',
                'size',
                'uncompress',
                'verify-md5',
                'uuid',
              ],
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putPatientsIdAttachmentsNameRoute = createRoute({
  method: 'put',
  path: '/patients/{id}/attachments/{name}',
  tags: ['Patients'],
  summary: 'Set attachment',
  description:
    'Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, if this is not the first time this attachment is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'Binary data containing the attachment' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const deletePatientsIdAttachmentsNameRoute = createRoute({
  method: 'delete',
  path: '/patients/{id}/attachments/{name}',
  tags: ['Patients'],
  summary: 'Delete attachment',
  description:
    'Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postPatientsIdAttachmentsNameCompressRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/attachments/{name}/compress',
  tags: ['Patients'],
  summary: 'Compress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getPatientsIdAttachmentsNameCompressedDataRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/compressed-data',
  tags: ['Patients'],
  summary: 'Get attachment (no decompression)',
  description:
    'Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameCompressedMd5Route = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/compressed-md5',
  tags: ['Patients'],
  summary: 'Get MD5 of attachment on disk',
  description:
    'Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The MD5 of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameCompressedSizeRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/compressed-size',
  tags: ['Patients'],
  summary: 'Get size of attachment on disk',
  description:
    'Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The size of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameDataRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/data',
  tags: ['Patients'],
  summary: 'Get attachment',
  description: 'Get the (binary) content of one attachment associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameInfoRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/info',
  tags: ['Patients'],
  summary: 'Get info about the attachment',
  description: 'Get all the information about the attachment associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the information about the attachment',
              example: {
                CompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                CompressedSize: 526970,
                ContentType: 1,
                UncompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                UncompressedSize: 526970,
                Uuid: 'b7c99eb7-229f-464e-8f46-6878c8e79e5c',
              },
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameIsCompressedRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/is-compressed',
  tags: ['Patients'],
  summary: 'Is attachment compressed?',
  description: 'Test whether the attachment has been stored as a compressed file on the disk.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                '`0` if the attachment was stored uncompressed, `1` if it was compressed',
            }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameMd5Route = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/md5',
  tags: ['Patients'],
  summary: 'Get MD5 of attachment',
  description: 'Get the MD5 hash of one attachment associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The MD5 of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPatientsIdAttachmentsNameSizeRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/attachments/{name}/size',
  tags: ['Patients'],
  summary: 'Get size of attachment',
  description: 'Get the size of one attachment associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The size of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postPatientsIdAttachmentsNameUncompressRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/attachments/{name}/uncompress',
  tags: ['Patients'],
  summary: 'Uncompress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postPatientsIdAttachmentsNameVerifyMd5Route = createRoute({
  method: 'post',
  path: '/patients/{id}/attachments/{name}/verify-md5',
  tags: ['Patients'],
  summary: 'Verify attachment',
  description: 'Verify that the attachment is not corrupted, by validating its MD5 hash',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'On success, a valid JSON object is returned' }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsIdInstancesRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/instances',
  tags: ['Patients'],
  summary: 'Get child instances',
  description:
    'Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM instances',
              example: [
                {
                  FileSize: 526866,
                  FileUuid: 'c14b2b87-53e2-420b-baf9-020cae34fedf',
                  ID: 'e3dfd688-80e4743a-29c45f90-371ec4a4-04d18ae5',
                  IndexInSeries: 137,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-96.3193359375\\-249.3193359375\\62',
                    InstanceNumber: '137',
                    SOPInstanceUID: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014881',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 526870,
                  FileUuid: '27cdb02f-500f-4b37-9ca1-058d8d4f649a',
                  ID: '4fecddf1-518346e4-4f30176b-c453b3d8-65899230',
                  IndexInSeries: 114,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-96.3193359375\\-249.3193359375\\73.5',
                    InstanceNumber: '114',
                    SOPInstanceUID: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014858',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 526868,
                  FileUuid: '5a6334a8-e050-47e5-8832-531ee62aa9a7',
                  ID: 'c9a55bc1-9e98ba4b-bc455dc3-24c4c525-1b171b6c',
                  IndexInSeries: 66,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-96.3193359375\\-249.3193359375\\97.5',
                    InstanceNumber: '66',
                    SOPInstanceUID: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014810',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 526866,
                  FileUuid: 'e6c09e08-8284-4416-a90f-67a7dc9f68f0',
                  ID: '135cca6f-4c099fdd-afc99251-f58a819b-5a0222eb',
                  IndexInSeries: 161,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-96.3193359375\\-249.3193359375\\50',
                    InstanceNumber: '161',
                    SOPInstanceUID: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014905',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 526866,
                  FileUuid: '9eb33412-d1e9-4bb0-879b-5501db81d574',
                  ID: '719d58b1-2a259486-7cc5919d-68a2bd30-da2cd290',
                  IndexInSeries: 61,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-96.3193359375\\-249.3193359375\\100',
                    InstanceNumber: '61',
                    SOPInstanceUID: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014805',
                  },
                  '{...}': '...',
                },
                '...',
              ],
            }),
        },
      },
    },
  },
})

export const getPatientsIdInstancesTagsRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/instances-tags',
  tags: ['Patients'],
  summary: 'Get tags of instances',
  description:
    'Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON object associating the Orthanc identifiers of the instances, with the values of their DICOM tags',
              example: {
                '011ead8d-f2508edd-da315604-80b002df-e678b796': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '0008,0018': {
                    Name: 'SOPInstanceUID',
                    Type: 'String',
                    Value: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014840',
                  },
                  '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                  '{...}': '...',
                },
                '01252811-30d1c47b-a8c03da5-73177742-48495192': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '0008,0018': {
                    Name: 'SOPInstanceUID',
                    Type: 'String',
                    Value: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014790',
                  },
                  '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                  '{...}': '...',
                },
                '04a30982-835a4b0a-3082b997-060f01f5-071a0f8d': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '0008,0018': {
                    Name: 'SOPInstanceUID',
                    Type: 'String',
                    Value: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014760',
                  },
                  '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                  '{...}': '...',
                },
                '04efd8b9-2ae1f3db-deb0f226-e3267002-6cd8fa3c': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '0008,0018': {
                    Name: 'SOPInstanceUID',
                    Type: 'String',
                    Value: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014832',
                  },
                  '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                  '{...}': '...',
                },
                '0df992f4-0a841d5c-aeb8cdda-9c1a0573-dbd49c3f': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '0008,0018': {
                    Name: 'SOPInstanceUID',
                    Type: 'String',
                    Value: '1.3.12.2.1107.5.1.4.54693.30000006053107175587500014882',
                  },
                  '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                  '{...}': '...',
                },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getPatientsIdMediaRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/media',
  tags: ['Patients'],
  summary: 'Create DICOMDIR media',
  description:
    'Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      extended: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*',
            in: 'query',
            name: 'extended',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postPatientsIdMediaRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/media',
  tags: ['Patients'],
  summary: 'Create DICOMDIR media',
  description:
    'Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Extended: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsIdMetadataRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/metadata',
  tags: ['Patients'],
  summary: 'List metadata',
  description: 'Get the list of metadata that are associated with the given patient',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, also retrieve the value of the individual metadata',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing the names of the available metadata, or JSON associative array mapping metadata to their values (if `expand` argument is provided)',
              example: ['LastUpdate'],
            }),
        },
      },
    },
  },
})

export const getPatientsIdMetadataNameRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/metadata/{name}',
  tags: ['Patients'],
  summary: 'Get metadata',
  description: 'Get the value of a metadata that is associated with the given patient',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Value of the metadata' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putPatientsIdMetadataNameRoute = createRoute({
  method: 'put',
  path: '/patients/{id}/metadata/{name}',
  tags: ['Patients'],
  summary: 'Set metadata',
  description:
    'Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, if this is not the first time this metadata is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'String value of the metadata' }) },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deletePatientsIdMetadataNameRoute = createRoute({
  method: 'delete',
  path: '/patients/{id}/metadata/{name}',
  tags: ['Patients'],
  summary: 'Delete metadata',
  description:
    'Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postPatientsIdModifyRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/modify',
  tags: ['Patients'],
  summary: 'Modify patient',
  description:
    'Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              RemovePrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Remove the private tags from the DICOM instances (defaults to `false`)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getPatientsIdModuleRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/module',
  tags: ['Patients'],
  summary: 'Get patient module',
  description:
    'Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM patient',
              example: {
                '0010,0010': { Name: 'PatientName', Type: 'String', Value: 'INCISIX' },
                '0010,0020': { Name: 'PatientID', Type: 'String', Value: 'SOtNwu' },
              },
            }),
        },
      },
    },
  },
})

export const getPatientsIdProtectedRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/protected',
  tags: ['Patients'],
  summary: 'Is the patient protected against recycling?',
  description: 'Is the patient protected against recycling?',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: '`1` if protected, `0` if not protected' }),
          examples: {},
        },
      },
    },
  },
})

export const putPatientsIdProtectedRoute = createRoute({
  method: 'put',
  path: '/patients/{id}/protected',
  tags: ['Patients'],
  summary: 'Protect one patient against recycling',
  description: 'Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postPatientsIdReconstructRoute = createRoute({
  method: 'post',
  path: '/patients/{id}/reconstruct',
  tags: ['Patients'],
  summary: 'Reconstruct tags & optionally files of patient',
  description:
    'Reconstruct the main DICOM tags in DB of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
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
              ReconstructFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getPatientsIdSeriesRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/series',
  tags: ['Patients'],
  summary: 'Get child series',
  description:
    'Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM series',
              example: [
                {
                  ExpectedNumberOfInstances: null,
                  ID: '52cc572c-3ee31930-c4b6d5e7-16c786dc-97bc209b',
                  Instances: [
                    'e3dfd688-80e4743a-29c45f90-371ec4a4-04d18ae5',
                    '4fecddf1-518346e4-4f30176b-c453b3d8-65899230',
                    'c9a55bc1-9e98ba4b-bc455dc3-24c4c525-1b171b6c',
                    '135cca6f-4c099fdd-afc99251-f58a819b-5a0222eb',
                    '719d58b1-2a259486-7cc5919d-68a2bd30-da2cd290',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091542',
                  '{...}': '...',
                },
              ],
            }),
        },
      },
    },
  },
})

export const getPatientsIdSharedTagsRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/shared-tags',
  tags: ['Patients'],
  summary: 'Get shared tags',
  description:
    'Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the values of the DICOM tags',
              example: {
                '0008,0005': { Name: 'SpecificCharacterSet', Type: 'String', Value: 'ISO_IR 100' },
                '0008,0008': {
                  Name: 'ImageType',
                  Type: 'String',
                  Value: 'ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI',
                },
                '0008,0016': {
                  Name: 'SOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.2',
                },
                '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20060531' },
                '0008,0021': { Name: 'SeriesDate', Type: 'String', Value: '20060531' },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getPatientsIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/statistics',
  tags: ['Patients'],
  summary: 'Get patient statistics',
  description: 'Get statistics about the given patient',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CountInstances: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child instances within this patient' }),
              CountSeries: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child series within this patient' }),
              CountStudies: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child studies within this patient' }),
              DicomDiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the patient, expressed in bytes',
                }),
              DicomDiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the patient, expressed in megabytes (MB)',
                }),
              DicomUncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the patient, expressed in bytes',
                }),
              DicomUncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the patient, expressed in megabytes (MB)',
                }),
              DiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the patient on the disk in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              DiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Size of the patient on the disk, expressed in megabytes (MB)',
                }),
              UncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the patient after decompression in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              UncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the patient after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.',
                }),
            })
            .openapi({
              description: '',
              example: {
                CountInstances: 166,
                CountSeries: 1,
                CountStudies: 1,
                DicomDiskSize: '87460012',
                DicomDiskSizeMB: 83,
                DicomUncompressedSize: '87460012',
                DicomUncompressedSizeMB: 83,
                DiskSize: '89640436',
                DiskSizeMB: 85,
                UncompressedSize: '89640436',
                UncompressedSizeMB: 85,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getPatientsIdStudiesRoute = createRoute({
  method: 'get',
  path: '/patients/{id}/studies',
  tags: ['Patients'],
  summary: 'Get child studies',
  description:
    'Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the patient of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM studies',
              example: [
                {
                  ID: 'e98b9ac7-dd31ac40-ff046cb2-f0400d30-12f81d85',
                  IsStable: true,
                  LastUpdate: '20180414T091542',
                  MainDicomTags: {
                    AccessionNumber: '0',
                    InstitutionName: 'dPJ',
                    ReferringPhysicianName: 'YzTEkpkak0p0Tk5',
                    RequestedProcedureDescription: 'CT2 tête, face, sinus',
                    StudyDate: '20060531',
                    '{...}': '...',
                  },
                  ParentPatient: '46e6332c-677825b6-202fcf7c-f787bc5f-7b07c382',
                  '{...}': '...',
                },
              ],
            }),
        },
      },
    },
  },
})

export const getPeersRoute = createRoute({
  method: 'get',
  path: '/peers',
  tags: ['Networking'],
  summary: 'List Orthanc peers',
  description:
    'List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, retrieve detailed information about the individual Orthanc peers',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the identifiers of the peers, or detailed information about the peers (if `expand` argument is provided)',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getPeersIdRoute = createRoute({
  method: 'get',
  path: '/peers/{id}',
  tags: ['Networking'],
  summary: 'List operations on peer',
  description: 'List the operations that are available for an Orthanc peer.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the peer of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'List of the available operations' }),
          examples: {},
        },
      },
    },
  },
})

export const putPeersIdRoute = createRoute({
  method: 'put',
  path: '/peers/{id}',
  tags: ['Networking'],
  summary: 'Update Orthanc peer',
  description:
    'Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the new/updated Orthanc peer',
            in: 'path',
            name: 'id',
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
              CertificateFile: z
                .string()
                .exactOptional()
                .openapi({ description: 'SSL certificate for the HTTPS connections' }),
              CertificateKeyFile: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key file for the SSL certificate for the HTTPS connections',
                }),
              CertificateKeyPassword: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key password for the SSL certificate for the HTTPS connections',
                }),
              HttpHeaders: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'HTTP headers to be used for the connections to the remote peer',
                }),
              Password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password for the credentials' }),
              URL: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL of the root of the REST API of the remote Orthanc peer, for instance `http://localhost:8042/`',
                }),
              Username: z
                .string()
                .exactOptional()
                .openapi({ description: 'Username for the credentials' }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deletePeersIdRoute = createRoute({
  method: 'delete',
  path: '/peers/{id}',
  tags: ['Networking'],
  summary: 'Delete Orthanc peer',
  description:
    'Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the Orthanc peer of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getPeersIdConfigurationRoute = createRoute({
  method: 'get',
  path: '/peers/{id}/configuration',
  tags: ['Networking'],
  summary: 'Get peer configuration',
  description: 'Get detailed information about the configuration of some Orthanc peer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the peer of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Configuration of the peer',
              example: {
                HttpHeaders: {},
                Password: null,
                Pkcs11: false,
                Url: 'http://127.0.1.1:5000/',
                Username: 'alice',
              },
            }),
        },
      },
    },
  },
})

export const postPeersIdStoreRoute = createRoute({
  method: 'post',
  path: '/peers/{id}/store',
  tags: ['Networking'],
  summary: 'Send to Orthanc peer',
  description:
    'Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Compress: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to compress the DICOM instances using gzip before the actual sending',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of all the DICOM resources to be sent',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode to the provided DICOM transfer syntax before the actual sending',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The Orthanc identifier of one resource to be sent' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postPeersIdStoreStraightRoute = createRoute({
  method: 'post',
  path: '/peers/{id}/store-straight',
  tags: ['Networking'],
  summary: 'Straight store to peer',
  description:
    'Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the modality of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/dicom': {
          schema: z.any().openapi({ description: 'DICOM instance to be sent' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Orthanc identifier of the DICOM instance in the remote Orthanc peer',
                }),
              ParentPatient: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Orthanc identifier of the parent patient in the remote Orthanc peer',
                }),
              ParentSeries: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Orthanc identifier of the parent series in the remote Orthanc peer',
                }),
              ParentStudy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Orthanc identifier of the parent study in the remote Orthanc peer',
                }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to the DICOM instance in the remote Orthanc server',
                }),
              Status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Status of the store operation' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getPeersIdSystemRoute = createRoute({
  method: 'get',
  path: '/peers/{id}/system',
  tags: ['Networking'],
  summary: 'Get peer system information',
  description:
    'Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the peer of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'System information about the peer' }),
          examples: {},
        },
      },
    },
  },
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['System'],
  summary: 'List plugins',
  description: 'List all the installed plugins',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the identifiers of the installed plugins',
              example: [
                'explorer.js',
                'authorization',
                'connectivity-checks',
                'dicom-web',
                'gdcm',
                'indexer',
                'mysql-index',
                'mysql-storage',
                'neuro',
                'odbc-index',
                'odbc-storage',
                'postgresql-index',
                'postgresql-storage',
                'serve-folders',
                'stone-rtviewer',
                'stone-webviewer',
                'tcia',
                'transfers',
                'web-viewer',
                'worklists',
                'wsi',
              ],
            }),
        },
      },
    },
  },
})

export const getPluginsExplorerJsRoute = createRoute({
  method: 'get',
  path: '/plugins/explorer.js',
  tags: ['System'],
  summary: 'JavaScript extensions to Orthanc Explorer',
  description:
    'Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.',
  responses: {
    200: {
      description: '',
      content: {
        'application/javascript': {
          schema: z.any().openapi({ description: 'The JavaScript extensions' }),
          examples: {},
        },
      },
    },
  },
})

export const getPluginsIdRoute = createRoute({
  method: 'get',
  path: '/plugins/{id}',
  tags: ['System'],
  summary: 'Get plugin',
  description: 'Get system information about the plugin whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the job of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing information about the plugin',
              example: {
                Description:
                  'Implementation of DICOMweb (QIDO-RS, STOW-RS and WADO-RS) and WADO-URI.',
                ExtendsOrthancExplorer: true,
                ID: 'dicom-web',
                RootUri: '../dicom-web/app/client/index.html',
                Version: '1.7',
              },
            }),
        },
      },
    },
  },
})

export const getQueriesRoute = createRoute({
  method: 'get',
  path: '/queries',
  tags: ['Networking'],
  summary: 'List query/retrieve operations',
  description:
    'List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'JSON array containing the identifiers' }),
          examples: {},
        },
      },
    },
  },
})

export const getQueriesIdRoute = createRoute({
  method: 'get',
  path: '/queries/{id}',
  tags: ['Networking'],
  summary: 'List operations on a query',
  description:
    'List the available operations for the query/retrieve operation whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'JSON array containing the list of operations' }),
          examples: {},
        },
      },
    },
  },
})

export const deleteQueriesIdRoute = createRoute({
  method: 'delete',
  path: '/queries/{id}',
  tags: ['Networking'],
  summary: 'Delete a query',
  description: 'Delete the query/retrieve operation whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getQueriesIdAnswersRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/answers',
  tags: ['Networking'],
  summary: 'List answers to a query',
  description:
    'List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual answers',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing the indices of the answers, or detailed information about the reported answers (if `expand` argument is provided)',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getQueriesIdAnswersIndexRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/answers/{index}',
  tags: ['Networking'],
  summary: 'List operations on an answer',
  description:
    'List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'JSON array containing the list of operations' }),
          examples: {},
        },
      },
    },
  },
})

export const getQueriesIdAnswersIndexContentRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/answers/{index}/content',
  tags: ['Networking'],
  summary: 'Get one answer',
  description:
    'Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({ description: 'JSON object containing the DICOM tags of the answer' }),
          examples: {},
        },
      },
    },
  },
})

export const postQueriesIdAnswersIndexQueryInstancesRoute = createRoute({
  method: 'post',
  path: '/queries/{id}/answers/{index}/query-instances',
  tags: ['Networking'],
  summary: 'Query the child instances of an answer',
  description:
    'Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
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
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Identifier of the query, to be used with `/queries/{id}`',
                }),
              Path: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Root path to the query in the REST API' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postQueriesIdAnswersIndexQuerySeriesRoute = createRoute({
  method: 'post',
  path: '/queries/{id}/answers/{index}/query-series',
  tags: ['Networking'],
  summary: 'Query the child series of an answer',
  description:
    'Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
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
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Identifier of the query, to be used with `/queries/{id}`',
                }),
              Path: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Root path to the query in the REST API' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postQueriesIdAnswersIndexQueryStudiesRoute = createRoute({
  method: 'post',
  path: '/queries/{id}/answers/{index}/query-studies',
  tags: ['Networking'],
  summary: 'Query the child studies of an answer',
  description:
    'Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
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
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Identifier of the query, to be used with `/queries/{id}`',
                }),
              Path: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Root path to the query in the REST API' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postQueriesIdAnswersIndexRetrieveRoute = createRoute({
  method: 'post',
  path: '/queries/{id}/answers/{index}/retrieve',
  tags: ['Networking'],
  summary: 'Retrieve one answer',
  description:
    'Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Index of the answer',
            in: 'path',
            name: 'index',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Full: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Simplify: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              TargetAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-MOVE command, in seconds' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'text/plain': { schema: z.any().openapi({ description: 'AET of the target modality' }) },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getQueriesIdLevelRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/level',
  tags: ['Networking'],
  summary: 'Get level of original query',
  description:
    'Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'The level' }), examples: {} },
      },
    },
  },
})

export const getQueriesIdModalityRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/modality',
  tags: ['Networking'],
  summary: 'Get modality of original query',
  description:
    'Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The identifier of the DICOM modality' }),
          examples: {},
        },
      },
    },
  },
})

export const getQueriesIdQueryRoute = createRoute({
  method: 'get',
  path: '/queries/{id}/query',
  tags: ['Networking'],
  summary: 'Get original query arguments',
  description:
    'Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Content of the original query' }),
          examples: {},
        },
      },
    },
  },
})

export const postQueriesIdRetrieveRoute = createRoute({
  method: 'post',
  path: '/queries/{id}/retrieve',
  tags: ['Networking'],
  summary: 'Retrieve all answers',
  description:
    'Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the query of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Full: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Simplify: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              TargetAet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.',
                }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-MOVE command, in seconds' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'text/plain': { schema: z.any().openapi({ description: 'AET of the target modality' }) },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesRoute = createRoute({
  method: 'get',
  path: '/series',
  tags: ['Series'],
  summary: 'List the available series',
  description: 'List the Orthanc identifiers of all the available DICOM series',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual series',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the Orthanc identifiers, or detailed information about the reported series (if `expand` argument is provided)',
              example: [
                '318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb',
                '7124dba7-09803f33-98b73826-33f14632-ea842d29',
              ],
            }),
        },
      },
    },
  },
})

export const getSeriesIdRoute = createRoute({
  method: 'get',
  path: '/series/{id}',
  tags: ['Series'],
  summary: 'Get information about some series',
  description:
    'Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM series',
              example: {
                ExpectedNumberOfInstances: null,
                ID: '37836232-d13a2350-fa1dedc5-962b31aa-010f8e52',
                Instances: ['6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f'],
                IsStable: true,
                LastUpdate: '20180414T091542',
                MainDicomTags: {
                  ImageOrientationPatient: '0\\1\\0\\0\\0\\-1',
                  Manufacturer: 'Philips',
                  Modality: 'CT',
                  PerformedProcedureStepDescription: 'CT2 tête, face, sinus',
                  ProtocolName: 'COU 2 mm/Neck/Sv',
                  SeriesInstanceUID: '1.2.840.113704.1.111.5692.1127828999.2',
                  SeriesNumber: '2276',
                  StationName: 'ctrad',
                },
                ParentStudy: '49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a',
                Status: 'Unknown',
                Type: 'Series',
              },
            }),
        },
      },
    },
  },
})

export const deleteSeriesIdRoute = createRoute({
  method: 'delete',
  path: '/series/{id}',
  tags: ['Series'],
  summary: 'Delete some series',
  description: 'Delete the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postSeriesIdAnonymizeRoute = createRoute({
  method: 'post',
  path: '/series/{id}/anonymize',
  tags: ['Series'],
  summary: 'Anonymize series',
  description:
    'Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              DicomVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              KeepPrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Keep the private tags from the DICOM instances (defaults to `false`)',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdArchiveRoute = createRoute({
  method: 'get',
  path: '/series/{id}/archive',
  tags: ['Series'],
  summary: 'Create ZIP archive',
  description:
    'Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postSeriesIdArchiveRoute = createRoute({
  method: 'post',
  path: '/series/{id}/archive',
  tags: ['Series'],
  summary: 'Create ZIP archive',
  description:
    'Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments',
  tags: ['Series'],
  summary: 'List attachments',
  description: 'Get the list of attachments that are associated with the given series',
  request: {
    query: z.object({
      full: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve the attachments list and their numerical ids',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the names of the attachments',
              example: [],
            }),
        },
      },
    },
  },
})

export const getSeriesIdAttachmentsNameRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}',
  tags: ['Other'],
  summary: 'List operations on attachments',
  description:
    'Get the list of the operations that are available for attachments associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'compress',
                'compressed-data',
                'compressed-md5',
                'compressed-size',
                'data',
                'info',
                'is-compressed',
                'md5',
                'size',
                'uncompress',
                'verify-md5',
                'uuid',
              ],
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putSeriesIdAttachmentsNameRoute = createRoute({
  method: 'put',
  path: '/series/{id}/attachments/{name}',
  tags: ['Series'],
  summary: 'Set attachment',
  description:
    'Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, if this is not the first time this attachment is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'Binary data containing the attachment' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const deleteSeriesIdAttachmentsNameRoute = createRoute({
  method: 'delete',
  path: '/series/{id}/attachments/{name}',
  tags: ['Series'],
  summary: 'Delete attachment',
  description:
    'Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postSeriesIdAttachmentsNameCompressRoute = createRoute({
  method: 'post',
  path: '/series/{id}/attachments/{name}/compress',
  tags: ['Series'],
  summary: 'Compress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getSeriesIdAttachmentsNameCompressedDataRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/compressed-data',
  tags: ['Series'],
  summary: 'Get attachment (no decompression)',
  description:
    'Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameCompressedMd5Route = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/compressed-md5',
  tags: ['Series'],
  summary: 'Get MD5 of attachment on disk',
  description:
    'Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The MD5 of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameCompressedSizeRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/compressed-size',
  tags: ['Series'],
  summary: 'Get size of attachment on disk',
  description:
    'Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The size of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameDataRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/data',
  tags: ['Series'],
  summary: 'Get attachment',
  description: 'Get the (binary) content of one attachment associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameInfoRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/info',
  tags: ['Series'],
  summary: 'Get info about the attachment',
  description: 'Get all the information about the attachment associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the information about the attachment',
              example: {
                CompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                CompressedSize: 526970,
                ContentType: 1,
                UncompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                UncompressedSize: 526970,
                Uuid: 'b7c99eb7-229f-464e-8f46-6878c8e79e5c',
              },
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameIsCompressedRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/is-compressed',
  tags: ['Series'],
  summary: 'Is attachment compressed?',
  description: 'Test whether the attachment has been stored as a compressed file on the disk.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                '`0` if the attachment was stored uncompressed, `1` if it was compressed',
            }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameMd5Route = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/md5',
  tags: ['Series'],
  summary: 'Get MD5 of attachment',
  description: 'Get the MD5 hash of one attachment associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The MD5 of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSeriesIdAttachmentsNameSizeRoute = createRoute({
  method: 'get',
  path: '/series/{id}/attachments/{name}/size',
  tags: ['Series'],
  summary: 'Get size of attachment',
  description: 'Get the size of one attachment associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The size of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postSeriesIdAttachmentsNameUncompressRoute = createRoute({
  method: 'post',
  path: '/series/{id}/attachments/{name}/uncompress',
  tags: ['Series'],
  summary: 'Uncompress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postSeriesIdAttachmentsNameVerifyMd5Route = createRoute({
  method: 'post',
  path: '/series/{id}/attachments/{name}/verify-md5',
  tags: ['Series'],
  summary: 'Verify attachment',
  description: 'Verify that the attachment is not corrupted, by validating its MD5 hash',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'On success, a valid JSON object is returned' }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdInstancesRoute = createRoute({
  method: 'get',
  path: '/series/{id}/instances',
  tags: ['Series'],
  summary: 'Get child instances',
  description:
    'Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM instances',
              example: [
                {
                  FileSize: 368852,
                  FileUuid: '9016272a-ee8c-41b2-afc6-dcfe06dd3be8',
                  ID: '6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f',
                  IndexInSeries: 1,
                  MainDicomTags: {
                    ImagePositionPatient: '0\\-159\\-425.915649',
                    InstanceCreationDate: '20050927',
                    InstanceCreationTime: '155030.000000',
                    InstanceNumber: '1',
                    SOPInstanceUID: '1.2.840.113704.7.1.1.6632.1127829031.2',
                  },
                  '{...}': '...',
                },
              ],
            }),
        },
      },
    },
  },
})

export const getSeriesIdInstancesTagsRoute = createRoute({
  method: 'get',
  path: '/series/{id}/instances-tags',
  tags: ['Series'],
  summary: 'Get tags of instances',
  description:
    'Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON object associating the Orthanc identifiers of the instances, with the values of their DICOM tags',
              example: {
                '6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\LOCALIZER\\ES',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20050927' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '155030.000000',
                  },
                  '0008,0016': {
                    Name: 'SOPClassUID',
                    Type: 'String',
                    Value: '1.2.840.10008.5.1.4.1.1.2',
                  },
                  '{...}': '...',
                },
              },
            }),
        },
      },
    },
  },
})

export const getSeriesIdMediaRoute = createRoute({
  method: 'get',
  path: '/series/{id}/media',
  tags: ['Series'],
  summary: 'Create DICOMDIR media',
  description:
    'Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      extended: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*',
            in: 'query',
            name: 'extended',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postSeriesIdMediaRoute = createRoute({
  method: 'post',
  path: '/series/{id}/media',
  tags: ['Series'],
  summary: 'Create DICOMDIR media',
  description:
    'Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Extended: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdMetadataRoute = createRoute({
  method: 'get',
  path: '/series/{id}/metadata',
  tags: ['Series'],
  summary: 'List metadata',
  description: 'Get the list of metadata that are associated with the given series',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, also retrieve the value of the individual metadata',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing the names of the available metadata, or JSON associative array mapping metadata to their values (if `expand` argument is provided)',
              example: ['LastUpdate'],
            }),
        },
      },
    },
  },
})

export const getSeriesIdMetadataNameRoute = createRoute({
  method: 'get',
  path: '/series/{id}/metadata/{name}',
  tags: ['Series'],
  summary: 'Get metadata',
  description: 'Get the value of a metadata that is associated with the given series',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Value of the metadata' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putSeriesIdMetadataNameRoute = createRoute({
  method: 'put',
  path: '/series/{id}/metadata/{name}',
  tags: ['Series'],
  summary: 'Set metadata',
  description:
    'Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, if this is not the first time this metadata is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'String value of the metadata' }) },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteSeriesIdMetadataNameRoute = createRoute({
  method: 'delete',
  path: '/series/{id}/metadata/{name}',
  tags: ['Series'],
  summary: 'Delete metadata',
  description:
    'Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postSeriesIdModifyRoute = createRoute({
  method: 'post',
  path: '/series/{id}/modify',
  tags: ['Series'],
  summary: 'Modify series',
  description:
    'Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              RemovePrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Remove the private tags from the DICOM instances (defaults to `false`)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdModuleRoute = createRoute({
  method: 'get',
  path: '/series/{id}/module',
  tags: ['Series'],
  summary: 'Get series module',
  description:
    'Get the series module of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM series',
              example: {
                '0008,0060': { Name: 'Modality', Type: 'String', Value: 'CT' },
                '0008,1111': {
                  Name: 'ReferencedPerformedProcedureStepSequence',
                  Type: 'Sequence',
                  Value: [
                    {
                      '0008,1150': {
                        Name: 'ReferencedSOPClassUID',
                        Type: 'String',
                        Value: '1.2.840.10008.3.1.2.3.3',
                      },
                      '0008,1155': {
                        Name: 'ReferencedSOPInstanceUID',
                        Type: 'String',
                        Value: '1.2.840.113704.1.111.4496.1127828841.54',
                      },
                    },
                  ],
                },
                '0018,1030': { Name: 'ProtocolName', Type: 'String', Value: 'COU 2 mm/Neck/Sv' },
                '0018,5100': { Name: 'PatientPosition', Type: 'String', Value: 'HFS' },
                '0020,000e': {
                  Name: 'SeriesInstanceUID',
                  Type: 'String',
                  Value: '1.2.840.113704.1.111.5692.1127828999.2',
                },
                '0020,0011': { Name: 'SeriesNumber', Type: 'String', Value: '2276' },
                '0040,0253': {
                  Name: 'PerformedProcedureStepID',
                  Type: 'String',
                  Value: 'A10011234815',
                },
                '0040,0254': {
                  Name: 'PerformedProcedureStepDescription',
                  Type: 'String',
                  Value: 'CT2 tête, face, sinus',
                },
                '0040,0260': {
                  Name: 'PerformedProtocolCodeSequence',
                  Type: 'Sequence',
                  Value: [
                    {
                      '0008,0100': { Name: 'CodeValue', Type: 'String', Value: 'CTTETE' },
                      '0008,0102': {
                        Name: 'CodingSchemeDesignator',
                        Type: 'String',
                        Value: 'XPLORE',
                      },
                      '0008,0104': {
                        Name: 'CodeMeaning',
                        Type: 'String',
                        Value: 'CT2 tête, face, sinus',
                      },
                    },
                  ],
                },
                '0040,0275': {
                  Name: 'RequestAttributesSequence',
                  Type: 'Sequence',
                  Value: [
                    {
                      '0040,0007': {
                        Name: 'ScheduledProcedureStepDescription',
                        Type: 'String',
                        Value: 'CT2 tête, face, sinus',
                      },
                      '0040,0008': {
                        Name: 'ScheduledProtocolCodeSequence',
                        Type: 'Sequence',
                        Value: [
                          {
                            '0008,0100': { Name: 'CodeValue', Type: 'String', Value: 'CTTETE' },
                            '0008,0102': {
                              Name: 'CodingSchemeDesignator',
                              Type: 'String',
                              Value: 'XPLORE',
                            },
                            '0008,0104': {
                              Name: 'CodeMeaning',
                              Type: 'String',
                              Value: 'CT2 TÊTE, FACE, SINUS',
                            },
                          },
                        ],
                      },
                      '0040,0009': {
                        Name: 'ScheduledProcedureStepID',
                        Type: 'String',
                        Value: 'A10011234815',
                      },
                      '0040,1001': {
                        Name: 'RequestedProcedureID',
                        Type: 'String',
                        Value: 'A10011234814',
                      },
                    },
                  ],
                },
              },
            }),
        },
      },
    },
  },
})

export const getSeriesIdNumpyRoute = createRoute({
  method: 'get',
  path: '/series/{id}/numpy',
  tags: ['Series'],
  summary: 'Decode series for numpy',
  description:
    'Decode the given DICOM series, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).',
  request: {
    query: z.object({
      compress: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compress the file as `.npz`',
            in: 'query',
            name: 'compress',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      rescale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'On grayscale images, apply the rescaling and return floating-point values',
            in: 'query',
            name: 'rescale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the DICOM resource of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'Numpy file: https://numpy.org/devdocs/reference/generated/numpy.lib.format.html',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getSeriesIdOrderedSlicesRoute = createRoute({
  method: 'get',
  path: '/series/{id}/ordered-slices',
  tags: ['Series'],
  summary: 'Order the slices',
  description:
    'Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              Dicom: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Ordered list of paths to DICOM instances' }),
              Slices: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Ordered list of paths to frames. It is recommended to use this field, as it is also valid in the case of multiframe images.',
                }),
              SlicesShort: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description: 'Same information as the `Slices` field, but in a compact form',
                }),
              Type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Can be `Volume` (for 3D volumes) or `Sequence` (notably for cine images)',
                }),
            })
            .openapi({
              description: '',
              example: {
                Dicom: [
                  '/instances/fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531/file',
                  '/instances/f5701efb-98170697-404d15f6-59baf69e-4e8ddfae/file',
                  '/instances/3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed/file',
                  '/instances/6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30/file',
                  '/instances/99264275-213c3190-73251bdc-97ccfdb4-1f9656d9/file',
                  '/instances/40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c/file',
                  '/instances/08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e/file',
                  '/instances/6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc/file',
                  '/instances/3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8/file',
                  '/instances/9058e01a-31a7d982-1691e575-a8607d94-29a9aaca/file',
                  '...',
                ],
                Slices: [
                  '/instances/fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531/frames/0',
                  '/instances/f5701efb-98170697-404d15f6-59baf69e-4e8ddfae/frames/0',
                  '/instances/3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed/frames/0',
                  '/instances/6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30/frames/0',
                  '/instances/99264275-213c3190-73251bdc-97ccfdb4-1f9656d9/frames/0',
                  '/instances/40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c/frames/0',
                  '/instances/08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e/frames/0',
                  '/instances/6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc/frames/0',
                  '/instances/3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8/frames/0',
                  '/instances/9058e01a-31a7d982-1691e575-a8607d94-29a9aaca/frames/0',
                  '...',
                ],
                SlicesShort: [
                  ['fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531', 0, 1],
                  ['f5701efb-98170697-404d15f6-59baf69e-4e8ddfae', 0, 1],
                  ['3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed', 0, 1],
                  ['6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30', 0, 1],
                  ['99264275-213c3190-73251bdc-97ccfdb4-1f9656d9', 0, 1],
                  ['40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c', 0, 1],
                  ['08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e', 0, 1],
                  ['6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc', 0, 1],
                  ['3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8', 0, 1],
                  ['9058e01a-31a7d982-1691e575-a8607d94-29a9aaca', 0, 1],
                  '...',
                ],
                Type: 'Volume',
              },
              required: [],
            }),
        },
      },
    },
  },
  deprecated: true,
})

export const getSeriesIdPatientRoute = createRoute({
  method: 'get',
  path: '/series/{id}/patient',
  tags: ['Series'],
  summary: 'Get parent patient',
  description:
    'Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM patient',
              example: {
                ID: '2f74083e-9b042648-10edac14-b26950f8-f82ec3a0',
                IsStable: true,
                LastUpdate: '20180414T091601',
                MainDicomTags: {
                  PatientBirthDate: '19910101',
                  PatientID: 'Vafk,T,6',
                  PatientName: 'PHENIX',
                  PatientSex: '',
                },
                Studies: ['49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a'],
                Type: 'Patient',
              },
            }),
        },
      },
    },
  },
})

export const postSeriesIdReconstructRoute = createRoute({
  method: 'post',
  path: '/series/{id}/reconstruct',
  tags: ['Series'],
  summary: 'Reconstruct tags & optionally files of series',
  description:
    'Reconstruct the main DICOM tags in DB of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
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
              ReconstructFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getSeriesIdSharedTagsRoute = createRoute({
  method: 'get',
  path: '/series/{id}/shared-tags',
  tags: ['Series'],
  summary: 'Get shared tags',
  description:
    'Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the values of the DICOM tags',
              example: {
                '0008,0005': { Name: 'SpecificCharacterSet', Type: 'String', Value: 'ISO_IR 100' },
                '0008,0008': {
                  Name: 'ImageType',
                  Type: 'String',
                  Value: 'ORIGINAL\\PRIMARY\\LOCALIZER\\ES',
                },
                '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20050927' },
                '0008,0013': {
                  Name: 'InstanceCreationTime',
                  Type: 'String',
                  Value: '155030.000000',
                },
                '0008,0016': {
                  Name: 'SOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.2',
                },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getSeriesIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/series/{id}/statistics',
  tags: ['Series'],
  summary: 'Get series statistics',
  description: 'Get statistics about the given series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CountInstances: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child instances within this series' }),
              DicomDiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the series, expressed in bytes',
                }),
              DicomDiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the series, expressed in megabytes (MB)',
                }),
              DicomUncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the series, expressed in bytes',
                }),
              DicomUncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the series, expressed in megabytes (MB)',
                }),
              DiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the series on the disk in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              DiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Size of the series on the disk, expressed in megabytes (MB)',
                }),
              UncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the series after decompression in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              UncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the series after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.',
                }),
            })
            .openapi({
              description: '',
              example: {
                CountInstances: 1,
                DicomDiskSize: '368852',
                DicomDiskSizeMB: 0,
                DicomUncompressedSize: '368852',
                DicomUncompressedSizeMB: 0,
                DiskSize: '381000',
                DiskSizeMB: 0,
                UncompressedSize: '381000',
                UncompressedSizeMB: 0,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getSeriesIdStudyRoute = createRoute({
  method: 'get',
  path: '/series/{id}/study',
  tags: ['Series'],
  summary: 'Get parent study',
  description:
    'Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the series of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM study',
              example: {
                ID: '49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a',
                IsStable: true,
                LastUpdate: '20180414T091601',
                MainDicomTags: {
                  AccessionNumber: 'A10011234814',
                  InstitutionName: 'HUG',
                  ReferringPhysicianName: 'CHIR-PED^CHIR-PE',
                  RequestedProcedureDescription: 'CT2 TÊTE, FACE, SINUS',
                  RequestingPhysician: 'KOHLER^Romain',
                  StudyDate: '20050927',
                  StudyDescription: 'CT2 tête, face, sinus',
                  StudyID: '1361',
                  StudyInstanceUID: '2.16.840.1.113669.632.20.1211.10000098591',
                  StudyTime: '154952.000000',
                },
                ParentPatient: '2f74083e-9b042648-10edac14-b26950f8-f82ec3a0',
                PatientMainDicomTags: {
                  PatientBirthDate: '19910101',
                  PatientID: 'Vafk,T,6',
                  PatientName: 'PHENIX',
                  PatientSex: '',
                },
                Series: [
                  '37836232-d13a2350-fa1dedc5-962b31aa-010f8e52',
                  '7696013f-4c89c563-2b071693-5d1f97f6-f8ab232d',
                  '17cc7e52-4f1a3e4d-9182f727-56e9cc71-c037892f',
                ],
                Type: 'Study',
              },
            }),
        },
      },
    },
  },
})

export const getStatisticsRoute = createRoute({
  method: 'get',
  path: '/statistics',
  tags: ['System'],
  summary: 'Get database statistics',
  description: 'Get statistics related to the database of Orthanc',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CountInstances: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of DICOM instances stored in Orthanc' }),
              CountPatients: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of patients stored in Orthanc' }),
              CountSeries: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of DICOM series stored in Orthanc' }),
              CountStudies: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of DICOM studies stored in Orthanc' }),
              TotalDiskSize: z
                .string()
                .exactOptional()
                .openapi({ description: 'Size of the storage area (in bytes)' }),
              TotalDiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({ description: 'Size of the storage area (in megabytes)' }),
              TotalUncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Total size of all the files once uncompressed (in bytes). This corresponds to `TotalDiskSize` if no compression is enabled, cf. `StorageCompression` configuration option',
                }),
              TotalUncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Total size of all the files once uncompressed (in megabytes)',
                }),
            })
            .openapi({
              description: '',
              example: {
                CountInstances: 2552,
                CountPatients: 8,
                CountSeries: 26,
                CountStudies: 8,
                TotalDiskSize: '1068132148',
                TotalDiskSizeMB: 1018,
                TotalUncompressedSize: '1068132148',
                TotalUncompressedSizeMB: 1018,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getStorageCommitmentIdRoute = createRoute({
  method: 'get',
  path: '/storage-commitment/{id}',
  tags: ['Networking'],
  summary: 'Get storage commitment report',
  description:
    'Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the storage commitment report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              Failures: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'List of failures that have been encountered during the storage commitment request',
                }),
              RemoteAET: z
                .string()
                .exactOptional()
                .openapi({ description: 'AET of the remote DICOM modality' }),
              Status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Can be `Success`, `Failure`, or `Pending` (the latter means that no report has been received yet)',
                }),
              Success: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM instances that have been acknowledged by the remote modality, each one is reported as a JSON object containing the `SOPClassUID` and `SOPInstanceUID` DICOM tags',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postStorageCommitmentIdRemoveRoute = createRoute({
  method: 'post',
  path: '/storage-commitment/{id}/remove',
  tags: ['Networking'],
  summary: 'Remove after storage commitment',
  description:
    'Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the storage commitment report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getStudiesRoute = createRoute({
  method: 'get',
  path: '/studies',
  tags: ['Studies'],
  summary: 'List the available studies',
  description: 'List the Orthanc identifiers of all the available DICOM studies',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve detailed information about the individual studies',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
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
            description: 'Limit the number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only the resources since the provided index',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the Orthanc identifiers, or detailed information about the reported studies (if `expand` argument is provided)',
              example: [
                '6c65289b-db2fcb71-7eaf73f4-8e12470c-a4d6d7cf',
                '6b9e19d9-62094390-5f9ddb01-4a191ae7-9766b715',
              ],
            }),
        },
      },
    },
  },
})

export const getStudiesIdRoute = createRoute({
  method: 'get',
  path: '/studies/{id}',
  tags: ['Studies'],
  summary: 'Get information about some study',
  description:
    'Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM study',
              example: {
                ID: '27f7126f-4f66fb14-03f4081b-f9341db2-53925988',
                IsStable: true,
                LastUpdate: '20180414T091532',
                MainDicomTags: {
                  AccessionNumber: '0',
                  InstitutionName: '7GEFF0GbzqCNo43Yd0,Ibu,zQSSX',
                  ReferringPhysicianName: 'dAEvNTxZJO0E',
                  RequestedProcedureDescription: 'IRM cérébrale, neuro-crâne',
                  StudyDate: '20061201',
                  StudyDescription: 'IRM cérébrale, neuro-crâne',
                  StudyID: '218211405',
                  StudyInstanceUID: '2.16.840.1.113669.632.20.1211.10000357775',
                  StudyTime: '141645.000000',
                },
                ParentPatient: '16738bc3-e47ed42a-43ce044c-a3414a45-cb069bd0',
                PatientMainDicomTags: {
                  PatientBirthDate: '19490301',
                  PatientID: '5Yp0E',
                  PatientName: 'BRAINIX',
                  PatientSex: '0000',
                },
                Series: [
                  '635faa23-fd8378ee-d03bce29-ee47c2fb-a65c5509',
                  'dc0216d2-a406a5ad-31ef7a78-113ae9d9-29939f9e',
                  '1e2c125c-411b8e86-3f4fe68e-a7584dd3-c6da78f0',
                  '4baa97c7-d53d3d82-a5eb9403-17ef5a77-4e0efb55',
                  '2ac1316d-3e432022-62eabff2-c59f5475-9b1ac3f8',
                  'ae164c84-e5bd0366-ba937a6d-65414092-f294d6b6',
                  '3ca69615-fcd4a4fb-e5f2cc9d-9c7a49a5-add98bbf',
                ],
                Type: 'Study',
              },
            }),
        },
      },
    },
  },
})

export const deleteStudiesIdRoute = createRoute({
  method: 'delete',
  path: '/studies/{id}',
  tags: ['Studies'],
  summary: 'Delete some study',
  description: 'Delete the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postStudiesIdAnonymizeRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/anonymize',
  tags: ['Studies'],
  summary: 'Anonymize study',
  description:
    'Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              DicomVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              KeepPrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Keep the private tags from the DICOM instances (defaults to `false`)',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdArchiveRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/archive',
  tags: ['Studies'],
  summary: 'Create ZIP archive',
  description:
    'Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postStudiesIdArchiveRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/archive',
  tags: ['Studies'],
  summary: 'Create ZIP archive',
  description:
    'Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments',
  tags: ['Studies'],
  summary: 'List attachments',
  description: 'Get the list of attachments that are associated with the given study',
  request: {
    query: z.object({
      full: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, retrieve the attachments list and their numerical ids',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the names of the attachments',
              example: [],
            }),
        },
      },
    },
  },
})

export const getStudiesIdAttachmentsNameRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}',
  tags: ['Other'],
  summary: 'List operations on attachments',
  description:
    'Get the list of the operations that are available for attachments associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'compress',
                'compressed-data',
                'compressed-md5',
                'compressed-size',
                'data',
                'info',
                'is-compressed',
                'md5',
                'size',
                'uncompress',
                'verify-md5',
                'uuid',
              ],
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putStudiesIdAttachmentsNameRoute = createRoute({
  method: 'put',
  path: '/studies/{id}/attachments/{name}',
  tags: ['Studies'],
  summary: 'Set attachment',
  description:
    'Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, if this is not the first time this attachment is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'Binary data containing the attachment' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Empty JSON object in the case of a success' }),
          examples: {},
        },
      },
    },
  },
})

export const deleteStudiesIdAttachmentsNameRoute = createRoute({
  method: 'delete',
  path: '/studies/{id}/attachments/{name}',
  tags: ['Studies'],
  summary: 'Delete attachment',
  description:
    'Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postStudiesIdAttachmentsNameCompressRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/attachments/{name}/compress',
  tags: ['Studies'],
  summary: 'Compress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getStudiesIdAttachmentsNameCompressedDataRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/compressed-data',
  tags: ['Studies'],
  summary: 'Get attachment (no decompression)',
  description:
    'Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameCompressedMd5Route = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/compressed-md5',
  tags: ['Studies'],
  summary: 'Get MD5 of attachment on disk',
  description:
    'Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The MD5 of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameCompressedSizeRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/compressed-size',
  tags: ['Studies'],
  summary: 'Get size of attachment on disk',
  description:
    'Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'The size of the attachment, as stored on the disk' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameDataRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/data',
  tags: ['Studies'],
  summary: 'Get attachment',
  description: 'Get the (binary) content of one attachment associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.any().openapi({ description: 'The attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameInfoRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/info',
  tags: ['Studies'],
  summary: 'Get info about the attachment',
  description: 'Get all the information about the attachment associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the information about the attachment',
              example: {
                CompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                CompressedSize: 526970,
                ContentType: 1,
                UncompressedMD5: '26f3fad6ca0c355f02d57c7fa6770248',
                UncompressedSize: 526970,
                Uuid: 'b7c99eb7-229f-464e-8f46-6878c8e79e5c',
              },
            }),
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameIsCompressedRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/is-compressed',
  tags: ['Studies'],
  summary: 'Is attachment compressed?',
  description: 'Test whether the attachment has been stored as a compressed file on the disk.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                '`0` if the attachment was stored uncompressed, `1` if it was compressed',
            }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameMd5Route = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/md5',
  tags: ['Studies'],
  summary: 'Get MD5 of attachment',
  description: 'Get the MD5 hash of one attachment associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The MD5 of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getStudiesIdAttachmentsNameSizeRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/attachments/{name}/size',
  tags: ['Studies'],
  summary: 'Get size of attachment',
  description: 'Get the size of one attachment associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the attachment, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The size of the attachment' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the attachment, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postStudiesIdAttachmentsNameUncompressRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/attachments/{name}/uncompress',
  tags: ['Studies'],
  summary: 'Uncompress attachment',
  description: 'Change the compression scheme that is used to store an attachment.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postStudiesIdAttachmentsNameVerifyMd5Route = createRoute({
  method: 'post',
  path: '/studies/{id}/attachments/{name}/verify-md5',
  tags: ['Studies'],
  summary: 'Verify attachment',
  description: 'Verify that the attachment is not corrupted, by validating its MD5 hash',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the attachment, or its index (cf. `UserContentType` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'On success, a valid JSON object is returned' }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdInstancesRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/instances',
  tags: ['Studies'],
  summary: 'Get child instances',
  description:
    'Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM instances',
              example: [
                {
                  FileSize: 527858,
                  FileUuid: '42607af0-e2ca-402a-9cb4-8819a0485dbd',
                  ID: '82cc1a6b-7b05d34e-cd74474b-594f0d43-94f609d8',
                  IndexInSeries: 3,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-118.20798927708\\-118.00763136239\\71.7517339810729',
                    InstanceCreationDate: '20061201',
                    InstanceCreationTime: '145313.000000',
                    InstanceNumber: '3',
                    '{...}': '...',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 527858,
                  FileUuid: 'f986a0de-cf3b-4acc-a2ca-ce6a5844ec63',
                  ID: '2fbd6d5f-802f6561-b9d8da32-c54ead16-18a208bd',
                  IndexInSeries: 13,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-116.77244740887\\-113.68593889565\\11.9247972592711',
                    InstanceCreationDate: '20061201',
                    InstanceCreationTime: '145313.000000',
                    InstanceNumber: '13',
                    '{...}': '...',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 527858,
                  FileUuid: '64cc6dae-228d-4e60-82ea-34c540a09cfb',
                  ID: '4dbca7c1-f6e1a582-b3196370-0151cac8-19caac8e',
                  IndexInSeries: 17,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-116.19823080464\\-111.95726186127\\-12.005976177752',
                    InstanceCreationDate: '20061201',
                    InstanceCreationTime: '145313.000000',
                    InstanceNumber: '17',
                    '{...}': '...',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 527858,
                  FileUuid: '06823b17-6217-4534-b318-4de5c9157c74',
                  ID: '98c6f0c7-e6f9812b-d0a9df8a-97eeaa41-fa891d8e',
                  IndexInSeries: 6,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-117.77732664509\\-116.71112352700\\53.8036520108580',
                    InstanceCreationDate: '20061201',
                    InstanceCreationTime: '145313.000000',
                    InstanceNumber: '6',
                    '{...}': '...',
                  },
                  '{...}': '...',
                },
                {
                  FileSize: 527858,
                  FileUuid: '7012f4ad-e1f7-49a8-95e0-5050227b4090',
                  ID: 'c25f4e48-8f7d737e-3dbeafb5-f1563a30-eddf816c',
                  IndexInSeries: 20,
                  MainDicomTags: {
                    AcquisitionNumber: '3',
                    ImagePositionPatient: '-115.76756829186\\-110.66075450272\\-29.954057492315',
                    InstanceCreationDate: '20061201',
                    InstanceCreationTime: '145313.000000',
                    InstanceNumber: '20',
                    '{...}': '...',
                  },
                  '{...}': '...',
                },
                '...',
              ],
            }),
        },
      },
    },
  },
})

export const getStudiesIdInstancesTagsRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/instances-tags',
  tags: ['Studies'],
  summary: 'Get tags of instances',
  description:
    'Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON object associating the Orthanc identifiers of the instances, with the values of their DICOM tags',
              example: {
                '00330d0f-911e5e8d-1e305bae-e5c53b73-d2a49298': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\M_SE\\M\\SE',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '145331.000000',
                  },
                  '0008,0014': {
                    Name: 'InstanceCreatorUID',
                    Type: 'String',
                    Value: '1.3.46.670589.11.8743.5',
                  },
                  '{...}': '...',
                },
                '00402ce7-ac05c687-4d0839bc-cecd4fad-3d1b7eed': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '145326.000000',
                  },
                  '0008,0014': {
                    Name: 'InstanceCreatorUID',
                    Type: 'String',
                    Value: '1.3.46.670589.11.8743.5',
                  },
                  '{...}': '...',
                },
                '00ffd506-6460663a-cda9bddc-a0090c47-145ba829': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '145346.000000',
                  },
                  '0008,0014': {
                    Name: 'InstanceCreatorUID',
                    Type: 'String',
                    Value: '1.3.46.670589.11.8743.5',
                  },
                  '{...}': '...',
                },
                '01a6ffdc-335f82a7-c79360c2-2e6bbc35-d24ca33d': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\M_SE\\M\\SE',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '145313.000000',
                  },
                  '0008,0014': {
                    Name: 'InstanceCreatorUID',
                    Type: 'String',
                    Value: '1.3.46.670589.11.8743.5',
                  },
                  '{...}': '...',
                },
                '0577c66f-25d7cc30-bb763c60-53bb7ba0-72c8b018': {
                  '0008,0005': {
                    Name: 'SpecificCharacterSet',
                    Type: 'String',
                    Value: 'ISO_IR 100',
                  },
                  '0008,0008': {
                    Name: 'ImageType',
                    Type: 'String',
                    Value: 'ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE',
                  },
                  '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                  '0008,0013': {
                    Name: 'InstanceCreationTime',
                    Type: 'String',
                    Value: '145346.000000',
                  },
                  '0008,0014': {
                    Name: 'InstanceCreatorUID',
                    Type: 'String',
                    Value: '1.3.46.670589.11.8743.5',
                  },
                  '{...}': '...',
                },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const getStudiesIdMediaRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/media',
  tags: ['Studies'],
  summary: 'Create DICOMDIR media',
  description:
    'Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.',
  request: {
    query: z.object({
      extended: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*',
            in: 'query',
            name: 'extended',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filename to set in the "Content-Disposition" HTTP header (including file extension)',
            in: 'query',
            name: 'filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
            in: 'query',
            name: 'transcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/zip': {
          schema: z.any().openapi({ description: 'ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postStudiesIdMediaRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/media',
  tags: ['Studies'],
  summary: 'Create DICOMDIR media',
  description:
    'Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Extended: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postStudiesIdMergeRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/merge',
  tags: ['Studies'],
  summary: 'Merge study',
  description:
    'Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, instructs Orthanc to keep a copy of the original resources in their source study. By default, the original resources are deleted from Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The list of DICOM resources (studies, series, and/or instances) to be merged into the study of interest (mandatory option)',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdMetadataRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/metadata',
  tags: ['Studies'],
  summary: 'List metadata',
  description: 'Get the list of metadata that are associated with the given study',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, also retrieve the value of the individual metadata',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing the names of the available metadata, or JSON associative array mapping metadata to their values (if `expand` argument is provided)',
              example: ['LastUpdate'],
            }),
        },
      },
    },
  },
})

export const getStudiesIdMetadataNameRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/metadata/{name}',
  tags: ['Studies'],
  summary: 'Get metadata',
  description: 'Get the value of a metadata that is associated with the given study',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional revision of the metadata, to check if its content has changed',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Value of the metadata' }),
          examples: {},
        },
      },
      headers: z.object({
        ETag: {
          description:
            'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Revision of the metadata, to be used in further `PUT` or `DELETE` operations',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putStudiesIdMetadataNameRoute = createRoute({
  method: 'put',
  path: '/studies/{id}/metadata/{name}',
  tags: ['Studies'],
  summary: 'Set metadata',
  description:
    'Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, if this is not the first time this metadata is set.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'String value of the metadata' }) },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteStudiesIdMetadataNameRoute = createRoute({
  method: 'delete',
  path: '/studies/{id}/metadata/{name}',
  tags: ['Studies'],
  summary: 'Delete metadata',
  description:
    'Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.',
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the metadata, or its index (cf. `UserMetadata` configuration option)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postStudiesIdModifyRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/modify',
  tags: ['Studies'],
  summary: 'Modify study',
  description:
    'Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              RemovePrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Remove the private tags from the DICOM instances (defaults to `false`)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdModuleRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/module',
  tags: ['Studies'],
  summary: 'Get study module',
  description:
    'Get the study module of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM study',
              example: {
                '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20061201' },
                '0008,0030': { Name: 'StudyTime', Type: 'String', Value: '141645.000000' },
                '0008,0050': { Name: 'AccessionNumber', Type: 'String', Value: '0' },
                '0008,0090': {
                  Name: 'ReferringPhysicianName',
                  Type: 'String',
                  Value: 'dAEvNTxZJO0E',
                },
                '0008,1030': {
                  Name: 'StudyDescription',
                  Type: 'String',
                  Value: 'IRM cérébrale, neuro-crâne',
                },
                '0008,1032': {
                  Name: 'ProcedureCodeSequence',
                  Type: 'Sequence',
                  Value: [
                    {
                      '0008,0100': { Name: 'CodeValue', Type: 'String', Value: 'IRMCEREB' },
                      '0008,0102': {
                        Name: 'CodingSchemeDesignator',
                        Type: 'String',
                        Value: 'XPLORE',
                      },
                      '0008,0104': {
                        Name: 'CodeMeaning',
                        Type: 'String',
                        Value: 'IRM cérébrale, neuro-crâne',
                      },
                      '0008,010b': {
                        Name: 'ContextGroupExtensionFlag',
                        Type: 'String',
                        Value: 'N',
                      },
                    },
                  ],
                },
                '0008,1110': {
                  Name: 'ReferencedStudySequence',
                  Type: 'Sequence',
                  Value: [
                    {
                      '0008,1150': {
                        Name: 'ReferencedSOPClassUID',
                        Type: 'String',
                        Value: '1.2.840.10008.3.1.2.3.1',
                      },
                      '0008,1155': {
                        Name: 'ReferencedSOPInstanceUID',
                        Type: 'String',
                        Value: '2.16.840.1.113669.632.20.1211.10000357775',
                      },
                    },
                  ],
                },
                '0020,000d': {
                  Name: 'StudyInstanceUID',
                  Type: 'String',
                  Value: '2.16.840.1.113669.632.20.1211.10000357775',
                },
                '0020,0010': { Name: 'StudyID', Type: 'String', Value: '218211405' },
              },
            }),
        },
      },
    },
  },
})

export const getStudiesIdModulePatientRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/module-patient',
  tags: ['Studies'],
  summary: 'Get patient module of study',
  description:
    'Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      'ignore-length': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Also include the DICOM tags that are provided in this list, even if their associated value is long',
            in: 'query',
            name: 'ignore-length',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the DICOM study',
              example: {
                '0010,0010': { Name: 'PatientName', Type: 'String', Value: 'BRAINIX' },
                '0010,0020': { Name: 'PatientID', Type: 'String', Value: '5Yp0E' },
                '0010,0030': { Name: 'PatientBirthDate', Type: 'String', Value: '19490301' },
                '0010,0040': { Name: 'PatientSex', Type: 'String', Value: '0000' },
              },
            }),
        },
      },
    },
  },
})

export const getStudiesIdPatientRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/patient',
  tags: ['Studies'],
  summary: 'Get parent patient',
  description:
    'Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'Information about the parent DICOM patient',
              example: {
                ID: '16738bc3-e47ed42a-43ce044c-a3414a45-cb069bd0',
                IsStable: true,
                LastUpdate: '20180414T091532',
                MainDicomTags: {
                  PatientBirthDate: '19490301',
                  PatientID: '5Yp0E',
                  PatientName: 'BRAINIX',
                  PatientSex: '0000',
                },
                Studies: ['27f7126f-4f66fb14-03f4081b-f9341db2-53925988'],
                Type: 'Patient',
              },
            }),
        },
      },
    },
  },
})

export const postStudiesIdReconstructRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/reconstruct',
  tags: ['Studies'],
  summary: 'Reconstruct tags & optionally files of study',
  description:
    'Reconstruct the main DICOM tags in DB of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              ReconstructFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getStudiesIdSeriesRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/series',
  tags: ['Studies'],
  summary: 'Get child series',
  description:
    'Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
            in: 'query',
            name: 'full',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      requestedTags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
            in: 'query',
            name: 'requestedTags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing information about the child DICOM series',
              example: [
                {
                  ExpectedNumberOfInstances: null,
                  ID: '635faa23-fd8378ee-d03bce29-ee47c2fb-a65c5509',
                  Instances: [
                    'ed8aacd6-5d2cfad4-9e1a2f77-edf1cee5-8f3bdde0',
                    '7a93b85e-5956dbf9-894c1f27-dc73112f-4cbcda70',
                    '065baa49-a7b4e4a0-e7468f1d-e9b5bca8-56316fa2',
                    'ca69bc1a-a4fcc0a8-9e6828b0-c816dbaa-240fdc45',
                    'edd8ff85-9805d97a-2375f736-40662993-aef40418',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091528',
                  '{...}': '...',
                },
                {
                  ExpectedNumberOfInstances: null,
                  ID: 'dc0216d2-a406a5ad-31ef7a78-113ae9d9-29939f9e',
                  Instances: [
                    '2cd73574-190bb147-0a86bcca-68c75104-d22f09dd',
                    'ff95b7c0-d14e3e42-d642eacd-281cb07c-4e0bbc8b',
                    '22384bf2-0bbe7bdb-013f6ff2-f7834e9f-3d8754bf',
                    '3e50a403-17c8ce10-6e0234e3-a8bed1bf-3dbc54ee',
                    '3db0ed84-61a28da4-72a52d5a-3f7daa77-b81ddf17',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091530',
                  '{...}': '...',
                },
                {
                  ExpectedNumberOfInstances: null,
                  ID: '1e2c125c-411b8e86-3f4fe68e-a7584dd3-c6da78f0',
                  Instances: [
                    '2db53a93-91179cd5-f2080c32-c9b156ec-b8f65fa7',
                    '9058e01a-31a7d982-1691e575-a8607d94-29a9aaca',
                    '40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c',
                    '144ca294-6e759cfb-e14e3404-e78a0a29-1dd3273c',
                    '3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091530',
                  '{...}': '...',
                },
                {
                  ExpectedNumberOfInstances: null,
                  ID: '4baa97c7-d53d3d82-a5eb9403-17ef5a77-4e0efb55',
                  Instances: [
                    '9b41ef96-b4031ffc-b1b7ea5d-8a38d55d-fe804601',
                    '8137542c-069dd229-d0226fba-f8c571cd-19c7b61a',
                    '985681e7-99cd2ce5-f7d79f12-27bfc29f-0e5a4d72',
                    'f0b9f0ab-110181f8-ce83a1a2-4d8eb2c9-0b682503',
                    'ef13019a-9edf339d-395d8632-558518bf-b82b1b21',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091531',
                  '{...}': '...',
                },
                {
                  ExpectedNumberOfInstances: null,
                  ID: '2ac1316d-3e432022-62eabff2-c59f5475-9b1ac3f8',
                  Instances: [
                    '61eeef27-cb5515a3-0860ab44-90125207-a56e6883',
                    '18bc4146-4bb09c43-e4080c80-19bfc186-6b3d7272',
                    '00402ce7-ac05c687-4d0839bc-cecd4fad-3d1b7eed',
                    'ea902bf2-6dc22ee9-e962333a-7ce2c27f-d684977e',
                    '8371936f-4141219a-ca7d69df-0d82697e-271eef91',
                    '...',
                  ],
                  IsStable: true,
                  LastUpdate: '20180414T091531',
                  '{...}': '...',
                },
                '...',
              ],
            }),
        },
      },
    },
  },
})

export const getStudiesIdSharedTagsRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/shared-tags',
  tags: ['Studies'],
  summary: 'Get shared tags',
  description:
    'Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL',
  request: {
    query: z.object({
      short: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, report the DICOM tags in hexadecimal format',
            in: 'query',
            name: 'short',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      simplify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)',
            in: 'query',
            name: 'simplify',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON object containing the values of the DICOM tags',
              example: {
                '0008,0005': { Name: 'SpecificCharacterSet', Type: 'String', Value: 'ISO_IR 100' },
                '0008,0012': { Name: 'InstanceCreationDate', Type: 'String', Value: '20061201' },
                '0008,0014': {
                  Name: 'InstanceCreatorUID',
                  Type: 'String',
                  Value: '1.3.46.670589.11.8743.5',
                },
                '0008,0016': {
                  Name: 'SOPClassUID',
                  Type: 'String',
                  Value: '1.2.840.10008.5.1.4.1.1.4',
                },
                '0008,0020': { Name: 'StudyDate', Type: 'String', Value: '20061201' },
                '{...}': '...',
              },
            }),
        },
      },
    },
  },
})

export const postStudiesIdSplitRoute = createRoute({
  method: 'post',
  path: '/studies/{id}/split',
  tags: ['Studies'],
  summary: 'Split study',
  description:
    'Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
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
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Instances: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The list of instances to be separated from the parent study. These instances must all be children of the same source study, that is specified in the URI.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, instructs Orthanc to keep a copy of the original series/instances in the source study. By default, the original series/instances are deleted from Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed in the new study (from the same modules as in the `Replace` option)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the new study. These tags must be part of the "Patient Module Attributes" or the "General Study Module Attributes", as specified by the DICOM 2011 standard in Tables C.7-1 and C.7-3.',
                }),
              Series: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The list of series to be separated from the parent study. These series must all be children of the same source study, that is specified in the URI.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const getStudiesIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/studies/{id}/statistics',
  tags: ['Studies'],
  summary: 'Get study statistics',
  description: 'Get statistics about the given study',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Orthanc identifier of the study of interest',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CountInstances: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child instances within this study' }),
              CountSeries: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of child series within this study' }),
              DicomDiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the study, expressed in bytes',
                }),
              DicomDiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the DICOM instances associated with the study, expressed in megabytes (MB)',
                }),
              DicomUncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the study, expressed in bytes',
                }),
              DicomUncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size on the disk of the uncompressed DICOM instances associated with the study, expressed in megabytes (MB)',
                }),
              DiskSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the study on the disk in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              DiskSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Size of the study on the disk, expressed in megabytes (MB)',
                }),
              UncompressedSize: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the study after decompression in bytes, expressed as a string for 64bit compatibility with JSON',
                }),
              UncompressedSizeMB: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Size of the study after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.',
                }),
            })
            .openapi({
              description: '',
              example: {
                CountInstances: 232,
                CountSeries: 7,
                DicomDiskSize: '68153234',
                DicomDiskSizeMB: 64,
                DicomUncompressedSize: '68153234',
                DicomUncompressedSizeMB: 64,
                DiskSize: '72203548',
                DiskSizeMB: 68,
                UncompressedSize: '72203548',
                UncompressedSizeMB: 68,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getSystemRoute = createRoute({
  method: 'get',
  path: '/system',
  tags: ['System'],
  summary: 'Get system information',
  description: 'Get system information about Orthanc',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ApiVersion: z
                .number()
                .exactOptional()
                .openapi({ description: 'Version of the REST API' }),
              CheckRevisions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether Orthanc handle revisions of metadata and attachments to deal with multiple writers (new in Orthanc 1.9.2)',
                }),
              DatabaseBackendPlugin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Information about the installed database index plugin (`null` if no such plugin is installed)',
                }),
              DatabaseServerIdentifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the server in the database (when running multiple Orthanc on the same DB)',
                }),
              DatabaseVersion: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the database: https://book.orthanc-server.com/developers/db-versioning.html',
                }),
              DicomAet: z
                .string()
                .exactOptional()
                .openapi({ description: 'The DICOM AET of Orthanc' }),
              DicomPort: z
                .number()
                .exactOptional()
                .openapi({ description: 'The port to the DICOM server of Orthanc' }),
              HttpPort: z
                .number()
                .exactOptional()
                .openapi({ description: 'The port to the HTTP server of Orthanc' }),
              IngestTranscoding: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Whether instances are transcoded when ingested into Orthanc (`` if no transcoding is performed) (new in Orthanc 1.11.0)',
                }),
              IsHttpServerSecure: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the REST API is properly secured (assuming no reverse proxy is in use): https://book.orthanc-server.com/faq/security.html#securing-the-http-server',
                }),
              MainDicomTags: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The list of MainDicomTags saved in DB for each resource level (new in Orthanc 1.11.0)',
                }),
              MaximumStorageMode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The configured MaximumStorageMode (new in Orthanc 1.11.3)',
                }),
              MaximumStorageSize: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The configured MaximumStorageSize in MB (new in Orthanc 1.11.3)',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the Orthanc server, cf. the `Name` configuration option',
                }),
              OverwriteInstances: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether instances are overwritten when re-ingested (new in Orthanc 1.11.0)',
                }),
              PluginsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether Orthanc was built with support for plugins' }),
              StorageAreaPlugin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Information about the installed storage area plugin (`null` if no such plugin is installed)',
                }),
              StorageCompression: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether storage compression is enabled (new in Orthanc 1.11.0)',
                }),
              Version: z.string().exactOptional().openapi({ description: 'Version of Orthanc' }),
            })
            .openapi({
              description: '',
              example: {
                ApiVersion: 16,
                CheckRevisions: false,
                DatabaseBackendPlugin: null,
                DatabaseVersion: 6,
                DicomAet: 'ORTHANC',
                DicomPort: 4242,
                HttpPort: 8042,
                IsHttpServerSecure: false,
                Name: 'Orthanc Demo',
                PluginsEnabled: true,
                StorageAreaPlugin: null,
                Version: '1.10.1',
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getToolsRoute = createRoute({
  method: 'get',
  path: '/tools',
  tags: ['Other'],
  summary: 'List operations',
  description: 'List the available operations under URI `/tools/`',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'List of the available operations',
              example: [
                'accepted-transfer-syntaxes',
                'bulk-anonymize',
                'bulk-content',
                'bulk-delete',
                'bulk-modify',
                'create-archive',
                'create-dicom',
                'create-media',
                'create-media-extended',
                'default-encoding',
                'dicom-conformance',
                'dicom-echo',
                'execute-script',
                'find',
                'generate-uid',
                'invalidate-tags',
                'log-level',
                'log-level-dicom',
                'log-level-generic',
                'log-level-http',
                'log-level-jobs',
                'log-level-lua',
                'log-level-plugins',
                'log-level-sqlite',
                'lookup',
                'metrics',
                'metrics-prometheus',
                'now',
                'now-local',
                'reconstruct',
                'reset',
                'shutdown',
                'unknown-sop-class-accepted',
              ],
            }),
        },
      },
    },
  },
})

export const getToolsAcceptedTransferSyntaxesRoute = createRoute({
  method: 'get',
  path: '/tools/accepted-transfer-syntaxes',
  tags: ['System'],
  summary: 'Get accepted transfer syntaxes',
  description:
    'Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({ description: 'JSON array containing the transfer syntax UIDs' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsAcceptedTransferSyntaxesRoute = createRoute({
  method: 'put',
  path: '/tools/accepted-transfer-syntaxes',
  tags: ['System'],
  summary: 'Set accepted transfer syntaxes',
  description: 'Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing a list of transfer syntax UIDs to be accepted. Wildcards `?` and `*` are accepted.',
            }),
        },
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'UID of the transfer syntax to be accepted. Wildcards `?` and `*` are accepted.',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'JSON array containing the now-accepted transfer syntax UIDs',
            }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsBulkAnonymizeRoute = createRoute({
  method: 'post',
  path: '/tools/bulk-anonymize',
  tags: ['System'],
  summary: 'Anonymize a set of resources',
  description:
    'Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              DicomVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              KeepPrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Keep the private tags from the DICOM instances (defaults to `false`)',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of the patients/studies/series/instances of interest.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({
              description:
                'The list of all the resources that have been created by this anonymization',
              required: [],
            }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsBulkContentRoute = createRoute({
  method: 'post',
  path: '/tools/bulk-content',
  tags: ['System'],
  summary: 'Describe a set of resources',
  description:
    'Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Full: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
                }),
              Level: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This optional argument specifies the level of interest (can be `Patient`, `Study`, `Series` or `Instance`). Orthanc will loop over the items inside `Resources`, and explore upward or downward in the DICOM hierarchy in order to find the level of interest.',
                }),
              Metadata: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true` (default value), the metadata associated with the resources will also be retrieved.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of the patients/studies/series/instances of interest.',
                }),
              Short: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, report the DICOM tags in hexadecimal format',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postToolsBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/tools/bulk-delete',
  tags: ['System'],
  summary: 'Delete a set of resources',
  description:
    'Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of the patients/studies/series/instances of interest.',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postToolsBulkModifyRoute = createRoute({
  method: 'post',
  path: '/tools/bulk-modify',
  tags: ['System'],
  summary: 'Modify a set of resources',
  description:
    'Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world',
                }),
              Keep: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.',
                }),
              KeepSource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.',
                }),
              Level: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Level of the modification (`Patient`, `Study`, `Series` or `Instance`). If absent, the level defaults to `Instance`, but is set to `Patient` if `PatientID` is modified, to `Study` if `StudyInstanceUID` is modified, or to `Series` if `SeriesInstancesUID` is modified. (new in Orthanc 1.9.7)',
                }),
              Permissive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If `true`, ignore errors during the individual steps of the job.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Replace`',
                }),
              Remove: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              RemovePrivateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Remove the private tags from the DICOM instances (defaults to `false`)',
                }),
              Replace: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'List of the Orthanc identifiers of the patients/studies/series/instances of interest.',
                }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'In asynchronous mode, identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'In asynchronous mode, path to access the job in the REST API',
                }),
            })
            .openapi({
              description:
                'The list of all the resources that have been altered by this modification',
              required: [],
            }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsCreateArchiveRoute = createRoute({
  method: 'post',
  path: '/tools/create-archive',
  tags: ['System'],
  summary: 'Create ZIP archive',
  description:
    'Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The list of Orthanc identifiers of interest.' }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsCreateDicomRoute = createRoute({
  method: 'post',
  path: '/tools/create-dicom',
  tags: ['System'],
  summary: 'Create one DICOM instance',
  description: 'Create one DICOM instance, and store it into Orthanc',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Content: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This field can be used to embed an image (pixel data) or a PDF inside the created DICOM instance. The PNG image, the JPEG image or the PDF file must be provided using their [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme). This field can possibly contain a JSON array, in which case a DICOM series is created containing one DICOM instance for each item in the `Content` field.',
                }),
              Force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Avoid the consistency checks for the DICOM tags that enforce the DICOM model of the real-world. You can notably use this flag if you need to manually set the tags `StudyInstanceUID`, `SeriesInstanceUID`, or `SOPInstanceUID`. Be careful with this feature.',
                }),
              InterpretBinaryTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If some value in the `Tags` associative array is formatted according to some [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme), whether this value is decoded to a binary value or kept as such (`true` by default)',
                }),
              Parent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the newly created instance will be attached to the parent DICOM resource whose Orthanc identifier is contained in this field. The DICOM tags of the parent modules in the DICOM hierarchy will be automatically copied to the newly created instance.',
                }),
              PrivateCreator: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The private creator to be used for private tags in `Tags`',
                }),
              Tags: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the tags of the new instance to be created',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Orthanc identifier of the newly created instance' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the instance in the REST API' }),
            })
            .openapi({ description: '', required: [] }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsCreateMediaRoute = createRoute({
  method: 'post',
  path: '/tools/create-media',
  tags: ['System'],
  summary: 'Create DICOMDIR media',
  description:
    'Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Extended: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The list of Orthanc identifiers of interest.' }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsCreateMediaExtendedRoute = createRoute({
  method: 'post',
  path: '/tools/create-media-extended',
  tags: ['System'],
  summary: 'Create DICOMDIR media',
  description:
    'Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Asynchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.',
                }),
              Extended: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `true`.',
                }),
              Priority: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'In asynchronous mode, the priority of the job. The lower the value, the higher the priority.',
                }),
              Resources: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The list of Orthanc identifiers of interest.' }),
              Synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.',
                }),
              Transcode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ID: z.string().exactOptional().openapi({ description: 'Identifier of the job' }),
              Path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to access the job in the REST API' }),
            })
            .openapi({
              description:
                'In asynchronous mode, information about the job that has been submitted to generate the archive: https://book.orthanc-server.com/users/advanced-rest.html#jobs',
              required: [],
            }),
          examples: {},
        },
        'application/zip': {
          schema: z
            .any()
            .openapi({ description: 'In synchronous mode, the ZIP file containing the archive' }),
          examples: {},
        },
      },
    },
  },
})

export const getToolsDefaultEncodingRoute = createRoute({
  method: 'get',
  path: '/tools/default-encoding',
  tags: ['System'],
  summary: 'Get default encoding',
  description:
    'Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The name of the encoding' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsDefaultEncodingRoute = createRoute({
  method: 'put',
  path: '/tools/default-encoding',
  tags: ['System'],
  summary: 'Set default encoding',
  description:
    'Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'The name of the encoding. Check out configuration option `DefaultEncoding` for the allowed values.',
            }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsDicomConformanceRoute = createRoute({
  method: 'get',
  path: '/tools/dicom-conformance',
  tags: ['System'],
  summary: 'Get DICOM conformance',
  description: 'Get the DICOM conformance statement of Orthanc',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The DICOM conformance statement' }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsDicomEchoRoute = createRoute({
  method: 'post',
  path: '/tools/dicom-echo',
  tags: ['System'],
  summary: 'Trigger C-ECHO SCU',
  description:
    'Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AET: z
                .string()
                .exactOptional()
                .openapi({ description: 'AET of the remote DICOM modality' }),
              CheckFind: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Issue a dummy C-FIND command after the C-GET SCU, in order to check whether the remote modality knows about Orthanc. This field defaults to the value of the `DicomEchoChecksFind` configuration option. New in Orthanc 1.8.1.',
                }),
              Host: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Host address of the remote DICOM modality (typically, an IP address)',
                }),
              Manufacturer: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Manufacturer of the remote DICOM modality (check configuration option `DicomModalities` for possible values',
                }),
              Port: z
                .number()
                .exactOptional()
                .openapi({ description: 'TCP port of the remote DICOM modality' }),
              Timeout: z
                .number()
                .exactOptional()
                .openapi({ description: 'Timeout for the C-ECHO command, in seconds' }),
              UseDicomTls: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to use DICOM TLS in the SCU connection initiated by Orthanc (new in Orthanc 1.9.0)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postToolsExecuteScriptRoute = createRoute({
  method: 'post',
  path: '/tools/execute-script',
  tags: ['System'],
  summary: 'Execute Lua script',
  description:
    'Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`',
  request: {
    body: {
      content: {
        'text/plain': { schema: z.any().openapi({ description: 'The Lua script to be executed' }) },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'Output of the Lua script' }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsFindRoute = createRoute({
  method: 'post',
  path: '/tools/find',
  tags: ['System'],
  summary: 'Look for local resources',
  description:
    'This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CaseSensitive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enable case-sensitive search for PN value representations (defaults to configuration option `CaseSensitivePN`)',
                }),
              Expand: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Also retrieve the content of the matching resources, not only their Orthanc identifiers',
                }),
              Full: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)',
                }),
              Level: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Level of the query (`Patient`, `Study`, `Series` or `Instance`)',
                }),
              Limit: z
                .number()
                .exactOptional()
                .openapi({ description: 'Limit the number of reported resources' }),
              Query: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Associative array containing the filter on the values of the DICOM tags',
                }),
              RequestedTags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of DICOM tags to include in the response (applicable only if "Expand" is set to true).  The tags requested tags are returned in the \'RequestedTags\' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return all Main Dicom Tags to keep backward compatibility with Orthanc prior to 1.11.0.',
                }),
              Short: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, report the DICOM tags in hexadecimal format',
                }),
              Since: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Show only the resources since the provided index (in conjunction with `Limit`)',
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing either the Orthanc identifiers, or detailed information about the reported resources (if `Expand` argument is `true`)',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getToolsGenerateUidRoute = createRoute({
  method: 'get',
  path: '/tools/generate-uid',
  tags: ['System'],
  summary: 'Generate an identifier',
  description: 'Generate a random DICOM identifier',
  request: {
    query: z.object({
      level: z
        .string()
        .openapi({
          param: {
            description: 'Type of DICOM resource among: `patient`, `study`, `series` or `instance`',
            in: 'query',
            name: 'level',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The generated identifier' }),
          examples: {},
        },
      },
    },
  },
})

export const postToolsInvalidateTagsRoute = createRoute({
  method: 'post',
  path: '/tools/invalidate-tags',
  tags: ['System'],
  summary: 'Invalidate DICOM-as-JSON summaries',
  description:
    'Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area',
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelRoute = createRoute({
  method: 'get',
  path: '/tools/log-level',
  tags: ['Logs'],
  summary: 'Get main log level',
  description: 'Get the main log level of Orthanc',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelRoute = createRoute({
  method: 'put',
  path: '/tools/log-level',
  tags: ['Logs'],
  summary: 'Set main log level',
  description: 'Set the main log level of Orthanc',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelDicomRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-dicom',
  tags: ['Logs'],
  summary: 'Get log level for `dicom`',
  description: 'Get the log level of the log category `dicom`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelDicomRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-dicom',
  tags: ['Logs'],
  summary: 'Set log level for `dicom`',
  description: 'Set the log level of the log category `dicom`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelGenericRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-generic',
  tags: ['Logs'],
  summary: 'Get log level for `generic`',
  description: 'Get the log level of the log category `generic`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelGenericRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-generic',
  tags: ['Logs'],
  summary: 'Set log level for `generic`',
  description: 'Set the log level of the log category `generic`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelHttpRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-http',
  tags: ['Logs'],
  summary: 'Get log level for `http`',
  description: 'Get the log level of the log category `http`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelHttpRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-http',
  tags: ['Logs'],
  summary: 'Set log level for `http`',
  description: 'Set the log level of the log category `http`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelJobsRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-jobs',
  tags: ['Logs'],
  summary: 'Get log level for `jobs`',
  description: 'Get the log level of the log category `jobs`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelJobsRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-jobs',
  tags: ['Logs'],
  summary: 'Set log level for `jobs`',
  description: 'Set the log level of the log category `jobs`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelLuaRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-lua',
  tags: ['Logs'],
  summary: 'Get log level for `lua`',
  description: 'Get the log level of the log category `lua`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelLuaRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-lua',
  tags: ['Logs'],
  summary: 'Set log level for `lua`',
  description: 'Set the log level of the log category `lua`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelPluginsRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-plugins',
  tags: ['Logs'],
  summary: 'Get log level for `plugins`',
  description: 'Get the log level of the log category `plugins`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelPluginsRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-plugins',
  tags: ['Logs'],
  summary: 'Set log level for `plugins`',
  description: 'Set the log level of the log category `plugins`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsLogLevelSqliteRoute = createRoute({
  method: 'get',
  path: '/tools/log-level-sqlite',
  tags: ['Logs'],
  summary: 'Get log level for `sqlite`',
  description: 'Get the log level of the log category `sqlite`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsLogLevelSqliteRoute = createRoute({
  method: 'put',
  path: '/tools/log-level-sqlite',
  tags: ['Logs'],
  summary: 'Set log level for `sqlite`',
  description: 'Set the log level of the log category `sqlite`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: 'Possible values: `default`, `verbose` or `trace`' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postToolsLookupRoute = createRoute({
  method: 'post',
  path: '/tools/lookup',
  tags: ['System'],
  summary: 'Look for DICOM identifiers',
  description:
    'This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({
              description:
                'The DICOM identifier of interest (i.e. the value of `PatientID`, `StudyInstanceUID`, `SeriesInstanceUID`, or `SOPInstanceUID`)',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'JSON array containing a list of matching Orthanc resources, each item in the list corresponding to a JSON object with the fields `Type`, `ID` and `Path` identifying one DICOM resource that is stored by Orthanc',
            }),
          examples: {},
        },
      },
    },
  },
})

export const getToolsMetricsRoute = createRoute({
  method: 'get',
  path: '/tools/metrics',
  tags: ['System'],
  summary: 'Are metrics collected?',
  description:
    'Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: '`1` if metrics are collected, `0` if metrics are disabled' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsMetricsRoute = createRoute({
  method: 'put',
  path: '/tools/metrics',
  tags: ['System'],
  summary: 'Enable collection of metrics',
  description:
    'Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z
            .any()
            .openapi({ description: '`1` if metrics are collected, `0` if metrics are disabled' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getToolsMetricsPrometheusRoute = createRoute({
  method: 'get',
  path: '/tools/metrics-prometheus',
  tags: ['System'],
  summary: 'Get usage metrics',
  description:
    'Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus',
  responses: { 200: { description: '', content: {} } },
})

export const getToolsNowRoute = createRoute({
  method: 'get',
  path: '/tools/now',
  tags: ['System'],
  summary: 'Get UTC time',
  description: 'Get UTC time',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The UTC time' }),
          example: '20230203T132024',
        },
      },
    },
  },
})

export const getToolsNowLocalRoute = createRoute({
  method: 'get',
  path: '/tools/now-local',
  tags: ['System'],
  summary: 'Get local time',
  description: 'Get local time',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: 'The local time' }),
          example: '20230203T132025',
        },
      },
    },
  },
})

export const postToolsReconstructRoute = createRoute({
  method: 'post',
  path: '/tools/reconstruct',
  tags: ['System'],
  summary: 'Reconstruct all the index',
  description:
    'Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated. If you have a large database to process, it is advised to use the Housekeeper plugin to perform this action resource by resource',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ReconstructFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
                }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postToolsResetRoute = createRoute({
  method: 'post',
  path: '/tools/reset',
  tags: ['System'],
  summary: 'Restart Orthanc',
  description: 'Restart Orthanc',
  responses: { 200: { description: '' } },
})

export const postToolsShutdownRoute = createRoute({
  method: 'post',
  path: '/tools/shutdown',
  tags: ['System'],
  summary: 'Shutdown Orthanc',
  description: 'Shutdown Orthanc',
  responses: { 200: { description: '' } },
})

export const getToolsUnknownSopClassAcceptedRoute = createRoute({
  method: 'get',
  path: '/tools/unknown-sop-class-accepted',
  tags: ['System'],
  summary: 'Is unknown SOP class accepted?',
  description: 'Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: '`1` if accepted, `0` if not accepted' }),
          examples: {},
        },
      },
    },
  },
})

export const putToolsUnknownSopClassAcceptedRoute = createRoute({
  method: 'put',
  path: '/tools/unknown-sop-class-accepted',
  tags: ['System'],
  summary: 'Set unknown SOP class accepted',
  description:
    'Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID',
  request: {
    body: {
      content: {
        'text/plain': {
          schema: z.any().openapi({ description: '`1` if accepted, `0` if not accepted' }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})
