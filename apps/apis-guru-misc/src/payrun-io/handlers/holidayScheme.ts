import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  getEmployerEmployerIdHolidaySchemesEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemesRoute,
  patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  postEmployerEmployerIdHolidaySchemesRoute,
  putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holidaySchemeHandler = app
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdHolidaySchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
