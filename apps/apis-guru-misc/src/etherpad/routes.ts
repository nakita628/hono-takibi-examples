import { createRoute, z } from '@hono/zod-openapi'

const MessageSchema = z
  .object({
    text: z.string().exactOptional(),
    time: z.int().exactOptional(),
    userId: z.string().exactOptional(),
    userName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Message')

const SessionInfoSchema = z
  .object({
    authorID: z.string().exactOptional(),
    groupID: z.string().exactOptional(),
    id: z.string().exactOptional(),
    validUntil: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SessionInfo')

const UserInfoSchema = z
  .object({
    colorId: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    timestamp: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserInfo')

const ApiErrorResponse = {
  description: 'generic api error (code 1)',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 1 }),
          data: z.object({}).exactOptional().openapi({ example: null }),
          message: z.string().exactOptional().openapi({ example: 'error message' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const InternalErrorResponse = {
  description: 'internal api error (code 2)',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 2 }),
          data: z.object({}).exactOptional().openapi({ example: null }),
          message: z.string().exactOptional().openapi({ example: 'internal error' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const NotFoundResponse = {
  description: 'no such function (code 4)',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 3 }),
          data: z.object({}).exactOptional().openapi({ example: null }),
          message: z.string().exactOptional().openapi({ example: 'no such function' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SuccessResponse = {
  description: 'ok (code 0)',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 0 }),
          data: z.object({}).exactOptional().openapi({ example: null }),
          message: z.string().exactOptional().openapi({ example: 'ok' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const UnauthorizedResponse = {
  description: 'no or wrong API key (code 4)',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 4 }),
          data: z.object({}).exactOptional().openapi({ example: null }),
          message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AuthorIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
  })

const AuthorMapperParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'authorMapper', schema: { type: 'string' }, required: false },
  })

const DestinationIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'destinationID', schema: { type: 'string' }, required: false },
  })

const EndParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'end', schema: { type: 'string' }, required: false } })

const EndRevParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'endRev', schema: { type: 'string' }, required: false } })

const ForceParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false } })

const GroupIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false } })

const GroupMapperParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'groupMapper', schema: { type: 'string' }, required: false },
  })

const HtmlParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'html', schema: { type: 'string' }, required: false } })

const MsgParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'msg', schema: { type: 'string' }, required: false } })

const NameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false } })

const PadIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false } })

const PadNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'padName', schema: { type: 'string' }, required: false } })

const PublicStatusParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'publicStatus', schema: { type: 'string' }, required: false },
  })

const RevParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false } })

const RoIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'roID', schema: { type: 'string' }, required: false } })

const SessionIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'sessionID', schema: { type: 'string' }, required: false },
  })

const SourceIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
  })

const StartParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'start', schema: { type: 'string' }, required: false } })

const StartRevParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'startRev', schema: { type: 'string' }, required: false },
  })

const TextParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false } })

const TimeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'time', schema: { type: 'string' }, required: false } })

const ValidUntilParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'validUntil', schema: { type: 'string' }, required: false },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'apikey', type: 'apiKey' }

