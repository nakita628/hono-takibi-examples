type AcceptDomainTransferFromAnotherAwsAccountRequest = { DomainName: {}; Password: {} }
type AcceptDomainTransferFromAnotherAwsAccountResponse = { OperationId?: {} | undefined }
type InvalidInput = { [x: string]: unknown }
type OperationLimitExceeded = { [x: string]: unknown }
type DomainLimitExceeded = { [x: string]: unknown }
type UnsupportedTLD = { [x: string]: unknown }
type AssociateDelegationSignerToDomainRequest = {
  DomainName: {}
  SigningAttributes: {
    Algorithm?: {} | undefined
    Flags?: {} | undefined
    PublicKey?: {} | undefined
  }
}
type AssociateDelegationSignerToDomainResponse = { OperationId?: {} | undefined }
type DuplicateRequest = { [x: string]: unknown }
type TLDRulesViolation = { [x: string]: unknown }
type DnssecLimitExceeded = { [x: string]: unknown }
type CancelDomainTransferToAnotherAwsAccountRequest = { DomainName: {} }
type CancelDomainTransferToAnotherAwsAccountResponse = { OperationId?: {} | undefined }
type CheckDomainAvailabilityRequest = { DomainName: {}; IdnLangCode?: {} | undefined }
type CheckDomainAvailabilityResponse = { Availability?: {} | undefined }
type CheckDomainTransferabilityRequest = { DomainName: {}; AuthCode?: {} | undefined }
type Transferable =
  | 'TRANSFERABLE'
  | 'UNTRANSFERABLE'
  | 'DONT_KNOW'
  | 'DOMAIN_IN_OWN_ACCOUNT'
  | 'DOMAIN_IN_ANOTHER_ACCOUNT'
  | 'PREMIUM_DOMAIN'
