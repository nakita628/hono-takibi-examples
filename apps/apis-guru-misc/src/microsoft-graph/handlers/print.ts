import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrintConnectorsCountRoute,
  getPrintOperationsCountRoute,
  getPrintPrintersCountRoute,
  getPrintPrintersPrinterIdConnectorsCountRoute,
  getPrintPrintersPrinterIdSharesCountRoute,
  getPrintPrintersPrinterIdTaskTriggersCountRoute,
  getPrintServicesCountRoute,
  getPrintServicesPrintServiceIdEndpointsCountRoute,
  getPrintSharesCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsCountRoute,
  getPrintSharesPrinterShareIdAllowedUsersCountRoute,
  getPrintTaskDefinitionsCountRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printHandler = app
  .openapi(getPrintConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintServicesPrintServiceIdEndpointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
