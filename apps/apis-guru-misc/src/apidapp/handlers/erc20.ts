import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getErc20AddressRoute,
  getErc20Route,
  optionsErc20AddressRoute,
  optionsErc20Route,
  postErc20AddressRoute,
  postErc20Route,
} from '../routes'

const app = new OpenAPIHono()

export const erc20Handler = app
  .openapi(getErc20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsErc20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postErc20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getErc20AddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsErc20AddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postErc20AddressRoute, (c) => {
    throw new Error('Not implemented')
  })
