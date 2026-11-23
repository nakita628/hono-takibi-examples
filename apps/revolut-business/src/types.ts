type CreateAccountingCategoryRequest = {
  name: string
  code: string
  default_tax_rate_id?: string | undefined
}
type ResourceCreatedResponse = { id?: string | undefined }
type ErrorWithId = { error_id: string; code: number; message: string }
type PageToken = string
type AccountingCategoryResponse = {
  id: string
  name: string
  code?: string | undefined
  created_at: string
  updated_at: string
  default_tax_rate_id?: string | undefined
}
type UpdateAccountingCategoryRequest = {
  name?: string | undefined
  code?: string | undefined
  default_tax_rate_id?: string | undefined
}
type ValidateAccountNameRequest = { [x: string]: unknown }
type ValidateAccountNameResponse = { [x: string]: unknown }
type Error = { code: number; message: string }
type AccountCurrency = string
type Account = {
  id: string
  name?: string | undefined
  balance: number
  currency: AccountCurrency
  state: 'active' | 'inactive'
  public: boolean
  created_at: string
  updated_at: string
  account_type: 'current' | 'merchant' | 'savings' | 'credit' | 'debt' | 'blocking' | 'other'
}
type Accounts = Account[]
type BeneficiaryAddress = {
  street_line1?: string | undefined
  street_line2?: string | undefined
  region?: string | undefined
  city?: string | undefined
  country: string
  postcode: string
}
type BankCountryCode = string
type PaymentSystem =
  | 'chaps'
  | 'bacs'
  | 'faster_payments'
  | 'sepa'
  | 'swift'
  | 'ach'
  | 'elixir'
  | 'sorbnet'
  | 'nics'
  | 'rix'
  | 'sumclearing'
type EstimatedTime = { unit: 'days' | 'hours'; min?: number | undefined; max?: number | undefined }
type AccountBankDetailsItem = {
  iban?: string | undefined
  bic?: string | undefined
  account_no?: string | undefined
  sort_code?: string | undefined
  routing_number?: string | undefined
  beneficiary: string
  beneficiary_address: BeneficiaryAddress
  bank_country?: BankCountryCode | undefined
  pooled?: boolean | undefined
  unique_reference?: string | undefined
  schemes: PaymentSystem[]
  estimated_time: EstimatedTime
}
type AccountBankDetailsItems = AccountBankDetailsItem[]
type TransactionLimitCurrency = string
type SpendingLimitSingleTransaction = { amount: number; currency: TransactionLimitCurrency }
type SpendingLimitPeriodic = { amount: number; currency: TransactionLimitCurrency }
type SpendingLimitsSchema = {
  single?: SpendingLimitSingleTransaction | undefined
  day?: SpendingLimitPeriodic | undefined
  week?: SpendingLimitPeriodic | undefined
  month?: SpendingLimitPeriodic | undefined
  quarter?: SpendingLimitPeriodic | undefined
  year?: SpendingLimitPeriodic | undefined
  all_time?: SpendingLimitPeriodic | undefined
}
type BusinessMerchantCategory =
  | 'health'
  | 'general'
  | 'services'
  | 'airlines'
  | 'transport'
  | 'accommodation'
  | 'utilities'
  | 'shopping'
  | 'financial'
  | 'furniture'
  | 'hardware'
  | 'groceries'
  | 'fuel'
  | 'entertainment'
  | 'software'
  | 'restaurants'
  | 'advertising'
  | 'cash'
  | 'education'
  | 'government'
