import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountsBalanceGet(
  args: InferRequestType<typeof client.accounts.balance.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.balance.get.$post(args, options))
}

export async function postAccountsGet(
  args: InferRequestType<typeof client.accounts.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.get.$post(args, options))
}

export async function postApplicationGet(
  args: InferRequestType<typeof client.application.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.application.get.$post(args, options))
}

export async function postAssetReportAuditCopyCreate(
  args: InferRequestType<typeof client.asset_report.audit_copy.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.audit_copy.create.$post(args, options))
}

export async function postAssetReportAuditCopyGet(
  args: InferRequestType<typeof client.asset_report.audit_copy.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.audit_copy.get.$post(args, options))
}

export async function postAssetReportAuditCopyRemove(
  args: InferRequestType<typeof client.asset_report.audit_copy.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.audit_copy.remove.$post(args, options))
}

export async function postAssetReportCreate(
  args: InferRequestType<typeof client.asset_report.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.create.$post(args, options))
}

export async function postAssetReportFilter(
  args: InferRequestType<typeof client.asset_report.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.filter.$post(args, options))
}

export async function postAssetReportGet(
  args: InferRequestType<typeof client.asset_report.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.get.$post(args, options))
}

export async function postAssetReportPdfGet(
  args: InferRequestType<typeof client.asset_report.pdf.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.pdf.get.$post(args, options))
}

export async function postAssetReportRefresh(
  args: InferRequestType<typeof client.asset_report.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.refresh.$post(args, options))
}

export async function postAssetReportRemove(
  args: InferRequestType<typeof client.asset_report.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset_report.remove.$post(args, options))
}

export async function postAuthGet(
  args: InferRequestType<typeof client.auth.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.get.$post(args, options))
}

export async function postBankTransferBalanceGet(
  args: InferRequestType<typeof client.bank_transfer.balance.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.balance.get.$post(args, options))
}

export async function postBankTransferCancel(
  args: InferRequestType<typeof client.bank_transfer.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.cancel.$post(args, options))
}

export async function postBankTransferCreate(
  args: InferRequestType<typeof client.bank_transfer.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.create.$post(args, options))
}

export async function postBankTransferEventList(
  args: InferRequestType<typeof client.bank_transfer.event.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.event.list.$post(args, options))
}

export async function postBankTransferEventSync(
  args: InferRequestType<typeof client.bank_transfer.event.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.event.sync.$post(args, options))
}

export async function postBankTransferGet(
  args: InferRequestType<typeof client.bank_transfer.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.get.$post(args, options))
}

export async function postBankTransferList(
  args: InferRequestType<typeof client.bank_transfer.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.list.$post(args, options))
}

export async function postBankTransferMigrateAccount(
  args: InferRequestType<typeof client.bank_transfer.migrate_account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.migrate_account.$post(args, options))
}

export async function postBankTransferSweepGet(
  args: InferRequestType<typeof client.bank_transfer.sweep.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.sweep.get.$post(args, options))
}

export async function postBankTransferSweepList(
  args: InferRequestType<typeof client.bank_transfer.sweep.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_transfer.sweep.list.$post(args, options))
}

export async function postBetaCreditV1BankEmploymentGet(
  args: InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.credit.v1.bank_employment.get.$post(args, options))
}

export async function postBetaTransactionsRulesV1Create(
  args: InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.transactions.rules.v1.create.$post(args, options))
}

export async function postBetaTransactionsRulesV1List(
  args: InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.transactions.rules.v1.list.$post(args, options))
}

export async function postBetaTransactionsRulesV1Remove(
  args: InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.transactions.rules.v1.remove.$post(args, options))
}

export async function postBetaTransactionsV1Enhance(
  args: InferRequestType<typeof client.beta.transactions.v1.enhance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.transactions.v1.enhance.$post(args, options))
}

export async function postCategoriesGet(
  args: InferRequestType<typeof client.categories.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.get.$post(args, options))
}

