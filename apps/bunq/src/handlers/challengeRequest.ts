import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDChallengeRequestItemIdRoute,
  putUserUserIDChallengeRequestItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const challengeRequestHandler = app
  .openapi(getUserUserIDChallengeRequestItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDChallengeRequestItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
