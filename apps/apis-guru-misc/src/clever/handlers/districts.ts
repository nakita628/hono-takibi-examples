import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistrictsIdAdminsRoute,
  getDistrictsIdRoute,
  getDistrictsIdSchoolsRoute,
  getDistrictsIdSectionsRoute,
  getDistrictsIdStatusRoute,
  getDistrictsIdStudentsRoute,
  getDistrictsIdTeachersRoute,
  getDistrictsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const districtsHandler = app
  .openapi(getDistrictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