type CheckDomainTransferabilityResponse = {
  Transferability?: { Transferable?: Transferable | undefined } | undefined
}
type DeleteDomainRequest = { DomainName: {} }
type DeleteDomainResponse = { OperationId?: {} | undefined }
type DeleteTagsForDomainRequest = { DomainName: {}; TagsToDelete: {} }
type DeleteTagsForDomainResponse = { [x: string]: unknown }
type DisableDomainAutoRenewRequest = { DomainName: {} }
type DisableDomainAutoRenewResponse = { [x: string]: unknown }
type DisableDomainTransferLockRequest = { DomainName: {} }
type DisableDomainTransferLockResponse = { OperationId?: {} | undefined }
type DisassociateDelegationSignerFromDomainRequest = { DomainName: {}; Id: {} }
type DisassociateDelegationSignerFromDomainResponse = { OperationId?: {} | undefined }
type EnableDomainAutoRenewRequest = { DomainName: {} }
type EnableDomainAutoRenewResponse = { [x: string]: unknown }
type EnableDomainTransferLockRequest = { DomainName: {} }
type EnableDomainTransferLockResponse = { OperationId?: {} | undefined }
type GetContactReachabilityStatusRequest = { domainName?: {} | undefined }
type GetContactReachabilityStatusResponse = { domainName?: {} | undefined; status?: {} | undefined }
type GetDomainDetailRequest = { DomainName: {} }
type GetDomainDetailResponse = {
  DomainName?: {} | undefined
  Nameservers?: {} | undefined
  AutoRenew?: {} | undefined
  AdminContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  RegistrantContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  TechContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  AdminPrivacy?: {} | undefined
  RegistrantPrivacy?: {} | undefined
  TechPrivacy?: {} | undefined
  RegistrarName?: {} | undefined
  WhoIsServer?: {} | undefined
  RegistrarUrl?: {} | undefined
  AbuseContactEmail?: {} | undefined
  AbuseContactPhone?: {} | undefined
  RegistryDomainId?: {} | undefined
  CreationDate?: {} | undefined
  UpdatedDate?: {} | undefined
  ExpirationDate?: {} | undefined
  Reseller?: {} | undefined
  DnsSec?: {} | undefined
  StatusList?: {} | undefined
  DnssecKeys?: {} | undefined
}
type GetDomainSuggestionsRequest = { DomainName: {}; SuggestionCount: {}; OnlyAvailable: {} }
type GetDomainSuggestionsResponse = { SuggestionsList?: {} | undefined }
type GetOperationDetailRequest = { OperationId: {} }
type GetOperationDetailResponse = {
  OperationId?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  DomainName?: {} | undefined
  Type?: {} | undefined
  SubmittedDate?: {} | undefined
  LastUpdatedDate?: {} | undefined
  StatusFlag?: {} | undefined
}
type ListDomainsRequest = {
  FilterConditions?: {} | undefined
  SortCondition?: { Name: {}; SortOrder: {} } | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListDomainsResponse = { Domains?: {} | undefined; NextPageMarker?: {} | undefined }
type ListOperationsRequest = {
  SubmittedSince?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
  Status?: {} | undefined
  Type?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListOperationsResponse = { Operations?: {} | undefined; NextPageMarker?: {} | undefined }
type ListPricesRequest = {
  Tld?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListPricesResponse = { Prices?: {} | undefined; NextPageMarker?: {} | undefined }
type ListTagsForDomainRequest = { DomainName: {} }
type ListTagsForDomainResponse = { TagList?: {} | undefined }
type PushDomainRequest = { DomainName: {}; Target: {} }
type RegisterDomainRequest = {
  DomainName: {}
  IdnLangCode?: {} | undefined
  DurationInYears: {}
  AutoRenew?: {} | undefined
  AdminContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  RegistrantContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  TechContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  PrivacyProtectAdminContact?: {} | undefined
  PrivacyProtectRegistrantContact?: {} | undefined
  PrivacyProtectTechContact?: {} | undefined
}
type RegisterDomainResponse = { OperationId?: {} | undefined }
type RejectDomainTransferFromAnotherAwsAccountRequest = { DomainName: {} }
type RejectDomainTransferFromAnotherAwsAccountResponse = { OperationId?: {} | undefined }
type RenewDomainRequest = {
  DomainName: {}
  DurationInYears?: {} | undefined
  CurrentExpiryYear: {}
}
type RenewDomainResponse = { OperationId?: {} | undefined }
type ResendContactReachabilityEmailRequest = { domainName?: {} | undefined }
type ResendContactReachabilityEmailResponse = {
  domainName?: {} | undefined
  emailAddress?: {} | undefined
  isAlreadyVerified?: {} | undefined
}
type ResendOperationAuthorizationRequest = { OperationId: {} }
type RetrieveDomainAuthCodeRequest = { DomainName: {} }
type RetrieveDomainAuthCodeResponse = { AuthCode?: {} | undefined }
type TransferDomainRequest = {
  DomainName: {}
  IdnLangCode?: {} | undefined
  DurationInYears: {}
  Nameservers?: {} | undefined
  AuthCode?: {} | undefined
  AutoRenew?: {} | undefined
  AdminContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  RegistrantContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  TechContact: {
    FirstName?: {} | undefined
    LastName?: {} | undefined
    ContactType?: {} | undefined
    OrganizationName?: {} | undefined
    AddressLine1?: {} | undefined
    AddressLine2?: {} | undefined
    City?: {} | undefined
    State?: {} | undefined
    CountryCode?: {} | undefined
    ZipCode?: {} | undefined
    PhoneNumber?: {} | undefined
    Email?: {} | undefined
    Fax?: {} | undefined
    ExtraParams?: {} | undefined
  }
  PrivacyProtectAdminContact?: {} | undefined
  PrivacyProtectRegistrantContact?: {} | undefined
  PrivacyProtectTechContact?: {} | undefined
}
type TransferDomainResponse = { OperationId?: {} | undefined }
type TransferDomainToAnotherAwsAccountRequest = { DomainName: {}; AccountId: {} }
type TransferDomainToAnotherAwsAccountResponse = {
  OperationId?: {} | undefined
  Password?: {} | undefined
}
type UpdateDomainContactRequest = {
  DomainName: {}
  AdminContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  RegistrantContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  TechContact?:
    | {
        FirstName?: {} | undefined
        LastName?: {} | undefined
        ContactType?: {} | undefined
        OrganizationName?: {} | undefined
        AddressLine1?: {} | undefined
        AddressLine2?: {} | undefined
        City?: {} | undefined
        State?: {} | undefined
        CountryCode?: {} | undefined
        ZipCode?: {} | undefined
        PhoneNumber?: {} | undefined
        Email?: {} | undefined
        Fax?: {} | undefined
        ExtraParams?: {} | undefined
      }
    | undefined
  Consent?: { MaxPrice: {}; Currency: {} } | undefined
}
type UpdateDomainContactResponse = { OperationId?: {} | undefined }
type UpdateDomainContactPrivacyRequest = {
  DomainName: {}
  AdminPrivacy?: {} | undefined
  RegistrantPrivacy?: {} | undefined
  TechPrivacy?: {} | undefined
}
type UpdateDomainContactPrivacyResponse = { OperationId?: {} | undefined }
type UpdateDomainNameserversRequest = {
  DomainName: {}
  FIAuthKey?: {} | undefined
  Nameservers: {}
}
type UpdateDomainNameserversResponse = { OperationId?: {} | undefined }
type UpdateTagsForDomainRequest = { DomainName: {}; TagsToUpdate?: {} | undefined }
type UpdateTagsForDomainResponse = { [x: string]: unknown }
type ViewBillingRequest = {
  Start?: {} | undefined
  End?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ViewBillingResponse = { NextPageMarker?: {} | undefined; BillingRecords?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDomainTransferFromAnotherAwsAccountRequest }
            output: AcceptDomainTransferFromAnotherAwsAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDomainTransferFromAnotherAwsAccountRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDomainTransferFromAnotherAwsAccountRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDomainTransferFromAnotherAwsAccountRequest }
            output: DomainLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDomainTransferFromAnotherAwsAccountRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: AssociateDelegationSignerToDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.AssociateDelegationSignerToDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateDelegationSignerToDomainRequest }
            output: DnssecLimitExceeded
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelDomainTransferToAnotherAwsAccountRequest }
            output: CancelDomainTransferToAnotherAwsAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelDomainTransferToAnotherAwsAccountRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelDomainTransferToAnotherAwsAccountRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelDomainTransferToAnotherAwsAccountRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainAvailability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainAvailabilityRequest }
            output: CheckDomainAvailabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainAvailability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainAvailabilityRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainAvailability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainAvailabilityRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainTransferability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainTransferabilityRequest }
            output: CheckDomainTransferabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainTransferability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainTransferabilityRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.CheckDomainTransferability'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckDomainTransferabilityRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: DeleteDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsForDomainRequest }
            output: DeleteTagsForDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsForDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsForDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DeleteTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsForDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainAutoRenewRequest }
            output: DisableDomainAutoRenewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainAutoRenewRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainAutoRenewRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: DisableDomainTransferLockResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisableDomainTransferLockRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: DisassociateDelegationSignerFromDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateDelegationSignerFromDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainAutoRenewRequest }
            output: EnableDomainAutoRenewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainAutoRenewRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainAutoRenewRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainAutoRenew'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainAutoRenewRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: EnableDomainTransferLockResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.EnableDomainTransferLock'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: EnableDomainTransferLockRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetContactReachabilityStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContactReachabilityStatusRequest }
            output: GetContactReachabilityStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetContactReachabilityStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContactReachabilityStatusRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetContactReachabilityStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContactReachabilityStatusRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetContactReachabilityStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContactReachabilityStatusRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainDetailRequest }
            output: GetDomainDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainDetailRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainDetailRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainSuggestions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainSuggestionsRequest }
            output: GetDomainSuggestionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainSuggestions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainSuggestionsRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetDomainSuggestions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDomainSuggestionsRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetOperationDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOperationDetailRequest }
            output: GetOperationDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.GetOperationDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOperationDetailRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ListDomains': {
      $post:
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListDomains'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDomainsRequest }
            output: ListDomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListDomains'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDomainsRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ListOperations': {
      $post:
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListOperations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOperationsRequest }
            output: ListOperationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListOperations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOperationsRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ListPrices': {
      $post:
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListPrices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPricesRequest }
            output: ListPricesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListPrices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPricesRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListPrices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPricesRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForDomainRequest }
            output: ListTagsForDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ListTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.PushDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.PushDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PushDomainRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.PushDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PushDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.PushDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PushDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.PushDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PushDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: RegisterDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: DomainLimitExceeded
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RegisterDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RejectDomainTransferFromAnotherAwsAccountRequest }
            output: RejectDomainTransferFromAnotherAwsAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RejectDomainTransferFromAnotherAwsAccountRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RejectDomainTransferFromAnotherAwsAccountRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RejectDomainTransferFromAnotherAwsAccountRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.RenewDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: RenewDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RenewDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendContactReachabilityEmail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendContactReachabilityEmailRequest }
            output: ResendContactReachabilityEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendContactReachabilityEmail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendContactReachabilityEmailRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendContactReachabilityEmail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendContactReachabilityEmailRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendContactReachabilityEmail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendContactReachabilityEmailRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendOperationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendOperationAuthorizationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ResendOperationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResendOperationAuthorizationRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RetrieveDomainAuthCode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetrieveDomainAuthCodeRequest }
            output: RetrieveDomainAuthCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RetrieveDomainAuthCode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetrieveDomainAuthCodeRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.RetrieveDomainAuthCode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetrieveDomainAuthCodeRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: TransferDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: DomainLimitExceeded
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainToAnotherAwsAccountRequest }
            output: TransferDomainToAnotherAwsAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainToAnotherAwsAccountRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainToAnotherAwsAccountRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainToAnotherAwsAccountRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransferDomainToAnotherAwsAccountRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: UpdateDomainContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: UpdateDomainContactPrivacyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainContactPrivacy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainContactPrivacyRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: UpdateDomainNameserversResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: DuplicateRequest
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: TLDRulesViolation
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateDomainNameservers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainNameserversRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForDomainRequest }
            output: UpdateTagsForDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForDomainRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForDomainRequest }
            output: OperationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.UpdateTagsForDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForDomainRequest }
            output: UnsupportedTLD
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53Domains_v20140515.ViewBilling': {
      $post:
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ViewBilling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ViewBillingRequest }
            output: ViewBillingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'Route53Domains_v20140515.ViewBilling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ViewBillingRequest }
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  },
  '/'
>
export default routes
