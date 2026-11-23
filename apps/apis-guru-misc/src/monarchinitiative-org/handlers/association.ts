import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssociationBetweenSubjectObjectRoute,
  getAssociationFindSubjectCategoryObjectCategoryRoute,
  getAssociationFindSubjectCategoryRoute,
  getAssociationFromSubjectRoute,
  getAssociationIdRoute,
  getAssociationToObjectRoute,
  getAssociationTypeAssociationTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const associationHandler = app
  .openapi(getAssociationBetweenSubjectObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationFindSubjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationFindSubjectCategoryObjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationFromSubjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationToObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationTypeAssociationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
