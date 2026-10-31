import { createRoute, z } from '@hono/zod-openapi'

const BasicAuthenticationSecurityScheme = { scheme: 'basic', type: 'http' }

export const getAboutRoute = createRoute({
  method: 'get',
  path: '/about',
  tags: ['General Information'],
  summary: 'Get information about API.',
  description: 'Get generic information about the API.',
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [about.xsd](../schema/about.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              commit: z
                .string()
                .exactOptional()
                .openapi({ example: '7b5d82e6143442a8eb8459f35cc94d2fbe263ebe' }),
              description: z.string().openapi({ example: 'API to the Open Build Service' }),
              last_deployment: z
                .string()
                .exactOptional()
                .openapi({ example: '2020-11-10 15:07:02 +0000' }),
              revision: z.string().openapi({ example: '2.11~alpha.20201110T101235.7b5d82e614' }),
              title: z.string().openapi({ example: 'Open Build Service API' }),
            })
            .openapi({ required: ['title', 'description', 'revision'], xml: { name: 'about' } }),
        },
      },
    },
  },
})

export const getArchitecturesRoute = createRoute({
  method: 'get',
  path: '/architectures',
  tags: ['General Information'],
  summary: 'List all known architectures.',
  description:
    'Get a list of all known architectures known to OBS in general. This is not the list of architectures provided by this instance. Check the schedulers element from the `/configuration` route for this.\n',
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            count: '4',
            entry: [{ name: 'aarch64' }, { name: 'armv7l' }, { name: 's390x' }, { name: 'x86_64' }],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getArchitecturesArchitectureNameRoute = createRoute({
  method: 'get',
  path: '/architectures/{architecture_name}',
  tags: ['General Information'],
  summary: 'Show one architecture.',
  description: 'Show information about one architecture.',
  request: {
    params: z.object({
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
            })
            .openapi({ example: { name: 'x86_64' }, xml: { name: 'architecture' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'unknown_architecture', summary: 'Architecture does not exist: x999' },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getAttributeRoute = createRoute({
  method: 'get',
  path: '/attribute',
  tags: ['Attribute Namespaces'],
  summary: 'List all attribute namespaces.',
  description: 'List all attribute namespaces.',
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { count: '2', entry: [{ name: 'OBS' }, { name: 'openSUSE' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getAttributeNamespaceRoute = createRoute({
  method: 'get',
  path: '/attribute/{namespace}',
  tags: ['Attribute Namespaces'],
  summary: 'List all attributes below a namespace.',
  description: 'List all attributes under a given attribute namespace.',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { count: '2', entry: [{ name: 'AutoCleanup' }, { name: 'OwnerRootProject' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteAttributeNamespaceRoute = createRoute({
  method: 'delete',
  path: '/attribute/{namespace}',
  tags: ['Attribute Namespaces'],
  summary: 'Delete an attribute namespace and all attributes below.',
  description:
    'Delete an attribute namespace and all attributes below.\n\nThis operation is the same as the one defined with [DELETE /attribute/{namespace}/_meta](#/Attributes/delete_attribute__namespace___meta).\n',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getAttributeNamespaceMetaRoute = createRoute({
  method: 'get',
  path: '/attribute/{namespace}/_meta',
  tags: ['Attribute Namespaces'],
  summary: 'Show attribute namespace.',
  description: 'Shows attribute namespace.',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'namespace' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putAttributeNamespaceMetaRoute = createRoute({
  method: 'put',
  path: '/attribute/{namespace}/_meta',
  tags: ['Attribute Namespaces'],
  summary: "Change attribute namespace. Create an attribute namespace if it doesn't exist.",
  description:
    "This endpoint can be used for both, creating an attribute namespace and updating it:\n  * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.\n  * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.\n\nThis operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___meta).\n",
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Attribute namespace definition.\n\nXML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'namespace' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Validation Failed.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Validation Failed (Empty Body)',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for attribute_namespace_meta',
              },
            },
            wrong_xml_element: {
              summary: 'Validation Failed (Wrong XML Element)',
              value: {
                code: 'validation_failed',
                summary:
                  "attribute_namespace_meta validation error: 1:0: ERROR: Element 'foo': No matching global declaration available for the validation root.",
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
            user: {
              summary: 'Not Found (User)',
              value: {
                code: 'not_found',
                summary: "Couldn't find User with login = user_login_name",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postAttributeNamespaceMetaRoute = createRoute({
  method: 'post',
  path: '/attribute/{namespace}/_meta',
  tags: ['Attribute Namespaces'],
  summary: "Change attribute namespace. Create an attribute namespace if it doesn't exist.",
  description:
    "This endpoint can be used for both, creating an attribute namespace and updating it:\n  * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.\n  * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.\n\nThis operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___meta).\n",
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Attribute namespace definition.\n\nXML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'namespace' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Validation Failed.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Validation Failed (Empty Body)',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for attribute_namespace_meta',
              },
            },
            wrong_xml_element: {
              summary: 'Validation Failed (Wrong XML Element)',
              value: {
                code: 'validation_failed',
                summary:
                  "attribute_namespace_meta validation error: 1:0: ERROR: Element 'foo': No matching global declaration available for the validation root.",
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
            user: {
              summary: 'Not Found (User)',
              value: {
                code: 'not_found',
                summary: "Couldn't find User with login = user_login_name",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteAttributeNamespaceMetaRoute = createRoute({
  method: 'delete',
  path: '/attribute/{namespace}/_meta',
  tags: ['Attribute Namespaces'],
  summary: 'Delete an attribute namespace and all attributes below.',
  description:
    'Delete an attribute namespace and all attributes below.\n\nThis operation is the same as the one defined with [DELETE /attribute/{namespace}](#/Attributes/delete_attribute__namespace_).\n',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteAttributeNamespaceAttributeNameRoute = createRoute({
  method: 'delete',
  path: '/attribute/{namespace}/{attribute_name}',
  tags: ['Attributes'],
  summary: 'Delete an attribute and all its values in projects or packages.',
  description:
    'Delete an attribute and all its values in projects or packages.\n\nThis operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}/_meta](#/Attributes/delete_attribute__namespace___attribute_name___meta)\n',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the attribute',
            example: 'OwnerRootProjectTest',
            in: 'path',
            name: 'attribute_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getAttributeNamespaceAttributeNameMetaRoute = createRoute({
  method: 'get',
  path: '/attribute/{namespace}/{attribute_name}/_meta',
  tags: ['Attributes'],
  summary: 'Shows attribute.',
  description: 'Shows attribute.',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the attribute',
            example: 'OwnerRootProjectTest',
            in: 'path',
            name: 'attribute_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              allowed: z
                .object({
                  value: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['DisableDevelTest', 'BugownerOnlyTest'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              count: z.int().exactOptional().openapi({ example: 0 }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'An example description for an attribute.' }),
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
              namespace: z
                .string()
                .exactOptional()
                .openapi({ example: 'OwnerRootProjectTest', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'definition' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
            unknown_attribute: {
              summary: 'Unknown Attribute',
              value: {
                code: 'unknown_attribute',
                summary: "Unknown attribute 'OBS_TEST':'OwnerRootProjectTest'",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putAttributeNamespaceAttributeNameMetaRoute = createRoute({
  method: 'put',
  path: '/attribute/{namespace}/{attribute_name}/_meta',
  tags: ['Attributes'],
  summary: "Change attribute data. Create an attribute if it doesn't exist.",
  description:
    "This endpoint can be used for both, creating an attribute and updating it:\n  * If the attribute passed as parameter doesn't exist, it will create the attribute.\n  * If the attribute passed as parameter already exists, it will update the attribute.\n\nThis operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___attribute_name___meta).\n",
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the attribute',
            example: 'OwnerRootProjectTest',
            in: 'path',
            name: 'attribute_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attribute definition.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              allowed: z
                .object({
                  value: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['DisableDevelTest', 'BugownerOnlyTest'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              count: z.int().exactOptional().openapi({ example: 0 }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'An example description for an attribute.' }),
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
              namespace: z
                .string()
                .exactOptional()
                .openapi({ example: 'OwnerRootProjectTest', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'definition' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Validation Failed.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Validation Failed (Empty Body)',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for attrib_type',
              },
            },
            illegal_request: {
              summary: 'Illegal Request',
              value: {
                code: 'illegal_request',
                summary:
                  'Illegal request: PUT/POST /attribute/OBS_TEST/OwnerRootProjectTest/_meta: path does not match content',
              },
            },
            wrong_xml_element: {
              summary: 'Validation Failed (Wrong XML Attributes)',
              value: {
                code: 'validation_failed',
                summary:
                  'attrib_type validation error: 1:0: ERROR: Element definition failed to validate attributes',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
            unknown_attribute: {
              summary: 'Unknown Attribute',
              value: {
                code: 'unknown_attribute',
                summary: "Unknown attribute 'OBS_TEST':'OwnerRootProjectTest'",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postAttributeNamespaceAttributeNameMetaRoute = createRoute({
  method: 'post',
  path: '/attribute/{namespace}/{attribute_name}/_meta',
  tags: ['Attributes'],
  summary: "Change attribute data. Create an attribute if it doesn't exist.",
  description:
    "This endpoint can be used for both, creating an attribute and updating it:\n  * If the attribute passed as parameter doesn't exist, it will create the attribute.\n  * If the attribute passed as parameter already exists, it will update the attribute.\n\nThis operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___attribute_name___meta).\n",
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the attribute',
            example: 'OwnerRootProjectTest',
            in: 'path',
            name: 'attribute_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attribute definition.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              allowed: z
                .object({
                  value: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['DisableDevelTest', 'BugownerOnlyTest'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              count: z.int().exactOptional().openapi({ example: 0 }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'An example description for an attribute.' }),
              modifiable_by: z
                .array(
                  z
                    .object({
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user_login_name', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'OBS_TEST', xml: { attribute: true } }),
              namespace: z
                .string()
                .exactOptional()
                .openapi({ example: 'OwnerRootProjectTest', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'definition' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Validation Failed.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Validation Failed (Empty Body)',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for attrib_type',
              },
            },
            illegal_request: {
              summary: 'Illegal Request',
              value: {
                code: 'illegal_request',
                summary:
                  'Illegal request: PUT/POST /attribute/OBS_TEST/OwnerRootProjectTest/_meta: path does not match content',
              },
            },
            wrong_xml_element: {
              summary: 'Validation Failed (Wrong XML Attributes)',
              value: {
                code: 'validation_failed',
                summary:
                  'attrib_type validation error: 1:0: ERROR: Element definition failed to validate attributes',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
            unknown_attribute: {
              summary: 'Unknown Attribute',
              value: {
                code: 'unknown_attribute',
                summary: "Unknown attribute 'OBS_TEST':'OwnerRootProjectTest'",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteAttributeNamespaceAttributeNameMetaRoute = createRoute({
  method: 'delete',
  path: '/attribute/{namespace}/{attribute_name}/_meta',
  tags: ['Attributes'],
  summary: 'Delete an attribute and all its values in projects or packages.',
  description:
    'Delete an attribute and all its values in projects or packages.\n\nThis operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}](#/Attributes/delete_attribute__namespace___attribute_name_)\n',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'The namespace',
            example: 'OBS_TEST',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the attribute',
            example: 'OwnerRootProjectTest',
            in: 'path',
            name: 'attribute_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            namespace: {
              summary: 'Not Found (Namespace)',
              value: { code: 'not_found', summary: "Couldn't find AttribNamespace" },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildRoute = createRoute({
  method: 'get',
  path: '/build',
  tags: ['Build'],
  summary: 'Get a simple directory listing of all projects',
  description: 'Get a simple directory listing of all projects',
  responses: {
    200: {
      description:
        'OK\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { entry: [{ name: 'openSUSE:Leap:15.1' }, { name: 'openSUSE:Leap:15.2' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}',
  tags: ['Build'],
  summary: 'Get a simple directory listing of all repositories for the specified project',
  description: 'Get a simple directory listing of all repositories for the specified project',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { entry: [{ name: 'openSUSE_Tumbleweed' }, { name: 'openSUSE_Leap_15.3' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postBuildProjectNameRoute = createRoute({
  method: 'post',
  path: '/build/{project_name}',
  tags: ['Build'],
  summary: 'Apply different actions on builds/build processes of the specified project',
  description: 'Apply different actions on builds/build processes of the specified project',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the package. Scope the commands to the specified package.',
            example: 'firefox',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      arch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the build architecture. Scope the commands to the specified architectures.',
            example: 'x86_64',
            in: 'query',
            name: 'arch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the repository. Scope the commands to the specified repository.',
            example: 'openSUSE_Leap_15.2',
            in: 'query',
            name: 'repository',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cmd: z
        .enum([
          'wipe',
          'restartbuild',
          'killbuild',
          'abortbuild',
          'rebuild',
          'unpublish',
          'sendsysrq',
        ])
        .openapi({
          param: {
            description:
              '**NOTE**: All commands described below, can be scoped to a package within the project by setting the `package`\nparameter.\n\n* `wipe`: Delete all binaries build by the project.\n* `restartbuild`: Restart all running build processes inside the project.\n* `rebuild`: Trigger a rebuild of all packages inside the project.\n* `abortbuild`: Abort all running build processes for the specified project, marking them as failed.\n* `killbuild`: Alias for `abortbuild`.\n* `unpublish`: Delete all published package binaries, for the specified project, from the download repository.\n* `sendsysrq`: Send a single sysrq character to the kernel of a running build. Character need to be specified\n               through the `sysrq` parameter. Only a subset of debugging requests are supported (eg. 9, t or w).\n',
            in: 'query',
            name: 'cmd',
            required: true,
            schema: {
              enum: [
                'wipe',
                'restartbuild',
                'killbuild',
                'abortbuild',
                'rebuild',
                'unpublish',
                'sendsysrq',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description:
        'Illegal request.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Illegal Request': {
              value: {
                code: 'illegal_request',
                summary: "unsupported POST command '<some command>' to <some url>.",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Execute command no permission.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Execute cmd no permission': {
              value: {
                code: 'execute_cmd_no_permission',
                summary:
                  'No permission to execute command on package <some package> in project <some project>',
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameResultRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/_result',
  tags: ['Build'],
  summary:
    'Get the build results for packages, architectures and repositories of the specified project.',
  description:
    'Get the build results for packages, architectures and repositories of the specified project.',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      view: z
        .enum(['summary', 'status', 'binarylist'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify which sections should be included in the result list.\n\n* `status`: Include detailed infos about the build status. **Default**\n* `summary`: Include the summary of the status values.\n* `binarylist`: Include a list of generated binary files.\n',
            in: 'query',
            name: 'view',
            schema: { enum: ['summary', 'status', 'binarylist'], type: 'string' },
            required: false,
          },
        }),
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the package. Limit results to the specified package.',
            example: 'obs-server',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      arch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the build architecture. Limit results to the specified build architecture.',
            example: 'x86_64',
            in: 'query',
            name: 'arch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the repository. Limit results to the specified repository.',
            example: 'openSUSE_Leap_15.2',
            in: 'query',
            name: 'repository',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lastbuild: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show the last build result (excludes current building job states).',
            example: 1,
            in: 'query',
            name: 'lastbuild',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      locallink: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include build results from packages with project local links.',
            example: 1,
            in: 'query',
            name: 'locallink',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      multibuild: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include build results from _multibuild definitions.',
            example: 1,
            in: 'query',
            name: 'multibuild',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK.\n\nXML Schema used for body validation: [buildresult.rng](../schema/buildresult.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({
                      arch: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'x86_64', xml: { attribute: true } }),
                      binarylist: z
                        .array(
                          z
                            .object({
                              binary: z
                                .array(
                                  z
                                    .object({
                                      filename: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'hello-2.10-3.1.x86_64.rpm',
                                          xml: { attribute: true },
                                        }),
                                      mtime: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: '1617270174',
                                          xml: { attribute: true },
                                        }),
                                      size: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '58352', xml: { attribute: true } }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              package: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'ctris', xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'published', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo', xml: { attribute: true } }),
                      repository: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'openSUSE_Leap_15.3', xml: { attribute: true } }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'published', xml: { attribute: true } }),
                      status: z
                        .array(
                          z
                            .object({
                              code: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'succeeded', xml: { attribute: true } }),
                              details: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'package whitelist' }),
                              package: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'ctris', xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      summary: z
                        .object({
                          statuscount: z
                            .array(
                              z
                                .object({
                                  code: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'disabled', xml: { attribute: true } }),
                                  count: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '2', xml: { attribute: true } }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              state: z
                .string()
                .exactOptional()
                .openapi({ example: 'e096d16554264fa553ca0aa3226cf189', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'resultlist' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}',
  tags: ['Build'],
  summary: 'List of all architectures the specified project builds against a given repository.',
  description: 'List of all architectures the specified project builds against a given repository.',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { entry: [{ name: 'x86_64' }, { name: 'i586' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 404,
            details: "404 project '<project_name>' has no repository '<repository_name>'",
            summary: "project '<project_name>' has no repository '<repository_name>'",
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameBuildconfigRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/_buildconfig',
  tags: ['Build'],
  summary: 'Show the build configuration for the specified repository.',
  description:
    'Show the build configuration for the specified repository. Includes all base package requirements, mappings and macros.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/_builddepinfo',
  tags: ['Build'],
  summary: 'Show the build dependencies of packages that are part of the project.',
  description:
    'Show the build dependencies of packages that are part of the project, for a given repository and architecture.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the package. Limit results to the specified package.',
            example: 'obs-server',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['pkgnames', 'revpkgnames', 'order'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '* `pkgnames`: Show whole package dependencies, instead of individual binaries.\n* `revpkgnames`: Show which packages depend on the provided project/package for\n  the given repository/architecture, and therefore a rebuild gets triggered on change.\n* `order`: Show packages ordered by dependencies.\n',
            in: 'query',
            name: 'view',
            schema: { enum: ['pkgnames', 'revpkgnames', 'order'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              package: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'memcached', xml: { attribute: true } }),
                      pkgdep: z
                        .array(z.string().openapi({ example: ['gzip', 'obs-server'] }))
                        .exactOptional(),
                      source: z.string().exactOptional().openapi({ example: 'memcached' }),
                      subpkg: z
                        .array(
                          z
                            .string()
                            .openapi({ example: ['memcached-devel', 'memcached-debugsource'] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'builddepinfo' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNameRepositoryRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/_repository',
  tags: ['Build'],
  summary: 'List all binaries (produced by all packages of the given project).',
  description:
    'List all binaries (produced by all packages of the given project) for the specified repository and architecture.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              binary: z
                .array(
                  z
                    .object({
                      filename: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'hello-2.10-3.1.x86_64.rpm',
                          xml: { attribute: true },
                        }),
                      mtime: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1617270174', xml: { attribute: true } }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '58352', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'binarylist' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}',
  tags: ['Build'],
  summary: 'List binaries built by the sources of the specified package.',
  description: 'List binaries built by the sources of the specified package.',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            example: 'ctris',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              binary: z
                .array(
                  z
                    .object({
                      filename: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'hello-2.10-3.1.x86_64.rpm',
                          xml: { attribute: true },
                        }),
                      mtime: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1617270174', xml: { attribute: true } }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '58352', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'binarylist' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRoute =
  createRoute({
    method: 'get',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_buildinfo',
    tags: ['Build'],
    description: 'This endpoint returns information about some specific artifact',
    operationId: 'getBuildProjectRepositoryArchPackageBuildinfo',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .string()
          .openapi({
            param: {
              description: 'Package name',
              example: 'ctris',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returns the artifact building information.',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                arch: z.string().exactOptional().openapi({ example: 'i586' }),
                bcnt: z.string().exactOptional().openapi({ example: '2' }),
                bdep: z
                  .object({
                    arch: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'i586', xml: { attribute: true } }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'liblua5_4-5', xml: { attribute: true } }),
                    notmeta: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '1', xml: { attribute: true } }),
                    preinstall: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '1', xml: { attribute: true } }),
                    project: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example: 'openSUSE.org:openSUSE:Tumbleweed',
                        xml: { attribute: true },
                      }),
                    release: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '3.1', xml: { attribute: true } }),
                    repository: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'dod', xml: { attribute: true } }),
                    version: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '5.4.2', xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                debuginfo: z.int().exactOptional().openapi({ example: 0 }),
                file: z.string().exactOptional().openapi({ example: 'ctris.spec' }),
                package: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'ctris', xml: { attribute: true } }),
                path: z
                  .any()
                  .exactOptional()
                  .openapi({
                    'x-project': {
                      example: 'home:Admin',
                      type: 'string',
                      xml: { attribute: true },
                    },
                    'x-repository': {
                      example: 'openSUSE_Tumbleweed',
                      type: 'string',
                      xml: { attribute: true },
                    },
                  }),
                project: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'home:Admin', xml: { attribute: true } }),
                release: z.string().exactOptional().openapi({ example: '3.2' }),
                repository: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'openSUSE_Tumbleweed', xml: { attribute: true } }),
                rev: z.int().exactOptional().openapi({ example: 3 }),
                specfile: z.string().exactOptional().openapi({ example: 'ctris.spec' }),
                srcmd5: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '6b7c8d9cb5c5d36453c1dc8e102016b1' }),
                subpack: z.string().exactOptional().openapi({ example: 'ctris' }),
                verifymd5: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '6b7c8d9cb5c5d36453c1dc8e102016b1' }),
                versrel: z.string().exactOptional().openapi({ example: '0.42.1-3' }),
              })
              .openapi({ xml: { name: 'buildinfo' }, required: [] }),
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      404: {
        description:
          'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: { code: 'unknown_project', summary: 'Project not found: 1' },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRoute = createRoute(
  {
    method: 'get',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_history',
    tags: ['Build'],
    description: 'This endpoint returns the build history for a specific artifact',
    operationId: 'getBuildProjectRepositoryArchPackageHistory',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .string()
          .openapi({
            param: {
              description: 'Package name',
              example: 'ctris',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returns ok when the build status is ok',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                entry: z
                  .object({
                    bcnt: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '1', xml: { attribute: true } }),
                    duration: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '222', xml: { attribute: true } }),
                    rev: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '4', xml: { attribute: true } }),
                    srcmd5: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example: '63a6f075d3d420c6c1160a7b5dc31354',
                        xml: { attribute: true },
                      }),
                    time: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '1617812788', xml: { attribute: true } }),
                    versrel: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '0.42.1-4', xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ xml: { name: 'buildhistory' }, required: [] }),
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      404: {
        description:
          'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: { code: 'unknown_project', summary: 'Project not found: 1' },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  },
)

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRoute =
  createRoute({
    method: 'get',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_jobstatus',
    tags: ['Build'],
    summary: 'Show the build status of a currently running build job.',
    description:
      'Show the build status of a currently running build job. Shows an empty result if no build job is running.\n',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .string()
          .openapi({
            param: {
              description: 'Package name',
              example: 'ctris',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description:
          'OK.\n\nXML Schema used for body validation: [jobstatus.rng](../schema/jobstatus.rng)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'building', xml: { attribute: true } }),
                hostarch: z.string().exactOptional().openapi({ example: 'x86_64' }),
                jobid: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '17c8d25b92da67f6ec428ea51a9b5342' }),
                lastduration: z.string().exactOptional().openapi({ example: '43' }),
                starttime: z.string().exactOptional().openapi({ example: '1618222900' }),
                uri: z.string().exactOptional().openapi({ example: 'http://172.18.0.5:38963' }),
              })
              .openapi({ xml: { name: 'jobstatus' }, required: [] }),
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      404: {
        description:
          'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              'Unknown Project': {
                value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
              },
            },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_log',
  tags: ['Build'],
  description: 'This endpoint returns the last log file for a specific build artifact',
  operationId: 'getBuildProjectRepositoryArchPackageLog',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            example: 'ctris',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'This endpoint returns the log file content\n', content: {} },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Error: Not Acceptable\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'download_binary_no_permission',
            summary: 'No permission to download binaries from package ctris, project home:Admin',
          },
        },
      },
    },
    404: {
      description:
        'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'unknown_project', summary: 'Project not found: 1' },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_reason',
  tags: ['Build'],
  summary: 'Show the reason for the lastly triggered build.',
  description: 'Details about the reason of the lastly triggered build.',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            example: 'ctris',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              explain: z.string().exactOptional().openapi({ example: 'source change' }),
              oldsource: z
                .string()
                .exactOptional()
                .openapi({ example: 'da9ebc6a12b6da45f9ead3fc2f924889' }),
              time: z.string().exactOptional().openapi({ example: '1617982407' }),
            })
            .openapi({ xml: { name: 'reason' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Unknown project.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Unknown Project': {
              value: { code: 'unknown_project', summary: 'Project not found: <some project>.' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRoute = createRoute({
  method: 'get',
  path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_status',
  tags: ['Build'],
  description: 'This endpoint returns the building status for a specific artifact',
  operationId: 'getBuildProjectRepositoryArchPackageStatus',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            example: 'ctris',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns ok when the build status is ok',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ example: 'failed', xml: { attribute: true } }),
              package: z
                .string()
                .exactOptional()
                .openapi({ example: 'ctris', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'unknown_project', summary: 'Project not found: 1' },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute =
  createRoute({
    method: 'get',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}',
    tags: ['Build'],
    summary: 'Return a specific artifact file contents',
    description:
      "Given a project, repository, architecture and package, retrieve the given file's content.\n",
    operationId: 'getBuildProjectRepositoryArchitecturePackageFile',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .string()
          .openapi({
            param: {
              description: 'Package name',
              example: 'ctris',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        file_name: z
          .string()
          .openapi({
            param: {
              description: 'The file name',
              example: 'ctris-0.42.1-4.1.x86_64.rpm',
              in: 'path',
              name: 'file_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: "Returns the artifact's actual file contents",
        content: {
          'application/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      404: {
        description:
          'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: '404',
              details: "404 project 'home:Admin' has no repository '4'",
              summary: "project 'home:Admin' has no repository '4'",
            },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute =
  createRoute({
    method: 'put',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}',
    tags: ['Build'],
    summary: 'Update a specific artifact file contents',
    description:
      "Given a project, repository, architecture and package, update the given file's content.\n\nThis is for Admins only.\n",
    operationId: 'putBuildProjectRepositoryArchitecturePackageFile',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .preprocess(
            (val) => (typeof val === 'string' ? val.split(',') : val),
            z.array(z.literal('_repository')),
          )
          .openapi({
            param: {
              description: 'Package name',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { items: { enum: ['_repository'], type: 'string' }, type: 'array' },
            },
          }),
        file_name: z
          .string()
          .openapi({
            param: {
              description: 'The file name',
              example: 'ctris-0.42.1-4.1.x86_64.rpm',
              in: 'path',
              name: 'file_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'plain/text': {
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
        description: "Updates the artifact's file contents",
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: { code: 'ok' },
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      403: {
        description: 'No permission to upload binaries for this project\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: 'upload_binary_no_permission',
              summary: 'No permission to upload binaries.',
            },
          },
        },
      },
      404: {
        description:
          'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: '404',
              details: "404 project 'home:Admin' has no repository '4'",
              summary: "project 'home:Admin' has no repository '4'",
            },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRoute =
  createRoute({
    method: 'get',
    path: '/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}?view=fileinfo',
    tags: ['Build'],
    summary: 'This endpoint returns details about an specific artifact',
    description:
      "Given a project, repository, architecture and package, retrieve the given artifact's details.\n",
    operationId: 'getBuildProjectRepositoryArchitecturePackageFileViewFileinfo',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        package_name: z
          .string()
          .openapi({
            param: {
              description: 'Package name',
              example: 'ctris',
              in: 'path',
              name: 'package_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        file_name: z
          .string()
          .openapi({
            param: {
              description: 'The file name',
              example: 'ctris-0.42.1-4.1.x86_64.rpm',
              in: 'path',
              name: 'file_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        view: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.enum(['fileinfo', 'fileinfo_ext'])),
          )
          .openapi({
            param: {
              in: 'query',
              name: 'view',
              required: true,
              schema: {
                items: { enum: ['fileinfo', 'fileinfo_ext'], type: 'string' },
                type: 'array',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returns details about the artifact',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                arch: z.string().exactOptional(),
                description: z.string().exactOptional(),
                filename: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                mtime: z.string().exactOptional(),
                name: z.string().exactOptional(),
                provides: z.array(z.string()).exactOptional(),
                provides_ext: z
                  .array(
                    z
                      .object({
                        dep: z
                          .string()
                          .exactOptional()
                          .openapi({ xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                release: z.string().exactOptional(),
                requires: z.array(z.string()).exactOptional(),
                requires_ext: z
                  .array(
                    z
                      .object({
                        dep: z
                          .string()
                          .exactOptional()
                          .openapi({ xml: { attribute: true } }),
                        provided_by: z
                          .object({
                            arch: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                            name: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                            project: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                            release: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                            repository: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                            version: z
                              .string()
                              .exactOptional()
                              .openapi({ xml: { attribute: true } }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                size: z.string().exactOptional(),
                source: z.string().exactOptional(),
                summary: z.string().exactOptional(),
                version: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'fileinfo' }, required: [] }),
            examples: {
              fileinfo: {
                summary: 'view=fileinfo',
                value: {
                  arch: 'x86_64',
                  description:
                    'ctris is a colorized, small and flexible Tetris(TM)-clone for the console. Go play!',
                  filename: 'ctris-0.42.1-4.1.x86_64.rpm',
                  mtime: '1617270174',
                  name: 'ctris',
                  provides: ['ctris = 0.42.1-6.2', 'ctris(x86-64) = 0.42.1-6.2'],
                  release: '4.1',
                  requires: ['libc.so.6()(64bit)', 'libc.so.6(GLIBC_2.2.5)(64bit)'],
                  size: '765725',
                  summary: 'Console based tetris clone',
                  version: '0.42.1',
                },
              },
              fileinfo_ext: {
                summary: 'view=fileinfo_ext',
                value: {
                  arch: 'x86_64',
                  description:
                    'ctris is a colorized, small and flexible Tetris(TM)-clone for the console. Go play!',
                  filename: 'ctris-0.42.1-4.2.x86_64.rpm',
                  mtime: '1617270174',
                  name: 'ctris',
                  provides: ['ctris = 0.42.1-6.2', 'ctris(x86-64) = 0.42.1-6.2'],
                  provides_ext: { dep: 'ctris(x86-64) = 0.42.1-6.2' },
                  release: '4.1',
                  requires: ['libc.so.6()(64bit)', 'libc.so.6(GLIBC_2.2.5)(64bit)'],
                  requires_ext: {
                    dep: 'libc.so.6()(64bit)',
                    provided_by: {
                      arch: 'x86_64',
                      name: 'glibc',
                      project: 'openSUSE.org:openSUSE:Tumbleweed',
                      release: '4.1',
                      repository: 'dod',
                      version: '2.33',
                    },
                  },
                  size: '765725',
                  source: 'ctris',
                  summary: 'Console based tetris clone',
                  version: '0.42.1',
                },
              },
            },
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      404: {
        description:
          'Error: Not Found\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: '404',
              details: "404 project 'home:Admin' has no repository '4'",
              summary: "project 'home:Admin' has no repository '4'",
            },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const getConfigurationRoute = createRoute({
  method: 'get',
  path: '/configuration',
  tags: ['Configuration'],
  summary: 'Display the configuration of this Open Build Service instance',
  description: 'Display the configuration of this Open Build Service instance.\n',
  responses: {
    200: {
      description: 'OK. The request has succeeded.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              admin_email: z
                .string()
                .exactOptional()
                .openapi({ example: 'unconfigured@openbuildservice.org' }),
              allow_user_to_create_home_project: z
                .string()
                .exactOptional()
                .openapi({ example: 'on' }),
              anonymous: z.string().exactOptional().openapi({ example: 'on' }),
              change_password: z.string().exactOptional().openapi({ example: 'on' }),
              cleanup_empty_projects: z.string().exactOptional().openapi({ example: 'on' }),
              default_access_disabled: z.string().exactOptional().openapi({ example: 'off' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'The openSUSE Build Service is the public instance of the Open Build Service (OBS)',
                }),
              disable_publish_for_branches: z.string().exactOptional().openapi({ example: 'on' }),
              disallow_group_creation: z.string().exactOptional().openapi({ example: 'off' }),
              download_on_demand: z.string().exactOptional().openapi({ example: 'on' }),
              enforce_project_keys: z.string().exactOptional().openapi({ example: 'off' }),
              gravatar: z.string().exactOptional().openapi({ example: 'on' }),
              hide_private_options: z.string().exactOptional().openapi({ example: 'off' }),
              name: z.string().exactOptional().openapi({ example: 'private' }),
              obs_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://unconfigured.openbuildservice.org' }),
              registration: z.string().exactOptional().openapi({ example: 'allow' }),
              schedulers: z
                .object({
                  arch: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['armv7l', 'i586', 'x86_64'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z.string().exactOptional().openapi({ example: 'Open Build Service' }),
              tos_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://en.opensuse.org/Terms_of_site' }),
              unlisted_projects_filter: z.string().exactOptional().openapi({ example: '^home:.+' }),
              unlisted_projects_filter_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'home projects' }),
            })
            .openapi({ xml: { name: 'configuration' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putConfigurationRoute = createRoute({
  method: 'put',
  path: '/configuration',
  tags: ['Configuration'],
  summary: 'Update the configuration of this Open Build Service instance',
  description:
    'Update the configuration of this Open Build Service instance.\n\nThis is for admins only.\n',
  request: {
    body: {
      description: 'Configuration definition.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              admin_email: z
                .string()
                .exactOptional()
                .openapi({ example: 'unconfigured@openbuildservice.org' }),
              allow_user_to_create_home_project: z
                .string()
                .exactOptional()
                .openapi({ example: 'on' }),
              anonymous: z.string().exactOptional().openapi({ example: 'on' }),
              change_password: z.string().exactOptional().openapi({ example: 'on' }),
              cleanup_empty_projects: z.string().exactOptional().openapi({ example: 'on' }),
              default_access_disabled: z.string().exactOptional().openapi({ example: 'off' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'The openSUSE Build Service is the public instance of the Open Build Service (OBS)',
                }),
              disable_publish_for_branches: z.string().exactOptional().openapi({ example: 'on' }),
              disallow_group_creation: z.string().exactOptional().openapi({ example: 'off' }),
              download_on_demand: z.string().exactOptional().openapi({ example: 'on' }),
              enforce_project_keys: z.string().exactOptional().openapi({ example: 'off' }),
              gravatar: z.string().exactOptional().openapi({ example: 'on' }),
              hide_private_options: z.string().exactOptional().openapi({ example: 'off' }),
              name: z.string().exactOptional().openapi({ example: 'private' }),
              obs_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://unconfigured.openbuildservice.org' }),
              registration: z.string().exactOptional().openapi({ example: 'allow' }),
              schedulers: z
                .object({
                  arch: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['armv7l', 'i586', 'x86_64'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z.string().exactOptional().openapi({ example: 'Open Build Service' }),
              tos_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://en.opensuse.org/Terms_of_site' }),
              unlisted_projects_filter: z.string().exactOptional().openapi({ example: '^home:.+' }),
              unlisted_projects_filter_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'home projects' }),
            })
            .openapi({ xml: { name: 'configuration' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              admin_email: z
                .string()
                .exactOptional()
                .openapi({ example: 'unconfigured@openbuildservice.org' }),
              allow_user_to_create_home_project: z
                .string()
                .exactOptional()
                .openapi({ example: 'on' }),
              anonymous: z.string().exactOptional().openapi({ example: 'on' }),
              change_password: z.string().exactOptional().openapi({ example: 'on' }),
              cleanup_empty_projects: z.string().exactOptional().openapi({ example: 'on' }),
              default_access_disabled: z.string().exactOptional().openapi({ example: 'off' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'The openSUSE Build Service is the public instance of the Open Build Service (OBS)',
                }),
              disable_publish_for_branches: z.string().exactOptional().openapi({ example: 'on' }),
              disallow_group_creation: z.string().exactOptional().openapi({ example: 'off' }),
              download_on_demand: z.string().exactOptional().openapi({ example: 'on' }),
              enforce_project_keys: z.string().exactOptional().openapi({ example: 'off' }),
              gravatar: z.string().exactOptional().openapi({ example: 'on' }),
              hide_private_options: z.string().exactOptional().openapi({ example: 'off' }),
              name: z.string().exactOptional().openapi({ example: 'private' }),
              obs_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://unconfigured.openbuildservice.org' }),
              registration: z.string().exactOptional().openapi({ example: 'allow' }),
              schedulers: z
                .object({
                  arch: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ example: ['armv7l', 'i586', 'x86_64'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z.string().exactOptional().openapi({ example: 'Open Build Service' }),
              tos_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://en.opensuse.org/Terms_of_site' }),
              unlisted_projects_filter: z.string().exactOptional().openapi({ example: '^home:.+' }),
              unlisted_projects_filter_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'home projects' }),
            })
            .openapi({ xml: { name: 'configuration' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nIn the example below, _default_access_disabled_ is one of the possible configuration options which is set in the options.yml file.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'no_permission_to_change',
            summary:
              'The api has a different value for default_access_disabled configured in options.yml file. Remove it there first',
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getDistributionsRoute = createRoute({
  method: 'get',
  path: '/distributions',
  tags: ['Distributions'],
  summary: 'List all distributions.',
  description:
    'List all distributions that can be build against.\nThis will not list distributions that are available via [interconnect](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.concepts.html#id-1.5.10.3.5).\nCheck /distributions/include_remotes for this.\n',
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [distributions.rng](../schema/distributions.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              distribution: z
                .array(
                  z
                    .object({
                      architecture: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ example: ['i586', 'x86_64'] }),
                      icon: z
                        .array(
                          z
                            .object({
                              height: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              width: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              height: 8,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 8,
                            },
                            {
                              height: 16,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 16,
                            },
                          ],
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 16626, xml: { attribute: true } }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'http://www.opensuse.org/' }),
                      name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
                      project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
                      reponame: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'openSUSE_Tumbleweed' }),
                      repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
                      vendor: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'opensuse', xml: { attribute: true } }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'distributions' }, required: [] }),
          example: {
            distribution: [
              {
                architecture: ['i586', 'x86_64'],
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 16,
                  },
                ],
                id: 16626,
                link: 'http://www.opensuse.org/',
                name: 'openSUSE Tumbleweed',
                project: 'openSUSE:Factory',
                reponame: 'openSUSE_Tumbleweed',
                repository: 'snapshot',
                vendor: 'opensuse',
                version: 'Tumbleweed',
              },
              {
                architecture: 'x86_64',
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 16,
                  },
                ],
                id: 16629,
                link: 'http://www.opensuse.org/',
                name: 'openSUSE Leap 15.3',
                project: 'openSUSE:Leap:15.3',
                reponame: 'openSUSE_Leap_15.3',
                repository: 'standard',
                vendor: 'openSUSE',
                version: '15.3',
              },
              {
                architecture: ['i586', 'x86_64'],
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/fedora.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/fedora.png',
                    width: 16,
                  },
                ],
                id: 16731,
                link: 'http://www.fedoraproject.org/',
                name: 'Fedora 33',
                project: 'Fedora:33',
                reponame: 'Fedora_33',
                repository: 'standard',
                vendor: 'Fedora',
                version: '33',
              },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postDistributionsRoute = createRoute({
  method: 'post',
  path: '/distributions',
  tags: ['Distributions'],
  summary: 'Create a distribution.',
  description: 'Create a distribution.\n\nThis is only for admins.\n',
  request: {
    body: {
      description: 'Distribution definition',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              architecture: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['i586', 'x86_64'] }),
              icon: z
                .array(
                  z
                    .object({
                      height: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      width: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      height: 8,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 8,
                    },
                    {
                      height: 16,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 16,
                    },
                  ],
                }),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 16626, xml: { attribute: true } }),
              link: z.string().exactOptional().openapi({ example: 'http://www.opensuse.org/' }),
              name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
              project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
              reponame: z.string().exactOptional().openapi({ example: 'openSUSE_Tumbleweed' }),
              repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
              vendor: z
                .string()
                .exactOptional()
                .openapi({ example: 'opensuse', xml: { attribute: true } }),
              version: z
                .string()
                .exactOptional()
                .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'distribution' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [distribution.rng](../schema/distribution.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              architecture: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['i586', 'x86_64'] }),
              icon: z
                .array(
                  z
                    .object({
                      height: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      width: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      height: 8,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 8,
                    },
                    {
                      height: 16,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 16,
                    },
                  ],
                }),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 16626, xml: { attribute: true } }),
              link: z.string().exactOptional().openapi({ example: 'http://www.opensuse.org/' }),
              name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
              project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
              reponame: z.string().exactOptional().openapi({ example: 'openSUSE_Tumbleweed' }),
              repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
              vendor: z
                .string()
                .exactOptional()
                .openapi({ example: 'opensuse', xml: { attribute: true } }),
              version: z
                .string()
                .exactOptional()
                .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'distribution' }, required: [] }),
          example: {
            distribution: [
              {
                architecture: ['i586', 'x86_64'],
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 16,
                  },
                ],
                id: 16626,
                link: 'http://www.opensuse.org/',
                name: 'openSUSE Tumbleweed',
                project: 'openSUSE:Factory',
                reponame: 'openSUSE_Tumbleweed',
                repository: 'snapshot',
                vendor: 'opensuse',
                version: 'Tumbleweed',
              },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putDistributionsBulkReplaceRoute = createRoute({
  method: 'put',
  path: '/distributions/bulk_replace',
  tags: ['Distributions'],
  summary: 'Bulk replace all distributions.',
  description: 'Bulk replace all distributions.\n\nThis is only for admins.\n',
  request: {
    body: {
      description: 'Distributions definition',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              distribution: z
                .array(
                  z
                    .object({
                      architecture: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ example: ['i586', 'x86_64'] }),
                      icon: z
                        .array(
                          z
                            .object({
                              height: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              width: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              height: 8,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 8,
                            },
                            {
                              height: 16,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 16,
                            },
                          ],
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 16626, xml: { attribute: true } }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'http://www.opensuse.org/' }),
                      name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
                      project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
                      reponame: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'openSUSE_Tumbleweed' }),
                      repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
                      vendor: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'opensuse', xml: { attribute: true } }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'distributions' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK. The Request has succeeded.\n\nXML Schema used for body validation: [distributions.rng](../schema/distributions.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Bad Request.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'validation_failed',
            summary:
              'distributions validation error: 40:0: ERROR: Expecting an element name, got nothing',
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getDistributionsIncludeRemotesRoute = createRoute({
  method: 'get',
  path: '/distributions/include_remotes',
  tags: ['Distributions'],
  summary: 'List all distributions including remote.',
  description:
    'List all distributions that can be build against, including the ones provided by the interconnect.\n',
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [distributions.rng](../schema/distributions.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              distribution: z
                .array(
                  z
                    .object({
                      architecture: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ example: ['i586', 'x86_64'] }),
                      icon: z
                        .array(
                          z
                            .object({
                              height: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              width: z
                                .int()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              height: 8,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 8,
                            },
                            {
                              height: 16,
                              url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                              width: 16,
                            },
                          ],
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 16626, xml: { attribute: true } }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'http://www.opensuse.org/' }),
                      name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
                      project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
                      reponame: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'openSUSE_Tumbleweed' }),
                      repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
                      vendor: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'opensuse', xml: { attribute: true } }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'distributions' }, required: [] }),
          example: {
            distribution: [
              {
                architecture: ['i586', 'x86_64'],
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 16,
                  },
                ],
                id: 16626,
                link: 'http://www.opensuse.org/',
                name: 'openSUSE Tumbleweed',
                project: 'openSUSE:Factory',
                reponame: 'openSUSE_Tumbleweed',
                repository: 'snapshot',
                vendor: 'opensuse',
                version: 'Tumbleweed',
              },
              {
                architecture: 'x86_64',
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                    width: 16,
                  },
                ],
                id: 16629,
                link: 'http://www.opensuse.org/',
                name: 'openSUSE Leap 15.3',
                project: 'openSUSE:Leap:15.3',
                reponame: 'openSUSE_Leap_15.3',
                repository: 'standard',
                vendor: 'openSUSE',
                version: '15.3',
              },
              {
                architecture: ['i586', 'x86_64'],
                icon: [
                  {
                    height: 8,
                    url: 'https://static.opensuse.org/distributions/logos/fedora.png',
                    width: 8,
                  },
                  {
                    height: 16,
                    url: 'https://static.opensuse.org/distributions/logos/fedora.png',
                    width: 16,
                  },
                ],
                id: 16731,
                link: 'http://www.fedoraproject.org/',
                name: 'Fedora 33',
                project: 'Fedora:33',
                reponame: 'Fedora_33',
                repository: 'standard',
                vendor: 'Fedora',
                version: '33',
              },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getDistributionsDistributionIdRoute = createRoute({
  method: 'get',
  path: '/distributions/{distribution_id}',
  tags: ['Distributions'],
  summary: 'Show a distribution.',
  description: 'Show a distribution that can be build against.\n',
  request: {
    params: z.object({
      distribution_id: z
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
            description: 'The id of the distribution',
            example: 16626,
            in: 'path',
            name: 'distribution_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeded.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              architecture: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['i586', 'x86_64'] }),
              icon: z
                .array(
                  z
                    .object({
                      height: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      width: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      height: 8,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 8,
                    },
                    {
                      height: 16,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 16,
                    },
                  ],
                }),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 16626, xml: { attribute: true } }),
              link: z.string().exactOptional().openapi({ example: 'http://www.opensuse.org/' }),
              name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
              project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
              reponame: z.string().exactOptional().openapi({ example: 'openSUSE_Tumbleweed' }),
              repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
              vendor: z
                .string()
                .exactOptional()
                .openapi({ example: 'opensuse', xml: { attribute: true } }),
              version: z
                .string()
                .exactOptional()
                .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'distribution' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Distribution with 'id'=0" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putDistributionsDistributionIdRoute = createRoute({
  method: 'put',
  path: '/distributions/{distribution_id}',
  tags: ['Distributions'],
  summary: 'Update a distribution.',
  description: 'Update the data of a distribution.',
  request: {
    params: z.object({
      distribution_id: z
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
            description: 'The id of the distribution',
            example: 16626,
            in: 'path',
            name: 'distribution_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Distribution definition',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              architecture: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['i586', 'x86_64'] }),
              icon: z
                .array(
                  z
                    .object({
                      height: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      width: z
                        .int()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      height: 8,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 8,
                    },
                    {
                      height: 16,
                      url: 'https://static.opensuse.org/distributions/logos/opensuse.png',
                      width: 16,
                    },
                  ],
                }),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 16626, xml: { attribute: true } }),
              link: z.string().exactOptional().openapi({ example: 'http://www.opensuse.org/' }),
              name: z.string().exactOptional().openapi({ example: 'openSUSE Tumbleweed' }),
              project: z.string().exactOptional().openapi({ example: 'openSUSE:Factory' }),
              reponame: z.string().exactOptional().openapi({ example: 'openSUSE_Tumbleweed' }),
              repository: z.string().exactOptional().openapi({ example: 'snapshot' }),
              vendor: z
                .string()
                .exactOptional()
                .openapi({ example: 'opensuse', xml: { attribute: true } }),
              version: z
                .string()
                .exactOptional()
                .openapi({ example: 'Tumbleweed', xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'distribution' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK. The Request has succeeded.\n\nXML Schema used for body validation: [distribution.rng](../schema/distribution.rng)\n',
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Distribution with 'id'=0" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteDistributionsDistributionIdRoute = createRoute({
  method: 'delete',
  path: '/distributions/{distribution_id}',
  tags: ['Distributions'],
  summary: 'Delete a distribution.',
  description: 'Delete a distribution.\n\nThis is only for admins.\n',
  request: {
    params: z.object({
      distribution_id: z
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
            description: 'The id of the distribution',
            example: 16626,
            in: 'path',
            name: 'distribution_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeded.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Distribution with 'id'=0" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getGroupRoute = createRoute({
  method: 'get',
  path: '/group',
  tags: ['Groups'],
  summary: 'List available groups.',
  description: 'List available groups.',
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { count: '2', entry: [{ name: 'group-admin' }, { name: 'group-test' }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getGroupGroupTitleRoute = createRoute({
  method: 'get',
  path: '/group/{group_title}',
  tags: ['Groups'],
  summary: 'Read group data.',
  description: 'Read group data.',
  request: {
    params: z.object({
      group_title: z
        .string()
        .openapi({
          param: {
            description: 'Group title',
            example: 'group-test',
            in: 'path',
            name: 'group_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [group.rng](../schema/group.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              maintainer: z
                .array(
                  z
                    .object({
                      userid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user-test', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              person: z
                .array(
                  z
                    .object({
                      userid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user-test', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ xml: { wrapped: true } }),
              title: z.string().exactOptional().openapi({ example: 'group-test' }),
            })
            .openapi({ xml: { name: 'group' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Group 'group-testd'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putGroupGroupTitleRoute = createRoute({
  method: 'put',
  path: '/group/{group_title}',
  tags: ['Groups'],
  summary: 'Write group data.',
  description: 'Write group data.',
  request: {
    params: z.object({
      group_title: z
        .string()
        .openapi({
          param: {
            description: 'Group title',
            example: 'group-test',
            in: 'path',
            name: 'group_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Group definition.\n\nXML Schema used for body validation: [group.rng](../schema/group.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              maintainer: z
                .array(
                  z
                    .object({
                      userid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user-test', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              person: z
                .array(
                  z
                    .object({
                      userid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'user-test', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ xml: { wrapped: true } }),
              title: z.string().exactOptional().openapi({ example: 'group-test' }),
            })
            .openapi({ xml: { name: 'group' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Group 'group-testd'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postGroupGroupTitleRoute = createRoute({
  method: 'post',
  path: '/group/{group_title}',
  tags: ['Groups'],
  summary: 'Modify group data.',
  description: 'Modify group data.',
  request: {
    params: z.object({
      group_title: z
        .string()
        .openapi({
          param: {
            description: 'Group title',
            example: 'group-test',
            in: 'path',
            name: 'group_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cmd: z
        .enum(['add_user', 'remove_user', 'set_email'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Command to be executed. It takes one of these available values:\n* `add_user`: add a user to a group. `userid` query parameter must be also used.\n* `remove_user`: remove a user from a group. `userid` query parameter must be also used.\n* `set_email`: set email adress of group. `email` query parameter must be also used.\n',
            in: 'query',
            name: 'cmd',
            schema: { enum: ['add_user', 'remove_user', 'set_email'], type: 'string' },
            required: false,
          },
        }),
      userid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User login. Used with `cmd=add_user` or `cmd=remove_user`.',
            in: 'query',
            name: 'userid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Group email. Used with `cmd=set_email`.',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Bad Request.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'bad_request', summary: 'cmd must be set to add_user or remove_user' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            group_not_found: {
              summary: 'Group Not Found',
              value: { code: 'not_found', summary: "Couldn't find Group 'group-testd'" },
            },
            user_not_found: {
              summary: 'User Not Found',
              value: { code: 'not_found', summary: "Couldn't find User with login = user_test" },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteGroupGroupTitleRoute = createRoute({
  method: 'delete',
  path: '/group/{group_title}',
  tags: ['Groups'],
  summary: 'Delete a group.',
  description: 'Delete a group.',
  request: {
    params: z.object({
      group_title: z
        .string()
        .openapi({
          param: {
            description: 'Group title',
            example: 'group-test',
            in: 'path',
            name: 'group_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Group 'group-testd'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getIssueTrackersRoute = createRoute({
  method: 'get',
  path: '/issue_trackers',
  tags: ['Issue Trackers'],
  summary: 'Get the list of issue trackers.',
  description: 'Get the list of issue trackers.',
  responses: {
    200: {
      description:
        'List of issue trackers.\n\nXML Schema used for body validation: [issue_trackers.rng](../schema/issue_trackers.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .array(
              z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'openSUSE Feature Database' }),
                  'enable-fetch': z.string().exactOptional().openapi({ example: 'false' }),
                  kind: z.string().exactOptional().openapi({ example: 'fate' }),
                  label: z.string().exactOptional().openapi({ example: 'fate#@@@' }),
                  name: z.string().exactOptional().openapi({ example: 'fate' }),
                  regex: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '(?:fate|Fate|FATE)\\s*#\\s*(\\d+)' }),
                  'show-url': z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'https://features.opensuse.org/@@@' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'https://features.opensuse.org/' }),
                })
                .openapi({ xml: { name: 'issue-tracker' }, required: [] }),
            )
            .openapi({ xml: { name: 'issue-trackers', wrapped: true } }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postIssueTrackersRoute = createRoute({
  method: 'post',
  path: '/issue_trackers',
  tags: ['Issue Trackers'],
  summary: 'Create an issue tracker.',
  description: 'Create an issue tracker.',
  request: {
    body: {
      description:
        'Issue tracker definition.\n\nXML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'openSUSE Feature Database' }),
              'enable-fetch': z.string().exactOptional().openapi({ example: 'false' }),
              kind: z.string().exactOptional().openapi({ example: 'fate' }),
              label: z.string().exactOptional().openapi({ example: 'fate#@@@' }),
              name: z.string().exactOptional().openapi({ example: 'fate' }),
              regex: z
                .string()
                .exactOptional()
                .openapi({ example: '(?:fate|Fate|FATE)\\s*#\\s*(\\d+)' }),
              'show-url': z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/@@@' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/' }),
            })
            .openapi({ xml: { name: 'issue-tracker' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description:
        'Validation failed.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Empty Body',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for issue_tracker',
              },
            },
            wrong_xml_element: {
              summary: 'Wrong XML Element',
              value: {
                code: 'validation_failed',
                summary:
                  'issue_tracker validation error: 1:0: ERROR: Expecting element issue-tracker, got foo',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getIssueTrackersIssueTrackerNameRoute = createRoute({
  method: 'get',
  path: '/issue_trackers/{issue_tracker_name}',
  tags: ['Issue Trackers'],
  summary: 'Show an issue tracker.',
  description: 'Show an issue tracker.',
  request: {
    params: z.object({
      issue_tracker_name: z
        .string()
        .openapi({
          param: {
            description: 'Issue tracker name',
            example: 'fate',
            in: 'path',
            name: 'issue_tracker_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Issue tracker definition.\n\nXML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'openSUSE Feature Database' }),
              'enable-fetch': z.string().exactOptional().openapi({ example: 'false' }),
              kind: z.string().exactOptional().openapi({ example: 'fate' }),
              label: z.string().exactOptional().openapi({ example: 'fate#@@@' }),
              name: z.string().exactOptional().openapi({ example: 'fate' }),
              regex: z
                .string()
                .exactOptional()
                .openapi({ example: '(?:fate|Fate|FATE)\\s*#\\s*(\\d+)' }),
              'show-url': z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/@@@' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/' }),
            })
            .openapi({ xml: { name: 'issue-tracker' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not Found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Unable to find issue tracker 'foo'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putIssueTrackersIssueTrackerNameRoute = createRoute({
  method: 'put',
  path: '/issue_trackers/{issue_tracker_name}',
  tags: ['Issue Trackers'],
  summary: 'Update or create an issue tracker.',
  description: 'Update the issue tracker given as path parameter. If it is not found, create it.',
  request: {
    params: z.object({
      issue_tracker_name: z
        .string()
        .openapi({
          param: {
            description: 'Issue tracker name',
            example: 'fate',
            in: 'path',
            name: 'issue_tracker_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Issue tracker definition.\n\nXML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'openSUSE Feature Database' }),
              'enable-fetch': z.string().exactOptional().openapi({ example: 'false' }),
              kind: z.string().exactOptional().openapi({ example: 'fate' }),
              label: z.string().exactOptional().openapi({ example: 'fate#@@@' }),
              name: z.string().exactOptional().openapi({ example: 'fate' }),
              regex: z
                .string()
                .exactOptional()
                .openapi({ example: '(?:fate|Fate|FATE)\\s*#\\s*(\\d+)' }),
              'show-url': z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/@@@' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/' }),
            })
            .openapi({ xml: { name: 'issue-tracker' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description:
        'Validation failed.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            empty_body: {
              summary: 'Empty Body',
              value: {
                code: 'validation_failed',
                summary: 'Document is empty, not allowed for issue_tracker',
              },
            },
            wrong_xml_element: {
              summary: 'Wrong XML Element',
              value: {
                code: 'validation_failed',
                summary:
                  'issue_tracker validation error: 1:0: ERROR: Expecting element issue-tracker, got foo',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteIssueTrackersIssueTrackerNameRoute = createRoute({
  method: 'delete',
  path: '/issue_trackers/{issue_tracker_name}',
  tags: ['Issue Trackers'],
  summary: 'Delete an issue tracker.',
  description: 'Delete an issue tracker.',
  request: {
    params: z.object({
      issue_tracker_name: z
        .string()
        .openapi({
          param: {
            description: 'Issue tracker name',
            example: 'fate',
            in: 'path',
            name: 'issue_tracker_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not Found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Unable to find issue tracker 'foo'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getIssueTrackersIssueTrackerNameIssuesIssueNameRoute = createRoute({
  method: 'get',
  path: '/issue_trackers/{issue_tracker_name}/issues/{issue_name}',
  tags: ['Issue Trackers'],
  summary: 'Show an issue of an issue tracker.',
  description: 'Show an issue of an issue tracker.',
  request: {
    params: z.object({
      issue_tracker_name: z
        .string()
        .openapi({
          param: {
            description: 'Issue tracker name',
            example: 'fate',
            in: 'path',
            name: 'issue_tracker_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issue_name: z
        .string()
        .openapi({
          param: {
            description: 'Issue name.',
            example: 12345,
            in: 'path',
            name: 'issue_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Issue definition.\n\nXML Schema used for body validation: [issue.rng](../schema/issue.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              created_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-01-18 19:17:51 UTC' }),
              label: z.string().exactOptional().openapi({ example: 'fate#12345' }),
              name: z.string().exactOptional().openapi({ example: 12345 }),
              tracker: z.string().exactOptional().openapi({ example: 'fate' }),
              updated_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-01-18 19:17:51 UTC' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://features.opensuse.org/12345' }),
            })
            .openapi({ xml: { name: 'issue' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not Found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'issue_tracker_not_found',
            summary: "Error: Issue Tracker 'foo' not found.",
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPersonRoute = createRoute({
  method: 'get',
  path: '/person',
  tags: ['Person'],
  summary: 'List all people.',
  description: 'List all people.\n',
  request: {
    query: z.object({
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A prefix to filter the people to look for',
            example: 'Adm',
            in: 'query',
            name: 'prefix',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            count: '9',
            entry: [
              { name: 'Admin' },
              { name: '_nobody_' },
              { name: 'Iggy' },
              { name: 'user_1' },
              { name: 'repo-checker' },
              { name: 'reviewhero' },
              { name: 'user_2' },
              { name: 'user_3' },
              { name: 'Requestor' },
            ],
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postPersonRoute = createRoute({
  method: 'post',
  path: '/person',
  tags: ['Person'],
  summary: 'Executes a command on the person endpoint.',
  description:
    "Allows executing command on the person endpoint.\n\nAs of now, the only command allowed is 'register'.\n",
  request: {
    query: z.object({
      cmd: z
        .literal('register')
        .openapi({
          param: {
            description: 'The command to execute',
            example: 'register',
            in: 'query',
            name: 'cmd',
            required: true,
            schema: { enum: ['register'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The data for the person to register.',
      content: {
        'application/xml': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'janedoe@example.com' }),
              login: z.string().exactOptional().openapi({ example: 'jane' }),
              note: z
                .string()
                .exactOptional()
                .openapi({ example: 'Jane works in the Engineering team' }),
              password: z.string().exactOptional().openapi({ example: 'superpassword123' }),
              realname: z.string().exactOptional().openapi({ example: 'Jane Doe' }),
              state: z.string().exactOptional().openapi({ example: 'confirmed' }),
            })
            .openapi({ xml: { name: 'unregisteredperson' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description:
        'Bad request.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Bad Request': {
              value: {
                code: 'err_register_save',
                summary:
                  "Could not save the registration, details: Login is the name of an already existing user and Password can't be blank.",
              },
            },
            'Unknown Command': {
              value: { code: 'unknown_command', summary: "Allowed command is 'register'." },
            },
          },
        },
      },
    },
  },
})

export const postPersonRegisterRoute = createRoute({
  method: 'post',
  path: '/person/register',
  tags: ['Person'],
  summary: 'Registers a new person',
  request: {
    body: {
      description: 'Data for the person to register.',
      content: {
        'application/xml': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'janedoe@example.com' }),
              login: z.string().exactOptional().openapi({ example: 'jane' }),
              note: z
                .string()
                .exactOptional()
                .openapi({ example: 'Jane works in the Engineering team' }),
              password: z.string().exactOptional().openapi({ example: 'superpassword123' }),
              realname: z.string().exactOptional().openapi({ example: 'Jane Doe' }),
              state: z.string().exactOptional().openapi({ example: 'confirmed' }),
            })
            .openapi({ xml: { name: 'unregisteredperson' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'permission_denied',
            summary:
              'User accounts can not be registered via OBS when in LDAP mode. Please refer\nto your LDAP server to create new users.\n',
          },
        },
      },
    },
  },
})

export const getPersonLoginRoute = createRoute({
  method: 'get',
  path: '/person/{login}',
  tags: ['Person'],
  summary: 'Get details about a person',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\nXML Schema used for body validation: [user.rng](../schema/user.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              email: z
                .string()
                .exactOptional()
                .openapi({ example: 'unconfigured@openbuildservice.org' }),
              globalrole: z.string().exactOptional(),
              ignore_auth_services: z.boolean().exactOptional(),
              login: z.string().exactOptional().openapi({ example: 'user_1' }),
              realname: z.string().exactOptional().openapi({ example: 'User1' }),
              state: z.string().exactOptional().openapi({ example: 'confirmed' }),
              watchlist: z
                .array(
                  z
                    .object({
                      project: z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ xml: { name: 'watchlist' } }),
            })
            .openapi({ xml: { name: 'person' }, required: [] }),
          example: {
            email: 'root@localhost',
            globalrole: 'Admin',
            ignore_auth_services: false,
            login: 'Admin',
            realname: 'OBS Instance Superuser',
            state: 'confirmed',
            watchlist: [{ project: { name: 'home:Admin' } }],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find User with login = <login>" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putPersonLoginRoute = createRoute({
  method: 'put',
  path: '/person/{login}',
  tags: ['Person'],
  summary: 'Update person',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new data for the person referred in the login parameter.',
      content: {
        'application/xml': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'janedoe@example.com' }),
              login: z.string().exactOptional().openapi({ example: 'jane' }),
              note: z
                .string()
                .exactOptional()
                .openapi({ example: 'Jane works in the Engineering team' }),
              password: z.string().exactOptional().openapi({ example: 'superpassword123' }),
              realname: z.string().exactOptional().openapi({ example: 'Jane Doe' }),
              state: z.string().exactOptional().openapi({ example: 'confirmed' }),
            })
            .openapi({ xml: { name: 'unregisteredperson' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description:
        'Bad request.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Subaccount chaining': {
              value: {
                code: 'subaccount_chaining',
                summary: 'A subaccount can not be assigned to subaccount <login>',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Change user info not permitted': {
              value: {
                code: 'change_userinfo_no_permission',
                summary: 'no permission to change userinfo for user <login>',
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'password_empty', summary: 'Requested non-existing user' },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postPersonLoginRoute = createRoute({
  method: 'post',
  path: '/person/{login}',
  tags: ['Person'],
  summary: 'Perform changes on a registered person',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cmd: z
        .enum(['change_password', 'lock', 'delete'])
        .openapi({
          param: {
            description: 'The command to execute against the provided person.',
            example: 'change_password',
            in: 'query',
            name: 'cmd',
            required: true,
            schema: { enum: ['change_password', 'lock', 'delete'], type: 'string' },
          },
        }),
    }),
    body: {
      description: "The password in plain text when the cmd param is 'change_password'.",
      content: { 'text/plain': { schema: z.string() } },
    },
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\nXML Schema used for body validation: [api_response.xsd](../schema/api_response.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad request.\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Bad Request': {
              value: {
                code: 'err_register_save',
                summary:
                  "Could not save the registration, details: Login is the name of an already existing user and Password can't be blank.",
              },
            },
            'Unknown Command': {
              value: { code: 'unknown_command', summary: "Allowed commands are '<some command>'." },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            update_user_not_authorized: {
              value: {
                code: 'update_user_not_authorized',
                summary: 'You are not authorized to update this User.',
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find User with login = <login>" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPersonLoginGroupRoute = createRoute({
  method: 'get',
  path: '/person/{login}/group',
  tags: ['Person'],
  summary: 'List the groups of a person',
  description: 'List the groups the person belongs to.',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            count: '2',
            entry: [{ name: 'factory-maintainers' }, { name: 'obs-developers' }],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not Found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find User with login = fake" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPersonLoginTokenRoute = createRoute({
  method: 'get',
  path: '/person/{login}/token',
  tags: ['Person'],
  summary: 'List the authentication tokens of a person.',
  description: 'List the authentication tokens of a person.',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [tokenlist.rng](../schema/tokenlist.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      kind: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      string: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            count: 2,
            entry: [
              { id: 3, kind: 'rss', string: 'FK49K39DKK' },
              {
                id: 25,
                kind: 'release',
                package: 'ghcz',
                project: 'devel:languages:haskell',
                string: '4T04JGI691',
              },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'view_user_not_authorized',
            summary: 'You are not authorized to view this User.',
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postPersonLoginTokenRoute = createRoute({
  method: 'post',
  path: '/person/{login}/token',
  tags: ['Person'],
  summary: 'Create a new authentication token for a person.',
  description:
    "Create a new authentication token for a person.\n\nThe token may be limited to a specific package. In this case the query parameters\n`project` and `package` should be provided.\n\nWith an empty request body, a token of the default kind 'runservice' is created.\n",
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Project name. Should be provided, together with the package query parameter,\nto limit the token to a specific package.\n',
            example: 'home:hans',
            in: 'query',
            name: 'project',
            schema: { type: 'string' },
            required: false,
          },
        }),
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Package name. Should be provided, together with the project query parameter,\nto limit the token to a specific package.\n',
            example: 'gchz',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      operation: z
        .enum(['runservice', 'rebuild', 'release'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Operation indicates the kind of token that is going to be created.\n\nWhen operation is not specified, 'runservice' is the default value.\n",
            example: 'runservice',
            in: 'query',
            name: 'operation',
            schema: { enum: ['runservice', 'rebuild', 'release'], type: 'string' },
            required: false,
          },
        }),
      scm_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "**(Beta/Unstable)**\n\nSCM token used in OBS workflows to report back the workflow status, when the operation is workflow.\n\nIt's normally possible to generate SCM tokens directly on the SCM's website like GitHub or GitLab.\n",
            example: 'ghp_fake_token_123',
            in: 'query',
            name: 'scm_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n\n**NOTE:** This is an example of a valid response. It should include the attribute \'name\'\nin every \'data\' tag, which is missing in the example using the schema.\n```\n  <status code="ok">\n    <summary>Ok</summary>\n    <data name="token">i6iF4M5cn</data>\n    <data name="id">5</data>\n  </status>\n```\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', data: ['i6iF4M5cn', 5], summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'update_user_not_authorized',
            summary: 'You are not authorized to update this User.',
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deletePersonLoginTokenIdRoute = createRoute({
  method: 'delete',
  path: '/person/{login}/token/{id}',
  tags: ['Person'],
  summary: 'Delete a token of a person.',
  description: 'Delete a token of the specified person.',
  request: {
    params: z.object({
      login: z
        .string()
        .openapi({
          param: {
            description: 'Person login.',
            example: 'Admin',
            in: 'path',
            name: 'login',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the token to be removed.',
            example: 3,
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
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'update_user_not_authorized',
            summary: 'You are not authorized to update this User.',
          },
        },
      },
    },
    404: {
      description:
        'Not Found.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'not_found',
            summary: "Couldn't find Token with 'id'=33 [WHERE `tokens`.`user_id` = ?]",
          },
        },
      },
    },
  },
})

export const getPublishedRoute = createRoute({
  method: 'get',
  path: '/published',
  tags: ['Published Binaries'],
  summary: 'List all the published projects.',
  description: 'Get a list of all the projects, all of them are considered published.\n',
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            entry: [
              { name: 'OBS:Server:Unstable' },
              { name: 'devel:languages:ruby' },
              { name: 'openSUSE:Maintenance:9810' },
              { name: 'zypp:plugins' },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPublishedProjectNameRoute = createRoute({
  method: 'get',
  path: '/published/{project_name}',
  tags: ['Published Binaries'],
  summary: 'List the repositories of a project with published binaries',
  description:
    'Get a list of the repositories of the project that already have published binaries.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            entry: [
              { name: 'SLE_15_SP3' },
              { name: 'containers' },
              { name: 'images' },
              { name: 'openSUSE_15.2' },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'download_binary_no_permission',
            summary: 'No permission for binaries from project home:Admin',
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Project" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPublishedProjectNameRepositoryNameRoute = createRoute({
  method: 'get',
  path: '/published/{project_name}/{repository_name}',
  tags: ['Published Binaries'],
  summary:
    'List the content of the directory tree where the binaries are published at the level project/repository.',
  description:
    "Get a list of architectures' directories and other files (.repo, .ymp, etc.) present at the level project/repository of the directory tree where the published binaries are stored.\n",
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            entry: [
              { name: 'OBS:Server:Unstable.repo' },
              { name: 'OBS_Server.ymp' },
              { name: 'aarch64' },
              { name: 'x86_64' },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'download_binary_no_permission',
            summary: 'No permission for binaries from project home:Admin',
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Project" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPublishedProjectNameRepositoryNameArchitectureNameRoute = createRoute({
  method: 'get',
  path: '/published/{project_name}/{repository_name}/{architecture_name}',
  tags: ['Published Binaries'],
  summary:
    'List the content of the directory tree where the binaries are published at the level project/repository/architecture.',
  description:
    'Get a list of binaries and other files present at the level project/repository/architecture of the directory tree as a result of successful building and publishing processes.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: {
            entry: [
              { name: 'apache2-mod_auth_memcookie-1.1.1-lp152.2.1.x86_64.rpm' },
              {
                name: 'obs-api-testsuite-rspec-2.11~alpha.20200618T200341.d42d8310aa-lp152.10515.1.x86_64.rpm',
              },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'download_binary_no_permission',
            summary: 'No permission for binaries from project home:Admin',
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find Project" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRoute = createRoute(
  {
    method: 'get',
    path: '/published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}',
    tags: ['Published Binaries'],
    summary: 'Return the binary file itself.',
    description:
      "Allow to download the binary file that was published and stored under the directory given by project/repository/architecture/.\nCan response with Media Types like application/x-rpm, text/xml, etc.\nNOTE: Use this only if you absolutely have to, as it doesn't use the redirector.\n",
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        binary_filename: z
          .string()
          .openapi({
            param: {
              description: 'Binary filename',
              example: 'ctris-0.42.1-8.1.x86_64.rpm',
              in: 'path',
              name: 'binary_filename',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
          'text/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      403: {
        description:
          'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: 'download_binary_no_permission',
              summary: 'No permission for binaries from project home:Admin',
            },
          },
        },
      },
      404: {
        description: 'Not Found.',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              NoSuchFile: {
                value: { code: 404, details: '404 no such file', summary: 'no such file' },
              },
              NotFound: { value: { code: 'not_found', summary: "Couldn't find Project" } },
            },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  },
)

export const getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRoute =
  createRoute({
    method: 'get',
    path: '/published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}?view=ymp',
    tags: ['Published Binaries'],
    summary:
      'Generate a ymp pattern that includes the needed repositories to install the given binary.',
    description:
      'Generate a ymp pattern, which contains the list of packages needed for intalling certain software without having to create dependencies between them.\nRead more about patterns [in this tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial#Create_Patterns).\n',
    request: {
      params: z.object({
        project_name: z
          .string()
          .openapi({
            param: {
              description: 'Project name',
              example: 'home:Admin',
              in: 'path',
              name: 'project_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        repository_name: z
          .string()
          .openapi({
            param: {
              description: 'Repository name',
              example: 'openSUSE_Tumbleweed',
              in: 'path',
              name: 'repository_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        architecture_name: z
          .string()
          .openapi({
            param: {
              description: 'Architecture name',
              example: 'x86_64',
              in: 'path',
              name: 'architecture_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        binary_filename: z
          .string()
          .openapi({
            param: {
              description: 'Binary filename',
              example: 'ctris-0.42.1-8.1.x86_64.rpm',
              in: 'path',
              name: 'binary_filename',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK.',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                group: z
                  .object({
                    distversion: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                    repositories: z
                      .object({
                        repository: z
                          .array(
                            z
                              .object({
                                description: z.string().exactOptional(),
                                name: z.string().exactOptional(),
                                recommended: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ xml: { attribute: true } }),
                                summary: z.string().exactOptional(),
                                url: z.string().exactOptional(),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    software: z
                      .object({
                        item: z
                          .object({
                            description: z.string().exactOptional(),
                            name: z.string().exactOptional(),
                            summary: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                xmlns: z
                  .string()
                  .exactOptional()
                  .openapi({
                    xml: {
                      attribute: true,
                      example: 'http://opensuse.org/Standards/One_Click_Install',
                    },
                  }),
                'xmlns:os': z
                  .string()
                  .exactOptional()
                  .openapi({
                    xml: {
                      attribute: true,
                      example: 'http://opensuse.org/Standards/One_Click_Install',
                    },
                  }),
              })
              .openapi({ xml: { name: 'metapackage' }, required: [] }),
            example: {
              group: {
                distversion: 'openSUSEsLeap 15.2',
                repositories: {
                  repository: [
                    {
                      description:
                        'These are the developer versions of the tools for the Open Build Service project',
                      name: 'OBS:Server:Unstable',
                      recommended: true,
                      summary: 'Developer versions of the Open Build Service Server',
                      url: 'https://download.opensuse.org/repositories/OBS:/Server:/Unstable/openSUSE_15.2',
                    },
                    {
                      description: 'openSUSE Leap borrows packages from SLE for the base system',
                      name: 'openSUSE:Leap:15.2',
                      recommended: false,
                      summary: 'openSUSE Leap 15.2',
                      url: 'http://download.opensuse.org/distribution/leap/15.2/repo/oss',
                    },
                  ],
                },
                software: {
                  item: {
                    description: 'This package provides debug information for package virt-v2v',
                    name: 'virt-v2v-debuginfo',
                    summary: 'Debug information for package virt-v2v',
                  },
                },
              },
              xmlns: 'http://opensuse.org/Standards/One_Click_Install',
              'xmlns:os': 'http://opensuse.org/Standards/One_Click_Install',
            },
          },
        },
      },
      401: {
        description:
          'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            examples: {
              anonymous_user: {
                summary: 'Anonymous User',
                value: {
                  code: 'anonymous_user',
                  summary: 'Anonymous user is not allowed here - please login',
                },
              },
              authentication_required: {
                summary: 'Authentication Required',
                value: {
                  code: 'authentication_required',
                  summary: "Unknown user 'Admin' or invalid password",
                },
              },
            },
          },
        },
      },
      403: {
        description:
          'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: {
              code: 'download_binary_no_permission',
              summary: 'No permission for binaries from project home:Admin',
            },
          },
        },
      },
      404: {
        description: 'Not Found.',
        content: {
          'application/xml; charset=utf-8': {
            schema: z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
                data: z.array(z.string()).exactOptional(),
                details: z.string().exactOptional(),
                summary: z.string().exactOptional(),
              })
              .openapi({ xml: { name: 'status' }, required: [] }),
            example: { code: 'not_found', summary: "Couldn't find Project" },
          },
        },
      },
    },
    security: [{ basic_authentication: [] }],
  })

export const getPublishedProjectNameRepositoryNameViewStatusRoute = createRoute({
  method: 'get',
  path: '/published/{project_name}/{repository_name}?view=status',
  tags: ['Published Binaries'],
  summary: 'Present information about the last publication of the pair project and repository.',
  description:
    'Get information about the build process (build id, start time, etc.) for the pair project and repository.\n',
  request: {
    params: z.object({
      project_name: z
        .string()
        .openapi({
          param: {
            description: 'Project name',
            example: 'home:Admin',
            in: 'path',
            name: 'project_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository_name: z
        .string()
        .openapi({
          param: {
            description: 'Repository name',
            example: 'openSUSE_Tumbleweed',
            in: 'path',
            name: 'repository_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      view: z
        .literal('status')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter to status in order to get details about the last publication.',
            example: 'status',
            in: 'query',
            name: 'view',
            schema: { enum: ['status'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The request has succeeded.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              buildid: z.int().exactOptional().openapi({ example: 1569496563 }),
              code: z
                .string()
                .exactOptional()
                .openapi({ example: 'succeeded', xml: { attribute: true } }),
              endtime: z.int().exactOptional().openapi({ example: 1617574611 }),
              starttime: z.int().exactOptional().openapi({ example: 1617574611 }),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'download_binary_no_permission',
            summary: 'No permission for binaries from project home:Admin',
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            project: { summary: "Couldn't find Project" },
            unknown: { value: { code: 'unknown' } },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getRequestRoute = createRoute({
  method: 'get',
  path: '/request',
  tags: ['Request'],
  summary: 'Get a simple directory listing of all requests',
  description: 'Get a simple directory listing of all requests',
  responses: {
    200: {
      description:
        'OK\n\nXML Schema used for body validation: [directory.xsd](../schema/directory.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          example: { entry: [{ name: 122 }, { name: 123 }] },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postRequestRoute = createRoute({
  method: 'post',
  path: '/request',
  tags: ['Request'],
  summary: 'Create a request',
  description: 'Create a request',
  request: {
    query: z.object({
      cmd: z
        .literal('create')
        .openapi({
          param: {
            description:
              'This endpoint will refuse the creation of a new request if this parameter is not set.',
            in: 'query',
            name: 'cmd',
            required: true,
            schema: { enum: ['create'], type: 'string' },
          },
        }),
      addrevision: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Ask the server to add revisions of the current sources to the request.',
            in: 'query',
            name: 'addrevision',
            schema: { enum: [1], type: 'string' },
            required: false,
          },
        }),
      ignore_delegate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enforce a new package instance in a project which has OBS:DelegateRequestTarget set',
            in: 'query',
            name: 'ignore_delegate',
            schema: { enum: [1], type: 'string' },
            required: false,
          },
        }),
      ignore_build_state: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Skip the build state check',
            in: 'query',
            name: 'ignore_build_state',
            schema: { enum: [1], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'Request XML\n\n**NOTE:** You cannot pass the request id in the xml. You can pass the history in the xml, but it will be simply ignored.\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                      rev: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 521, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creator: z
                .string()
                .exactOptional()
                .openapi({ example: 'foo-user', xml: { attribute: true } }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'A little version update' }),
              history: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Please review sources' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Request created' }),
                      when: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                      who: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 42, xml: { attribute: true } }),
              review: z
                .array(
                  z.union([
                    z
                      .object({
                        by_user: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_group: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-group', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_project: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_package: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-server', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  ]),
                )
                .exactOptional(),
              state: z
                .object({
                  comment: z.string().exactOptional().openapi({ example: 'allright' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'accepted', xml: { attribute: true } }),
                  when: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                  who: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'bar-user', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ xml: { name: 'request' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK.\n\nXML Schema used for body validation: [request.rng](../schema/request.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                      rev: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 521, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creator: z
                .string()
                .exactOptional()
                .openapi({ example: 'foo-user', xml: { attribute: true } }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'A little version update' }),
              history: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Please review sources' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Request created' }),
                      when: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                      who: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 42, xml: { attribute: true } }),
              review: z
                .array(
                  z.union([
                    z
                      .object({
                        by_user: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_group: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-group', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_project: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_package: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-server', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  ]),
                )
                .exactOptional(),
              state: z
                .object({
                  comment: z.string().exactOptional().openapi({ example: 'allright' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'accepted', xml: { attribute: true } }),
                  when: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                  who: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'bar-user', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ xml: { name: 'request' }, required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'expand_error',
            summary: 'The source of package test-project/test-package for revision 2 is broken',
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'create_bs_request_not_authorized',
            summary: 'You are not authorized to create this Bs request.',
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getRequestIdRoute = createRoute({
  method: 'get',
  path: '/request/{id}',
  tags: ['Request'],
  summary: 'Show details about a specified request.',
  description: 'Show details about a specified request.',
  request: {
    params: z.object({
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
            description: 'Id of the choosen request.',
            example: 743,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      withhistory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the request history in the results.',
            example: 1,
            in: 'query',
            name: 'withhistory',
            schema: { type: 'string' },
            required: false,
          },
        }),
      withfullhistory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Includes both, request and review history in the results.',
            example: 1,
            in: 'query',
            name: 'withfullhistory',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK.\n\nXML Schema used for body validation: [request.rng](../schema/request.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                      rev: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 521, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creator: z
                .string()
                .exactOptional()
                .openapi({ example: 'foo-user', xml: { attribute: true } }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'A little version update' }),
              history: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Please review sources' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Request created' }),
                      when: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                      who: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 42, xml: { attribute: true } }),
              review: z
                .array(
                  z.union([
                    z
                      .object({
                        by_user: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_group: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-group', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_project: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_package: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-server', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  ]),
                )
                .exactOptional(),
              state: z
                .object({
                  comment: z.string().exactOptional().openapi({ example: 'allright' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'accepted', xml: { attribute: true } }),
                  when: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                  who: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'bar-user', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ xml: { name: 'request' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find request with id '5'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const putRequestIdRoute = createRoute({
  method: 'put',
  path: '/request/{id}',
  tags: ['Request'],
  summary: 'Modify a given request.',
  description:
    'Modify a given request.\n\n**NOTE:** Certain parts of a request can only be changed by admins.\n',
  request: {
    params: z.object({
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
            description: 'Id of the choosen request.',
            example: 743,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        'Request XML\n\n**NOTE:** You cannot pass the request id in the xml. You can pass the history in the xml, but it will be simply ignored.\n\nXML Schema used for body validation: [request.rng](../schema/request.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                      rev: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 521, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creator: z
                .string()
                .exactOptional()
                .openapi({ example: 'foo-user', xml: { attribute: true } }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'A little version update' }),
              history: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Please review sources' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Request created' }),
                      when: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                      who: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 42, xml: { attribute: true } }),
              review: z
                .array(
                  z.union([
                    z
                      .object({
                        by_user: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_group: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-group', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_project: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_package: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-server', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  ]),
                )
                .exactOptional(),
              state: z
                .object({
                  comment: z.string().exactOptional().openapi({ example: 'allright' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'accepted', xml: { attribute: true } }),
                  when: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                  who: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'bar-user', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ xml: { name: 'request' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK.\n\nXML Schema used for body validation: [request.rng](../schema/request.rng)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                      rev: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 521, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'obs-server', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creator: z
                .string()
                .exactOptional()
                .openapi({ example: 'foo-user', xml: { attribute: true } }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'A little version update' }),
              history: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Please review sources' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Request created' }),
                      when: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                      who: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo', xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              id: z
                .int()
                .exactOptional()
                .openapi({ example: 42, xml: { attribute: true } }),
              review: z
                .array(
                  z.union([
                    z
                      .object({
                        by_user: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_group: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-group', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_project: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        by_package: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-server', xml: { attribute: true } }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'accepted', xml: { attribute: true } }),
                        when: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2021-01-15T15:49:32', xml: { attribute: true } }),
                        who: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                      })
                      .openapi({ required: [] }),
                  ]),
                )
                .exactOptional(),
              state: z
                .object({
                  comment: z.string().exactOptional().openapi({ example: 'allright' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'accepted', xml: { attribute: true } }),
                  when: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                  who: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'bar-user', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ xml: { name: 'request' }, required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'request_save_error', summary: 'Auto accept time is in the past' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find request with id '10'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postRequestIdRoute = createRoute({
  method: 'post',
  path: '/request/{id}',
  tags: ['Request'],
  summary: 'Apply certain actions on a specified request.',
  description: 'Apply certain actions on a specified request.',
  request: {
    params: z.object({
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
            description: 'Id of the choosen request.',
            example: 743,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      cmd: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '- `addreview`:\n  Add a review to a request. **NOTE:** You need to specify who has to address\n  the review by providing an additional paramter. Possible options are:\n  * by_user\n  * by_group\n  * by_project\n\n- `assignreview`:\n  Accept a review for a given group and assign a new review to a specific user.\n  **NOTE:** You need to pass the group name in the `by_group` parameter\n  and the new reviewer in the `reviewer` parameter.\n\n- `changestate`: Modify the state of a given request.\n  **NOTE:** You need to pass the new state throug the `newstate` parameter. Changing\n  from one state to another is in certain cases not allowed. You can still force\n  the operation by using the `force=1` parameter.\n\n- `changereviewstate`:\n  Change the state of a review inside a given request.\n\n- `setpriority`:\n  Change the priority of a given request. You have to pass the choosen priority through\n  the `priority` parameter. Possible values are:\n  * low\n  * moderate\n  * important\n  * critical\n\n- `setincident`: Change the target incident for maintenance_incident actions\n  **NOTE:** You need to provide the incident number through the `incident`\n  parameter.\n\n- `setacceptat`: Set or modify the accept_at time. Either specified by the `time`\n  parameter or by default set to now.\n\n- `approve`: Pre-approve a request in the review state. It will turn into state `accepted`\n  after the last review.\n\n- `cancelapproval`: Reset the approval of a request\n',
            examples: {
              addreview: { value: 'cmd=addreview&by_group=heroes' },
              approve: { value: 'cmd=approve' },
              assignreview: { value: 'cmd=assignreview&by_group=heroes&reviewer=foo' },
              cancelapproval: { value: 'cmd=cancelapproval' },
              changereviewstate: {
                value: 'cmd=changereviewstate&by_group=heroes&newstate=new&comment=reopened',
              },
              changestate: { value: 'cmd=changestate&newstate=accepted' },
              setacceptat: { value: "cmd=setacceptat&time='2020-12-01%2000:00:00%20UTC'" },
              setincident: { value: 'cmd=setincident&incident=12' },
              setpriority: { value: 'cmd=setpriority&priority=low&comment=notsoimportant' },
            },
            explode: false,
            in: 'query',
            name: 'cmd',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      newstate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Define the new state',
            in: 'query',
            name: 'newstate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      priority: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Define the new priority',
            in: 'query',
            name: 'priority',
            schema: { type: 'string' },
            required: false,
          },
        }),
      by_user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the user of a new review',
            in: 'query',
            name: 'by_user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      by_group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the group of the new review',
            in: 'query',
            name: 'by_group',
            schema: { type: 'string' },
            required: false,
          },
        }),
      by_project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the project of the new review',
            in: 'query',
            name: 'by_project',
            schema: { type: 'string' },
            required: false,
          },
        }),
      by_package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the package of the new review',
            in: 'query',
            name: 'by_package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      incident: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the incident number for `setincident`',
            in: 'query',
            name: 'incident',
            schema: { type: 'string' },
            required: false,
          },
        }),
      time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the time for `setacceptat`',
            in: 'query',
            name: 'time',
            schema: { type: 'string' },
            required: false,
          },
        }),
      comment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Add a comment to one of the actions',
            in: 'query',
            name: 'comment',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'no_maintenance_release_target',
            summary:
              'Maintenance incident request contains release target project test_maintenance_project with\ninvalid project kind "standard" (should be "maintenance_release") for package package01\n',
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Not Found': {
              value: { code: 'not_found', summary: "Couldn't find request with id '120'" },
            },
            'Request Not Modifiable': {
              value: { code: 'request_not_modifiable', summary: 'request is not in review state' },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const deleteRequestIdRoute = createRoute({
  method: 'delete',
  path: '/request/{id}',
  tags: ['Request'],
  summary: 'Delete a given request.',
  description: 'Delete a given request.',
  request: {
    params: z.object({
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
            description: 'Id of the choosen request.',
            example: 743,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK. The request has succeeded.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'ok', summary: 'Ok' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find request with id '10'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postRequestIdCmdDiffRoute = createRoute({
  method: 'post',
  path: '/request/{id}?cmd=diff',
  tags: ['Request'],
  summary: 'Get the diff for all packages affected by the request.',
  description: 'Get the diff for all packages affected by the request.\n',
  request: {
    params: z.object({
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
            description: 'Id of the choosen request.',
            example: 743,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      diff_to_superseded: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Diff relative to a given superseded request. State the id of the corresponding superseded request.\n',
            example: 10401,
            in: 'query',
            name: 'diff_to_superseded',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .literal('xml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter to xml in order to receive a structured diff instead of plain text.',
            in: 'query',
            name: 'view',
            schema: { enum: ['xml'], type: 'string' },
            required: false,
          },
        }),
      withissues: ((schema) =>
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
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
        ]))(z.union([z.literal(true), z.literal(1)]))
        .exactOptional()
        .openapi({
          param: {
            description: 'Include parsed issues',
            in: 'query',
            name: 'withissues',
            schema: { enum: [true, 1], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              action: z
                .object({
                  options: z
                    .object({
                      sourceupdate: z.string().exactOptional().openapi({ example: 'cleanup' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  source: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'ruby', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'home:Iggy:branches:home:Admin',
                          xml: { attribute: true },
                        }),
                      rev: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 3, xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  sourcediff: z
                    .object({
                      files: z
                        .array(
                          z
                            .object({
                              file: z
                                .object({
                                  diff: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      example:
                                        'spec files:\n-----------\n--- test.spec\n+++ test.spec\n@@ -0,0 +1 @@\n+# NEW COMMENT\n\\ No newline at end of file\n',
                                    }),
                                  new: z
                                    .object({
                                      md5: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'd4f573d2bf9a0e306f87dad7eee0cf56',
                                          xml: { attribute: true },
                                        }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'ruby.spec',
                                          xml: { attribute: true },
                                        }),
                                      size: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 70, xml: { attribute: true } }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  old: z
                                    .object({
                                      md5: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'd4f573d2bf9a0e306f87dad7eee0cf56',
                                          xml: { attribute: true },
                                        }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'ruby.spec',
                                          xml: { attribute: true },
                                        }),
                                      size: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 70, xml: { attribute: true } }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  state: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'changed', xml: { attribute: true } }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      issues: z
                        .array(
                          z
                            .object({
                              issue: z
                                .object({
                                  label: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'boo#944302', xml: { attribute: true } }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 922894, xml: { attribute: true } }),
                                  state: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'added', xml: { attribute: true } }),
                                  tracker: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'bnc', xml: { attribute: true } }),
                                  url: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      example:
                                        'https://bugzilla.opensuse.org/show_bug.cgi?id=944302',
                                      xml: { attribute: true },
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: '9dbe9eb1767c5e12c69839af893dc239',
                          xml: { attribute: true },
                        }),
                      new: z
                        .object({
                          package: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ruby', xml: { attribute: true } }),
                          project: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example: 'home:Iggy:branches:home:Admin',
                              xml: { attribute: true },
                            }),
                          rev: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 3, xml: { attribute: true } }),
                          srcmd5: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example: '59300f4ba65f53334b2e2a39f87ba3a0',
                              xml: { attribute: true },
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      old: z
                        .object({
                          package: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ruby', xml: { attribute: true } }),
                          project: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example: 'home:Iggy:branches:home:Admin',
                              xml: { attribute: true },
                            }),
                          rev: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 3, xml: { attribute: true } }),
                          srcmd5: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example: '59300f4ba65f53334b2e2a39f87ba3a0',
                              xml: { attribute: true },
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  target: z
                    .object({
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'ruby', xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'home:Admin', xml: { attribute: true } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'submit', xml: { attribute: true } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              actions: z
                .string()
                .exactOptional()
                .openapi({ example: 0, xml: { attribute: true } }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 12, xml: { attribute: true } }),
            })
            .openapi({
              'x-components': {
                schemas: {
                  NewOldDestination: {
                    properties: {
                      package: { example: 'ruby', type: 'string', xml: { attribute: true } },
                      project: {
                        example: 'home:Iggy:branches:home:Admin',
                        type: 'string',
                        xml: { attribute: true },
                      },
                      rev: { example: 3, type: 'string', xml: { attribute: true } },
                      srcmd5: {
                        example: '59300f4ba65f53334b2e2a39f87ba3a0',
                        type: 'string',
                        xml: { attribute: true },
                      },
                    },
                    type: 'object',
                  },
                  OldNewFile: {
                    properties: {
                      md5: {
                        example: 'd4f573d2bf9a0e306f87dad7eee0cf56',
                        type: 'string',
                        xml: { attribute: true },
                      },
                      name: { example: 'ruby.spec', type: 'string', xml: { attribute: true } },
                      size: { example: 70, type: 'string', xml: { attribute: true } },
                    },
                    type: 'object',
                  },
                },
              },
              xml: { name: 'diff' },
              required: [],
            }),
        },
        'text/plain; charset=utf-8': {
          schema: z.string(),
          example:
            'spec files:\n-----------\n--- test.spec\n+++ test.spec\n@@ -0,0 +1 @@\n+# NEW COMMENT\n\\ No newline at end of file\n',
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'not_found', summary: "Couldn't find request with id '355'" },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getRequestViewCollectionRoute = createRoute({
  method: 'get',
  path: '/request?view=collection',
  tags: ['Request'],
  summary: 'Get a collection of requests for a specified target',
  description:
    'Get a collection of requests for a specified target. **NOTE:**\nYou need to set at least one of the following parameters in order\nto use this endpoint:\n\n* `user`\n* `project`\n* `package`\n* `states`\n* `types`\n* `ids`\n',
  request: {
    query: z.object({
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter the results of requests and open reviews for a certain user. If no other parameters are\napplied, it will include requests where the user is maintainer of the target or the creator of\nthe request.\n',
            example: 'hans',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the results of requests and open review requests to the specified target project.',
            example: 'home:hans',
            in: 'query',
            name: 'project',
            schema: { type: 'string' },
            required: false,
          },
        }),
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the results of requests and open review requests to the specified target package.',
            example: 'ruby',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      states: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit results to a given request state. Multiple states can be provided as a comma separated list.',
            example: 'new,review',
            in: 'query',
            name: 'states',
            schema: { type: 'string' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the results to certain action types. Multiple types can be provided as a comma separated list.',
            example: 'add_role,submit',
            in: 'query',
            name: 'types',
            schema: { type: 'string' },
            required: false,
          },
        }),
      roles: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the results to a given role. Multiple roles can be provided as a comma separated list.',
            example: 'creator,maintainer,reviewer,source,target',
            in: 'query',
            name: 'roles',
            schema: { type: 'string' },
            required: false,
          },
        }),
      withhistory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the request history in the results.',
            example: 1,
            in: 'query',
            name: 'withhistory',
            schema: { type: 'string' },
            required: false,
          },
        }),
      withfullhistory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Includes both, request and review history in the results.',
            example: 1,
            in: 'query',
            name: 'withfullhistory',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the results to the specified amount of requests.',
            example: 7,
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit the result to specified request id's. Multiple id's can be provided as a comma separated list.",
            example: '15,19,23',
            in: 'query',
            name: 'ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              matches: z
                .string()
                .exactOptional()
                .openapi({ example: 7, xml: { attribute: true } }),
              request: z
                .array(
                  z
                    .object({
                      action: z
                        .object({
                          options: z
                            .object({
                              sourceupdate: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'cleanup' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          source: z
                            .object({
                              package: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'obs-server', xml: { attribute: true } }),
                              project: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'home:foo-user', xml: { attribute: true } }),
                              rev: z
                                .int()
                                .exactOptional()
                                .openapi({ example: 521, xml: { attribute: true } }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          target: z
                            .object({
                              package: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'obs-server', xml: { attribute: true } }),
                              project: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          type: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'submit', xml: { attribute: true } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      creator: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'foo-user', xml: { attribute: true } }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'A little version update' }),
                      history: z
                        .array(
                          z
                            .object({
                              comment: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'Please review sources' }),
                              description: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'Request created' }),
                              when: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '2021-01-15T13:39:43',
                                  xml: { attribute: true },
                                }),
                              who: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'foo', xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ example: 42, xml: { attribute: true } }),
                      review: z
                        .array(
                          z.union([
                            z
                              .object({
                                by_user: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                                state: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'accepted', xml: { attribute: true } }),
                                when: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example: '2021-01-15T15:49:32',
                                    xml: { attribute: true },
                                  }),
                                who: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                              })
                              .openapi({ required: [] }),
                            z
                              .object({
                                by_group: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-group', xml: { attribute: true } }),
                                state: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'accepted', xml: { attribute: true } }),
                                when: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example: '2021-01-15T15:49:32',
                                    xml: { attribute: true },
                                  }),
                                who: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                              })
                              .openapi({ required: [] }),
                            z
                              .object({
                                by_project: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'OBS:Unstable', xml: { attribute: true } }),
                                state: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'accepted', xml: { attribute: true } }),
                                when: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example: '2021-01-15T15:49:32',
                                    xml: { attribute: true },
                                  }),
                                who: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                              })
                              .openapi({ required: [] }),
                            z
                              .object({
                                by_package: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-server', xml: { attribute: true } }),
                                state: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'accepted', xml: { attribute: true } }),
                                when: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example: '2021-01-15T15:49:32',
                                    xml: { attribute: true },
                                  }),
                                who: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'obs-maintainer', xml: { attribute: true } }),
                              })
                              .openapi({ required: [] }),
                          ]),
                        )
                        .exactOptional(),
                      state: z
                        .object({
                          comment: z.string().exactOptional().openapi({ example: 'allright' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'accepted', xml: { attribute: true } }),
                          when: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2021-01-15T13:39:43', xml: { attribute: true } }),
                          who: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'bar-user', xml: { attribute: true } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ xml: { name: 'request' }, required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'collection' }, required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            'Not Found': {
              value: { code: 'not_found', summary: "Couldn't find User with login = foo" },
            },
            'Require Filter': {
              value: {
                code: 'require_filter',
                summary:
                  'This call requires at least one filter, either by user, project or package or states or types or reviewstates',
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getWorkerStatusRoute = createRoute({
  method: 'get',
  path: '/worker/status',
  tags: ['Workers'],
  summary: 'Lists status of workers, jobs, backend services and general statistics.',
  description:
    'Lists status of workers, running jobs, waiting jobs, status of the backend services and general statistics.\n\nOther ways to obtain the same information as with this endpoint are:\n  * `GET /worker/_status`\n  * `GET /status/workerstatus`\n  * `GET /build/_workerstatus`\n',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              blocked: z
                .array(
                  z
                    .object({
                      arch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      jobs: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              buildavg: z
                .array(
                  z
                    .object({
                      arch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      buildavg: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              building: z
                .array(
                  z
                    .object({
                      arch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      hostarch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      package: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      project: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      repository: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      starttime: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      workerid: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              clients: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              down: z
                .array(
                  z
                    .object({
                      hostarch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      workerid: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              idle: z
                .array(
                  z
                    .object({
                      hostarch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      workerid: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              partition: z
                .array(
                  z
                    .object({
                      daemon: z
                        .array(
                          z
                            .object({
                              arch: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              queue: z
                                .object({
                                  high: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  low: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  med: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  next: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              starttime: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              state: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              waiting: z
                .array(
                  z
                    .object({
                      arch: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      jobs: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'workerstatus' }, required: [] }),
          example: {
            blocked: [
              { arch: 'i586', jobs: '0' },
              { arch: 'x86_64', jobs: '0' },
            ],
            buildavg: [
              { arch: 'i586', buildavg: '1200' },
              { arch: 'x86_64', buildavg: '1200' },
            ],
            building: [
              {
                arch: 'x86_64',
                hostarch: 'x86_64',
                package: 'android-sdk',
                project: 'home:enzokiel',
                repository: 'openSUSE_11.3_Update',
                starttime: '1289838671',
                workerid: '1a1f67b948b6:2',
              },
            ],
            clients: '2',
            down: [{ hostarch: 'aarch64', workerid: 'armbuild03:1' }],
            idle: [{ hostarch: 'x86_64', workerid: '1a1f67b948b6:1' }],
            partition: [
              {
                daemon: [
                  { starttime: '1617711138', state: 'running', type: 'srcserver' },
                  { starttime: '1617711144', state: 'running', type: 'servicedispatch' },
                  { starttime: '1617711144', state: 'running', type: 'service' },
                  { starttime: '1617711145', state: 'running', type: 'clouduploadserver' },
                  { starttime: '1617711144', state: 'running', type: 'clouduploadworker' },
                  {
                    arch: 'i586',
                    queue: { high: '0', low: '11', med: '0', next: '0' },
                    starttime: '1617711145',
                    state: 'running',
                    type: 'scheduler',
                  },
                  {
                    arch: 'x86_64',
                    queue: { high: '0', low: '11', med: '0', next: '0' },
                    starttime: '1617711145',
                    state: 'running',
                    type: 'scheduler',
                  },
                  { starttime: '1617711143', state: 'running', type: 'repserver' },
                  { starttime: '1617711144', state: 'running', type: 'dispatcher' },
                  { starttime: '1617711145', state: 'running', type: 'publisher' },
                  { starttime: '1617711146', state: 'running', type: 'signer' },
                ],
              },
              {
                daemon: [
                  {
                    arch: 'aarch64',
                    queue: { high: '0', low: '4', med: '1', next: '22' },
                    starttime: '1617148925',
                    state: 'running',
                    type: 'scheduler',
                  },
                ],
                name: 'back-main',
              },
            ],
            waiting: [
              { arch: 'i586', jobs: '0' },
              { arch: 'x86_64', jobs: '0' },
            ],
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const getWorkerArchitectureNameWorkerIdRoute = createRoute({
  method: 'get',
  path: '/worker/{architecture_name}:{worker_id}',
  tags: ['Workers'],
  summary: 'Lists capabilites of a worker.',
  description:
    'Lists capabilites of a worker.\n\nThis can be useful when checking for constraints.\n\nThis operation is the same as `GET /worker/capability/{architecture_name}:{worker_id}`.\n',
  request: {
    params: z.object({
      architecture_name: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name',
            example: 'x86_64',
            in: 'path',
            name: 'architecture_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      worker_id: z
        .string()
        .openapi({
          param: {
            description: 'Worker id.',
            example: '1a1f67b948b6:1',
            in: 'path',
            name: 'worker_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              hardware: z
                .object({
                  cpu: z
                    .object({ flag: z.array(z.string()).exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  jobs: z.string().exactOptional(),
                  processors: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              hostarch: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              hostlabel: z.string().exactOptional(),
              linux: z
                .object({ flavor: z.string().exactOptional(), version: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              registerserver: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              sandbox: z.string().exactOptional(),
              workerid: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
            })
            .openapi({ xml: { name: 'worker' }, required: [] }),
          example: {
            hardware: {
              cpu: { flag: ['fpu', 'vme', 'de', 'pse', 'tsc', 'msr'] },
              jobs: '1',
              processors: '8',
            },
            hostarch: 'x86_64',
            hostlabel: 'OBS_WORKER_SECURITY_LEVEL_',
            linux: { flavor: 'default', version: '5.11.6-1' },
            registerserver: 'http://backend:5252',
            sandbox: 'chroot',
            workerid: '1a1f67b948b6:1',
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: '404',
            details:
              '404 remote error: unknown worker (http://backend:5252/worker/x86_64:1a1f67b948bf:1)',
            summary:
              'remote error: unknown worker (http://backend:5252/worker/x86_64:1a1f67b948bf:1)',
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})

export const postWorkerCmdCheckconstraintsRoute = createRoute({
  method: 'post',
  path: '/worker?cmd=checkconstraints',
  tags: ['Workers'],
  summary: 'Lists workers which match a constraints filter.',
  description:
    "Given a project, package, repository and architecture, list workers which can build with that restrictions, and also match a constraints filter.\n\nThis endpoint doesn't create or modify any data.\n\nMore information about constraints can be found in the\n[user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html).\n\nThis operation is the same as `POST /worker/command/run?cmd=checkconstraints`.\n",
  request: {
    query: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project name.',
            example: 'home:user1',
            in: 'query',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      repository: z
        .string()
        .openapi({
          param: {
            description: 'Repository name.',
            example: 'openSUSE_Tumbleweed',
            in: 'query',
            name: 'repository',
            required: true,
            schema: { type: 'string' },
          },
        }),
      arch: z
        .string()
        .openapi({
          param: {
            description: 'Architecture name.',
            example: 'x86_64',
            in: 'query',
            name: 'arch',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package: z
        .string()
        .openapi({
          param: {
            description: 'Package name.',
            example: 'test_package',
            in: 'query',
            name: 'package',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Constraints XML filter',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              hardware: z
                .object({
                  cpu: z
                    .object({ flag: z.array(z.string()).exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  disk: z
                    .object({ size: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  memory: z
                    .object({ size: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  physicalmemory: z
                    .object({ size: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  processors: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              hostlabel: z.string().exactOptional(),
              linux: z
                .object({
                  flavor: z.string().exactOptional(),
                  version: z
                    .object({ max: z.string().exactOptional(), min: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              sandbox: z.string().exactOptional().openapi({ example: 'chroot' }),
            })
            .openapi({ xml: { name: 'constraints' }, required: [] }),
          examples: {
            cpu_flags: {
              summary: 'Cpu flags',
              value: { hardware: { cpu: { flag: ['mmx', 'sse2'] } } },
            },
            mix: {
              summary: 'Linux version and linux flavor',
              value: { linux: { flavor: 'default', version: { max: 4, min: 3 } } },
            },
            processors: { summary: 'Number of processors', value: { hardware: { processors: 2 } } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              entry: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'directory' }, required: [] }),
          examples: {
            no_workers: { summary: 'No Workers Satisfy the Constraints', value: null },
            two_workers: {
              summary: 'Two Workers Satisfy the Constraints',
              value: {
                entry: [{ name: 'x86_64:1a1f67b948b6:1' }, { name: 'x86_64:1a1f67b948b6:2' }],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: { code: 'missing_parameter', summary: 'Required Parameter arch missing' },
        },
      },
    },
    401: {
      description:
        'Unauthorized.\n\nXML Schema used for body validation: [status.xsd](../schema/status.xsd)\n',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          examples: {
            anonymous_user: {
              summary: 'Anonymous User',
              value: {
                code: 'anonymous_user',
                summary: 'Anonymous user is not allowed here - please login',
              },
            },
            authentication_required: {
              summary: 'Authentication Required',
              value: {
                code: 'authentication_required',
                summary: "Unknown user 'Admin' or invalid password",
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found.',
      content: {
        'application/xml; charset=utf-8': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({ xml: { attribute: true } }),
              data: z.array(z.string()).exactOptional(),
              details: z.string().exactOptional(),
              summary: z.string().exactOptional(),
            })
            .openapi({ xml: { name: 'status' }, required: [] }),
          example: {
            code: 'not_found',
            summary:
              "&lt;status code=\"404\"&gt;\n&lt;summary&gt;repository 'home:Admin/openSUSE_Tumbleweed' has no architecture 'x86_64d'&lt;/summary&gt;\n&lt;details&gt;404 repository 'home:Admin/openSUSE_Tumbleweed' has no architecture 'x86_64d'&lt;/details&gt;\n&lt;/status&gt;\n",
          },
        },
      },
    },
  },
  security: [{ basic_authentication: [] }],
})
