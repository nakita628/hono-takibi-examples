declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/repository/entry/show': {
      $get: {
        input: { query: { output: string; entryid: string; arg1?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/2017_boulder_election_expenditures': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_2017_boulder_election_expenditures.committee'?: string | undefined
            'search.db_2017_boulder_election_expenditures.transaction_date'?: string | undefined
            'search.db_2017_boulder_election_expenditures.name'?: string | undefined
            'search.db_2017_boulder_election_expenditures.street'?: string | undefined
            'search.db_2017_boulder_election_expenditures.city'?: string | undefined
            'search.db_2017_boulder_election_expenditures.state'?: string | undefined
            'search.db_2017_boulder_election_expenditures.zip'?: string | undefined
            'search.db_2017_boulder_election_expenditures.expenditure'?: number | undefined
            'search.db_2017_boulder_election_expenditures.purpose'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/any': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/beforeafter': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/biblio': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.biblio.primary_author'?: string | undefined
            'search.biblio.type'?: string | undefined
            'search.biblio.institution'?: string | undefined
            'search.biblio.other_authors'?: string | undefined
            'search.biblio.publication'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_dicom': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_dicom_test': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.bio_dicom_test.PatientName'?: string | undefined
            'search.bio_dicom_test.PatientID'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_fasta': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_fastq': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_hmmer_index': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ome_tiff': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_assay': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_cohort': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_person': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.bio_ontology_person.gender'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_sample': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_ontology_study': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_sam': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_sf_pdb': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_sra': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_stockholm': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bio_taxonomy': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.bio_taxonomy.rank'?: string | undefined
            'search.bio_taxonomy.embl_code'?: string | undefined
            'search.bio_taxonomy.division'?: string | undefined
            'search.bio_taxonomy.inherited_div'?: boolean | undefined
            'search.bio_taxonomy.aliases'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/blogentry': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.blogentry.blogtext'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bolder_rental_housing': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_bolder_rental_housing.propaddr1'?: string | undefined
            'search.db_bolder_rental_housing.rentaltype'?: string | undefined
            'search.db_bolder_rental_housing.bldgtype'?: string | undefined
            'search.db_bolder_rental_housing.dwellunits'?: number | undefined
            'search.db_bolder_rental_housing.roomunits'?: number | undefined
            'search.db_bolder_rental_housing.neighbrhd'?: string | undefined
            'search.db_bolder_rental_housing.complexnm'?: string | undefined
            'search.db_bolder_rental_housing.name'?: string | undefined
            'search.db_bolder_rental_housing.persontype'?: string | undefined
            'search.db_bolder_rental_housing.company'?: string | undefined
            'search.db_bolder_rental_housing.engcompl'?: string | undefined
            'search.db_bolder_rental_housing.licenseexp'?: string | undefined
            'search.db_bolder_rental_housing.licensenum'?: string | undefined
            'search.db_bolder_rental_housing.ppl1_coname'?: string | undefined
            'search.db_bolder_rental_housing.person_1'?: string | undefined
            'search.db_bolder_rental_housing.ppl1_role'?: string | undefined
            'search.db_bolder_rental_housing.ppl2_coname'?: string | undefined
            'search.db_bolder_rental_housing.person_2'?: string | undefined
            'search.db_bolder_rental_housing.ppl2_role'?: string | undefined
            'search.db_bolder_rental_housing.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/bookmarks': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_bookmarks.title'?: string | undefined
            'search.db_bookmarks.url'?: string | undefined
            'search.db_bookmarks.category'?: string | undefined
            'search.db_bookmarks.date'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boston_crime': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boston_crime.offense'?: string | undefined
            'search.db_boston_crime.offense_code_group'?: string | undefined
            'search.db_boston_crime.offense_description'?: string | undefined
            'search.db_boston_crime.district'?: string | undefined
            'search.db_boston_crime.reporting_area'?: string | undefined
            'search.db_boston_crime.shooting'?: string | undefined
            'search.db_boston_crime.year'?: number | undefined
            'search.db_boston_crime.month'?: number | undefined
            'search.db_boston_crime.day_of_week'?: string | undefined
            'search.db_boston_crime.hour'?: number | undefined
            'search.db_boston_crime.street'?: string | undefined
            'search.db_boston_crime.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_2017_election_contributions': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_2017_election_contributions.committee'?: string | undefined
            'search.db_boulder_2017_election_contributions.last_name'?: string | undefined
            'search.db_boulder_2017_election_contributions.first_name'?: string | undefined
            'search.db_boulder_2017_election_contributions.street'?: string | undefined
            'search.db_boulder_2017_election_contributions.city'?: string | undefined
            'search.db_boulder_2017_election_contributions.state'?: string | undefined
            'search.db_boulder_2017_election_contributions.zip'?: string | undefined
            'search.db_boulder_2017_election_contributions.contribution_type'?: string | undefined
            'search.db_boulder_2017_election_contributions.from_candidate'?: string | undefined
            'search.db_boulder_2017_election_contributions.date'?: string | undefined
            'search.db_boulder_2017_election_contributions.amount'?: number | undefined
            'search.db_boulder_2017_election_contributions.match_amount'?: number | undefined
            'search.db_boulder_2017_election_contributions.ytd_amount'?: number | undefined
            'search.db_boulder_2017_election_contributions.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_campaign_contributions': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_campaign_contributions.committee'?: string | undefined
            'search.db_boulder_campaign_contributions.type'?: string | undefined
            'search.db_boulder_campaign_contributions.committee_num'?: string | undefined
            'search.db_boulder_campaign_contributions.candidate'?: string | undefined
            'search.db_boulder_campaign_contributions.filing_date'?: string | undefined
            'search.db_boulder_campaign_contributions.amended_date'?: string | undefined
            'search.db_boulder_campaign_contributions.official_filing'?: string | undefined
            'search.db_boulder_campaign_contributions.transaction_date'?: string | undefined
            'search.db_boulder_campaign_contributions.last_name'?: string | undefined
            'search.db_boulder_campaign_contributions.first_name'?: string | undefined
            'search.db_boulder_campaign_contributions.street'?: string | undefined
            'search.db_boulder_campaign_contributions.city'?: string | undefined
            'search.db_boulder_campaign_contributions.state'?: string | undefined
            'search.db_boulder_campaign_contributions.zip'?: string | undefined
            'search.db_boulder_campaign_contributions.contribution'?: number | undefined
            'search.db_boulder_campaign_contributions.contribution_type'?: string | undefined
            'search.db_boulder_campaign_contributions.anonymous'?: string | undefined
            'search.db_boulder_campaign_contributions.from_candidate'?: string | undefined
            'search.db_boulder_campaign_contributions.match'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_consulting_services': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_consulting_services.fund'?: string | undefined
            'search.db_boulder_consulting_services.department'?: string | undefined
            'search.db_boulder_consulting_services.organization'?: string | undefined
            'search.db_boulder_consulting_services.object'?: string | undefined
            'search.db_boulder_consulting_services.project'?: string | undefined
            'search.db_boulder_consulting_services.account_description'?: string | undefined
            'search.db_boulder_consulting_services.date'?: string | undefined
            'search.db_boulder_consulting_services.amount'?: number | undefined
            'search.db_boulder_consulting_services.purchase_order'?: string | undefined
            'search.db_boulder_consulting_services.vendor_name'?: string | undefined
            'search.db_boulder_consulting_services.comment'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_county_voter_details': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_county_voter_details.first_name'?: string | undefined
            'search.db_boulder_county_voter_details.last_name'?: string | undefined
            'search.db_boulder_county_voter_details.registration_date'?: string | undefined
            'search.db_boulder_county_voter_details.last_updated_date'?: string | undefined
            'search.db_boulder_county_voter_details.residential_address'?: string | undefined
            'search.db_boulder_county_voter_details.residential_city'?: string | undefined
            'search.db_boulder_county_voter_details.mailing_zip_code'?: string | undefined
            'search.db_boulder_county_voter_details.voter_status'?: string | undefined
            'search.db_boulder_county_voter_details.party'?: string | undefined
            'search.db_boulder_county_voter_details.gender'?: string | undefined
            'search.db_boulder_county_voter_details.birth_year'?: number | undefined
            'search.db_boulder_county_voter_details.precinct_code'?: string | undefined
            'search.db_boulder_county_voter_details.congressional'?: string | undefined
            'search.db_boulder_county_voter_details.state_senate'?: string | undefined
            'search.db_boulder_county_voter_details.state_house'?: string | undefined
            'search.db_boulder_county_voter_details.municipality'?: string | undefined
            'search.db_boulder_county_voter_details.city_ward_district'?: string | undefined
            'search.db_boulder_county_voter_details.school_district'?: string | undefined
            'search.db_boulder_county_voter_details.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_crimes': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_crimes.offense'?: string | undefined
            'search.db_boulder_crimes.reportdate'?: string | undefined
            'search.db_boulder_crimes.blockadd'?: string | undefined
            'search.db_boulder_crimes.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_emails': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_emails.sent_from'?: string | undefined
            'search.db_boulder_emails.sent_to'?: string | undefined
            'search.db_boulder_emails.sent_cc'?: string | undefined
            'search.db_boulder_emails.received_date'?: string | undefined
            'search.db_boulder_emails.email_subject'?: string | undefined
            'search.db_boulder_emails.plain_text_body'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/boulder_employee_salaries': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_boulder_employee_salaries.position_description'?: string | undefined
            'search.db_boulder_employee_salaries.department'?: string | undefined
            'search.db_boulder_employee_salaries.employee_flsa_exempt_y_n'?: string | undefined
            'search.db_boulder_employee_salaries.pay_range_min'?: number | undefined
            'search.db_boulder_employee_salaries.pay_range_max'?: number | undefined
            'search.db_boulder_employee_salaries.employee_hourly_pay_rate'?: number | undefined
            'search.db_boulder_employee_salaries.employee_fte_in_this_position'?: number | undefined
            'search.db_boulder_employee_salaries.employee_annual_base_salary'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/calendar': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/campaign_donors': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_campaign_donors.committee'?: string | undefined
            'search.db_campaign_donors.amount'?: number | undefined
            'search.db_campaign_donors.party'?: string | undefined
            'search.db_campaign_donors.donor'?: string | undefined
            'search.db_campaign_donors.gender'?: string | undefined
            'search.db_campaign_donors.city'?: string | undefined
            'search.db_campaign_donors.state'?: string | undefined
            'search.db_campaign_donors.zip_code'?: string | undefined
            'search.db_campaign_donors.employer'?: string | undefined
            'search.db_campaign_donors.occupation'?: string | undefined
            'search.db_campaign_donors.date'?: string | undefined
            'search.db_campaign_donors.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/campaign_expenditures': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_campaign_expenditures.committee'?: string | undefined
            'search.db_campaign_expenditures.amount'?: number | undefined
            'search.db_campaign_expenditures.party'?: string | undefined
            'search.db_campaign_expenditures.recipient'?: string | undefined
            'search.db_campaign_expenditures.city'?: string | undefined
            'search.db_campaign_expenditures.state'?: string | undefined
            'search.db_campaign_expenditures.zip_code'?: string | undefined
            'search.db_campaign_expenditures.transaction_date'?: string | undefined
            'search.db_campaign_expenditures.purpose'?: string | undefined
            'search.db_campaign_expenditures.memo_text'?: string | undefined
            'search.db_campaign_expenditures.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/cataloglink': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/cdm_grid': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/chatroom': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/colorado_water_rights': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_colorado_water_rights.structure_name'?: string | undefined
            'search.db_colorado_water_rights.structure_type'?: string | undefined
            'search.db_colorado_water_rights.water_source'?: string | undefined
            'search.db_colorado_water_rights.county'?: string | undefined
            'search.db_colorado_water_rights.adjudication_date'?: string | undefined
            'search.db_colorado_water_rights.appropriation_date'?: string | undefined
            'search.db_colorado_water_rights.priority_no'?: string | undefined
            'search.db_colorado_water_rights.decreed_uses'?: string | undefined
            'search.db_colorado_water_rights.net_absolute'?: number | undefined
            'search.db_colorado_water_rights.net_conditional'?: number | undefined
            'search.db_colorado_water_rights.net_apex_absolute'?: number | undefined
            'search.db_colorado_water_rights.net_apex_conditional'?: number | undefined
            'search.db_colorado_water_rights.decreed_units'?: string | undefined
            'search.db_colorado_water_rights.seasonal_limits'?: string | undefined
            'search.db_colorado_water_rights.comments'?: string | undefined
            'search.db_colorado_water_rights.more_information'?: string | undefined
            'search.db_colorado_water_rights.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/committee_donations': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_committee_donations.committee'?: string | undefined
            'search.db_committee_donations.amount'?: number | undefined
            'search.db_committee_donations.recipient'?: string | undefined
            'search.db_committee_donations.date'?: string | undefined
            'search.db_committee_donations.city'?: string | undefined
            'search.db_committee_donations.state'?: string | undefined
            'search.db_committee_donations.zip_code'?: string | undefined
            'search.db_committee_donations.employer'?: string | undefined
            'search.db_committee_donations.occupation'?: string | undefined
            'search.db_committee_donations.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/community_datahub': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/community_resource': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.community_resource.resource_type'?: string | undefined
            'search.community_resource.address'?: string | undefined
            'search.community_resource.city'?: string | undefined
            'search.community_resource.state'?: string | undefined
            'search.community_resource.zipcode'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/construction_permits': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_construction_permits.address'?: string | undefined
            'search.db_construction_permits.case_status'?: string | undefined
            'search.db_construction_permits.category'?: string | undefined
            'search.db_construction_permits.building_uses_and_work_scopes'?: string | undefined
            'search.db_construction_permits.permit_types'?: string | undefined
            'search.db_construction_permits.total_project_value'?: number | undefined
            'search.db_construction_permits.total_subpermit_value'?: number | undefined
            'search.db_construction_permits.applied'?: string | undefined
            'search.db_construction_permits.approved'?: string | undefined
            'search.db_construction_permits.issued'?: string | undefined
            'search.db_construction_permits.co_date'?: string | undefined
            'search.db_construction_permits.completion_date'?: string | undefined
            'search.db_construction_permits.new_res_unit'?: number | undefined
            'search.db_construction_permits.existing_res_unit'?: number | undefined
            'search.db_construction_permits.affordable_hsg_unit'?: number | undefined
            'search.db_construction_permits.new_sf'?: number | undefined
            'search.db_construction_permits.remodel_sf'?: number | undefined
            'search.db_construction_permits.narrative_description'?: string | undefined
            'search.db_construction_permits.primary_first_name'?: string | undefined
            'search.db_construction_permits.primary_last_name'?: string | undefined
            'search.db_construction_permits.primary_company'?: string | undefined
            'search.db_construction_permits.contractor_first_name'?: string | undefined
            'search.db_construction_permits.contractor_last_name'?: string | undefined
            'search.db_construction_permits.contractor_company'?: string | undefined
            'search.db_construction_permits.owner1_first_name'?: string | undefined
            'search.db_construction_permits.owner1_last_name'?: string | undefined
            'search.db_construction_permits.owner1_company'?: string | undefined
            'search.db_construction_permits.owner2_first_name'?: string | undefined
            'search.db_construction_permits.owner2_last_name'?: string | undefined
            'search.db_construction_permits.owner2_company'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/contact': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_contact.name'?: string | undefined
            'search.db_contact.institution'?: string | undefined
            'search.db_contact.email'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/db_co_indicators': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_db_co_indicators.geo_name'?: string | undefined
            'search.db_db_co_indicators.domain'?: string | undefined
            'search.db_db_co_indicators.subdomain'?: string | undefined
            'search.db_db_co_indicators.indicatorName'?: string | undefined
            'search.db_db_co_indicators.description'?: string | undefined
            'search.db_db_co_indicators.measure'?: number | undefined
            'search.db_db_co_indicators.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/earth_satellite_landsat': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.earth_satellite_landsat.sensor'?: string | undefined
            'search.earth_satellite_landsat.satellite'?: string | undefined
            'search.earth_satellite_landsat.wrs_path_number'?: number | undefined
            'search.earth_satellite_landsat.wrs_row_number'?: number | undefined
            'search.earth_satellite_landsat.ground_station'?: string | undefined
            'search.earth_satellite_landsat.archive_version_number'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/faq': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/fec_pacs': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_fec_pacs.committee'?: string | undefined
            'search.db_fec_pacs.total_receipts'?: number | undefined
            'search.db_fec_pacs.beginning_cash'?: number | undefined
            'search.db_fec_pacs.ending_cash'?: number | undefined
            'search.db_fec_pacs.contributions_from_individuals'?: number | undefined
            'search.db_fec_pacs.contributions_from_other_committees'?: number | undefined
            'search.db_fec_pacs.trans_from_affiliates'?: number | undefined
            'search.db_fec_pacs.contributions_to_other_committee'?: number | undefined
            'search.db_fec_pacs.contributions_from_candidate'?: number | undefined
            'search.db_fec_pacs.loans_from_candidate'?: number | undefined
            'search.db_fec_pacs.total_loans_received'?: number | undefined
            'search.db_fec_pacs.total_distributions'?: number | undefined
            'search.db_fec_pacs.transfers_to_affiliates'?: number | undefined
            'search.db_fec_pacs.refunds_to_individuals'?: number | undefined
            'search.db_fec_pacs.refends_to_othercommittees'?: number | undefined
            'search.db_fec_pacs.candidate_loan_repayments'?: number | undefined
            'search.db_fec_pacs.loan_repayments'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/feccandidates': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_feccandidates.name'?: string | undefined
            'search.db_feccandidates.party'?: string | undefined
            'search.db_feccandidates.state'?: string | undefined
            'search.db_feccandidates.district'?: string | undefined
            'search.db_feccandidates.gender'?: string | undefined
            'search.db_feccandidates.beginning_cash'?: number | undefined
            'search.db_feccandidates.ending_cash'?: number | undefined
            'search.db_feccandidates.total_receipts'?: number | undefined
            'search.db_feccandidates.total_indivual_contributions'?: number | undefined
            'search.db_feccandidates.transfers_from_committees'?: number | undefined
            'search.db_feccandidates.transfers_to_committees'?: number | undefined
            'search.db_feccandidates.total_disbursements'?: number | undefined
            'search.db_feccandidates.contributions_from_candidate'?: number | undefined
            'search.db_feccandidates.loans_from_candidates'?: number | undefined
            'search.db_feccandidates.other_loans'?: number | undefined
            'search.db_feccandidates.candidate_loan_repayments'?: number | undefined
            'search.db_feccandidates.other_loan_repayments'?: number | undefined
            'search.db_feccandidates.debts_owed_by'?: number | undefined
            'search.db_feccandidates.contributions_from_other_committees'?: number | undefined
            'search.db_feccandidates.contributions_from_party_committees'?: number | undefined
            'search.db_feccandidates.coverage_end_date'?: string | undefined
            'search.db_feccandidates.individual_refunds'?: number | undefined
            'search.db_feccandidates.committee_refunds'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/feed': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/file': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/fits_data': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.fits_data.origin'?: string | undefined
            'search.fits_data.telescope'?: string | undefined
            'search.fits_data.instrument'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/ftp': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gadgets_countdown': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gadgets_stock': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gadgets_weather': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gazeteer_census_tracts': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_gazeteer_census_tracts.state'?: string | undefined
            'search.db_gazeteer_census_tracts.state_fips'?: string | undefined
            'search.db_gazeteer_census_tracts.county_name'?: string | undefined
            'search.db_gazeteer_census_tracts.county_fips'?: string | undefined
            'search.db_gazeteer_census_tracts.census_tract_id'?: string | undefined
            'search.db_gazeteer_census_tracts.full_census_tract_id'?: string | undefined
            'search.db_gazeteer_census_tracts.land_area'?: number | undefined
            'search.db_gazeteer_census_tracts.water_area'?: number | undefined
            'search.db_gazeteer_census_tracts.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gazeteer_counties': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_gazeteer_counties.state_abbreviation'?: string | undefined
            'search.db_gazeteer_counties.state_fips'?: string | undefined
            'search.db_gazeteer_counties.county_fips'?: string | undefined
            'search.db_gazeteer_counties.full_county_fips'?: string | undefined
            'search.db_gazeteer_counties.county_name'?: string | undefined
            'search.db_gazeteer_counties.area_land'?: number | undefined
            'search.db_gazeteer_counties.area_water'?: number | undefined
            'search.db_gazeteer_counties.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_geojson': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_geotiff': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_gpx': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.geo_gpx.distance'?: number | undefined
            'search.geo_gpx.total_time'?: number | undefined
            'search.geo_gpx.moving_time'?: number | undefined
            'search.geo_gpx.speed'?: number | undefined
            'search.geo_gpx.elevation_gain'?: number | undefined
            'search.geo_gpx.elevation_loss'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_hdf5': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_kml': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_shapefile': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/geo_shapefile_fips': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/glossary': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/gridaggregation': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/group': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/hipchat_group': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/homepage': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/incident': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.incident.incidenttype'?: string | undefined
            'search.incident.cause'?: string | undefined
            'search.incident.state'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/jeopardy': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_jeopardy.question'?: string | undefined
            'search.db_jeopardy.answer'?: string | undefined
            'search.db_jeopardy.round'?: string | undefined
            'search.db_jeopardy.category'?: string | undefined
            'search.db_jeopardy.air_date'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/latlonimage': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/lidar_collection': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/lidar_las': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/lidar_lvis': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/link': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/localfiles': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/locations': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_locations.name'?: string | undefined
            'search.db_locations.type'?: string | undefined
            'search.db_locations.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/map_googlemap': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_audiofile': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_imageloop': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_photoalbum': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_video_channel': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_video_quicktime': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/media_youtubevideo': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/notes': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_notes.note'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/notes_jsonfile': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/notes_note': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/notes_notebook': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/nwsfeed': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/opendaplink': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/owl.class': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/owl.ontology': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/pasteitentry': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/point_text': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/police_stop_data': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_police_stop_data.race'?: string | undefined
            'search.db_police_stop_data.ethnicity'?: string | undefined
            'search.db_police_stop_data.sex'?: string | undefined
            'search.db_police_stop_data.minutes'?: number | undefined
            'search.db_police_stop_data.date'?: string | undefined
            'search.db_police_stop_data.address'?: string | undefined
            'search.db_police_stop_data.resident'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/poll': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_campaign': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_casestudy': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_casestudy.intended_use'?: string | undefined
            'search.project_casestudy.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_contribution': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_dataformat': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_dataformat.data_type'?: string | undefined
            'search.project_dataformat.field'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_dataset': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_dataset.dataset_id'?: string | undefined
            'search.project_dataset.data_type'?: string | undefined
            'search.project_dataset.data_level'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_deployment': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_experiment': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_fieldnote': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_gps_controlpoints': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_gps_raw': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_gps_rinex': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_instrument': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_learning_resource': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_learning_resource.topic'?: string | undefined
            'search.project_learning_resource.grade_level'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_meeting': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_meeting.topic'?: string | undefined
            'search.project_meeting.location'?: string | undefined
            'search.project_meeting.participants'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_organization': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_organization.organization_type'?: string | undefined
            'search.project_organization.status'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_program': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_project': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_service': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_service.service_type'?: string | undefined
            'search.project_service.provider'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_site': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_site.short_name'?: string | undefined
            'search.project_site.site_type'?: string | undefined
            'search.project_site.status'?: string | undefined
            'search.project_site.network'?: string | undefined
            'search.project_site.country'?: string | undefined
            'search.project_site.state'?: string | undefined
            'search.project_site.county'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_softwarepackage': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_softwarepackage.software_use'?: string | undefined
            'search.project_softwarepackage.software_type'?: string | undefined
            'search.project_softwarepackage.domain'?: string | undefined
            'search.project_softwarepackage.platform'?: string | undefined
            'search.project_softwarepackage.license'?: string | undefined
            'search.project_softwarepackage.status'?: string | undefined
            'search.project_softwarepackage.capabilities'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_standard_name': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_standard_name.unit'?: string | undefined
            'search.project_standard_name.aliases'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_surveylocation': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_term': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.project_term.value'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_visit': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/project_vocabulary': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/property_sales': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_property_sales.property_address'?: string | undefined
            'search.db_property_sales.city'?: string | undefined
            'search.db_property_sales.zipcode'?: string | undefined
            'search.db_property_sales.sale_price'?: number | undefined
            'search.db_property_sales.sale_date'?: string | undefined
            'search.db_property_sales.seller'?: string | undefined
            'search.db_property_sales.buyer'?: string | undefined
            'search.db_property_sales.type'?: string | undefined
            'search.db_property_sales.building_description'?: string | undefined
            'search.db_property_sales.building_design'?: string | undefined
            'search.db_property_sales.subdivision'?: string | undefined
            'search.db_property_sales.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/propertydb': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_propertydb.property_id'?: string | undefined
            'search.db_propertydb.owner'?: string | undefined
            'search.db_propertydb.address'?: string | undefined
            'search.db_propertydb.city'?: string | undefined
            'search.db_propertydb.state'?: string | undefined
            'search.db_propertydb.value'?: number | undefined
            'search.db_propertydb.building_type'?: string | undefined
            'search.db_propertydb.house_size'?: number | undefined
            'search.db_propertydb.lot_sqft'?: number | undefined
            'search.db_propertydb.lot_acres'?: number | undefined
            'search.db_propertydb.price_sqft'?: number | undefined
            'search.db_propertydb.location'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/python_notebook': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/slack_team': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/statusboard': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_statusboard.what'?: string | undefined
            'search.db_statusboard.status'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/sunrisesunset': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/tasks': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_tasks.title'?: string | undefined
            'search.db_tasks.priority'?: string | undefined
            'search.db_tasks.status'?: string | undefined
            'search.db_tasks.complete'?: number | undefined
            'search.db_tasks.assignedto'?: string | undefined
            'search.db_tasks.startdate'?: string | undefined
            'search.db_tasks.enddate'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/tmdbmovies': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_tmdbmovies.original_title'?: string | undefined
            'search.db_tmdbmovies.overview'?: string | undefined
            'search.db_tmdbmovies.budget'?: number | undefined
            'search.db_tmdbmovies.genres'?: string | undefined
            'search.db_tmdbmovies.homepage'?: string | undefined
            'search.db_tmdbmovies.movie_id'?: string | undefined
            'search.db_tmdbmovies.keywords'?: string | undefined
            'search.db_tmdbmovies.original_language'?: string | undefined
            'search.db_tmdbmovies.popularity'?: number | undefined
            'search.db_tmdbmovies.production_companies'?: string | undefined
            'search.db_tmdbmovies.production_countries'?: string | undefined
            'search.db_tmdbmovies.release_date'?: string | undefined
            'search.db_tmdbmovies.revenue'?: number | undefined
            'search.db_tmdbmovies.runtime'?: number | undefined
            'search.db_tmdbmovies.spoken_languages'?: string | undefined
            'search.db_tmdbmovies.status'?: string | undefined
            'search.db_tmdbmovies.tagline'?: string | undefined
            'search.db_tmdbmovies.title'?: string | undefined
            'search.db_tmdbmovies.vote_average'?: number | undefined
            'search.db_tmdbmovies.vote_count'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/todo': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_todo.checked'?: boolean | undefined
            'search.db_todo.title'?: string | undefined
            'search.db_todo.category'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/trip_event': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/trip_flight': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/trip_hotel': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/trip_report': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/trip_trip': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_awc_metar': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_awc_metar.site_id'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_biz_stockseries': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_bls_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_bls_series.survey_name'?: string | undefined
            'search.type_bls_series.measure_data_type'?: string | undefined
            'search.type_bls_series.industry'?: string | undefined
            'search.type_bls_series.sector'?: string | undefined
            'search.type_bls_series.area'?: string | undefined
            'search.type_bls_series.item'?: string | undefined
            'search.type_bls_series.seasonality'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_bls_survey': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_census_acs': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_census_acs.fields'?: string | undefined
            'search.type_census_acs.for_type'?: string | undefined
            'search.type_census_acs.in_type1'?: string | undefined
            'search.type_census_acs.in_type2'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_daymet': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_db_table': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_csv': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_doc': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_html': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_pdf': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_ppt': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_document_xls': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_drilsdown_casestudy': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_edgar_filing': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_edgar_filing.form_type'?: string | undefined
            'search.type_edgar_filing.company_name'?: string | undefined
            'search.type_edgar_filing.cik_number'?: string | undefined
            'search.type_edgar_filing.standard_industrial_classification'?: string | undefined
            'search.type_edgar_filing.irs_number'?: string | undefined
            'search.type_edgar_filing.state'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_eia_category': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_eia_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_featureserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_geometryserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_gpserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_imageserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_layer': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_esri_layer.layer_type'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_mapserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_restfolder': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_restserver': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_esri_restservice': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_extremes': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_extremes.region'?: string | undefined
            'search.type_extremes.variable'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_fred_category': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_fred_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_agency': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_route': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_gtfs_route.route_id'?: string | undefined
            'search.type_gtfs_route.stop_names'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_routes': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_stop': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_gtfs_stop.stop_id'?: string | undefined
            'search.type_gtfs_stop.stop_code'?: string | undefined
            'search.type_gtfs_stop.zone_id'?: string | undefined
            'search.type_gtfs_stop.location_type'?: string | undefined
            'search.type_gtfs_stop.wheelchair_boarding'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_stops': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_gtfs_trip': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_gtfs_trip.trip_id'?: string | undefined
            'search.type_gtfs_trip.stop_ids'?: string | undefined
            'search.type_gtfs_trip.wheelchair_accessible'?: string | undefined
            'search.type_gtfs_trip.bikes_allowed'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_hazarddata': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_hazarddata.source'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_hydro_colorado': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_hydro_colorado.site_id'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_idv_bundle': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_image': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_image_airport': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_image_webcam': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_mb': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_mb_collection': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_mb_point_basic': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_metameta_dictionary': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_metameta_dictionary.field_index'?: number | undefined
            'search.type_metameta_dictionary.dictionary_type'?: string | undefined
            'search.type_metameta_dictionary.short_name'?: string | undefined
            'search.type_metameta_dictionary.super_type'?: string | undefined
            'search.type_metameta_dictionary.isgroup'?: boolean | undefined
            'search.type_metameta_dictionary.handler_class'?: string | undefined
            'search.type_metameta_dictionary.properties'?: string | undefined
            'search.type_metameta_dictionary.wiki_text'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_metameta_field': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_metameta_field.field_index'?: number | undefined
            'search.type_metameta_field.field_id'?: string | undefined
            'search.type_metameta_field.datatype'?: string | undefined
            'search.type_metameta_field.enumeration_values'?: string | undefined
            'search.type_metameta_field.properties'?: string | undefined
            'search.type_metameta_field.database_column_size'?: number | undefined
            'search.type_metameta_field.missing'?: string | undefined
            'search.type_metameta_field.unit'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_nasaames': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_ncss': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_nitf': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ameriflux_level2': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_ameriflux_level2.site_id'?: string | undefined
            'search.type_point_ameriflux_level2.contact'?: string | undefined
            'search.type_point_ameriflux_level2.ecosystem_type'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_amrc_final': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_amrc_final.site_id'?: string | undefined
            'search.type_point_amrc_final.site_name'?: string | undefined
            'search.type_point_amrc_final.argos_id'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_amrc_freewave': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_amrc_freewave.station_name'?: string | undefined
            'search.type_point_amrc_freewave.format'?: string | undefined
            'search.type_point_amrc_freewave.datalogger_model'?: string | undefined
            'search.type_point_amrc_freewave.datalogger_serial'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_czo': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_gcnet': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_geomag_iaga2002': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_geomag_iaga2002.iaga_code'?: string | undefined
            'search.type_point_geomag_iaga2002.station_name'?: string | undefined
            'search.type_point_geomag_iaga2002.source_of_data'?: string | undefined
            'search.type_point_geomag_iaga2002.digital_sampling'?: string | undefined
            'search.type_point_geomag_iaga2002.data_interval'?: string | undefined
            'search.type_point_geomag_iaga2002.data_type'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_hydro_waterml': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_hydro_waterml.site_code'?: string | undefined
            'search.type_point_hydro_waterml.site_name'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_icebridge_atm_icessn': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_icebridge_atm_qfit': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_icebridge_mccords_irmcr2': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_icebridge_mccords_irmcr3': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_icebridge_paris': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_idv': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_inline': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ncdc_climate': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_netcdf': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_noaa_carbon': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_noaa_carbon.site_id'?: string | undefined
            'search.type_point_noaa_carbon.parameter'?: string | undefined
            'search.type_point_noaa_carbon.project'?: string | undefined
            'search.type_point_noaa_carbon.lab_id_number'?: string | undefined
            'search.type_point_noaa_carbon.measurement_group'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_noaa_flask_event': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_noaa_flask_event.site_id'?: string | undefined
            'search.type_point_noaa_flask_event.parameter'?: string | undefined
            'search.type_point_noaa_flask_event.project'?: string | undefined
            'search.type_point_noaa_flask_event.lab_id_number'?: string | undefined
            'search.type_point_noaa_flask_event.measurement_group'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_noaa_flask_month': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_noaa_flask_month.site_id'?: string | undefined
            'search.type_point_noaa_flask_month.parameter'?: string | undefined
            'search.type_point_noaa_flask_month.project'?: string | undefined
            'search.type_point_noaa_flask_month.lab_id_number'?: string | undefined
            'search.type_point_noaa_flask_month.measurement_group'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_noaa_madis': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_noaa_tower': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_noaa_tower.site_id'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_cnv': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_csv_sado_TTS': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_csv_sado_meteo': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_csv_sado_position': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_netcdf_glider': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_ocean_netcdf_track.platform'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_netcdf_track': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_ocean_netcdf_track.platform'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_ocean_ooi_dmgx': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_openaq': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_openaq.location'?: string | undefined
            'search.type_point_openaq.country'?: string | undefined
            'search.type_point_openaq.city'?: string | undefined
            'search.type_point_openaq.hours_offset'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_pbo_position_time_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_pbo_position_time_series.four_char_id'?: string | undefined
            'search.type_point_pbo_position_time_series.station_name'?: string | undefined
            'search.type_point_pbo_position_time_series.reference_frame'?: string | undefined
            'search.type_point_pbo_position_time_series.format_version'?: string | undefined
            'search.type_point_pbo_position_time_series.processing_center'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_simple_records': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_snotel': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_snotel.site_id'?: string | undefined
            'search.type_point_snotel.site_number'?: string | undefined
            'search.type_point_snotel.state'?: string | undefined
            'search.type_point_snotel.network'?: string | undefined
            'search.type_point_snotel.huc_name'?: string | undefined
            'search.type_point_snotel.huc_id'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_text': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_point_wsbb_ggp': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_point_wsbb_ggp.station'?: string | undefined
            'search.type_point_wsbb_ggp.instrument'?: string | undefined
            'search.type_point_wsbb_ggp.author'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_psd_monthly_climate_index': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.type_psd_monthly_climate_index.units'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_quandl_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_service_group': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_service_link': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_socrata_series': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_sounding_cod': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_sounding_frd': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_sounding_gsd': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_sounding_wyoming': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_tmy': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_tweet': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_usgs_gauge': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_virtual': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_wms_capabilities': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/type_wms_layer': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/ufo_sightings': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_ufo_sightings.datetime'?: string | undefined
            'search.db_ufo_sightings.city'?: string | undefined
            'search.db_ufo_sightings.state'?: string | undefined
            'search.db_ufo_sightings.country'?: string | undefined
            'search.db_ufo_sightings.shape'?: string | undefined
            'search.db_ufo_sightings.duration_seconds'?: number | undefined
            'search.db_ufo_sightings.duration_hours_min'?: string | undefined
            'search.db_ufo_sightings.comments'?: string | undefined
            'search.db_ufo_sightings.date_posted'?: string | undefined
            'search.db_ufo_sightings.latitude'?: number | undefined
            'search.db_ufo_sightings.longitude'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/us_places': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_us_places.feature_name'?: string | undefined
            'search.db_us_places.feature_class'?: string | undefined
            'search.db_us_places.state_alpha'?: string | undefined
            'search.db_us_places.county_name'?: string | undefined
            'search.db_us_places.location'?: string | undefined
            'search.db_us_places.elev_in_ft'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/vote_yesno': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.db_vote_yesno.vote'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/weblog': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repository/search/type/wikipage': {
      $get: {
        input: {
          query: {
            text?: string | undefined
            name?: string | undefined
            description?: string | undefined
            fromdate?: string | undefined
            todate?: string | undefined
            'createdate.from'?: string | undefined
            'createdate.to'?: string | undefined
            'changedate.from'?: string | undefined
            'changedate.to'?: string | undefined
            group?: string | undefined
            filesuffix?: string | undefined
            maxlatitude?: number | undefined
            minlongitude?: number | undefined
            minlatitude?: number | undefined
            maxlongitude?: number | undefined
            max?: number | undefined
            skip?: number | undefined
            'search.wikipage.wikitext'?: string | undefined
            'search.wikipage.category'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