export async function postCreditAssetReportFreddieMacGet(
  args: InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.asset_report.freddie_mac.get.$post(args, options))
}

export async function postCreditAuditCopyTokenCreate(
  args: InferRequestType<typeof client.credit.audit_copy_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.audit_copy_token.create.$post(args, options))
}

export async function postCreditAuditCopyTokenRemove(
  args: InferRequestType<typeof client.credit.audit_copy_token.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.audit_copy_token.remove.$post(args, options))
}

export async function postCreditAuditCopyTokenUpdate(
  args: InferRequestType<typeof client.credit.audit_copy_token.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.audit_copy_token.update.$post(args, options))
}

export async function postCreditBankIncomeGet(
  args: InferRequestType<typeof client.credit.bank_income.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.bank_income.get.$post(args, options))
}

export async function postCreditBankIncomePdfGet(
  args: InferRequestType<typeof client.credit.bank_income.pdf.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.bank_income.pdf.get.$post(args, options))
}

export async function postCreditBankIncomeRefresh(
  args: InferRequestType<typeof client.credit.bank_income.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.bank_income.refresh.$post(args, options))
}

export async function postCreditEmploymentGet(
  args: InferRequestType<typeof client.credit.employment.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.employment.get.$post(args, options))
}

export async function postCreditFreddieMacReportsGet(
  args: InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.freddie_mac.reports.get.$post(args, options))
}

export async function postCreditPayrollIncomeGet(
  args: InferRequestType<typeof client.credit.payroll_income.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.payroll_income.get.$post(args, options))
}

export async function postCreditPayrollIncomePrecheck(
  args: InferRequestType<typeof client.credit.payroll_income.precheck.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.payroll_income.precheck.$post(args, options))
}

export async function postCreditPayrollIncomeRefresh(
  args: InferRequestType<typeof client.credit.payroll_income.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.payroll_income.refresh.$post(args, options))
}

export async function postCreditRelayCreate(
  args: InferRequestType<typeof client.credit.relay.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.relay.create.$post(args, options))
}

export async function postCreditRelayGet(
  args: InferRequestType<typeof client.credit.relay.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.relay.get.$post(args, options))
}

export async function postCreditRelayRefresh(
  args: InferRequestType<typeof client.credit.relay.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.relay.refresh.$post(args, options))
}

export async function postCreditRelayRemove(
  args: InferRequestType<typeof client.credit.relay.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.relay.remove.$post(args, options))
}

export async function postCreditSessionsGet(
  args: InferRequestType<typeof client.credit.sessions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.sessions.get.$post(args, options))
}

export async function postDashboardUserGet(
  args: InferRequestType<typeof client.dashboard_user.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard_user.get.$post(args, options))
}

export async function postDashboardUserList(
  args: InferRequestType<typeof client.dashboard_user.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard_user.list.$post(args, options))
}

export async function postDepositSwitchAltCreate(
  args: InferRequestType<typeof client.deposit_switch.alt.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deposit_switch.alt.create.$post(args, options))
}

export async function postDepositSwitchCreate(
  args: InferRequestType<typeof client.deposit_switch.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deposit_switch.create.$post(args, options))
}

export async function postDepositSwitchGet(
  args: InferRequestType<typeof client.deposit_switch.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deposit_switch.get.$post(args, options))
}

export async function postDepositSwitchTokenCreate(
  args: InferRequestType<typeof client.deposit_switch.token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deposit_switch.token.create.$post(args, options))
}

export async function postEmployersSearch(
  args: InferRequestType<typeof client.employers.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.employers.search.$post(args, options))
}

export async function postEmploymentVerificationGet(
  args: InferRequestType<typeof client.employment.verification.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.employment.verification.get.$post(args, options))
}

export async function postFdxNotifications(
  args: InferRequestType<typeof client.fdx.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fdx.notifications.$post(args, options))
}

export async function postIdentityGet(
  args: InferRequestType<typeof client.identity.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.get.$post(args, options))
}

