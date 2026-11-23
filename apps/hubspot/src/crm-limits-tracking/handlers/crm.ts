import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmLimits202609AssociationsLabelsRoute,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRoute,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRoute,
  getCrmLimits202609AssociationsRecordsFromRoute,
  getCrmLimits202609CalculatedPropertiesRoute,
  getCrmLimits202609CustomObjectTypesRoute,
  getCrmLimits202609CustomPropertiesRoute,
  getCrmLimits202609PipelinesRoute,
  getCrmLimits202609RecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmLimits202609AssociationsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609AssociationsRecordsFromRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609CalculatedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609CustomObjectTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609CustomPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609PipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLimits202609RecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
