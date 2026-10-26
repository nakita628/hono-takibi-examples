<h1 id="partner-referrals">Partner Referrals v2.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Partner Referrals API to add PayPal seller accounts to PayPal Complete Payments Platform for Marketplaces and Platforms. <blockquote><strong>Important:</strong> This endpoint is available to approved partners only. <a href="/docs/multiparty/#link-tellusaboutyourplatform">Fill out this form</a> to get approved and a PayPal representative will reach out to you shortly.</blockquote> For more information about partner integrations and onboarding sellers, see <a href="/docs/multiparty">PayPal Complete Payments Platform for Marketplaces and Platforms.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/platforms/seller-onboarding/before-payment/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/customer/partner|Manage seller resources.|
|https://uri.paypal.com/services/customer/partner-referrals/readwrite|Manage external referral data with PayPal|
|https://uri.paypal.com/services/customer/partner-referrals|Manage referral data shared by Partner with PayPal. To be used by only internal apps|

<h1 id="partner-referrals-partner-referrals">partner-referrals</h1>

Enables you to create and get information about shared customer data.

## Create partner referral

<a id="opIdpartner-referrals.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/customer/partner-referrals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "individual_owners": [
      {
        "names": [
          {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "full_name": "string",
            "type": "LEGAL"
          }
        ],
        "citizenship": "st",
        "addresses": [
          {
            "address_line_1": "string",
            "address_line_2": "string",
            "address_line_3": "string",
            "admin_area_4": "string",
            "admin_area_3": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st",
            "address_details": {
              "street_number": "string",
              "street_name": "string",
              "street_type": "string",
              "delivery_service": "string",
              "building_name": "string",
              "sub_building": "string"
            },
            "type": "HOME"
          }
        ],
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "type": "FAX"
          }
        ],
        "birth_details": {
          "date_of_birth": "stringstri"
        },
        "documents": [
          {
            "labels": [
              "string"
            ],
            "name": "string",
            "identification_number": "string",
            "issue_date": "stringstri",
            "expiry_date": "stringstri",
            "issuing_country_code": "st",
            "files": [
              {
                "id": "string",
                "reference_url": "http://example.com",
                "content_type": "string",
                "create_time": "stringstringstringst",
                "size": "string"
              }
            ],
            "type": "SOCIAL_SECURITY_NUMBER"
          }
        ],
        "type": "PRIMARY"
      }
    ],
    "business_entity": {
      "business_type": {
        "type": "ANY_OTHER_BUSINESS_ENTITY",
        "subtype": "ASSO_TYPE_INCORPORATED"
      },
      "business_industry": {
        "category": "string",
        "mcc_code": "string",
        "subcategory": "string"
      },
      "business_incorporation": {
        "incorporation_country_code": "st",
        "incorporation_date": "stringstri"
      },
      "names": [
        {
          "business_name": "string",
          "type": "DOING_BUSINESS_AS"
        }
      ],
      "emails": [
        {
          "type": "CUSTOMER_SERVICE",
          "email": "string"
        }
      ],
      "website": "http://example.com",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "WORK"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "CUSTOMER_SERVICE"
        }
      ],
      "documents": [
        {
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "beneficial_owners": {
        "individual_beneficial_owners": [
          {
            "names": [
              {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "full_name": "string",
                "type": "LEGAL"
              }
            ],
            "citizenship": "st",
            "addresses": [
              {
                "address_line_1": "string",
                "address_line_2": "string",
                "address_line_3": "string",
                "admin_area_4": "string",
                "admin_area_3": "string",
                "admin_area_2": "string",
                "admin_area_1": "string",
                "postal_code": "string",
                "country_code": "st",
                "address_details": {
                  "street_number": "string",
                  "street_name": "string",
                  "street_type": "string",
                  "delivery_service": "string",
                  "building_name": "string",
                  "sub_building": "string"
                },
                "type": "HOME"
              }
            ],
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "type": "FAX"
              }
            ],
            "birth_details": {
              "date_of_birth": "stringstri"
            },
            "documents": [
              {
                "labels": [
                  "string"
                ],
                "name": "string",
                "identification_number": "string",
                "issue_date": "stringstri",
                "expiry_date": "stringstri",
                "issuing_country_code": "st",
                "files": [
                  {
                    "id": "string",
                    "reference_url": "http://example.com",
                    "content_type": "string",
                    "create_time": "stringstringstringst",
                    "size": "string"
                  }
                ],
                "type": "SOCIAL_SECURITY_NUMBER"
              }
            ],
            "percentage_of_ownership": "string"
          }
        ],
        "business_beneficial_owners": [
          {
            "business_type": {
              "type": "ANY_OTHER_BUSINESS_ENTITY",
              "subtype": "ASSO_TYPE_INCORPORATED"
            },
            "business_industry": {
              "category": "string",
              "mcc_code": "string",
              "subcategory": "string"
            },
            "business_incorporation": {
              "incorporation_country_code": "st",
              "incorporation_date": "stringstri"
            },
            "names": [
              {
                "business_name": "string",
                "type": "DOING_BUSINESS_AS"
              }
            ],
            "emails": [
              {
                "type": "CUSTOMER_SERVICE",
                "email": "string"
              }
            ],
            "website": "http://example.com",
            "addresses": [
              {
                "address_line_1": "string",
                "address_line_2": "string",
                "address_line_3": "string",
                "admin_area_4": "string",
                "admin_area_3": "string",
                "admin_area_2": "string",
                "admin_area_1": "string",
                "postal_code": "string",
                "country_code": "st",
                "address_details": {
                  "street_number": "string",
                  "street_name": "string",
                  "street_type": "string",
                  "delivery_service": "string",
                  "building_name": "string",
                  "sub_building": "string"
                },
                "type": "WORK"
              }
            ],
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "type": "CUSTOMER_SERVICE"
              }
            ],
            "documents": [
              {
                "labels": [
                  "string"
                ],
                "name": "string",
                "identification_number": "string",
                "issue_date": "stringstri",
                "expiry_date": "stringstri",
                "issuing_country_code": "st",
                "files": [
                  {
                    "id": "string",
                    "reference_url": "http://example.com",
                    "content_type": "string",
                    "create_time": "stringstringstringst",
                    "size": "string"
                  }
                ],
                "type": "SOCIAL_SECURITY_NUMBER"
              }
            ],
            "percentage_of_ownership": "string"
          }
        ]
      },
      "annual_sales_volume_range": {
        "minimum_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "maximum_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "average_monthly_volume_range": {
        "minimum_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "maximum_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "purpose_code": [
        "P0104"
      ],
      "business_description": "string"
    },
    "email": "string",
    "preferred_language_code": "string",
    "tracking_id": "string",
    "partner_config_override": {
      "return_url": "http://example.com",
      "return_url_description": "string",
      "show_add_credit_card": true
    },
    "financial_instruments": {
      "banks": [
        {
          "nick_name": "string",
          "account_number": "string",
          "account_type": "CHECKING",
          "currency_code": "str",
          "identifiers": [
            {
              "type": "BANK_CODE",
              "value": "string"
            }
          ],
          "branch_location": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          },
          "mandate": {
            "accepted": true
          }
        }
      ]
    },
    "operations": [
      {
        "operation": "API_INTEGRATION",
        "api_integration_preference": {
          "classic_api_integration": {},
          "rest_api_integration": {
            "integration_method": "PAYPAL",
            "integration_type": "FIRST_PARTY",
            "first_party_details": {
              "features": [
                "PAYOUTS"
              ],
              "seller_nonce": "stringstringstringstringstringstringstringst"
            },
            "third_party_details": {
              "features": [
                "PAYOUTS"
              ],
              "signup_mode": "VERIFY_WITH_PAYPAL",
              "organization": "string"
            }
          }
        },
        "offline_onboarding_preference": {},
        "billing_agreement": {
          "description": "string",
          "billing_experience_preference": {
            "experience_id": "string",
            "billing_context_set": true
          },
          "merchant_custom_data": "string",
          "approval_url": "http://example.com",
          "ec_token": "string"
        }
      }
    ],
    "products": [
      "ALIPAY"
    ],
    "capabilities": [
      "PAYPAL_WALLET_VAULTING_ADVANCED"
    ],
    "outside_process_dependencies": [
      null
    ],
    "legal_consents": [
      {
        "type": "SHARE_DATA_CONSENT",
        "granted": true
      }
    ],
    "payout_attributes": {
      "marketplace": true,
      "kyc_required": true,
      "country_transfer_method_currency_selection": [
        {
          "country": "st",
          "transfer_methods": [
            {
              "transfer_method_type": "BANK_ACCOUNT",
              "currencies": [
                "str"
              ]
            }
          ]
        }
      ]
    },
    "legal_country_code": "st"
  }'