export async function postIdentityMatch(
  args: InferRequestType<typeof client.identity.match.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.match.$post(args, options))
}

export async function postIdentityVerificationCreate(
  args: InferRequestType<typeof client.identity_verification.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity_verification.create.$post(args, options))
}

export async function postIdentityVerificationGet(
  args: InferRequestType<typeof client.identity_verification.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity_verification.get.$post(args, options))
}

export async function postIdentityVerificationList(
  args: InferRequestType<typeof client.identity_verification.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity_verification.list.$post(args, options))
}

export async function postIdentityVerificationRetry(
  args: InferRequestType<typeof client.identity_verification.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity_verification.retry.$post(args, options))
}

export async function postIncomeVerificationCreate(
  args: InferRequestType<typeof client.income.verification.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income.verification.create.$post(args, options))
}

export async function postIncomeVerificationDocumentsDownload(
  args: InferRequestType<typeof client.income.verification.documents.download.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income.verification.documents.download.$post(args, options))
}

export async function postIncomeVerificationPaystubsGet(
  args: InferRequestType<typeof client.income.verification.paystubs.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income.verification.paystubs.get.$post(args, options))
}

export async function postIncomeVerificationPrecheck(
  args: InferRequestType<typeof client.income.verification.precheck.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income.verification.precheck.$post(args, options))
}

export async function postIncomeVerificationTaxformsGet(
  args: InferRequestType<typeof client.income.verification.taxforms.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income.verification.taxforms.get.$post(args, options))
}

export async function postInstitutionsGet(
  args: InferRequestType<typeof client.institutions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions.get.$post(args, options))
}

export async function postInstitutionsGetById(
  args: InferRequestType<typeof client.institutions.get_by_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions.get_by_id.$post(args, options))
}

export async function postInstitutionsSearch(
  args: InferRequestType<typeof client.institutions.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions.search.$post(args, options))
}

export async function postInvestmentsHoldingsGet(
  args: InferRequestType<typeof client.investments.holdings.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.investments.holdings.get.$post(args, options))
}

export async function postInvestmentsTransactionsGet(
  args: InferRequestType<typeof client.investments.transactions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.investments.transactions.get.$post(args, options))
}

export async function postItemAccessTokenInvalidate(
  args: InferRequestType<typeof client.item.access_token.invalidate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.access_token.invalidate.$post(args, options))
}

export async function postItemActivityList(
  args: InferRequestType<typeof client.item.activity.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.activity.list.$post(args, options))
}

export async function postItemApplicationList(
  args: InferRequestType<typeof client.item.application.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.application.list.$post(args, options))
}

export async function postItemApplicationScopesUpdate(
  args: InferRequestType<typeof client.item.application.scopes.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.application.scopes.update.$post(args, options))
}

export async function postItemGet(
  args: InferRequestType<typeof client.item.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.get.$post(args, options))
}

export async function postItemImport(
  args: InferRequestType<typeof client.item.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.import.$post(args, options))
}

export async function postItemPublicTokenCreate(
  args: InferRequestType<typeof client.item.public_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.public_token.create.$post(args, options))
}

export async function postItemPublicTokenExchange(
  args: InferRequestType<typeof client.item.public_token.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.public_token.exchange.$post(args, options))
}

export async function postItemRemove(
  args: InferRequestType<typeof client.item.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.remove.$post(args, options))
}

export async function postItemWebhookUpdate(
  args: InferRequestType<typeof client.item.webhook.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.webhook.update.$post(args, options))
}

export async function postLiabilitiesGet(
  args: InferRequestType<typeof client.liabilities.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liabilities.get.$post(args, options))
}

export async function postLinkOauthCorrelationIdExchange(
  args: InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link.oauth.correlation_id.exchange.$post(args, options))
}

export async function postLinkTokenCreate(
  args: InferRequestType<typeof client.link.token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link.token.create.$post(args, options))
}

