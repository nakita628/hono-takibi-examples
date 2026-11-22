import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  getOrganizationsOrganizationUuidDiscountsRoute,
  postOrganizationsOrganizationUuidDiscountsRoute,
  putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discountsHandler = app
  .openapi(getOrganizationsOrganizationUuidDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