type MerchantControlsSchema = { control_type: 'block' | 'allow'; merchant_ids: string[] }
type MccControlType = 'allow'
type Mccs = string[]
type CardInvitationId = string
type CardInvitationState = 'created' | 'expired' | 'failed' | 'redeemed'
type CardInvitationCreatedAt = string
type CardInvitationUpdatedAt = string
type CardInvitationExpiryDate = string
type CardInvitationCreatedHolderId = string
type CardInvitationVirtual = boolean
type CardInvitationLabel = string
type CardInvitationSpendingPeriod = {
  start_date?: string | undefined
  end_date?: string | undefined
  end_date_action?: 'lock' | 'terminate' | undefined
}
type CardInvitationCategories = BusinessMerchantCategory[]
type MccControlsSchema = { control_type: MccControlType; mccs: Mccs }
type CardInvitationCountries = string[]
type CardInvitationAccounts = string[]
type CardInvitationCreatedResponse = {
  id: CardInvitationId
  state: CardInvitationState
  created_at: CardInvitationCreatedAt
  updated_at: CardInvitationUpdatedAt
  expiry_date?: CardInvitationExpiryDate | undefined
  holder_id?: CardInvitationCreatedHolderId | undefined
  virtual: CardInvitationVirtual
  label?: CardInvitationLabel | undefined
  spending_limits?: SpendingLimitsSchema | undefined
  spending_period?: CardInvitationSpendingPeriod | undefined
  categories?: CardInvitationCategories | undefined
  merchant_controls?: MerchantControlsSchema | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardInvitationCountries | undefined
  accounts: CardInvitationAccounts
}
type ErrorUnauthorized = { status: number; message: string }
type ErrorUnprocessableEntity = { code?: number | undefined; message: string }
type CardInvitationCardId = string
type CardInvitationHolderId = string
type SpendProgram = { label: string }
type CardInvitationResponse = {
  id: CardInvitationId
  state: CardInvitationState
  created_at: CardInvitationCreatedAt
  updated_at: CardInvitationUpdatedAt
  expiry_date?: CardInvitationExpiryDate | undefined
  card_id?: CardInvitationCardId | undefined
  holder_id?: CardInvitationHolderId | undefined
  virtual: CardInvitationVirtual
  label?: CardInvitationLabel | undefined
  spend_program?: SpendProgram | undefined
  spending_limits?: SpendingLimitsSchema | undefined
  spending_period?: CardInvitationSpendingPeriod | undefined
  categories?: CardInvitationCategories | undefined
  merchant_controls?: MerchantControlsSchema | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardInvitationCountries | undefined
  accounts: CardInvitationAccounts
}
type CardInvitationsResponse = CardInvitationResponse[]
type CardInvitationUpdatedResponse = {
  id: CardInvitationId
  state: CardInvitationState
  created_at: CardInvitationCreatedAt
  updated_at: CardInvitationUpdatedAt
  expiry_date?: CardInvitationExpiryDate | undefined
  holder_id?: CardInvitationCreatedHolderId | undefined
  virtual: CardInvitationVirtual
  label?: CardInvitationLabel | undefined
  spend_program?: SpendProgram | undefined
  spending_limits?: SpendingLimitsSchema | undefined
  spending_period?: CardInvitationSpendingPeriod | undefined
  categories?: CardInvitationCategories | undefined
  merchant_controls?: MerchantControlsSchema | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardInvitationCountries | undefined
  accounts: CardInvitationAccounts
}
type CardId = string
type CardHolderId = string
type CardContact = string
type CardContacts = CardContact[]
type CardCreatedAt = string
type CardUpdatedAt = string
type CardProduct = { code: string }
type CardVirtual = boolean
type CardLastDigits = string
type CardExpiry = string
type CardLabel = string
type CardReference = { name: string; value: string }
type CardReferences = CardReference[]
type CardState = 'created' | 'pending' | 'active' | 'frozen' | 'locked'
type CardCanBeUnlocked = boolean
type CardSpendingPeriod = {
  start_date?: string | undefined
  end_date?: string | undefined
  end_date_action?: 'lock' | 'terminate' | undefined
}
type CardBusinessMerchantCategories = BusinessMerchantCategory[]
type CardMerchantControls = { control_type: 'block' | 'allow'; merchant_ids: string[] }
type CardCountries = string[]
type CardAccounts = string[]
type CardResponse = {
  id: CardId
  holder_id?: CardHolderId | undefined
  contact_ids?: CardContacts | undefined
  created_at: CardCreatedAt
  updated_at: CardUpdatedAt
  product?: CardProduct | undefined
  virtual: CardVirtual
  last_digits: CardLastDigits
  expiry: CardExpiry
  label?: CardLabel | undefined
  references?: CardReferences | undefined
  state: CardState
  can_be_unlocked?: CardCanBeUnlocked | undefined
  spend_program?: SpendProgram | undefined
  spending_limits?: SpendingLimitsSchema | undefined
  spending_period?: CardSpendingPeriod | undefined
  categories?: CardBusinessMerchantCategories | undefined
  merchant_controls?: CardMerchantControls | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardCountries | undefined
  accounts: CardAccounts
}
type CardsResponse = CardResponse[]
type CardCreatedResponse = {
  id: CardId
  holder_id?: CardHolderId | undefined
  contact_ids?: CardContacts | undefined
  created_at: CardCreatedAt
  updated_at: CardUpdatedAt
  product?: CardProduct | undefined
  virtual: CardVirtual
  last_digits: CardLastDigits
  expiry: CardExpiry
  label?: CardLabel | undefined
  references?: CardReferences | undefined
  state: CardState
  can_be_unlocked?: CardCanBeUnlocked | undefined
  spending_limits?: SpendingLimitsSchema | undefined
  spending_period?: CardSpendingPeriod | undefined
  categories?: CardBusinessMerchantCategories | undefined
  merchant_controls?: CardMerchantControls | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardCountries | undefined
  accounts: CardAccounts
}
type CardTerminatedAt = string
type CardStateWithTerminated = 'created' | 'pending' | 'active' | 'frozen' | 'locked' | 'terminated'
type SpendingLimitPeriodicWithUsage = {
  amount: number
  currency: TransactionLimitCurrency
  usage?: number | undefined
}
type SpendingLimitsWithUsage = {
  single?: SpendingLimitSingleTransaction | undefined
  day?: SpendingLimitPeriodicWithUsage | undefined
  week?: SpendingLimitPeriodicWithUsage | undefined
  month?: SpendingLimitPeriodicWithUsage | undefined
  quarter?: SpendingLimitPeriodicWithUsage | undefined
  year?: SpendingLimitPeriodicWithUsage | undefined
  all_time?: SpendingLimitPeriodicWithUsage | undefined
}
type CardResponseWithTerminated = {
  id: CardId
  holder_id?: CardHolderId | undefined
  contact_ids?: CardContacts | undefined
  created_at: CardCreatedAt
  updated_at: CardUpdatedAt
  terminated_at?: CardTerminatedAt | undefined
  product?: CardProduct | undefined
  virtual: CardVirtual
  last_digits: CardLastDigits
  expiry: CardExpiry
  label?: CardLabel | undefined
  references?: CardReferences | undefined
  state: CardStateWithTerminated
  can_be_unlocked?: CardCanBeUnlocked | undefined
  spend_program?: SpendProgram | undefined
  spending_limits?: SpendingLimitsWithUsage | undefined
  spending_period?: CardSpendingPeriod | undefined
  categories?: CardBusinessMerchantCategories | undefined
  merchant_controls?: CardMerchantControls | undefined
  mcc_controls?: MccControlsSchema | undefined
  countries?: CardCountries | undefined
  accounts: CardAccounts
}
type ProfileType = 'personal' | 'business'
type CountryCode = string
type CounterpartyAddress = {
  street_line1?: string | undefined
  street_line2?: string | undefined
  region?: string | undefined
  city?: string | undefined
  country: string
  postcode?: string | undefined
}
type CounterpartyAccount = {
  id: string
  name?: string | undefined
  bank_country?: BankCountryCode | undefined
  currency: AccountCurrency
  type: 'revolut' | 'external'
  account_no?: string | undefined
  iban?: string | undefined
  sort_code?: string | undefined
  routing_number?: string | undefined
  bic?: string | undefined
  clabe?: string | undefined
  ifsc?: string | undefined
  bsb_code?: string | undefined
  route?: 'ach' | 'fedwire' | 'swift' | undefined
  bank_number?: string | undefined
  branch_code?: string | undefined
  account_type?: 'checking' | 'savings' | undefined
  tax_id?: string | undefined
  national_id?: string | undefined
  phone?: string | undefined
  business_registration_id?: string | undefined
  recipient_charges?: 'no' | 'expected' | undefined
  address?: CounterpartyAddress | undefined
}
type CountryCodeCard = string
type Currency = string
type CounterpartyCard = {
  id: string
  name: string
  last_digits: string
  scheme: 'visa' | 'mastercard'
  country: CountryCodeCard
  currency: Currency
}
type Counterparty = {
  id: string
  name: string
  revtag?: string | undefined
  profile_type?: ProfileType | undefined
  country?: CountryCode | undefined
  state: 'created' | 'draft' | 'deleted'
  created_at: string
  updated_at: string
  accounts?: CounterpartyAccount[] | undefined
  cards?: CounterpartyCard[] | undefined
}
type Counterparties = Counterparty[]
type IndividualName = { first_name?: string | undefined; last_name?: string | undefined }
type CreateCounterpartyRequest = {
  profile_type?: 'personal' | 'business' | undefined
  revtag?: string | undefined
  name?: string | undefined
  company_name?: string | undefined
  individual_name?: IndividualName | undefined
  bank_country?: BankCountryCode | undefined
  currency?: Currency | undefined
  account_no?: string | undefined
  iban?: string | undefined
  sort_code?: string | undefined
  routing_number?: string | undefined
  bic?: string | undefined
  clabe?: string | undefined
  ifsc?: string | undefined
  bsb_code?: string | undefined
  address?: BeneficiaryAddress | undefined
  route?: 'ach' | 'fedwire' | 'swift' | undefined
  bank_number?: string | undefined
  branch_code?: string | undefined
  account_type?: 'checking' | 'savings' | undefined
  tax_id?: string | undefined
  national_id?: string | undefined
  phone?: string | undefined
  business_registration_id?: string | undefined
}
type CounterpartyErrorParams = { counterparty_id?: string | undefined }
type CounterpartyError = {
  code: number
  message: string
  params?: CounterpartyErrorParams | undefined
}
type CounterpartyCountry = { country: BankCountryCode; currencies: Currency[] }
type CounterpartyCountriesResponse = { countries: CounterpartyCountry[] }
type CounterpartyRequirementsFieldRegex = { pattern: string; description: string }
type CounterpartyRequirementsFieldOption = { value: string; default?: boolean | undefined }
type CounterpartyRequirementsField = {
  name: string
  required: boolean
  regex?: CounterpartyRequirementsFieldRegex | undefined
  options?: CounterpartyRequirementsFieldOption[] | undefined
}
type CounterpartyRequirementsResponse = { fields: CounterpartyRequirementsField[] }
type UpdateCounterpartyPaymentMethodAddress = {
  street_line1: string
  street_line2?: string | undefined
  region?: string | undefined
  city: string
  country: string
  postcode: string
}
type UpdateCounterpartyPaymentMethodRequest = { address: UpdateCounterpartyPaymentMethodAddress }
type AmountWithCurrency = { amount?: number | undefined; currency?: Currency | undefined }
type Fee = { amount?: number | undefined; currency?: Currency | undefined }
type ExchangeRateResponse = {
  from: AmountWithCurrency
  to: AmountWithCurrency
  rate: number
  fee: Fee
  rate_date: string
}
type ExchangePartFrom = { account_id: string; currency: Currency; amount?: number | undefined }
type ExchangePartTo = { account_id: string; currency: Currency; amount?: number | undefined }
type ExchangeReasonCode = string
type ExchangeRequest = {
  from: ExchangePartFrom
  to: ExchangePartTo
  reference?: string | undefined
  request_id: string
  exchange_reason_code?: ExchangeReasonCode | undefined
}
type TransactionState = 'created' | 'pending' | 'completed' | 'declined' | 'failed' | 'reverted'
type ExchangeResponse = {
  id?: string | undefined
  type?: string | undefined
  reason_code?: string | undefined
  created_at?: string | undefined
  completed_at?: string | undefined
  state?: TransactionState | undefined
}
type ExchangeReason = {
  code:
    | 'business_expense_and_claims'
    | 'fees_and_charges'
    | 'fund_transfer_and_intracompany_payment'
    | 'gifts_and_donations'
    | 'government_services_and_tax'
    | 'insurance'
    | 'inventory'
    | 'investment_dividend_and_interest'
    | 'loan_and_loan_repayment'
    | 'marketing'
    | 'payment_for_goods_and_services'
    | 'payroll'
    | 'refund'
    | 'rental_and_property'
    | 'sales'
    | 'service_provider_and_software'
    | 'travel_and_transportation'
    | 'utilities'
  name: string
}
type ExchangeReasons = ExchangeReason[]
type ExpenseState =
  | 'missing_info'
  | 'awaiting_review'
  | 'rejected'
  | 'pending_reimbursement'
  | 'refund_requested'
  | 'refunded'
  | 'approved'
  | 'reverted'
