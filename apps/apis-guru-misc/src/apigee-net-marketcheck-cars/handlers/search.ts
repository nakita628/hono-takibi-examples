import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchCarActiveRoute,
  getSearchCarAuctionActiveRoute,
  getSearchCarAutoCompleteRoute,
  getSearchCarFsboActiveRoute,
  getSearchCarIncentiveOemRoute,
  getSearchCarRecentsRoute,
  getSearchCarUkActiveRoute,
  getSearchCarUkRecentsRoute,
  getSearchHeavyEquipmentActiveRoute,
  getSearchHeavyEquipmentAutoCompleteRoute,
  getSearchMotorcycleActiveRoute,
  getSearchMotorcycleAutoCompleteRoute,
  getSearchRvActiveRoute,
  getSearchRvAutoCompleteRoute,
  getSearchRvUkActiveRoute,
  postSearchCarActiveRankListingsRoute,
  postSearchCarActiveRankRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchCarActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchCarActiveRankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchCarActiveRankListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarAuctionActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarFsboActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarIncentiveOemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarRecentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarUkActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarUkRecentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchHeavyEquipmentActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchHeavyEquipmentAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMotorcycleActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMotorcycleAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvUkActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
