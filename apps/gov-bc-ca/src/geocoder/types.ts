declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/addresses.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            addressString?: string | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            maxResults?: number | undefined
            interpolation?: 'adaptive' | 'linear' | 'none' | undefined
            echo?: boolean | undefined
            brief?: boolean | undefined
            autoComplete?: boolean | undefined
            setBack?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            minScore?: number | undefined
            matchPrecision?: string | undefined
            matchPrecisionNot?: string | undefined
            siteName?: string | undefined
            unitDesignator?:
              | 'APT'
              | 'BLDG'
              | 'BSMT'
              | 'FLR'
              | 'LOBBY'
              | 'LWR'
              | 'PAD'
              | 'PH'
              | 'REAR'
              | 'RM'
              | 'SIDE'
              | 'SITE'
              | 'SUITE'
              | 'TH'
              | 'UNIT'
              | 'UPPR'
              | undefined
            unitNumber?: string | undefined
            unitNumberSuffix?: string | undefined
            civicNumber?: string | undefined
            civicNumberSuffix?: string | undefined
            streetName?: string | undefined
            streetType?: string | undefined
            streetDirection?:
              | 'N'
              | 'S'
              | 'E'
              | 'W'
              | 'O'
              | 'NE'
              | 'NO'
              | 'NW'
              | 'SE'
              | 'SO'
              | 'SW'
              | undefined
            streetQualifier?: string | undefined
            localityName?: string | undefined
            provinceCode?: string | undefined
            localities?: string | undefined
            notLocalities?: string | undefined
            bbox?: string | undefined
            centre?: string | undefined
            maxDistance?: number | undefined
            extrapolate?: boolean | undefined
            parcelPoint?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/intersections/near.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            maxDistance?: number | undefined
            outputSRS: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911
            maxResults?: number | undefined
            minDegree?: number | undefined
            maxDegree?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/intersections/nearest.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            maxDistance?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            minDegree?: number | undefined
            maxDegree?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/intersections/within.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            bbox: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            maxResults?: number | undefined
            minDegree?: number | undefined
            maxDegree?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/intersections/:intersectionID.{outputFormat}': {
      $get: {
        input: {
          param: {
            intersectionID: string
            outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz'
          }
        } & {
          query: {
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/occupants/addresses.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            addressString?: string | undefined
            tags?: string | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            maxResults?: number | undefined
            interpolation?: 'adaptive' | 'linear' | 'none' | undefined
            echo?: boolean | undefined
            brief?: boolean | undefined
            autoComplete?: boolean | undefined
            setBack?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            minScore?: number | undefined
            matchPrecision?: string | undefined
            matchPrecisionNot?: string | undefined
            siteName?: string | undefined
            unitDesignator?:
              | 'APT'
              | 'BLDG'
              | 'BSMT'
              | 'FLR'
              | 'LOBBY'
              | 'LWR'
              | 'PAD'
              | 'PH'
              | 'REAR'
              | 'RM'
              | 'SIDE'
              | 'SITE'
              | 'SUITE'
              | 'TH'
              | 'UNIT'
              | 'UPPR'
              | undefined
            unitNumber?: string | undefined
            unitNumberSuffix?: string | undefined
            civicNumber?: string | undefined
            civicNumberSuffix?: string | undefined
            streetName?: string | undefined
            streetType?: string | undefined
            streetDirection?:
              | 'N'
              | 'S'
              | 'E'
              | 'W'
              | 'O'
              | 'NE'
              | 'NO'
              | 'NW'
              | 'SE'
              | 'SO'
              | 'SW'
              | undefined
            streetQualifier?: string | undefined
            localityName?: string | undefined
            provinceCode?: string | undefined
            localities?: string | undefined
            notLocalities?: string | undefined
            bbox?: string | undefined
            centre?: string | undefined
            maxDistance?: number | undefined
            extrapolate?: boolean | undefined
            parcelPoint?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/occupants/near.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            tags?: string | undefined
            maxDistance?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            maxResults?: number | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/occupants/nearest.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            maxDistance?: number | undefined
            tags?: string | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/occupants/within.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            bbox: string
            tags?: string | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            maxResults?: number | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/occupants/:occupantID.{outputFormat}': {
      $get: {
        input: {
          param: {
            occupantID: string
            outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz'
          }
        } & {
          query: {
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/parcels/pids/:siteID.{outputFormat}': {
      $get: {
        input: {
          param: {
            siteID: string
            outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/near.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            maxDistance?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            maxResults?: number | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            setBack?: number | undefined
            brief?: boolean | undefined
            excludeUnits?: boolean | undefined
            onlyCivic?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/nearest.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            point: string
            maxDistance?: number | undefined
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            setBack?: number | undefined
            brief?: boolean | undefined
            excludeUnits?: boolean | undefined
            onlyCivic?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/within.{outputFormat}': {
      $get: {
        input: {
          param: { outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz' }
        } & {
          query: {
            bbox: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            maxResults?: number | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            setBack?: number | undefined
            brief?: boolean | undefined
            excludeUnits?: boolean | undefined
            onlyCivic?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/:siteID.{outputFormat}': {
      $get: {
        input: {
          param: {
            siteID: string
            outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz'
          }
        } & {
          query: {
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/:siteID/subsites.{outputFormat}': {
      $get: {
        input: {
          param: {
            siteID: string
            outputFormat: 'json' | 'geojson' | 'xhtml' | 'kml' | 'gml' | 'csv' | 'shpz'
          }
        } & {
          query: {
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            locationDescriptor?:
              | 'any'
              | 'accessPoint'
              | 'frontDoorPoint'
              | 'parcelPoint'
              | 'rooftopPoint'
              | 'routingPoint'
              | undefined
            brief?: boolean | undefined
            setBack?: number | undefined
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
