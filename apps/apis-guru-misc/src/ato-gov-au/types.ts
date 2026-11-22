type BusinessName = {
  fromDate?: string | undefined
  id?: {} | undefined
  lifecycleState?: 'Approved' | 'Expired' | 'Issued' | 'Pending Approval' | 'Suspended' | undefined
  name?: string | undefined
  toDate?: string | undefined
}
type ErrorDetails = {
  code?: string | undefined
  message?: string | undefined
  target?: string | undefined
}
type Unauthenticated = {
  code?: string | undefined
  details?: ErrorDetails | undefined
  message?: string | undefined
  status?: string | undefined
}
type NotFound = {
  code?: string | undefined
  details?: ErrorDetails[] | undefined
  message?: string | undefined
  status?: string | undefined
}
type AddressType = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type BusinessNameLifecycleState = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type ElectronicAddressType = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type Gender = { gender?: string | undefined; id?: {} | undefined }
type LegalEntityType = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type LicenseLifecycleState = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type LicenseType = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type NameDirection = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type NamePrefix = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type NameType = { description?: string | undefined; id?: {} | undefined; name?: string | undefined }
type RegisteredIdentifierType = {
  description?: string | undefined
  id?: {} | undefined
  name?: string | undefined
}
type Role = {
  id?: {} | undefined
  reciprocalRole?: string | undefined
  reciprocalRoleDescription?: string | undefined
  relationship?: string | undefined
  role?: string | undefined
  roleDescription?: string | undefined
}
type IndividualAddress = {
  city?: string | undefined
  country?: string | undefined
  fromDate?: string | undefined
  id?: {} | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  name?: string | undefined
  postalCode?: string | undefined
  suburb?: string | undefined
  toDate?: string | undefined
  addressType?:
    | 'Mailing'
    | 'Principal Place of Business'
    | 'Principal Place of Residence'
    | undefined
}
type ElectronicAddress = {
  areaCode?: string | undefined
  countryPrefix?: string | undefined
  electronicAddressType?: 'Email' | 'Fax' | 'Landline' | 'Mobile' | 'Website' | undefined
  email?: string | undefined
  extension?: string | undefined
  fromDate?: string | undefined
  id?: {} | undefined
  number?: string | undefined
  toDate?: string | undefined
  url?: string | undefined
}
type IndividualName = {
  direction?: 'left-to-right' | 'right-to-left' | undefined
  familyName?: string | undefined
  formalSalutation?: string | undefined
  fromDate?: string | undefined
  givenName?: string | undefined
  id?: {} | undefined
  informalSalutation?: string | undefined
  middleName?: string | undefined
  namePrefix?: 'Mr' | 'Ms' | undefined
  nameSuffix?: string | undefined
  nameType?: 'Alias' | 'Principal Name' | undefined
  toDate?: string | undefined
}
type Individual = {
  addresses?: IndividualAddress[] | undefined
  dateOfBirth: string
  electronicAddresses?: ElectronicAddress[] | undefined
  fromDate?: string | undefined
  gender?: 'Female' | 'Male' | 'Not Applicable' | 'Not Known' | undefined
  id?: {} | undefined
  names?: IndividualName[] | undefined
  placeOfBirth: string
  toDate?: string | undefined
}
type InvalidArgument = {
  code?: string | undefined
  details?: ErrorDetails[] | undefined
  message?: string | undefined
  status?: string | undefined
}
type FailedPrecondition = {
  code?: string | undefined
  details?: ErrorDetails[] | undefined
  message?: string | undefined
  status?: string | undefined
}
type Address = {
  city?: string | undefined
  country?: string | undefined
  fromDate?: string | undefined
  id?: {} | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  name?: string | undefined
  postalCode?: string | undefined
  suburb?: string | undefined
  toDate?: string | undefined
}
type License = {
  fromDate?: string | undefined
  id?: {} | undefined
  licenseType?: 'Australian Financial Services License' | 'License 2B' | undefined
  lifecycleState?: 'Approved' | 'Expired' | 'Issued' | 'Pending Approval' | 'Suspended' | undefined
  toDate?: string | undefined
}
type PartyRole = {
  fromDate?: string | undefined
  id?: {} | undefined
  partyRoleType?: 'Director' | 'Employee' | 'Member' | 'Partner' | 'Trustee' | undefined
  relatedPartyId: {}
  relatedPartyRoleType?:
    | 'Association'
    | 'Company'
    | 'Employer'
    | 'Organisation'
    | 'Partnership'
    | 'Trust'
    | undefined
  relationshipType: 'Directorship' | 'Employment' | 'Membership' | 'Partnership' | 'Trusteeship'
  toDate?: string | undefined
}
type OrganisationAddress = {
  city?: string | undefined
  country?: string | undefined
  fromDate?: string | undefined
  id?: {} | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  name?: string | undefined
  postalCode?: string | undefined
  suburb?: string | undefined
  toDate?: string | undefined
  addressType?: 'Mailing' | 'Principal Place of Business' | undefined
}
type OrganisationName = {
  fromDate?: string | undefined
  id?: {} | undefined
  name?: string | undefined
  toDate?: string | undefined
}
type RegisteredIdentifier = {
  fromDate?: string | undefined
  id?: {} | undefined
  identifier?: string | undefined
  identifierType?: 'ACN' | 'ABN' | undefined
  toDate?: string | undefined
}
type Organisation = {
  addresses?: OrganisationAddress[] | undefined
  electronicAddresses?: ElectronicAddress[] | undefined
  establishmentDate: string
  fromDate?: string | undefined
  id?: {} | undefined
  legalEntityType: 'Company' | 'Partnership' | 'Trust' | 'Joint Venture'
  names?: OrganisationName[] | undefined
  registeredIdentifiers?: RegisteredIdentifier[] | undefined
  toDate?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/business-names': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: BusinessName[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/address-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: AddressType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/business-name-lifecycle-states': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: BusinessNameLifecycleState[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/electronic-address-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: ElectronicAddressType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/genders': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: Gender[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/legal-entity-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: LegalEntityType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/license-lifecycle-states': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: LicenseLifecycleState[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/license-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: LicenseType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/name-directions': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: NameDirection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/name-prefixes': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: NamePrefix[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/name-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: NameType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/registered-identifier-types': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: RegisteredIdentifierType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/classifications/roles': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: Role[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals': {
      $get:
        | {
            input: {
              query: { dateOfBirth?: string | undefined; placeOfBirth?: string | undefined }
            } & { header: { apiKey: string } }
            output: Individual[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { dateOfBirth?: string | undefined; placeOfBirth?: string | undefined }
            } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { dateOfBirth?: string | undefined; placeOfBirth?: string | undefined }
            } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { header: { apiKey: string } } & { json: Individual }
            output: Individual
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { apiKey: string } } & { json: Individual }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { apiKey: string } } & { json: Individual }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId': {
      $delete:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: FailedPrecondition
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Individual
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Individual
            }
            output: Individual
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Individual
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Individual
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Individual
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals/:partyId/addresses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Address[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: Address
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId/addresses/:addressId': {
      $delete:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals/:partyId/business-names': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: BusinessName[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: BusinessName
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId/business-names/:productId': {
      $delete:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: BusinessName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: BusinessName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals/:partyId/electronic-addresses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: ElectronicAddress[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId/electronic-addresses/:addressId': {
      $delete:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals/:partyId/licenses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: License[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: License
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId/licenses/:productId': {
      $delete:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/individuals/:partyId/roles': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: PartyRole[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: PartyRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/individuals/:partyId/roles/:roleId': {
      $delete:
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: PartyRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: PartyRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/licenses': {
      $get:
        | {
            input: { header: { apiKey: string } }
            output: License[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations': {
      $get:
        | {
            input: {
              query: { registeredIdentifier?: string | undefined; identifier?: string | undefined }
            } & { header: { apiKey: string } }
            output: Organisation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { registeredIdentifier?: string | undefined; identifier?: string | undefined }
            } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { registeredIdentifier?: string | undefined; identifier?: string | undefined }
            } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { header: { apiKey: string } } & { json: Organisation }
            output: Organisation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { apiKey: string } } & { json: Organisation }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { apiKey: string } } & { json: Organisation }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId': {
      $delete:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: FailedPrecondition
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Organisation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Organisation
            }
            output: Organisation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Organisation
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Organisation
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Organisation
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations/:partyId/addresses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Address[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: Address
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: Address
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId/addresses/:addressId': {
      $delete:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: Address }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations/:partyId/business-names': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: BusinessName[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: BusinessName
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: BusinessName
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId/business-names/:productId': {
      $delete:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: BusinessName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: BusinessName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: BusinessName }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations/:partyId/electronic-addresses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: ElectronicAddress[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: ElectronicAddress
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId/electronic-addresses/:addressId': {
      $delete:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: ElectronicAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; addressId: string } } & {
              header: { apiKey: string }
            } & { json: ElectronicAddress }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations/:partyId/licenses': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: License[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: License
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: License
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId/licenses/:productId': {
      $delete:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; productId: string } } & {
              header: { apiKey: string }
            } & { json: License }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organisations/:partyId/roles': {
      $get:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: PartyRole[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: PartyRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { header: { apiKey: string } } & {
              json: PartyRole
            }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/organisations/:partyId/roles/:roleId': {
      $delete:
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: PartyRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & { header: { apiKey: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: PartyRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: InvalidArgument
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: Unauthenticated
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partyId: string; roleId: string } } & {
              header: { apiKey: string }
            } & { json: PartyRole }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
