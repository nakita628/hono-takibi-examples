import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.license.$get(undefined, options))
}

export async function postLicense(
  args: InferRequestType<typeof client.license.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license.$post(args, options))
}

export async function getLicenseLicenseNumber(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license[':licenseNumber'].$get(args, options))
}

export async function postLicenseLicenseNumber(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license[':licenseNumber'].$post(args, options))
}

export async function deleteLicenseLicenseNumber(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license[':licenseNumber'].$delete(args, options))
}

export async function getLicensee(options?: ClientRequestOptions) {
  return await parseResponse(client.licensee.$get(undefined, options))
}

export async function postLicensee(
  args: InferRequestType<typeof client.licensee.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee.$post(args, options))
}

export async function getLicenseeLicenseeNumber(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee[':licenseeNumber'].$get(args, options))
}

export async function postLicenseeLicenseeNumber(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee[':licenseeNumber'].$post(args, options))
}

export async function deleteLicenseeLicenseeNumber(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee[':licenseeNumber'].$delete(args, options))
}

export async function postLicenseeLicenseeNumberTransfer(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee[':licenseeNumber'].transfer.$post(args, options))
}

export async function postLicenseeLicenseeNumberValidate(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensee[':licenseeNumber'].validate.$post(args, options))
}

export async function getLicensetemplate(options?: ClientRequestOptions) {
  return await parseResponse(client.licensetemplate.$get(undefined, options))
}

export async function postLicensetemplate(
  args: InferRequestType<typeof client.licensetemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensetemplate.$post(args, options))
}

export async function getLicensetemplateLicenseTemplateNumber(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensetemplate[':licenseTemplateNumber'].$get(args, options))
}

export async function postLicensetemplateLicenseTemplateNumber(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensetemplate[':licenseTemplateNumber'].$post(args, options))
}

export async function deleteLicensetemplateLicenseTemplateNumber(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.licensetemplate[':licenseTemplateNumber'].$delete(args, options),
  )
}

export async function getPaymentmethod(options?: ClientRequestOptions) {
  return await parseResponse(client.paymentmethod.$get(undefined, options))
}

export async function getPaymentmethodPaymentMethodNumber(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentmethod[':paymentMethodNumber'].$get(args, options))
}

export async function postPaymentmethodPaymentMethodNumber(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentmethod[':paymentMethodNumber'].$post(args, options))
}

export async function getProduct(options?: ClientRequestOptions) {
  return await parseResponse(client.product.$get(undefined, options))
}

export async function postProduct(
  args: InferRequestType<typeof client.product.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product.$post(args, options))
}

export async function getProductProductNumber(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product[':productNumber'].$get(args, options))
}

export async function postProductProductNumber(
  args: InferRequestType<(typeof client.product)[':productNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product[':productNumber'].$post(args, options))
}

export async function deleteProductProductNumber(
  args: InferRequestType<(typeof client.product)[':productNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product[':productNumber'].$delete(args, options))
}

export async function getProductmodule(options?: ClientRequestOptions) {
  return await parseResponse(client.productmodule.$get(undefined, options))
}

export async function postProductmodule(
  args: InferRequestType<typeof client.productmodule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productmodule.$post(args, options))
}

export async function getProductmoduleProductModuleNumber(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productmodule[':productModuleNumber'].$get(args, options))
}

export async function postProductmoduleProductModuleNumber(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productmodule[':productModuleNumber'].$post(args, options))
}

export async function deleteProductmoduleProductModuleNumber(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productmodule[':productModuleNumber'].$delete(args, options))
}

export async function getToken(options?: ClientRequestOptions) {
  return await parseResponse(client.token.$get(undefined, options))
}

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function getTokenTokenNumber(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token[':tokenNumber'].$get(args, options))
}

export async function deleteTokenTokenNumber(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token[':tokenNumber'].$delete(args, options))
}

export async function getTransaction(options?: ClientRequestOptions) {
  return await parseResponse(client.transaction.$get(undefined, options))
}

export async function postTransaction(
  args: InferRequestType<typeof client.transaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction.$post(args, options))
}

export async function getTransactionTransactionNumber(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':transactionNumber'].$get(args, options))
}

export async function postTransactionTransactionNumber(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':transactionNumber'].$post(args, options))
}

export async function getUtilityLicenseTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.utility.licenseTypes.$get(undefined, options))
}

export async function getUtilityLicensingModels(options?: ClientRequestOptions) {
  return await parseResponse(client.utility.licensingModels.$get(undefined, options))
}