type ExpenseTransactionType =
  | 'atm'
  | 'card_payment'
  | 'fee'
  | 'transfer'
  | 'external'
  | 'mileage_reimbursement'
  | 'rev_payment'
type LabelGroup = string[]
type Amount = number
type Category = { id: string; name: string; code?: string | undefined }
type TaxRate = { id: string; name: string; percentage?: number | undefined }
type ExpenseSplit = {
  amount: { amount?: Amount | undefined; currency?: Currency | undefined }
  category: Category
  labels: { [x: string]: LabelGroup }
  tax_rate: TaxRate
}
type Expense = {
  id: string
  state: ExpenseState
  transaction_type: ExpenseTransactionType
  description?: string | undefined
  submitted_at?: string | undefined
  completed_at?: string | undefined
  payer?: string | undefined
  merchant?: string | undefined
  transaction_id?: string | undefined
  expense_date: string
  labels: { [x: string]: LabelGroup }
  splits: ExpenseSplit[]
  receipt_ids: string[]
  spent_amount: { amount: Amount; currency: Currency }
}
type Expenses = Expense[]
type CreateLabelRequest = { name: string }
type CreateLabelGroupRequest = { name: string; labels: CreateLabelRequest[] }
type LabelGroupResponse = { id: string; name: string; created_at: string; updated_at: string }
type UpdateLabelGroupRequest = { name: string }
type LabelResponse = { id: string; name: string; created_at: string; updated_at: string }
type UpdateLabelRequest = { name: string }
type PaymentOrderInfo = {
  id: string
  scheduled_for?: string | undefined
  title?: string | undefined
  payments_count: number
  source?: 'api' | 'integration' | 'email' | 'business_app' | undefined
}
type PaymentDraftsResponse = { payment_orders: PaymentOrderInfo[] }
type PaymentReceiver = {
  counterparty_id: string
  account_id?: string | undefined
  card_id?: string | undefined
}
type TransferReasonCode = string
type PaymentRequest = {
  account_id: string
  receiver: PaymentReceiver
  amount: number
  currency: Currency
  reference: string
  charge_bearer?: 'shared' | 'debtor' | undefined
  transfer_reason_code?: TransferReasonCode | undefined
}
type CreatePaymentDraftRequest = {
  title?: string | undefined
  schedule_for?: string | undefined
  payments: PaymentRequest[]
}
type CreatePaymentDraftResponse = { id: string }
type PaymentState =
  | 'CREATED'
  | 'PENDING'
  | 'COMPLETED'
  | 'REVERTED'
  | 'DECLINED'
  | 'CANCELLED'
  | 'FAILED'
  | 'DELETED'
