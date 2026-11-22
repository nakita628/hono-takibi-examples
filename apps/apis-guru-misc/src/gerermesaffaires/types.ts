type InvitationPerson = { PersonId?: string | undefined }
type ModifyCollect = {
  Categories?: string[] | undefined
  ClientManagement?: 'no' | 'manager' | 'adn' | undefined
  IsAdmin?: boolean | undefined
  Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
  PlayerEnd?: string | undefined
}
type CallForDocument = {
  Categories?: string[] | undefined
  ClientManagement?: 'no' | 'manager' | 'adn' | undefined
  Comment?: string | undefined
  Contact?: string | undefined
  IsAdmin?: boolean | undefined
  Message?: string | undefined
  Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
  PlayerEnd?: string | undefined
  Signature?: string | undefined
  Subject?: string | undefined
}
type ModifyInvitation = {
  ClientManagement?: 'no' | 'manager' | 'adn' | undefined
  Folders?: { Id?: string | undefined; Right?: 'read' | 'write' | undefined }[] | undefined
  GroupIds?: string[] | undefined
  IsAdmin?: boolean | undefined
  Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
  PlayerEnd?: string | undefined
}
type GuestInSpace = {
  ClientManagement?: 'no' | 'manager' | 'adn' | undefined
  Comment?: string | undefined
  Contact?: string | undefined
  Folders?: { Id?: string | undefined; Right?: 'read' | 'write' | undefined }[] | undefined
  GroupIds?: string[] | undefined
  IsAdmin?: boolean | undefined
  MemberId?: string | undefined
  Message?: string | undefined
  Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
  PlayerEnd?: string | undefined
  Signature?: string | undefined
  Subject?: string | undefined
}
type Invitation = {
  ClientManagement?: 'no' | 'manager' | 'adn' | undefined
  CodeMethod?:
    | { Code?: string | undefined; Type?: 'manual' | undefined }
    | { Month?: string | undefined; Type?: 'payslip' | undefined }
    | { Type?: 'SMS' | undefined }
    | undefined
  EmployeeAccess?: boolean | undefined
  Folders?:
    | { Id?: string | undefined; Name?: string | undefined; Right?: 'read' | 'write' | undefined }[]
    | undefined
  GroupIds?: string[] | undefined
  Groups?:
    | { EndDate?: string | undefined; Id?: string | undefined; Name?: string | undefined }[]
    | undefined
  IsAdmin?: boolean | undefined
  LinkMethod?: { Type?: 'Postal' | 'Email' | undefined } | undefined
  Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
  PlayerEnd?: string | undefined
  Status?:
    | 'sent'
    | 'accepted'
    | 'refused'
    | 'expired'
    | 'finished'
    | 'waiting for validation'
    | 'waiting for password and userid'
    | 'waiting for login'
    | 'not sent'
    | 'waiting for invitation'
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/box/menus': {
      $get: {
        input: {}
        output: {
          Menus?:
            | { Class?: string | undefined; Id?: string | undefined; Name?: string | undefined }[]
            | undefined
          SpaceId?: string | undefined
          SpaceName?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business-groups': {
      $get: {
        input: { query: { Name?: string | undefined } }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: { Name?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { json: { Name?: string | undefined } }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/business-groups/all': {
      $get: {
        input: { query: { Name?: string | undefined } }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business-groups/:id': {
      $get: {
        input: { param: { id: string } }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business-groups/:id/spaces': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            Name?: string | undefined
            Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
            RegistrationNumber?: string | undefined
          }
        }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business-groups/:id/spaces/:spaceId': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/guest-in-space': {
      $post: {
        input: { param: { id: string; spaceId: string; personId: string; folderId: string } } & {
          json: {
            Groups?: 'tax' | 'wealth management' | 'legal' | undefined
            Role?: 'collaborator' | 'manager' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/spaces': {
      $post: {
        input: { param: { id: string; spaceId: string; personId: string; folderId: string } } & {
          json: {
            Logo?: { Content64Encoded?: string | undefined; Name?: string | undefined } | undefined
            Name?: string | undefined
            TemplateSpaceId?: string | undefined
            Type?: 'enterprise' | 'company' | 'association' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/hub/business-groups/:Id/menus': {
      $get: {
        input: { param: { Id: string } }
        output: {
          Menus?:
            | { Class?: string | undefined; Id?: string | undefined; Name?: string | undefined }[]
            | undefined
          SpaceId?: string | undefined
          SpaceName?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/hub/documents': {
      $post: {
        input: {
          json: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            AddContractAllowed?: boolean | undefined
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: { Content64Encoded?: string | undefined; Name?: string | undefined }
            Title: string
          }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: File
            Title: string
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/hub/menus': {
      $get: {
        input: {}
        output: {
          Menus?:
            | { Class?: string | undefined; Id?: string | undefined; Name?: string | undefined }[]
            | undefined
          SpaceId?: string | undefined
          SpaceName?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/hub/menus/all': {
      $get: {
        input: {}
        output: {
          BusinessGroup?: { Id?: string | undefined; Name?: string | undefined } | undefined
          Menus?:
            | { Class?: string | undefined; Id?: string | undefined; Name?: string | undefined }[]
            | undefined
          SpaceId?: string | undefined
          SpaceName?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/hub/payslips': {
      $post: {
        input: {
          json: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            AddContractAllowed?: boolean | undefined
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: { Content64Encoded?: string | undefined; Name?: string | undefined }
            Title: string
          }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: File
            Title: string
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/hub/spaces/:spaceId/documents': {
      $post: {
        input: { param: { spaceId: string } } & {
          json: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: { Content64Encoded?: string | undefined; Name?: string | undefined }
            Title: string
          }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: File
            Title: string
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/hub/spaces/:spaceId/menus': {
      $get: {
        input: { param: { spaceId: string } }
        output: {
          Folders?: { Id?: string | undefined; Name?: string | undefined }[] | undefined
          Workbooks?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/hub/spaces/:spaceId/payslips': {
      $post: {
        input: { param: { spaceId: string } } & {
          json: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: { Content64Encoded?: string | undefined; Name?: string | undefined }
            Title: string
          }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: File
            Title: string
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/menus': {
      $get: {
        input: {}
        output: {
          Label?: string | undefined
          MenuId?: string | undefined
          Pictogram?: string | undefined
          SubMenus?:
            | {
                Label?: string | undefined
                MenuId?: string | undefined
                Pictogram?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/menus/:menuId/documents': {
      $post: {
        input: { param: { menuId: string } } & {
          json: {
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: { Content64Encoded?: string | undefined; Name?: string | undefined }
            Title: string
          }
        } & {
          form: {
            Author?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File: File
            Title: string
          }
        }
        output: { Report?: { [x: string]: unknown } | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/profile': {
      $get: {
        input: { query: { Contract?: string | undefined } }
        output: {
          Birth?:
            | {
                City?: string | undefined
                Country?: string | undefined
                Date?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          BirthName?: string | undefined
          FirstName?: string | undefined
          Name?: string | undefined
          PrivateSpaceId?: string | undefined
          Sex?: 'male' | 'female' | undefined
          Status?: 'validated' | 'not validated' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          json: {
            Birth?:
              | {
                  City?: string | undefined
                  Country?: string | undefined
                  Date?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            BirthName?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            IDFile?:
              | { Content64Encoded?: string | undefined; Name?: string | undefined }
              | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        } & {
          form: {
            Birth?:
              | {
                  City?: string | undefined
                  Country?: string | undefined
                  Date?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            BirthName?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            IDFile?: File | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: {
          json: {
            Birth?:
              | {
                  City?: string | undefined
                  Country?: string | undefined
                  Date?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            BirthName?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            IDFile?:
              | { Content64Encoded?: string | undefined; Name?: string | undefined }
              | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        } & {
          form: {
            Birth?:
              | {
                  City?: string | undefined
                  Country?: string | undefined
                  Date?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            BirthName?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            IDFile?: File | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/profile/email': {
      $patch: {
        input: {
          json:
            | { Email?: string | undefined }
            | {
                Email?: string | undefined
                EmailCode?: string | undefined
                SMSCode?: string | undefined
              }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/profile/id-file': {
      $get:
        | {
            input: { query: { Contract?: string | undefined } }
            output: {
              Birth?:
                | {
                    City?: string | undefined
                    Country?: string | undefined
                    Date?: string | undefined
                    ZipCode?: string | undefined
                  }
                | undefined
              BirthName?: string | undefined
              FirstName?: string | undefined
              IDFile?: { Content64Encoded?: string | undefined } | undefined
              Name?: string | undefined
              PrivateSpaceId?: string | undefined
              Sex?: 'male' | 'female' | undefined
              Status?: 'validated' | 'not validated' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Contract?: string | undefined } }
            output: {
              Birth?:
                | {
                    City?: string | undefined
                    Country?: string | undefined
                    Date?: string | undefined
                    ZipCode?: string | undefined
                  }
                | undefined
              BirthName?: string | undefined
              FirstName?: string | undefined
              IDFile?: File | undefined
              Name?: string | undefined
              PrivateSpaceId?: string | undefined
              Sex?: 'male' | 'female' | undefined
              Status?: 'validated' | 'not validated' | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/profile/mobile': {
      $patch: {
        input: {
          json:
            | { Mobile?: string | undefined }
            | {
                Mobile?: string | undefined
                Password?: string | undefined
                SMSCode?: string | undefined
              }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/registration': {
      $get: {
        input: { query: { Code: string } }
        output: { Message?: string | undefined } | { url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { Code?: string | undefined; Secret?: string | undefined } }
        output: {
          Private?: { FolderId?: string | undefined; SpaceId?: string | undefined } | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/session': {
      $get: {
        input: {}
        output: { MemberId?: string | undefined; Scope?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces': {
      $get: {
        input: {
          query: {
            Name?: string | undefined
            Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
            RegistrationNumber?: string | undefined
          }
        }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            LegalStatut?: string | undefined
            Logo?: { Content64Encoded?: string | undefined; Name?: string | undefined } | undefined
            Name?: string | undefined
            RegistrationNumber?: string | undefined
            TemplateSpaceId?: string | undefined
            Type?: 'enterprise' | 'company' | 'association' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/all': {
      $get: {
        input: {
          query: {
            Name?: string | undefined
            Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
          }
        }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: {
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          json: {
            Logo?: { Content64Encoded?: string | undefined; Name?: string | undefined } | undefined
            Name?: string | undefined
            TemplateSpaceId?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/accounting-year': {
      $get: {
        input: { param: { id: string } } & {
          query: { End?: string | undefined; EffectiveDate?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          NetIncome?: number | undefined
          NetPosition?: number | undefined
          Start?: string | undefined
          Tax?: number | undefined
          TaxableIncome?: number | undefined
          Turnover?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            NetIncome?: number | undefined
            NetPosition?: number | undefined
            Start?: string | undefined
            Tax?: number | undefined
            TaxableIncome?: number | undefined
            Turnover?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/collective-decision': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            Date?: string | undefined
            Event?: string | undefined
            Range?: string | undefined
            HasCompanyRegistrationCertificate?: 'true' | 'false' | undefined
            HasStatus?: 'true' | 'false' | undefined
            HasSireneRegister?: 'true' | 'false' | undefined
            HasMinutes?: 'true' | 'false' | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          DividendDistributions?: number | undefined
          DividendDistributionsDate?: string | undefined
          Event?:
            | 'EGM'
            | 'CGM'
            | 'OGM'
            | 'ConstituentAssembly'
            | 'SolePartner'
            | 'OtherEvent'
            | 'Other'
            | 'Office'
            | 'ExecutiveCommittee'
            | 'Consulting'
            | 'Board'
            | 'PartnersMeeting'
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DividendDistributions?: number | undefined
            DividendDistributionsDate?: string | undefined
            Event?:
              | 'EGM'
              | 'CGM'
              | 'OGM'
              | 'ConstituentAssembly'
              | 'SolePartner'
              | 'OtherEvent'
              | 'Other'
              | 'Office'
              | 'ExecutiveCommittee'
              | 'Consulting'
              | 'Board'
              | 'PartnersMeeting'
              | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/company-entities': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            Name?: string | undefined
            LegalName?: string | undefined
            RegistrationNumber?: string | undefined
          }
        }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          ApeCode?: string | undefined
          LegalName?: string | undefined
          LegalStatut?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: string | undefined
          VatNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            ApeCode?: string | undefined
            ArchivalDate?: string | undefined
            Comment?: string | undefined
            LegalName?: string | undefined
            LegalStatut?: string | undefined
            Name?: string | undefined
            RegistrationNumber?: string | undefined
            Type?: string | undefined
            VatNumber?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/company-entities/all': {
      $get: {
        input: { param: { id: string } } & {
          query: { Name?: string | undefined; RegistrationNumber?: string | undefined }
        }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          ApeCode?: string | undefined
          LegalName?: string | undefined
          LegalStatut?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: string | undefined
          VatNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/company-entities/:companyId': {
      $get: {
        input: { param: { id: string; companyId: string } }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          ApeCode?: string | undefined
          LegalName?: string | undefined
          LegalStatut?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: string | undefined
          VatNumber?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; companyId: string } } & {
          json: {
            ApeCode?: string | undefined
            ArchivalDate?: string | undefined
            Comment?: string | undefined
            LegalName?: string | undefined
            LegalStatut?: string | undefined
            Name?: string | undefined
            RegistrationNumber?: string | undefined
            Type?: string | undefined
            VatNumber?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/company-entities/:personId/details': {
      $get: {
        input: { param: { id: string; personId: string } }
        output: {
          Address?:
            | {
                City?: string | undefined
                Complement?: string | undefined
                Country?: string | undefined
                Street?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          Designation?: string | undefined
          Email?: string[] | undefined
          Phone?: string[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; personId: string } } & {
          json: {
            Address?:
              | {
                  City?: string | undefined
                  Complement?: string | undefined
                  Country?: string | undefined
                  Street?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            Designation?: string | undefined
            Email?: string[] | undefined
            Phone?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/company-entities/:personId/details/:designation': {
      $delete: {
        input: { param: { id: string; personId: string; designation: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/documents/download': {
      $post:
        | {
            input: { param: { id: string } } & { json: { DocumentId?: string[] | undefined } }
            output: { ZipFile?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: { DocumentId?: string[] | undefined } }
            output: { ZipFile?: File | undefined }
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/spaces/:id/folders/:folderId/persons/:memberId': {
      $get: {
        input: { param: { id: string; memberId: string; folderId: string } }
        output: {
          Active?: string | undefined
          IsAdmin?: string | undefined
          MemberId?: string | undefined
          Name?: string | undefined
          Role?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; memberId: string; folderId: string } } & {
          json: {
            Groups?:
              | 'tax'
              | 'wealth management'
              | 'social'
              | 'social manager'
              | 'purchases'
              | 'sales'
              | 'legal'
              | 'accounting'
              | undefined
            IsAdmin?: boolean | undefined
            Role?: 'collaborator' | 'assistant' | 'empty' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/folders/:folderId/persons/:memberId/activeaccess': {
      $patch: {
        input: { param: { id: string; memberId: string; folderId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/folders/:folderId/persons/:memberId/unactiveaccess': {
      $patch: {
        input: { param: { id: string; memberId: string; folderId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/folders/:folderId/persons/:personId/guest-in-space': {
      $post: {
        input: { param: { folderId: string; personId: string; id: string } } & {
          json: InvitationPerson
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/groups': {
      $get: {
        input: { param: { id: string } } & { query: { Name?: string | undefined } }
        output: {
          EndDate?: string | undefined
          Id?: string | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: { EndDate?: string | undefined; Name?: string | undefined }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/groups/all': {
      $get: {
        input: { param: { id: string } } & { query: { Name?: string | undefined } }
        output: {
          EndDate?: string | undefined
          Id?: string | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/groups/:groupId': {
      $get: {
        input: { param: { id: string; groupId: string } }
        output: {
          EndDate?: string | undefined
          Id?: string | undefined
          Name?: string | undefined
          Accesses?:
            | {
                Id?: string | undefined
                Name?: string | undefined
                Right?: 'read' | 'write' | undefined
              }
            | undefined
          Persons?: { MemberId?: string | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; groupId: string } } & {
          json: { EndDate?: string | undefined; Name?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/groups/:groupId/folders/:folderId': {
      $delete: {
        input: { param: { id: string; groupId: string; folderId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; groupId: string; folderId: string } } & {
          json: { Right?: 'read' | 'write' | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/groups/:groupId/persons/:memberId': {
      $delete: {
        input: { param: { id: string; groupId: string; memberId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; groupId: string; memberId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/legal': {
      $get: {
        input: { param: { id: string } }
        output: {
          IdentificationNumber?: string | undefined
          RegistrationDate?: string | undefined
          RegistrationNumber?: string | undefined
          VATNumber?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          json: {
            IdentificationNumber?: string | undefined
            RegistrationDate?: string | undefined
            RegistrationNumber?: string | undefined
            VATNumber?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/logo': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              Id?: string | undefined
              Logo?:
                | { Content64Encoded?: string | undefined; Extension?: string | undefined }
                | undefined
              ModificationDate?: string | undefined
              Name?: string | undefined
              Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              Id?: string | undefined
              Logo?:
                | { Content64Encoded?: string | undefined; Extension?: string | undefined }
                | undefined
              ModificationDate?: string | undefined
              Name?: string | undefined
              Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/spaces/:id/persons': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            Function?: string | undefined
            Range?: string | undefined
            Name?: string | undefined
            Validated?: 'true' | 'false' | undefined
            Email?: string | undefined
          }
        }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Address?:
            | {
                City?: string | undefined
                Complement?: string | undefined
                Country?: string | undefined
                Street?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          Birth?: { Date?: number | undefined; Place?: string | undefined } | undefined
          Email?: string | undefined
          FirstName?: string | undefined
          Function?: string[] | undefined
          MemberId?: string | undefined
          Mobile?: string | undefined
          Sex?: 'male' | 'female' | undefined
          Validated?: 'true' | 'false' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            Address?:
              | {
                  City?: string | undefined
                  Complement?: string | undefined
                  Country?: string | undefined
                  Street?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            ArchivalDate?: string | undefined
            Birth?: { Date?: number | undefined; Place?: string | undefined } | undefined
            Comment?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            Mobile?: string | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/persons/all': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            Name?: string | undefined
            Function?: string | undefined
            Range?: string | undefined
            Validated?: 'true' | 'false' | undefined
            Email?: string | undefined
          }
        }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Address?:
            | {
                City?: string | undefined
                Complement?: string | undefined
                Country?: string | undefined
                Street?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          Birth?: { Date?: number | undefined; Place?: string | undefined } | undefined
          Email?: string | undefined
          FirstName?: string | undefined
          Function?: string[] | undefined
          MemberId?: string | undefined
          Mobile?: string | undefined
          Sex?: 'male' | 'female' | undefined
          Validated?: 'true' | 'false' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/persons/:memberId/player': {
      $patch: {
        input: { param: { id: string; memberId: string } } & {
          json: {
            ClientManagement?: 'no' | 'manager' | 'adn' | undefined
            IsAdmin?: boolean | undefined
            Player: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator'
            PlayerEnd?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/persons/:personId': {
      $delete: {
        input: { param: { id: string; personId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; personId: string } }
        output: {
          ArchivalDate?: string | undefined
          Comment?: string | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Address?:
            | {
                City?: string | undefined
                Complement?: string | undefined
                Country?: string | undefined
                Street?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          Birth?: { Date?: number | undefined; Place?: string | undefined } | undefined
          Email?: string | undefined
          FirstName?: string | undefined
          Function?: string[] | undefined
          MemberId?: string | undefined
          Mobile?: string | undefined
          Sex?: 'male' | 'female' | undefined
          Validated?: 'true' | 'false' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; personId: string } } & {
          json: {
            Address?:
              | {
                  City?: string | undefined
                  Complement?: string | undefined
                  Country?: string | undefined
                  Street?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            ArchivalDate?: string | undefined
            Birth?: { Date?: number | undefined; Place?: string | undefined } | undefined
            Comment?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            Mobile?: string | undefined
            Name?: string | undefined
            Sex?: 'male' | 'female' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/persons/:personId/details': {
      $get: {
        input: { param: { id: string; personId: string } }
        output: {
          Address?:
            | {
                City?: string | undefined
                Complement?: string | undefined
                Country?: string | undefined
                Street?: string | undefined
                ZipCode?: string | undefined
              }
            | undefined
          Designation?: string | undefined
          Email?: string[] | undefined
          Phone?: string[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; personId: string } } & {
          json: {
            Address?:
              | {
                  City?: string | undefined
                  Complement?: string | undefined
                  Country?: string | undefined
                  Street?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            Designation?: string | undefined
            Email?: string[] | undefined
            Phone?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/persons/:personId/details/:designation': {
      $delete: {
        input: { param: { id: string; personId: string; designation: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/persons/:personId/folders': {
      $get: {
        input: { param: { id: string; personId: string } } & {
          query: { Range?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/persons/:personId/groups': {
      $get: {
        input: { param: { id: string; personId: string } }
        output: {
          EndDate?: string | undefined
          Id?: string | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/persons/:personId/portfolios': {
      $get: {
        input: { param: { id: string; personId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; personId: string } } & {
          json: {
            About?: string | undefined
            ArchivalDate?: string | undefined
            Designation?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Name?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/portfolios/:portfolioId/persons/:memberId': {
      $patch: {
        input: { param: { id: string; memberId: string; portfolioId: string } } & {
          json: {
            Apply?: boolean | undefined
            Groups?:
              | 'tax'
              | 'wealth management'
              | 'social'
              | 'social manager'
              | 'purchases'
              | 'sales'
              | 'legal'
              | 'accounting'
              | undefined
            IsAdmin?: boolean | undefined
            Role?: 'collaborator' | 'assistant' | 'empty' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/professional-vehicles': {
      $get: {
        input: { param: { id: string } } & { query: { Designation?: string | undefined } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          DateIn?: string | undefined
          DateOut?: string | undefined
          Designation?: string | undefined
          Value?: number | undefined
          Brand?: string | undefined
          CompanyTax?: boolean | undefined
          Model?: string | undefined
          RegistrationDate?: string | undefined
          RegistrationNumber?: string | undefined
          Type?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            About?: string | undefined
            Brand?: string | undefined
            Comment?: string | undefined
            CompanyTax?: boolean | undefined
            DateIn?: string | undefined
            DateOut?: string | undefined
            Designation?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Model?: string | undefined
            RegistrationDate?: string | undefined
            RegistrationNumber?: string | undefined
            Type?: string | undefined
            Value?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/settings/nf203/logs': {
      $get: {
        input: { param: { id: string } }
        output: { Enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: { Enabled?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/status': {
      $get: {
        input: { param: { id: string } }
        output: {
          Code?: string | undefined
          Comment?: string | undefined
          Label?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            Code?: string | undefined
            Comment?: string | undefined
            Label?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/status/:code': {
      $delete: {
        input: { param: { id: string; code: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:id/tax-contracts': {
      $get: {
        input: { param: { id: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          Designation?: string | undefined
          End?: string | undefined
          Start?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:id/triggers': {
      $get: {
        input: { param: { id: string } }
        output: {
          Date?: string | undefined
          Event?: 'person' | 'collect' | 'document' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:id/triggers/:name': {
      $delete: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/common-folders/:id': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            ArchivalDate?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Name?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/company-entities/:id/follow-ups': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/customers': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            CustomerNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/customers/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            CustomerNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            FullText?: string | undefined
            Range?: string | undefined
            Class?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          Folders?: { Id?: string | undefined; Name?: string | undefined }[] | undefined
          Id?: string | undefined
          Title?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId': {
      $patch: {
        input: { param: { spaceId: string; documentId: string } } & {
          json: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            Title?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/extend': {
      $get: {
        input: { param: { documentId: string; spaceId: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Extend?: { [x: string]: unknown } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { documentId: string; spaceId: string } } & {
          json: { [x: string]: unknown }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/folders': {
      $get: {
        input: { param: { documentId: string; spaceId: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Folders?: { Id?: string | undefined; Name?: string | undefined }[] | undefined
          Id?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/mailing': {
      $post: {
        input: { param: { documentId: string; spaceId: string } } & {
          json: {
            Address?:
              | {
                  City?: string | undefined
                  Complement?: string | undefined
                  Country?: string | undefined
                  Street?: string | undefined
                  ZipCode?: string | undefined
                }
              | undefined
            Name?: string | undefined
          }
        }
        output: { PageNb?: number | undefined; Price?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/mailingprice': {
      $get: {
        input: { param: { documentId: string; spaceId: string } }
        output: { PageNb?: number | undefined; Price?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/versions': {
      $get: {
        input: { param: { documentId: string; spaceId: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { documentId: string; spaceId: string } } & {
          json: {
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: { Content64Encoded?: string | undefined; Name?: string | undefined } | undefined
            Title?: string | undefined
          }
        } & {
          form: {
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/documents/:documentId/versions/current': {
      $get: {
        input: { param: { documentId: string; spaceId: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:id/access': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Access?:
            | {
                DownloadedOn?: string | undefined
                FirstName?: string | undefined
                Name?: string | undefined
                SeenOn?: string | undefined
              }[]
            | undefined
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:id/accounting': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Accounting?:
            | {
                AccountedOn?: string | undefined
                Workbook?:
                  | 'customer'
                  | 'provider'
                  | 'bank'
                  | 'cashWoucher'
                  | 'fiscal'
                  | 'insurance'
                  | 'social'
                  | 'other'
                  | 'permanent'
                  | undefined
                YearMonth?: string | undefined
              }
            | undefined
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/documents/:id/download': {
      $get:
        | {
            input: { param: { id: string; spaceId: string } }
            output: { File?: File | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; spaceId: string } }
            output: {
              Author?: string | undefined
              Class?: string[] | undefined
              Code?: string | undefined
              Comment?: string | undefined
              Date?: string | undefined
              Extension?: string | undefined
              File?: { Content64Encoded?: string | undefined } | undefined
              Id?: string | undefined
              Title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; spaceId: string } }
            output: {
              DTO?:
                | {
                    Author?: string | undefined
                    Class?: string[] | undefined
                    Code?: string | undefined
                    Comment?: string | undefined
                    Date?: string | undefined
                    Extension?: string | undefined
                    Id?: string | undefined
                    Title?: string | undefined
                  }
                | undefined
              File?: File | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/spaces/:spaceId/employees': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            SSNumber?: string | undefined
            EmployeeNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/employees/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            SSNumber?: string | undefined
            EmployeeNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/employers': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            EmployeeNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/employers/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            EmployeeNumber?: string | undefined
            WithContractingPartner?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/extend': {
      $get: {
        input: { param: { spaceId: string } }
        output: {
          Extend?: { [x: string]: unknown } | undefined
          Id?: string | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Type?: 'private' | 'enterprise' | 'company' | 'association' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { spaceId: string } } & { json: { [x: string]: unknown } }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            Name?: string | undefined
            Keywords?: string | undefined
            RootFolders?: 'all' | undefined
            Range?: string | undefined
            Class?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            Name?: string | undefined
            Range?: string | undefined
            Keywords?: string | undefined
            Class?: string | undefined
          }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/bank-statements/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Balance?: number | undefined
            Number?: number | undefined
            StatementDate?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/contractual-documents/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Amount?: string | undefined
            Designation?: string | undefined
            Reference?: string | undefined
            StartDate?: string | undefined
            Type?:
              | 'contract'
              | 'engagement-letter'
              | 'amendment'
              | 'purchase-order'
              | 'delivery-order'
              | 'quotation'
              | 'other'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/corporate-tax-declarations/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Amount?: number | undefined
            DeclarationDate?: string | undefined
            Order?:
              | '1st advance'
              | '2nd advance'
              | '3rd advance'
              | '4th advance'
              | 'regularization'
              | undefined
            Rate?: number | undefined
            TaxBase?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/expense-proofs/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Account?:
              | 'CAB'
              | 'IKM'
              | 'PRK'
              | 'TXI'
              | 'VOY'
              | 'PTT'
              | 'FHR'
              | 'DIV'
              | 'RES'
              | undefined
            ArchivalDate?: string | undefined
            BeforeVAT?: number | undefined
            ExpenseDate?: string | undefined
            ExpenseReportId?: string | undefined
            Provider?: string | undefined
            Reason?: string | undefined
            Status?: 'R' | 'V' | 'W' | undefined
            VAT?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/expense-reports/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            BeforeVAT?: number | undefined
            ExpenseDate?: string | undefined
            InclVAT?: number | undefined
            ProcessingDate?: string | undefined
            VAT?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/invoices/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            BeforeVAT?: number | undefined
            DueDate?: string | undefined
            InclVAT?: number | undefined
            InvoiceDate?: string | undefined
            Number?: string | undefined
            PaymentDate?: string | undefined
            Type?:
              | 'commercial-invoice'
              | 'credit-note'
              | 'amending-invoice'
              | 'self-billing'
              | 'credit-self-billing'
              | 'down-payment-invoice'
              | 'informations-invoice'
              | undefined
            VAT?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/nominative-social-declarations/:documentId': {
      $get: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Begin?: string | undefined
          EmployeeContributions?: number | undefined
          EmployerContributions?: number | undefined
          End?: string | undefined
          NetAmount?: number | undefined
          TotalGrossAmount?: number | undefined
          PayrollId?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/other-taxes/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Amount?: number | undefined
            DeclarationDate?: string | undefined
            Reference?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/payrolls/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Begin?: string | undefined
            EmployeeContributions?: number | undefined
            EmployerContributions?: number | undefined
            End?: string | undefined
            NetAmount?: number | undefined
            TotalGrossAmount?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/payrolls/:documentId/refresh': {
      $post:
        | {
            input: { param: { spaceId: string; folderId: string; documentId: string } }
            output: { Id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { spaceId: string; folderId: string; documentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/payslips/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Begin?: string | undefined
            EmployeeContributions?: number | undefined
            EmployerContributions?: number | undefined
            End?: string | undefined
            FixedGrossAmount?: number | undefined
            NetAmount?: number | undefined
            TotalGrossAmount?: number | undefined
            Vacation?: number | undefined
            VariableGrossAmount?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/social-contracts/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            ContractDate?: string | undefined
            ContractDuration?: string | undefined
            ContractualChange?: string | undefined
            Position?: string | undefined
            WageDevelopments?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/social-declarations/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: { Amount?: number | undefined; DeclarationDate?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:folderId/vat-declarations/:documentId': {
      $delete: {
        input: { param: { spaceId: string; folderId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { spaceId: string; folderId: string; documentId: string } } & {
          json: {
            Begin?: string | undefined
            CollectedVAT?: number | undefined
            CreditVAT?: number | undefined
            DeductibleVAT?: number | undefined
            End?: string | undefined
            ExemptTurnover?: number | undefined
            Number?: string | undefined
            PayableVAT?: number | undefined
            TaxableTurnover?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/accounting-year': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            NetIncome?: number | undefined
            NetPosition?: number | undefined
            Start?: string | undefined
            Tax?: number | undefined
            TaxableIncome?: number | undefined
            Turnover?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/accountings': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            FolderDate?: string | undefined
            Title?: string | undefined
            Workbook?: string | undefined
            Class?: string | undefined
            AccountedOn?: string | undefined
            WithFolders?: string | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Accounting?:
            | {
                AccountedOn?: string | undefined
                Workbook?:
                  | 'customer'
                  | 'provider'
                  | 'bank'
                  | 'cashWoucher'
                  | 'fiscal'
                  | 'insurance'
                  | 'social'
                  | 'other'
                  | 'permanent'
                  | undefined
                YearMonth?: string | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/accountings-journal': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            DeliveryDate?: string | undefined
            AccountingDate?: string | undefined
            Number?: number | undefined
            Workbook?: string | undefined
            YearMonth?: string | undefined
            Class?: string | undefined
            Code?: string | undefined
            TargetFolderName?: string | undefined
          }
        }
        output: {
          AccountingDate?: string | undefined
          AccountingDocumentId?: string | undefined
          Class?: string | undefined
          Code?: string | undefined
          DeliveryDate?: string | undefined
          Id?: string | undefined
          Number?: number | undefined
          TargetFolder?: { Id?: string | undefined; Name?: string | undefined } | undefined
          Workbook?:
            | 'customer'
            | 'provider'
            | 'bank'
            | 'cashWoucher'
            | 'fiscal'
            | 'insurance'
            | 'social'
            | 'other'
            | 'permanent'
            | undefined
          YearMonth?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/bank': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            ContractReference?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/bank-statements': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            Number?: string | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          AccountedOn?: string | undefined
          Balance?: number | undefined
          Number?: number | undefined
          StatementDate?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Balance?: number | undefined
                DocumentId?: string | undefined
                Number?: number | undefined
                StatementDate?: string | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Balance?: number | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Number?: number | undefined
                StatementDate?: string | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Balance?: number | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Number?: number | undefined
            StatementDate?: string | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/collective-decision': {
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DividendDistributions?: number | undefined
            DividendDistributionsDate?: string | undefined
            Event?:
              | 'EGM'
              | 'CGM'
              | 'OGM'
              | 'ConstituentAssembly'
              | 'SolePartner'
              | 'OtherEvent'
              | 'Other'
              | 'Office'
              | 'ExecutiveCommittee'
              | 'Consulting'
              | 'Board'
              | 'PartnersMeeting'
              | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/common-folders': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Name?: string | undefined; Keywords?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            ArchivalDate?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Name?: string | undefined
            Rights?: boolean | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/common-folders/all': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Name?: string | undefined; Keywords?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/contracting-partner': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Class?: 'CompanyEntity' | 'Person' | undefined
          Id?: string | undefined
          Role?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/contracting-partner/space': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Class?: 'CompanyEntity' | 'Person' | undefined
          Id?: string | undefined
          Role?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/contractual-documents': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            FolderDate?: string | undefined
            Type?:
              | 'contract'
              | 'engagement-letter'
              | 'amendment'
              | 'purchase-order'
              | 'delivery-order'
              | 'quotation'
              | 'other'
              | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Amount?: string | undefined
          Designation?: string | undefined
          Reference?: string | undefined
          StartDate?: string | undefined
          Type?:
            | 'contract'
            | 'engagement-letter'
            | 'amendment'
            | 'purchase-order'
            | 'delivery-order'
            | 'quotation'
            | 'other'
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Amount?: string | undefined
                Designation?: string | undefined
                DocumentId?: string | undefined
                Reference?: string | undefined
                StartDate?: string | undefined
                Type?:
                  | 'contract'
                  | 'engagement-letter'
                  | 'amendment'
                  | 'purchase-order'
                  | 'delivery-order'
                  | 'quotation'
                  | 'other'
                  | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Amount?: string | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                Designation?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Reference?: string | undefined
                StartDate?: string | undefined
                Title?: string | undefined
                Type?:
                  | 'contract'
                  | 'engagement-letter'
                  | 'amendment'
                  | 'purchase-order'
                  | 'delivery-order'
                  | 'quotation'
                  | 'other'
                  | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Amount?: string | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            Designation?: string | undefined
            File?: File | undefined
            Reference?: string | undefined
            StartDate?: string | undefined
            Title?: string | undefined
            Type?:
              | 'contract'
              | 'engagement-letter'
              | 'amendment'
              | 'purchase-order'
              | 'delivery-order'
              | 'quotation'
              | 'other'
              | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/contractual-relationship': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/coporate-tax-declarations': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Amount?: number | undefined
          DeclarationDate?: string | undefined
          Order?:
            | '1st advance'
            | '2nd advance'
            | '3rd advance'
            | '4th advance'
            | 'regularization'
            | undefined
          Rate?: number | undefined
          TaxBase?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Amount?: number | undefined
                DeclarationDate?: string | undefined
                DocumentId?: string | undefined
                Order?:
                  | '1st advance'
                  | '2nd advance'
                  | '3rd advance'
                  | '4th advance'
                  | 'regularization'
                  | undefined
                Rate?: number | undefined
                TaxBase?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Amount?: number | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                DeclarationDate?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Order?:
                  | '1st advance'
                  | '2nd advance'
                  | '3rd advance'
                  | '4th advance'
                  | 'regularization'
                  | undefined
                Rate?: number | undefined
                TaxBase?: number | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Amount?: number | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DeclarationDate?: string | undefined
            File?: File | undefined
            Order?:
              | '1st advance'
              | '2nd advance'
              | '3rd advance'
              | '4th advance'
              | 'regularization'
              | undefined
            Rate?: number | undefined
            TaxBase?: number | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/customer': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
          Actors?:
            | {
                Active?: string | undefined
                IsAdmin?: string | undefined
                MemberId?: string | undefined
                Name?: string | undefined
                Role?: string | undefined
              }[]
            | undefined
          ClientSpaceId?: string | undefined
          PortfolioId?: string | undefined
          SecondaryPortfolioIds?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            CustomerNumber?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            KeepOld?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PortfolioId?: string | undefined
            SecondaryPortfolioId?: string | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/deliveries-journal': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            DeliveryDate?: string | undefined
            AccountingDate?: string | undefined
            Number?: number | undefined
            Class?: string | undefined
            TargetFolderName?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string | undefined
          DeleteDate?: string | undefined
          DeliveryDate?: string | undefined
          Id?: string | undefined
          Number?: number | undefined
          TargetFolder?: { Id?: string | undefined; Name?: string | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/documents': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            Title?: string | undefined
            FolderDate?: string | undefined
            Class?: string | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | { DocumentId?: string | undefined }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/documents/:documentId/detach': {
      $patch: {
        input: { param: { id: string; spaceId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/employee': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            ContractType?: string | undefined
            EmployeeNumber?: string | undefined
            End?: string | undefined
            Function?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PostalMail?: boolean | undefined
            SSNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/expense-proofs': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            FolderDate?: string | undefined
            Status?: 'R' | 'W' | 'V' | undefined
            NoExpenseReport?: boolean | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Account?:
            | 'CAB'
            | 'IKM'
            | 'PRK'
            | 'TXI'
            | 'VOY'
            | 'PTT'
            | 'FHR'
            | 'DIV'
            | 'RES'
            | undefined
          ArchivalDate?: string | undefined
          ExpenseDate?: string | undefined
          InclVAT?: number | undefined
          Provider?: string | undefined
          Reason?: string | undefined
          Status?: 'R' | 'V' | 'W' | undefined
          VAT?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Account?:
                  | 'CAB'
                  | 'IKM'
                  | 'PRK'
                  | 'TXI'
                  | 'VOY'
                  | 'PTT'
                  | 'FHR'
                  | 'DIV'
                  | 'RES'
                  | undefined
                ArchivalDate?: string | undefined
                BeforeVAT?: number | undefined
                DocumentId?: string | undefined
                ExpenseDate?: string | undefined
                ExpenseReportId?: string | undefined
                Provider?: string | undefined
                Reason?: string | undefined
                Status?: 'R' | 'V' | 'W' | undefined
                VAT?: number | undefined
              }
            | {
                Account?:
                  | 'CAB'
                  | 'IKM'
                  | 'PRK'
                  | 'TXI'
                  | 'VOY'
                  | 'PTT'
                  | 'FHR'
                  | 'DIV'
                  | 'RES'
                  | undefined
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                ArchivalDate?: string | undefined
                Author?: string | undefined
                BeforeVAT?: number | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                ExpenseDate?: string | undefined
                ExpenseReportId?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Provider?: string | undefined
                Reason?: string | undefined
                Status?: 'R' | 'V' | 'W' | undefined
                Title?: string | undefined
                VAT?: number | undefined
              }
        } & {
          form: {
            Account?:
              | 'CAB'
              | 'IKM'
              | 'PRK'
              | 'TXI'
              | 'VOY'
              | 'PTT'
              | 'FHR'
              | 'DIV'
              | 'RES'
              | undefined
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            ArchivalDate?: string | undefined
            Author?: string | undefined
            BeforeVAT?: number | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            ExpenseDate?: string | undefined
            ExpenseReportId?: string | undefined
            File?: File | undefined
            Provider?: string | undefined
            Reason?: string | undefined
            Status?: 'R' | 'V' | 'W' | undefined
            Title?: string | undefined
            VAT?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/expense-reports': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            FolderDate?: string | undefined
            WithExtend?: 'true' | 'false' | undefined
            Range?: string | undefined
            ProcessingDate?: string | undefined
            ExpenseDate?: { [x: string]: unknown } | undefined
            SortOrder?: 'asc' | 'desc' | undefined
            SortName?: 'ExpenseDate' | 'InclVAT' | 'Title' | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          BeforeVAT?: number | undefined
          ExpenseDate?: string | undefined
          InclVAT?: number | undefined
          ProcessingDate?: string | undefined
          VAT?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                BeforeVAT?: number | undefined
                Date?: string | undefined
                DocumentId?: string | undefined
                ExpenseDate?: string | undefined
                InclVAT?: number | undefined
                ProcessingDate?: string | undefined
                VAT?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                BeforeVAT?: number | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                ExpenseDate?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                InclVAT?: number | undefined
                ProcessingDate?: string | undefined
                Title?: string | undefined
                VAT?: number | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            BeforeVAT?: number | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            ExpenseDate?: string | undefined
            File?: File | undefined
            InclVAT?: number | undefined
            ProcessingDate?: string | undefined
            Title?: string | undefined
            VAT?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/expense-reports/:expenseReportId/expense-proofs': {
      $get: {
        input: { param: { id: string; spaceId: string; expenseReportId: string } } & {
          query: {
            Date?: string | undefined
            Status?: 'R' | 'W' | 'V' | undefined
            FolderDate?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Account?:
            | 'CAB'
            | 'IKM'
            | 'PRK'
            | 'TXI'
            | 'VOY'
            | 'PTT'
            | 'FHR'
            | 'DIV'
            | 'RES'
            | undefined
          ArchivalDate?: string | undefined
          ExpenseDate?: string | undefined
          InclVAT?: number | undefined
          Provider?: string | undefined
          Reason?: string | undefined
          Status?: 'R' | 'V' | 'W' | undefined
          VAT?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/insurance': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
          PolicyNumber?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            CustomerNumber?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PolicyNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/invoices': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Title?: string | undefined
            Date?: string | undefined
            Number?: string | undefined
            InclVAT?: number | undefined
            BeforeVAT?: number | undefined
            DueDate?: string | undefined
            PaymentDate?: string | undefined
            InvoiceDate?: string | undefined
            FolderDate?: string | undefined
            AccountedOn?: string | undefined
            WithExtend?: string | undefined
            Extend?: string | undefined
            Range?: string | undefined
            SortOrder?: 'asc' | 'desc' | undefined
            SortName?:
              | 'DueDate'
              | 'PaymentDate'
              | 'InvoiceDate'
              | 'InclVAT'
              | 'Contracting'
              | 'Title'
              | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          AccountedOn?: string | undefined
          BeforeVAT?: number | undefined
          DueDate?: string | undefined
          InclVAT?: number | undefined
          InvoiceDate?: string | undefined
          Number?: string | undefined
          PaymentDate?: string | undefined
          Type?:
            | 'commercial-invoice'
            | 'credit-note'
            | 'amending-invoice'
            | 'self-billing'
            | 'credit-self-billing'
            | 'down-payment-invoice'
            | 'informations-invoice'
            | undefined
          VAT?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                BeforeVAT?: number | undefined
                Date?: string | undefined
                DocumentId?: string | undefined
                DueDate?: string | undefined
                InclVAT?: number | undefined
                InvoiceDate?: string | undefined
                Number?: string | undefined
                PaymentDate?: string | undefined
                Type?:
                  | 'commercial-invoice'
                  | 'credit-note'
                  | 'amending-invoice'
                  | 'self-billing'
                  | 'credit-self-billing'
                  | 'down-payment-invoice'
                  | 'informations-invoice'
                  | undefined
                VAT?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                BeforeVAT?: number | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                DueDate?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                InclVAT?: number | undefined
                InvoiceDate?: string | undefined
                Number?: string | undefined
                PaymentDate?: string | undefined
                Title?: string | undefined
                Type?:
                  | 'commercial-invoice'
                  | 'credit-note'
                  | 'amending-invoice'
                  | 'self-billing'
                  | 'credit-self-billing'
                  | 'down-payment-invoice'
                  | 'informations-invoice'
                  | undefined
                VAT?: number | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            BeforeVAT?: number | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DueDate?: string | undefined
            File?: File | undefined
            InclVAT?: number | undefined
            InvoiceDate?: string | undefined
            Number?: string | undefined
            PaymentDate?: string | undefined
            Title?: string | undefined
            Type?:
              | 'commercial-invoice'
              | 'credit-note'
              | 'amending-invoice'
              | 'self-billing'
              | 'credit-self-billing'
              | 'down-payment-invoice'
              | 'informations-invoice'
              | undefined
            VAT?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/legal-entity': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: { Class?: 'CompanyEntity' | 'Person' | undefined; Id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/loan': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Amount?: number | undefined
          Category?:
            | 'debt spreading'
            | 'bank loan'
            | 'current account'
            | 'overdraft agreement'
            | 'leasing'
            | 'obligation'
            | undefined
          Designation?: string | undefined
          DueAmount?: number | undefined
          MonthsNumber?: number | undefined
          Rate?: number | undefined
          TotalCost?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Amount?: number | undefined
            Category?:
              | 'debt spreading'
              | 'bank loan'
              | 'current account'
              | 'overdraft agreement'
              | 'leasing'
              | 'obligation'
              | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            DueAmount?: number | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            MonthsNumber?: number | undefined
            Rate?: number | undefined
            Start?: string | undefined
            TotalCost?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/messages': {
      $get: {
        input: { param: { spaceId: string; id: string } } & {
          query: {
            Text?: string | undefined
            Range?: string | undefined
            MessageDate?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Id?: string | undefined
          Level?: 'confidential' | 'regular' | undefined
          MessageDate?: string | undefined
          ModificationAuthor?: string | undefined
          ModificationDate?: string | undefined
          Text?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            Level?: 'confidential' | 'regular' | undefined
            MessageDate?: string | undefined
            Notify?:
              | { How?: 'std' | 'mail' | 'sms' | undefined; MemberIds?: string[] | undefined }
              | undefined
            Text?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/messages/:messageId': {
      $get: {
        input: { param: { id: string; spaceId: string; messageId: string } }
        output: {
          Author?: string | undefined
          Id?: string | undefined
          Level?: 'confidential' | 'regular' | undefined
          MessageDate?: string | undefined
          ModificationAuthor?: string | undefined
          ModificationDate?: string | undefined
          Text?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string; messageId: string } } & {
          json: {
            Level?: 'confidential' | 'regular' | undefined
            MessageDate?: string | undefined
            Notify?:
              | { How?: 'std' | 'mail' | 'sms' | undefined; MemberIds?: string[] | undefined }
              | undefined
            Text?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/nominative-social-declarations': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Begin?: string | undefined
          EmployeeContributions?: number | undefined
          EmployerContributions?: number | undefined
          End?: string | undefined
          NetAmount?: number | undefined
          TotalGrossAmount?: number | undefined
          PayrollId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/other-taxes': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Amount?: number | undefined
          DeclarationDate?: string | undefined
          Reference?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Amount?: number | undefined
                DeclarationDate?: string | undefined
                DocumentId?: string | undefined
                Reference?: string | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Amount?: number | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                DeclarationDate?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Reference?: string | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Amount?: number | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DeclarationDate?: string | undefined
            File?: File | undefined
            Reference?: string | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/passwords': {
      $get: {
        input: { param: { spaceId: string; id: string } }
        output: {
          Comment?: string | undefined
          Designation?: string | undefined
          Ident?: string | undefined
          Link?: string | undefined
          Password?: string | undefined
          Id?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            Comment?: string | undefined
            Designation?: string | undefined
            Ident?: string | undefined
            Link?: string | undefined
            Password?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/passwords/:passwordId': {
      $delete: {
        input: { param: { id: string; spaceId: string; passwordId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string; passwordId: string } }
        output: {
          Comment?: string | undefined
          Designation?: string | undefined
          Ident?: string | undefined
          Link?: string | undefined
          Password?: string | undefined
          Id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string; passwordId: string } } & {
          json: {
            Comment?: string | undefined
            Designation?: string | undefined
            Ident?: string | undefined
            Link?: string | undefined
            Password?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/payrolls': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Date?: string | undefined
            Begin?: string | undefined
            End?: string | undefined
            Range?: string | undefined
          }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Begin?: string | undefined
          EmployeeContributions?: number | undefined
          EmployerContributions?: number | undefined
          End?: string | undefined
          NetAmount?: number | undefined
          TotalGrossAmount?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Begin?: string | undefined
                DocumentId?: string | undefined
                EmployeeContributions?: number | undefined
                EmployerContributions?: number | undefined
                End?: string | undefined
                NetAmount?: number | undefined
                TotalGrossAmount?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Begin?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                EmployeeContributions?: number | undefined
                EmployerContributions?: number | undefined
                End?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                NetAmount?: number | undefined
                Title?: string | undefined
                TotalGrossAmount?: number | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Begin?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            EmployeeContributions?: number | undefined
            EmployerContributions?: number | undefined
            End?: string | undefined
            File?: File | undefined
            NetAmount?: number | undefined
            Title?: string | undefined
            TotalGrossAmount?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/payrolls/:payrollId/nominative-social-declaration': {
      $delete: {
        input: { param: { id: string; spaceId: string; payrollId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; spaceId: string; payrollId: string } } & {
          json:
            | { DocumentId?: string | undefined }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/payslips': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Begin?: string | undefined
          EmployeeContributions?: number | undefined
          EmployerContributions?: number | undefined
          End?: string | undefined
          FixedGrossAmount?: number | undefined
          NetAmount?: number | undefined
          TotalGrossAmount?: number | undefined
          Vacation?: number | undefined
          VariableGrossAmount?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Begin?: string | undefined
                DocumentId?: string | undefined
                EmployeeContributions?: number | undefined
                EmployerContributions?: number | undefined
                End?: string | undefined
                FixedGrossAmount?: number | undefined
                NetAmount?: number | undefined
                TotalGrossAmount?: number | undefined
                Vacation?: number | undefined
                VariableGrossAmount?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Begin?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                EmployeeContributions?: number | undefined
                EmployerContributions?: number | undefined
                End?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                FixedGrossAmount?: number | undefined
                NetAmount?: number | undefined
                Title?: string | undefined
                TotalGrossAmount?: number | undefined
                Vacation?: number | undefined
                VariableGrossAmount?: number | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Begin?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            EmployeeContributions?: number | undefined
            EmployerContributions?: number | undefined
            End?: string | undefined
            File?: File | undefined
            FixedGrossAmount?: number | undefined
            NetAmount?: number | undefined
            Title?: string | undefined
            TotalGrossAmount?: number | undefined
            Vacation?: number | undefined
            VariableGrossAmount?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/portfolio/:portfolioId': {
      $delete: {
        input: { param: { id: string; spaceId: string; portfolioId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/professional-vehicle': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Brand?: string | undefined
            Comment?: string | undefined
            CompanyTax?: boolean | undefined
            DateIn?: string | undefined
            DateOut?: string | undefined
            Designation?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Model?: string | undefined
            RegistrationDate?: string | undefined
            RegistrationNumber?: string | undefined
            Type?: string | undefined
            Value?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/provider': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          ProviderNumber?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            ProviderNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/required-documents': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Comment?: string | undefined
          Date?: string | undefined
          DocIds?: string[] | undefined
          Id?: string | undefined
          Name?: string | undefined
          Status?: 'waiting' | 'validated' | 'ended' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid': {
      $patch: {
        input: { param: { id: string; spaceId: string; requireddocumentid: string } } & {
          json: { Status?: 'waiting' | 'ended' | 'validated' | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; spaceId: string; requireddocumentid: string } } & {
          json: {
            File?: { Content64Encoded?: string | undefined; Name?: string | undefined } | undefined
          }
        } & { form: { File?: File | undefined; Name?: string | undefined } }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid/documents/:documentId': {
      $delete: {
        input: {
          param: { id: string; spaceId: string; requireddocumentid: string; documentId: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/sections': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          Keywords?: string[] | undefined
          Name?: string | undefined
          State?: 'folded' | 'unfolded' | 'hidden' | undefined
          Type?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/social-contracts': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          ContractDate?: string | undefined
          ContractDuration?: string | undefined
          ContractualChange?: string | undefined
          Position?: string | undefined
          WageDevelopments?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                ContractDate?: string | undefined
                ContractDuration?: string | undefined
                ContractualChange?: string | undefined
                DocumentId?: string | undefined
                Position?: string | undefined
                WageDevelopments?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                ContractDate?: string | undefined
                ContractDuration?: string | undefined
                ContractualChange?: string | undefined
                Date?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Position?: string | undefined
                Title?: string | undefined
                WageDevelopments?: number | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            ContractDate?: string | undefined
            ContractDuration?: string | undefined
            ContractualChange?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Position?: string | undefined
            Title?: string | undefined
            WageDevelopments?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/social-declarations': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Amount?: number | undefined
          DeclarationDate?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Amount?: number | undefined
                DeclarationDate?: string | undefined
                DocumentId?: string | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Amount?: number | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                DeclarationDate?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Amount?: number | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            DeclarationDate?: string | undefined
            File?: File | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/social-regimes': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
          Type?: 'mandatory' | 'optional' | 'null' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
            Start?: string | undefined
            Type?: 'mandatory' | 'optional' | 'null' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/sum-invoices': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: {
            Number?: string | undefined
            InclVat?: number | undefined
            BeforeVAT?: number | undefined
            DueDate?: string | undefined
            PaymentDate?: string | undefined
            InvoiceDate?: string | undefined
          }
        }
        output: {
          BeforeVAT?: number | undefined
          InclVAT?: number | undefined
          VAT?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/tax-contract': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            ArchivalDate?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Start?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/vat-declarations': {
      $get: {
        input: { param: { id: string; spaceId: string } } & {
          query: { Date?: string | undefined; Range?: string | undefined }
        }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          Begin?: string | undefined
          CollectedVAT?: number | undefined
          CreditVAT?: number | undefined
          DeductibleVAT?: number | undefined
          End?: string | undefined
          ExemptTurnover?: number | undefined
          Number?: string | undefined
          PayableVAT?: number | undefined
          TaxableTurnover?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json:
            | {
                Begin?: string | undefined
                CollectedVAT?: number | undefined
                CreditVAT?: number | undefined
                DeductibleVAT?: number | undefined
                DocumentId?: string | undefined
                End?: string | undefined
                ExemptTurnover?: number | undefined
                Number?: string | undefined
                PayableVAT?: number | undefined
                TaxableTurnover?: number | undefined
              }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Begin?: string | undefined
                Code?: string | undefined
                CollectedVAT?: number | undefined
                Comment?: string | undefined
                CreditVAT?: number | undefined
                Date?: string | undefined
                DeductibleVAT?: number | undefined
                End?: string | undefined
                ExemptTurnover?: number | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Number?: string | undefined
                PayableVAT?: number | undefined
                TaxableTurnover?: number | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Begin?: string | undefined
            Code?: string | undefined
            CollectedVAT?: number | undefined
            Comment?: string | undefined
            CreditVAT?: number | undefined
            Date?: string | undefined
            DeductibleVAT?: number | undefined
            End?: string | undefined
            ExemptTurnover?: number | undefined
            File?: File | undefined
            Number?: string | undefined
            PayableVAT?: number | undefined
            TaxableTurnover?: number | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/folders/:id/:documentClass': {
      $delete: {
        input: { param: { spaceId: string; id: string; documentClass: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string; documentClass: string } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string; documentClass: string } } & {
          json:
            | { DocumentId?: string | undefined }
            | {
                Accounting?:
                  | {
                      AccountedOn?: string | undefined
                      Workbook?:
                        | 'customer'
                        | 'provider'
                        | 'bank'
                        | 'cashWoucher'
                        | 'fiscal'
                        | 'insurance'
                        | 'social'
                        | 'other'
                        | 'permanent'
                        | undefined
                      YearMonth?: string | undefined
                    }
                  | undefined
                Author?: string | undefined
                Code?: string | undefined
                Comment?: string | undefined
                Date?: string | undefined
                File?:
                  | { Content64Encoded?: string | undefined; Name?: string | undefined }
                  | undefined
                Title?: string | undefined
              }
        } & {
          form: {
            Accounting?:
              | {
                  AccountedOn?: string | undefined
                  Workbook?:
                    | 'customer'
                    | 'provider'
                    | 'bank'
                    | 'cashWoucher'
                    | 'fiscal'
                    | 'insurance'
                    | 'social'
                    | 'other'
                    | 'permanent'
                    | undefined
                  YearMonth?: string | undefined
                }
              | undefined
            Author?: string | undefined
            Code?: string | undefined
            Comment?: string | undefined
            Date?: string | undefined
            File?: File | undefined
            Title?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/banks': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            ContractReference?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/banks/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/contracts': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/contractual-relationships': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/contractual-relationships/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractReference?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/customers': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            CustomerNumber?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PortfolioId?: string | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/customers/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/insurances': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
          PolicyNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            CustomerNumber?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PolicyNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/insurances/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          CustomerNumber?: string | undefined
          Designation?: string | undefined
          PolicyNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/loans': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Amount?: number | undefined
          Category?:
            | 'debt spreading'
            | 'bank loan'
            | 'current account'
            | 'overdraft agreement'
            | 'leasing'
            | 'obligation'
            | undefined
          Designation?: string | undefined
          DueAmount?: number | undefined
          MonthsNumber?: number | undefined
          Rate?: number | undefined
          TotalCost?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Amount?: number | undefined
            Category?:
              | 'debt spreading'
              | 'bank loan'
              | 'current account'
              | 'overdraft agreement'
              | 'leasing'
              | 'obligation'
              | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            DueAmount?: number | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            MonthsNumber?: number | undefined
            Rate?: number | undefined
            Start?: string | undefined
            TotalCost?: number | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/loans/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Amount?: number | undefined
          Category?:
            | 'debt spreading'
            | 'bank loan'
            | 'current account'
            | 'overdraft agreement'
            | 'leasing'
            | 'obligation'
            | undefined
          Designation?: string | undefined
          DueAmount?: number | undefined
          MonthsNumber?: number | undefined
          Rate?: number | undefined
          TotalCost?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/providers': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          ProviderNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            ProviderNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/providers/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          ProviderNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/social-regimes': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
          Type?: 'mandatory' | 'optional' | 'null' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            Designation?: string | undefined
            End?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
            Start?: string | undefined
            Type?: 'mandatory' | 'optional' | 'null' | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/legal-entities/:id/social-regimes/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
          Type?: 'mandatory' | 'optional' | 'null' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/loans': {
      $get: {
        input: { param: { spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Amount?: number | undefined
          Category?:
            | 'debt spreading'
            | 'bank loan'
            | 'current account'
            | 'overdraft agreement'
            | 'leasing'
            | 'obligation'
            | undefined
          Designation?: string | undefined
          DueAmount?: number | undefined
          MonthsNumber?: number | undefined
          Rate?: number | undefined
          TotalCost?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/loans/all': {
      $get: {
        input: { param: { spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Amount?: number | undefined
          Category?:
            | 'debt spreading'
            | 'bank loan'
            | 'current account'
            | 'overdraft agreement'
            | 'leasing'
            | 'obligation'
            | undefined
          Designation?: string | undefined
          DueAmount?: number | undefined
          MonthsNumber?: number | undefined
          Rate?: number | undefined
          TotalCost?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/call-for-document': {
      $patch: {
        input: { param: { id: string; spaceId: string } } & { json: ModifyCollect }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & { json: CallForDocument }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/employees': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            About?: string | undefined
            Comment?: string | undefined
            ContractType?: string | undefined
            EmployeeNumber?: string | undefined
            End?: string | undefined
            Function?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
            PostalMail?: boolean | undefined
            SSNumber?: string | undefined
            Start?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/employees/all': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          ContractType?: string | undefined
          EmployeeNumber?: string | undefined
          Function?: string | undefined
          PostalMail?: boolean | undefined
          SSNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/exchange': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/follow-ups': {
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          ClientManagement?: 'manager' | 'adn' | 'null' | undefined
          Invitation?:
            | {
                Comment?: string | undefined
                PlayerEnd?: string | undefined
                Status?:
                  | null
                  | 'on'
                  | 'refused'
                  | 'accepted'
                  | 'finished'
                  | 'expired'
                  | 'waiting for validation'
                  | undefined
              }
            | undefined
          Player?: 'guest' | 'manager' | 'collaborator' | 'owner' | 'assistant' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/guest-in-space': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & { json: ModifyInvitation }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & { json: GuestInSpace }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/invitation': {
      $delete: {
        input: { param: { id: string; spaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; spaceId: string } }
        output: Invitation
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            ClientManagement?: 'no' | 'manager' | 'adn' | undefined
            EmployeeAccess?: boolean | undefined
            Folders?:
              | { Id?: string | undefined; Right?: 'read' | 'write' | undefined }[]
              | undefined
            GroupIds?: string[] | undefined
            IsAdmin?: boolean | undefined
            Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
            PlayerEnd?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; spaceId: string } } & {
          json: {
            ClientManagement?: 'no' | 'manager' | 'adn' | undefined
            EmployeeAccess?: boolean | undefined
            Folders?:
              | { Id?: string | undefined; Right?: 'read' | 'write' | undefined }[]
              | undefined
            GroupIds?: string[] | undefined
            IsAdmin?: boolean | undefined
            Player?: 'guest' | 'owner' | 'manager' | 'assistant' | 'collaborator' | undefined
            PlayerEnd?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/persons/:id/invitation/:invitationId/send': {
      $post: {
        input: { param: { id: string; invitationId: string; spaceId: string } } & {
          json: {
            Contact?: string | undefined
            Message?: string | undefined
            Signature?: string | undefined
            Subject?: string | undefined
          }
        }
        output: { Id?: string | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spaces/:spaceId/persons/:memberId/folders/:id': {
      $get: {
        input: { param: { id: string; spaceId: string; memberId: string } }
        output: {
          Id?: string | undefined
          Right?: 'write' | 'read' | 'none' | undefined
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string; spaceId: string; memberId: string } } & {
          json: {
            Right?: 'write' | 'read' | 'none' | undefined
            About?: string | undefined
            Home?: boolean | undefined
            Keywords?: string[] | undefined
            Level?: 'confidential' | 'regular' | 'public' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/spaces/:spaceId/providers': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: { WithContractingPartner?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          ProviderNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/providers/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: { WithContractingPartner?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          ProviderNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/search': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: {
            Query?: string | undefined
            Range?: string | undefined
            QueryContext?:
              | {
                  Class?: 'Folder' | 'Document' | 'Message' | undefined
                  Filters?:
                    | {
                        DocumentClass?: string | undefined
                        ExcludedFolders?: string[] | undefined
                        IncludedFolders?: string[] | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          Count?:
            | {
                Class?: 'Document' | 'Message' | 'Folder' | undefined
                Count?: number | undefined
              }[]
            | undefined
          Results?:
            | {
                Class?: 'Document' | 'Message' | 'Folder' | undefined
                Extract?: { Text?: string | undefined; Where?: string | undefined } | undefined
                Id?: string | undefined
                Label?: string | undefined
                Location?: string[] | undefined
                Score?: number | undefined
                Specific?: { Extension?: string | undefined } | undefined
              }[]
            | undefined
          TotalCount?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/social-regimes': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: { WithContractingPartner?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
          Type?: 'mandatory' | 'optional' | 'null' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/social-regimes/all': {
      $get: {
        input: { param: { spaceId: string } } & {
          query: { WithContractingPartner?: string | undefined }
        }
        output: {
          About?: string | undefined
          ArchivalDate?: string | undefined
          Class?: string | undefined
          Home?: boolean | undefined
          Id?: string | undefined
          Keywords?: string[] | undefined
          Level?: 'confidential' | 'regular' | 'public' | undefined
          ModificationDate?: string | undefined
          Name?: string | undefined
          Parent?: string | undefined
          Comment?: string | undefined
          End?: string | undefined
          Start?: string | undefined
          Designation?: string | undefined
          Periodicity?: 'monthly' | 'quarterly' | 'half-yearly' | 'annual' | 'null' | undefined
          Type?: 'mandatory' | 'optional' | 'null' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:spaceId/spaces-invoicings': {
      $get: {
        input: { param: { spaceId: string } } & { query: { Date?: string | undefined } }
        output: {
          Author?: string | undefined
          Class?: string[] | undefined
          Code?: string | undefined
          Comment?: string | undefined
          Date?: string | undefined
          Extension?: string | undefined
          FolderDate?: string | undefined
          Id?: string | undefined
          Title?: string | undefined
          InvoiceNumber?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