export async function postLinkTokenGet(
  args: InferRequestType<typeof client.link.token.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link.token.get.$post(args, options))
}

export async function postLinkDeliveryCreate(
  args: InferRequestType<typeof client.link_delivery.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link_delivery.create.$post(args, options))
}

export async function postLinkDeliveryGet(
  args: InferRequestType<typeof client.link_delivery.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link_delivery.get.$post(args, options))
}

export async function postPartnerCustomerCreate(
  args: InferRequestType<typeof client.partner.customer.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner.customer.create.$post(args, options))
}

export async function postPartnerCustomerEnable(
  args: InferRequestType<typeof client.partner.customer.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner.customer.enable.$post(args, options))
}

export async function postPartnerCustomerGet(
  args: InferRequestType<typeof client.partner.customer.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner.customer.get.$post(args, options))
}

export async function postPartnerCustomerOauthInstitutionsGet(
  args: InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner.customer.oauth_institutions.get.$post(args, options))
}

export async function postPartnerCustomerRemove(
  args: InferRequestType<typeof client.partner.customer.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner.customer.remove.$post(args, options))
}

export async function postPaymentInitiationConsentCreate(
  args: InferRequestType<typeof client.payment_initiation.consent.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.consent.create.$post(args, options))
}

export async function postPaymentInitiationConsentGet(
  args: InferRequestType<typeof client.payment_initiation.consent.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.consent.get.$post(args, options))
}

export async function postPaymentInitiationConsentPaymentExecute(
  args: InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.consent.payment.execute.$post(args, options))
}

export async function postPaymentInitiationConsentRevoke(
  args: InferRequestType<typeof client.payment_initiation.consent.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.consent.revoke.$post(args, options))
}

export async function postPaymentInitiationPaymentCreate(
  args: InferRequestType<typeof client.payment_initiation.payment.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.payment.create.$post(args, options))
}

export async function postPaymentInitiationPaymentGet(
  args: InferRequestType<typeof client.payment_initiation.payment.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.payment.get.$post(args, options))
}

export async function postPaymentInitiationPaymentList(
  args: InferRequestType<typeof client.payment_initiation.payment.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.payment.list.$post(args, options))
}

export async function postPaymentInitiationPaymentReverse(
  args: InferRequestType<typeof client.payment_initiation.payment.reverse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.payment.reverse.$post(args, options))
}

export async function postPaymentInitiationPaymentTokenCreate(
  args: InferRequestType<typeof client.payment_initiation.payment.token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.payment.token.create.$post(args, options))
}

export async function postPaymentInitiationRecipientCreate(
  args: InferRequestType<typeof client.payment_initiation.recipient.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.recipient.create.$post(args, options))
}

export async function postPaymentInitiationRecipientGet(
  args: InferRequestType<typeof client.payment_initiation.recipient.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.recipient.get.$post(args, options))
}

export async function postPaymentInitiationRecipientList(
  args: InferRequestType<typeof client.payment_initiation.recipient.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_initiation.recipient.list.$post(args, options))
}

export async function postPaymentProfileCreate(
  args: InferRequestType<typeof client.payment_profile.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_profile.create.$post(args, options))
}

export async function postPaymentProfileGet(
  args: InferRequestType<typeof client.payment_profile.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_profile.get.$post(args, options))
}

export async function postPaymentProfileRemove(
  args: InferRequestType<typeof client.payment_profile.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_profile.remove.$post(args, options))
}

export async function postProcessorApexProcessorTokenCreate(
  args: InferRequestType<typeof client.processor.apex.processor_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.apex.processor_token.create.$post(args, options))
}

export async function postProcessorAuthGet(
  args: InferRequestType<typeof client.processor.auth.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.auth.get.$post(args, options))
}

export async function postProcessorBalanceGet(
  args: InferRequestType<typeof client.processor.balance.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.balance.get.$post(args, options))
}