type PaymentInfo = {
  id: string
  amount: AmountWithCurrency
  currency?: Currency | undefined
  account_id: string
  receiver?: PaymentReceiver | undefined
  state: PaymentState
  reason?: string | undefined
  error_message?: string | undefined
  current_charge_options: {
    from: AmountWithCurrency
    to: AmountWithCurrency
    rate?: string | undefined
    fee?: AmountWithCurrency | undefined
  }
  reference?: string | undefined
  transfer_reason_code?: TransferReasonCode | undefined
}
type PaymentDraftResponse = {
  scheduled_for?: string | undefined
  title?: string | undefined
  payments: PaymentInfo[]
  source?: 'api' | 'integration' | 'email' | 'business_app' | undefined
}
type UpdatePaymentDraftRequest = {
  title?: (string | null) | undefined
  schedule_for?: (string | null) | undefined
}
type CreatePaymentDraftPaymentResponse = { id: string }
type UpdateDraftPaymentRequest = {
  receiver?: PaymentReceiver | undefined
  amount?: number | undefined
  currency?: Currency | undefined
  reference?: string | undefined
  charge_bearer?: 'shared' | 'debtor' | undefined
  transfer_reason_code?: TransferReasonCode | undefined
}
type PayoutLinkCounterpartyName = string
type PayoutLinkRequestId = string
type PayoutLinkAccountId = string
type PayoutLinkAmount = number
type PayoutMethod = 'revolut' | 'bank_account' | 'card'
type PayoutLinkPayoutMethods = PayoutMethod[]
type PayoutLinkExpiryPeriod = string
type CreatePayoutLinkRequest = {
  counterparty_name: PayoutLinkCounterpartyName
  save_counterparty?: boolean | undefined
  request_id: PayoutLinkRequestId
  account_id: PayoutLinkAccountId
  amount: PayoutLinkAmount
  currency: Currency
  reference: string
  payout_methods?: PayoutLinkPayoutMethods | undefined
  expiry_period?: PayoutLinkExpiryPeriod | undefined
  transfer_reason_code?: TransferReasonCode | undefined
}
type PayoutLinkState =
  | 'created'
  | 'failed'
  | 'awaiting'
  | 'active'
  | 'expired'
  | 'cancelled'
  | 'processing'
  | 'processed'
