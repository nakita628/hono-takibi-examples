import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReplaceIamInstanceProfileAssociationRoute,
  postActionReplaceIamInstanceProfileAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionReplaceIamInstanceProfileAssociationHandler = app
  .openapi(getActionReplaceIamInstanceProfileAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceIamInstanceProfileAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