export async function postProcessorBankTransferCreate(
  args: InferRequestType<typeof client.processor.bank_transfer.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.bank_transfer.create.$post(args, options))
}

export async function postProcessorIdentityGet(
  args: InferRequestType<typeof client.processor.identity.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.identity.get.$post(args, options))
}

export async function postProcessorSignalDecisionReport(
  args: InferRequestType<typeof client.processor.signal.decision.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.signal.decision.report.$post(args, options))
}

export async function postProcessorSignalEvaluate(
  args: InferRequestType<typeof client.processor.signal.evaluate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.signal.evaluate.$post(args, options))
}

export async function postProcessorSignalReturnReport(
  args: InferRequestType<typeof client.processor.signal.return.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.signal.return.report.$post(args, options))
}

export async function postProcessorStripeBankAccountTokenCreate(
  args: InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.stripe.bank_account_token.create.$post(args, options))
}

export async function postProcessorTokenCreate(
  args: InferRequestType<typeof client.processor.token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processor.token.create.$post(args, options))
}

export async function postSandboxBankTransferFireWebhook(
  args: InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.bank_transfer.fire_webhook.$post(args, options))
}

export async function postSandboxBankTransferSimulate(
  args: InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.bank_transfer.simulate.$post(args, options))
}

export async function postSandboxIncomeFireWebhook(
  args: InferRequestType<typeof client.sandbox.income.fire_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.income.fire_webhook.$post(args, options))
}

export async function postSandboxItemFireWebhook(
  args: InferRequestType<typeof client.sandbox.item.fire_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.item.fire_webhook.$post(args, options))
}

export async function postSandboxItemResetLogin(
  args: InferRequestType<typeof client.sandbox.item.reset_login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.item.reset_login.$post(args, options))
}

export async function postSandboxItemSetVerificationStatus(
  args: InferRequestType<typeof client.sandbox.item.set_verification_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.item.set_verification_status.$post(args, options))
}

export async function postSandboxOauthSelectAccounts(
  args: InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.oauth.select_accounts.$post(args, options))
}

export async function postSandboxPaymentProfileResetLogin(
  args: InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.payment_profile.reset_login.$post(args, options))
}

export async function postSandboxProcessorTokenCreate(
  args: InferRequestType<typeof client.sandbox.processor_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.processor_token.create.$post(args, options))
}

export async function postSandboxPublicTokenCreate(
  args: InferRequestType<typeof client.sandbox.public_token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.public_token.create.$post(args, options))
}

export async function postSandboxTransferFireWebhook(
  args: InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.fire_webhook.$post(args, options))
}

export async function postSandboxTransferRepaymentSimulate(
  args: InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.repayment.simulate.$post(args, options))
}

export async function postSandboxTransferSimulate(
  args: InferRequestType<typeof client.sandbox.transfer.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.simulate.$post(args, options))
}

export async function postSandboxTransferSweepSimulate(
  args: InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.sweep.simulate.$post(args, options))
}

export async function postSandboxTransferTestClockAdvance(
  args: InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.test_clock.advance.$post(args, options))
}

export async function postSandboxTransferTestClockCreate(
  args: InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.test_clock.create.$post(args, options))
}

export async function postSandboxTransferTestClockGet(
  args: InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.test_clock.get.$post(args, options))
}

export async function postSandboxTransferTestClockList(
  args: InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transfer.test_clock.list.$post(args, options))
}

export async function postSignalDecisionReport(
  args: InferRequestType<typeof client.signal.decision.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signal.decision.report.$post(args, options))
}

export async function postSignalEvaluate(
  args: InferRequestType<typeof client.signal.evaluate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signal.evaluate.$post(args, options))
}

export async function postSignalPrepare(
  args: InferRequestType<typeof client.signal.prepare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signal.prepare.$post(args, options))
}

export async function postSignalReturnReport(
  args: InferRequestType<typeof client.signal.return.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signal.return.report.$post(args, options))
}