type PayoutLinkExpiryDate = string
type PayoutLinkReference = string
type PayoutLinkInitialProps = {
  id: string
  state: PayoutLinkState
  created_at: string
  updated_at: string
  counterparty_name: PayoutLinkCounterpartyName
  save_counterparty: boolean
  request_id: PayoutLinkRequestId
  expiry_date?: PayoutLinkExpiryDate | undefined
  payout_methods: PayoutLinkPayoutMethods
  account_id: PayoutLinkAccountId
  amount: PayoutLinkAmount
  currency: Currency
  url?: string | undefined
  reference: PayoutLinkReference
  transfer_reason_code?: TransferReasonCode | undefined
}
type PayoutLink = {
  id: string
  state: PayoutLinkState
  created_at: string
  updated_at: string
  counterparty_name: PayoutLinkCounterpartyName
  save_counterparty: boolean
  request_id: PayoutLinkRequestId
  expiry_date?: PayoutLinkExpiryDate | undefined
  payout_methods: PayoutLinkPayoutMethods
  account_id: PayoutLinkAccountId
  amount: PayoutLinkAmount
  currency: Currency
  url?: string | undefined
  reference: PayoutLinkReference
  transfer_reason_code?: TransferReasonCode | undefined
  counterparty_id?: string | undefined
  transaction_id?: string | undefined
  cancellation_reason?: 'too_many_name_check_attempts' | undefined
}
type PayoutLinks = PayoutLink[]
type CreateTaxRateRequest = { name: string; percentage?: number | undefined }
type TaxRateResponse = {
  id: string
  name: string
  created_at: string
  updated_at: string
  percentage?: number | undefined
}
type UpdateTaxRateRequest = { name?: string | undefined }
type TeamMemberState = 'created' | 'confirmed' | 'waiting' | 'active' | 'locked' | 'disabled'
type TeamMember = {
  id: string
  email: string
  first_name?: string | undefined
  last_name?: string | undefined
  state: TeamMemberState
  role_id: string
  created_at: string
  updated_at: string
  department_id?: string | undefined
  manager_id?: string | undefined
}
type Role = { id: string; name: string; created_at: string; updated_at: string }
type Department = { id: string; name: string; created_at: string; updated_at: string }
type TransactionType =
  | 'atm'
  | 'card_payment'
  | 'card_refund'
  | 'card_chargeback'
  | 'card_credit'
  | 'charge'
  | 'charge_refund'
  | 'exchange'
  | 'transfer'
  | 'loan'
  | 'fee'
  | 'refund'
  | 'topup'
  | 'topup_return'
  | 'tax'
  | 'tax_refund'
  | 'rev_payment'
