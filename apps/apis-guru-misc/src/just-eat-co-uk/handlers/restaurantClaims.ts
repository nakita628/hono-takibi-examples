import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute,
  getRestaurantsTenantRestaurantIdCustomerclaimsRoute,
  postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute,
  putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restaurantClaimsHandler = app
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