export async function postTransactionsEnrich(
  args: InferRequestType<typeof client.transactions.enrich.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.enrich.$post(args, options))
}

export async function postTransactionsGet(
  args: InferRequestType<typeof client.transactions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.get.$post(args, options))
}

export async function postTransactionsRecurringGet(
  args: InferRequestType<typeof client.transactions.recurring.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.recurring.get.$post(args, options))
}

export async function postTransactionsRefresh(
  args: InferRequestType<typeof client.transactions.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.refresh.$post(args, options))
}

export async function postTransactionsSync(
  args: InferRequestType<typeof client.transactions.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.sync.$post(args, options))
}

export async function postTransferAuthorizationCreate(
  args: InferRequestType<typeof client.transfer.authorization.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.authorization.create.$post(args, options))
}

export async function postTransferCancel(
  args: InferRequestType<typeof client.transfer.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.cancel.$post(args, options))
}

export async function postTransferCapabilitiesGet(
  args: InferRequestType<typeof client.transfer.capabilities.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.capabilities.get.$post(args, options))
}

export async function postTransferCreate(
  args: InferRequestType<typeof client.transfer.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.create.$post(args, options))
}

export async function postTransferEventList(
  args: InferRequestType<typeof client.transfer.event.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.event.list.$post(args, options))
}

export async function postTransferEventSync(
  args: InferRequestType<typeof client.transfer.event.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.event.sync.$post(args, options))
}

export async function postTransferGet(
  args: InferRequestType<typeof client.transfer.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.get.$post(args, options))
}

export async function postTransferIntentCreate(
  args: InferRequestType<typeof client.transfer.intent.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.intent.create.$post(args, options))
}

export async function postTransferIntentGet(
  args: InferRequestType<typeof client.transfer.intent.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.intent.get.$post(args, options))
}

export async function postTransferList(
  args: InferRequestType<typeof client.transfer.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.list.$post(args, options))
}

export async function postTransferMigrateAccount(
  args: InferRequestType<typeof client.transfer.migrate_account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.migrate_account.$post(args, options))
}

export async function postTransferOriginatorCreate(
  args: InferRequestType<typeof client.transfer.originator.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.originator.create.$post(args, options))
}

export async function postTransferOriginatorGet(
  args: InferRequestType<typeof client.transfer.originator.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.originator.get.$post(args, options))
}

export async function postTransferOriginatorList(
  args: InferRequestType<typeof client.transfer.originator.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.originator.list.$post(args, options))
}

export async function postTransferQuestionnaireCreate(
  args: InferRequestType<typeof client.transfer.questionnaire.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.questionnaire.create.$post(args, options))
}

export async function postTransferRecurringCancel(
  args: InferRequestType<typeof client.transfer.recurring.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.recurring.cancel.$post(args, options))
}

export async function postTransferRecurringCreate(
  args: InferRequestType<typeof client.transfer.recurring.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.recurring.create.$post(args, options))
}

export async function postTransferRecurringGet(
  args: InferRequestType<typeof client.transfer.recurring.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.recurring.get.$post(args, options))
}

export async function postTransferRecurringList(
  args: InferRequestType<typeof client.transfer.recurring.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.recurring.list.$post(args, options))
}

export async function postTransferRefundCancel(
  args: InferRequestType<typeof client.transfer.refund.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.refund.cancel.$post(args, options))
}

export async function postTransferRefundCreate(
  args: InferRequestType<typeof client.transfer.refund.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.refund.create.$post(args, options))
}

export async function postTransferRefundGet(
  args: InferRequestType<typeof client.transfer.refund.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.refund.get.$post(args, options))
}

export async function postTransferRepaymentList(
  args: InferRequestType<typeof client.transfer.repayment.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.repayment.list.$post(args, options))
}

export async function postTransferRepaymentReturnList(
  args: InferRequestType<typeof client.transfer.repayment.return.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.repayment.return.list.$post(args, options))
}