type CountryCodeMerchant = string
type TransactionMerchant = {
  id?: string | undefined
  name?: string | undefined
  full_name?: string | undefined
  city?: string | undefined
  category_code?: string | undefined
  country?: CountryCodeMerchant | undefined
}
type TransactionCounterpartyAccountType = 'self' | 'revolut' | 'external'
type TransactionCounterparty = {
  account_id?: string | undefined
  account_type: TransactionCounterpartyAccountType
  id?: string | undefined
}
type TransactionLeg = {
  leg_id: string
  amount: number
  fee?: number | undefined
  currency: Currency
  bill_amount?: number | undefined
  bill_currency?: Currency | undefined
  account_id: string
  counterparty?: TransactionCounterparty | undefined
  description?: string | undefined
  balance?: number | undefined
}
type TransactionCard = {
  id?: string | undefined
  card_number?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  references?: CardReference[] | undefined
}
type Transaction = {
  id: string
  type: TransactionType
  request_id?: string | undefined
  state: TransactionState
  reason_code?: string | undefined
  created_at: string
  updated_at: string
  completed_at?: string | undefined
  scheduled_for?: string | undefined
  related_transaction_id?: string | undefined
  merchant?: TransactionMerchant | undefined
  reference?: string | undefined
  legs: TransactionLeg[]
  card?: TransactionCard | undefined
  auth_code?: string | undefined
}
type Transactions = Transaction[]
type ChargeBearer = 'shared' | 'debtor' | 'prefer_debtor'
type TransactionPaymentRequest = {
  request_id: string
  account_id: string
  receiver: PaymentReceiver
  amount: number
  currency: Currency
  reference?: string | undefined
  charge_bearer?: ChargeBearer | undefined
  transfer_reason_code?: TransferReasonCode | undefined
  exchange_reason_code?: ExchangeReasonCode | undefined
  fiscal_code?: string | undefined
  name_validation_id?: string | undefined
}
type TransferResponse = {
  id: string
  state: TransactionState
  created_at: string
  completed_at?: string | undefined
}
type IndicativeQuoteRequest = {
  account_id: string
  receiver: PaymentReceiver
  amount: number
  currency: Currency
  charge_bearer?: ChargeBearer | undefined
  transfer_reason_code?: TransferReasonCode | undefined
  exchange_reason_code?: ExchangeReasonCode | undefined
}
type Money = { amount: number; currency: Currency }
type SimpleFee = { amount: number; currency: Currency }
type IndicativeQuoteFeeBreakdown = {
  transfer_fee?: SimpleFee | undefined
  exchange_fee?: SimpleFee | undefined
}
type IndicativeQuoteFee = {
  amount: number
  currency: Currency
  breakdown?: IndicativeQuoteFeeBreakdown | undefined
}
type IndicativeQuoteEstimatedArrival = {
  date: string
  speed: 'instant' | 'in_seconds' | 'today' | 'tomorrow' | 'by_date'
}
type IndicativeQuoteResponse = {
  amount: Money
  fee: IndicativeQuoteFee
  estimated_total: Money
  estimated_exchange_rate?: string | undefined
  estimated_amount_after_exchange?: Money | undefined
  estimated_arrival?: IndicativeQuoteEstimatedArrival | undefined
  warnings?: 'volatile_fx_rate'[] | undefined
}
type PaymentRequirementsRequest = { account_id: string; receiver: PaymentReceiver }
type PaymentRequirementsFieldRegex = { pattern: string; description: string }
type PaymentRequirementsFieldValidation = {
  min_length?: number | undefined
  max_length?: number | undefined
  regex?: PaymentRequirementsFieldRegex | undefined
}
type PaymentRequirementsFieldOption = { value: string; default?: boolean | undefined }
type PaymentRequirementsField = {
  name: string
  required: boolean
  validation?: PaymentRequirementsFieldValidation | undefined
  options?: PaymentRequirementsFieldOption[] | undefined
}
type PaymentRequirementsResponse = { fields: PaymentRequirementsField[] }
type TransferRequest = {
  request_id: string
  source_account_id: string
  target_account_id: string
  amount: number
  currency: Currency
  reference?: string | undefined
}
type TransferReason = {
  country: CountryCode
  currency: Currency
  code:
    | 'advertising'
    | 'advisor_fees'
    | 'business_insurance'
    | 'construction'
    | 'delivery'
    | 'education'
    | 'family'
    | 'fund_investment'
    | 'goods'
    | 'homesend'
    | 'hotel'
    | 'exports'
    | 'insurance_claims'
    | 'insurance_premium'
    | 'loan_repayment'
    | 'medical'
    | 'office'
    | 'other_fees'
    | 'personal_transfer'
    | 'property_purchase'
    | 'property_rental'
    | 'royalties'
    | 'services'
    | 'share_investment'
    | 'tax'
    | 'transfer'
    | 'transportation'
    | 'travel'
    | 'utilities'
  description: string
}
type TransferReasons = TransferReason[]
type WebhookV1 = { url: string }
type Url = string
type WebhookEventType =
  | 'TransactionCreated'
  | 'TransactionStateChanged'
  | 'PayoutLinkCreated'
  | 'PayoutLinkStateChanged'