export const getAppendChatMessageRoute = createRoute({
  method: 'get',
  path: '/appendChatMessage',
  tags: ['pad'],
  summary: 'appends a chat message',
  operationId: 'appendChatMessageUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
      time: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'time', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAppendChatMessageRoute = createRoute({
  method: 'post',
  path: '/appendChatMessage',
  tags: ['pad'],
  summary: 'appends a chat message',
  operationId: 'appendChatMessageUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
      time: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'time', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAppendTextRoute = createRoute({
  method: 'get',
  path: '/appendText',
  operationId: 'appendTextUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAppendTextRoute = createRoute({
  method: 'post',
  path: '/appendText',
  operationId: 'appendTextUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCheckTokenRoute = createRoute({
  method: 'get',
  path: '/checkToken',
  tags: ['pad'],
  summary: 'returns ok when the current api token is valid',
  operationId: 'checkTokenUsingGET',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCheckTokenRoute = createRoute({
  method: 'post',
  path: '/checkToken',
  tags: ['pad'],
  summary: 'returns ok when the current api token is valid',
  operationId: 'checkTokenUsingPOST',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCopyPadRoute = createRoute({
  method: 'get',
  path: '/copyPad',
  operationId: 'copyPadUsingGET',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCopyPadRoute = createRoute({
  method: 'post',
  path: '/copyPad',
  operationId: 'copyPadUsingPOST',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCopyPadWithoutHistoryRoute = createRoute({
  method: 'get',
  path: '/copyPadWithoutHistory',
  operationId: 'copyPadWithoutHistoryUsingGET',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCopyPadWithoutHistoryRoute = createRoute({
  method: 'post',
  path: '/copyPadWithoutHistory',
  operationId: 'copyPadWithoutHistoryUsingPOST',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateAuthorRoute = createRoute({
  method: 'get',
  path: '/createAuthor',
  tags: ['author'],
  summary: 'creates a new author',
  operationId: 'createAuthorUsingGET',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateAuthorRoute = createRoute({
  method: 'post',
  path: '/createAuthor',
  tags: ['author'],
  summary: 'creates a new author',
  operationId: 'createAuthorUsingPOST',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateAuthorIfNotExistsForRoute = createRoute({
  method: 'get',
  path: '/createAuthorIfNotExistsFor',
  tags: ['author'],
  summary: 'this functions helps you to map your application author ids to Etherpad author ids',
  operationId: 'createAuthorIfNotExistsForUsingGET',
  request: {
    query: z.object({
      authorMapper: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorMapper', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateAuthorIfNotExistsForRoute = createRoute({
  method: 'post',
  path: '/createAuthorIfNotExistsFor',
  tags: ['author'],
  summary: 'this functions helps you to map your application author ids to Etherpad author ids',
  operationId: 'createAuthorIfNotExistsForUsingPOST',
  request: {
    query: z.object({
      authorMapper: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorMapper', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateDiffHTMLRoute = createRoute({
  method: 'get',
  path: '/createDiffHTML',
  tags: ['pad'],
  operationId: 'createDiffHTMLUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      startRev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startRev', schema: { type: 'string' }, required: false },
        }),
      endRev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endRev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional(),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateDiffHTMLRoute = createRoute({
  method: 'post',
  path: '/createDiffHTML',
  tags: ['pad'],
  operationId: 'createDiffHTMLUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      startRev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startRev', schema: { type: 'string' }, required: false },
        }),
      endRev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endRev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional(),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateGroupRoute = createRoute({
  method: 'get',
  path: '/createGroup',
  tags: ['group'],
  summary: 'creates a new group',
  operationId: 'createGroupUsingGET',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateGroupRoute = createRoute({
  method: 'post',
  path: '/createGroup',
  tags: ['group'],
  summary: 'creates a new group',
  operationId: 'createGroupUsingPOST',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateGroupIfNotExistsForRoute = createRoute({
  method: 'get',
  path: '/createGroupIfNotExistsFor',
  tags: ['group'],
  summary: 'this functions helps you to map your application group ids to Etherpad group ids',
  operationId: 'createGroupIfNotExistsForUsingGET',
  request: {
    query: z.object({
      groupMapper: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupMapper', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateGroupIfNotExistsForRoute = createRoute({
  method: 'post',
  path: '/createGroupIfNotExistsFor',
  tags: ['group'],
  summary: 'this functions helps you to map your application group ids to Etherpad group ids',
  operationId: 'createGroupIfNotExistsForUsingPOST',
  request: {
    query: z.object({
      groupMapper: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupMapper', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateGroupPadRoute = createRoute({
  method: 'get',
  path: '/createGroupPad',
  tags: ['group'],
  summary: 'creates a new pad in this group',
  operationId: 'createGroupPadUsingGET',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
      padName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padName', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateGroupPadRoute = createRoute({
  method: 'post',
  path: '/createGroupPad',
  tags: ['group'],
  summary: 'creates a new pad in this group',
  operationId: 'createGroupPadUsingPOST',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
      padName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padName', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreatePadRoute = createRoute({
  method: 'get',
  path: '/createPad',
  tags: ['pad'],
  description:
    'creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad',
  operationId: 'createPadUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreatePadRoute = createRoute({
  method: 'post',
  path: '/createPad',
  tags: ['pad'],
  description:
    'creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad',
  operationId: 'createPadUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCreateSessionRoute = createRoute({
  method: 'get',
  path: '/createSession',
  tags: ['session'],
  summary: 'creates a new session. validUntil is an unix timestamp in seconds',
  operationId: 'createSessionUsingGET',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
      validUntil: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'validUntil', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ sessionID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCreateSessionRoute = createRoute({
  method: 'post',
  path: '/createSession',
  tags: ['session'],
  summary: 'creates a new session. validUntil is an unix timestamp in seconds',
  operationId: 'createSessionUsingPOST',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
      validUntil: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'validUntil', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ sessionID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDeleteGroupRoute = createRoute({
  method: 'get',
  path: '/deleteGroup',
  tags: ['group'],
  summary: 'deletes a group',
  operationId: 'deleteGroupUsingGET',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/deleteGroup',
  tags: ['group'],
  summary: 'deletes a group',
  operationId: 'deleteGroupUsingPOST',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDeletePadRoute = createRoute({
  method: 'get',
  path: '/deletePad',
  tags: ['pad'],
  summary: 'deletes a pad',
  operationId: 'deletePadUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDeletePadRoute = createRoute({
  method: 'post',
  path: '/deletePad',
  tags: ['pad'],
  summary: 'deletes a pad',
  operationId: 'deletePadUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDeleteSessionRoute = createRoute({
  method: 'get',
  path: '/deleteSession',
  tags: ['session'],
  summary: 'deletes a session',
  operationId: 'deleteSessionUsingGET',
  request: {
    query: z.object({
      sessionID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sessionID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDeleteSessionRoute = createRoute({
  method: 'post',
  path: '/deleteSession',
  tags: ['session'],
  summary: 'deletes a session',
  operationId: 'deleteSessionUsingPOST',
  request: {
    query: z.object({
      sessionID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sessionID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetAttributePoolRoute = createRoute({
  method: 'get',
  path: '/getAttributePool',
  operationId: 'getAttributePoolUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetAttributePoolRoute = createRoute({
  method: 'post',
  path: '/getAttributePool',
  operationId: 'getAttributePoolUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetAuthorNameRoute = createRoute({
  method: 'get',
  path: '/getAuthorName',
  tags: ['author'],
  summary: 'Returns the Author Name of the author',
  operationId: 'getAuthorNameUsingGET',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  info: z
                    .object({
                      colorId: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      timestamp: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetAuthorNameRoute = createRoute({
  method: 'post',
  path: '/getAuthorName',
  tags: ['author'],
  summary: 'Returns the Author Name of the author',
  operationId: 'getAuthorNameUsingPOST',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  info: z
                    .object({
                      colorId: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      timestamp: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetChatHeadRoute = createRoute({
  method: 'get',
  path: '/getChatHead',
  tags: ['pad'],
  summary: 'returns the chatHead (chat-message) of the pad',
  operationId: 'getChatHeadUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  chatHead: z
                    .object({
                      text: z.string().exactOptional(),
                      time: z.int().exactOptional(),
                      userId: z.string().exactOptional(),
                      userName: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetChatHeadRoute = createRoute({
  method: 'post',
  path: '/getChatHead',
  tags: ['pad'],
  summary: 'returns the chatHead (chat-message) of the pad',
  operationId: 'getChatHeadUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  chatHead: z
                    .object({
                      text: z.string().exactOptional(),
                      time: z.int().exactOptional(),
                      userId: z.string().exactOptional(),
                      userName: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetChatHistoryRoute = createRoute({
  method: 'get',
  path: '/getChatHistory',
  tags: ['pad'],
  summary: 'returns the chat history',
  operationId: 'getChatHistoryUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'start', schema: { type: 'string' }, required: false },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'end', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  messages: z
                    .array(
                      z
                        .object({
                          text: z.string().exactOptional(),
                          time: z.int().exactOptional(),
                          userId: z.string().exactOptional(),
                          userName: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetChatHistoryRoute = createRoute({
  method: 'post',
  path: '/getChatHistory',
  tags: ['pad'],
  summary: 'returns the chat history',
  operationId: 'getChatHistoryUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'start', schema: { type: 'string' }, required: false },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'end', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  messages: z
                    .array(
                      z
                        .object({
                          text: z.string().exactOptional(),
                          time: z.int().exactOptional(),
                          userId: z.string().exactOptional(),
                          userName: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetHTMLRoute = createRoute({
  method: 'get',
  path: '/getHTML',
  tags: ['pad'],
  summary: 'returns the text of a pad formatted as HTML',
  operationId: 'getHTMLUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ html: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetHTMLRoute = createRoute({
  method: 'post',
  path: '/getHTML',
  tags: ['pad'],
  summary: 'returns the text of a pad formatted as HTML',
  operationId: 'getHTMLUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ html: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetLastEditedRoute = createRoute({
  method: 'get',
  path: '/getLastEdited',
  tags: ['pad'],
  summary: 'returns the timestamp of the last revision of the pad',
  operationId: 'getLastEditedUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ lastEdited: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetLastEditedRoute = createRoute({
  method: 'post',
  path: '/getLastEdited',
  tags: ['pad'],
  summary: 'returns the timestamp of the last revision of the pad',
  operationId: 'getLastEditedUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ lastEdited: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetPadIDRoute = createRoute({
  method: 'get',
  path: '/getPadID',
  operationId: 'getPadIDUsingGET',
  request: {
    query: z.object({
      roID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'roID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetPadIDRoute = createRoute({
  method: 'post',
  path: '/getPadID',
  operationId: 'getPadIDUsingPOST',
  request: {
    query: z.object({
      roID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'roID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetPublicStatusRoute = createRoute({
  method: 'get',
  path: '/getPublicStatus',
  tags: ['pad'],
  summary: 'return true of false',
  operationId: 'getPublicStatusUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ publicStatus: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetPublicStatusRoute = createRoute({
  method: 'post',
  path: '/getPublicStatus',
  tags: ['pad'],
  summary: 'return true of false',
  operationId: 'getPublicStatusUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ publicStatus: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetReadOnlyIDRoute = createRoute({
  method: 'get',
  path: '/getReadOnlyID',
  tags: ['pad'],
  summary: 'returns the read only link of a pad',
  operationId: 'getReadOnlyIDUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ readOnlyID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetReadOnlyIDRoute = createRoute({
  method: 'post',
  path: '/getReadOnlyID',
  tags: ['pad'],
  summary: 'returns the read only link of a pad',
  operationId: 'getReadOnlyIDUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ readOnlyID: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetRevisionChangesetRoute = createRoute({
  method: 'get',
  path: '/getRevisionChangeset',
  operationId: 'getRevisionChangesetUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetRevisionChangesetRoute = createRoute({
  method: 'post',
  path: '/getRevisionChangeset',
  operationId: 'getRevisionChangesetUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetRevisionsCountRoute = createRoute({
  method: 'get',
  path: '/getRevisionsCount',
  tags: ['pad'],
  summary: 'returns the number of revisions of this pad',
  operationId: 'getRevisionsCountUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ revisions: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetRevisionsCountRoute = createRoute({
  method: 'post',
  path: '/getRevisionsCount',
  tags: ['pad'],
  summary: 'returns the number of revisions of this pad',
  operationId: 'getRevisionsCountUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ revisions: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetSavedRevisionsCountRoute = createRoute({
  method: 'get',
  path: '/getSavedRevisionsCount',
  operationId: 'getSavedRevisionsCountUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetSavedRevisionsCountRoute = createRoute({
  method: 'post',
  path: '/getSavedRevisionsCount',
  operationId: 'getSavedRevisionsCountUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetSessionInfoRoute = createRoute({
  method: 'get',
  path: '/getSessionInfo',
  tags: ['session'],
  summary: 'returns informations about a session',
  operationId: 'getSessionInfoUsingGET',
  request: {
    query: z.object({
      sessionID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sessionID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  info: z
                    .object({
                      authorID: z.string().exactOptional(),
                      groupID: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      validUntil: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetSessionInfoRoute = createRoute({
  method: 'post',
  path: '/getSessionInfo',
  tags: ['session'],
  summary: 'returns informations about a session',
  operationId: 'getSessionInfoUsingPOST',
  request: {
    query: z.object({
      sessionID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sessionID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  info: z
                    .object({
                      authorID: z.string().exactOptional(),
                      groupID: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      validUntil: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetStatsRoute = createRoute({
  method: 'get',
  path: '/getStats',
  operationId: 'getStatsUsingGET',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetStatsRoute = createRoute({
  method: 'post',
  path: '/getStats',
  operationId: 'getStatsUsingPOST',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGetTextRoute = createRoute({
  method: 'get',
  path: '/getText',
  tags: ['pad'],
  summary: 'returns the text of a pad',
  operationId: 'getTextUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ text: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postGetTextRoute = createRoute({
  method: 'post',
  path: '/getText',
  tags: ['pad'],
  summary: 'returns the text of a pad',
  operationId: 'getTextUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ text: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListAllGroupsRoute = createRoute({
  method: 'get',
  path: '/listAllGroups',
  tags: ['group'],
  operationId: 'listAllGroupsUsingGET',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListAllGroupsRoute = createRoute({
  method: 'post',
  path: '/listAllGroups',
  tags: ['group'],
  operationId: 'listAllGroupsUsingPOST',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ groupIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListAllPadsRoute = createRoute({
  method: 'get',
  path: '/listAllPads',
  tags: ['pad'],
  summary: 'list all the pads',
  operationId: 'listAllPadsUsingGET',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListAllPadsRoute = createRoute({
  method: 'post',
  path: '/listAllPads',
  tags: ['pad'],
  summary: 'list all the pads',
  operationId: 'listAllPadsUsingPOST',
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListAuthorsOfPadRoute = createRoute({
  method: 'get',
  path: '/listAuthorsOfPad',
  tags: ['pad'],
  summary: 'returns an array of authors who contributed to this pad',
  operationId: 'listAuthorsOfPadUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListAuthorsOfPadRoute = createRoute({
  method: 'post',
  path: '/listAuthorsOfPad',
  tags: ['pad'],
  summary: 'returns an array of authors who contributed to this pad',
  operationId: 'listAuthorsOfPadUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ authorIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListPadsRoute = createRoute({
  method: 'get',
  path: '/listPads',
  tags: ['group'],
  summary: 'returns all pads of this group',
  operationId: 'listPadsUsingGET',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListPadsRoute = createRoute({
  method: 'post',
  path: '/listPads',
  tags: ['group'],
  summary: 'returns all pads of this group',
  operationId: 'listPadsUsingPOST',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListPadsOfAuthorRoute = createRoute({
  method: 'get',
  path: '/listPadsOfAuthor',
  tags: ['author'],
  summary: 'returns an array of all pads this author contributed to',
  operationId: 'listPadsOfAuthorUsingGET',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListPadsOfAuthorRoute = createRoute({
  method: 'post',
  path: '/listPadsOfAuthor',
  tags: ['author'],
  summary: 'returns an array of all pads this author contributed to',
  operationId: 'listPadsOfAuthorUsingPOST',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padIDs: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListSavedRevisionsRoute = createRoute({
  method: 'get',
  path: '/listSavedRevisions',
  operationId: 'listSavedRevisionsUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListSavedRevisionsRoute = createRoute({
  method: 'post',
  path: '/listSavedRevisions',
  operationId: 'listSavedRevisionsUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListSessionsOfAuthorRoute = createRoute({
  method: 'get',
  path: '/listSessionsOfAuthor',
  tags: ['author'],
  summary: 'returns all sessions of an author',
  operationId: 'listSessionsOfAuthorUsingGET',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  sessions: z
                    .array(
                      z
                        .object({
                          authorID: z.string().exactOptional(),
                          groupID: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          validUntil: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListSessionsOfAuthorRoute = createRoute({
  method: 'post',
  path: '/listSessionsOfAuthor',
  tags: ['author'],
  summary: 'returns all sessions of an author',
  operationId: 'listSessionsOfAuthorUsingPOST',
  request: {
    query: z.object({
      authorID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'authorID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  sessions: z
                    .array(
                      z
                        .object({
                          authorID: z.string().exactOptional(),
                          groupID: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          validUntil: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListSessionsOfGroupRoute = createRoute({
  method: 'get',
  path: '/listSessionsOfGroup',
  tags: ['group'],
  operationId: 'listSessionsOfGroupUsingGET',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  sessions: z
                    .array(
                      z
                        .object({
                          authorID: z.string().exactOptional(),
                          groupID: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          validUntil: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListSessionsOfGroupRoute = createRoute({
  method: 'post',
  path: '/listSessionsOfGroup',
  tags: ['group'],
  operationId: 'listSessionsOfGroupUsingPOST',
  request: {
    query: z.object({
      groupID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  sessions: z
                    .array(
                      z
                        .object({
                          authorID: z.string().exactOptional(),
                          groupID: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          validUntil: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMovePadRoute = createRoute({
  method: 'get',
  path: '/movePad',
  operationId: 'movePadUsingGET',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postMovePadRoute = createRoute({
  method: 'post',
  path: '/movePad',
  operationId: 'movePadUsingPOST',
  request: {
    query: z.object({
      sourceID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sourceID', schema: { type: 'string' }, required: false },
        }),
      destinationID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'destinationID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPadUsersRoute = createRoute({
  method: 'get',
  path: '/padUsers',
  tags: ['pad'],
  summary: 'returns the list of users that are currently editing this pad',
  operationId: 'padUsersUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  padUsers: z
                    .array(
                      z
                        .object({
                          colorId: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          timestamp: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postPadUsersRoute = createRoute({
  method: 'post',
  path: '/padUsers',
  tags: ['pad'],
  summary: 'returns the list of users that are currently editing this pad',
  operationId: 'padUsersUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({
                  padUsers: z
                    .array(
                      z
                        .object({
                          colorId: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          timestamp: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPadUsersCountRoute = createRoute({
  method: 'get',
  path: '/padUsersCount',
  tags: ['pad'],
  summary: 'returns the number of user that are currently editing this pad',
  operationId: 'padUsersCountUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padUsersCount: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postPadUsersCountRoute = createRoute({
  method: 'post',
  path: '/padUsersCount',
  tags: ['pad'],
  summary: 'returns the number of user that are currently editing this pad',
  operationId: 'padUsersCountUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z
                .object({ padUsersCount: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestoreRevisionRoute = createRoute({
  method: 'get',
  path: '/restoreRevision',
  operationId: 'restoreRevisionUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postRestoreRevisionRoute = createRoute({
  method: 'post',
  path: '/restoreRevision',
  operationId: 'restoreRevisionUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSaveRevisionRoute = createRoute({
  method: 'get',
  path: '/saveRevision',
  operationId: 'saveRevisionUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSaveRevisionRoute = createRoute({
  method: 'post',
  path: '/saveRevision',
  operationId: 'saveRevisionUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      rev: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rev', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSendClientsMessageRoute = createRoute({
  method: 'get',
  path: '/sendClientsMessage',
  tags: ['pad'],
  summary: 'sends a custom message of type msg to the pad',
  operationId: 'sendClientsMessageUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      msg: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'msg', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSendClientsMessageRoute = createRoute({
  method: 'post',
  path: '/sendClientsMessage',
  tags: ['pad'],
  summary: 'sends a custom message of type msg to the pad',
  operationId: 'sendClientsMessageUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      msg: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'msg', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSetHTMLRoute = createRoute({
  method: 'get',
  path: '/setHTML',
  tags: ['pad'],
  summary: 'sets the text of a pad with HTML',
  operationId: 'setHTMLUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      html: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'html', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSetHTMLRoute = createRoute({
  method: 'post',
  path: '/setHTML',
  tags: ['pad'],
  summary: 'sets the text of a pad with HTML',
  operationId: 'setHTMLUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      html: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'html', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSetPublicStatusRoute = createRoute({
  method: 'get',
  path: '/setPublicStatus',
  tags: ['pad'],
  summary: 'sets a boolean for the public status of a pad',
  operationId: 'setPublicStatusUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      publicStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publicStatus', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSetPublicStatusRoute = createRoute({
  method: 'post',
  path: '/setPublicStatus',
  tags: ['pad'],
  summary: 'sets a boolean for the public status of a pad',
  operationId: 'setPublicStatusUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      publicStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publicStatus', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSetTextRoute = createRoute({
  method: 'get',
  path: '/setText',
  tags: ['pad'],
  summary: 'sets the text of a pad',
  operationId: 'setTextUsingGET',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSetTextRoute = createRoute({
  method: 'post',
  path: '/setText',
  tags: ['pad'],
  summary: 'sets the text of a pad',
  operationId: 'setTextUsingPOST',
  request: {
    query: z.object({
      padID: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'padID', schema: { type: 'string' }, required: false },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'text', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ok (code 0)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 0 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'ok' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'generic api error (code 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 1 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'error message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'no or wrong API key (code 4)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 4 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'no or wrong API key' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'internal api error (code 2)',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().exactOptional().openapi({ example: 2 }),
              data: z.object({}).exactOptional().openapi({ example: null }),
              message: z.string().exactOptional().openapi({ example: 'internal error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
