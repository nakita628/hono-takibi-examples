import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicenseeLicenseeNumberRoute,
  deleteLicenseLicenseNumberRoute,
  deleteLicensetemplateLicenseTemplateNumberRoute,
  deleteProductmoduleProductModuleNumberRoute,
  deleteProductProductNumberRoute,
  deleteTokenTokenNumberRoute,
  getLicenseeLicenseeNumberRoute,
  getLicenseeRoute,
  getLicenseLicenseNumberRoute,
  getLicenseRoute,
  getLicensetemplateLicenseTemplateNumberRoute,
  getLicensetemplateRoute,
  getPaymentmethodPaymentMethodNumberRoute,
  getPaymentmethodRoute,
  getProductmoduleProductModuleNumberRoute,
  getProductmoduleRoute,
  getProductProductNumberRoute,
  getProductRoute,
  getTokenRoute,
  getTokenTokenNumberRoute,
  getTransactionRoute,
  getTransactionTransactionNumberRoute,
  getUtilityLicenseTypesRoute,
  getUtilityLicensingModelsRoute,
  postLicenseeLicenseeNumberRoute,
  postLicenseeLicenseeNumberTransferRoute,
  postLicenseeLicenseeNumberValidateRoute,
  postLicenseeRoute,
  postLicenseLicenseNumberRoute,
  postLicenseRoute,
  postLicensetemplateLicenseTemplateNumberRoute,
  postLicensetemplateRoute,
  postPaymentmethodPaymentMethodNumberRoute,
  postProductmoduleProductModuleNumberRoute,
  postProductmoduleRoute,
  postProductProductNumberRoute,
  postProductRoute,
  postTokenRoute,
  postTransactionRoute,
  postTransactionTransactionNumberRoute,
} from './routes'
import {
  deleteLicenseeLicenseeNumberRouteHandler,
  deleteLicenseLicenseNumberRouteHandler,
  deleteLicensetemplateLicenseTemplateNumberRouteHandler,
  deleteProductmoduleProductModuleNumberRouteHandler,
  deleteProductProductNumberRouteHandler,
  deleteTokenTokenNumberRouteHandler,
  getLicenseeLicenseeNumberRouteHandler,
  getLicenseeRouteHandler,
  getLicenseLicenseNumberRouteHandler,
  getLicenseRouteHandler,
  getLicensetemplateLicenseTemplateNumberRouteHandler,
  getLicensetemplateRouteHandler,
  getPaymentmethodPaymentMethodNumberRouteHandler,
  getPaymentmethodRouteHandler,
  getProductmoduleProductModuleNumberRouteHandler,
  getProductmoduleRouteHandler,
  getProductProductNumberRouteHandler,
  getProductRouteHandler,
  getTokenRouteHandler,
  getTokenTokenNumberRouteHandler,
  getTransactionRouteHandler,
  getTransactionTransactionNumberRouteHandler,
  getUtilityLicenseTypesRouteHandler,
  getUtilityLicensingModelsRouteHandler,
  postLicenseeLicenseeNumberRouteHandler,
  postLicenseeLicenseeNumberTransferRouteHandler,
  postLicenseeLicenseeNumberValidateRouteHandler,
  postLicenseeRouteHandler,
  postLicenseLicenseNumberRouteHandler,
  postLicenseRouteHandler,
  postLicensetemplateLicenseTemplateNumberRouteHandler,
  postLicensetemplateRouteHandler,
  postPaymentmethodPaymentMethodNumberRouteHandler,
  postProductmoduleProductModuleNumberRouteHandler,
  postProductmoduleRouteHandler,
  postProductProductNumberRouteHandler,
  postProductRouteHandler,
  postTokenRouteHandler,
  postTransactionRouteHandler,
  postTransactionTransactionNumberRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getLicenseRoute, getLicenseRouteHandler)
  .openapi(postLicenseRoute, postLicenseRouteHandler)
  .openapi(deleteLicenseLicenseNumberRoute, deleteLicenseLicenseNumberRouteHandler)
  .openapi(getLicenseLicenseNumberRoute, getLicenseLicenseNumberRouteHandler)
  .openapi(postLicenseLicenseNumberRoute, postLicenseLicenseNumberRouteHandler)
  .openapi(getLicenseeRoute, getLicenseeRouteHandler)
  .openapi(postLicenseeRoute, postLicenseeRouteHandler)
  .openapi(deleteLicenseeLicenseeNumberRoute, deleteLicenseeLicenseeNumberRouteHandler)
  .openapi(getLicenseeLicenseeNumberRoute, getLicenseeLicenseeNumberRouteHandler)
  .openapi(postLicenseeLicenseeNumberRoute, postLicenseeLicenseeNumberRouteHandler)
  .openapi(postLicenseeLicenseeNumberTransferRoute, postLicenseeLicenseeNumberTransferRouteHandler)
  .openapi(postLicenseeLicenseeNumberValidateRoute, postLicenseeLicenseeNumberValidateRouteHandler)
  .openapi(getLicensetemplateRoute, getLicensetemplateRouteHandler)
  .openapi(postLicensetemplateRoute, postLicensetemplateRouteHandler)
  .openapi(
    deleteLicensetemplateLicenseTemplateNumberRoute,
    deleteLicensetemplateLicenseTemplateNumberRouteHandler,
  )
  .openapi(
    getLicensetemplateLicenseTemplateNumberRoute,
    getLicensetemplateLicenseTemplateNumberRouteHandler,
  )
  .openapi(
    postLicensetemplateLicenseTemplateNumberRoute,
    postLicensetemplateLicenseTemplateNumberRouteHandler,
  )
  .openapi(getPaymentmethodRoute, getPaymentmethodRouteHandler)
  .openapi(
    getPaymentmethodPaymentMethodNumberRoute,
    getPaymentmethodPaymentMethodNumberRouteHandler,
  )
  .openapi(
    postPaymentmethodPaymentMethodNumberRoute,
    postPaymentmethodPaymentMethodNumberRouteHandler,
  )
  .openapi(getProductRoute, getProductRouteHandler)
  .openapi(postProductRoute, postProductRouteHandler)
  .openapi(deleteProductProductNumberRoute, deleteProductProductNumberRouteHandler)
  .openapi(getProductProductNumberRoute, getProductProductNumberRouteHandler)
  .openapi(postProductProductNumberRoute, postProductProductNumberRouteHandler)
  .openapi(getProductmoduleRoute, getProductmoduleRouteHandler)
  .openapi(postProductmoduleRoute, postProductmoduleRouteHandler)
  .openapi(
    deleteProductmoduleProductModuleNumberRoute,
    deleteProductmoduleProductModuleNumberRouteHandler,
  )
  .openapi(
    getProductmoduleProductModuleNumberRoute,
    getProductmoduleProductModuleNumberRouteHandler,
  )
  .openapi(
    postProductmoduleProductModuleNumberRoute,
    postProductmoduleProductModuleNumberRouteHandler,
  )
  .openapi(getTokenRoute, getTokenRouteHandler)
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(deleteTokenTokenNumberRoute, deleteTokenTokenNumberRouteHandler)
  .openapi(getTokenTokenNumberRoute, getTokenTokenNumberRouteHandler)
  .openapi(getTransactionRoute, getTransactionRouteHandler)
  .openapi(postTransactionRoute, postTransactionRouteHandler)
  .openapi(getTransactionTransactionNumberRoute, getTransactionTransactionNumberRouteHandler)
  .openapi(postTransactionTransactionNumberRoute, postTransactionTransactionNumberRouteHandler)
  .openapi(getUtilityLicenseTypesRoute, getUtilityLicenseTypesRouteHandler)
  .openapi(getUtilityLicensingModelsRoute, getUtilityLicensingModelsRouteHandler)

export default app
