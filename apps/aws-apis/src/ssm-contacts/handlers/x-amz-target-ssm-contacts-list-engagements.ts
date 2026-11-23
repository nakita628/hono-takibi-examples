import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListEngagementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListEngagementsHandler = app.openapi(
  postXAmzTargetSSMContactsListEngagementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
