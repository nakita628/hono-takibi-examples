import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestaurantsTenantRestaurantIdCustomerclaimsRoute,
  getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute,
  postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute,
  putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restaurantClaimsHandler = app
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute, (c) => {})
  .openapi(postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute, (c) => {})
  .openapi(
    putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
    (c) => {},
  )
