import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBankAccountsIdRoute,
  deleteDocumentsIdPaymentsRoute,
  deletePartnersIdRoute,
  deleteProductsIdRoute,
  getBankAccountsIdRoute,
  getBankAccountsRoute,
  getCurrenciesRoute,
  getDocumentBlocksRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdOnlineSzamlaRoute,
  getDocumentsIdPaymentsRoute,
  getDocumentsIdPublicUrlRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  getOrganizationRoute,
  getPartnersIdRoute,
  getPartnersRoute,
  getProductsIdRoute,
  getProductsRoute,
  getUtilsConvertLegacyIdIdRoute,
  postBankAccountsRoute,
  postDocumentsIdCancelRoute,
  postDocumentsIdCreateFromProformaRoute,
  postDocumentsIdSendRoute,
  postDocumentsRoute,
  postPartnersRoute,
  postProductsRoute,
  putBankAccountsIdRoute,
  putDocumentsIdPaymentsRoute,
  putPartnersIdRoute,
  putProductsIdRoute,
} from './routes'
import {
  deleteBankAccountsIdRouteHandler,
  deleteDocumentsIdPaymentsRouteHandler,
  deletePartnersIdRouteHandler,
  deleteProductsIdRouteHandler,
  getBankAccountsIdRouteHandler,
  getBankAccountsRouteHandler,
  getCurrenciesRouteHandler,
  getDocumentBlocksRouteHandler,
  getDocumentsIdDownloadRouteHandler,
  getDocumentsIdOnlineSzamlaRouteHandler,
  getDocumentsIdPaymentsRouteHandler,
  getDocumentsIdPublicUrlRouteHandler,
  getDocumentsIdRouteHandler,
  getDocumentsRouteHandler,
  getOrganizationRouteHandler,
  getPartnersIdRouteHandler,
  getPartnersRouteHandler,
  getProductsIdRouteHandler,
  getProductsRouteHandler,
  getUtilsConvertLegacyIdIdRouteHandler,
  postBankAccountsRouteHandler,
  postDocumentsIdCancelRouteHandler,
  postDocumentsIdCreateFromProformaRouteHandler,
  postDocumentsIdSendRouteHandler,
  postDocumentsRouteHandler,
  postPartnersRouteHandler,
  postProductsRouteHandler,
  putBankAccountsIdRouteHandler,
  putDocumentsIdPaymentsRouteHandler,
  putPartnersIdRouteHandler,
  putProductsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBankAccountsRoute, getBankAccountsRouteHandler)
  .openapi(postBankAccountsRoute, postBankAccountsRouteHandler)
  .openapi(deleteBankAccountsIdRoute, deleteBankAccountsIdRouteHandler)
  .openapi(getBankAccountsIdRoute, getBankAccountsIdRouteHandler)
  .openapi(putBankAccountsIdRoute, putBankAccountsIdRouteHandler)
  .openapi(getCurrenciesRoute, getCurrenciesRouteHandler)
  .openapi(getDocumentBlocksRoute, getDocumentBlocksRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(getDocumentsIdRoute, getDocumentsIdRouteHandler)
  .openapi(postDocumentsIdCancelRoute, postDocumentsIdCancelRouteHandler)
  .openapi(postDocumentsIdCreateFromProformaRoute, postDocumentsIdCreateFromProformaRouteHandler)
  .openapi(getDocumentsIdDownloadRoute, getDocumentsIdDownloadRouteHandler)
  .openapi(getDocumentsIdOnlineSzamlaRoute, getDocumentsIdOnlineSzamlaRouteHandler)
  .openapi(deleteDocumentsIdPaymentsRoute, deleteDocumentsIdPaymentsRouteHandler)
  .openapi(getDocumentsIdPaymentsRoute, getDocumentsIdPaymentsRouteHandler)
  .openapi(putDocumentsIdPaymentsRoute, putDocumentsIdPaymentsRouteHandler)
  .openapi(getDocumentsIdPublicUrlRoute, getDocumentsIdPublicUrlRouteHandler)
  .openapi(postDocumentsIdSendRoute, postDocumentsIdSendRouteHandler)
  .openapi(getOrganizationRoute, getOrganizationRouteHandler)
  .openapi(getPartnersRoute, getPartnersRouteHandler)
  .openapi(postPartnersRoute, postPartnersRouteHandler)
  .openapi(deletePartnersIdRoute, deletePartnersIdRouteHandler)
  .openapi(getPartnersIdRoute, getPartnersIdRouteHandler)
  .openapi(putPartnersIdRoute, putPartnersIdRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(postProductsRoute, postProductsRouteHandler)
  .openapi(deleteProductsIdRoute, deleteProductsIdRouteHandler)
  .openapi(getProductsIdRoute, getProductsIdRouteHandler)
  .openapi(putProductsIdRoute, putProductsIdRouteHandler)
  .openapi(getUtilsConvertLegacyIdIdRoute, getUtilsConvertLegacyIdIdRouteHandler)

export default app
