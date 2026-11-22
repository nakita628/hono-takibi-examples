import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2RelationshipsDefinitionsTargetTypeRoute,
  getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lookupRelationshipsHandler = app
  .openapi(getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RelationshipsDefinitionsTargetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
