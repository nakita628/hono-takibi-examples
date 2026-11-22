import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmAssociations202609DefinitionsConfigurationsAllRoute,
  getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
  getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  postCrmAssociations202609UsageHighUsageReportUserIdRoute,
  postCrmObjects202609ObjectTypeRoute,
  putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmAssociations202609DefinitionsConfigurationsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
    (c) => {},
  )
  .openapi(postCrmAssociations202609UsageHighUsageReportUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    (c) => {},
  )
  .openapi(getCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
