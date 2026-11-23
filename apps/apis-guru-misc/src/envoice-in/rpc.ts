import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiClientAll(
  args: InferRequestType<typeof client.api.client.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.all.$get(args, options))
}

export async function getApiClientCandelete(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.candelete.$get(args, options))
}

export async function postApiClientDelete(
  args: InferRequestType<typeof client.api.client.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.delete.$post(args, options))
}

export async function getApiClientDetails(
  args: InferRequestType<typeof client.api.client.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.details.$get(args, options))
}

export async function postApiClientNew(
  args: InferRequestType<typeof client.api.client.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.new.$post(args, options))
}

export async function postApiClientUpdate(
  args: InferRequestType<typeof client.api.client.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.update.$post(args, options))
}

export async function getApiEstimationAll(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.all.$get(args, options))
}

export async function postApiEstimationChangestatus(
  args: InferRequestType<typeof client.api.estimation.changestatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.changestatus.$post(args, options))
}

export async function postApiEstimationConvert(
  args: InferRequestType<typeof client.api.estimation.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.convert.$post(args, options))
}

export async function postApiEstimationDelete(
  args: InferRequestType<typeof client.api.estimation.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.delete.$post(args, options))
}

export async function getApiEstimationDetails(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.details.$get(args, options))
}

export async function postApiEstimationNew(
  args: InferRequestType<typeof client.api.estimation.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.new.$post(args, options))
}

export async function postApiEstimationSendtoclient(
  args: InferRequestType<typeof client.api.estimation.sendtoclient.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.sendtoclient.$post(args, options))
}

export async function getApiEstimationStatus(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.status.$get(args, options))
}

export async function postApiEstimationUpdate(
  args: InferRequestType<typeof client.api.estimation.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.update.$post(args, options))
}

export async function getApiEstimationUri(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.estimation.uri.$get(args, options))
}

export async function getApiGeneralCountries(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.general.countries.$get(args, options))
}

export async function getApiGeneralCurrencies(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.general.currencies.$get(args, options))
}

export async function getApiGeneralDateformats(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.general.dateformats.$get(args, options))
}

export async function getApiGeneralUilanguages(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.general.uilanguages.$get(args, options))
}

export async function getApiInvoiceAll(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.all.$get(args, options))
}

export async function getApiInvoiceAllcategories(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.allcategories.$get(args, options))
}

export async function postApiInvoiceChangestatus(
  args: InferRequestType<typeof client.api.invoice.changestatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.changestatus.$post(args, options))
}

export async function postApiInvoiceDelete(
  args: InferRequestType<typeof client.api.invoice.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.delete.$post(args, options))
}

export async function postApiInvoiceDeletecategory(
  args: InferRequestType<typeof client.api.invoice.deletecategory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.deletecategory.$post(args, options))
}

export async function getApiInvoiceDetails(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.details.$get(args, options))
}

export async function postApiInvoiceNew(
  args: InferRequestType<typeof client.api.invoice.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.new.$post(args, options))
}

export async function postApiInvoiceNewcategory(
  args: InferRequestType<typeof client.api.invoice.newcategory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.newcategory.$post(args, options))
}

export async function getApiInvoicePdf(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.pdf.$get(args, options))
}

export async function postApiInvoiceSendtoaccountant(
  args: InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.sendtoaccountant.$post(args, options))
}

export async function postApiInvoiceSendtoclient(
  args: InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.sendtoclient.$post(args, options))
}

export async function getApiInvoiceStatus(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.status.$get(args, options))
}

export async function postApiInvoiceUpdate(
  args: InferRequestType<typeof client.api.invoice.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.update.$post(args, options))
}

export async function postApiInvoiceUpdatecategory(
  args: InferRequestType<typeof client.api.invoice.updatecategory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.updatecategory.$post(args, options))
}

export async function getApiInvoiceUri(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoice.uri.$get(args, options))
}

export async function getApiOrderAll(
  args: InferRequestType<typeof client.api.order.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.all.$get(args, options))
}

export async function postApiOrderChangeshippingdetails(
  args: InferRequestType<typeof client.api.order.changeshippingdetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.changeshippingdetails.$post(args, options))
}

export async function postApiOrderChangestatus(
  args: InferRequestType<typeof client.api.order.changestatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.changestatus.$post(args, options))
}

export async function postApiOrderDelete(
  args: InferRequestType<typeof client.api.order.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.delete.$post(args, options))
}

export async function getApiOrderDetails(
  args: InferRequestType<typeof client.api.order.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.details.$get(args, options))
}

export async function postApiOrderNew(
  args: InferRequestType<typeof client.api.order.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.order.new.$post(args, options))
}

export async function getApiPaymentSupported(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment.supported.$get(args, options))
}

export async function getApiPaymentlinkAll(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.paymentlink.all.$get(args, options))
}

export async function postApiPaymentlinkDelete(
  args: InferRequestType<typeof client.api.paymentlink.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.paymentlink.delete.$post(args, options))
}

export async function postApiPaymentlinkNew(
  args: InferRequestType<typeof client.api.paymentlink.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.paymentlink.new.$post(args, options))
}

export async function getApiPaymentlinkUri(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.paymentlink.uri.$get(args, options))
}

export async function getApiProductAll(
  args: InferRequestType<typeof client.api.product.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.product.all.$get(args, options))
}

export async function postApiProductDelete(
  args: InferRequestType<typeof client.api.product.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.product.delete.$post(args, options))
}

export async function getApiProductDetails(
  args: InferRequestType<typeof client.api.product.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.product.details.$get(args, options))
}

export async function postApiProductNew(
  args: InferRequestType<typeof client.api.product.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.product.new.$post(args, options))
}

export async function postApiProductUpdate(
  args: InferRequestType<typeof client.api.product.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.product.update.$post(args, options))
}

export async function getApiTaxAll(
  args: InferRequestType<typeof client.api.tax.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tax.all.$get(args, options))
}

export async function postApiTaxDelete(
  args: InferRequestType<typeof client.api.tax.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tax.delete.$post(args, options))
}

export async function postApiTaxNew(
  args: InferRequestType<typeof client.api.tax.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tax.new.$post(args, options))
}

export async function postApiTaxUpdate(
  args: InferRequestType<typeof client.api.tax.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tax.update.$post(args, options))
}

export async function getApiWorktypeAll(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.all.$get(args, options))
}

export async function postApiWorktypeDelete(
  args: InferRequestType<typeof client.api.worktype.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.delete.$post(args, options))
}

export async function getApiWorktypeDetails(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.details.$get(args, options))
}

export async function postApiWorktypeNew(
  args: InferRequestType<typeof client.api.worktype.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.new.$post(args, options))
}

export async function getApiWorktypeSearch(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.search.$get(args, options))
}

export async function postApiWorktypeUpdate(
  args: InferRequestType<typeof client.api.worktype.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.worktype.update.$post(args, options))
}
