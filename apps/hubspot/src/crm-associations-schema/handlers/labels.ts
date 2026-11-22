import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
  getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
