import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute,
  deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute,
  deletePrintSharesPrinterShareIdRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRoute,
  getPrintSharesPrinterShareIdAllowedUsersRefRoute,
  getPrintSharesPrinterShareIdAllowedUsersRoute,
  getPrintSharesPrinterShareIdPrinterRoute,
  getPrintSharesPrinterShareIdRoute,
  getPrintSharesRoute,
  patchPrintSharesPrinterShareIdRoute,
  postPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  postPrintSharesPrinterShareIdAllowedUsersRefRoute,
  postPrintSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrinterShareHandler = app
  .openapi(getPrintSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdAllowedGroupsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdAllowedUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