type CreateWebhookRequest = { url: Url; events?: WebhookEventType[] | undefined }
type WebhookV2 = { id: string; url: string; events: WebhookEventType[]; signing_secret: string }
type WebhookV2Basic = { id: string; url: string; events: WebhookEventType[] }
type Webhooks = WebhookV2Basic[]
type UpdateWebhookRequest = { url?: Url | undefined; events?: WebhookEventType[] | undefined }
type WebhookSigningSecretRotateRequest = { expiration_period?: string | undefined }
type WebhookEvent = {
  id: string
  created_at: string
  updated_at: string
  webhook_id: string
  webhook_url: string
  payload: { [x: string]: unknown }
  last_sent_date?: string | undefined
}
type WebhookEvents = WebhookEvent[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounting-categories': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ResourceCreatedResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {
              next_page_token?: PageToken | undefined
              accounting_categories: AccountingCategoryResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting-categories/:accounting_category_id': {
      $get:
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: AccountingCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateAccountingCategoryRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { accounting_category_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account-name-validation': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: ValidateAccountNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: { code: number; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: { message: string; status?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ValidateAccountNameRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Accounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/bank-details': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: AccountBankDetailsItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card-invitations': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: CardInvitationCreatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: ErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                expiry_period?: string | undefined
                holder_id: string
                virtual: true
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                created_before?: string | undefined
                limit?: number | undefined
                state?: CardInvitationState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CardInvitationsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                created_before?: string | undefined
                limit?: number | undefined
                state?: CardInvitationState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                created_before?: string | undefined
                limit?: number | undefined
                state?: CardInvitationState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                created_before?: string | undefined
                limit?: number | undefined
                state?: CardInvitationState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card-invitations/:card_invitation_id': {
      $get:
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CardInvitationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: CardInvitationUpdatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: ErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_invitation_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card-invitations/:cardInvitationId/cancel': {
      $post:
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_invitation_id: string; cardInvitationId: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards': {
      $get:
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CardsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: CardCreatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                request_id: string
                holder_id?: string | undefined
                contact_ids?: string[] | undefined
                product?: { code: string } | undefined
                virtual: true
                label?: string | undefined
                references?: CardReferences | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id': {
      $get:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CardResponseWithTerminated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: CardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                label?: string | undefined
                spending_limits?: SpendingLimitsSchema | undefined
                spending_period?:
                  | {
                      start_date?: string | undefined
                      end_date?: string | undefined
                      end_date_action?: 'lock' | 'terminate' | undefined
                    }
                  | undefined
                categories?: BusinessMerchantCategory[] | undefined
                merchant_controls?: MerchantControlsSchema | undefined
                mcc_controls?: { control_type: MccControlType; mccs: Mccs } | undefined
                countries?: string[] | undefined
                accounts?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/contacts': {
      $put:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardContacts }
            output: CardContacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardContacts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardContacts }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardContacts }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardContacts }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/references': {
      $put:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardReferences }
            output: CardReferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardReferences }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardReferences }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardReferences }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CardReferences }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/freeze': {
      $post:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/unfreeze': {
      $post:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/lock': {
      $post:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/unlock': {
      $post:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/sensitive-details': {
      $get:
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: { pan: string; cvv: string; expiry: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparties': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                account_no?: string | undefined
                sort_code?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Counterparties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                account_no?: string | undefined
                sort_code?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                account_no?: string | undefined
                sort_code?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                account_no?: string | undefined
                sort_code?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparty': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateCounterpartyRequest }
            output: Counterparty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateCounterpartyRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateCounterpartyRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateCounterpartyRequest }
            output: CounterpartyError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateCounterpartyRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparties/countries': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CounterpartyCountriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparties/fields': {
      $get:
        | {
            input: {
              query: {
                country: BankCountryCode
                currency: Currency
                recipient_type: 'personal' | 'business'
                route?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: CounterpartyRequirementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                country: BankCountryCode
                currency: Currency
                recipient_type: 'personal' | 'business'
                route?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                country: BankCountryCode
                currency: Currency
                recipient_type: 'personal' | 'business'
                route?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                country: BankCountryCode
                currency: Currency
                recipient_type: 'personal' | 'business'
                route?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                country: BankCountryCode
                currency: Currency
                recipient_type: 'personal' | 'business'
                route?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparty/:counterparty_id': {
      $get:
        | {
            input: { param: { counterparty_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Counterparty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { counterparty_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { counterparty_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { counterparty_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/counterparties/:counterparty_id/payment-methods/:payment_method_id': {
      $patch:
        | {
            input: { param: { counterparty_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateCounterpartyPaymentMethodRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { counterparty_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateCounterpartyPaymentMethodRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/rate': {
      $get:
        | {
            input: { query: { from: Currency; amount?: number | undefined; to: Currency } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ExchangeRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: Currency; amount?: number | undefined; to: Currency } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { from: Currency; amount?: number | undefined; to: Currency } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/exchange': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ExchangeRequest }
            output: ExchangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ExchangeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: ExchangeRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/exchange-reasons': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ExchangeReasons
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/expenses': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                count?: number | undefined
                state?:
                  | 'missing_info'
                  | 'awaiting_review'
                  | 'reverted'
                  | 'pending_reimbursement'
                  | 'refund_requested'
                  | 'refunded'
                  | 'approved'
                  | 'rejected'
                  | undefined
                transaction_type?:
                  | 'atm'
                  | 'card_payment'
                  | 'fee'
                  | 'transfer'
                  | 'external'
                  | 'mileage_reimbursement'
                  | 'rev_payment'
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Expenses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                count?: number | undefined
                state?:
                  | 'missing_info'
                  | 'awaiting_review'
                  | 'reverted'
                  | 'pending_reimbursement'
                  | 'refund_requested'
                  | 'refunded'
                  | 'approved'
                  | 'rejected'
                  | undefined
                transaction_type?:
                  | 'atm'
                  | 'card_payment'
                  | 'fee'
                  | 'transfer'
                  | 'external'
                  | 'mileage_reimbursement'
                  | 'rev_payment'
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                count?: number | undefined
                state?:
                  | 'missing_info'
                  | 'awaiting_review'
                  | 'reverted'
                  | 'pending_reimbursement'
                  | 'refund_requested'
                  | 'refunded'
                  | 'approved'
                  | 'rejected'
                  | undefined
                transaction_type?:
                  | 'atm'
                  | 'card_payment'
                  | 'fee'
                  | 'transfer'
                  | 'external'
                  | 'mileage_reimbursement'
                  | 'rev_payment'
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                count?: number | undefined
                state?:
                  | 'missing_info'
                  | 'awaiting_review'
                  | 'reverted'
                  | 'pending_reimbursement'
                  | 'refund_requested'
                  | 'refunded'
                  | 'approved'
                  | 'rejected'
                  | undefined
                transaction_type?:
                  | 'atm'
                  | 'card_payment'
                  | 'fee'
                  | 'transfer'
                  | 'external'
                  | 'mileage_reimbursement'
                  | 'rev_payment'
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                count?: number | undefined
                state?:
                  | 'missing_info'
                  | 'awaiting_review'
                  | 'reverted'
                  | 'pending_reimbursement'
                  | 'refund_requested'
                  | 'refunded'
                  | 'approved'
                  | 'rejected'
                  | undefined
                transaction_type?:
                  | 'atm'
                  | 'card_payment'
                  | 'fee'
                  | 'transfer'
                  | 'external'
                  | 'mileage_reimbursement'
                  | 'rev_payment'
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/expenses/:expense_id': {
      $get:
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { expense_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/expenses/:expense_id/receipts/:receipt_id/content': {
      $get:
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { expense_id: string; receipt_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/label-groups': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ResourceCreatedResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: { next_page_token?: PageToken | undefined; label_groups: LabelGroupResponse[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/label-groups/:group_id': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: LabelGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelGroupRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/label-groups/:group_id/labels': {
      $post:
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ResourceCreatedResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: { next_page_token?: PageToken | undefined; labels: LabelResponse[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_token?: PageToken | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/label-groups/:group_id/labels/:label_id': {
      $patch:
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateLabelRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { group_id: string; label_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment-drafts': {
      $get:
        | {
            input: { query: { source?: 'api' | 'integration' | 'email' | 'all' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: PaymentDraftsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { source?: 'api' | 'integration' | 'email' | 'all' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePaymentDraftRequest }
            output: CreatePaymentDraftResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePaymentDraftRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment-drafts/:payment_draft_id': {
      $get:
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: PaymentDraftResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdatePaymentDraftRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdatePaymentDraftRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment-drafts/:payment_draft_id/payments': {
      $post:
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: CreatePaymentDraftPaymentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_draft_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment-drafts/:payment_draft_id/payments/:payment_id': {
      $patch:
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateDraftPaymentRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateDraftPaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateDraftPaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateDraftPaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateDraftPaymentRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_draft_id: string; payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payout-links': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePayoutLinkRequest }
            output: PayoutLinkInitialProps
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePayoutLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePayoutLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreatePayoutLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                state?: PayoutLinkState[] | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: PayoutLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                state?: PayoutLinkState[] | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                state?: PayoutLinkState[] | undefined
                created_before?: string | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payout-links/:payout_link_id': {
      $get:
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: PayoutLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payout-links/:payout_link_id/cancel': {
      $post:
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payout_link_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transactions/:id/:action': {
      $post:
        | {
            input: { param: { id: string; action: 'complete' | 'revert' | 'decline' | 'fail' } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {
              id: string
              state: 'completed' | 'reverted' | 'declined' | 'failed'
              created_at: string
              completed_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: 'complete' | 'revert' | 'decline' | 'fail' } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/topup': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                account_id: string
                amount: number
                currency: Currency
                reference?: string | undefined
                state?: 'pending' | 'completed' | 'reverted' | 'failed' | undefined
              }
            }
            output: {
              id: string
              state: 'pending' | 'completed' | 'reverted' | 'failed'
              created_at: string
              completed_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json: {
                account_id: string
                amount: number
                currency: Currency
                reference?: string | undefined
                state?: 'pending' | 'completed' | 'reverted' | 'failed' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tax-rates': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ResourceCreatedResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: { next_page_token?: PageToken | undefined; tax_rates: TaxRateResponse[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tax-rates/:tax_rate_id': {
      $get:
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: TaxRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateTaxRateRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { tax_rate_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members': {
      $get:
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: TeamMember[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: {
              email: string
              id: string
              role_id: string
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { email: string; role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id': {
      $get:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: TeamMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id/department': {
      $put:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { department_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id/manager': {
      $put:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { manager_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id/role': {
      $put:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { role_id: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id/suspend': {
      $post:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team-members/:team_member_id/unsuspend': {
      $post:
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { team_member_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/roles': {
      $get:
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Role[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { created_before?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/departments': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: { departments: Department[]; next_page_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: PageToken | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/departments/:department_id': {
      $get:
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Department
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { name: string } }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { department_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                account?: string | undefined
                count?: number | undefined
                type?: TransactionType | undefined
                request_id?: string | undefined
                state?:
                  | ('created' | 'pending' | 'completed' | 'declined' | 'failed' | 'reverted')[]
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Transactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                account?: string | undefined
                count?: number | undefined
                type?: TransactionType | undefined
                request_id?: string | undefined
                state?:
                  | ('created' | 'pending' | 'completed' | 'declined' | 'failed' | 'reverted')[]
                  | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transaction/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { id_type?: 'request_id' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { id_type?: 'request_id' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pay': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: TransactionPaymentRequest }
            output: TransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: TransactionPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: TransactionPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pay/indicative-quote': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: IndicativeQuoteRequest }
            output: IndicativeQuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: IndicativeQuoteRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: IndicativeQuoteRequest }
            output: ErrorWithId
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pay/fields': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequirementsRequest }
            output: PaymentRequirementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequirementsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequirementsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: PaymentRequirementsRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: TransferRequest }
            output: TransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: TransferRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer-reasons': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: TransferReasons
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: WebhookV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookV1 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookV1 }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: WebhookV2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Webhooks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: WebhookV2Basic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id/rotate-signing-secret': {
      $post:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookSigningSecretRotateRequest }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookSigningSecretRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookSigningSecretRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookSigningSecretRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: WebhookSigningSecretRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id/failed-events': {
      $get:
        | {
            input: { param: { webhook_id: string } } & {
              query: { limit?: number | undefined; created_before?: string | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: WebhookEvents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              query: { limit?: number | undefined; created_before?: string | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              query: { limit?: number | undefined; created_before?: string | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              query: { limit?: number | undefined; created_before?: string | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