export async function postTransferSweepGet(
  args: InferRequestType<typeof client.transfer.sweep.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.sweep.get.$post(args, options))
}

export async function postTransferSweepList(
  args: InferRequestType<typeof client.transfer.sweep.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.sweep.list.$post(args, options))
}

export async function postUserCreate(
  args: InferRequestType<typeof client.user.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.create.$post(args, options))
}

export async function postWalletCreate(
  args: InferRequestType<typeof client.wallet.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.create.$post(args, options))
}

export async function postWalletGet(
  args: InferRequestType<typeof client.wallet.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.get.$post(args, options))
}

export async function postWalletList(
  args: InferRequestType<typeof client.wallet.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.list.$post(args, options))
}

export async function postWalletTransactionExecute(
  args: InferRequestType<typeof client.wallet.transaction.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.transaction.execute.$post(args, options))
}

export async function postWalletTransactionGet(
  args: InferRequestType<typeof client.wallet.transaction.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.transaction.get.$post(args, options))
}

export async function postWalletTransactionList(
  args: InferRequestType<typeof client.wallet.transaction.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.transaction.list.$post(args, options))
}

export async function postWatchlistScreeningEntityCreate(
  args: InferRequestType<typeof client.watchlist_screening.entity.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.create.$post(args, options))
}

export async function postWatchlistScreeningEntityGet(
  args: InferRequestType<typeof client.watchlist_screening.entity.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.get.$post(args, options))
}

export async function postWatchlistScreeningEntityHistoryList(
  args: InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.history.list.$post(args, options))
}

export async function postWatchlistScreeningEntityHitList(
  args: InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.hit.list.$post(args, options))
}

export async function postWatchlistScreeningEntityList(
  args: InferRequestType<typeof client.watchlist_screening.entity.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.list.$post(args, options))
}

export async function postWatchlistScreeningEntityProgramGet(
  args: InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.program.get.$post(args, options))
}

export async function postWatchlistScreeningEntityProgramList(
  args: InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.program.list.$post(args, options))
}

export async function postWatchlistScreeningEntityReviewCreate(
  args: InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.review.create.$post(args, options))
}

export async function postWatchlistScreeningEntityReviewList(
  args: InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.review.list.$post(args, options))
}

export async function postWatchlistScreeningEntityUpdate(
  args: InferRequestType<typeof client.watchlist_screening.entity.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.entity.update.$post(args, options))
}

export async function postWatchlistScreeningIndividualCreate(
  args: InferRequestType<typeof client.watchlist_screening.individual.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.create.$post(args, options))
}

export async function postWatchlistScreeningIndividualGet(
  args: InferRequestType<typeof client.watchlist_screening.individual.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.get.$post(args, options))
}

export async function postWatchlistScreeningIndividualHistoryList(
  args: InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.watchlist_screening.individual.history.list.$post(args, options),
  )
}

export async function postWatchlistScreeningIndividualHitList(
  args: InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.hit.list.$post(args, options))
}

export async function postWatchlistScreeningIndividualList(
  args: InferRequestType<typeof client.watchlist_screening.individual.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.list.$post(args, options))
}

export async function postWatchlistScreeningIndividualProgramGet(
  args: InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.program.get.$post(args, options))
}

export async function postWatchlistScreeningIndividualProgramList(
  args: InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.watchlist_screening.individual.program.list.$post(args, options),
  )
}

export async function postWatchlistScreeningIndividualReviewCreate(
  args: InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.watchlist_screening.individual.review.create.$post(args, options),
  )
}

export async function postWatchlistScreeningIndividualReviewList(
  args: InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.review.list.$post(args, options))
}

export async function postWatchlistScreeningIndividualUpdate(
  args: InferRequestType<typeof client.watchlist_screening.individual.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchlist_screening.individual.update.$post(args, options))
}

export async function postWebhookVerificationKeyGet(
  args: InferRequestType<typeof client.webhook_verification_key.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_verification_key.get.$post(args, options))
}