```

`POST /v2/customer/partner-referrals`

Creates a partner referral that is shared by the partner or API caller. The partner referral is used to onboard the seller, and contains the seller's personal, business, financial and operations.

> Body parameter

```json
{
  "individual_owners": [
    {
      "names": [
        {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "full_name": "string",
          "type": "LEGAL"
        }
      ],
      "citizenship": "st",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "HOME"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "FAX"
        }
      ],
      "birth_details": {
        "date_of_birth": "stringstri"
      },
      "documents": [
        {
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "type": "PRIMARY"
    }
  ],
  "business_entity": {
    "business_type": {
      "type": "ANY_OTHER_BUSINESS_ENTITY",
      "subtype": "ASSO_TYPE_INCORPORATED"
    },
    "business_industry": {
      "category": "string",
      "mcc_code": "string",
      "subcategory": "string"
    },
    "business_incorporation": {
      "incorporation_country_code": "st",
      "incorporation_date": "stringstri"
    },
    "names": [
      {
        "business_name": "string",
        "type": "DOING_BUSINESS_AS"
      }
    ],
    "emails": [
      {
        "type": "CUSTOMER_SERVICE",
        "email": "string"
      }
    ],
    "website": "http://example.com",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "WORK"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "CUSTOMER_SERVICE"
      }
    ],
    "documents": [
      {
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "beneficial_owners": {
      "individual_beneficial_owners": [
        {
          "names": [
            {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "full_name": "string",
              "type": "LEGAL"
            }
          ],
          "citizenship": "st",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "HOME"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "FAX"
            }
          ],
          "birth_details": {
            "date_of_birth": "stringstri"
          },
          "documents": [
            {
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ],
      "business_beneficial_owners": [
        {
          "business_type": {
            "type": "ANY_OTHER_BUSINESS_ENTITY",
            "subtype": "ASSO_TYPE_INCORPORATED"
          },
          "business_industry": {
            "category": "string",
            "mcc_code": "string",
            "subcategory": "string"
          },
          "business_incorporation": {
            "incorporation_country_code": "st",
            "incorporation_date": "stringstri"
          },
          "names": [
            {
              "business_name": "string",
              "type": "DOING_BUSINESS_AS"
            }
          ],
          "emails": [
            {
              "type": "CUSTOMER_SERVICE",
              "email": "string"
            }
          ],
          "website": "http://example.com",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "WORK"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "CUSTOMER_SERVICE"
            }
          ],
          "documents": [
            {
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ]
    },
    "annual_sales_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "average_monthly_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "purpose_code": [
      "P0104"
    ],
    "business_description": "string"
  },
  "email": "string",
  "preferred_language_code": "string",
  "tracking_id": "string",
  "partner_config_override": {
    "return_url": "http://example.com",
    "return_url_description": "string",
    "show_add_credit_card": true
  },
  "financial_instruments": {
    "banks": [
      {
        "nick_name": "string",
        "account_number": "string",
        "account_type": "CHECKING",
        "currency_code": "str",
        "identifiers": [
          {
            "type": "BANK_CODE",
            "value": "string"
          }
        ],
        "branch_location": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "mandate": {
          "accepted": true
        }
      }
    ]
  },
  "operations": [
    {
      "operation": "API_INTEGRATION",
      "api_integration_preference": {
        "classic_api_integration": {},
        "rest_api_integration": {
          "integration_method": "PAYPAL",
          "integration_type": "FIRST_PARTY",
          "first_party_details": {
            "features": [
              "PAYOUTS"
            ],
            "seller_nonce": "stringstringstringstringstringstringstringst"
          },
          "third_party_details": {
            "features": [
              "PAYOUTS"
            ],
            "signup_mode": "VERIFY_WITH_PAYPAL",
            "organization": "string"
          }
        }
      },
      "offline_onboarding_preference": {},
      "billing_agreement": {
        "description": "string",
        "billing_experience_preference": {
          "experience_id": "string",
          "billing_context_set": true
        },
        "merchant_custom_data": "string",
        "approval_url": "http://example.com",
        "ec_token": "string"
      }
    }
  ],
  "products": [
    "ALIPAY"
  ],
  "capabilities": [
    "PAYPAL_WALLET_VAULTING_ADVANCED"
  ],
  "outside_process_dependencies": [
    null
  ],
  "legal_consents": [
    {
      "type": "SHARE_DATA_CONSENT",
      "granted": true
    }
  ],
  "payout_attributes": {
    "marketplace": true,
    "kyc_required": true,
    "country_transfer_method_currency_selection": [
      {
        "country": "st",
        "transfer_methods": [
          {
            "transfer_method_type": "BANK_ACCOUNT",
            "currencies": [
              "str"
            ]
          }
        ]
      }
    ]
  },
  "legal_country_code": "st"
}
```

<h3 id="create-partner-referral-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[referral_data](#schemareferral_data)|true|none|
|» individual_owners|body|[individual_owner_list](#schemaindividual_owner_list)|false|List of owners in the account. There should be only one primary account owner which is mentioned in their role_type.|
|» business_entity|body|[business_entity](#schemabusiness_entity)|false|Business entity of the account.|
|» email|body|[email_address](#schemaemail_address)|false|Email address of the customer used to create the account.|
|» preferred_language_code|body|[language](#schemalanguage)|false|The preferred [locale code](/docs/api/reference/locale-codes/) to use in the onboarding flow for the customer.|
|» tracking_id|body|string|false|The partner's unique identifier for this customer in their system which can be used to track user in PayPal.|
|» partner_config_override|body|[partner_config_override](#schemapartner_config_override)|false|The configuration property that the partner intends to override for this onboarding request.|
|» financial_instruments|body|[financial_instruments](#schemafinancial_instruments)|false|Array of financial instruments attached to the customer's account.|
|» operations|body|[operation_list](#schemaoperation_list)|true|An array of operations to perform for the customer while they share their data.|
|» products|body|[product_list](#schemaproduct_list)|false|An array of PayPal products to which the partner wants to onboard the customer.|
|» capabilities|body|[capabilities_list](#schemacapabilities_list)|false|An array of capabilities which the partner wants to enable for the selected products. Supported only when products are specified.|
|» outside_process_dependencies|body|[dependent_process_list](#schemadependent_process_list)|false|An array of dependent processes.|
|» legal_consents|body|[legal_consent_list](#schemalegal_consent_list)|true|An array of all consents that the partner has received from this seller. If `SHARE_DATA_CONSENT` is not granted, PayPal does not store customer data.|
|» payout_attributes|body|[payout_attributes](#schemapayout_attributes)|false|Payout specific attributes.|
|» legal_country_code|body|[country_code](#schemacountry_code)|false|Legal Country Code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» products|ALIPAY|
|» products|BANCONTACT|
|» products|BLIK|
|» products|EPS|
|» products|PPCP|
|» products|EXPRESS_CHECKOUT|
|» products|PAYMENT_METHODS|
|» products|ADVANCED_VAULTING|
|» products|IDEAL|
|» products|MB_WAY|
|» products|MULTIBANCO|
|» products|PAYPAL_COMMERCE_PLATFORM_BUSINESS|
|» products|PPPLUS|
|» products|PRZELEWY24|
|» products|SATISPAY|
|» products|TRUSTLY|
|» products|WECHAT_PAY|
|» products|WEBSITE_PAYMENT_PRO|
|» products|ZETTLE|
|» products|PAYPAL_COMMERCE_PLATFORM_BUSINESS|
|» products|HYPERWALLET_PAYOUTS|
|» capabilities|PAYPAL_WALLET_VAULTING_ADVANCED|
|» capabilities|PAY_UPON_INVOICE|
|» capabilities|APPLE_PAY|
|» capabilities|GOOGLE_PAY|

> Example responses

> 201 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_LENGTH",
      "description": "the value of a field is either too short or too long"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "AUTHORIZATION_ERROR",
      "description": "This API call is not authorized"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "Account for this Partner ID does not exist."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="create-partner-referral-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body that contains a [HATEOAS link](/docs/api/overview/#hateoas-links) to show the referral data and an `action_url` to which you redirect the customer in a browser to complete the signup process. The `partner_referral_id` token is appended to the URL.|[create_referral_data_response](#schemacreate_referral_data_response)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|The API call is not authorized.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions or missing scopes on the caller account.|Inline|
|422|Unprocessable Entity|The caller is not a business account or the account is closed or locked.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-partner-referral-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_LENGTH|
|» description|the value of a field is either too short or too long|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|the value of a field does not conform to the expected format|
|» issue|INVALID_PARAMETER_VALUE|
|» description|the value of a field is invalid|
|» issue|INVALID_ARRAY_LENGTH|
|» description|the number of items in an array parameter is too small or too large|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|AUTHORIZATION_ERROR|
|» description|This API call is not authorized|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_NOT_FOUND|
|» description|Account for this Partner ID does not exist.|
|» issue|ACCOUNT_STATUS_ERROR|
|» issue|PRODUCT_PPCP_UNAUTHORIZED|
|» description|Account has not been configured to use PayPal Complete Payments|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/customer/partner-referrals/readwrite )
</aside>

## Show referral data

<a id="opIdpartner-referrals.read"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/customer/partner-referrals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/customer/partner-referrals/{partner_referral_id}`

Shows details by ID for referral data that was shared by the partner or API caller.

<h3 id="show-referral-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partner_referral_id|path|string|true|The ID of the partner-referrals data for which to show details.|

> Example responses

> 200 Response

```json
{
  "individual_owners": [
    {
      "names": [
        {
          "prefix": "Mr.",
          "given_name": "John",
          "surname": "Doe",
          "middle_name": "Middle",
          "suffix": "Jr.",
          "full_name": "John Middle Doe Jr.",
          "type": "LEGAL"
        }
      ],
      "citizenship": "US",
      "addresses": [
        {
          "address_line_1": "One Washington Square",
          "address_line_2": "Apt 123",
          "admin_area_2": "San Jose",
          "admin_area_1": "CA",
          "postal_code": "95112",
          "country_code": "US",
          "type": "HOME"
        }
      ],
      "phones": [
        {
          "country_code": "1",
          "national_number": "6692468839",
          "extension_number": "1234",
          "type": "MOBILE"
        }
      ],
      "birth_details": {
        "date_of_birth": "1955-12-29"
      },
      "type": "PRIMARY"
    }
  ],
  "business_entity": {
    "business_type": {
      "type": "INDIVIDUAL",
      "subtype": "ASSO_TYPE_INCORPORATED"
    },
    "business_industry": {
      "category": "1004",
      "mcc_code": "8931",
      "subcategory": "2025"
    },
    "business_incorporation": {
      "incorporation_country_code": "US",
      "incorporation_date": "1986-12-29"
    },
    "names": [
      {
        "business_name": "Test Enterprise",
        "type": "LEGAL_NAME"
      }
    ],
    "emails": [
      {
        "type": "CUSTOMER_SERVICE",
        "email": "customerservice@example.com"
      }
    ],
    "website": "https://mystore.testenterprises.com",
    "addresses": [
      {
        "address_line_1": "One Washington Square",
        "address_line_2": "Apt 123",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95112",
        "country_code": "US",
        "type": "WORK"
      }
    ],
    "phones": [
      {
        "country_code": "1",
        "national_number": "6692478833",
        "extension_number": "1234",
        "type": "CUSTOMER_SERVICE"
      }
    ],
    "beneficial_owners": {
      "individual_beneficial_owners": [
        {
          "names": [
            {
              "prefix": "Mr.",
              "given_name": "John",
              "surname": "Doe",
              "middle_name": "Middle",
              "suffix": "Jr.",
              "full_name": "John Middle Doe Jr.",
              "type": "LEGAL"
            }
          ],
          "citizenship": "US",
          "addresses": [
            {
              "address_line_1": "One Washington Square",
              "address_line_2": "Apt 123",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95112",
              "country_code": "US",
              "type": "HOME"
            }
          ],
          "phones": [
            {
              "country_code": "1",
              "national_number": "6692468839",
              "extension_number": "1234",
              "type": "MOBILE"
            }
          ],
          "birth_details": {
            "date_of_birth": "1955-12-29"
          },
          "percentage_of_ownership": "50"
        }
      ],
      "business_beneficial_owners": [
        {
          "business_type": {
            "type": "INDIVIDUAL",
            "subtype": "ASSO_TYPE_INCORPORATED"
          },
          "business_industry": {
            "category": "1004",
            "mcc_code": "8931",
            "subcategory": "2025"
          },
          "business_incorporation": {
            "incorporation_country_code": "US",
            "incorporation_date": "1986-12-29"
          },
          "names": [
            {
              "business_name": "Test Enterprise",
              "type": "LEGAL_NAME"
            }
          ],
          "emails": [
            {
              "type": "CUSTOMER_SERVICE",
              "email": "customerservice@example.com"
            }
          ],
          "website": "https://mystore.testenterprises.com",
          "addresses": [
            {
              "address_line_1": "One Washington Square",
              "address_line_2": "Apt 123",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95112",
              "country_code": "US",
              "type": "WORK"
            }
          ],
          "phones": [
            {
              "country_code": "1",
              "national_number": "6692478833",
              "extension_number": "1234",
              "type": "CUSTOMER_SERVICE"
            }
          ],
          "percentage_of_ownership": "50"
        }
      ]
    },
    "office_bearers": [
      {
        "names": [
          {
            "prefix": "Mr.",
            "given_name": "John",
            "surname": "Doe",
            "middle_name": "Middle",
            "suffix": "Jr.",
            "full_name": "John Middle Doe Jr.",
            "type": "LEGAL"
          }
        ],
        "citizenship": "US",
        "addresses": [
          {
            "address_line_1": "One Washington Square",
            "address_line_2": "Apt 123",
            "admin_area_2": "San Jose",
            "admin_area_1": "CA",
            "postal_code": "95112",
            "country_code": "US",
            "type": "HOME"
          }
        ],
        "phones": [
          {
            "country_code": "1",
            "national_number": "6692468839",
            "extension_number": "1234",
            "type": "MOBILE"
          }
        ],
        "birth_details": {
          "date_of_birth": "1955-12-29"
        },
        "role": "DIRECTOR"
      }
    ],
    "annual_sales_volume_range": {
      "minimum_amount": {
        "currency_code": "USD",
        "value": "10000"
      },
      "maximum_amount": {
        "currency_code": "USD",
        "value": "50000"
      }
    },
    "average_monthly_volume_range": {
      "minimum_amount": {
        "currency_code": "USD",
        "value": "1000"
      },
      "maximum_amount": {
        "currency_code": "USD",
        "value": "50000"
      }
    },
    "purpose_code": "P0104"
  },
  "email": "accountemail@example.com",
  "preferred_language_code": "en-US",
  "tracking_id": "testenterprices123122",
  "partner_config_override": {
    "partner_logo_url": "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
    "return_url": "https://testenterprises.com/merchantonboarded",
    "return_url_description": "the url to return the merchant after the paypal onboarding process.",
    "action_renewal_url": "https://testenterprises.com/renew-exprired-url",
    "show_add_credit_card": true
  },
  "operations": [
    {
      "operation": "BANK_ADDITION"
    }
  ],
  "financial_instruments": {
    "banks": [
      {
        "nick_name": "Bank of America",
        "account_number": "123405668293",
        "account_type": "CHECKING",
        "currency_code": "USD",
        "identifiers": [
          {
            "type": "ROUTING_NUMBER_1",
            "value": "123456789"
          }
        ]
      }
    ]
  },
  "legal_consents": [
    {
      "type": "SHARE_DATA_CONSENT",
      "granted": true
    }
  ],
  "products": [
    "EXPRESS_CHECKOUT"
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "AUTHORIZATION_ERROR",
      "description": "This API call is not authorized"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-referral-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows referral data.|[referral_data_response](#schemareferral_data_response)|
|401|Unauthorized|The API call is not authorized.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions or missing scopes on the caller Account.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-referral-data-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|AUTHORIZATION_ERROR|
|» description|This API call is not authorized|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/customer/partner-referrals/readwrite ), Oauth2 ( Scopes: https://uri.paypal.com/services/customer/partner-referrals )
</aside>

# Schemas

<h2 id="tocS_400">400</h2>
<!-- backwards compatibility -->
<a id="schema400"></a>
<a id="schema_400"></a>
<a id="tocS400"></a>
<a id="tocs400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_LENGTH",
      "description": "the value of a field is either too short or too long"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_401">401</h2>
<!-- backwards compatibility -->
<a id="schema401"></a>
<a id="schema_401"></a>
<a id="tocS401"></a>
<a id="tocs401"></a>

```json
{
  "details": [
    {
      "issue": "AUTHORIZATION_ERROR",
      "description": "This API call is not authorized"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_403">403</h2>
<!-- backwards compatibility -->
<a id="schema403"></a>
<a id="schema_403"></a>
<a id="tocS403"></a>
<a id="tocs403"></a>

```json
{
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_422">422</h2>
<!-- backwards compatibility -->
<a id="schema422"></a>
<a id="schema_422"></a>
<a id="tocS422"></a>
<a id="tocs422"></a>

```json
{
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "Account for this Partner ID does not exist."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "individual_owners": [
    {
      "id": "string",
      "names": [
        {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "full_name": "string",
          "type": "LEGAL"
        }
      ],
      "citizenship": "st",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "HOME"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "FAX"
        }
      ],
      "birth_details": {
        "date_of_birth": "stringstri"
      },
      "documents": [
        {
          "id": "string",
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "type": "PRIMARY"
    }
  ],
  "business_entity": {
    "business_type": {
      "type": "ANY_OTHER_BUSINESS_ENTITY",
      "subtype": "ASSO_TYPE_INCORPORATED"
    },
    "business_industry": {
      "category": "string",
      "mcc_code": "string",
      "subcategory": "string"
    },
    "business_incorporation": {
      "incorporation_country_code": "st",
      "incorporation_date": "stringstri"
    },
    "names": [
      {
        "business_name": "string",
        "type": "DOING_BUSINESS_AS"
      }
    ],
    "emails": [
      {
        "type": "CUSTOMER_SERVICE",
        "email": "string"
      }
    ],
    "website": "http://example.com",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "WORK"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "CUSTOMER_SERVICE"
      }
    ],
    "documents": [
      {
        "id": "string",
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "beneficial_owners": {
      "individual_beneficial_owners": [
        {
          "id": "string",
          "names": [
            {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "full_name": "string",
              "type": "LEGAL"
            }
          ],
          "citizenship": "st",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "HOME"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "FAX"
            }
          ],
          "birth_details": {
            "date_of_birth": "stringstri"
          },
          "documents": [
            {
              "id": "string",
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "method": "GET"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ],
      "business_beneficial_owners": [
        {
          "business_type": {
            "type": "ANY_OTHER_BUSINESS_ENTITY",
            "subtype": "ASSO_TYPE_INCORPORATED"
          },
          "business_industry": {
            "category": "string",
            "mcc_code": "string",
            "subcategory": "string"
          },
          "business_incorporation": {
            "incorporation_country_code": "st",
            "incorporation_date": "stringstri"
          },
          "names": [
            {
              "business_name": "string",
              "type": "DOING_BUSINESS_AS"
            }
          ],
          "emails": [
            {
              "type": "CUSTOMER_SERVICE",
              "email": "string"
            }
          ],
          "website": "http://example.com",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "WORK"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "CUSTOMER_SERVICE"
            }
          ],
          "documents": [
            {
              "id": "string",
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "method": "GET"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ]
    },
    "annual_sales_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "average_monthly_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "purpose_code": [
      "P0104"
    ],
    "business_description": "string"
  }
}
```

Common account object to hold the account related details of the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|individual_owners|[individual_owner_list](#schemaindividual_owner_list)|false|none|List of owners in the account. There should be only one primary account owner which is mentioned in their role_type.|
|business_entity|[business_entity](#schemabusiness_entity)|false|none|Business entity of the account.|

<h2 id="tocS_address_details">address_details</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_details"></a>
<a id="schema_address_details"></a>
<a id="tocSaddress_details"></a>
<a id="tocsaddress_details"></a>

```json
{
  "street_number": "string",
  "street_name": "string",
  "street_type": "string",
  "delivery_service": "string",
  "building_name": "string",
  "sub_building": "string"
}
```

The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_number|string|false|none|The street number.|
|street_name|string|false|none|The street name. Just `Drury` in `Drury Lane`.|
|street_type|string|false|none|The street type. For example, avenue, boulevard, road, or expressway.|
|delivery_service|string|false|none|The delivery service. Post office box, bag number, or post office name.|
|building_name|string|false|none|A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.|
|sub_building|string|false|none|The first-order entity below a named building or location that represents the sub-premise. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.|

<h2 id="tocS_address_portable">address_portable</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_portable"></a>
<a id="schema_address_portable"></a>
<a id="tocSaddress_portable"></a>
<a id="tocsaddress_portable"></a>

```json
{
  "address_line_1": "string",
  "address_line_2": "string",
  "address_line_3": "string",
  "admin_area_4": "string",
  "admin_area_3": "string",
  "admin_area_2": "string",
  "admin_area_1": "string",
  "postal_code": "string",
  "country_code": "st",
  "address_details": {
    "street_number": "string",
    "street_name": "string",
    "street_type": "string",
    "delivery_service": "string",
    "building_name": "string",
    "sub_building": "string"
  }
}
```

The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line_1|string|false|none|The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.|
|address_line_2|string|false|none|The second line of the address. For example, suite or apartment number.|
|address_line_3|string|false|none|The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.|
|admin_area_4|string|false|none|The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>|
|admin_area_3|string|false|none|A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>|
|admin_area_2|string|false|none|A city, town, or village. Smaller than `admin_area_level_1`.|
|admin_area_1|string|false|none|The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>|
|postal_code|string|false|none|The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|
|country_code|[country_code](#schemacountry_code)|true|none|The [two-character ISO 3166-1 code](/docs/api/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|address_details|[address_details](#schemaaddress_details)|false|none|The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.|

<h2 id="tocS_bank">bank</h2>
<!-- backwards compatibility -->
<a id="schemabank"></a>
<a id="schema_bank"></a>
<a id="tocSbank"></a>
<a id="tocsbank"></a>

```json
{
  "nick_name": "string",
  "account_number": "string",
  "account_type": "CHECKING",
  "currency_code": "str",
  "identifiers": [
    {
      "type": "BANK_CODE",
      "value": "string"
    }
  ],
  "branch_location": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st"
  },
  "mandate": {
    "accepted": true
  }
}
```

The bank account information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nick_name|string|false|none|The user-provided short name for the user's bank account.|
|account_number|string|true|none|The bank account number.|
|account_type|string|true|none|The type of bank account.|
|currency_code|[currency_code](#schemacurrency_code)|false|none|The primary currency code of the bank account.|
|identifiers|[identifier_list](#schemaidentifier_list)|false|none|An array of instrument institute attributes. Used with the account number to uniquely identify the instrument. Value is:<ul><li>For banks with IBAN information, the IBAN number.</li><li>For banks with BBAN information, the BBAN number.</li><li>For banks with both IBAN and BBAN information, the IBAN number.</li></ul>|
|branch_location|object|false|none|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|
|mandate|[mandate](#schemamandate)|false|none|Mandate for this bank account.|

#### Enumerated Values

|Property|Value|
|---|---|
|account_type|CHECKING|
|account_type|SAVINGS|

<h2 id="tocS_bank_list">bank_list</h2>
<!-- backwards compatibility -->
<a id="schemabank_list"></a>
<a id="schema_bank_list"></a>
<a id="tocSbank_list"></a>
<a id="tocsbank_list"></a>

```json
[
  {
    "nick_name": "string",
    "account_number": "string",
    "account_type": "CHECKING",
    "currency_code": "str",
    "identifiers": [
      {
        "type": "BANK_CODE",
        "value": "string"
      }
    ],
    "branch_location": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "mandate": {
      "accepted": true
    }
  }
]
```

An array of banks attached to this managed account.

<h2 id="tocS_beneficial_owners">beneficial_owners</h2>
<!-- backwards compatibility -->
<a id="schemabeneficial_owners"></a>
<a id="schema_beneficial_owners"></a>
<a id="tocSbeneficial_owners"></a>
<a id="tocsbeneficial_owners"></a>

```json
{
  "individual_beneficial_owners": [
    {
      "id": "string",
      "names": [
        {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "full_name": "string",
          "type": "LEGAL"
        }
      ],
      "citizenship": "st",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "HOME"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "FAX"
        }
      ],
      "birth_details": {
        "date_of_birth": "stringstri"
      },
      "documents": [
        {
          "id": "string",
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "percentage_of_ownership": "string"
    }
  ],
  "business_beneficial_owners": [
    {
      "business_type": {
        "type": "ANY_OTHER_BUSINESS_ENTITY",
        "subtype": "ASSO_TYPE_INCORPORATED"
      },
      "business_industry": {
        "category": "string",
        "mcc_code": "string",
        "subcategory": "string"
      },
      "business_incorporation": {
        "incorporation_country_code": "st",
        "incorporation_date": "stringstri"
      },
      "names": [
        {
          "business_name": "string",
          "type": "DOING_BUSINESS_AS"
        }
      ],
      "emails": [
        {
          "type": "CUSTOMER_SERVICE",
          "email": "string"
        }
      ],
      "website": "http://example.com",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "WORK"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "CUSTOMER_SERVICE"
        }
      ],
      "documents": [
        {
          "id": "string",
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "percentage_of_ownership": "string"
    }
  ]
}
```

Beneficial owners of the entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|individual_beneficial_owners|[individual_beneficial_owner_list](#schemaindividual_beneficial_owner_list)|false|none|Individual beneficial owners.|
|business_beneficial_owners|[business_beneficial_owner_list](#schemabusiness_beneficial_owner_list)|false|none|Business beneficial owners.|

<h2 id="tocS_billing_agreement">billing_agreement</h2>
<!-- backwards compatibility -->
<a id="schemabilling_agreement"></a>
<a id="schema_billing_agreement"></a>
<a id="tocSbilling_agreement"></a>
<a id="tocsbilling_agreement"></a>

```json
{
  "description": "string",
  "billing_experience_preference": {
    "experience_id": "string",
    "billing_context_set": true
  },
  "merchant_custom_data": "string",
  "approval_url": "http://example.com",
  "ec_token": "string"
}
```

The details of the billing agreement between the partner and a seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The billing agreement description.|
|billing_experience_preference|[billing_experience_preference](#schemabilling_experience_preference)|false|none|The preference that customizes the billing experience of the customer.|
|merchant_custom_data|string|false|none|The custom data for the billing agreement.|
|approval_url|string(uri)|false|none|The URL to which to redirect seller to accept the billing agreement.|
|ec_token|string|false|none|The billing agreement token for the agreement.|

<h2 id="tocS_billing_experience_preference">billing_experience_preference</h2>
<!-- backwards compatibility -->
<a id="schemabilling_experience_preference"></a>
<a id="schema_billing_experience_preference"></a>
<a id="tocSbilling_experience_preference"></a>
<a id="tocsbilling_experience_preference"></a>

```json
{
  "experience_id": "string",
  "billing_context_set": true
}
```

The preference that customizes the billing experience of the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experience_id|string|false|none|The ID of the payment web experience profile.|
|billing_context_set|boolean|false|none|Indicates whether the partner has already displayed the billing context to the seller.|

<h2 id="tocS_birth_details">birth_details</h2>
<!-- backwards compatibility -->
<a id="schemabirth_details"></a>
<a id="schema_birth_details"></a>
<a id="tocSbirth_details"></a>
<a id="tocsbirth_details"></a>

```json
{
  "date_of_birth": "stringstri"
}
```

Date of birth data provided by the user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_of_birth|[date_no_time](#schemadate_no_time)|true|none|date of birth, fomrat [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_business">business</h2>
<!-- backwards compatibility -->
<a id="schemabusiness"></a>
<a id="schema_business"></a>
<a id="tocSbusiness"></a>
<a id="tocsbusiness"></a>

```json
{
  "business_type": {
    "type": "ANY_OTHER_BUSINESS_ENTITY",
    "subtype": "ASSO_TYPE_INCORPORATED"
  },
  "business_industry": {
    "category": "string",
    "mcc_code": "string",
    "subcategory": "string"
  },
  "business_incorporation": {
    "incorporation_country_code": "st",
    "incorporation_date": "stringstri"
  },
  "names": [
    {
      "business_name": "string",
      "type": "DOING_BUSINESS_AS"
    }
  ],
  "emails": [
    {
      "type": "CUSTOMER_SERVICE",
      "email": "string"
    }
  ],
  "website": "http://example.com",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "WORK"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "CUSTOMER_SERVICE"
    }
  ],
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_type|[business_type_info](#schemabusiness_type_info)|false|none|Information related to the business like the nature of business, started date etc.|
|business_industry|[business_industry](#schemabusiness_industry)|false|none|Information related to the business like the nature of business, started date etc.|
|business_incorporation|object|false|none|Business incorporation information.|
|names|[business_name_detail_list](#schemabusiness_name_detail_list)|false|none|Name of the business.|
|emails|[email_list](#schemaemail_list)|false|none|Email addresses of the business.|
|website|string(uri)|false|none|Website of the business.|
|addresses|[business_address_detail_list](#schemabusiness_address_detail_list)|false|none|List of addresses associated with the business entity.|
|phones|[business_phone_detail_list](#schemabusiness_phone_detail_list)|false|none|List of phone number associated with the business.|
|documents|[business_document_list](#schemabusiness_document_list)|false|none|Business Party related Document data collected from the customer.. For example SSN, ITIN, Business registration number that were collected from the user.|

<h2 id="tocS_business_address_detail">business_address_detail</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_address_detail"></a>
<a id="schema_business_address_detail"></a>
<a id="tocSbusiness_address_detail"></a>
<a id="tocsbusiness_address_detail"></a>

```json
{
  "address_line_1": "string",
  "address_line_2": "string",
  "address_line_3": "string",
  "admin_area_4": "string",
  "admin_area_3": "string",
  "admin_area_2": "string",
  "admin_area_1": "string",
  "postal_code": "string",
  "country_code": "st",
  "address_details": {
    "street_number": "string",
    "street_name": "string",
    "street_type": "string",
    "delivery_service": "string",
    "building_name": "string",
    "sub_building": "string"
  },
  "type": "WORK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line_1|string|false|none|The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.|
|address_line_2|string|false|none|The second line of the address. For example, suite or apartment number.|
|address_line_3|string|false|none|The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.|
|admin_area_4|string|false|none|The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>|
|admin_area_3|string|false|none|A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>|
|admin_area_2|string|false|none|A city, town, or village. Smaller than `admin_area_level_1`.|
|admin_area_1|string|false|none|The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>|
|postal_code|string|false|none|The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|
|country_code|[country_code](#schemacountry_code)|true|none|The [two-character ISO 3166-1 code](/docs/api/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|address_details|[address_details](#schemaaddress_details)|false|none|The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.|
|type|[business_address_type](#schemabusiness_address_type)|true|none|The address type under which this is classified. For example, shipping or dropoff.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WORK|

<h2 id="tocS_business_address_detail_list">business_address_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_address_detail_list"></a>
<a id="schema_business_address_detail_list"></a>
<a id="tocSbusiness_address_detail_list"></a>
<a id="tocsbusiness_address_detail_list"></a>

```json
[
  {
    "address_line_1": "string",
    "address_line_2": "string",
    "address_line_3": "string",
    "admin_area_4": "string",
    "admin_area_3": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "address_details": {
      "street_number": "string",
      "street_name": "string",
      "street_type": "string",
      "delivery_service": "string",
      "building_name": "string",
      "sub_building": "string"
    },
    "type": "WORK"
  }
]
```

List of addresses associated with the business entity.

<h2 id="tocS_business_address_type">business_address_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_address_type"></a>
<a id="schema_business_address_type"></a>
<a id="tocSbusiness_address_type"></a>
<a id="tocsbusiness_address_type"></a>

```json
"WORK"
```

Address type under which the provided address is tagged

<h2 id="tocS_business_beneficial_owner">business_beneficial_owner</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_beneficial_owner"></a>
<a id="schema_business_beneficial_owner"></a>
<a id="tocSbusiness_beneficial_owner"></a>
<a id="tocsbusiness_beneficial_owner"></a>

```json
{
  "business_type": {
    "type": "ANY_OTHER_BUSINESS_ENTITY",
    "subtype": "ASSO_TYPE_INCORPORATED"
  },
  "business_industry": {
    "category": "string",
    "mcc_code": "string",
    "subcategory": "string"
  },
  "business_incorporation": {
    "incorporation_country_code": "st",
    "incorporation_date": "stringstri"
  },
  "names": [
    {
      "business_name": "string",
      "type": "DOING_BUSINESS_AS"
    }
  ],
  "emails": [
    {
      "type": "CUSTOMER_SERVICE",
      "email": "string"
    }
  ],
  "website": "http://example.com",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "WORK"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "CUSTOMER_SERVICE"
    }
  ],
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ],
  "percentage_of_ownership": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_type|[business_type_info](#schemabusiness_type_info)|false|none|Information related to the business like the nature of business, started date etc.|
|business_industry|[business_industry](#schemabusiness_industry)|false|none|Information related to the business like the nature of business, started date etc.|
|business_incorporation|object|false|none|Business incorporation information.|
|names|[business_name_detail_list](#schemabusiness_name_detail_list)|false|none|Name of the business.|
|emails|[email_list](#schemaemail_list)|false|none|Email addresses of the business.|
|website|string(uri)|false|none|Website of the business.|
|addresses|[business_address_detail_list](#schemabusiness_address_detail_list)|false|none|List of addresses associated with the business entity.|
|phones|[business_phone_detail_list](#schemabusiness_phone_detail_list)|false|none|List of phone number associated with the business.|
|documents|[business_document_list](#schemabusiness_document_list)|false|none|Business Party related Document data collected from the customer.. For example SSN, ITIN, Business registration number that were collected from the user.|
|percentage_of_ownership|[percentage](#schemapercentage)|false|none|The percentage of shares this person owns in the company.|

<h2 id="tocS_business_beneficial_owner_list">business_beneficial_owner_list</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_beneficial_owner_list"></a>
<a id="schema_business_beneficial_owner_list"></a>
<a id="tocSbusiness_beneficial_owner_list"></a>
<a id="tocsbusiness_beneficial_owner_list"></a>

```json
[
  {
    "business_type": {
      "type": "ANY_OTHER_BUSINESS_ENTITY",
      "subtype": "ASSO_TYPE_INCORPORATED"
    },
    "business_industry": {
      "category": "string",
      "mcc_code": "string",
      "subcategory": "string"
    },
    "business_incorporation": {
      "incorporation_country_code": "st",
      "incorporation_date": "stringstri"
    },
    "names": [
      {
        "business_name": "string",
        "type": "DOING_BUSINESS_AS"
      }
    ],
    "emails": [
      {
        "type": "CUSTOMER_SERVICE",
        "email": "string"
      }
    ],
    "website": "http://example.com",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "WORK"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "CUSTOMER_SERVICE"
      }
    ],
    "documents": [
      {
        "id": "string",
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "percentage_of_ownership": "string"
  }
]
```

Business beneficial owners.

<h2 id="tocS_business_document">business_document</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_document"></a>
<a id="schema_business_document"></a>
<a id="tocSbusiness_document"></a>
<a id="tocsbusiness_document"></a>

```json
{
  "id": "string",
  "labels": [
    "string"
  ],
  "name": "string",
  "identification_number": "string",
  "issue_date": "stringstri",
  "expiry_date": "stringstri",
  "issuing_country_code": "st",
  "files": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ],
  "type": "SOCIAL_SECURITY_NUMBER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted identifier for the document.|
|labels|[labels_list](#schemalabels_list)|false|none|The document labels. A document could be classfied to multiple categories. For example, a bill document can be classfified as `BILL DOCUMENT` and `UTILITY DOCUMENT`.|
|name|string|false|none|The file name.|
|identification_number|string|false|none|The number for the document. It is the ID number if the document is `ID CARD`, the passport number if the document is `PASSPORT`, etc.|
|issue_date|[date_no_time](#schemadate_no_time)|false|none|The issue date of the document.|
|expiry_date|[date_no_time](#schemadate_no_time)|false|none|The expire data of the document.|
|issuing_country_code|[country_code](#schemacountry_code)|false|none|The country code of the document.|
|files|[file_reference_list](#schemafile_reference_list)|false|none|The files contained in the document. For example, a document could be represented by a front page file and a back page file, etc.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|The HATEOAS links.|
|type|[business_document_type](#schemabusiness_document_type)|false|none|The actual type of the document.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_SECURITY_NUMBER|
|type|EMPLOYMENT_IDENTIFICATION_NUMBER|
|type|TAX_IDENTIFICATION_NUMBER|
|type|PASSPORT_NUMBER|
|type|PENSION_FUND_ID|
|type|MEDICAL_INSURANCE_ID|
|type|CNPJ|
|type|CPF|
|type|PAN|
|type|BUSINESS_REGISTRATION|

<h2 id="tocS_business_document_list">business_document_list</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_document_list"></a>
<a id="schema_business_document_list"></a>
<a id="tocSbusiness_document_list"></a>
<a id="tocsbusiness_document_list"></a>

```json
[
  {
    "id": "string",
    "labels": [
      "string"
    ],
    "name": "string",
    "identification_number": "string",
    "issue_date": "stringstri",
    "expiry_date": "stringstri",
    "issuing_country_code": "st",
    "files": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ],
    "type": "SOCIAL_SECURITY_NUMBER"
  }
]
```

Business Party related Document data collected from the customer.. For example SSN, ITIN, Business registration number that were collected from the user.

<h2 id="tocS_business_document_type">business_document_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_document_type"></a>
<a id="schema_business_document_type"></a>
<a id="tocSbusiness_document_type"></a>
<a id="tocsbusiness_document_type"></a>

```json
"SOCIAL_SECURITY_NUMBER"
```

The type of documents.

<h2 id="tocS_business_entity">business_entity</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_entity"></a>
<a id="schema_business_entity"></a>
<a id="tocSbusiness_entity"></a>
<a id="tocsbusiness_entity"></a>

```json
{
  "business_type": {
    "type": "ANY_OTHER_BUSINESS_ENTITY",
    "subtype": "ASSO_TYPE_INCORPORATED"
  },
  "business_industry": {
    "category": "string",
    "mcc_code": "string",
    "subcategory": "string"
  },
  "business_incorporation": {
    "incorporation_country_code": "st",
    "incorporation_date": "stringstri"
  },
  "names": [
    {
      "business_name": "string",
      "type": "DOING_BUSINESS_AS"
    }
  ],
  "emails": [
    {
      "type": "CUSTOMER_SERVICE",
      "email": "string"
    }
  ],
  "website": "http://example.com",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "WORK"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "CUSTOMER_SERVICE"
    }
  ],
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ],
  "beneficial_owners": {
    "individual_beneficial_owners": [
      {
        "id": "string",
        "names": [
          {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "full_name": "string",
            "type": "LEGAL"
          }
        ],
        "citizenship": "st",
        "addresses": [
          {
            "address_line_1": "string",
            "address_line_2": "string",
            "address_line_3": "string",
            "admin_area_4": "string",
            "admin_area_3": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st",
            "address_details": {
              "street_number": "string",
              "street_name": "string",
              "street_type": "string",
              "delivery_service": "string",
              "building_name": "string",
              "sub_building": "string"
            },
            "type": "HOME"
          }
        ],
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "type": "FAX"
          }
        ],
        "birth_details": {
          "date_of_birth": "stringstri"
        },
        "documents": [
          {
            "id": "string",
            "labels": [
              "string"
            ],
            "name": "string",
            "identification_number": "string",
            "issue_date": "stringstri",
            "expiry_date": "stringstri",
            "issuing_country_code": "st",
            "files": [
              {
                "id": "string",
                "reference_url": "http://example.com",
                "content_type": "string",
                "create_time": "stringstringstringst",
                "size": "string"
              }
            ],
            "links": [
              {
                "href": "string",
                "rel": "string",
                "method": "GET"
              }
            ],
            "type": "SOCIAL_SECURITY_NUMBER"
          }
        ],
        "percentage_of_ownership": "string"
      }
    ],
    "business_beneficial_owners": [
      {
        "business_type": {
          "type": "ANY_OTHER_BUSINESS_ENTITY",
          "subtype": "ASSO_TYPE_INCORPORATED"
        },
        "business_industry": {
          "category": "string",
          "mcc_code": "string",
          "subcategory": "string"
        },
        "business_incorporation": {
          "incorporation_country_code": "st",
          "incorporation_date": "stringstri"
        },
        "names": [
          {
            "business_name": "string",
            "type": "DOING_BUSINESS_AS"
          }
        ],
        "emails": [
          {
            "type": "CUSTOMER_SERVICE",
            "email": "string"
          }
        ],
        "website": "http://example.com",
        "addresses": [
          {
            "address_line_1": "string",
            "address_line_2": "string",
            "address_line_3": "string",
            "admin_area_4": "string",
            "admin_area_3": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st",
            "address_details": {
              "street_number": "string",
              "street_name": "string",
              "street_type": "string",
              "delivery_service": "string",
              "building_name": "string",
              "sub_building": "string"
            },
            "type": "WORK"
          }
        ],
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "type": "CUSTOMER_SERVICE"
          }
        ],
        "documents": [
          {
            "id": "string",
            "labels": [
              "string"
            ],
            "name": "string",
            "identification_number": "string",
            "issue_date": "stringstri",
            "expiry_date": "stringstri",
            "issuing_country_code": "st",
            "files": [
              {
                "id": "string",
                "reference_url": "http://example.com",
                "content_type": "string",
                "create_time": "stringstringstringst",
                "size": "string"
              }
            ],
            "links": [
              {
                "href": "string",
                "rel": "string",
                "method": "GET"
              }
            ],
            "type": "SOCIAL_SECURITY_NUMBER"
          }
        ],
        "percentage_of_ownership": "string"
      }
    ]
  },
  "annual_sales_volume_range": {
    "minimum_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "maximum_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "average_monthly_volume_range": {
    "minimum_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "maximum_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "purpose_code": [
    "P0104"
  ],
  "business_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_type|[business_type_info](#schemabusiness_type_info)|false|none|Information related to the business like the nature of business, started date etc.|
|business_industry|[business_industry](#schemabusiness_industry)|false|none|Information related to the business like the nature of business, started date etc.|
|business_incorporation|object|false|none|Business incorporation information.|
|names|[business_name_detail_list](#schemabusiness_name_detail_list)|false|none|Name of the business.|
|emails|[email_list](#schemaemail_list)|false|none|Email addresses of the business.|
|website|string(uri)|false|none|Website of the business.|
|addresses|[business_address_detail_list](#schemabusiness_address_detail_list)|false|none|List of addresses associated with the business entity.|
|phones|[business_phone_detail_list](#schemabusiness_phone_detail_list)|false|none|List of phone number associated with the business.|
|documents|[business_document_list](#schemabusiness_document_list)|false|none|Business Party related Document data collected from the customer.. For example SSN, ITIN, Business registration number that were collected from the user.|
|beneficial_owners|[beneficial_owners](#schemabeneficial_owners)|false|none|List of beneficial owners part of the entity. They can be either a Person or a business entity.|
|annual_sales_volume_range|[currency_range](#schemacurrency_range)|false|none|The range for the total annual sales volume of the business.|
|average_monthly_volume_range|[currency_range](#schemacurrency_range)|false|none|The range for the average monthly volume of the business.|
|purpose_code|[[purpose_code_enum](#schemapurpose_code_enum)]|false|none|The account's purpose code.|
|business_description|string|false|none|The business goals description. For example, a mission statement.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose_code|P0104|
|purpose_code|P0301|
|purpose_code|P0801|
|purpose_code|P0802|
|purpose_code|P0803|
|purpose_code|P0805|
|purpose_code|P0806|
|purpose_code|P0902|
|purpose_code|P1004|
|purpose_code|P1005|
|purpose_code|P1006|
|purpose_code|P1007|
|purpose_code|P1008|
|purpose_code|P1009|

<h2 id="tocS_business_industry">business_industry</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_industry"></a>
<a id="schema_business_industry"></a>
<a id="tocSbusiness_industry"></a>
<a id="tocsbusiness_industry"></a>

```json
{
  "category": "string",
  "mcc_code": "string",
  "subcategory": "string"
}
```

The category, subcategory and MCC code of the business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The customer's business category code. PayPal uses industry standard seller category codes.|
|mcc_code|string|true|none|The customer's business seller category code. PayPal uses industry standard seller category codes.|
|subcategory|string|true|none|The customer's business subcategory code. PayPal uses industry standard seller subcategory codes.|

<h2 id="tocS_business_name">business_name</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_name"></a>
<a id="schema_business_name"></a>
<a id="tocSbusiness_name"></a>
<a id="tocsbusiness_name"></a>

```json
{
  "business_name": "string"
}
```

The business name of the party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|

<h2 id="tocS_business_name_detail">business_name_detail</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_name_detail"></a>
<a id="schema_business_name_detail"></a>
<a id="tocSbusiness_name_detail"></a>
<a id="tocsbusiness_name_detail"></a>

```json
{
  "business_name": "string",
  "type": "DOING_BUSINESS_AS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|
|type|[business_name_type](#schemabusiness_name_type)|true|none|The type of business name. For example, trading name.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DOING_BUSINESS_AS|
|type|LEGAL_NAME|

<h2 id="tocS_business_name_detail_list">business_name_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_name_detail_list"></a>
<a id="schema_business_name_detail_list"></a>
<a id="tocSbusiness_name_detail_list"></a>
<a id="tocsbusiness_name_detail_list"></a>

```json
[
  {
    "business_name": "string",
    "type": "DOING_BUSINESS_AS"
  }
]
```

Name of the business.

<h2 id="tocS_business_name_type">business_name_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_name_type"></a>
<a id="schema_business_name_type"></a>
<a id="tocSbusiness_name_type"></a>
<a id="tocsbusiness_name_type"></a>

```json
"DOING_BUSINESS_AS"
```

Business name type

<h2 id="tocS_business_phone_detail">business_phone_detail</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_phone_detail"></a>
<a id="schema_business_phone_detail"></a>
<a id="tocSbusiness_phone_detail"></a>
<a id="tocsbusiness_phone_detail"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string",
  "type": "CUSTOMER_SERVICE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|
|type|[business_phone_type](#schemabusiness_phone_type)|true|none|The type of phone number provided. For example, home, work, or mobile.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CUSTOMER_SERVICE|
|type|BUSINESS|

<h2 id="tocS_business_phone_detail_list">business_phone_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_phone_detail_list"></a>
<a id="schema_business_phone_detail_list"></a>
<a id="tocSbusiness_phone_detail_list"></a>
<a id="tocsbusiness_phone_detail_list"></a>

```json
[
  {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string",
    "type": "CUSTOMER_SERVICE"
  }
]
```

List of phone number associated with the business.

<h2 id="tocS_business_phone_type">business_phone_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_phone_type"></a>
<a id="schema_business_phone_type"></a>
<a id="tocSbusiness_phone_type"></a>
<a id="tocsbusiness_phone_type"></a>

```json
"CUSTOMER_SERVICE"
```

The type of phone number provided. For example, home, work, or mobile.

<h2 id="tocS_business_sub_type">business_sub_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_sub_type"></a>
<a id="schema_business_sub_type"></a>
<a id="tocSbusiness_sub_type"></a>
<a id="tocsbusiness_sub_type"></a>

```json
"ASSO_TYPE_INCORPORATED"
```

Sub classification of the business type

<h2 id="tocS_business_type">business_type</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_type"></a>
<a id="schema_business_type"></a>
<a id="tocSbusiness_type"></a>
<a id="tocsbusiness_type"></a>

```json
"ANY_OTHER_BUSINESS_ENTITY"
```

The business types classified

<h2 id="tocS_business_type_info">business_type_info</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_type_info"></a>
<a id="schema_business_type_info"></a>
<a id="tocSbusiness_type_info"></a>
<a id="tocsbusiness_type_info"></a>

```json
{
  "type": "ANY_OTHER_BUSINESS_ENTITY",
  "subtype": "ASSO_TYPE_INCORPORATED"
}
```

The type and subtype of the business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[business_type](#schemabusiness_type)|false|none|Type of business entity like corporation, sole prop, governmental.|
|subtype|[business_sub_type](#schemabusiness_sub_type)|false|none|The sub classification of the business type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ANY_OTHER_BUSINESS_ENTITY|
|type|ASSOCIATION|
|type|CORPORATION|
|type|GENERAL_PARTNERSHIP|
|type|GOVERNMENT|
|type|INDIVIDUAL|
|type|LIMITED_LIABILITY_PARTNERSHIP|
|type|LIMITED_LIABILITY_PROPRIETORS|
|type|LIMITED_LIABILITY_PRIVATE_CORPORATION|
|type|LIMITED_PARTNERSHIP|
|type|LIMITED_PARTNERSHIP_PRIVATE_CORPORATION|
|type|NONPROFIT|
|type|ONLY_BUY_OR_SEND_MONEY|
|type|OTHER_CORPORATE_BODY|
|type|PARTNERSHIP|
|type|PRIVATE_PARTNERSHIP|
|type|PROPRIETORSHIP|
|type|PROPRIETORSHIP_CRAFTSMAN|
|type|PROPRIETORY_COMPANY|
|type|PRIVATE_CORPORATION|
|type|PUBLIC_COMPANY|
|type|PUBLIC_CORPORATION|
|type|PUBLIC_PARTNERSHIP|
|type|REGISTERED_COOPERATIVE|
|subtype|ASSO_TYPE_INCORPORATED|
|subtype|ASSO_TYPE_NON_INCORPORATED|
|subtype|GOVT_TYPE_ENTITY|
|subtype|GOVT_TYPE_EMANATION|
|subtype|GOVT_TYPE_ESTD_COMM|
|subtype|GOVT_TYPE_ESTD_FC|
|subtype|GOVT_TYPE_ESTD_ST_TR|

<h2 id="tocS_capabilities">capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
"PAYPAL_WALLET_VAULTING_ADVANCED"
```

Optional capabilities of the selected PayPal product for which the customer is being onboarded.

<h2 id="tocS_capabilities_list">capabilities_list</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities_list"></a>
<a id="schema_capabilities_list"></a>
<a id="tocScapabilities_list"></a>
<a id="tocscapabilities_list"></a>

```json
[
  "PAYPAL_WALLET_VAULTING_ADVANCED"
]
```

An array of capabilities which the partner wants to enable for the selected products. Supported only when products are specified.

<h2 id="tocS_classic_api_integration">classic_api_integration</h2>
<!-- backwards compatibility -->
<a id="schemaclassic_api_integration"></a>
<a id="schema_classic_api_integration"></a>
<a id="tocSclassic_api_integration"></a>
<a id="tocsclassic_api_integration"></a>

```json
{}
```

The integration details for PayPal CLASSIC endpoints.

<h2 id="tocS_country_code">country_code</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code"></a>
<a id="schema_country_code"></a>
<a id="tocScountry_code"></a>
<a id="tocscountry_code"></a>

```json
"st"
```

The [two-character ISO 3166-1 code](/docs/api/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_country_code-2">country_code-2</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code-2"></a>
<a id="schema_country_code-2"></a>
<a id="tocScountry_code-2"></a>
<a id="tocscountry_code-2"></a>

```json
"st"
```

The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_country_transfer_method_currency_selection">country_transfer_method_currency_selection</h2>
<!-- backwards compatibility -->
<a id="schemacountry_transfer_method_currency_selection"></a>
<a id="schema_country_transfer_method_currency_selection"></a>
<a id="tocScountry_transfer_method_currency_selection"></a>
<a id="tocscountry_transfer_method_currency_selection"></a>

```json
{
  "country": "st",
  "transfer_methods": [
    {
      "transfer_method_type": "BANK_ACCOUNT",
      "currencies": [
        "str"
      ]
    }
  ]
}
```

Requested country, transfer method and currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[country_code](#schemacountry_code)|false|none|Country.|
|transfer_methods|[transfer_method_list](#schematransfer_method_list)|false|none|Requested transfer method and currency for a country.|

<h2 id="tocS_country_transfer_method_currency_selection_list">country_transfer_method_currency_selection_list</h2>
<!-- backwards compatibility -->
<a id="schemacountry_transfer_method_currency_selection_list"></a>
<a id="schema_country_transfer_method_currency_selection_list"></a>
<a id="tocScountry_transfer_method_currency_selection_list"></a>
<a id="tocscountry_transfer_method_currency_selection_list"></a>

```json
[
  {
    "country": "st",
    "transfer_methods": [
      {
        "transfer_method_type": "BANK_ACCOUNT",
        "currencies": [
          "str"
        ]
      }
    ]
  }
]
```

Requested country, transfer method and currency.

<h2 id="tocS_create_referral_data_response">create_referral_data_response</h2>
<!-- backwards compatibility -->
<a id="schemacreate_referral_data_response"></a>
<a id="schema_create_referral_data_response"></a>
<a id="tocScreate_referral_data_response"></a>
<a id="tocscreate_referral_data_response"></a>

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The shared referral data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).|

<h2 id="tocS_currency_code">currency_code</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code"></a>
<a id="schema_currency_code"></a>
<a id="tocScurrency_code"></a>
<a id="tocscurrency_code"></a>

```json
"str"
```

The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.

<h2 id="tocS_currency_code-2">currency_code-2</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code-2"></a>
<a id="schema_currency_code-2"></a>
<a id="tocScurrency_code-2"></a>
<a id="tocscurrency_code-2"></a>

```json
"str"
```

The [three-character ISO-4217 currency code](/docs/api/reference/currency-codes/) that identifies the currency.

<h2 id="tocS_currency_code_list">currency_code_list</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code_list"></a>
<a id="schema_currency_code_list"></a>
<a id="tocScurrency_code_list"></a>
<a id="tocscurrency_code_list"></a>

```json
[
  "str"
]
```

Requested Currencies for a Transfer Method.

<h2 id="tocS_currency_range">currency_range</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_range"></a>
<a id="schema_currency_range"></a>
<a id="tocScurrency_range"></a>
<a id="tocscurrency_range"></a>

```json
{
  "minimum_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "maximum_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The currency range, from the minimum inclusive amount to the maximum inclusive amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimum_amount|[money](#schemamoney)|false|none|The minimum inclusive amount for the range.|
|maximum_amount|[money](#schemamoney)|false|none|The maximum inclusive amount for the range.|

<h2 id="tocS_date_no_time">date_no_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_no_time"></a>
<a id="schema_date_no_time"></a>
<a id="tocSdate_no_time"></a>
<a id="tocsdate_no_time"></a>

```json
"stringstri"
```

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"stringstringstringst"
```

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

<h2 id="tocS_definitions-link_description_list">definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-link_description_list"></a>
<a id="schema_definitions-link_description_list"></a>
<a id="tocSdefinitions-link_description_list"></a>
<a id="tocsdefinitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).

<h2 id="tocS_dependent_process">dependent_process</h2>
<!-- backwards compatibility -->
<a id="schemadependent_process"></a>
<a id="schema_dependent_process"></a>
<a id="tocSdependent_process"></a>
<a id="tocsdependent_process"></a>

```json
null
```

<h2 id="tocS_dependent_process_list">dependent_process_list</h2>
<!-- backwards compatibility -->
<a id="schemadependent_process_list"></a>
<a id="schema_dependent_process_list"></a>
<a id="tocSdependent_process_list"></a>
<a id="tocsdependent_process_list"></a>

```json
[
  null
]
```

An array of dependent processes.

<h2 id="tocS_document">document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "id": "string",
  "labels": [
    "string"
  ],
  "name": "string",
  "identification_number": "string",
  "issue_date": "stringstri",
  "expiry_date": "stringstri",
  "issuing_country_code": "st",
  "files": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The document object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted identifier for the document.|
|labels|[labels_list](#schemalabels_list)|false|none|The document labels. A document could be classfied to multiple categories. For example, a bill document can be classfified as `BILL DOCUMENT` and `UTILITY DOCUMENT`.|
|name|string|false|none|The file name.|
|identification_number|string|false|none|The number for the document. It is the ID number if the document is `ID CARD`, the passport number if the document is `PASSPORT`, etc.|
|issue_date|[date_no_time](#schemadate_no_time)|false|none|The issue date of the document.|
|expiry_date|[date_no_time](#schemadate_no_time)|false|none|The expire data of the document.|
|issuing_country_code|[country_code](#schemacountry_code)|false|none|The country code of the document.|
|files|[file_reference_list](#schemafile_reference_list)|false|none|The files contained in the document. For example, a document could be represented by a front page file and a back page file, etc.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|The HATEOAS links.|

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "type": "CUSTOMER_SERVICE",
  "email": "string"
}
```

An email address at which the person or business can be contacted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The role of the email address.|
|email|[email_address](#schemaemail_address)|true|none|The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CUSTOMER_SERVICE|

<h2 id="tocS_email_address">email_address</h2>
<!-- backwards compatibility -->
<a id="schemaemail_address"></a>
<a id="schema_email_address"></a>
<a id="tocSemail_address"></a>
<a id="tocsemail_address"></a>

```json
"string"
```

The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_email_list">email_list</h2>
<!-- backwards compatibility -->
<a id="schemaemail_list"></a>
<a id="schema_email_list"></a>
<a id="tocSemail_list"></a>
<a id="tocsemail_list"></a>

```json
[
  {
    "type": "CUSTOMER_SERVICE",
    "email": "string"
  }
]
```

Email addresses of the business.

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_default">error_default</h2>
<!-- backwards compatibility -->
<a id="schemaerror_default"></a>
<a id="schema_error_default"></a>
<a id="tocSerror_default"></a>
<a id="tocserror_default"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The default error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_400](#schemaerror_400)|false|none|Request is not well-formed, syntactically incorrect, or violates schema.|
|*oneOf*|[error_401](#schemaerror_401)|false|none|Authentication failed due to missing Authorization header, or invalid authentication credentials.|
|*oneOf*|[error_403](#schemaerror_403)|false|none|The client is not authorized to access this resource, although it may have valid credentials. |
|*oneOf*|[error_404](#schemaerror_404)|false|none|The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.|
|*oneOf*|[error_409](#schemaerror_409)|false|none|The server has detected a conflict while processing this request.|
|*oneOf*|[error_415](#schemaerror_415)|false|none|The server does not support the request payload's media type.|
|*oneOf*|[error_422](#schemaerror_422)|false|none|The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.|
|*oneOf*|[error_500](#schemaerror_500)|false|none|This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.|
|*oneOf*|[error_503](#schemaerror_503)|false|none|The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_file_reference">file_reference</h2>
<!-- backwards compatibility -->
<a id="schemafile_reference"></a>
<a id="schema_file_reference"></a>
<a id="tocSfile_reference"></a>
<a id="tocsfile_reference"></a>

```json
{
  "id": "string",
  "reference_url": "http://example.com",
  "content_type": "string",
  "create_time": "stringstringstringst",
  "size": "string"
}
```

The file reference. Can be a file in PayPal MediaServ, PayPal DMS, or another custom store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the referenced file.|
|reference_url|string(uri)|false|none|The reference URL for the file.|
|content_type|string|false|none|The [Internet Assigned Numbers Authority (IANA) media type of the file](https://www.iana.org/assignments/media-types/media-types.xhtml).|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the file was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|size|string|false|none|The size of the file, in bytes.|

<h2 id="tocS_file_reference_list">file_reference_list</h2>
<!-- backwards compatibility -->
<a id="schemafile_reference_list"></a>
<a id="schema_file_reference_list"></a>
<a id="tocSfile_reference_list"></a>
<a id="tocsfile_reference_list"></a>

```json
[
  {
    "id": "string",
    "reference_url": "http://example.com",
    "content_type": "string",
    "create_time": "stringstringstringst",
    "size": "string"
  }
]
```

The files contained in the document. For example, a document could be represented by a front page file and a back page file, etc.

<h2 id="tocS_financial_instruments">financial_instruments</h2>
<!-- backwards compatibility -->
<a id="schemafinancial_instruments"></a>
<a id="schema_financial_instruments"></a>
<a id="tocSfinancial_instruments"></a>
<a id="tocsfinancial_instruments"></a>

```json
{
  "banks": [
    {
      "nick_name": "string",
      "account_number": "string",
      "account_type": "CHECKING",
      "currency_code": "str",
      "identifiers": [
        {
          "type": "BANK_CODE",
          "value": "string"
        }
      ],
      "branch_location": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "mandate": {
        "accepted": true
      }
    }
  ]
}
```

Financial instruments attached to this account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banks|[bank_list](#schemabank_list)|false|none|An array of banks attached to this managed account.|

<h2 id="tocS_first_party_details">first_party_details</h2>
<!-- backwards compatibility -->
<a id="schemafirst_party_details"></a>
<a id="schema_first_party_details"></a>
<a id="tocSfirst_party_details"></a>
<a id="tocsfirst_party_details"></a>

```json
{
  "features": [
    "PAYOUTS"
  ],
  "seller_nonce": "stringstringstringstringstringstringstringst"
}
```

The integration details for PayPal first party REST endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[rest_endpoint_features_enum_list](#schemarest_endpoint_features_enum_list)|true|none|An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.|
|seller_nonce|string|true|none|S256 - The code verifier must be high-entropy cryptographic random string with a byte length of 43-128 range.|

#### Enumerated Values

|Property|Value|
|---|---|
|features|PAYOUTS|
|features|PAYMENT|
|features|REFUND|
|features|FUTURE_PAYMENT|
|features|DIRECT_PAYMENT|
|features|PARTNER_FEE|
|features|DELAY_FUNDS_DISBURSEMENT|
|features|READ_SELLER_DISPUTE|
|features|UPDATE_SELLER_DISPUTE|
|features|ADVANCED_TRANSACTIONS_SEARCH|
|features|SWEEP_FUNDS_EXTERNAL_SINK|
|features|ACCESS_MERCHANT_INFORMATION|
|features|TRACKING_SHIPMENT_READWRITE|
|features|INVOICE_READ_WRITE|
|features|DISPUTE_READ_BUYER|
|features|UPDATE_CUSTOMER_DISPUTES|
|features|VAULT|
|features|BILLING_AGREEMENT|
|features|WITHDRAWALS|
|features|LINKED_FINANCIAL_INSTRUMENTS|
|features|USER_PROFILE|
|features|TRANSACTION_RISK_DATA|
|features|PAYPAL_BALANCE|
|features|EXCHANGE_CURRENCY|

<h2 id="tocS_identifier">identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
{
  "type": "BANK_CODE",
  "value": "string"
}
```

The bank account ID. An ID with `ROUTING_NUMBER_1` is required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The bank account ID type.|
|value|string|false|none|The value of account identifier.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BANK_CODE|
|type|BI_CODE|
|type|BRANCH_CODE|
|type|ROUTING_NUMBER_1|
|type|ROUTING_NUMBER_2|
|type|ROUTING_NUMBER_3|
|type|SWIFT_CODE|
|type|BRANCH_CODE|
|type|INTERMEDIARY_SWIFT_CODE|
|type|BBAN|
|type|BBAN_ENCRYPTED|
|type|BBAN_HMAC|
|type|AGGREGATOR_YODLEE|

<h2 id="tocS_identifier_list">identifier_list</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier_list"></a>
<a id="schema_identifier_list"></a>
<a id="tocSidentifier_list"></a>
<a id="tocsidentifier_list"></a>

```json
[
  {
    "type": "BANK_CODE",
    "value": "string"
  }
]
```

An array of instrument institute attributes. Used with the account number to uniquely identify the instrument. Value is:<ul><li>For banks with IBAN information, the IBAN number.</li><li>For banks with BBAN information, the BBAN number.</li><li>For banks with both IBAN and BBAN information, the IBAN number.</li></ul>

<h2 id="tocS_individual_beneficial_owner">individual_beneficial_owner</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_beneficial_owner"></a>
<a id="schema_individual_beneficial_owner"></a>
<a id="tocSindividual_beneficial_owner"></a>
<a id="tocsindividual_beneficial_owner"></a>

```json
{
  "id": "string",
  "names": [
    {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "full_name": "string",
      "type": "LEGAL"
    }
  ],
  "citizenship": "st",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "HOME"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "FAX"
    }
  ],
  "birth_details": {
    "date_of_birth": "stringstri"
  },
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ],
  "percentage_of_ownership": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted party ID.|
|names|[person_name_list](#schemaperson_name_list)|false|none|The name of the person.|
|citizenship|[country_code](#schemacountry_code)|false|none|The citizenship country code of the person.|
|addresses|[person_address_detail_list](#schemaperson_address_detail_list)|false|none|The list of addresses associated with the person.|
|phones|[person_phone_detail_list](#schemaperson_phone_detail_list)|false|none|The list of phone numbers associated with the person.|
|birth_details|[birth_details](#schemabirth_details)|false|none|The person's birth details.|
|documents|[person_document_list](#schemaperson_document_list)|false|none|A person's or party's related document data collected from the customer. For example SSN, ITIN, or business registration number collected from the user. <blockquote><strong>Note:</strong> This field is not applicable for POST [/v2/customer/partner-referrals](/docs/api/partner-referrals/v2/#partner-referrals_create) API calls.</blockquote>|
|percentage_of_ownership|[percentage](#schemapercentage)|false|none|The percentage of shares this person owns in the company.|

<h2 id="tocS_individual_beneficial_owner_list">individual_beneficial_owner_list</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_beneficial_owner_list"></a>
<a id="schema_individual_beneficial_owner_list"></a>
<a id="tocSindividual_beneficial_owner_list"></a>
<a id="tocsindividual_beneficial_owner_list"></a>

```json
[
  {
    "id": "string",
    "names": [
      {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "full_name": "string",
        "type": "LEGAL"
      }
    ],
    "citizenship": "st",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "HOME"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "FAX"
      }
    ],
    "birth_details": {
      "date_of_birth": "stringstri"
    },
    "documents": [
      {
        "id": "string",
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "percentage_of_ownership": "string"
  }
]
```

Individual beneficial owners.

<h2 id="tocS_individual_owner">individual_owner</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_owner"></a>
<a id="schema_individual_owner"></a>
<a id="tocSindividual_owner"></a>
<a id="tocsindividual_owner"></a>

```json
{
  "id": "string",
  "names": [
    {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "full_name": "string",
      "type": "LEGAL"
    }
  ],
  "citizenship": "st",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "HOME"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "FAX"
    }
  ],
  "birth_details": {
    "date_of_birth": "stringstri"
  },
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ],
  "type": "PRIMARY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted party ID.|
|names|[person_name_list](#schemaperson_name_list)|false|none|The name of the person.|
|citizenship|[country_code](#schemacountry_code)|false|none|The citizenship country code of the person.|
|addresses|[person_address_detail_list](#schemaperson_address_detail_list)|false|none|The list of addresses associated with the person.|
|phones|[person_phone_detail_list](#schemaperson_phone_detail_list)|false|none|The list of phone numbers associated with the person.|
|birth_details|[birth_details](#schemabirth_details)|false|none|The person's birth details.|
|documents|[person_document_list](#schemaperson_document_list)|false|none|A person's or party's related document data collected from the customer. For example SSN, ITIN, or business registration number collected from the user. <blockquote><strong>Note:</strong> This field is not applicable for POST [/v2/customer/partner-referrals](/docs/api/partner-referrals/v2/#partner-referrals_create) API calls.</blockquote>|
|type|[individual_owner_type](#schemaindividual_owner_type)|false|none|The actual role of this user on the account, PRIMARY/SECONDARY.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PRIMARY|

<h2 id="tocS_individual_owner_list">individual_owner_list</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_owner_list"></a>
<a id="schema_individual_owner_list"></a>
<a id="tocSindividual_owner_list"></a>
<a id="tocsindividual_owner_list"></a>

```json
[
  {
    "id": "string",
    "names": [
      {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "full_name": "string",
        "type": "LEGAL"
      }
    ],
    "citizenship": "st",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "HOME"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "FAX"
      }
    ],
    "birth_details": {
      "date_of_birth": "stringstri"
    },
    "documents": [
      {
        "id": "string",
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "type": "PRIMARY"
  }
]
```

List of owners in the account. There should be only one primary account owner which is mentioned in their role_type.

<h2 id="tocS_individual_owner_type">individual_owner_type</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_owner_type"></a>
<a id="schema_individual_owner_type"></a>
<a id="tocSindividual_owner_type"></a>
<a id="tocsindividual_owner_type"></a>

```json
"PRIMARY"
```

Role of the person party played in the account.

<h2 id="tocS_integration_details">integration_details</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_details"></a>
<a id="schema_integration_details"></a>
<a id="tocSintegration_details"></a>
<a id="tocsintegration_details"></a>

```json
{
  "classic_api_integration": {},
  "rest_api_integration": {
    "integration_method": "PAYPAL",
    "integration_type": "FIRST_PARTY",
    "first_party_details": {
      "features": [
        "PAYOUTS"
      ],
      "seller_nonce": "stringstringstringstringstringstringstringst"
    },
    "third_party_details": {
      "features": [
        "PAYOUTS"
      ],
      "signup_mode": "VERIFY_WITH_PAYPAL",
      "organization": "string"
    }
  }
}
```

The integration details for the partner and customer relationship. Required if `operation` is `API_INTEGRATION`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classic_api_integration|[classic_api_integration](#schemaclassic_api_integration)|false|none|The integration details for PayPal CLASSIC endpoints.|
|rest_api_integration|[rest_api_integration](#schemarest_api_integration)|false|none|The integration details for PayPal REST endpoints.|

<h2 id="tocS_labels">labels</h2>
<!-- backwards compatibility -->
<a id="schemalabels"></a>
<a id="schema_labels"></a>
<a id="tocSlabels"></a>
<a id="tocslabels"></a>

```json
"string"
```

A document label.

<h2 id="tocS_labels_list">labels_list</h2>
<!-- backwards compatibility -->
<a id="schemalabels_list"></a>
<a id="schema_labels_list"></a>
<a id="tocSlabels_list"></a>
<a id="tocslabels_list"></a>

```json
[
  "string"
]
```

The document labels. A document could be classfied to multiple categories. For example, a bill document can be classfified as `BILL DOCUMENT` and `UTILITY DOCUMENT`.

<h2 id="tocS_language">language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"string"
```

The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/docs/integration/direct/rest/country-codes/).

<h2 id="tocS_legal_consent">legal_consent</h2>
<!-- backwards compatibility -->
<a id="schemalegal_consent"></a>
<a id="schema_legal_consent"></a>
<a id="tocSlegal_consent"></a>
<a id="tocslegal_consent"></a>

```json
{
  "type": "SHARE_DATA_CONSENT",
  "granted": true
}
```

The customer-provided consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of consent. `SHARE_DATA_CONSENT` gives consent to you to share your customer's data with PayPal.|
|granted|boolean|true|none|Indicates whether the customer agreed to share this type of data. To give consent, specify `true`. To withhold consent, specify `false`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SHARE_DATA_CONSENT|

<h2 id="tocS_legal_consent_list">legal_consent_list</h2>
<!-- backwards compatibility -->
<a id="schemalegal_consent_list"></a>
<a id="schema_legal_consent_list"></a>
<a id="tocSlegal_consent_list"></a>
<a id="tocslegal_consent_list"></a>

```json
[
  {
    "type": "SHARE_DATA_CONSENT",
    "granted": true
  }
]
```

An array of all consents that the partner has received from this seller. If `SHARE_DATA_CONSENT` is not granted, PayPal does not store customer data.

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description_list">link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemalink_description_list"></a>
<a id="schema_link_description_list"></a>
<a id="tocSlink_description_list"></a>
<a id="tocslink_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

The HATEOAS links.

<h2 id="tocS_mandate">mandate</h2>
<!-- backwards compatibility -->
<a id="schemamandate"></a>
<a id="schema_mandate"></a>
<a id="tocSmandate"></a>
<a id="tocsmandate"></a>

```json
{
  "accepted": true
}
```

Seller’s consent to operate on this financial instrument.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|boolean|true|none|Whether mandate was accepted or not.|

<h2 id="tocS_money">money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currency_code": "str",
  "value": "string"
}
```

The currency and amount for a financial transaction, such as a balance or payment due.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).|

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "prefix": "string",
  "given_name": "string",
  "surname": "string",
  "middle_name": "string",
  "suffix": "string",
  "full_name": "string"
}
```

The name of the party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|false|none|The prefix, or title, to the party's name.|
|given_name|string|false|none|When the party is a person, the party's given, or first, name.|
|surname|string|false|none|When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.|
|middle_name|string|false|none|When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.|
|suffix|string|false|none|The suffix for the party's name.|
|full_name|string|false|none|When the party is a person, the party's full name.|

<h2 id="tocS_offline_onboarding_preference">offline_onboarding_preference</h2>
<!-- backwards compatibility -->
<a id="schemaoffline_onboarding_preference"></a>
<a id="schema_offline_onboarding_preference"></a>
<a id="tocSoffline_onboarding_preference"></a>
<a id="tocsoffline_onboarding_preference"></a>

```json
{}
```

The preference details for offline onboarding without UI.

<h2 id="tocS_operation">operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "operation": "API_INTEGRATION",
  "api_integration_preference": {
    "classic_api_integration": {},
    "rest_api_integration": {
      "integration_method": "PAYPAL",
      "integration_type": "FIRST_PARTY",
      "first_party_details": {
        "features": [
          "PAYOUTS"
        ],
        "seller_nonce": "stringstringstringstringstringstringstringst"
      },
      "third_party_details": {
        "features": [
          "PAYOUTS"
        ],
        "signup_mode": "VERIFY_WITH_PAYPAL",
        "organization": "string"
      }
    }
  },
  "offline_onboarding_preference": {},
  "billing_agreement": {
    "description": "string",
    "billing_experience_preference": {
      "experience_id": "string",
      "billing_context_set": true
    },
    "merchant_custom_data": "string",
    "approval_url": "http://example.com",
    "ec_token": "string"
  }
}
```

The required operation to share data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|The operation to enable for the customer. To enable the collection of the API permissions that you require to integrate with the customer, specify `API_INTEGRATION`. `BANK_ADDITION` is supported only for the US.|
|api_integration_preference|[integration_details](#schemaintegration_details)|false|none|The integration details for the partner and customer relationship. Required if `operation` is `API_INTEGRATION`.|
|offline_onboarding_preference|[offline_onboarding_preference](#schemaoffline_onboarding_preference)|false|none|The preference details for offline onboarding without UI.|
|billing_agreement|[billing_agreement](#schemabilling_agreement)|false|none|The details of the billing agreement between the partner and a seller.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|API_INTEGRATION|
|operation|BANK_ADDITION|
|operation|BILLING_AGREEMENT|
|operation|CONTEXTUAL_MARKETING_CONSENT|
|operation|OFFLINE_ONBOARDING|
|operation|SALESFORCE_REFERRAL|

<h2 id="tocS_operation_list">operation_list</h2>
<!-- backwards compatibility -->
<a id="schemaoperation_list"></a>
<a id="schema_operation_list"></a>
<a id="tocSoperation_list"></a>
<a id="tocsoperation_list"></a>

```json
[
  {
    "operation": "API_INTEGRATION",
    "api_integration_preference": {
      "classic_api_integration": {},
      "rest_api_integration": {
        "integration_method": "PAYPAL",
        "integration_type": "FIRST_PARTY",
        "first_party_details": {
          "features": [
            "PAYOUTS"
          ],
          "seller_nonce": "stringstringstringstringstringstringstringst"
        },
        "third_party_details": {
          "features": [
            "PAYOUTS"
          ],
          "signup_mode": "VERIFY_WITH_PAYPAL",
          "organization": "string"
        }
      }
    },
    "offline_onboarding_preference": {},
    "billing_agreement": {
      "description": "string",
      "billing_experience_preference": {
        "experience_id": "string",
        "billing_context_set": true
      },
      "merchant_custom_data": "string",
      "approval_url": "http://example.com",
      "ec_token": "string"
    }
  }
]
```

An array of operations to perform for the customer while they share their data.

<h2 id="tocS_partner_config_override">partner_config_override</h2>
<!-- backwards compatibility -->
<a id="schemapartner_config_override"></a>
<a id="schema_partner_config_override"></a>
<a id="tocSpartner_config_override"></a>
<a id="tocspartner_config_override"></a>

```json
{
  "return_url": "http://example.com",
  "return_url_description": "string",
  "show_add_credit_card": true
}
```

The preference to customize the web experience of the customer by overriding that is set at the Partner's Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|return_url|string(uri)|false|none|The URL to which to redirect the customer upon completion of the onboarding process.|
|return_url_description|string|false|none|The description of the return URL.|
|show_add_credit_card|boolean|false|none|Indicates whether to show an add credit card page.|

<h2 id="tocS_payout_attributes">payout_attributes</h2>
<!-- backwards compatibility -->
<a id="schemapayout_attributes"></a>
<a id="schema_payout_attributes"></a>
<a id="tocSpayout_attributes"></a>
<a id="tocspayout_attributes"></a>

```json
{
  "marketplace": true,
  "kyc_required": true,
  "country_transfer_method_currency_selection": [
    {
      "country": "st",
      "transfer_methods": [
        {
          "transfer_method_type": "BANK_ACCOUNT",
          "currencies": [
            "str"
          ]
        }
      ]
    }
  ]
}
```

Payout specific attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketplace|boolean|false|none|If `true`, specifies that the merchant or platform is offering goods or services on behalf of 3rd party sellers.|
|kyc_required|boolean|false|none|If `true`, specifies that the Kyc is required for the merchant.|
|country_transfer_method_currency_selection|[country_transfer_method_currency_selection_list](#schemacountry_transfer_method_currency_selection_list)|false|none|Requested country, transfer method and currency.|

<h2 id="tocS_percentage">percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
"string"
```

The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.

<h2 id="tocS_person">person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "id": "string",
  "names": [
    {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "full_name": "string",
      "type": "LEGAL"
    }
  ],
  "citizenship": "st",
  "addresses": [
    {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      },
      "type": "HOME"
    }
  ],
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "type": "FAX"
    }
  ],
  "birth_details": {
    "date_of_birth": "stringstri"
  },
  "documents": [
    {
      "id": "string",
      "labels": [
        "string"
      ],
      "name": "string",
      "identification_number": "string",
      "issue_date": "stringstri",
      "expiry_date": "stringstri",
      "issuing_country_code": "st",
      "files": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
      "type": "SOCIAL_SECURITY_NUMBER"
    }
  ]
}
```

Details of the person or party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted party ID.|
|names|[person_name_list](#schemaperson_name_list)|false|none|The name of the person.|
|citizenship|[country_code](#schemacountry_code)|false|none|The citizenship country code of the person.|
|addresses|[person_address_detail_list](#schemaperson_address_detail_list)|false|none|The list of addresses associated with the person.|
|phones|[person_phone_detail_list](#schemaperson_phone_detail_list)|false|none|The list of phone numbers associated with the person.|
|birth_details|[birth_details](#schemabirth_details)|false|none|The person's birth details.|
|documents|[person_document_list](#schemaperson_document_list)|false|none|A person's or party's related document data collected from the customer. For example SSN, ITIN, or business registration number collected from the user. <blockquote><strong>Note:</strong> This field is not applicable for POST [/v2/customer/partner-referrals](/docs/api/partner-referrals/v2/#partner-referrals_create) API calls.</blockquote>|

<h2 id="tocS_person_address_detail">person_address_detail</h2>
<!-- backwards compatibility -->
<a id="schemaperson_address_detail"></a>
<a id="schema_person_address_detail"></a>
<a id="tocSperson_address_detail"></a>
<a id="tocsperson_address_detail"></a>

```json
{
  "address_line_1": "string",
  "address_line_2": "string",
  "address_line_3": "string",
  "admin_area_4": "string",
  "admin_area_3": "string",
  "admin_area_2": "string",
  "admin_area_1": "string",
  "postal_code": "string",
  "country_code": "st",
  "address_details": {
    "street_number": "string",
    "street_name": "string",
    "street_type": "string",
    "delivery_service": "string",
    "building_name": "string",
    "sub_building": "string"
  },
  "type": "HOME"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line_1|string|false|none|The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.|
|address_line_2|string|false|none|The second line of the address. For example, suite or apartment number.|
|address_line_3|string|false|none|The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.|
|admin_area_4|string|false|none|The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>|
|admin_area_3|string|false|none|A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>|
|admin_area_2|string|false|none|A city, town, or village. Smaller than `admin_area_level_1`.|
|admin_area_1|string|false|none|The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>|
|postal_code|string|false|none|The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|
|country_code|[country_code](#schemacountry_code)|true|none|The [two-character ISO 3166-1 code](/docs/api/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|address_details|[address_details](#schemaaddress_details)|false|none|The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.|
|type|[person_address_type](#schemaperson_address_type)|true|none|The address type under which this is classified.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|

<h2 id="tocS_person_address_detail_list">person_address_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemaperson_address_detail_list"></a>
<a id="schema_person_address_detail_list"></a>
<a id="tocSperson_address_detail_list"></a>
<a id="tocsperson_address_detail_list"></a>

```json
[
  {
    "address_line_1": "string",
    "address_line_2": "string",
    "address_line_3": "string",
    "admin_area_4": "string",
    "admin_area_3": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "address_details": {
      "street_number": "string",
      "street_name": "string",
      "street_type": "string",
      "delivery_service": "string",
      "building_name": "string",
      "sub_building": "string"
    },
    "type": "HOME"
  }
]
```

The list of addresses associated with the person.

<h2 id="tocS_person_address_type">person_address_type</h2>
<!-- backwards compatibility -->
<a id="schemaperson_address_type"></a>
<a id="schema_person_address_type"></a>
<a id="tocSperson_address_type"></a>
<a id="tocsperson_address_type"></a>

```json
"HOME"
```

The address type under which the provided address is tagged.

<h2 id="tocS_person_document">person_document</h2>
<!-- backwards compatibility -->
<a id="schemaperson_document"></a>
<a id="schema_person_document"></a>
<a id="tocSperson_document"></a>
<a id="tocsperson_document"></a>

```json
{
  "id": "string",
  "labels": [
    "string"
  ],
  "name": "string",
  "identification_number": "string",
  "issue_date": "stringstri",
  "expiry_date": "stringstri",
  "issuing_country_code": "st",
  "files": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ],
  "type": "SOCIAL_SECURITY_NUMBER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The encrypted identifier for the document.|
|labels|[labels_list](#schemalabels_list)|false|none|The document labels. A document could be classfied to multiple categories. For example, a bill document can be classfified as `BILL DOCUMENT` and `UTILITY DOCUMENT`.|
|name|string|false|none|The file name.|
|identification_number|string|false|none|The number for the document. It is the ID number if the document is `ID CARD`, the passport number if the document is `PASSPORT`, etc.|
|issue_date|[date_no_time](#schemadate_no_time)|false|none|The issue date of the document.|
|expiry_date|[date_no_time](#schemadate_no_time)|false|none|The expire data of the document.|
|issuing_country_code|[country_code](#schemacountry_code)|false|none|The country code of the document.|
|files|[file_reference_list](#schemafile_reference_list)|false|none|The files contained in the document. For example, a document could be represented by a front page file and a back page file, etc.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|The HATEOAS links.|
|type|[person_document_type](#schemaperson_document_type)|false|none|The actual type of the document. It could be `ID_CARD`, `PASSPORT`, etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_SECURITY_NUMBER|
|type|EMPLOYMENT_IDENTIFICATION_NUMBER|
|type|TAX_IDENTIFICATION_NUMBER|
|type|PASSPORT_NUMBER|
|type|PENSION_FUND_ID|
|type|MEDICAL_INSURANCE_ID|
|type|CNPJ|
|type|CPF|
|type|PAN|
|type|NATIONAL_ID_CARD|

<h2 id="tocS_person_document_list">person_document_list</h2>
<!-- backwards compatibility -->
<a id="schemaperson_document_list"></a>
<a id="schema_person_document_list"></a>
<a id="tocSperson_document_list"></a>
<a id="tocsperson_document_list"></a>

```json
[
  {
    "id": "string",
    "labels": [
      "string"
    ],
    "name": "string",
    "identification_number": "string",
    "issue_date": "stringstri",
    "expiry_date": "stringstri",
    "issuing_country_code": "st",
    "files": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ],
    "type": "SOCIAL_SECURITY_NUMBER"
  }
]
```

A person's or party's related document data collected from the customer. For example SSN, ITIN, or business registration number collected from the user. <blockquote><strong>Note:</strong> This field is not applicable for POST [/v2/customer/partner-referrals](/docs/api/partner-referrals/v2/#partner-referrals_create) API calls.</blockquote>

<h2 id="tocS_person_document_type">person_document_type</h2>
<!-- backwards compatibility -->
<a id="schemaperson_document_type"></a>
<a id="schema_person_document_type"></a>
<a id="tocSperson_document_type"></a>
<a id="tocsperson_document_type"></a>

```json
"SOCIAL_SECURITY_NUMBER"
```

The type of documents.

<h2 id="tocS_person_name">person_name</h2>
<!-- backwards compatibility -->
<a id="schemaperson_name"></a>
<a id="schema_person_name"></a>
<a id="tocSperson_name"></a>
<a id="tocsperson_name"></a>

```json
{
  "prefix": "string",
  "given_name": "string",
  "surname": "string",
  "middle_name": "string",
  "suffix": "string",
  "full_name": "string",
  "type": "LEGAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|false|none|The prefix, or title, to the party's name.|
|given_name|string|false|none|When the party is a person, the party's given, or first, name.|
|surname|string|false|none|When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.|
|middle_name|string|false|none|When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.|
|suffix|string|false|none|The suffix for the party's name.|
|full_name|string|false|none|When the party is a person, the party's full name.|
|type|[person_name_type](#schemaperson_name_type)|true|none|The type of name. Currently supported values are: `LEGAL`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LEGAL|

<h2 id="tocS_person_name_list">person_name_list</h2>
<!-- backwards compatibility -->
<a id="schemaperson_name_list"></a>
<a id="schema_person_name_list"></a>
<a id="tocSperson_name_list"></a>
<a id="tocsperson_name_list"></a>

```json
[
  {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "full_name": "string",
    "type": "LEGAL"
  }
]
```

The name of the person.

<h2 id="tocS_person_name_type">person_name_type</h2>
<!-- backwards compatibility -->
<a id="schemaperson_name_type"></a>
<a id="schema_person_name_type"></a>
<a id="tocSperson_name_type"></a>
<a id="tocsperson_name_type"></a>

```json
"LEGAL"
```

The person's name type.

<h2 id="tocS_person_phone_detail">person_phone_detail</h2>
<!-- backwards compatibility -->
<a id="schemaperson_phone_detail"></a>
<a id="schema_person_phone_detail"></a>
<a id="tocSperson_phone_detail"></a>
<a id="tocsperson_phone_detail"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string",
  "type": "FAX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|
|type|[phone_type](#schemaphone_type)|true|none|The type of phone number provided. For example, home, work, or mobile.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FAX|
|type|HOME|
|type|MOBILE|
|type|OTHER|
|type|PAGER|

<h2 id="tocS_person_phone_detail_list">person_phone_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemaperson_phone_detail_list"></a>
<a id="schema_person_phone_detail_list"></a>
<a id="tocSperson_phone_detail_list"></a>
<a id="tocsperson_phone_detail_list"></a>

```json
[
  {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string",
    "type": "FAX"
  }
]
```

The list of phone numbers associated with the person.

<h2 id="tocS_phone">phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string"
}
```

The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|

<h2 id="tocS_phone_type">phone_type</h2>
<!-- backwards compatibility -->
<a id="schemaphone_type"></a>
<a id="schema_phone_type"></a>
<a id="tocSphone_type"></a>
<a id="tocsphone_type"></a>

```json
"FAX"
```

The phone type.

<h2 id="tocS_product">product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
"ALIPAY"
```

The PayPal product for which the customer is onboarded.

<h2 id="tocS_product_list">product_list</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_list"></a>
<a id="schema_product_list"></a>
<a id="tocSproduct_list"></a>
<a id="tocsproduct_list"></a>

```json
[
  "ALIPAY"
]
```

An array of PayPal products to which the partner wants to onboard the customer.

<h2 id="tocS_purpose_code_enum">purpose_code_enum</h2>
<!-- backwards compatibility -->
<a id="schemapurpose_code_enum"></a>
<a id="schema_purpose_code_enum"></a>
<a id="tocSpurpose_code_enum"></a>
<a id="tocspurpose_code_enum"></a>

```json
"P0104"
```

The purpose code. Required only for India. For more information, see the Reserve Bank Of India web site. Value is:<ul><li><code>P0104</code>. Cross border delivery of goods and services.</li><li><code>P0301</code>. Business related travel purchase.</li><li><code>P0801</code>. Hardware consulting.</li><li><code>P0802</code>. Software consulting.</li><li><code>P0803</code>. Data processing consulting.</li><li><code>P0805</code>. Freelance journalism.</li><li><code>P0806</code>. Other information services.</li><li><code>P0902</code>. Licensing revenues.</li><li><code>P1004</code>. Legal.</li><li><code>P1005</code>. Accounting and tax.</li><li><code>P1006</code>. Business and management consultancy.</li><li><code>P1007</code>. Advertising and market research.</li><li><code>P1008</code>. Research and development.</li><li><code>P1009</code>. Architectural services.</li></ul>

<h2 id="tocS_referral_data">referral_data</h2>
<!-- backwards compatibility -->
<a id="schemareferral_data"></a>
<a id="schema_referral_data"></a>
<a id="tocSreferral_data"></a>
<a id="tocsreferral_data"></a>

```json
{
  "individual_owners": [
    {
      "id": "string",
      "names": [
        {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "full_name": "string",
          "type": "LEGAL"
        }
      ],
      "citizenship": "st",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "HOME"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "FAX"
        }
      ],
      "birth_details": {
        "date_of_birth": "stringstri"
      },
      "documents": [
        {
          "id": "string",
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "type": "PRIMARY"
    }
  ],
  "business_entity": {
    "business_type": {
      "type": "ANY_OTHER_BUSINESS_ENTITY",
      "subtype": "ASSO_TYPE_INCORPORATED"
    },
    "business_industry": {
      "category": "string",
      "mcc_code": "string",
      "subcategory": "string"
    },
    "business_incorporation": {
      "incorporation_country_code": "st",
      "incorporation_date": "stringstri"
    },
    "names": [
      {
        "business_name": "string",
        "type": "DOING_BUSINESS_AS"
      }
    ],
    "emails": [
      {
        "type": "CUSTOMER_SERVICE",
        "email": "string"
      }
    ],
    "website": "http://example.com",
    "addresses": [
      {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        },
        "type": "WORK"
      }
    ],
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "type": "CUSTOMER_SERVICE"
      }
    ],
    "documents": [
      {
        "id": "string",
        "labels": [
          "string"
        ],
        "name": "string",
        "identification_number": "string",
        "issue_date": "stringstri",
        "expiry_date": "stringstri",
        "issuing_country_code": "st",
        "files": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ],
        "type": "SOCIAL_SECURITY_NUMBER"
      }
    ],
    "beneficial_owners": {
      "individual_beneficial_owners": [
        {
          "id": "string",
          "names": [
            {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "full_name": "string",
              "type": "LEGAL"
            }
          ],
          "citizenship": "st",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "HOME"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "FAX"
            }
          ],
          "birth_details": {
            "date_of_birth": "stringstri"
          },
          "documents": [
            {
              "id": "string",
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "method": "GET"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ],
      "business_beneficial_owners": [
        {
          "business_type": {
            "type": "ANY_OTHER_BUSINESS_ENTITY",
            "subtype": "ASSO_TYPE_INCORPORATED"
          },
          "business_industry": {
            "category": "string",
            "mcc_code": "string",
            "subcategory": "string"
          },
          "business_incorporation": {
            "incorporation_country_code": "st",
            "incorporation_date": "stringstri"
          },
          "names": [
            {
              "business_name": "string",
              "type": "DOING_BUSINESS_AS"
            }
          ],
          "emails": [
            {
              "type": "CUSTOMER_SERVICE",
              "email": "string"
            }
          ],
          "website": "http://example.com",
          "addresses": [
            {
              "address_line_1": "string",
              "address_line_2": "string",
              "address_line_3": "string",
              "admin_area_4": "string",
              "admin_area_3": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st",
              "address_details": {
                "street_number": "string",
                "street_name": "string",
                "street_type": "string",
                "delivery_service": "string",
                "building_name": "string",
                "sub_building": "string"
              },
              "type": "WORK"
            }
          ],
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "type": "CUSTOMER_SERVICE"
            }
          ],
          "documents": [
            {
              "id": "string",
              "labels": [
                "string"
              ],
              "name": "string",
              "identification_number": "string",
              "issue_date": "stringstri",
              "expiry_date": "stringstri",
              "issuing_country_code": "st",
              "files": [
                {
                  "id": "string",
                  "reference_url": "http://example.com",
                  "content_type": "string",
                  "create_time": "stringstringstringst",
                  "size": "string"
                }
              ],
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "method": "GET"
                }
              ],
              "type": "SOCIAL_SECURITY_NUMBER"
            }
          ],
          "percentage_of_ownership": "string"
        }
      ]
    },
    "annual_sales_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "average_monthly_volume_range": {
      "minimum_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "maximum_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "purpose_code": [
      "P0104"
    ],
    "business_description": "string"
  },
  "email": "string",
  "preferred_language_code": "string",
  "tracking_id": "string",
  "partner_config_override": {
    "return_url": "http://example.com",
    "return_url_description": "string",
    "show_add_credit_card": true
  },
  "financial_instruments": {
    "banks": [
      {
        "nick_name": "string",
        "account_number": "string",
        "account_type": "CHECKING",
        "currency_code": "str",
        "identifiers": [
          {
            "type": "BANK_CODE",
            "value": "string"
          }
        ],
        "branch_location": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "mandate": {
          "accepted": true
        }
      }
    ]
  },
  "operations": [
    {
      "operation": "API_INTEGRATION",
      "api_integration_preference": {
        "classic_api_integration": {},
        "rest_api_integration": {
          "integration_method": "PAYPAL",
          "integration_type": "FIRST_PARTY",
          "first_party_details": {
            "features": [
              "PAYOUTS"
            ],
            "seller_nonce": "stringstringstringstringstringstringstringst"
          },
          "third_party_details": {
            "features": [
              "PAYOUTS"
            ],
            "signup_mode": "VERIFY_WITH_PAYPAL",
            "organization": "string"
          }
        }
      },
      "offline_onboarding_preference": {},
      "billing_agreement": {
        "description": "string",
        "billing_experience_preference": {
          "experience_id": "string",
          "billing_context_set": true
        },
        "merchant_custom_data": "string",
        "approval_url": "http://example.com",
        "ec_token": "string"
      }
    }
  ],
  "products": [
    "ALIPAY"
  ],
  "capabilities": [
    "PAYPAL_WALLET_VAULTING_ADVANCED"
  ],
  "outside_process_dependencies": [
    null
  ],
  "legal_consents": [
    {
      "type": "SHARE_DATA_CONSENT",
      "granted": true
    }
  ],
  "payout_attributes": {
    "marketplace": true,
    "kyc_required": true,
    "country_transfer_method_currency_selection": [
      {
        "country": "st",
        "transfer_methods": [
          {
            "transfer_method_type": "BANK_ACCOUNT",
            "currencies": [
              "str"
            ]
          }
        ]
      }
    ]
  },
  "legal_country_code": "st"
}
```

The customer's referral data that partners share with PayPal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|individual_owners|[individual_owner_list](#schemaindividual_owner_list)|false|none|List of owners in the account. There should be only one primary account owner which is mentioned in their role_type.|
|business_entity|[business_entity](#schemabusiness_entity)|false|none|Business entity of the account.|
|email|[email_address](#schemaemail_address)|false|none|Email address of the customer used to create the account.|
|preferred_language_code|[language](#schemalanguage)|false|none|The preferred [locale code](/docs/api/reference/locale-codes/) to use in the onboarding flow for the customer.|
|tracking_id|string|false|none|The partner's unique identifier for this customer in their system which can be used to track user in PayPal.|
|partner_config_override|[partner_config_override](#schemapartner_config_override)|false|none|The configuration property that the partner intends to override for this onboarding request.|
|financial_instruments|[financial_instruments](#schemafinancial_instruments)|false|none|Array of financial instruments attached to the customer's account.|
|operations|[operation_list](#schemaoperation_list)|true|none|An array of operations to perform for the customer while they share their data.|
|products|[product_list](#schemaproduct_list)|false|none|An array of PayPal products to which the partner wants to onboard the customer.|
|capabilities|[capabilities_list](#schemacapabilities_list)|false|none|An array of capabilities which the partner wants to enable for the selected products. Supported only when products are specified.|
|outside_process_dependencies|[dependent_process_list](#schemadependent_process_list)|false|none|An array of dependent processes.|
|legal_consents|[legal_consent_list](#schemalegal_consent_list)|true|none|An array of all consents that the partner has received from this seller. If `SHARE_DATA_CONSENT` is not granted, PayPal does not store customer data.|
|payout_attributes|[payout_attributes](#schemapayout_attributes)|false|none|Payout specific attributes.|
|legal_country_code|[country_code](#schemacountry_code)|false|none|Legal Country Code.|

#### Enumerated Values

|Property|Value|
|---|---|
|products|ALIPAY|
|products|BANCONTACT|
|products|BLIK|
|products|EPS|
|products|PPCP|
|products|EXPRESS_CHECKOUT|
|products|PAYMENT_METHODS|
|products|ADVANCED_VAULTING|
|products|IDEAL|
|products|MB_WAY|
|products|MULTIBANCO|
|products|PAYPAL_COMMERCE_PLATFORM_BUSINESS|
|products|PPPLUS|
|products|PRZELEWY24|
|products|SATISPAY|
|products|TRUSTLY|
|products|WECHAT_PAY|
|products|WEBSITE_PAYMENT_PRO|
|products|ZETTLE|
|products|PAYPAL_COMMERCE_PLATFORM_BUSINESS|
|products|HYPERWALLET_PAYOUTS|
|capabilities|PAYPAL_WALLET_VAULTING_ADVANCED|
|capabilities|PAY_UPON_INVOICE|
|capabilities|APPLE_PAY|
|capabilities|GOOGLE_PAY|

<h2 id="tocS_referral_data_response">referral_data_response</h2>
<!-- backwards compatibility -->
<a id="schemareferral_data_response"></a>
<a id="schema_referral_data_response"></a>
<a id="tocSreferral_data_response"></a>
<a id="tocsreferral_data_response"></a>

```json
{
  "partner_referral_id": "string",
  "submitter_payer_id": "string",
  "submitter_client_id": "string",
  "referral_data": {
    "individual_owners": [
      {
        "id": "string",
        "names": [
          {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "full_name": "string",
            "type": "LEGAL"
          }
        ],
        "citizenship": "st",
        "addresses": [
          {
            "address_line_1": "string",
            "address_line_2": "string",
            "address_line_3": "string",
            "admin_area_4": "string",
            "admin_area_3": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st",
            "address_details": {
              "street_number": "string",
              "street_name": "string",
              "street_type": "string",
              "delivery_service": "string",
              "building_name": "string",
              "sub_building": "string"
            },
            "type": "HOME"
          }
        ],
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "type": "FAX"
          }
        ],
        "birth_details": {
          "date_of_birth": "stringstri"
        },
        "documents": [
          {
            "id": "string",
            "labels": [
              "string"
            ],
            "name": "string",
            "identification_number": "string",
            "issue_date": "stringstri",
            "expiry_date": "stringstri",
            "issuing_country_code": "st",
            "files": [
              {
                "id": "string",
                "reference_url": "http://example.com",
                "content_type": "string",
                "create_time": "stringstringstringst",
                "size": "string"
              }
            ],
            "links": [
              {
                "href": "string",
                "rel": "string",
                "method": "GET"
              }
            ],
            "type": "SOCIAL_SECURITY_NUMBER"
          }
        ],
        "type": "PRIMARY"
      }
    ],
    "business_entity": {
      "business_type": {
        "type": "ANY_OTHER_BUSINESS_ENTITY",
        "subtype": "ASSO_TYPE_INCORPORATED"
      },
      "business_industry": {
        "category": "string",
        "mcc_code": "string",
        "subcategory": "string"
      },
      "business_incorporation": {
        "incorporation_country_code": "st",
        "incorporation_date": "stringstri"
      },
      "names": [
        {
          "business_name": "string",
          "type": "DOING_BUSINESS_AS"
        }
      ],
      "emails": [
        {
          "type": "CUSTOMER_SERVICE",
          "email": "string"
        }
      ],
      "website": "http://example.com",
      "addresses": [
        {
          "address_line_1": "string",
          "address_line_2": "string",
          "address_line_3": "string",
          "admin_area_4": "string",
          "admin_area_3": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "address_details": {
            "street_number": "string",
            "street_name": "string",
            "street_type": "string",
            "delivery_service": "string",
            "building_name": "string",
            "sub_building": "string"
          },
          "type": "WORK"
        }
      ],
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "type": "CUSTOMER_SERVICE"
        }
      ],
      "documents": [
        {
          "id": "string",
          "labels": [
            "string"
          ],
          "name": "string",
          "identification_number": "string",
          "issue_date": "stringstri",
          "expiry_date": "stringstri",
          "issuing_country_code": "st",
          "files": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ],
          "type": "SOCIAL_SECURITY_NUMBER"
        }
      ],
      "beneficial_owners": {
        "individual_beneficial_owners": [
          {
            "id": "string",
            "names": [
              {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "full_name": "string",
                "type": "LEGAL"
              }
            ],
            "citizenship": "st",
            "addresses": [
              {
                "address_line_1": "string",
                "address_line_2": "string",
                "address_line_3": "string",
                "admin_area_4": "string",
                "admin_area_3": "string",
                "admin_area_2": "string",
                "admin_area_1": "string",
                "postal_code": "string",
                "country_code": "st",
                "address_details": {
                  "street_number": "string",
                  "street_name": "string",
                  "street_type": "string",
                  "delivery_service": "string",
                  "building_name": "string",
                  "sub_building": "string"
                },
                "type": "HOME"
              }
            ],
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "type": "FAX"
              }
            ],
            "birth_details": {
              "date_of_birth": "stringstri"
            },
            "documents": [
              {
                "id": "string",
                "labels": [
                  "string"
                ],
                "name": "string",
                "identification_number": "string",
                "issue_date": "stringstri",
                "expiry_date": "stringstri",
                "issuing_country_code": "st",
                "files": [
                  {
                    "id": "string",
                    "reference_url": "http://example.com",
                    "content_type": "string",
                    "create_time": "stringstringstringst",
                    "size": "string"
                  }
                ],
                "links": [
                  {
                    "href": "string",
                    "rel": "string",
                    "method": "GET"
                  }
                ],
                "type": "SOCIAL_SECURITY_NUMBER"
              }
            ],
            "percentage_of_ownership": "string"
          }
        ],
        "business_beneficial_owners": [
          {
            "business_type": {
              "type": "ANY_OTHER_BUSINESS_ENTITY",
              "subtype": "ASSO_TYPE_INCORPORATED"
            },
            "business_industry": {
              "category": "string",
              "mcc_code": "string",
              "subcategory": "string"
            },
            "business_incorporation": {
              "incorporation_country_code": "st",
              "incorporation_date": "stringstri"
            },
            "names": [
              {
                "business_name": "string",
                "type": "DOING_BUSINESS_AS"
              }
            ],
            "emails": [
              {
                "type": "CUSTOMER_SERVICE",
                "email": "string"
              }
            ],
            "website": "http://example.com",
            "addresses": [
              {
                "address_line_1": "string",
                "address_line_2": "string",
                "address_line_3": "string",
                "admin_area_4": "string",
                "admin_area_3": "string",
                "admin_area_2": "string",
                "admin_area_1": "string",
                "postal_code": "string",
                "country_code": "st",
                "address_details": {
                  "street_number": "string",
                  "street_name": "string",
                  "street_type": "string",
                  "delivery_service": "string",
                  "building_name": "string",
                  "sub_building": "string"
                },
                "type": "WORK"
              }
            ],
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "type": "CUSTOMER_SERVICE"
              }
            ],
            "documents": [
              {
                "id": "string",
                "labels": [
                  "string"
                ],
                "name": "string",
                "identification_number": "string",
                "issue_date": "stringstri",
                "expiry_date": "stringstri",
                "issuing_country_code": "st",
                "files": [
                  {
                    "id": "string",
                    "reference_url": "http://example.com",
                    "content_type": "string",
                    "create_time": "stringstringstringst",
                    "size": "string"
                  }
                ],
                "links": [
                  {
                    "href": "string",
                    "rel": "string",
                    "method": "GET"
                  }
                ],
                "type": "SOCIAL_SECURITY_NUMBER"
              }
            ],
            "percentage_of_ownership": "string"
          }
        ]
      },
      "annual_sales_volume_range": {
        "minimum_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "maximum_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "average_monthly_volume_range": {
        "minimum_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "maximum_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "purpose_code": [
        "P0104"
      ],
      "business_description": "string"
    },
    "email": "string",
    "preferred_language_code": "string",
    "tracking_id": "string",
    "partner_config_override": {
      "return_url": "http://example.com",
      "return_url_description": "string",
      "show_add_credit_card": true
    },
    "financial_instruments": {
      "banks": [
        {
          "nick_name": "string",
          "account_number": "string",
          "account_type": "CHECKING",
          "currency_code": "str",
          "identifiers": [
            {
              "type": "BANK_CODE",
              "value": "string"
            }
          ],
          "branch_location": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          },
          "mandate": {
            "accepted": true
          }
        }
      ]
    },
    "operations": [
      {
        "operation": "API_INTEGRATION",
        "api_integration_preference": {
          "classic_api_integration": {},
          "rest_api_integration": {
            "integration_method": "PAYPAL",
            "integration_type": "FIRST_PARTY",
            "first_party_details": {
              "features": [
                "PAYOUTS"
              ],
              "seller_nonce": "stringstringstringstringstringstringstringst"
            },
            "third_party_details": {
              "features": [
                "PAYOUTS"
              ],
              "signup_mode": "VERIFY_WITH_PAYPAL",
              "organization": "string"
            }
          }
        },
        "offline_onboarding_preference": {},
        "billing_agreement": {
          "description": "string",
          "billing_experience_preference": {
            "experience_id": "string",
            "billing_context_set": true
          },
          "merchant_custom_data": "string",
          "approval_url": "http://example.com",
          "ec_token": "string"
        }
      }
    ],
    "products": [
      "ALIPAY"
    ],
    "capabilities": [
      "PAYPAL_WALLET_VAULTING_ADVANCED"
    ],
    "outside_process_dependencies": [
      null
    ],
    "legal_consents": [
      {
        "type": "SHARE_DATA_CONSENT",
        "granted": true
      }
    ],
    "payout_attributes": {
      "marketplace": true,
      "kyc_required": true,
      "country_transfer_method_currency_selection": [
        {
          "country": "st",
          "transfer_methods": [
            {
              "transfer_method_type": "BANK_ACCOUNT",
              "currencies": [
                "str"
              ]
            }
          ]
        }
      ]
    },
    "legal_country_code": "st"
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The share referral data response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partner_referral_id|string|false|read-only|The ID to access the customer's data shared by the partner with PayPal.|
|submitter_payer_id|string|false|read-only|The payer ID of the partner who shared the referral data.|
|submitter_client_id|string|false|read-only|The client ID of the partner who shared the referral data. This cliend ID will be returned only when the caller is determined as an internal partner, which means the scope of the caller's security context only have "https://uri.paypal.com/services/customer/partner-referrals", For more information, see <a href="https://github.paypal.com/Customers-R/partnselleronbnodeserv/blob/b0a631c43e80a4dd43d34c01f479c272b3287796/src/helpers/securityContextHelpers.js#L143">Api Actor type in Typhoon service</a>.|
|referral_data|[referral_data](#schemareferral_data)|false|none|The customer's referral data that partners share with PayPal.|
|links|[referral_data_response_definitions-link_description_list](#schemareferral_data_response_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).|

<h2 id="tocS_referral_data_response_definitions-link_description_list">referral_data_response_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemareferral_data_response_definitions-link_description_list"></a>
<a id="schema_referral_data_response_definitions-link_description_list"></a>
<a id="tocSreferral_data_response_definitions-link_description_list"></a>
<a id="tocsreferral_data_response_definitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).

<h2 id="tocS_rest_api_integration">rest_api_integration</h2>
<!-- backwards compatibility -->
<a id="schemarest_api_integration"></a>
<a id="schema_rest_api_integration"></a>
<a id="tocSrest_api_integration"></a>
<a id="tocsrest_api_integration"></a>

```json
{
  "integration_method": "PAYPAL",
  "integration_type": "FIRST_PARTY",
  "first_party_details": {
    "features": [
      "PAYOUTS"
    ],
    "seller_nonce": "stringstringstringstringstringstringstringst"
  },
  "third_party_details": {
    "features": [
      "PAYOUTS"
    ],
    "signup_mode": "VERIFY_WITH_PAYPAL",
    "organization": "string"
  }
}
```

The integration details for PayPal REST endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration_method|string|false|none|The REST-credential integration method.|
|integration_type|string|true|none|The type of REST-endpoint integration. To integrate with Braintree v.zero for PayPal REST endpoints, specify `third_party_details`.|
|first_party_details|[first_party_details](#schemafirst_party_details)|false|none|The integration details for PayPal first party REST endpoints.|
|third_party_details|[third_party_details](#schemathird_party_details)|false|none|The integration details for PayPal REST endpoints.|

#### Enumerated Values

|Property|Value|
|---|---|
|integration_method|BRAINTREE|
|integration_method|PAYPAL|
|integration_method|SDK|
|integration_type|FIRST_PARTY|
|integration_type|THIRD_PARTY|

<h2 id="tocS_rest_api_integration_rest_endpoint_features_enum_list">rest_api_integration_rest_endpoint_features_enum_list</h2>
<!-- backwards compatibility -->
<a id="schemarest_api_integration_rest_endpoint_features_enum_list"></a>
<a id="schema_rest_api_integration_rest_endpoint_features_enum_list"></a>
<a id="tocSrest_api_integration_rest_endpoint_features_enum_list"></a>
<a id="tocsrest_api_integration_rest_endpoint_features_enum_list"></a>

```json
[
  "PAYOUTS"
]
```

An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.

<h2 id="tocS_rest_endpoint_features_enum">rest_endpoint_features_enum</h2>
<!-- backwards compatibility -->
<a id="schemarest_endpoint_features_enum"></a>
<a id="schema_rest_endpoint_features_enum"></a>
<a id="tocSrest_endpoint_features_enum"></a>
<a id="tocsrest_endpoint_features_enum"></a>

```json
"PAYOUTS"
```

The REST endpoint.

<h2 id="tocS_rest_endpoint_features_enum_list">rest_endpoint_features_enum_list</h2>
<!-- backwards compatibility -->
<a id="schemarest_endpoint_features_enum_list"></a>
<a id="schema_rest_endpoint_features_enum_list"></a>
<a id="tocSrest_endpoint_features_enum_list"></a>
<a id="tocsrest_endpoint_features_enum_list"></a>

```json
[
  "PAYOUTS"
]
```

An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.

<h2 id="tocS_signup_mode">signup_mode</h2>
<!-- backwards compatibility -->
<a id="schemasignup_mode"></a>
<a id="schema_signup_mode"></a>
<a id="tocSsignup_mode"></a>
<a id="tocssignup_mode"></a>

```json
"VERIFY_WITH_PAYPAL"
```

Signup Mode to be used for sellers for third party integration.

<h2 id="tocS_third_party_details">third_party_details</h2>
<!-- backwards compatibility -->
<a id="schemathird_party_details"></a>
<a id="schema_third_party_details"></a>
<a id="tocSthird_party_details"></a>
<a id="tocsthird_party_details"></a>

```json
{
  "features": [
    "PAYOUTS"
  ],
  "signup_mode": "VERIFY_WITH_PAYPAL",
  "organization": "string"
}
```

The integration details for PayPal REST endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[rest_api_integration_rest_endpoint_features_enum_list](#schemarest_api_integration_rest_endpoint_features_enum_list)|false|none|An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.|
|signup_mode|[signup_mode](#schemasignup_mode)|false|none|Signup Mode to be used for sellers for third party integration.|
|organization|string|false|none|The organization to which the account will belong in the partner’s hierarchy, as a path.|

#### Enumerated Values

|Property|Value|
|---|---|
|features|PAYOUTS|
|features|PAYMENT|
|features|REFUND|
|features|FUTURE_PAYMENT|
|features|DIRECT_PAYMENT|
|features|PARTNER_FEE|
|features|DELAY_FUNDS_DISBURSEMENT|
|features|READ_SELLER_DISPUTE|
|features|UPDATE_SELLER_DISPUTE|
|features|ADVANCED_TRANSACTIONS_SEARCH|
|features|SWEEP_FUNDS_EXTERNAL_SINK|
|features|ACCESS_MERCHANT_INFORMATION|
|features|TRACKING_SHIPMENT_READWRITE|
|features|INVOICE_READ_WRITE|
|features|DISPUTE_READ_BUYER|
|features|UPDATE_CUSTOMER_DISPUTES|
|features|VAULT|
|features|BILLING_AGREEMENT|
|features|WITHDRAWALS|
|features|LINKED_FINANCIAL_INSTRUMENTS|
|features|USER_PROFILE|
|features|TRANSACTION_RISK_DATA|
|features|PAYPAL_BALANCE|
|features|EXCHANGE_CURRENCY|
|signup_mode|VERIFY_WITH_PAYPAL|

<h2 id="tocS_transfer_method">transfer_method</h2>
<!-- backwards compatibility -->
<a id="schematransfer_method"></a>
<a id="schema_transfer_method"></a>
<a id="tocStransfer_method"></a>
<a id="tocstransfer_method"></a>

```json
{
  "transfer_method_type": "BANK_ACCOUNT",
  "currencies": [
    "str"
  ]
}
```

Requested transfer method and currency for a country.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transfer_method_type|string|false|none|Transfer Method type.|
|currencies|[currency_code_list](#schemacurrency_code_list)|false|none|Requested Currencies for a Transfer Method.|

#### Enumerated Values

|Property|Value|
|---|---|
|transfer_method_type|BANK_ACCOUNT|
|transfer_method_type|PAYPAL|
|transfer_method_type|VENMO|
|transfer_method_type|WIRE_ACCOUNT|

<h2 id="tocS_transfer_method_list">transfer_method_list</h2>
<!-- backwards compatibility -->
<a id="schematransfer_method_list"></a>
<a id="schema_transfer_method_list"></a>
<a id="tocStransfer_method_list"></a>
<a id="tocstransfer_method_list"></a>

```json
[
  {
    "transfer_method_type": "BANK_ACCOUNT",
    "currencies": [
      "str"
    ]
  }
]
```

Requested transfer method and currency for a country.
