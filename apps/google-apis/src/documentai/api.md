<h1 id="cloud-document-ai-api">Cloud Document AI API v1beta3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.

Base URLs:

* <a href="https://documentai.googleapis.com/">https://documentai.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/document-ai/docs/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-document-ai-api-projects">projects</h1>

## documentai.projects.locations.processors.humanReviewConfig.reviewDocument

<a id="opIddocumentai.projects.locations.processors.humanReviewConfig.reviewDocument"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:reviewDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "entities": [
        {
          "confidence": 0,
          "id": "string",
          "mentionId": "string",
          "mentionText": "string",
          "normalizedValue": {
            "addressValue": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "booleanValue": true,
            "dateValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "datetimeValue": {
              "day": 0,
              "hours": 0,
              "minutes": 0,
              "month": 0,
              "nanos": 0,
              "seconds": 0,
              "timeZone": {
                "id": "string",
                "version": "string"
              },
              "utcOffset": "string",
              "year": 0
            },
            "floatValue": 0,
            "integerValue": 0,
            "moneyValue": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "text": "string"
          },
          "pageAnchor": {
            "pageRefs": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "layoutId": "string",
                "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
                "page": "string"
              }
            ]
          },
          "properties": [
            {}
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "redacted": true,
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "type": "string"
        }
      ],
      "entityRelations": [
        {
          "objectId": "string",
          "relation": "string",
          "subjectId": "string"
        }
      ],
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "mimeType": "string",
      "pages": [
        {
          "blocks": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "detectedBarcodes": [
            {
              "barcode": {
                "format": "string",
                "rawValue": "string",
                "valueFormat": "string"
              },
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "dimension": {
            "height": 0,
            "unit": "string",
            "width": 0
          },
          "formFields": [
            {
              "correctedKeyText": "string",
              "correctedValueText": "string",
              "fieldName": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "fieldValue": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "nameDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              },
              "valueDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "valueType": "string"
            }
          ],
          "image": {
            "content": "string",
            "height": 0,
            "mimeType": "string",
            "width": 0
          },
          "imageQualityScores": {
            "detectedDefects": [
              {
                "confidence": 0,
                "type": "string"
              }
            ],
            "qualityScore": 0
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "lines": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "pageNumber": 0,
          "paragraphs": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "symbols": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "tables": [
            {
              "bodyRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "headerRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "tokens": [
            {
              "detectedBreak": {
                "type": "TYPE_UNSPECIFIED"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "transforms": [
            {
              "cols": 0,
              "data": "string",
              "rows": 0,
              "type": 0
            }
          ],
          "visualElements": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "type": "string"
            }
          ]
        }
      ],
      "revisions": [
        {
          "agent": "string",
          "createTime": "string",
          "humanReview": {
            "state": "string",
            "stateMessage": "string"
          },
          "id": "string",
          "parent": [
            0
          ],
          "parentIds": [
            "string"
          ],
          "processor": "string"
        }
      ],
      "shardInfo": {
        "shardCount": "string",
        "shardIndex": "string",
        "textOffset": "string"
      },
      "text": "string",
      "textChanges": [
        {
          "changedText": "string",
          "provenance": [
            {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          ],
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        }
      ],
      "textStyles": [
        {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "fontFamily": "string",
          "fontSize": {
            "size": 0,
            "unit": "string"
          },
          "fontWeight": "string",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "textDecoration": "string",
          "textStyle": "string"
        }
      ],
      "uri": "string"
    },
    "documentSchema": {
      "description": "string",
      "displayName": "string",
      "entityTypes": [
        {
          "baseTypes": [
            "string"
          ],
          "displayName": "string",
          "enumValues": {
            "values": [
              "string"
            ]
          },
          "name": "string",
          "properties": [
            {
              "name": "string",
              "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
              "valueType": "string"
            }
          ]
        }
      ],
      "metadata": {
        "documentAllowMultipleLabels": true,
        "documentSplitter": true,
        "prefixedNamingOnProperties": true,
        "skipNamingValidation": true
      }
    },
    "enableSchemaValidation": true,
    "inlineDocument": {
      "content": "string",
      "entities": [
        {
          "confidence": 0,
          "id": "string",
          "mentionId": "string",
          "mentionText": "string",
          "normalizedValue": {
            "addressValue": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "booleanValue": true,
            "dateValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "datetimeValue": {
              "day": 0,
              "hours": 0,
              "minutes": 0,
              "month": 0,
              "nanos": 0,
              "seconds": 0,
              "timeZone": {
                "id": "string",
                "version": "string"
              },
              "utcOffset": "string",
              "year": 0
            },
            "floatValue": 0,
            "integerValue": 0,
            "moneyValue": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "text": "string"
          },
          "pageAnchor": {
            "pageRefs": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "layoutId": "string",
                "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
                "page": "string"
              }
            ]
          },
          "properties": [
            {}
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "redacted": true,
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "type": "string"
        }
      ],
      "entityRelations": [
        {
          "objectId": "string",
          "relation": "string",
          "subjectId": "string"
        }
      ],
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "mimeType": "string",
      "pages": [
        {
          "blocks": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "detectedBarcodes": [
            {
              "barcode": {
                "format": "string",
                "rawValue": "string",
                "valueFormat": "string"
              },
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "dimension": {
            "height": 0,
            "unit": "string",
            "width": 0
          },
          "formFields": [
            {
              "correctedKeyText": "string",
              "correctedValueText": "string",
              "fieldName": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "fieldValue": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "nameDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              },
              "valueDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "valueType": "string"
            }
          ],
          "image": {
            "content": "string",
            "height": 0,
            "mimeType": "string",
            "width": 0
          },
          "imageQualityScores": {
            "detectedDefects": [
              {
                "confidence": 0,
                "type": "string"
              }
            ],
            "qualityScore": 0
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "lines": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "pageNumber": 0,
          "paragraphs": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "symbols": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "tables": [
            {
              "bodyRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "headerRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "tokens": [
            {
              "detectedBreak": {
                "type": "TYPE_UNSPECIFIED"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "transforms": [
            {
              "cols": 0,
              "data": "string",
              "rows": 0,
              "type": 0
            }
          ],
          "visualElements": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "type": "string"
            }
          ]
        }
      ],
      "revisions": [
        {
          "agent": "string",
          "createTime": "string",
          "humanReview": {
            "state": "string",
            "stateMessage": "string"
          },
          "id": "string",
          "parent": [
            0
          ],
          "parentIds": [
            "string"
          ],
          "processor": "string"
        }
      ],
      "shardInfo": {
        "shardCount": "string",
        "shardIndex": "string",
        "textOffset": "string"
      },
      "text": "string",
      "textChanges": [
        {
          "changedText": "string",
          "provenance": [
            {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          ],
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        }
      ],
      "textStyles": [
        {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "fontFamily": "string",
          "fontSize": {
            "size": 0,
            "unit": "string"
          },
          "fontWeight": "string",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "textDecoration": "string",
          "textStyle": "string"
        }
      ],
      "uri": "string"
    },
    "priority": "DEFAULT"
  }'
```

`POST /v1beta3/{humanReviewConfig}:reviewDocument`

Send a document for Human Review. The input document should be processed by the specified processor.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "documentSchema": {
    "description": "string",
    "displayName": "string",
    "entityTypes": [
      {
        "baseTypes": [
          "string"
        ],
        "displayName": "string",
        "enumValues": {
          "values": [
            "string"
          ]
        },
        "name": "string",
        "properties": [
          {
            "name": "string",
            "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
            "valueType": "string"
          }
        ]
      }
    ],
    "metadata": {
      "documentAllowMultipleLabels": true,
      "documentSplitter": true,
      "prefixedNamingOnProperties": true,
      "skipNamingValidation": true
    }
  },
  "enableSchemaValidation": true,
  "inlineDocument": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "priority": "DEFAULT"
}
```

<h3 id="documentaiprojectslocationsprocessorshumanreviewconfigreviewdocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|humanReviewConfig|path|string|true|Required. The resource name of the HumanReviewConfig that the document will be reviewed with.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3ReviewDocumentRequest](#schemagoogleclouddocumentaiv1beta3reviewdocumentrequest)|false|none|
|» document|body|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|The document that needs human review.|
|» documentSchema|body|[GoogleCloudDocumentaiV1beta3DocumentSchema](#schemagoogleclouddocumentaiv1beta3documentschema)|false|The document schema of the human review task.|
|» enableSchemaValidation|body|boolean|false|Whether the validation should be performed on the ad-hoc review request.|
|» inlineDocument|body|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|An inline document proto.|
|» priority|body|string|false|The priority of the human review task.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» priority|DEFAULT|
|» priority|URGENT|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorshumanreviewconfigreviewdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processorTypes.get

<a id="opIddocumentai.projects.locations.processorTypes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{name}`

Gets a processor type detail.

<h3 id="documentaiprojectslocationsprocessortypesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor type resource name.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "allowCreation": true,
  "availableLocations": [
    {
      "locationId": "string"
    }
  ],
  "category": "string",
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "name": "string",
  "sampleDocumentUris": [
    "string"
  ],
  "type": "string"
}
```

<h3 id="documentaiprojectslocationsprocessortypesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ProcessorType](#schemagoogleclouddocumentaiv1beta3processortype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.delete

<a id="opIddocumentai.projects.locations.processors.processorVersions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta3/{name}`

Deletes the processor version, all artifacts under the processor version will be deleted.

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor version resource name to be deleted.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.list

<a id="opIddocumentai.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="documentaiprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="documentaiprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudLocationListLocationsResponse](#schemagooglecloudlocationlistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.batchProcess

<a id="opIddocumentai.projects.locations.processors.processorVersions.batchProcess"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:batchProcess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentOutputConfig": {
      "gcsOutputConfig": {
        "fieldMask": "string",
        "gcsUri": "string",
        "shardingConfig": {
          "pagesOverlap": 0,
          "pagesPerShard": 0
        }
      }
    },
    "inputConfigs": [
      {
        "gcsSource": "string",
        "mimeType": "string"
      }
    ],
    "inputDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    },
    "outputConfig": {
      "gcsDestination": "string"
    },
    "processOptions": {
      "ocrConfig": {
        "advancedOcrOptions": [
          "string"
        ],
        "enableImageQualityScores": true,
        "enableNativePdfParsing": true,
        "enableSymbol": true,
        "hints": {
          "languageHints": [
            "string"
          ]
        }
      }
    },
    "skipHumanReview": true
  }'
```

`POST /v1beta3/{name}:batchProcess`

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

> Body parameter

```json
{
  "documentOutputConfig": {
    "gcsOutputConfig": {
      "fieldMask": "string",
      "gcsUri": "string",
      "shardingConfig": {
        "pagesOverlap": 0,
        "pagesPerShard": 0
      }
    }
  },
  "inputConfigs": [
    {
      "gcsSource": "string",
      "mimeType": "string"
    }
  ],
  "inputDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": "string"
  },
  "processOptions": {
    "ocrConfig": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableImageQualityScores": true,
      "enableNativePdfParsing": true,
      "enableSymbol": true,
      "hints": {
        "languageHints": [
          "string"
        ]
      }
    }
  },
  "skipHumanReview": true
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsbatchprocess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3BatchProcessRequest](#schemagoogleclouddocumentaiv1beta3batchprocessrequest)|false|none|
|» documentOutputConfig|body|[GoogleCloudDocumentaiV1beta3DocumentOutputConfig](#schemagoogleclouddocumentaiv1beta3documentoutputconfig)|false|The overall output config for batch process.|
|» inputConfigs|body|[[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig](#schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig)]|false|The input config for each single document in the batch process.|
|» inputDocuments|body|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|The input documents for batch process.|
|» outputConfig|body|[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig](#schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig)|false|The overall output config for batch process.|
|» processOptions|body|[GoogleCloudDocumentaiV1beta3ProcessOptions](#schemagoogleclouddocumentaiv1beta3processoptions)|false|Inference-time options for the process API|
|» skipHumanReview|body|boolean|false|Whether Human Review feature should be skipped for this request. Default to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsbatchprocess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.operations.cancel

<a id="opIddocumentai.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta3/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="documentaiprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="documentaiprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.deploy

<a id="opIddocumentai.projects.locations.processors.processorVersions.deploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:deploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta3/{name}:deploy`

Deploys the processor version.

> Body parameter

```json
{}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsdeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor version resource name to be deployed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3deployprocessorversionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsdeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.disable

<a id="opIddocumentai.projects.locations.processors.disable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta3/{name}:disable`

Disables a processor

> Body parameter

```json
{}
```

<h3 id="documentaiprojectslocationsprocessorsdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor resource name to be disabled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3DisableProcessorRequest](#schemagoogleclouddocumentaiv1beta3disableprocessorrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.enable

<a id="opIddocumentai.projects.locations.processors.enable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta3/{name}:enable`

Enables a processor

> Body parameter

```json
{}
```

<h3 id="documentaiprojectslocationsprocessorsenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor resource name to be enabled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3EnableProcessorRequest](#schemagoogleclouddocumentaiv1beta3enableprocessorrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.process

<a id="opIddocumentai.projects.locations.processors.processorVersions.process"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:process \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "entities": [
        {
          "confidence": 0,
          "id": "string",
          "mentionId": "string",
          "mentionText": "string",
          "normalizedValue": {
            "addressValue": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "booleanValue": true,
            "dateValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "datetimeValue": {
              "day": 0,
              "hours": 0,
              "minutes": 0,
              "month": 0,
              "nanos": 0,
              "seconds": 0,
              "timeZone": {
                "id": "string",
                "version": "string"
              },
              "utcOffset": "string",
              "year": 0
            },
            "floatValue": 0,
            "integerValue": 0,
            "moneyValue": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "text": "string"
          },
          "pageAnchor": {
            "pageRefs": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "layoutId": "string",
                "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
                "page": "string"
              }
            ]
          },
          "properties": [
            {}
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "redacted": true,
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "type": "string"
        }
      ],
      "entityRelations": [
        {
          "objectId": "string",
          "relation": "string",
          "subjectId": "string"
        }
      ],
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "mimeType": "string",
      "pages": [
        {
          "blocks": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "detectedBarcodes": [
            {
              "barcode": {
                "format": "string",
                "rawValue": "string",
                "valueFormat": "string"
              },
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "dimension": {
            "height": 0,
            "unit": "string",
            "width": 0
          },
          "formFields": [
            {
              "correctedKeyText": "string",
              "correctedValueText": "string",
              "fieldName": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "fieldValue": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "nameDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              },
              "valueDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "valueType": "string"
            }
          ],
          "image": {
            "content": "string",
            "height": 0,
            "mimeType": "string",
            "width": 0
          },
          "imageQualityScores": {
            "detectedDefects": [
              {
                "confidence": 0,
                "type": "string"
              }
            ],
            "qualityScore": 0
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "lines": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "pageNumber": 0,
          "paragraphs": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "symbols": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "tables": [
            {
              "bodyRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "headerRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "tokens": [
            {
              "detectedBreak": {
                "type": "TYPE_UNSPECIFIED"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "transforms": [
            {
              "cols": 0,
              "data": "string",
              "rows": 0,
              "type": 0
            }
          ],
          "visualElements": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "type": "string"
            }
          ]
        }
      ],
      "revisions": [
        {
          "agent": "string",
          "createTime": "string",
          "humanReview": {
            "state": "string",
            "stateMessage": "string"
          },
          "id": "string",
          "parent": [
            0
          ],
          "parentIds": [
            "string"
          ],
          "processor": "string"
        }
      ],
      "shardInfo": {
        "shardCount": "string",
        "shardIndex": "string",
        "textOffset": "string"
      },
      "text": "string",
      "textChanges": [
        {
          "changedText": "string",
          "provenance": [
            {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          ],
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        }
      ],
      "textStyles": [
        {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "fontFamily": "string",
          "fontSize": {
            "size": 0,
            "unit": "string"
          },
          "fontWeight": "string",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "textDecoration": "string",
          "textStyle": "string"
        }
      ],
      "uri": "string"
    },
    "fieldMask": "string",
    "inlineDocument": {
      "content": "string",
      "entities": [
        {
          "confidence": 0,
          "id": "string",
          "mentionId": "string",
          "mentionText": "string",
          "normalizedValue": {
            "addressValue": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "booleanValue": true,
            "dateValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "datetimeValue": {
              "day": 0,
              "hours": 0,
              "minutes": 0,
              "month": 0,
              "nanos": 0,
              "seconds": 0,
              "timeZone": {
                "id": "string",
                "version": "string"
              },
              "utcOffset": "string",
              "year": 0
            },
            "floatValue": 0,
            "integerValue": 0,
            "moneyValue": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "text": "string"
          },
          "pageAnchor": {
            "pageRefs": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "layoutId": "string",
                "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
                "page": "string"
              }
            ]
          },
          "properties": [
            {}
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "redacted": true,
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "type": "string"
        }
      ],
      "entityRelations": [
        {
          "objectId": "string",
          "relation": "string",
          "subjectId": "string"
        }
      ],
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "mimeType": "string",
      "pages": [
        {
          "blocks": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "detectedBarcodes": [
            {
              "barcode": {
                "format": "string",
                "rawValue": "string",
                "valueFormat": "string"
              },
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "dimension": {
            "height": 0,
            "unit": "string",
            "width": 0
          },
          "formFields": [
            {
              "correctedKeyText": "string",
              "correctedValueText": "string",
              "fieldName": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "fieldValue": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "nameDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              },
              "valueDetectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "valueType": "string"
            }
          ],
          "image": {
            "content": "string",
            "height": 0,
            "mimeType": "string",
            "width": 0
          },
          "imageQualityScores": {
            "detectedDefects": [
              {
                "confidence": 0,
                "type": "string"
              }
            ],
            "qualityScore": 0
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "lines": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "pageNumber": 0,
          "paragraphs": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "symbols": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              }
            }
          ],
          "tables": [
            {
              "bodyRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "headerRows": [
                {
                  "cells": [
                    {
                      "colSpan": 0,
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ],
                      "layout": {
                        "boundingPoly": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "orientation": "ORIENTATION_UNSPECIFIED",
                        "textAnchor": {
                          "content": "string",
                          "textSegments": [
                            {
                              "endIndex": "string",
                              "startIndex": "string"
                            }
                          ]
                        }
                      },
                      "rowSpan": 0
                    }
                  ]
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "tokens": [
            {
              "detectedBreak": {
                "type": "TYPE_UNSPECIFIED"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "provenance": {
                "id": 0,
                "parents": [
                  {
                    "id": 0,
                    "index": 0,
                    "revision": 0
                  }
                ],
                "revision": 0,
                "type": "OPERATION_TYPE_UNSPECIFIED"
              }
            }
          ],
          "transforms": [
            {
              "cols": 0,
              "data": "string",
              "rows": 0,
              "type": 0
            }
          ],
          "visualElements": [
            {
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "type": "string"
            }
          ]
        }
      ],
      "revisions": [
        {
          "agent": "string",
          "createTime": "string",
          "humanReview": {
            "state": "string",
            "stateMessage": "string"
          },
          "id": "string",
          "parent": [
            0
          ],
          "parentIds": [
            "string"
          ],
          "processor": "string"
        }
      ],
      "shardInfo": {
        "shardCount": "string",
        "shardIndex": "string",
        "textOffset": "string"
      },
      "text": "string",
      "textChanges": [
        {
          "changedText": "string",
          "provenance": [
            {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          ],
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        }
      ],
      "textStyles": [
        {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "fontFamily": "string",
          "fontSize": {
            "size": 0,
            "unit": "string"
          },
          "fontWeight": "string",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          },
          "textDecoration": "string",
          "textStyle": "string"
        }
      ],
      "uri": "string"
    },
    "processOptions": {
      "ocrConfig": {
        "advancedOcrOptions": [
          "string"
        ],
        "enableImageQualityScores": true,
        "enableNativePdfParsing": true,
        "enableSymbol": true,
        "hints": {
          "languageHints": [
            "string"
          ]
        }
      }
    },
    "rawDocument": {
      "content": "string",
      "mimeType": "string"
    },
    "skipHumanReview": true
  }'
```

`POST /v1beta3/{name}:process`

Processes a single document.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "fieldMask": "string",
  "inlineDocument": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "processOptions": {
    "ocrConfig": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableImageQualityScores": true,
      "enableNativePdfParsing": true,
      "enableSymbol": true,
      "hints": {
        "languageHints": [
          "string"
        ]
      }
    }
  },
  "rawDocument": {
    "content": "string",
    "mimeType": "string"
  },
  "skipHumanReview": true
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsprocess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3ProcessRequest](#schemagoogleclouddocumentaiv1beta3processrequest)|false|none|
|» document|body|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|The document payload, the [content] and [mime_type] fields must be set.|
|» fieldMask|body|string(google-fieldmask)|false|Specifies which fields to include in ProcessResponse's document. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.|
|» inlineDocument|body|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|An inline document proto.|
|» processOptions|body|[GoogleCloudDocumentaiV1beta3ProcessOptions](#schemagoogleclouddocumentaiv1beta3processoptions)|false|Inference-time options for the process API|
|» rawDocument|body|[GoogleCloudDocumentaiV1beta3RawDocument](#schemagoogleclouddocumentaiv1beta3rawdocument)|false|A raw document content (bytes).|
|» skipHumanReview|body|boolean|false|Whether Human Review feature should be skipped for this request. Default to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "humanReviewOperation": "string",
  "humanReviewStatus": {
    "humanReviewOperation": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string"
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsprocess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ProcessResponse](#schemagoogleclouddocumentaiv1beta3processresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.undeploy

<a id="opIddocumentai.projects.locations.processors.processorVersions.undeploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:undeploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta3/{name}:undeploy`

Undeploys the processor version.

> Body parameter

```json
{}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsundeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The processor version resource name to be undeployed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3undeployprocessorversionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsundeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.evaluations.list

<a id="opIddocumentai.projects.locations.processors.processorVersions.evaluations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/evaluations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{parent}/evaluations`

Retrieves a set of evaluations for a given processor version.

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsevaluationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`|
|pageSize|query|integer|false|The standard list page size. If unspecified, at most 5 evaluations will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "evaluations": [
    {
      "allEntitiesMetrics": {
        "auprc": 0,
        "auprcExact": 0,
        "confidenceLevelMetrics": [
          {
            "confidenceLevel": 0,
            "metrics": {
              "f1Score": 0,
              "falseNegativesCount": 0,
              "falsePositivesCount": 0,
              "groundTruthDocumentCount": 0,
              "groundTruthOccurrencesCount": 0,
              "precision": 0,
              "predictedDocumentCount": 0,
              "predictedOccurrencesCount": 0,
              "recall": 0,
              "totalDocumentsCount": 0,
              "truePositivesCount": 0
            }
          }
        ],
        "confidenceLevelMetricsExact": [
          {
            "confidenceLevel": 0,
            "metrics": {
              "f1Score": 0,
              "falseNegativesCount": 0,
              "falsePositivesCount": 0,
              "groundTruthDocumentCount": 0,
              "groundTruthOccurrencesCount": 0,
              "precision": 0,
              "predictedDocumentCount": 0,
              "predictedOccurrencesCount": 0,
              "recall": 0,
              "totalDocumentsCount": 0,
              "truePositivesCount": 0
            }
          }
        ],
        "estimatedCalibrationError": 0,
        "estimatedCalibrationErrorExact": 0,
        "metricsType": "METRICS_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "documentCounters": {
        "evaluatedDocumentsCount": 0,
        "failedDocumentsCount": 0,
        "inputDocumentsCount": 0,
        "invalidDocumentsCount": 0
      },
      "entityMetrics": {
        "property1": {
          "auprc": 0,
          "auprcExact": 0,
          "confidenceLevelMetrics": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "confidenceLevelMetricsExact": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "estimatedCalibrationError": 0,
          "estimatedCalibrationErrorExact": 0,
          "metricsType": "METRICS_TYPE_UNSPECIFIED"
        },
        "property2": {
          "auprc": 0,
          "auprcExact": 0,
          "confidenceLevelMetrics": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "confidenceLevelMetricsExact": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "estimatedCalibrationError": 0,
          "estimatedCalibrationErrorExact": 0,
          "metricsType": "METRICS_TYPE_UNSPECIFIED"
        }
      },
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsevaluationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ListEvaluationsResponse](#schemagoogleclouddocumentaiv1beta3listevaluationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processorTypes.list

<a id="opIddocumentai.projects.locations.processorTypes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processorTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{parent}/processorTypes`

Lists the processor types that exist.

<h3 id="documentaiprojectslocationsprocessortypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location of processor type to list. The available processor types may depend on the allow-listing on projects. Format: `projects/{project}/locations/{location}`|
|pageSize|query|integer|false|The maximum number of processor types to return. If unspecified, at most 100 processor types will be returned. The maximum value is 500; values above 500 will be coerced to 500.|
|pageToken|query|string|false|Used to retrieve the next page of results, empty if at the end of the list.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "processorTypes": [
    {
      "allowCreation": true,
      "availableLocations": [
        {
          "locationId": "string"
        }
      ],
      "category": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "sampleDocumentUris": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

<h3 id="documentaiprojectslocationsprocessortypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse](#schemagoogleclouddocumentaiv1beta3listprocessortypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.list

<a id="opIddocumentai.projects.locations.processors.processorVersions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processorVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{parent}/processorVersions`

Lists all versions of a processor.

<h3 id="documentaiprojectslocationsprocessorsprocessorversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}`|
|pageSize|query|integer|false|The maximum number of processor versions to return. If unspecified, at most 10 processor versions will be returned. The maximum value is 20; values above 20 will be coerced to 20.|
|pageToken|query|string|false|We will return the processor versions sorted by creation time. The page token will point to the next processor version.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "processorVersions": [
    {
      "createTime": "string",
      "deprecationInfo": {
        "deprecationTime": "string",
        "replacementProcessorVersion": "string"
      },
      "displayName": "string",
      "documentSchema": {
        "description": "string",
        "displayName": "string",
        "entityTypes": [
          {
            "baseTypes": [
              "string"
            ],
            "displayName": "string",
            "enumValues": {
              "values": [
                "string"
              ]
            },
            "name": "string",
            "properties": [
              {
                "name": "string",
                "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
                "valueType": "string"
              }
            ]
          }
        ],
        "metadata": {
          "documentAllowMultipleLabels": true,
          "documentSplitter": true,
          "prefixedNamingOnProperties": true,
          "skipNamingValidation": true
        }
      },
      "googleManaged": true,
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "latestEvaluation": {
        "aggregateMetrics": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "aggregateMetricsExact": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "evaluation": "string",
        "operation": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse](#schemagoogleclouddocumentaiv1beta3listprocessorversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.importProcessorVersion

<a id="opIddocumentai.projects.locations.processors.processorVersions.importProcessorVersion"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processorVersions:importProcessorVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "processorVersionSource": "string"
  }'
```

`POST /v1beta3/{parent}/processorVersions:importProcessorVersion`

Imports a processor version from source processor version.

> Body parameter

```json
{
  "processorVersionSource": "string"
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsimportprocessorversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The destination processor name to create the processor version in. Format: `projects/{project}/locations/{location}/processors/{processor}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3importprocessorversionrequest)|false|none|
|» processorVersionSource|body|string|false|The source processor version to import from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsimportprocessorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.train

<a id="opIddocumentai.projects.locations.processors.processorVersions.train"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processorVersions:train \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "baseProcessorVersion": "string",
    "documentSchema": {
      "description": "string",
      "displayName": "string",
      "entityTypes": [
        {
          "baseTypes": [
            "string"
          ],
          "displayName": "string",
          "enumValues": {
            "values": [
              "string"
            ]
          },
          "name": "string",
          "properties": [
            {
              "name": "string",
              "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
              "valueType": "string"
            }
          ]
        }
      ],
      "metadata": {
        "documentAllowMultipleLabels": true,
        "documentSplitter": true,
        "prefixedNamingOnProperties": true,
        "skipNamingValidation": true
      }
    },
    "inputData": {
      "testDocuments": {
        "gcsDocuments": {
          "documents": [
            {
              "gcsUri": "string",
              "mimeType": "string"
            }
          ]
        },
        "gcsPrefix": {
          "gcsUriPrefix": "string"
        }
      },
      "trainingDocuments": {
        "gcsDocuments": {
          "documents": [
            {
              "gcsUri": "string",
              "mimeType": "string"
            }
          ]
        },
        "gcsPrefix": {
          "gcsUriPrefix": "string"
        }
      }
    },
    "processorVersion": {
      "createTime": "string",
      "deprecationInfo": {
        "deprecationTime": "string",
        "replacementProcessorVersion": "string"
      },
      "displayName": "string",
      "documentSchema": {
        "description": "string",
        "displayName": "string",
        "entityTypes": [
          {
            "baseTypes": [
              "string"
            ],
            "displayName": "string",
            "enumValues": {
              "values": [
                "string"
              ]
            },
            "name": "string",
            "properties": [
              {
                "name": "string",
                "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
                "valueType": "string"
              }
            ]
          }
        ],
        "metadata": {
          "documentAllowMultipleLabels": true,
          "documentSplitter": true,
          "prefixedNamingOnProperties": true,
          "skipNamingValidation": true
        }
      },
      "googleManaged": true,
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "latestEvaluation": {
        "aggregateMetrics": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "aggregateMetricsExact": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "evaluation": "string",
        "operation": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  }'
```

`POST /v1beta3/{parent}/processorVersions:train`

Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.

> Body parameter

```json
{
  "baseProcessorVersion": "string",
  "documentSchema": {
    "description": "string",
    "displayName": "string",
    "entityTypes": [
      {
        "baseTypes": [
          "string"
        ],
        "displayName": "string",
        "enumValues": {
          "values": [
            "string"
          ]
        },
        "name": "string",
        "properties": [
          {
            "name": "string",
            "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
            "valueType": "string"
          }
        ]
      }
    ],
    "metadata": {
      "documentAllowMultipleLabels": true,
      "documentSplitter": true,
      "prefixedNamingOnProperties": true,
      "skipNamingValidation": true
    }
  },
  "inputData": {
    "testDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    },
    "trainingDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    }
  },
  "processorVersion": {
    "createTime": "string",
    "deprecationInfo": {
      "deprecationTime": "string",
      "replacementProcessorVersion": "string"
    },
    "displayName": "string",
    "documentSchema": {
      "description": "string",
      "displayName": "string",
      "entityTypes": [
        {
          "baseTypes": [
            "string"
          ],
          "displayName": "string",
          "enumValues": {
            "values": [
              "string"
            ]
          },
          "name": "string",
          "properties": [
            {
              "name": "string",
              "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
              "valueType": "string"
            }
          ]
        }
      ],
      "metadata": {
        "documentAllowMultipleLabels": true,
        "documentSplitter": true,
        "prefixedNamingOnProperties": true,
        "skipNamingValidation": true
      }
    },
    "googleManaged": true,
    "kmsKeyName": "string",
    "kmsKeyVersionName": "string",
    "latestEvaluation": {
      "aggregateMetrics": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      },
      "aggregateMetricsExact": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      },
      "evaluation": "string",
      "operation": "string"
    },
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionstrain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3trainprocessorversionrequest)|false|none|
|» baseProcessorVersion|body|string|false|Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.|
|» documentSchema|body|[GoogleCloudDocumentaiV1beta3DocumentSchema](#schemagoogleclouddocumentaiv1beta3documentschema)|false|Optional. The schema the processor version will be trained with.|
|» inputData|body|[GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData](#schemagoogleclouddocumentaiv1beta3trainprocessorversionrequestinputdata)|false|Optional. The input data used to train the `ProcessorVersion`.|
|» processorVersion|body|[GoogleCloudDocumentaiV1beta3ProcessorVersion](#schemagoogleclouddocumentaiv1beta3processorversion)|false|Required. The processor version to be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionstrain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.list

<a id="opIddocumentai.projects.locations.processors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{parent}/processors`

Lists all processors which belong to this project.

<h3 id="documentaiprojectslocationsprocessorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`|
|pageSize|query|integer|false|The maximum number of processors to return. If unspecified, at most 50 processors will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|We will return the processors sorted by creation time. The page token will point to the next processor.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "processors": [
    {
      "createTime": "string",
      "defaultProcessorVersion": "string",
      "displayName": "string",
      "kmsKeyName": "string",
      "name": "string",
      "processEndpoint": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

<h3 id="documentaiprojectslocationsprocessorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3ListProcessorsResponse](#schemagoogleclouddocumentaiv1beta3listprocessorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.create

<a id="opIddocumentai.projects.locations.processors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string/processors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "defaultProcessorVersion": "string",
    "displayName": "string",
    "kmsKeyName": "string",
    "type": "string"
  }'
```

`POST /v1beta3/{parent}/processors`

Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.

> Body parameter

```json
{
  "createTime": "string",
  "defaultProcessorVersion": "string",
  "displayName": "string",
  "kmsKeyName": "string",
  "type": "string"
}
```

<h3 id="documentaiprojectslocationsprocessorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3Processor](#schemagoogleclouddocumentaiv1beta3processor)|false|none|
|» createTime|body|string(google-datetime)|false|The time the processor was created.|
|» defaultProcessorVersion|body|string|false|The default processor version.|
|» displayName|body|string|false|The display name of the processor.|
|» kmsKeyName|body|string|false|The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.|
|» type|body|string|false|The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc. To get a list of processors types, see FetchProcessorTypes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "defaultProcessorVersion": "string",
  "displayName": "string",
  "kmsKeyName": "string",
  "name": "string",
  "processEndpoint": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "string"
}
```

<h3 id="documentaiprojectslocationsprocessorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3Processor](#schemagoogleclouddocumentaiv1beta3processor)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.fetchProcessorTypes

<a id="opIddocumentai.projects.locations.fetchProcessorTypes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:fetchProcessorTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta3/{parent}:fetchProcessorTypes`

Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.

<h3 id="documentaiprojectslocationsfetchprocessortypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project of processor type to list. The available processor types may depend on the allow-listing on projects. Format: `projects/{project}/locations/{location}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "processorTypes": [
    {
      "allowCreation": true,
      "availableLocations": [
        {
          "locationId": "string"
        }
      ],
      "category": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "sampleDocumentUris": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

<h3 id="documentaiprojectslocationsfetchprocessortypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse](#schemagoogleclouddocumentaiv1beta3fetchprocessortypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.processorVersions.evaluateProcessorVersion

<a id="opIddocumentai.projects.locations.processors.processorVersions.evaluateProcessorVersion"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:evaluateProcessorVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "evaluationDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    }
  }'
```

`POST /v1beta3/{processorVersion}:evaluateProcessorVersion`

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

> Body parameter

```json
{
  "evaluationDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsevaluateprocessorversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|processorVersion|path|string|true|Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3evaluateprocessorversionrequest)|false|none|
|» evaluationDocuments|body|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|Optional. The documents used in the evaluation. If unspecified, use the processor's dataset as evaluation input.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorsprocessorversionsevaluateprocessorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## documentai.projects.locations.processors.setDefaultProcessorVersion

<a id="opIddocumentai.projects.locations.processors.setDefaultProcessorVersion"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta3/string:setDefaultProcessorVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultProcessorVersion": "string"
  }'
```

`POST /v1beta3/{processor}:setDefaultProcessorVersion`

Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

> Body parameter

```json
{
  "defaultProcessorVersion": "string"
}
```

<h3 id="documentaiprojectslocationsprocessorssetdefaultprocessorversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|processor|path|string|true|Required. The resource name of the Processor to change default version.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest](#schemagoogleclouddocumentaiv1beta3setdefaultprocessorversionrequest)|false|none|
|» defaultProcessorVersion|body|string|false|Required. The resource name of child ProcessorVersion to use as default. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{version}`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="documentaiprojectslocationsprocessorssetdefaultprocessorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata">GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "individualAutoLabelStatuses": [
    {
      "gcsUri": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "totalDocumentCount": 0
}
```

Metadata of the auto-labeling documents operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|individualAutoLabelStatuses|[[GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus](#schemagoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadataindividualautolabelstatus)]|false|none|The list of individual auto-labeling statuses of the dataset documents.|
|totalDocumentCount|integer(int32)|false|none|Total number of the auto-labeling documents.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus">GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadataindividualautolabelstatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadataindividualautolabelstatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3autolabeldocumentsmetadataindividualautolabelstatus"></a>

```json
{
  "gcsUri": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of individual documents in the auto-labeling process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUri|string|false|none|The gcs_uri of the auto-labeling document, which uniquely identifies a dataset document.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of the document auto-labeling.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse">GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3autolabeldocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3autolabeldocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3autolabeldocumentsresponse"></a>

```json
{}
```

The response proto of AutoLabelDocuments method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata">GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "errorDocumentCount": 0,
  "individualBatchDeleteStatuses": [
    {
      "documentId": {
        "gcsManagedDocId": {
          "cwDocId": "string",
          "gcsUri": "string"
        },
        "revisionRef": {
          "latestProcessorVersion": "string",
          "revisionCase": "REVISION_CASE_UNSPECIFIED",
          "revisionId": "string"
        }
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "totalDocumentCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|errorDocumentCount|integer(int32)|false|none|Total number of documents that failed to be deleted in storage.|
|individualBatchDeleteStatuses|[[GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus](#schemagoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadataindividualbatchdeletestatus)]|false|none|The list of response details of each document.|
|totalDocumentCount|integer(int32)|false|none|Total number of documents deleting from dataset.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus">GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadataindividualbatchdeletestatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadataindividualbatchdeletestatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchdeletedocumentsmetadataindividualbatchdeletestatus"></a>

```json
{
  "documentId": {
    "gcsManagedDocId": {
      "cwDocId": "string",
      "gcsUri": "string"
    },
    "revisionRef": {
      "latestProcessorVersion": "string",
      "revisionCase": "REVISION_CASE_UNSPECIFIED",
      "revisionId": "string"
    }
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of each individual document in the batch delete process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|[GoogleCloudDocumentaiUiv1beta3DocumentId](#schemagoogleclouddocumentaiuiv1beta3documentid)|false|none|The document id of the document.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of deleting the document in storage.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse">GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchdeletedocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchdeletedocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchdeletedocumentsresponse"></a>

```json
{}
```

Response of the delete documents operation.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata">GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "destDatasetType": "DATASET_SPLIT_TYPE_UNSPECIFIED",
  "destSplitType": "DATASET_SPLIT_TYPE_UNSPECIFIED",
  "individualBatchMoveStatuses": [
    {
      "documentId": {
        "gcsManagedDocId": {
          "cwDocId": "string",
          "gcsUri": "string"
        },
        "revisionRef": {
          "latestProcessorVersion": "string",
          "revisionCase": "REVISION_CASE_UNSPECIFIED",
          "revisionId": "string"
        }
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|destDatasetType|string|false|none|The destination dataset split type.|
|destSplitType|string|false|none|The destination dataset split type.|
|individualBatchMoveStatuses|[[GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus](#schemagoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadataindividualbatchmovestatus)]|false|none|The list of response details of each document.|

#### Enumerated Values

|Property|Value|
|---|---|
|destDatasetType|DATASET_SPLIT_TYPE_UNSPECIFIED|
|destDatasetType|DATASET_SPLIT_TRAIN|
|destDatasetType|DATASET_SPLIT_TEST|
|destDatasetType|DATASET_SPLIT_UNASSIGNED|
|destSplitType|DATASET_SPLIT_TYPE_UNSPECIFIED|
|destSplitType|DATASET_SPLIT_TRAIN|
|destSplitType|DATASET_SPLIT_TEST|
|destSplitType|DATASET_SPLIT_UNASSIGNED|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus">GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadataindividualbatchmovestatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadataindividualbatchmovestatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchmovedocumentsmetadataindividualbatchmovestatus"></a>

```json
{
  "documentId": {
    "gcsManagedDocId": {
      "cwDocId": "string",
      "gcsUri": "string"
    },
    "revisionRef": {
      "latestProcessorVersion": "string",
      "revisionCase": "REVISION_CASE_UNSPECIFIED",
      "revisionId": "string"
    }
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of each individual document in the batch move process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|[GoogleCloudDocumentaiUiv1beta3DocumentId](#schemagoogleclouddocumentaiuiv1beta3documentid)|false|none|The document id of the document.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of moving the document.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse">GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3batchmovedocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3batchmovedocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3batchmovedocumentsresponse"></a>

```json
{}
```

Response of the batch move documents operation.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata">GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3commonoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3commonoperationmetadata"></a>

```json
{
  "createTime": "string",
  "resource": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The common metadata for long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|resource|string|false|none|A related resource to this operation.|
|state|string|false|none|The state of the operation.|
|stateMessage|string|false|none|A message providing more details about the current state of processing.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELLING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata">GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3createlabelerpooloperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3createlabelerpooloperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3createlabelerpooloperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for CreateLabelerPool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata">GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3deletelabelerpooloperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3deletelabelerpooloperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3deletelabelerpooloperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for DeleteLabelerPool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata">GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3deleteprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3deleteprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3deleteprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3deleteprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3deleteprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3deleteprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3deployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3deployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3deployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for deploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3deployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3deployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3deployprocessorversionresponse"></a>

```json
{}
```

Response message for the deploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata">GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3disableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3disableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3disableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for disable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse">GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3disableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3disableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3disableprocessorresponse"></a>

```json
{}
```

Response message for the disable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DocumentId">GoogleCloudDocumentaiUiv1beta3DocumentId</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3documentid"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DocumentId"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3documentid"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3documentid"></a>

```json
{
  "gcsManagedDocId": {
    "cwDocId": "string",
    "gcsUri": "string"
  },
  "revisionRef": {
    "latestProcessorVersion": "string",
    "revisionCase": "REVISION_CASE_UNSPECIFIED",
    "revisionId": "string"
  }
}
```

Document Identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsManagedDocId|[GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId](#schemagoogleclouddocumentaiuiv1beta3documentidgcsmanageddocumentid)|false|none|Identifies a document uniquely within the scope of a dataset in the Cloud Storage option.|
|revisionRef|[GoogleCloudDocumentaiUiv1beta3RevisionRef](#schemagoogleclouddocumentaiuiv1beta3revisionref)|false|none|Points to a specific revision of the document if set.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId">GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3documentidgcsmanageddocumentid"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3documentidgcsmanageddocumentid"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3documentidgcsmanageddocumentid"></a>

```json
{
  "cwDocId": "string",
  "gcsUri": "string"
}
```

Identifies a document uniquely within the scope of a dataset in the Cloud Storage option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cwDocId|string|false|none|Id of the document (indexed) managed by Content Warehouse.|
|gcsUri|string|false|none|Required. The Cloud Storage uri where the actual document is stored.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata">GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3enableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3enableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3enableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for enable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse">GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3enableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3enableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3enableprocessorresponse"></a>

```json
{}
```

Response message for the enable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3evaluateprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3evaluateprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3evaluateprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3evaluateprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3evaluateprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3evaluateprocessorversionresponse"></a>

```json
{
  "evaluation": "string"
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluation|string|false|none|The resource name of the created evaluation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata">GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportdocumentsmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportdocumentsmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportdocumentsmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "individualExportStatuses": [
    {
      "documentId": {
        "gcsManagedDocId": {
          "cwDocId": "string",
          "gcsUri": "string"
        },
        "revisionRef": {
          "latestProcessorVersion": "string",
          "revisionCase": "REVISION_CASE_UNSPECIFIED",
          "revisionId": "string"
        }
      },
      "outputGcsDestination": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "splitExportStats": [
    {
      "splitType": "DATASET_SPLIT_TYPE_UNSPECIFIED",
      "totalDocumentCount": 0
    }
  ]
}
```

Metadata of the batch export documents operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|individualExportStatuses|[[GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus](#schemagoogleclouddocumentaiuiv1beta3exportdocumentsmetadataindividualexportstatus)]|false|none|The list of response details of each document.|
|splitExportStats|[[GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat](#schemagoogleclouddocumentaiuiv1beta3exportdocumentsmetadatasplitexportstat)]|false|none|The list of statistics for each dataset split type.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus">GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportdocumentsmetadataindividualexportstatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportdocumentsmetadataindividualexportstatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportdocumentsmetadataindividualexportstatus"></a>

```json
{
  "documentId": {
    "gcsManagedDocId": {
      "cwDocId": "string",
      "gcsUri": "string"
    },
    "revisionRef": {
      "latestProcessorVersion": "string",
      "revisionCase": "REVISION_CASE_UNSPECIFIED",
      "revisionId": "string"
    }
  },
  "outputGcsDestination": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of each individual document in the export process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|[GoogleCloudDocumentaiUiv1beta3DocumentId](#schemagoogleclouddocumentaiuiv1beta3documentid)|false|none|The path to source docproto of the document.|
|outputGcsDestination|string|false|none|The output_gcs_destination of the exported document if it was successful, otherwise empty.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of the exporting of the document.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat">GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportdocumentsmetadatasplitexportstat"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportdocumentsmetadatasplitexportstat"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportdocumentsmetadatasplitexportstat"></a>

```json
{
  "splitType": "DATASET_SPLIT_TYPE_UNSPECIFIED",
  "totalDocumentCount": 0
}
```

The statistic representing a dataset split type for this export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|splitType|string|false|none|The dataset split type.|
|totalDocumentCount|integer(int32)|false|none|Total number of documents with the given dataset split type to be exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|splitType|DATASET_SPLIT_TYPE_UNSPECIFIED|
|splitType|DATASET_SPLIT_TRAIN|
|splitType|DATASET_SPLIT_TEST|
|splitType|DATASET_SPLIT_UNASSIGNED|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse">GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportdocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportdocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportdocumentsresponse"></a>

```json
{}
```

The response proto of ExportDocuments method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

Metadata message associated with the ExportProcessorVersion operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The common metadata about the operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3exportprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3exportprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3exportprocessorversionresponse"></a>

```json
{
  "gcsUri": "string"
}
```

Response message associated with the ExportProcessorVersion operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUri|string|false|none|The Cloud Storage URI containing the output artifacts.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata">GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importdocumentsmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importdocumentsmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importdocumentsmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "importConfigValidationResults": [
    {
      "inputGcsSource": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "individualImportStatuses": [
    {
      "inputGcsSource": "string",
      "outputGcsDestination": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "totalDocumentCount": 0
}
```

Metadata of the import document operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|importConfigValidationResults|[[GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult](#schemagoogleclouddocumentaiuiv1beta3importdocumentsmetadataimportconfigvalidationresult)]|false|none|Validation statuses of the batch documents import config.|
|individualImportStatuses|[[GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus](#schemagoogleclouddocumentaiuiv1beta3importdocumentsmetadataindividualimportstatus)]|false|none|The list of response details of each document.|
|totalDocumentCount|integer(int32)|false|none|Total number of the documents that are qualified for importing.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult">GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importdocumentsmetadataimportconfigvalidationresult"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importdocumentsmetadataimportconfigvalidationresult"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importdocumentsmetadataimportconfigvalidationresult"></a>

```json
{
  "inputGcsSource": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The validation status of each import config. Status is set to errors if there is no documents to import in the import_config, or OK if the operation will try to proceed at least one document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputGcsSource|string|false|none|The source Cloud Storage URI specified in the import config.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The validation status of import config.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus">GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importdocumentsmetadataindividualimportstatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importdocumentsmetadataindividualimportstatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importdocumentsmetadataindividualimportstatus"></a>

```json
{
  "inputGcsSource": "string",
  "outputGcsDestination": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of each individual document in the import process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputGcsSource|string|false|none|The source Cloud Storage URI of the document.|
|outputGcsDestination|string|false|none|The output_gcs_destination of the processed document if it was successful, otherwise empty.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of the importing of the document.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse">GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importdocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importdocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importdocumentsresponse"></a>

```json
{}
```

Response of the import document operation.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for the ImportProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata for the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3importprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3importprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3importprocessorversionresponse"></a>

```json
{
  "processorVersion": "string"
}
```

The response message for the ImportProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersion|string|false|none|The destination processor version name.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata">GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3resyncdatasetmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3resyncdatasetmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3resyncdatasetmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "datasetResyncStatuses": [
    {
      "datasetInconsistencyType": "DATASET_INCONSISTENCY_TYPE_UNSPECIFIED",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "individualDocumentResyncStatuses": [
    {
      "documentId": {
        "gcsManagedDocId": {
          "cwDocId": "string",
          "gcsUri": "string"
        },
        "revisionRef": {
          "latestProcessorVersion": "string",
          "revisionCase": "REVISION_CASE_UNSPECIFIED",
          "revisionId": "string"
        }
      },
      "documentInconsistencyType": "DOCUMENT_INCONSISTENCY_TYPE_UNSPECIFIED",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

The metadata proto of ResyncDataset method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|datasetResyncStatuses|[[GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus](#schemagoogleclouddocumentaiuiv1beta3resyncdatasetmetadatadatasetresyncstatus)]|false|none|The list of dataset resync statuses. Not checked when `dataset_documents` is specified in ResyncRequest.|
|individualDocumentResyncStatuses|[[GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus](#schemagoogleclouddocumentaiuiv1beta3resyncdatasetmetadataindividualdocumentresyncstatus)]|false|none|The list of document resync statuses. The same document could have multiple `individual_document_resync_statuses` if it has multiple inconsistencies.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus">GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3resyncdatasetmetadatadatasetresyncstatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3resyncdatasetmetadatadatasetresyncstatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3resyncdatasetmetadatadatasetresyncstatus"></a>

```json
{
  "datasetInconsistencyType": "DATASET_INCONSISTENCY_TYPE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

Resync status against inconsistency types on the dataset level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetInconsistencyType|string|false|none|The type of the inconsistency of the dataset.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of resyncing the dataset with regards to the detected inconsistency. Empty if `validate_only` is true in the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|datasetInconsistencyType|DATASET_INCONSISTENCY_TYPE_UNSPECIFIED|
|datasetInconsistencyType|DATASET_INCONSISTENCY_TYPE_NO_STORAGE_MARKER|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus">GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3resyncdatasetmetadataindividualdocumentresyncstatus"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3resyncdatasetmetadataindividualdocumentresyncstatus"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3resyncdatasetmetadataindividualdocumentresyncstatus"></a>

```json
{
  "documentId": {
    "gcsManagedDocId": {
      "cwDocId": "string",
      "gcsUri": "string"
    },
    "revisionRef": {
      "latestProcessorVersion": "string",
      "revisionCase": "REVISION_CASE_UNSPECIFIED",
      "revisionId": "string"
    }
  },
  "documentInconsistencyType": "DOCUMENT_INCONSISTENCY_TYPE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

Resync status for each document per inconsistency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|[GoogleCloudDocumentaiUiv1beta3DocumentId](#schemagoogleclouddocumentaiuiv1beta3documentid)|false|none|The document identifier.|
|documentInconsistencyType|string|false|none|The type of document inconsistency.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status of resyncing the document with regards to the detected inconsistency. Empty if `validate_only` is true in the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentInconsistencyType|DOCUMENT_INCONSISTENCY_TYPE_UNSPECIFIED|
|documentInconsistencyType|DOCUMENT_INCONSISTENCY_TYPE_INVALID_DOCPROTO|
|documentInconsistencyType|DOCUMENT_INCONSISTENCY_TYPE_MISMATCHED_METADATA|
|documentInconsistencyType|DOCUMENT_INCONSISTENCY_TYPE_NO_PAGE_IMAGE|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse">GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3resyncdatasetresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3resyncdatasetresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3resyncdatasetresponse"></a>

```json
{}
```

The response proto of ResyncDataset method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3RevisionRef">GoogleCloudDocumentaiUiv1beta3RevisionRef</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3revisionref"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3RevisionRef"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3revisionref"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3revisionref"></a>

```json
{
  "latestProcessorVersion": "string",
  "revisionCase": "REVISION_CASE_UNSPECIFIED",
  "revisionId": "string"
}
```

The revision reference specifies which revision on the document to read.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestProcessorVersion|string|false|none|Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`|
|revisionCase|string|false|none|Reads the revision by the predefined case.|
|revisionId|string|false|none|Reads the revision given by the id.|

#### Enumerated Values

|Property|Value|
|---|---|
|revisionCase|REVISION_CASE_UNSPECIFIED|
|revisionCase|LATEST_HUMAN_REVIEW|
|revisionCase|LATEST_TIMESTAMP|
|revisionCase|BASE_OCR_REVISION|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3setdefaultprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3setdefaultprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3setdefaultprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for set default processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3setdefaultprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3setdefaultprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3setdefaultprocessorversionresponse"></a>

```json
{}
```

Response message for set default processor version method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3trainprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3trainprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3trainprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "testDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  },
  "trainingDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  }
}
```

The metadata that represents a processor version being created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|testDatasetValidation|[GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiuiv1beta3trainprocessorversionmetadatadatasetvalidation)|false|none|The test dataset validation information.|
|trainingDatasetValidation|[GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiuiv1beta3trainprocessorversionmetadatadatasetvalidation)|false|none|The training dataset validation information.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation">GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>

```json
{
  "datasetErrorCount": 0,
  "datasetErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "documentErrorCount": 0,
  "documentErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ]
}
```

The dataset validation information. This includes any and all errors with documents and the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetErrorCount|integer(int32)|false|none|The total number of dataset errors.|
|datasetErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.|
|documentErrorCount|integer(int32)|false|none|The total number of document errors.|
|documentErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3trainprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3trainprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3trainprocessorversionresponse"></a>

```json
{
  "processorVersion": "string"
}
```

The response for the TrainProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersion|string|false|none|The resource name of the processor version produced by training.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata">GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3undeployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3undeployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3undeployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for the undeploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse">GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3undeployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3undeployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3undeployprocessorversionresponse"></a>

```json
{}
```

Response message for the undeploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata">GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3updatedatasetoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3updatedatasetoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3updatedatasetoperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata">GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3updatehumanreviewconfigmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3updatehumanreviewconfigmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3updatehumanreviewconfigmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for updating the human review configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata">GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiuiv1beta3updatelabelerpooloperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiuiv1beta3updatelabelerpooloperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiuiv1beta3updatelabelerpooloperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for UpdateLabelerPool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiuiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1BatchProcessMetadata">GoogleCloudDocumentaiV1BatchProcessMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1batchprocessmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1BatchProcessMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1batchprocessmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1batchprocessmetadata"></a>

```json
{
  "createTime": "string",
  "individualProcessStatuses": [
    {
      "humanReviewStatus": {
        "humanReviewOperation": "string",
        "state": "STATE_UNSPECIFIED",
        "stateMessage": "string"
      },
      "inputGcsSource": "string",
      "outputGcsDestination": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The long running operation metadata for batch process method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|individualProcessStatuses|[[GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus](#schemagoogleclouddocumentaiv1batchprocessmetadataindividualprocessstatus)]|false|none|The list of response details of each document.|
|state|string|false|none|The state of the current batch processing.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the error message if the operation is failed.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|WAITING|
|state|RUNNING|
|state|SUCCEEDED|
|state|CANCELLING|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus">GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1batchprocessmetadataindividualprocessstatus"></a>
<a id="schema_GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus"></a>
<a id="tocSgoogleclouddocumentaiv1batchprocessmetadataindividualprocessstatus"></a>
<a id="tocsgoogleclouddocumentaiv1batchprocessmetadataindividualprocessstatus"></a>

```json
{
  "humanReviewStatus": {
    "humanReviewOperation": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string"
  },
  "inputGcsSource": "string",
  "outputGcsDestination": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of a each individual document in the batch process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|humanReviewStatus|[GoogleCloudDocumentaiV1HumanReviewStatus](#schemagoogleclouddocumentaiv1humanreviewstatus)|false|none|The status of human review on the processed document.|
|inputGcsSource|string|false|none|The source of the document, same as the [input_gcs_source] field in the request when the batch process started. The batch process is started by take snapshot of that document, since a user can move or change that document during the process.|
|outputGcsDestination|string|false|none|The output_gcs_destination (in the request as `output_gcs_destination`) of the processed document if it was successful, otherwise empty.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status processing the document.|

<h2 id="tocS_GoogleCloudDocumentaiV1BatchProcessResponse">GoogleCloudDocumentaiV1BatchProcessResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1batchprocessresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1BatchProcessResponse"></a>
<a id="tocSgoogleclouddocumentaiv1batchprocessresponse"></a>
<a id="tocsgoogleclouddocumentaiv1batchprocessresponse"></a>

```json
{}
```

Response message for batch process document method.

<h2 id="tocS_GoogleCloudDocumentaiV1CommonOperationMetadata">GoogleCloudDocumentaiV1CommonOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1commonoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1CommonOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1commonoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1commonoperationmetadata"></a>

```json
{
  "createTime": "string",
  "resource": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The common metadata for long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|resource|string|false|none|A related resource to this operation.|
|state|string|false|none|The state of the operation.|
|stateMessage|string|false|none|A message providing more details about the current state of processing.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELLING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudDocumentaiV1DeleteProcessorMetadata">GoogleCloudDocumentaiV1DeleteProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1deleteprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1DeleteProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1deleteprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1deleteprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata">GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1deleteprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1deleteprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1deleteprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1DeployProcessorVersionMetadata">GoogleCloudDocumentaiV1DeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1deployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1DeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1deployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1deployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for deploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1DeployProcessorVersionResponse">GoogleCloudDocumentaiV1DeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1deployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1DeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1deployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1deployprocessorversionresponse"></a>

```json
{}
```

Response message for the deploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1DisableProcessorMetadata">GoogleCloudDocumentaiV1DisableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1disableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1DisableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1disableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1disableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for disable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1DisableProcessorResponse">GoogleCloudDocumentaiV1DisableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1disableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1DisableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiv1disableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiv1disableprocessorresponse"></a>

```json
{}
```

Response message for the disable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiV1EnableProcessorMetadata">GoogleCloudDocumentaiV1EnableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1enableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1EnableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1enableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1enableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for enable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1EnableProcessorResponse">GoogleCloudDocumentaiV1EnableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1enableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1EnableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiv1enableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiv1enableprocessorresponse"></a>

```json
{}
```

Response message for the enable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata">GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1evaluateprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1evaluateprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1evaluateprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse">GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1evaluateprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1evaluateprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1evaluateprocessorversionresponse"></a>

```json
{
  "evaluation": "string"
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluation|string|false|none|The resource name of the created evaluation.|

<h2 id="tocS_GoogleCloudDocumentaiV1HumanReviewStatus">GoogleCloudDocumentaiV1HumanReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1humanreviewstatus"></a>
<a id="schema_GoogleCloudDocumentaiV1HumanReviewStatus"></a>
<a id="tocSgoogleclouddocumentaiv1humanreviewstatus"></a>
<a id="tocsgoogleclouddocumentaiv1humanreviewstatus"></a>

```json
{
  "humanReviewOperation": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string"
}
```

The status of human review on a processed document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|humanReviewOperation|string|false|none|The name of the operation triggered by the processed document. This field is populated only when the [state] is [HUMAN_REVIEW_IN_PROGRESS]. It has the same response type and metadata as the long running operation returned by [ReviewDocument] method.|
|state|string|false|none|The state of human review on the processing request.|
|stateMessage|string|false|none|A message providing more details about the human review state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SKIPPED|
|state|VALIDATION_PASSED|
|state|IN_PROGRESS|
|state|ERROR|

<h2 id="tocS_GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata">GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1reviewdocumentoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1reviewdocumentoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1reviewdocumentoperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "questionId": "string"
}
```

The long running operation metadata for review document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|questionId|string|false|none|The Crowd Compute question ID.|

<h2 id="tocS_GoogleCloudDocumentaiV1ReviewDocumentResponse">GoogleCloudDocumentaiV1ReviewDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1reviewdocumentresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1ReviewDocumentResponse"></a>
<a id="tocSgoogleclouddocumentaiv1reviewdocumentresponse"></a>
<a id="tocsgoogleclouddocumentaiv1reviewdocumentresponse"></a>

```json
{
  "gcsDestination": "string",
  "rejectionReason": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Response message for review document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|string|false|none|The Cloud Storage uri for the human reviewed document if the review is succeeded.|
|rejectionReason|string|false|none|The reason why the review is rejected by reviewer.|
|state|string|false|none|The state of the review operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|REJECTED|
|state|SUCCEEDED|

<h2 id="tocS_GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata">GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1setdefaultprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1setdefaultprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1setdefaultprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for set default processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse">GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1setdefaultprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1setdefaultprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1setdefaultprocessorversionresponse"></a>

```json
{}
```

Response message for set default processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1TrainProcessorVersionMetadata">GoogleCloudDocumentaiV1TrainProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1trainprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1TrainProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1trainprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1trainprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "testDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  },
  "trainingDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  }
}
```

The metadata that represents a processor version being created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|testDatasetValidation|[GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiv1trainprocessorversionmetadatadatasetvalidation)|false|none|The test dataset validation information.|
|trainingDatasetValidation|[GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiv1trainprocessorversionmetadatadatasetvalidation)|false|none|The training dataset validation information.|

<h2 id="tocS_GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation">GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1trainprocessorversionmetadatadatasetvalidation"></a>
<a id="schema_GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation"></a>
<a id="tocSgoogleclouddocumentaiv1trainprocessorversionmetadatadatasetvalidation"></a>
<a id="tocsgoogleclouddocumentaiv1trainprocessorversionmetadatadatasetvalidation"></a>

```json
{
  "datasetErrorCount": 0,
  "datasetErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "documentErrorCount": 0,
  "documentErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ]
}
```

The dataset validation information. This includes any and all errors with documents and the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetErrorCount|integer(int32)|false|none|The total number of dataset errors.|
|datasetErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.|
|documentErrorCount|integer(int32)|false|none|The total number of document errors.|
|documentErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.|

<h2 id="tocS_GoogleCloudDocumentaiV1TrainProcessorVersionResponse">GoogleCloudDocumentaiV1TrainProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1trainprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1TrainProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1trainprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1trainprocessorversionresponse"></a>

```json
{
  "processorVersion": "string"
}
```

The response for the TrainProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersion|string|false|none|The resource name of the processor version produced by training.|

<h2 id="tocS_GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata">GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1undeployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1undeployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1undeployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for the undeploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1CommonOperationMetadata](#schemagoogleclouddocumentaiv1commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1UndeployProcessorVersionResponse">GoogleCloudDocumentaiV1UndeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1undeployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1UndeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1undeployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1undeployprocessorversionresponse"></a>

```json
{}
```

Response message for the undeploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta1Barcode">GoogleCloudDocumentaiV1beta1Barcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1barcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1Barcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta1barcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta1barcode"></a>

```json
{
  "format": "string",
  "rawValue": "string",
  "valueFormat": "string"
}
```

Encodes the detailed information of a barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.|
|rawValue|string|false|none|Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.|
|valueFormat|string|false|none|Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse">GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1batchprocessdocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta1batchprocessdocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta1batchprocessdocumentsresponse"></a>

```json
{
  "responses": [
    {
      "inputConfig": {
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "outputConfig": {
        "gcsDestination": {
          "uri": "string"
        },
        "pagesPerShard": 0
      }
    }
  ]
}
```

Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudDocumentaiV1beta1ProcessDocumentResponse](#schemagoogleclouddocumentaiv1beta1processdocumentresponse)]|false|none|Responses for each individual document.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1BoundingPoly">GoogleCloudDocumentaiV1beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1boundingpoly"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1BoundingPoly"></a>
<a id="tocSgoogleclouddocumentaiv1beta1boundingpoly"></a>
<a id="tocsgoogleclouddocumentaiv1beta1boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudDocumentaiV1beta1NormalizedVertex](#schemagoogleclouddocumentaiv1beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudDocumentaiV1beta1Vertex](#schemagoogleclouddocumentaiv1beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1Document">GoogleCloudDocumentaiV1beta1Document</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1document"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1Document"></a>
<a id="tocSgoogleclouddocumentaiv1beta1document"></a>
<a id="tocsgoogleclouddocumentaiv1beta1document"></a>

```json
{
  "content": "string",
  "entities": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "entityRelations": [
    {
      "objectId": "string",
      "relation": "string",
      "subjectId": "string"
    }
  ],
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "mimeType": "string",
  "pages": [
    {
      "blocks": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "detectedBarcodes": [
        {
          "barcode": {
            "format": "string",
            "rawValue": "string",
            "valueFormat": "string"
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "dimension": {
        "height": 0,
        "unit": "string",
        "width": 0
      },
      "formFields": [
        {
          "correctedKeyText": "string",
          "correctedValueText": "string",
          "fieldName": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "fieldValue": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "nameDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "valueDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "valueType": "string"
        }
      ],
      "image": {
        "content": "string",
        "height": 0,
        "mimeType": "string",
        "width": 0
      },
      "imageQualityScores": {
        "detectedDefects": [
          {
            "confidence": 0,
            "type": "string"
          }
        ],
        "qualityScore": 0
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "lines": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "pageNumber": 0,
      "paragraphs": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "symbols": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "tables": [
        {
          "bodyRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "headerRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "tokens": [
        {
          "detectedBreak": {
            "type": "TYPE_UNSPECIFIED"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "transforms": [
        {
          "cols": 0,
          "data": "string",
          "rows": 0,
          "type": 0
        }
      ],
      "visualElements": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "type": "string"
        }
      ]
    }
  ],
  "revisions": [
    {
      "agent": "string",
      "createTime": "string",
      "humanReview": {
        "state": "string",
        "stateMessage": "string"
      },
      "id": "string",
      "parent": [
        0
      ],
      "parentIds": [
        "string"
      ],
      "processor": "string"
    }
  ],
  "shardInfo": {
    "shardCount": "string",
    "shardIndex": "string",
    "textOffset": "string"
  },
  "text": "string",
  "textChanges": [
    {
      "changedText": "string",
      "provenance": [
        {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        }
      ],
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      }
    }
  ],
  "textStyles": [
    {
      "backgroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "fontFamily": "string",
      "fontSize": {
        "size": 0,
        "unit": "string"
      },
      "fontWeight": "string",
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "textDecoration": "string",
      "textStyle": "string"
    }
  ],
  "uri": "string"
}
```

Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.|
|entities|[[GoogleCloudDocumentaiV1beta1DocumentEntity](#schemagoogleclouddocumentaiv1beta1documententity)]|false|none|A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.|
|entityRelations|[[GoogleCloudDocumentaiV1beta1DocumentEntityRelation](#schemagoogleclouddocumentaiv1beta1documententityrelation)]|false|none|Placeholder. Relationship among Document.entities.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|Any error that occurred while processing this document.|
|mimeType|string|false|none|An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.|
|pages|[[GoogleCloudDocumentaiV1beta1DocumentPage](#schemagoogleclouddocumentaiv1beta1documentpage)]|false|none|Visual page layout for the Document.|
|revisions|[[GoogleCloudDocumentaiV1beta1DocumentRevision](#schemagoogleclouddocumentaiv1beta1documentrevision)]|false|none|Placeholder. Revision history of this document.|
|shardInfo|[GoogleCloudDocumentaiV1beta1DocumentShardInfo](#schemagoogleclouddocumentaiv1beta1documentshardinfo)|false|none|Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.|
|text|string|false|none|Optional. UTF-8 encoded text in reading order from the document.|
|textChanges|[[GoogleCloudDocumentaiV1beta1DocumentTextChange](#schemagoogleclouddocumentaiv1beta1documenttextchange)]|false|none|Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.|
|textStyles|[[GoogleCloudDocumentaiV1beta1DocumentStyle](#schemagoogleclouddocumentaiv1beta1documentstyle)]|false|none|Styles for the Document.text.|
|uri|string|false|none|Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentEntity">GoogleCloudDocumentaiV1beta1DocumentEntity</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documententity"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentEntity"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documententity"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documententity"></a>

```json
{
  "confidence": 0,
  "id": "string",
  "mentionId": "string",
  "mentionText": "string",
  "normalizedValue": {
    "addressValue": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "booleanValue": true,
    "dateValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "datetimeValue": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "floatValue": 0,
    "integerValue": 0,
    "moneyValue": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "text": "string"
  },
  "pageAnchor": {
    "pageRefs": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "layoutId": "string",
        "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
        "page": "string"
      }
    ]
  },
  "properties": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "redacted": true,
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "type": "string"
}
```

An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Optional. Confidence of detected Schema entity. Range `[0, 1]`.|
|id|string|false|none|Optional. Canonical id. This will be a unique value in the entity list for this document.|
|mentionId|string|false|none|Optional. Deprecated. Use `id` field instead.|
|mentionText|string|false|none|Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.|
|normalizedValue|[GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue](#schemagoogleclouddocumentaiv1beta1documententitynormalizedvalue)|false|none|Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.|
|pageAnchor|[GoogleCloudDocumentaiV1beta1DocumentPageAnchor](#schemagoogleclouddocumentaiv1beta1documentpageanchor)|false|none|Optional. Represents the provenance of this entity wrt. the location on the page where it was found.|
|properties|[[GoogleCloudDocumentaiV1beta1DocumentEntity](#schemagoogleclouddocumentaiv1beta1documententity)]|false|none|Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|Optional. The history of this annotation.|
|redacted|boolean|false|none|Optional. Whether the entity will be redacted for de-identification purposes.|
|textAnchor|[GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta1documenttextanchor)|false|none|Optional. Provenance of the entity. Text anchor indexing into the Document.text.|
|type|string|false|none|Required. Entity type from a schema e.g. `Address`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue">GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documententitynormalizedvalue"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documententitynormalizedvalue"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documententitynormalizedvalue"></a>

```json
{
  "addressValue": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "booleanValue": true,
  "dateValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "datetimeValue": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "floatValue": 0,
  "integerValue": 0,
  "moneyValue": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "text": "string"
}
```

Parsed and normalized entity value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressValue|[GoogleTypePostalAddress](#schemagoogletypepostaladdress)|false|none|Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto|
|booleanValue|boolean|false|none|Boolean value. Can be used for entities with binary values, or for checkboxes.|
|dateValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto|
|datetimeValue|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto|
|floatValue|number(float)|false|none|Float value.|
|integerValue|integer(int32)|false|none|Integer value.|
|moneyValue|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto|
|text|string|false|none|Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentEntityRelation">GoogleCloudDocumentaiV1beta1DocumentEntityRelation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documententityrelation"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentEntityRelation"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documententityrelation"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documententityrelation"></a>

```json
{
  "objectId": "string",
  "relation": "string",
  "subjectId": "string"
}
```

Relationship between Entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|Object entity id.|
|relation|string|false|none|Relationship description.|
|subjectId|string|false|none|Subject entity id.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPage">GoogleCloudDocumentaiV1beta1DocumentPage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPage"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpage"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpage"></a>

```json
{
  "blocks": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "detectedBarcodes": [
    {
      "barcode": {
        "format": "string",
        "rawValue": "string",
        "valueFormat": "string"
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "dimension": {
    "height": 0,
    "unit": "string",
    "width": 0
  },
  "formFields": [
    {
      "correctedKeyText": "string",
      "correctedValueText": "string",
      "fieldName": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "fieldValue": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "nameDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "valueDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "valueType": "string"
    }
  ],
  "image": {
    "content": "string",
    "height": 0,
    "mimeType": "string",
    "width": 0
  },
  "imageQualityScores": {
    "detectedDefects": [
      {
        "confidence": 0,
        "type": "string"
      }
    ],
    "qualityScore": 0
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "lines": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "pageNumber": 0,
  "paragraphs": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "symbols": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "tables": [
    {
      "bodyRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "headerRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "tokens": [
    {
      "detectedBreak": {
        "type": "TYPE_UNSPECIFIED"
      },
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "transforms": [
    {
      "cols": 0,
      "data": "string",
      "rows": 0,
      "type": 0
    }
  ],
  "visualElements": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "type": "string"
    }
  ]
}
```

A page in a Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudDocumentaiV1beta1DocumentPageBlock](#schemagoogleclouddocumentaiv1beta1documentpageblock)]|false|none|A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.|
|detectedBarcodes|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode](#schemagoogleclouddocumentaiv1beta1documentpagedetectedbarcode)]|false|none|A list of detected barcodes.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|dimension|[GoogleCloudDocumentaiV1beta1DocumentPageDimension](#schemagoogleclouddocumentaiv1beta1documentpagedimension)|false|none|Physical dimension of the page.|
|formFields|[[GoogleCloudDocumentaiV1beta1DocumentPageFormField](#schemagoogleclouddocumentaiv1beta1documentpageformfield)]|false|none|A list of visually detected form fields on the page.|
|image|[GoogleCloudDocumentaiV1beta1DocumentPageImage](#schemagoogleclouddocumentaiv1beta1documentpageimage)|false|none|Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.|
|imageQualityScores|[GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores](#schemagoogleclouddocumentaiv1beta1documentpageimagequalityscores)|false|none|Image Quality Scores.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for the page.|
|lines|[[GoogleCloudDocumentaiV1beta1DocumentPageLine](#schemagoogleclouddocumentaiv1beta1documentpageline)]|false|none|A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.|
|pageNumber|integer(int32)|false|none|1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.|
|paragraphs|[[GoogleCloudDocumentaiV1beta1DocumentPageParagraph](#schemagoogleclouddocumentaiv1beta1documentpageparagraph)]|false|none|A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this page.|
|symbols|[[GoogleCloudDocumentaiV1beta1DocumentPageSymbol](#schemagoogleclouddocumentaiv1beta1documentpagesymbol)]|false|none|A list of visually detected symbols on the page.|
|tables|[[GoogleCloudDocumentaiV1beta1DocumentPageTable](#schemagoogleclouddocumentaiv1beta1documentpagetable)]|false|none|A list of visually detected tables on the page.|
|tokens|[[GoogleCloudDocumentaiV1beta1DocumentPageToken](#schemagoogleclouddocumentaiv1beta1documentpagetoken)]|false|none|A list of visually detected tokens on the page.|
|transforms|[[GoogleCloudDocumentaiV1beta1DocumentPageMatrix](#schemagoogleclouddocumentaiv1beta1documentpagematrix)]|false|none|Transformation matrices that were applied to the original document image to produce Page.image.|
|visualElements|[[GoogleCloudDocumentaiV1beta1DocumentPageVisualElement](#schemagoogleclouddocumentaiv1beta1documentpagevisualelement)]|false|none|A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageAnchor">GoogleCloudDocumentaiV1beta1DocumentPageAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageanchor"></a>

```json
{
  "pageRefs": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "layoutId": "string",
      "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
      "page": "string"
    }
  ]
}
```

Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageRefs|[[GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef](#schemagoogleclouddocumentaiv1beta1documentpageanchorpageref)]|false|none|One or more references to visual page elements|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef">GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageanchorpageref"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageanchorpageref"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageanchorpageref"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "layoutId": "string",
  "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
  "page": "string"
}
```

Represents a weak reference to a page element within a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta1BoundingPoly](#schemagoogleclouddocumentaiv1beta1boundingpoly)|false|none|Optional. Identifies the bounding polygon of a layout element on the page.|
|confidence|number(float)|false|none|Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.|
|layoutId|string|false|none|Optional. Deprecated. Use PageRef.bounding_poly instead.|
|layoutType|string|false|none|Optional. The type of the layout element that is being referenced if any.|
|page|string(int64)|false|none|Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.|

#### Enumerated Values

|Property|Value|
|---|---|
|layoutType|LAYOUT_TYPE_UNSPECIFIED|
|layoutType|BLOCK|
|layoutType|PARAGRAPH|
|layoutType|LINE|
|layoutType|TOKEN|
|layoutType|VISUAL_ELEMENT|
|layoutType|TABLE|
|layoutType|FORM_FIELD|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageBlock">GoogleCloudDocumentaiV1beta1DocumentPageBlock</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageblock"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageBlock"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageblock"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageblock"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Block.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode">GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagedetectedbarcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagedetectedbarcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagedetectedbarcode"></a>

```json
{
  "barcode": {
    "format": "string",
    "rawValue": "string",
    "valueFormat": "string"
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barcode|[GoogleCloudDocumentaiV1beta1Barcode](#schemagoogleclouddocumentaiv1beta1barcode)|false|none|Detailed barcode information of the DetectedBarcode.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for DetectedBarcode.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage">GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagedetectedlanguage"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagedetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range `[0, 1]`.|
|languageCode|string|false|none|The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageDimension">GoogleCloudDocumentaiV1beta1DocumentPageDimension</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagedimension"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageDimension"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagedimension"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagedimension"></a>

```json
{
  "height": 0,
  "unit": "string",
  "width": 0
}
```

Dimension for the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|false|none|Page height.|
|unit|string|false|none|Dimension unit.|
|width|number(float)|false|none|Page width.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageFormField">GoogleCloudDocumentaiV1beta1DocumentPageFormField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageformfield"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageFormField"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageformfield"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageformfield"></a>

```json
{
  "correctedKeyText": "string",
  "correctedValueText": "string",
  "fieldName": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "fieldValue": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "nameDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "valueDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "valueType": "string"
}
```

A form field detected on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correctedKeyText|string|false|none|Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.|
|correctedValueText|string|false|none|Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.|
|fieldName|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.|
|fieldValue|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for the FormField value.|
|nameDetectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages for name together with confidence.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this annotation.|
|valueDetectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages for value together with confidence.|
|valueType|string|false|none|If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageImage">GoogleCloudDocumentaiV1beta1DocumentPageImage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageimage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageImage"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageimage"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageimage"></a>

```json
{
  "content": "string",
  "height": 0,
  "mimeType": "string",
  "width": 0
}
```

Rendered image contents for this page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Raw byte content of the image.|
|height|integer(int32)|false|none|Height of the image in pixels.|
|mimeType|string|false|none|Encoding mime type for the image.|
|width|integer(int32)|false|none|Width of the image in pixels.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores">GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageimagequalityscores"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageimagequalityscores"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageimagequalityscores"></a>

```json
{
  "detectedDefects": [
    {
      "confidence": 0,
      "type": "string"
    }
  ],
  "qualityScore": 0
}
```

Image Quality Scores for the page image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedDefects|[[GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect](#schemagoogleclouddocumentaiv1beta1documentpageimagequalityscoresdetecteddefect)]|false|none|A list of detected defects.|
|qualityScore|number(float)|false|none|The overall quality score. Range `[0, 1]` where 1 is perfect quality.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect">GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageimagequalityscoresdetecteddefect"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageimagequalityscoresdetecteddefect"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageimagequalityscoresdetecteddefect"></a>

```json
{
  "confidence": 0,
  "type": "string"
}
```

Image Quality Defects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.|
|type|string|false|none|Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageLayout">GoogleCloudDocumentaiV1beta1DocumentPageLayout</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagelayout"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageLayout"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagelayout"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagelayout"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "orientation": "ORIENTATION_UNSPECIFIED",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

Visual element describing a layout unit on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta1BoundingPoly](#schemagoogleclouddocumentaiv1beta1boundingpoly)|false|none|The bounding polygon for the Layout.|
|confidence|number(float)|false|none|Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.|
|orientation|string|false|none|Detected orientation for the Layout.|
|textAnchor|[GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta1documenttextanchor)|false|none|Text anchor indexing into the Document.text.|

#### Enumerated Values

|Property|Value|
|---|---|
|orientation|ORIENTATION_UNSPECIFIED|
|orientation|PAGE_UP|
|orientation|PAGE_RIGHT|
|orientation|PAGE_DOWN|
|orientation|PAGE_LEFT|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageLine">GoogleCloudDocumentaiV1beta1DocumentPageLine</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageline"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageLine"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageline"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageline"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Line.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageMatrix">GoogleCloudDocumentaiV1beta1DocumentPageMatrix</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagematrix"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageMatrix"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagematrix"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagematrix"></a>

```json
{
  "cols": 0,
  "data": "string",
  "rows": 0,
  "type": 0
}
```

Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|integer(int32)|false|none|Number of columns in the matrix.|
|data|string(byte)|false|none|The matrix data.|
|rows|integer(int32)|false|none|Number of rows in the matrix.|
|type|integer(int32)|false|none|This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageParagraph">GoogleCloudDocumentaiV1beta1DocumentPageParagraph</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpageparagraph"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageParagraph"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpageparagraph"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpageparagraph"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of lines that a human would perceive as a paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageSymbol">GoogleCloudDocumentaiV1beta1DocumentPageSymbol</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagesymbol"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageSymbol"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagesymbol"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagesymbol"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected symbol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Symbol.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageTable">GoogleCloudDocumentaiV1beta1DocumentPageTable</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagetable"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageTable"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagetable"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagetable"></a>

```json
{
  "bodyRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "headerRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A table representation similar to HTML table structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyRows|[[GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta1documentpagetabletablerow)]|false|none|Body rows of the table.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|headerRows|[[GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta1documentpagetabletablerow)]|false|none|Header rows of the table.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Table.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this table.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell">GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagetabletablecell"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagetabletablecell"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagetabletablecell"></a>

```json
{
  "colSpan": 0,
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "rowSpan": 0
}
```

A cell representation inside the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colSpan|integer(int32)|false|none|How many columns this cell spans.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for TableCell.|
|rowSpan|integer(int32)|false|none|How many rows this cell spans.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow">GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagetabletablerow"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagetabletablerow"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagetabletablerow"></a>

```json
{
  "cells": [
    {
      "colSpan": 0,
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "rowSpan": 0
    }
  ]
}
```

A row of table cells.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell](#schemagoogleclouddocumentaiv1beta1documentpagetabletablecell)]|false|none|Cells that make up this row.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageToken">GoogleCloudDocumentaiV1beta1DocumentPageToken</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagetoken"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageToken"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagetoken"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagetoken"></a>

```json
{
  "detectedBreak": {
    "type": "TYPE_UNSPECIFIED"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A detected token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak](#schemagoogleclouddocumentaiv1beta1documentpagetokendetectedbreak)|false|none|Detected break at the end of a Token.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for Token.|
|provenance|[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak">GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagetokendetectedbreak"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagetokendetectedbreak"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagetokendetectedbreak"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

Detected break at the end of a Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|SPACE|
|type|WIDE_SPACE|
|type|HYPHEN|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentPageVisualElement">GoogleCloudDocumentaiV1beta1DocumentPageVisualElement</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentpagevisualelement"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentPageVisualElement"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentpagevisualelement"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentpagevisualelement"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "type": "string"
}
```

Detected non-text visual elements e.g. checkbox, signature etc. on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta1documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta1DocumentPageLayout](#schemagoogleclouddocumentaiv1beta1documentpagelayout)|false|none|Layout for VisualElement.|
|type|string|false|none|Type of the VisualElement.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentProvenance">GoogleCloudDocumentaiV1beta1DocumentProvenance</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentprovenance"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentProvenance"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentprovenance"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentprovenance"></a>

```json
{
  "id": 0,
  "parents": [
    {
      "id": 0,
      "index": 0,
      "revision": 0
    }
  ],
  "revision": 0,
  "type": "OPERATION_TYPE_UNSPECIFIED"
}
```

Structure to identify provenance relationships between annotations in different revisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The Id of this operation. Needs to be unique within the scope of the revision.|
|parents|[[GoogleCloudDocumentaiV1beta1DocumentProvenanceParent](#schemagoogleclouddocumentaiv1beta1documentprovenanceparent)]|false|none|References to the original elements that are replaced.|
|revision|integer(int32)|false|none|The index of the revision that produced this element.|
|type|string|false|none|The type of provenance operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OPERATION_TYPE_UNSPECIFIED|
|type|ADD|
|type|REMOVE|
|type|UPDATE|
|type|REPLACE|
|type|EVAL_REQUESTED|
|type|EVAL_APPROVED|
|type|EVAL_SKIPPED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentProvenanceParent">GoogleCloudDocumentaiV1beta1DocumentProvenanceParent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentprovenanceparent"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentProvenanceParent"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentprovenanceparent"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentprovenanceparent"></a>

```json
{
  "id": 0,
  "index": 0,
  "revision": 0
}
```

The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the parent provenance.|
|index|integer(int32)|false|none|The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.|
|revision|integer(int32)|false|none|The index of the index into current revision's parent_ids list.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentRevision">GoogleCloudDocumentaiV1beta1DocumentRevision</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentrevision"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentRevision"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentrevision"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentrevision"></a>

```json
{
  "agent": "string",
  "createTime": "string",
  "humanReview": {
    "state": "string",
    "stateMessage": "string"
  },
  "id": "string",
  "parent": [
    0
  ],
  "parentIds": [
    "string"
  ],
  "processor": "string"
}
```

Contains past or forward revisions of this document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|false|none|If the change was made by a person specify the name or id of that person.|
|createTime|string(google-datetime)|false|none|The time that the revision was created, internally generated by doc proto storage at the time of create.|
|humanReview|[GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview](#schemagoogleclouddocumentaiv1beta1documentrevisionhumanreview)|false|none|Human Review information of this revision.|
|id|string|false|none|Id of the revision, internally generated by doc proto storage. Unique within the context of the document.|
|parent|[integer(int32)]|false|none|The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.|
|parentIds|[string]|false|none|The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.|
|processor|string|false|none|If the annotation was made by processor identify the processor by its resource name.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview">GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentrevisionhumanreview"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentrevisionhumanreview"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentrevisionhumanreview"></a>

```json
{
  "state": "string",
  "stateMessage": "string"
}
```

Human Review information of the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Human review state. e.g. `requested`, `succeeded`, `rejected`.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentShardInfo">GoogleCloudDocumentaiV1beta1DocumentShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentshardinfo"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentShardInfo"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentshardinfo"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentshardinfo"></a>

```json
{
  "shardCount": "string",
  "shardIndex": "string",
  "textOffset": "string"
}
```

For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shardCount|string(int64)|false|none|Total number of shards.|
|shardIndex|string(int64)|false|none|The 0-based index of this shard.|
|textOffset|string(int64)|false|none|The index of the first character in Document.text in the overall document global text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentStyle">GoogleCloudDocumentaiV1beta1DocumentStyle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentstyle"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentStyle"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentstyle"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentstyle"></a>

```json
{
  "backgroundColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "fontFamily": "string",
  "fontSize": {
    "size": 0,
    "unit": "string"
  },
  "fontWeight": "string",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "textDecoration": "string",
  "textStyle": "string"
}
```

Annotation for common text style attributes. This adheres to CSS conventions as much as possible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text background color.|
|color|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text color.|
|fontFamily|string|false|none|Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp|
|fontSize|[GoogleCloudDocumentaiV1beta1DocumentStyleFontSize](#schemagoogleclouddocumentaiv1beta1documentstylefontsize)|false|none|Font size.|
|fontWeight|string|false|none|Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp|
|textAnchor|[GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta1documenttextanchor)|false|none|Text anchor indexing into the Document.text.|
|textDecoration|string|false|none|Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp|
|textStyle|string|false|none|Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentStyleFontSize">GoogleCloudDocumentaiV1beta1DocumentStyleFontSize</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documentstylefontsize"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentStyleFontSize"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documentstylefontsize"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documentstylefontsize"></a>

```json
{
  "size": 0,
  "unit": "string"
}
```

Font size with unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|number(float)|false|none|Font size for the text.|
|unit|string|false|none|Unit for the font size. Follows CSS naming (in, px, pt, etc.).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentTextAnchor">GoogleCloudDocumentaiV1beta1DocumentTextAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documenttextanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentTextAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documenttextanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documenttextanchor"></a>

```json
{
  "content": "string",
  "textSegments": [
    {
      "endIndex": "string",
      "startIndex": "string"
    }
  ]
}
```

Text reference indexing into the Document.text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.|
|textSegments|[[GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment](#schemagoogleclouddocumentaiv1beta1documenttextanchortextsegment)]|false|none|The text segments from the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment">GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documenttextanchortextsegment"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documenttextanchortextsegment"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documenttextanchortextsegment"></a>

```json
{
  "endIndex": "string",
  "startIndex": "string"
}
```

A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endIndex|string(int64)|false|none|TextSegment half open end UTF-8 char index in the Document.text.|
|startIndex|string(int64)|false|none|TextSegment start UTF-8 char index in the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1DocumentTextChange">GoogleCloudDocumentaiV1beta1DocumentTextChange</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1documenttextchange"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1DocumentTextChange"></a>
<a id="tocSgoogleclouddocumentaiv1beta1documenttextchange"></a>
<a id="tocsgoogleclouddocumentaiv1beta1documenttextchange"></a>

```json
{
  "changedText": "string",
  "provenance": [
    {
      "id": 0,
      "parents": [
        {
          "id": 0,
          "index": 0,
          "revision": 0
        }
      ],
      "revision": 0,
      "type": "OPERATION_TYPE_UNSPECIFIED"
    }
  ],
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

This message is used for text changes aka. OCR corrections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changedText|string|false|none|The text that replaces the text identified in the `text_anchor`.|
|provenance|[[GoogleCloudDocumentaiV1beta1DocumentProvenance](#schemagoogleclouddocumentaiv1beta1documentprovenance)]|false|none|The history of this annotation.|
|textAnchor|[GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta1documenttextanchor)|false|none|Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1GcsDestination">GoogleCloudDocumentaiV1beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1gcsdestination"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1GcsDestination"></a>
<a id="tocSgoogleclouddocumentaiv1beta1gcsdestination"></a>
<a id="tocsgoogleclouddocumentaiv1beta1gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output file will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|none|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1GcsSource">GoogleCloudDocumentaiV1beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1gcssource"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1GcsSource"></a>
<a id="tocSgoogleclouddocumentaiv1beta1gcssource"></a>
<a id="tocsgoogleclouddocumentaiv1beta1gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input file will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|none|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1InputConfig">GoogleCloudDocumentaiV1beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1inputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1InputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta1inputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta1inputconfig"></a>

```json
{
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GoogleCloudDocumentaiV1beta1GcsSource](#schemagoogleclouddocumentaiv1beta1gcssource)|false|none|The Google Cloud Storage location to read the input from. This must be a single file.|
|mimeType|string|false|none|Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1NormalizedVertex">GoogleCloudDocumentaiV1beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1normalizedvertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1NormalizedVertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta1normalizedvertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta1normalizedvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1OperationMetadata">GoogleCloudDocumentaiV1beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1operationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1OperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta1operationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta1operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

Contains metadata for the BatchProcessDocuments operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|state|string|false|none|The state of the current batch processing.|
|stateMessage|string|false|none|A message providing more details about the current state of processing.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACCEPTED|
|state|WAITING|
|state|RUNNING|
|state|SUCCEEDED|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1OutputConfig">GoogleCloudDocumentaiV1beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1outputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1OutputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta1outputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta1outputconfig"></a>

```json
{
  "gcsDestination": {
    "uri": "string"
  },
  "pagesPerShard": 0
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDocumentaiV1beta1GcsDestination](#schemagoogleclouddocumentaiv1beta1gcsdestination)|false|none|The Google Cloud Storage location to write the output to.|
|pagesPerShard|integer(int32)|false|none|The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1ProcessDocumentResponse">GoogleCloudDocumentaiV1beta1ProcessDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1processdocumentresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1ProcessDocumentResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta1processdocumentresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta1processdocumentresponse"></a>

```json
{
  "inputConfig": {
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "uri": "string"
    },
    "pagesPerShard": 0
  }
}
```

Response to a single document processing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[GoogleCloudDocumentaiV1beta1InputConfig](#schemagoogleclouddocumentaiv1beta1inputconfig)|false|none|Information about the input file. This is the same as the corresponding input config in the request.|
|outputConfig|[GoogleCloudDocumentaiV1beta1OutputConfig](#schemagoogleclouddocumentaiv1beta1outputconfig)|false|none|The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta1Vertex">GoogleCloudDocumentaiV1beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta1vertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta1Vertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta1vertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta1vertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|false|none|X coordinate.|
|y|integer(int32)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2Barcode">GoogleCloudDocumentaiV1beta2Barcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2barcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2Barcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta2barcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta2barcode"></a>

```json
{
  "format": "string",
  "rawValue": "string",
  "valueFormat": "string"
}
```

Encodes the detailed information of a barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.|
|rawValue|string|false|none|Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.|
|valueFormat|string|false|none|Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse">GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2batchprocessdocumentsresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta2batchprocessdocumentsresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta2batchprocessdocumentsresponse"></a>

```json
{
  "responses": [
    {
      "inputConfig": {
        "contents": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "outputConfig": {
        "gcsDestination": {
          "uri": "string"
        },
        "pagesPerShard": 0
      }
    }
  ]
}
```

Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudDocumentaiV1beta2ProcessDocumentResponse](#schemagoogleclouddocumentaiv1beta2processdocumentresponse)]|false|none|Responses for each individual document.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2BoundingPoly">GoogleCloudDocumentaiV1beta2BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2boundingpoly"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2BoundingPoly"></a>
<a id="tocSgoogleclouddocumentaiv1beta2boundingpoly"></a>
<a id="tocsgoogleclouddocumentaiv1beta2boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudDocumentaiV1beta2NormalizedVertex](#schemagoogleclouddocumentaiv1beta2normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudDocumentaiV1beta2Vertex](#schemagoogleclouddocumentaiv1beta2vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2Document">GoogleCloudDocumentaiV1beta2Document</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2document"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2Document"></a>
<a id="tocSgoogleclouddocumentaiv1beta2document"></a>
<a id="tocsgoogleclouddocumentaiv1beta2document"></a>

```json
{
  "content": "string",
  "entities": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "entityRelations": [
    {
      "objectId": "string",
      "relation": "string",
      "subjectId": "string"
    }
  ],
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "labels": [
    {
      "automlModel": "string",
      "confidence": 0,
      "name": "string"
    }
  ],
  "mimeType": "string",
  "pages": [
    {
      "blocks": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "detectedBarcodes": [
        {
          "barcode": {
            "format": "string",
            "rawValue": "string",
            "valueFormat": "string"
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "dimension": {
        "height": 0,
        "unit": "string",
        "width": 0
      },
      "formFields": [
        {
          "correctedKeyText": "string",
          "correctedValueText": "string",
          "fieldName": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "fieldValue": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "nameDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "valueDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "valueType": "string"
        }
      ],
      "image": {
        "content": "string",
        "height": 0,
        "mimeType": "string",
        "width": 0
      },
      "imageQualityScores": {
        "detectedDefects": [
          {
            "confidence": 0,
            "type": "string"
          }
        ],
        "qualityScore": 0
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "lines": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "pageNumber": 0,
      "paragraphs": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "symbols": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "tables": [
        {
          "bodyRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "headerRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "tokens": [
        {
          "detectedBreak": {
            "type": "TYPE_UNSPECIFIED"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "transforms": [
        {
          "cols": 0,
          "data": "string",
          "rows": 0,
          "type": 0
        }
      ],
      "visualElements": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "type": "string"
        }
      ]
    }
  ],
  "revisions": [
    {
      "agent": "string",
      "createTime": "string",
      "humanReview": {
        "state": "string",
        "stateMessage": "string"
      },
      "id": "string",
      "parent": [
        0
      ],
      "parentIds": [
        "string"
      ],
      "processor": "string"
    }
  ],
  "shardInfo": {
    "shardCount": "string",
    "shardIndex": "string",
    "textOffset": "string"
  },
  "text": "string",
  "textChanges": [
    {
      "changedText": "string",
      "provenance": [
        {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        }
      ],
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      }
    }
  ],
  "textStyles": [
    {
      "backgroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "fontFamily": "string",
      "fontSize": {
        "size": 0,
        "unit": "string"
      },
      "fontWeight": "string",
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "textDecoration": "string",
      "textStyle": "string"
    }
  ],
  "uri": "string"
}
```

Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.|
|entities|[[GoogleCloudDocumentaiV1beta2DocumentEntity](#schemagoogleclouddocumentaiv1beta2documententity)]|false|none|A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.|
|entityRelations|[[GoogleCloudDocumentaiV1beta2DocumentEntityRelation](#schemagoogleclouddocumentaiv1beta2documententityrelation)]|false|none|Placeholder. Relationship among Document.entities.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|Any error that occurred while processing this document.|
|labels|[[GoogleCloudDocumentaiV1beta2DocumentLabel](#schemagoogleclouddocumentaiv1beta2documentlabel)]|false|none|Labels for this document.|
|mimeType|string|false|none|An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.|
|pages|[[GoogleCloudDocumentaiV1beta2DocumentPage](#schemagoogleclouddocumentaiv1beta2documentpage)]|false|none|Visual page layout for the Document.|
|revisions|[[GoogleCloudDocumentaiV1beta2DocumentRevision](#schemagoogleclouddocumentaiv1beta2documentrevision)]|false|none|Placeholder. Revision history of this document.|
|shardInfo|[GoogleCloudDocumentaiV1beta2DocumentShardInfo](#schemagoogleclouddocumentaiv1beta2documentshardinfo)|false|none|Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.|
|text|string|false|none|Optional. UTF-8 encoded text in reading order from the document.|
|textChanges|[[GoogleCloudDocumentaiV1beta2DocumentTextChange](#schemagoogleclouddocumentaiv1beta2documenttextchange)]|false|none|Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.|
|textStyles|[[GoogleCloudDocumentaiV1beta2DocumentStyle](#schemagoogleclouddocumentaiv1beta2documentstyle)]|false|none|Styles for the Document.text.|
|uri|string|false|none|Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentEntity">GoogleCloudDocumentaiV1beta2DocumentEntity</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documententity"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentEntity"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documententity"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documententity"></a>

```json
{
  "confidence": 0,
  "id": "string",
  "mentionId": "string",
  "mentionText": "string",
  "normalizedValue": {
    "addressValue": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "booleanValue": true,
    "dateValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "datetimeValue": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "floatValue": 0,
    "integerValue": 0,
    "moneyValue": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "text": "string"
  },
  "pageAnchor": {
    "pageRefs": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "layoutId": "string",
        "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
        "page": "string"
      }
    ]
  },
  "properties": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "redacted": true,
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "type": "string"
}
```

An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Optional. Confidence of detected Schema entity. Range `[0, 1]`.|
|id|string|false|none|Optional. Canonical id. This will be a unique value in the entity list for this document.|
|mentionId|string|false|none|Optional. Deprecated. Use `id` field instead.|
|mentionText|string|false|none|Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.|
|normalizedValue|[GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue](#schemagoogleclouddocumentaiv1beta2documententitynormalizedvalue)|false|none|Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.|
|pageAnchor|[GoogleCloudDocumentaiV1beta2DocumentPageAnchor](#schemagoogleclouddocumentaiv1beta2documentpageanchor)|false|none|Optional. Represents the provenance of this entity wrt. the location on the page where it was found.|
|properties|[[GoogleCloudDocumentaiV1beta2DocumentEntity](#schemagoogleclouddocumentaiv1beta2documententity)]|false|none|Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|Optional. The history of this annotation.|
|redacted|boolean|false|none|Optional. Whether the entity will be redacted for de-identification purposes.|
|textAnchor|[GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta2documenttextanchor)|false|none|Optional. Provenance of the entity. Text anchor indexing into the Document.text.|
|type|string|false|none|Required. Entity type from a schema e.g. `Address`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue">GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documententitynormalizedvalue"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documententitynormalizedvalue"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documententitynormalizedvalue"></a>

```json
{
  "addressValue": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "booleanValue": true,
  "dateValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "datetimeValue": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "floatValue": 0,
  "integerValue": 0,
  "moneyValue": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "text": "string"
}
```

Parsed and normalized entity value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressValue|[GoogleTypePostalAddress](#schemagoogletypepostaladdress)|false|none|Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto|
|booleanValue|boolean|false|none|Boolean value. Can be used for entities with binary values, or for checkboxes.|
|dateValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto|
|datetimeValue|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto|
|floatValue|number(float)|false|none|Float value.|
|integerValue|integer(int32)|false|none|Integer value.|
|moneyValue|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto|
|text|string|false|none|Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentEntityRelation">GoogleCloudDocumentaiV1beta2DocumentEntityRelation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documententityrelation"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentEntityRelation"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documententityrelation"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documententityrelation"></a>

```json
{
  "objectId": "string",
  "relation": "string",
  "subjectId": "string"
}
```

Relationship between Entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|Object entity id.|
|relation|string|false|none|Relationship description.|
|subjectId|string|false|none|Subject entity id.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentLabel">GoogleCloudDocumentaiV1beta2DocumentLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentlabel"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentLabel"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentlabel"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentlabel"></a>

```json
{
  "automlModel": "string",
  "confidence": 0,
  "name": "string"
}
```

Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automlModel|string|false|none|Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`|
|confidence|number(float)|false|none|Confidence score between 0 and 1 for label assignment.|
|name|string|false|none|Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPage">GoogleCloudDocumentaiV1beta2DocumentPage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPage"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpage"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpage"></a>

```json
{
  "blocks": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "detectedBarcodes": [
    {
      "barcode": {
        "format": "string",
        "rawValue": "string",
        "valueFormat": "string"
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "dimension": {
    "height": 0,
    "unit": "string",
    "width": 0
  },
  "formFields": [
    {
      "correctedKeyText": "string",
      "correctedValueText": "string",
      "fieldName": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "fieldValue": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "nameDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "valueDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "valueType": "string"
    }
  ],
  "image": {
    "content": "string",
    "height": 0,
    "mimeType": "string",
    "width": 0
  },
  "imageQualityScores": {
    "detectedDefects": [
      {
        "confidence": 0,
        "type": "string"
      }
    ],
    "qualityScore": 0
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "lines": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "pageNumber": 0,
  "paragraphs": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "symbols": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "tables": [
    {
      "bodyRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "headerRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "tokens": [
    {
      "detectedBreak": {
        "type": "TYPE_UNSPECIFIED"
      },
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "transforms": [
    {
      "cols": 0,
      "data": "string",
      "rows": 0,
      "type": 0
    }
  ],
  "visualElements": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "type": "string"
    }
  ]
}
```

A page in a Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudDocumentaiV1beta2DocumentPageBlock](#schemagoogleclouddocumentaiv1beta2documentpageblock)]|false|none|A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.|
|detectedBarcodes|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode](#schemagoogleclouddocumentaiv1beta2documentpagedetectedbarcode)]|false|none|A list of detected barcodes.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|dimension|[GoogleCloudDocumentaiV1beta2DocumentPageDimension](#schemagoogleclouddocumentaiv1beta2documentpagedimension)|false|none|Physical dimension of the page.|
|formFields|[[GoogleCloudDocumentaiV1beta2DocumentPageFormField](#schemagoogleclouddocumentaiv1beta2documentpageformfield)]|false|none|A list of visually detected form fields on the page.|
|image|[GoogleCloudDocumentaiV1beta2DocumentPageImage](#schemagoogleclouddocumentaiv1beta2documentpageimage)|false|none|Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.|
|imageQualityScores|[GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores](#schemagoogleclouddocumentaiv1beta2documentpageimagequalityscores)|false|none|Image Quality Scores.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for the page.|
|lines|[[GoogleCloudDocumentaiV1beta2DocumentPageLine](#schemagoogleclouddocumentaiv1beta2documentpageline)]|false|none|A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.|
|pageNumber|integer(int32)|false|none|1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.|
|paragraphs|[[GoogleCloudDocumentaiV1beta2DocumentPageParagraph](#schemagoogleclouddocumentaiv1beta2documentpageparagraph)]|false|none|A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this page.|
|symbols|[[GoogleCloudDocumentaiV1beta2DocumentPageSymbol](#schemagoogleclouddocumentaiv1beta2documentpagesymbol)]|false|none|A list of visually detected symbols on the page.|
|tables|[[GoogleCloudDocumentaiV1beta2DocumentPageTable](#schemagoogleclouddocumentaiv1beta2documentpagetable)]|false|none|A list of visually detected tables on the page.|
|tokens|[[GoogleCloudDocumentaiV1beta2DocumentPageToken](#schemagoogleclouddocumentaiv1beta2documentpagetoken)]|false|none|A list of visually detected tokens on the page.|
|transforms|[[GoogleCloudDocumentaiV1beta2DocumentPageMatrix](#schemagoogleclouddocumentaiv1beta2documentpagematrix)]|false|none|Transformation matrices that were applied to the original document image to produce Page.image.|
|visualElements|[[GoogleCloudDocumentaiV1beta2DocumentPageVisualElement](#schemagoogleclouddocumentaiv1beta2documentpagevisualelement)]|false|none|A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageAnchor">GoogleCloudDocumentaiV1beta2DocumentPageAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageanchor"></a>

```json
{
  "pageRefs": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "layoutId": "string",
      "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
      "page": "string"
    }
  ]
}
```

Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageRefs|[[GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef](#schemagoogleclouddocumentaiv1beta2documentpageanchorpageref)]|false|none|One or more references to visual page elements|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef">GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageanchorpageref"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageanchorpageref"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageanchorpageref"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "layoutId": "string",
  "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
  "page": "string"
}
```

Represents a weak reference to a page element within a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta2BoundingPoly](#schemagoogleclouddocumentaiv1beta2boundingpoly)|false|none|Optional. Identifies the bounding polygon of a layout element on the page.|
|confidence|number(float)|false|none|Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.|
|layoutId|string|false|none|Optional. Deprecated. Use PageRef.bounding_poly instead.|
|layoutType|string|false|none|Optional. The type of the layout element that is being referenced if any.|
|page|string(int64)|false|none|Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.|

#### Enumerated Values

|Property|Value|
|---|---|
|layoutType|LAYOUT_TYPE_UNSPECIFIED|
|layoutType|BLOCK|
|layoutType|PARAGRAPH|
|layoutType|LINE|
|layoutType|TOKEN|
|layoutType|VISUAL_ELEMENT|
|layoutType|TABLE|
|layoutType|FORM_FIELD|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageBlock">GoogleCloudDocumentaiV1beta2DocumentPageBlock</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageblock"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageBlock"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageblock"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageblock"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Block.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode">GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagedetectedbarcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagedetectedbarcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagedetectedbarcode"></a>

```json
{
  "barcode": {
    "format": "string",
    "rawValue": "string",
    "valueFormat": "string"
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barcode|[GoogleCloudDocumentaiV1beta2Barcode](#schemagoogleclouddocumentaiv1beta2barcode)|false|none|Detailed barcode information of the DetectedBarcode.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for DetectedBarcode.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage">GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagedetectedlanguage"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagedetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range `[0, 1]`.|
|languageCode|string|false|none|The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageDimension">GoogleCloudDocumentaiV1beta2DocumentPageDimension</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagedimension"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageDimension"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagedimension"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagedimension"></a>

```json
{
  "height": 0,
  "unit": "string",
  "width": 0
}
```

Dimension for the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|false|none|Page height.|
|unit|string|false|none|Dimension unit.|
|width|number(float)|false|none|Page width.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageFormField">GoogleCloudDocumentaiV1beta2DocumentPageFormField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageformfield"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageFormField"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageformfield"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageformfield"></a>

```json
{
  "correctedKeyText": "string",
  "correctedValueText": "string",
  "fieldName": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "fieldValue": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "nameDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "valueDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "valueType": "string"
}
```

A form field detected on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correctedKeyText|string|false|none|Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.|
|correctedValueText|string|false|none|Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.|
|fieldName|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.|
|fieldValue|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for the FormField value.|
|nameDetectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages for name together with confidence.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this annotation.|
|valueDetectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages for value together with confidence.|
|valueType|string|false|none|If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageImage">GoogleCloudDocumentaiV1beta2DocumentPageImage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageimage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageImage"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageimage"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageimage"></a>

```json
{
  "content": "string",
  "height": 0,
  "mimeType": "string",
  "width": 0
}
```

Rendered image contents for this page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Raw byte content of the image.|
|height|integer(int32)|false|none|Height of the image in pixels.|
|mimeType|string|false|none|Encoding mime type for the image.|
|width|integer(int32)|false|none|Width of the image in pixels.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores">GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageimagequalityscores"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageimagequalityscores"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageimagequalityscores"></a>

```json
{
  "detectedDefects": [
    {
      "confidence": 0,
      "type": "string"
    }
  ],
  "qualityScore": 0
}
```

Image Quality Scores for the page image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedDefects|[[GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect](#schemagoogleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect)]|false|none|A list of detected defects.|
|qualityScore|number(float)|false|none|The overall quality score. Range `[0, 1]` where 1 is perfect quality.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect">GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect"></a>

```json
{
  "confidence": 0,
  "type": "string"
}
```

Image Quality Defects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.|
|type|string|false|none|Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageLayout">GoogleCloudDocumentaiV1beta2DocumentPageLayout</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagelayout"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageLayout"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagelayout"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagelayout"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "orientation": "ORIENTATION_UNSPECIFIED",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

Visual element describing a layout unit on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta2BoundingPoly](#schemagoogleclouddocumentaiv1beta2boundingpoly)|false|none|The bounding polygon for the Layout.|
|confidence|number(float)|false|none|Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.|
|orientation|string|false|none|Detected orientation for the Layout.|
|textAnchor|[GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta2documenttextanchor)|false|none|Text anchor indexing into the Document.text.|

#### Enumerated Values

|Property|Value|
|---|---|
|orientation|ORIENTATION_UNSPECIFIED|
|orientation|PAGE_UP|
|orientation|PAGE_RIGHT|
|orientation|PAGE_DOWN|
|orientation|PAGE_LEFT|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageLine">GoogleCloudDocumentaiV1beta2DocumentPageLine</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageline"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageLine"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageline"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageline"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Line.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageMatrix">GoogleCloudDocumentaiV1beta2DocumentPageMatrix</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagematrix"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageMatrix"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagematrix"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagematrix"></a>

```json
{
  "cols": 0,
  "data": "string",
  "rows": 0,
  "type": 0
}
```

Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|integer(int32)|false|none|Number of columns in the matrix.|
|data|string(byte)|false|none|The matrix data.|
|rows|integer(int32)|false|none|Number of rows in the matrix.|
|type|integer(int32)|false|none|This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageParagraph">GoogleCloudDocumentaiV1beta2DocumentPageParagraph</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpageparagraph"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageParagraph"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpageparagraph"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpageparagraph"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of lines that a human would perceive as a paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageSymbol">GoogleCloudDocumentaiV1beta2DocumentPageSymbol</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagesymbol"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageSymbol"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagesymbol"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagesymbol"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected symbol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Symbol.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageTable">GoogleCloudDocumentaiV1beta2DocumentPageTable</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagetable"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageTable"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagetable"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagetable"></a>

```json
{
  "bodyRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "headerRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A table representation similar to HTML table structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyRows|[[GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta2documentpagetabletablerow)]|false|none|Body rows of the table.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|headerRows|[[GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta2documentpagetabletablerow)]|false|none|Header rows of the table.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Table.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this table.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell">GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagetabletablecell"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagetabletablecell"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagetabletablecell"></a>

```json
{
  "colSpan": 0,
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "rowSpan": 0
}
```

A cell representation inside the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colSpan|integer(int32)|false|none|How many columns this cell spans.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for TableCell.|
|rowSpan|integer(int32)|false|none|How many rows this cell spans.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow">GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagetabletablerow"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagetabletablerow"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagetabletablerow"></a>

```json
{
  "cells": [
    {
      "colSpan": 0,
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "rowSpan": 0
    }
  ]
}
```

A row of table cells.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell](#schemagoogleclouddocumentaiv1beta2documentpagetabletablecell)]|false|none|Cells that make up this row.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageToken">GoogleCloudDocumentaiV1beta2DocumentPageToken</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagetoken"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageToken"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagetoken"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagetoken"></a>

```json
{
  "detectedBreak": {
    "type": "TYPE_UNSPECIFIED"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A detected token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak](#schemagoogleclouddocumentaiv1beta2documentpagetokendetectedbreak)|false|none|Detected break at the end of a Token.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for Token.|
|provenance|[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak">GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagetokendetectedbreak"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagetokendetectedbreak"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagetokendetectedbreak"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

Detected break at the end of a Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|SPACE|
|type|WIDE_SPACE|
|type|HYPHEN|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentPageVisualElement">GoogleCloudDocumentaiV1beta2DocumentPageVisualElement</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentpagevisualelement"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentPageVisualElement"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentpagevisualelement"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentpagevisualelement"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "type": "string"
}
```

Detected non-text visual elements e.g. checkbox, signature etc. on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta2documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta2DocumentPageLayout](#schemagoogleclouddocumentaiv1beta2documentpagelayout)|false|none|Layout for VisualElement.|
|type|string|false|none|Type of the VisualElement.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentProvenance">GoogleCloudDocumentaiV1beta2DocumentProvenance</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentprovenance"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentProvenance"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentprovenance"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentprovenance"></a>

```json
{
  "id": 0,
  "parents": [
    {
      "id": 0,
      "index": 0,
      "revision": 0
    }
  ],
  "revision": 0,
  "type": "OPERATION_TYPE_UNSPECIFIED"
}
```

Structure to identify provenance relationships between annotations in different revisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The Id of this operation. Needs to be unique within the scope of the revision.|
|parents|[[GoogleCloudDocumentaiV1beta2DocumentProvenanceParent](#schemagoogleclouddocumentaiv1beta2documentprovenanceparent)]|false|none|References to the original elements that are replaced.|
|revision|integer(int32)|false|none|The index of the revision that produced this element.|
|type|string|false|none|The type of provenance operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OPERATION_TYPE_UNSPECIFIED|
|type|ADD|
|type|REMOVE|
|type|UPDATE|
|type|REPLACE|
|type|EVAL_REQUESTED|
|type|EVAL_APPROVED|
|type|EVAL_SKIPPED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentProvenanceParent">GoogleCloudDocumentaiV1beta2DocumentProvenanceParent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentprovenanceparent"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentProvenanceParent"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentprovenanceparent"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentprovenanceparent"></a>

```json
{
  "id": 0,
  "index": 0,
  "revision": 0
}
```

The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the parent provenance.|
|index|integer(int32)|false|none|The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.|
|revision|integer(int32)|false|none|The index of the index into current revision's parent_ids list.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentRevision">GoogleCloudDocumentaiV1beta2DocumentRevision</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentrevision"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentRevision"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentrevision"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentrevision"></a>

```json
{
  "agent": "string",
  "createTime": "string",
  "humanReview": {
    "state": "string",
    "stateMessage": "string"
  },
  "id": "string",
  "parent": [
    0
  ],
  "parentIds": [
    "string"
  ],
  "processor": "string"
}
```

Contains past or forward revisions of this document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|false|none|If the change was made by a person specify the name or id of that person.|
|createTime|string(google-datetime)|false|none|The time that the revision was created, internally generated by doc proto storage at the time of create.|
|humanReview|[GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview](#schemagoogleclouddocumentaiv1beta2documentrevisionhumanreview)|false|none|Human Review information of this revision.|
|id|string|false|none|Id of the revision, internally generated by doc proto storage. Unique within the context of the document.|
|parent|[integer(int32)]|false|none|The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.|
|parentIds|[string]|false|none|The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.|
|processor|string|false|none|If the annotation was made by processor identify the processor by its resource name.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview">GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentrevisionhumanreview"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentrevisionhumanreview"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentrevisionhumanreview"></a>

```json
{
  "state": "string",
  "stateMessage": "string"
}
```

Human Review information of the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Human review state. e.g. `requested`, `succeeded`, `rejected`.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentShardInfo">GoogleCloudDocumentaiV1beta2DocumentShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentshardinfo"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentShardInfo"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentshardinfo"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentshardinfo"></a>

```json
{
  "shardCount": "string",
  "shardIndex": "string",
  "textOffset": "string"
}
```

For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shardCount|string(int64)|false|none|Total number of shards.|
|shardIndex|string(int64)|false|none|The 0-based index of this shard.|
|textOffset|string(int64)|false|none|The index of the first character in Document.text in the overall document global text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentStyle">GoogleCloudDocumentaiV1beta2DocumentStyle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentstyle"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentStyle"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentstyle"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentstyle"></a>

```json
{
  "backgroundColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "fontFamily": "string",
  "fontSize": {
    "size": 0,
    "unit": "string"
  },
  "fontWeight": "string",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "textDecoration": "string",
  "textStyle": "string"
}
```

Annotation for common text style attributes. This adheres to CSS conventions as much as possible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text background color.|
|color|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text color.|
|fontFamily|string|false|none|Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp|
|fontSize|[GoogleCloudDocumentaiV1beta2DocumentStyleFontSize](#schemagoogleclouddocumentaiv1beta2documentstylefontsize)|false|none|Font size.|
|fontWeight|string|false|none|Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp|
|textAnchor|[GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta2documenttextanchor)|false|none|Text anchor indexing into the Document.text.|
|textDecoration|string|false|none|Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp|
|textStyle|string|false|none|Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentStyleFontSize">GoogleCloudDocumentaiV1beta2DocumentStyleFontSize</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documentstylefontsize"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentStyleFontSize"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documentstylefontsize"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documentstylefontsize"></a>

```json
{
  "size": 0,
  "unit": "string"
}
```

Font size with unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|number(float)|false|none|Font size for the text.|
|unit|string|false|none|Unit for the font size. Follows CSS naming (in, px, pt, etc.).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentTextAnchor">GoogleCloudDocumentaiV1beta2DocumentTextAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documenttextanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentTextAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documenttextanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documenttextanchor"></a>

```json
{
  "content": "string",
  "textSegments": [
    {
      "endIndex": "string",
      "startIndex": "string"
    }
  ]
}
```

Text reference indexing into the Document.text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.|
|textSegments|[[GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment](#schemagoogleclouddocumentaiv1beta2documenttextanchortextsegment)]|false|none|The text segments from the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment">GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documenttextanchortextsegment"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documenttextanchortextsegment"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documenttextanchortextsegment"></a>

```json
{
  "endIndex": "string",
  "startIndex": "string"
}
```

A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endIndex|string(int64)|false|none|TextSegment half open end UTF-8 char index in the Document.text.|
|startIndex|string(int64)|false|none|TextSegment start UTF-8 char index in the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2DocumentTextChange">GoogleCloudDocumentaiV1beta2DocumentTextChange</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2documenttextchange"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2DocumentTextChange"></a>
<a id="tocSgoogleclouddocumentaiv1beta2documenttextchange"></a>
<a id="tocsgoogleclouddocumentaiv1beta2documenttextchange"></a>

```json
{
  "changedText": "string",
  "provenance": [
    {
      "id": 0,
      "parents": [
        {
          "id": 0,
          "index": 0,
          "revision": 0
        }
      ],
      "revision": 0,
      "type": "OPERATION_TYPE_UNSPECIFIED"
    }
  ],
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

This message is used for text changes aka. OCR corrections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changedText|string|false|none|The text that replaces the text identified in the `text_anchor`.|
|provenance|[[GoogleCloudDocumentaiV1beta2DocumentProvenance](#schemagoogleclouddocumentaiv1beta2documentprovenance)]|false|none|The history of this annotation.|
|textAnchor|[GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta2documenttextanchor)|false|none|Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2GcsDestination">GoogleCloudDocumentaiV1beta2GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2gcsdestination"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2GcsDestination"></a>
<a id="tocSgoogleclouddocumentaiv1beta2gcsdestination"></a>
<a id="tocsgoogleclouddocumentaiv1beta2gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output file will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|none|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2GcsSource">GoogleCloudDocumentaiV1beta2GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2gcssource"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2GcsSource"></a>
<a id="tocSgoogleclouddocumentaiv1beta2gcssource"></a>
<a id="tocsgoogleclouddocumentaiv1beta2gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input file will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|none|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2InputConfig">GoogleCloudDocumentaiV1beta2InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2inputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2InputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta2inputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta2inputconfig"></a>

```json
{
  "contents": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string(byte)|false|none|Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method.|
|gcsSource|[GoogleCloudDocumentaiV1beta2GcsSource](#schemagoogleclouddocumentaiv1beta2gcssource)|false|none|The Google Cloud Storage location to read the input from. This must be a single file.|
|mimeType|string|false|none|Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2NormalizedVertex">GoogleCloudDocumentaiV1beta2NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2normalizedvertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2NormalizedVertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta2normalizedvertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta2normalizedvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2OperationMetadata">GoogleCloudDocumentaiV1beta2OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2operationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2OperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta2operationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta2operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

Contains metadata for the BatchProcessDocuments operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|state|string|false|none|The state of the current batch processing.|
|stateMessage|string|false|none|A message providing more details about the current state of processing.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACCEPTED|
|state|WAITING|
|state|RUNNING|
|state|SUCCEEDED|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2OutputConfig">GoogleCloudDocumentaiV1beta2OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2outputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2OutputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta2outputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta2outputconfig"></a>

```json
{
  "gcsDestination": {
    "uri": "string"
  },
  "pagesPerShard": 0
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDocumentaiV1beta2GcsDestination](#schemagoogleclouddocumentaiv1beta2gcsdestination)|false|none|The Google Cloud Storage location to write the output to.|
|pagesPerShard|integer(int32)|false|none|The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2ProcessDocumentResponse">GoogleCloudDocumentaiV1beta2ProcessDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2processdocumentresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2ProcessDocumentResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta2processdocumentresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta2processdocumentresponse"></a>

```json
{
  "inputConfig": {
    "contents": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "uri": "string"
    },
    "pagesPerShard": 0
  }
}
```

Response to a single document processing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[GoogleCloudDocumentaiV1beta2InputConfig](#schemagoogleclouddocumentaiv1beta2inputconfig)|false|none|Information about the input file. This is the same as the corresponding input config in the request.|
|outputConfig|[GoogleCloudDocumentaiV1beta2OutputConfig](#schemagoogleclouddocumentaiv1beta2outputconfig)|false|none|The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta2Vertex">GoogleCloudDocumentaiV1beta2Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta2vertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta2Vertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta2vertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta2vertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|false|none|X coordinate.|
|y|integer(int32)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3Barcode">GoogleCloudDocumentaiV1beta3Barcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3barcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3Barcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta3barcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta3barcode"></a>

```json
{
  "format": "string",
  "rawValue": "string",
  "valueFormat": "string"
}
```

Encodes the detailed information of a barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.|
|rawValue|string|false|none|Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.|
|valueFormat|string|false|none|Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig">GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchdocumentsinputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchdocumentsinputconfig"></a>

```json
{
  "gcsDocuments": {
    "documents": [
      {
        "gcsUri": "string",
        "mimeType": "string"
      }
    ]
  },
  "gcsPrefix": {
    "gcsUriPrefix": "string"
  }
}
```

The common config to specify a set of documents used as input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDocuments|[GoogleCloudDocumentaiV1beta3GcsDocuments](#schemagoogleclouddocumentaiv1beta3gcsdocuments)|false|none|The set of documents individually specified on Cloud Storage.|
|gcsPrefix|[GoogleCloudDocumentaiV1beta3GcsPrefix](#schemagoogleclouddocumentaiv1beta3gcsprefix)|false|none|The set of documents that match the specified Cloud Storage `gcs_prefix`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessMetadata">GoogleCloudDocumentaiV1beta3BatchProcessMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessmetadata"></a>

```json
{
  "createTime": "string",
  "individualProcessStatuses": [
    {
      "humanReviewOperation": "string",
      "humanReviewStatus": {
        "humanReviewOperation": "string",
        "state": "STATE_UNSPECIFIED",
        "stateMessage": "string"
      },
      "inputGcsSource": "string",
      "outputGcsDestination": "string",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The long running operation metadata for batch process method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|individualProcessStatuses|[[GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus](#schemagoogleclouddocumentaiv1beta3batchprocessmetadataindividualprocessstatus)]|false|none|The list of response details of each document.|
|state|string|false|none|The state of the current batch processing.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the error message if the operation is failed.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|WAITING|
|state|RUNNING|
|state|SUCCEEDED|
|state|CANCELLING|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus">GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessmetadataindividualprocessstatus"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessmetadataindividualprocessstatus"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessmetadataindividualprocessstatus"></a>

```json
{
  "humanReviewOperation": "string",
  "humanReviewStatus": {
    "humanReviewOperation": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string"
  },
  "inputGcsSource": "string",
  "outputGcsDestination": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of a each individual document in the batch process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|humanReviewOperation|string|false|none|The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.|
|humanReviewStatus|[GoogleCloudDocumentaiV1beta3HumanReviewStatus](#schemagoogleclouddocumentaiv1beta3humanreviewstatus)|false|none|The status of human review on the processed document.|
|inputGcsSource|string|false|none|The source of the document, same as the [input_gcs_source] field in the request when the batch process started. The batch process is started by take snapshot of that document, since a user can move or change that document during the process.|
|outputGcsDestination|string|false|none|The output_gcs_destination (in the request as `output_gcs_destination`) of the processed document if it was successful, otherwise empty.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The status processing the document.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessRequest">GoogleCloudDocumentaiV1beta3BatchProcessRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessrequest"></a>

```json
{
  "documentOutputConfig": {
    "gcsOutputConfig": {
      "fieldMask": "string",
      "gcsUri": "string",
      "shardingConfig": {
        "pagesOverlap": 0,
        "pagesPerShard": 0
      }
    }
  },
  "inputConfigs": [
    {
      "gcsSource": "string",
      "mimeType": "string"
    }
  ],
  "inputDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": "string"
  },
  "processOptions": {
    "ocrConfig": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableImageQualityScores": true,
      "enableNativePdfParsing": true,
      "enableSymbol": true,
      "hints": {
        "languageHints": [
          "string"
        ]
      }
    }
  },
  "skipHumanReview": true
}
```

Request message for batch process document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentOutputConfig|[GoogleCloudDocumentaiV1beta3DocumentOutputConfig](#schemagoogleclouddocumentaiv1beta3documentoutputconfig)|false|none|The overall output config for batch process.|
|inputConfigs|[[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig](#schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig)]|false|none|The input config for each single document in the batch process.|
|inputDocuments|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|none|The input documents for batch process.|
|outputConfig|[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig](#schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig)|false|none|The overall output config for batch process.|
|processOptions|[GoogleCloudDocumentaiV1beta3ProcessOptions](#schemagoogleclouddocumentaiv1beta3processoptions)|false|none|Inference-time options for the process API|
|skipHumanReview|boolean|false|none|Whether Human Review feature should be skipped for this request. Default to false.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig">GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig"></a>

```json
{
  "gcsSource": "string",
  "mimeType": "string"
}
```

The message for input config in batch process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|string|false|none|The Cloud Storage location as the source of the document.|
|mimeType|string|false|none|Mimetype of the input. If the input is a raw document, the supported mimetypes are application/pdf, image/tiff, and image/gif. If the input is a [Document] proto, the type should be application/json.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig">GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig"></a>

```json
{
  "gcsDestination": "string"
}
```

The message for output config in batch process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|string|false|none|The output Cloud Storage directory to put the processed documents.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BatchProcessResponse">GoogleCloudDocumentaiV1beta3BatchProcessResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3batchprocessresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BatchProcessResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3batchprocessresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3batchprocessresponse"></a>

```json
{}
```

Response message for batch process document method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3BoundingPoly">GoogleCloudDocumentaiV1beta3BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3boundingpoly"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3BoundingPoly"></a>
<a id="tocSgoogleclouddocumentaiv1beta3boundingpoly"></a>
<a id="tocsgoogleclouddocumentaiv1beta3boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudDocumentaiV1beta3NormalizedVertex](#schemagoogleclouddocumentaiv1beta3normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudDocumentaiV1beta3Vertex](#schemagoogleclouddocumentaiv1beta3vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3CommonOperationMetadata">GoogleCloudDocumentaiV1beta3CommonOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3commonoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3CommonOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3commonoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3commonoperationmetadata"></a>

```json
{
  "createTime": "string",
  "resource": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The common metadata for long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|resource|string|false|none|A related resource to this operation.|
|state|string|false|none|The state of the operation.|
|stateMessage|string|false|none|A message providing more details about the current state of processing.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELLING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata">GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3deleteprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3deleteprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3deleteprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3deleteprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3deleteprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3deleteprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for delete processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3deployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3deployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3deployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for deploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest">GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3deployprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3deployprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3deployprocessorversionrequest"></a>

```json
{}
```

Request message for the deploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse">GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3deployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3deployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3deployprocessorversionresponse"></a>

```json
{}
```

Response message for the deploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DisableProcessorMetadata">GoogleCloudDocumentaiV1beta3DisableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3disableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DisableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3disableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3disableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for disable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DisableProcessorRequest">GoogleCloudDocumentaiV1beta3DisableProcessorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3disableprocessorrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DisableProcessorRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3disableprocessorrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3disableprocessorrequest"></a>

```json
{}
```

Request message for the disable processor method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DisableProcessorResponse">GoogleCloudDocumentaiV1beta3DisableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3disableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DisableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3disableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3disableprocessorresponse"></a>

```json
{}
```

Response message for the disable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3Document">GoogleCloudDocumentaiV1beta3Document</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3document"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3Document"></a>
<a id="tocSgoogleclouddocumentaiv1beta3document"></a>
<a id="tocsgoogleclouddocumentaiv1beta3document"></a>

```json
{
  "content": "string",
  "entities": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "entityRelations": [
    {
      "objectId": "string",
      "relation": "string",
      "subjectId": "string"
    }
  ],
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "mimeType": "string",
  "pages": [
    {
      "blocks": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "detectedBarcodes": [
        {
          "barcode": {
            "format": "string",
            "rawValue": "string",
            "valueFormat": "string"
          },
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "dimension": {
        "height": 0,
        "unit": "string",
        "width": 0
      },
      "formFields": [
        {
          "correctedKeyText": "string",
          "correctedValueText": "string",
          "fieldName": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "fieldValue": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "nameDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          },
          "valueDetectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "valueType": "string"
        }
      ],
      "image": {
        "content": "string",
        "height": 0,
        "mimeType": "string",
        "width": 0
      },
      "imageQualityScores": {
        "detectedDefects": [
          {
            "confidence": 0,
            "type": "string"
          }
        ],
        "qualityScore": 0
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "lines": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "pageNumber": 0,
      "paragraphs": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "symbols": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          }
        }
      ],
      "tables": [
        {
          "bodyRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "headerRows": [
            {
              "cells": [
                {
                  "colSpan": 0,
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ],
                  "layout": {
                    "boundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "orientation": "ORIENTATION_UNSPECIFIED",
                    "textAnchor": {
                      "content": "string",
                      "textSegments": [
                        {
                          "endIndex": "string",
                          "startIndex": "string"
                        }
                      ]
                    }
                  },
                  "rowSpan": 0
                }
              ]
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "tokens": [
        {
          "detectedBreak": {
            "type": "TYPE_UNSPECIFIED"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "provenance": {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        }
      ],
      "transforms": [
        {
          "cols": 0,
          "data": "string",
          "rows": 0,
          "type": 0
        }
      ],
      "visualElements": [
        {
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "type": "string"
        }
      ]
    }
  ],
  "revisions": [
    {
      "agent": "string",
      "createTime": "string",
      "humanReview": {
        "state": "string",
        "stateMessage": "string"
      },
      "id": "string",
      "parent": [
        0
      ],
      "parentIds": [
        "string"
      ],
      "processor": "string"
    }
  ],
  "shardInfo": {
    "shardCount": "string",
    "shardIndex": "string",
    "textOffset": "string"
  },
  "text": "string",
  "textChanges": [
    {
      "changedText": "string",
      "provenance": [
        {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        }
      ],
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      }
    }
  ],
  "textStyles": [
    {
      "backgroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "fontFamily": "string",
      "fontSize": {
        "size": 0,
        "unit": "string"
      },
      "fontWeight": "string",
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "textDecoration": "string",
      "textStyle": "string"
    }
  ],
  "uri": "string"
}
```

Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.|
|entities|[[GoogleCloudDocumentaiV1beta3DocumentEntity](#schemagoogleclouddocumentaiv1beta3documententity)]|false|none|A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.|
|entityRelations|[[GoogleCloudDocumentaiV1beta3DocumentEntityRelation](#schemagoogleclouddocumentaiv1beta3documententityrelation)]|false|none|Placeholder. Relationship among Document.entities.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|Any error that occurred while processing this document.|
|mimeType|string|false|none|An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.|
|pages|[[GoogleCloudDocumentaiV1beta3DocumentPage](#schemagoogleclouddocumentaiv1beta3documentpage)]|false|none|Visual page layout for the Document.|
|revisions|[[GoogleCloudDocumentaiV1beta3DocumentRevision](#schemagoogleclouddocumentaiv1beta3documentrevision)]|false|none|Placeholder. Revision history of this document.|
|shardInfo|[GoogleCloudDocumentaiV1beta3DocumentShardInfo](#schemagoogleclouddocumentaiv1beta3documentshardinfo)|false|none|Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.|
|text|string|false|none|Optional. UTF-8 encoded text in reading order from the document.|
|textChanges|[[GoogleCloudDocumentaiV1beta3DocumentTextChange](#schemagoogleclouddocumentaiv1beta3documenttextchange)]|false|none|Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.|
|textStyles|[[GoogleCloudDocumentaiV1beta3DocumentStyle](#schemagoogleclouddocumentaiv1beta3documentstyle)]|false|none|Styles for the Document.text.|
|uri|string|false|none|Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentEntity">GoogleCloudDocumentaiV1beta3DocumentEntity</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documententity"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentEntity"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documententity"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documententity"></a>

```json
{
  "confidence": 0,
  "id": "string",
  "mentionId": "string",
  "mentionText": "string",
  "normalizedValue": {
    "addressValue": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "booleanValue": true,
    "dateValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "datetimeValue": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "floatValue": 0,
    "integerValue": 0,
    "moneyValue": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "text": "string"
  },
  "pageAnchor": {
    "pageRefs": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "layoutId": "string",
        "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
        "page": "string"
      }
    ]
  },
  "properties": [
    {
      "confidence": 0,
      "id": "string",
      "mentionId": "string",
      "mentionText": "string",
      "normalizedValue": {
        "addressValue": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "booleanValue": true,
        "dateValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "datetimeValue": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        },
        "floatValue": 0,
        "integerValue": 0,
        "moneyValue": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "text": "string"
      },
      "pageAnchor": {
        "pageRefs": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "layoutId": "string",
            "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
            "page": "string"
          }
        ]
      },
      "properties": [
        {}
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "redacted": true,
      "textAnchor": {
        "content": "string",
        "textSegments": [
          {
            "endIndex": "string",
            "startIndex": "string"
          }
        ]
      },
      "type": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "redacted": true,
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "type": "string"
}
```

An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Optional. Confidence of detected Schema entity. Range `[0, 1]`.|
|id|string|false|none|Optional. Canonical id. This will be a unique value in the entity list for this document.|
|mentionId|string|false|none|Optional. Deprecated. Use `id` field instead.|
|mentionText|string|false|none|Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.|
|normalizedValue|[GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue](#schemagoogleclouddocumentaiv1beta3documententitynormalizedvalue)|false|none|Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.|
|pageAnchor|[GoogleCloudDocumentaiV1beta3DocumentPageAnchor](#schemagoogleclouddocumentaiv1beta3documentpageanchor)|false|none|Optional. Represents the provenance of this entity wrt. the location on the page where it was found.|
|properties|[[GoogleCloudDocumentaiV1beta3DocumentEntity](#schemagoogleclouddocumentaiv1beta3documententity)]|false|none|Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|Optional. The history of this annotation.|
|redacted|boolean|false|none|Optional. Whether the entity will be redacted for de-identification purposes.|
|textAnchor|[GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta3documenttextanchor)|false|none|Optional. Provenance of the entity. Text anchor indexing into the Document.text.|
|type|string|false|none|Required. Entity type from a schema e.g. `Address`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue">GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documententitynormalizedvalue"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documententitynormalizedvalue"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documententitynormalizedvalue"></a>

```json
{
  "addressValue": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "booleanValue": true,
  "dateValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "datetimeValue": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "floatValue": 0,
  "integerValue": 0,
  "moneyValue": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "text": "string"
}
```

Parsed and normalized entity value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressValue|[GoogleTypePostalAddress](#schemagoogletypepostaladdress)|false|none|Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto|
|booleanValue|boolean|false|none|Boolean value. Can be used for entities with binary values, or for checkboxes.|
|dateValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto|
|datetimeValue|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto|
|floatValue|number(float)|false|none|Float value.|
|integerValue|integer(int32)|false|none|Integer value.|
|moneyValue|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto|
|text|string|false|none|Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentEntityRelation">GoogleCloudDocumentaiV1beta3DocumentEntityRelation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documententityrelation"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentEntityRelation"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documententityrelation"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documententityrelation"></a>

```json
{
  "objectId": "string",
  "relation": "string",
  "subjectId": "string"
}
```

Relationship between Entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|Object entity id.|
|relation|string|false|none|Relationship description.|
|subjectId|string|false|none|Subject entity id.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentOutputConfig">GoogleCloudDocumentaiV1beta3DocumentOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentoutputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentOutputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentoutputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentoutputconfig"></a>

```json
{
  "gcsOutputConfig": {
    "fieldMask": "string",
    "gcsUri": "string",
    "shardingConfig": {
      "pagesOverlap": 0,
      "pagesPerShard": 0
    }
  }
}
```

Config that controls the output of documents. All documents will be written as a JSON file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsOutputConfig|[GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig](#schemagoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig)|false|none|Output config to write the results to Cloud Storage.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig">GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig"></a>

```json
{
  "fieldMask": "string",
  "gcsUri": "string",
  "shardingConfig": {
    "pagesOverlap": 0,
    "pagesPerShard": 0
  }
}
```

The configuration used when outputting documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldMask|string(google-fieldmask)|false|none|Specifies which fields to include in the output documents. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.|
|gcsUri|string|false|none|The Cloud Storage uri (a directory) of the output.|
|shardingConfig|[GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig](#schemagoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfigshardingconfig)|false|none|Specifies the sharding config for the output document.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig">GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfigshardingconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfigshardingconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfigshardingconfig"></a>

```json
{
  "pagesOverlap": 0,
  "pagesPerShard": 0
}
```

The sharding config for the output document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagesOverlap|integer(int32)|false|none|The number of overlapping pages between consecutive shards.|
|pagesPerShard|integer(int32)|false|none|The number of pages per shard.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPage">GoogleCloudDocumentaiV1beta3DocumentPage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPage"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpage"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpage"></a>

```json
{
  "blocks": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "detectedBarcodes": [
    {
      "barcode": {
        "format": "string",
        "rawValue": "string",
        "valueFormat": "string"
      },
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "dimension": {
    "height": 0,
    "unit": "string",
    "width": 0
  },
  "formFields": [
    {
      "correctedKeyText": "string",
      "correctedValueText": "string",
      "fieldName": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "fieldValue": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "nameDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      },
      "valueDetectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "valueType": "string"
    }
  ],
  "image": {
    "content": "string",
    "height": 0,
    "mimeType": "string",
    "width": 0
  },
  "imageQualityScores": {
    "detectedDefects": [
      {
        "confidence": 0,
        "type": "string"
      }
    ],
    "qualityScore": 0
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "lines": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "pageNumber": 0,
  "paragraphs": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "symbols": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    }
  ],
  "tables": [
    {
      "bodyRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "headerRows": [
        {
          "cells": [
            {
              "colSpan": 0,
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ],
              "layout": {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "orientation": "ORIENTATION_UNSPECIFIED",
                "textAnchor": {
                  "content": "string",
                  "textSegments": [
                    {
                      "endIndex": "string",
                      "startIndex": "string"
                    }
                  ]
                }
              },
              "rowSpan": 0
            }
          ]
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "tokens": [
    {
      "detectedBreak": {
        "type": "TYPE_UNSPECIFIED"
      },
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "provenance": {
        "id": 0,
        "parents": [
          {
            "id": 0,
            "index": 0,
            "revision": 0
          }
        ],
        "revision": 0,
        "type": "OPERATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "transforms": [
    {
      "cols": 0,
      "data": "string",
      "rows": 0,
      "type": 0
    }
  ],
  "visualElements": [
    {
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "type": "string"
    }
  ]
}
```

A page in a Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudDocumentaiV1beta3DocumentPageBlock](#schemagoogleclouddocumentaiv1beta3documentpageblock)]|false|none|A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.|
|detectedBarcodes|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode](#schemagoogleclouddocumentaiv1beta3documentpagedetectedbarcode)]|false|none|A list of detected barcodes.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|dimension|[GoogleCloudDocumentaiV1beta3DocumentPageDimension](#schemagoogleclouddocumentaiv1beta3documentpagedimension)|false|none|Physical dimension of the page.|
|formFields|[[GoogleCloudDocumentaiV1beta3DocumentPageFormField](#schemagoogleclouddocumentaiv1beta3documentpageformfield)]|false|none|A list of visually detected form fields on the page.|
|image|[GoogleCloudDocumentaiV1beta3DocumentPageImage](#schemagoogleclouddocumentaiv1beta3documentpageimage)|false|none|Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.|
|imageQualityScores|[GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores](#schemagoogleclouddocumentaiv1beta3documentpageimagequalityscores)|false|none|Image Quality Scores.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for the page.|
|lines|[[GoogleCloudDocumentaiV1beta3DocumentPageLine](#schemagoogleclouddocumentaiv1beta3documentpageline)]|false|none|A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.|
|pageNumber|integer(int32)|false|none|1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.|
|paragraphs|[[GoogleCloudDocumentaiV1beta3DocumentPageParagraph](#schemagoogleclouddocumentaiv1beta3documentpageparagraph)]|false|none|A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this page.|
|symbols|[[GoogleCloudDocumentaiV1beta3DocumentPageSymbol](#schemagoogleclouddocumentaiv1beta3documentpagesymbol)]|false|none|A list of visually detected symbols on the page.|
|tables|[[GoogleCloudDocumentaiV1beta3DocumentPageTable](#schemagoogleclouddocumentaiv1beta3documentpagetable)]|false|none|A list of visually detected tables on the page.|
|tokens|[[GoogleCloudDocumentaiV1beta3DocumentPageToken](#schemagoogleclouddocumentaiv1beta3documentpagetoken)]|false|none|A list of visually detected tokens on the page.|
|transforms|[[GoogleCloudDocumentaiV1beta3DocumentPageMatrix](#schemagoogleclouddocumentaiv1beta3documentpagematrix)]|false|none|Transformation matrices that were applied to the original document image to produce Page.image.|
|visualElements|[[GoogleCloudDocumentaiV1beta3DocumentPageVisualElement](#schemagoogleclouddocumentaiv1beta3documentpagevisualelement)]|false|none|A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageAnchor">GoogleCloudDocumentaiV1beta3DocumentPageAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageanchor"></a>

```json
{
  "pageRefs": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "layoutId": "string",
      "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
      "page": "string"
    }
  ]
}
```

Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageRefs|[[GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef](#schemagoogleclouddocumentaiv1beta3documentpageanchorpageref)]|false|none|One or more references to visual page elements|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef">GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageanchorpageref"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageanchorpageref"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageanchorpageref"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "layoutId": "string",
  "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
  "page": "string"
}
```

Represents a weak reference to a page element within a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta3BoundingPoly](#schemagoogleclouddocumentaiv1beta3boundingpoly)|false|none|Optional. Identifies the bounding polygon of a layout element on the page.|
|confidence|number(float)|false|none|Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.|
|layoutId|string|false|none|Optional. Deprecated. Use PageRef.bounding_poly instead.|
|layoutType|string|false|none|Optional. The type of the layout element that is being referenced if any.|
|page|string(int64)|false|none|Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.|

#### Enumerated Values

|Property|Value|
|---|---|
|layoutType|LAYOUT_TYPE_UNSPECIFIED|
|layoutType|BLOCK|
|layoutType|PARAGRAPH|
|layoutType|LINE|
|layoutType|TOKEN|
|layoutType|VISUAL_ELEMENT|
|layoutType|TABLE|
|layoutType|FORM_FIELD|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageBlock">GoogleCloudDocumentaiV1beta3DocumentPageBlock</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageblock"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageBlock"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageblock"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageblock"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Block.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode">GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagedetectedbarcode"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagedetectedbarcode"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagedetectedbarcode"></a>

```json
{
  "barcode": {
    "format": "string",
    "rawValue": "string",
    "valueFormat": "string"
  },
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected barcode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barcode|[GoogleCloudDocumentaiV1beta3Barcode](#schemagoogleclouddocumentaiv1beta3barcode)|false|none|Detailed barcode information of the DetectedBarcode.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for DetectedBarcode.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage">GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagedetectedlanguage"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagedetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range `[0, 1]`.|
|languageCode|string|false|none|The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageDimension">GoogleCloudDocumentaiV1beta3DocumentPageDimension</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagedimension"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageDimension"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagedimension"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagedimension"></a>

```json
{
  "height": 0,
  "unit": "string",
  "width": 0
}
```

Dimension for the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|false|none|Page height.|
|unit|string|false|none|Dimension unit.|
|width|number(float)|false|none|Page width.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageFormField">GoogleCloudDocumentaiV1beta3DocumentPageFormField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageformfield"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageFormField"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageformfield"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageformfield"></a>

```json
{
  "correctedKeyText": "string",
  "correctedValueText": "string",
  "fieldName": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "fieldValue": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "nameDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  },
  "valueDetectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "valueType": "string"
}
```

A form field detected on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correctedKeyText|string|false|none|Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.|
|correctedValueText|string|false|none|Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.|
|fieldName|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.|
|fieldValue|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for the FormField value.|
|nameDetectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages for name together with confidence.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this annotation.|
|valueDetectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages for value together with confidence.|
|valueType|string|false|none|If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageImage">GoogleCloudDocumentaiV1beta3DocumentPageImage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageimage"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageImage"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageimage"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageimage"></a>

```json
{
  "content": "string",
  "height": 0,
  "mimeType": "string",
  "width": 0
}
```

Rendered image contents for this page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Raw byte content of the image.|
|height|integer(int32)|false|none|Height of the image in pixels.|
|mimeType|string|false|none|Encoding mime type for the image.|
|width|integer(int32)|false|none|Width of the image in pixels.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores">GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageimagequalityscores"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageimagequalityscores"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageimagequalityscores"></a>

```json
{
  "detectedDefects": [
    {
      "confidence": 0,
      "type": "string"
    }
  ],
  "qualityScore": 0
}
```

Image Quality Scores for the page image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedDefects|[[GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect](#schemagoogleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect)]|false|none|A list of detected defects.|
|qualityScore|number(float)|false|none|The overall quality score. Range `[0, 1]` where 1 is perfect quality.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect">GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect"></a>

```json
{
  "confidence": 0,
  "type": "string"
}
```

Image Quality Defects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.|
|type|string|false|none|Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageLayout">GoogleCloudDocumentaiV1beta3DocumentPageLayout</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagelayout"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageLayout"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagelayout"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagelayout"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "orientation": "ORIENTATION_UNSPECIFIED",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

Visual element describing a layout unit on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDocumentaiV1beta3BoundingPoly](#schemagoogleclouddocumentaiv1beta3boundingpoly)|false|none|The bounding polygon for the Layout.|
|confidence|number(float)|false|none|Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.|
|orientation|string|false|none|Detected orientation for the Layout.|
|textAnchor|[GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta3documenttextanchor)|false|none|Text anchor indexing into the Document.text.|

#### Enumerated Values

|Property|Value|
|---|---|
|orientation|ORIENTATION_UNSPECIFIED|
|orientation|PAGE_UP|
|orientation|PAGE_RIGHT|
|orientation|PAGE_DOWN|
|orientation|PAGE_LEFT|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageLine">GoogleCloudDocumentaiV1beta3DocumentPageLine</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageline"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageLine"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageline"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageline"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Line.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageMatrix">GoogleCloudDocumentaiV1beta3DocumentPageMatrix</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagematrix"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageMatrix"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagematrix"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagematrix"></a>

```json
{
  "cols": 0,
  "data": "string",
  "rows": 0,
  "type": 0
}
```

Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|integer(int32)|false|none|Number of columns in the matrix.|
|data|string(byte)|false|none|The matrix data.|
|rows|integer(int32)|false|none|Number of rows in the matrix.|
|type|integer(int32)|false|none|This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageParagraph">GoogleCloudDocumentaiV1beta3DocumentPageParagraph</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpageparagraph"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageParagraph"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpageparagraph"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpageparagraph"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A collection of lines that a human would perceive as a paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Paragraph.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageSymbol">GoogleCloudDocumentaiV1beta3DocumentPageSymbol</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagesymbol"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageSymbol"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagesymbol"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagesymbol"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  }
}
```

A detected symbol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Symbol.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageTable">GoogleCloudDocumentaiV1beta3DocumentPageTable</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagetable"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageTable"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagetable"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagetable"></a>

```json
{
  "bodyRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "headerRows": [
    {
      "cells": [
        {
          "colSpan": 0,
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ],
          "layout": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "orientation": "ORIENTATION_UNSPECIFIED",
            "textAnchor": {
              "content": "string",
              "textSegments": [
                {
                  "endIndex": "string",
                  "startIndex": "string"
                }
              ]
            }
          },
          "rowSpan": 0
        }
      ]
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A table representation similar to HTML table structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyRows|[[GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta3documentpagetabletablerow)]|false|none|Body rows of the table.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|headerRows|[[GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow](#schemagoogleclouddocumentaiv1beta3documentpagetabletablerow)]|false|none|Header rows of the table.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Table.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this table.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell">GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagetabletablecell"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagetabletablecell"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagetabletablecell"></a>

```json
{
  "colSpan": 0,
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "rowSpan": 0
}
```

A cell representation inside the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colSpan|integer(int32)|false|none|How many columns this cell spans.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for TableCell.|
|rowSpan|integer(int32)|false|none|How many rows this cell spans.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow">GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagetabletablerow"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagetabletablerow"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagetabletablerow"></a>

```json
{
  "cells": [
    {
      "colSpan": 0,
      "detectedLanguages": [
        {
          "confidence": 0,
          "languageCode": "string"
        }
      ],
      "layout": {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "orientation": "ORIENTATION_UNSPECIFIED",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      },
      "rowSpan": 0
    }
  ]
}
```

A row of table cells.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell](#schemagoogleclouddocumentaiv1beta3documentpagetabletablecell)]|false|none|Cells that make up this row.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageToken">GoogleCloudDocumentaiV1beta3DocumentPageToken</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagetoken"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageToken"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagetoken"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagetoken"></a>

```json
{
  "detectedBreak": {
    "type": "TYPE_UNSPECIFIED"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "provenance": {
    "id": 0,
    "parents": [
      {
        "id": 0,
        "index": 0,
        "revision": 0
      }
    ],
    "revision": 0,
    "type": "OPERATION_TYPE_UNSPECIFIED"
  }
}
```

A detected token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak](#schemagoogleclouddocumentaiv1beta3documentpagetokendetectedbreak)|false|none|Detected break at the end of a Token.|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for Token.|
|provenance|[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)|false|none|The history of this annotation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak">GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagetokendetectedbreak"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagetokendetectedbreak"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagetokendetectedbreak"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

Detected break at the end of a Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|SPACE|
|type|WIDE_SPACE|
|type|HYPHEN|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentPageVisualElement">GoogleCloudDocumentaiV1beta3DocumentPageVisualElement</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentpagevisualelement"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentPageVisualElement"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentpagevisualelement"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentpagevisualelement"></a>

```json
{
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ],
  "layout": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "confidence": 0,
    "orientation": "ORIENTATION_UNSPECIFIED",
    "textAnchor": {
      "content": "string",
      "textSegments": [
        {
          "endIndex": "string",
          "startIndex": "string"
        }
      ]
    }
  },
  "type": "string"
}
```

Detected non-text visual elements e.g. checkbox, signature etc. on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguages|[[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#schemagoogleclouddocumentaiv1beta3documentpagedetectedlanguage)]|false|none|A list of detected languages together with confidence.|
|layout|[GoogleCloudDocumentaiV1beta3DocumentPageLayout](#schemagoogleclouddocumentaiv1beta3documentpagelayout)|false|none|Layout for VisualElement.|
|type|string|false|none|Type of the VisualElement.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentProvenance">GoogleCloudDocumentaiV1beta3DocumentProvenance</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentprovenance"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentProvenance"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentprovenance"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentprovenance"></a>

```json
{
  "id": 0,
  "parents": [
    {
      "id": 0,
      "index": 0,
      "revision": 0
    }
  ],
  "revision": 0,
  "type": "OPERATION_TYPE_UNSPECIFIED"
}
```

Structure to identify provenance relationships between annotations in different revisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The Id of this operation. Needs to be unique within the scope of the revision.|
|parents|[[GoogleCloudDocumentaiV1beta3DocumentProvenanceParent](#schemagoogleclouddocumentaiv1beta3documentprovenanceparent)]|false|none|References to the original elements that are replaced.|
|revision|integer(int32)|false|none|The index of the revision that produced this element.|
|type|string|false|none|The type of provenance operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OPERATION_TYPE_UNSPECIFIED|
|type|ADD|
|type|REMOVE|
|type|UPDATE|
|type|REPLACE|
|type|EVAL_REQUESTED|
|type|EVAL_APPROVED|
|type|EVAL_SKIPPED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentProvenanceParent">GoogleCloudDocumentaiV1beta3DocumentProvenanceParent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentprovenanceparent"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentProvenanceParent"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentprovenanceparent"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentprovenanceparent"></a>

```json
{
  "id": 0,
  "index": 0,
  "revision": 0
}
```

The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the parent provenance.|
|index|integer(int32)|false|none|The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.|
|revision|integer(int32)|false|none|The index of the index into current revision's parent_ids list.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentRevision">GoogleCloudDocumentaiV1beta3DocumentRevision</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentrevision"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentRevision"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentrevision"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentrevision"></a>

```json
{
  "agent": "string",
  "createTime": "string",
  "humanReview": {
    "state": "string",
    "stateMessage": "string"
  },
  "id": "string",
  "parent": [
    0
  ],
  "parentIds": [
    "string"
  ],
  "processor": "string"
}
```

Contains past or forward revisions of this document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|false|none|If the change was made by a person specify the name or id of that person.|
|createTime|string(google-datetime)|false|none|The time that the revision was created, internally generated by doc proto storage at the time of create.|
|humanReview|[GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview](#schemagoogleclouddocumentaiv1beta3documentrevisionhumanreview)|false|none|Human Review information of this revision.|
|id|string|false|none|Id of the revision, internally generated by doc proto storage. Unique within the context of the document.|
|parent|[integer(int32)]|false|none|The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.|
|parentIds|[string]|false|none|The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.|
|processor|string|false|none|If the annotation was made by processor identify the processor by its resource name.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview">GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentrevisionhumanreview"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentrevisionhumanreview"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentrevisionhumanreview"></a>

```json
{
  "state": "string",
  "stateMessage": "string"
}
```

Human Review information of the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Human review state. e.g. `requested`, `succeeded`, `rejected`.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentSchema">GoogleCloudDocumentaiV1beta3DocumentSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentschema"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentSchema"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentschema"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentschema"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "entityTypes": [
    {
      "baseTypes": [
        "string"
      ],
      "displayName": "string",
      "enumValues": {
        "values": [
          "string"
        ]
      },
      "name": "string",
      "properties": [
        {
          "name": "string",
          "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
          "valueType": "string"
        }
      ]
    }
  ],
  "metadata": {
    "documentAllowMultipleLabels": true,
    "documentSplitter": true,
    "prefixedNamingOnProperties": true,
    "skipNamingValidation": true
  }
}
```

The schema defines the output of the processed document by a processor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the schema.|
|displayName|string|false|none|Display name to show to users.|
|entityTypes|[[GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType](#schemagoogleclouddocumentaiv1beta3documentschemaentitytype)]|false|none|Entity types of the schema.|
|metadata|[GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata](#schemagoogleclouddocumentaiv1beta3documentschemametadata)|false|none|Metadata of the schema.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType">GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentschemaentitytype"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentschemaentitytype"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentschemaentitytype"></a>

```json
{
  "baseTypes": [
    "string"
  ],
  "displayName": "string",
  "enumValues": {
    "values": [
      "string"
    ]
  },
  "name": "string",
  "properties": [
    {
      "name": "string",
      "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
      "valueType": "string"
    }
  ]
}
```

EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseTypes|[string]|false|none|The entity type that this type is derived from. For now, one and only one should be set.|
|displayName|string|false|none|User defined name for the type.|
|enumValues|[GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues](#schemagoogleclouddocumentaiv1beta3documentschemaentitytypeenumvalues)|false|none|If specified, lists all the possible values for this entity. This should not be more than a handful of values. If the number of values is >10 or could change frequently use the `EntityType.value_ontology` field and specify a list of all possible values in a value ontology file.|
|name|string|false|none|Name of the type. It must be unique within the schema file and cannot be a 'Common Type'. Besides that we use the following naming conventions: - *use `snake_casing`* - name matching is case-sensitive - Maximum 64 characters. - Must start with a letter. - Allowed characters: ASCII letters `[a-z0-9_-]`. (For backward compatibility internal infrastructure and tooling can handle any ascii character) - The `/` is sometimes used to denote a property of a type. For example `line_item/amount`. This convention is deprecated, but will still be honored for backward compatibility.|
|properties|[[GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty](#schemagoogleclouddocumentaiv1beta3documentschemaentitytypeproperty)]|false|none|Description the nested structure, or composition of an entity.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues">GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentschemaentitytypeenumvalues"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentschemaentitytypeenumvalues"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentschemaentitytypeenumvalues"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Defines the a list of enum values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|The individual values that this enum values type can include.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty">GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentschemaentitytypeproperty"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentschemaentitytypeproperty"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentschemaentitytypeproperty"></a>

```json
{
  "name": "string",
  "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
  "valueType": "string"
}
```

Defines properties that can be part of the entity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the property. Follows the same guidelines as the EntityType name.|
|occurrenceType|string|false|none|Occurrence type limits the number of instances an entity type appears in the document.|
|valueType|string|false|none|A reference to the value type of the property. This type is subject to the same conventions as the `Entity.base_types` field.|

#### Enumerated Values

|Property|Value|
|---|---|
|occurrenceType|OCCURRENCE_TYPE_UNSPECIFIED|
|occurrenceType|OPTIONAL_ONCE|
|occurrenceType|OPTIONAL_MULTIPLE|
|occurrenceType|REQUIRED_ONCE|
|occurrenceType|REQUIRED_MULTIPLE|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata">GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentschemametadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentschemametadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentschemametadata"></a>

```json
{
  "documentAllowMultipleLabels": true,
  "documentSplitter": true,
  "prefixedNamingOnProperties": true,
  "skipNamingValidation": true
}
```

Metadata for global schema behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentAllowMultipleLabels|boolean|false|none|If true, on a given page, there can be multiple `document` annotations covering it.|
|documentSplitter|boolean|false|none|If true, a `document` entity type can be applied to subdocument ( splitting). Otherwise, it can only be applied to the entire document (classification).|
|prefixedNamingOnProperties|boolean|false|none|If set, all the nested entities must be prefixed with the parents.|
|skipNamingValidation|boolean|false|none|If set, we will skip the naming format validation in the schema. So the string values in `DocumentSchema.EntityType.name` and `DocumentSchema.EntityType.Property.name` will not be checked.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentShardInfo">GoogleCloudDocumentaiV1beta3DocumentShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentshardinfo"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentShardInfo"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentshardinfo"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentshardinfo"></a>

```json
{
  "shardCount": "string",
  "shardIndex": "string",
  "textOffset": "string"
}
```

For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shardCount|string(int64)|false|none|Total number of shards.|
|shardIndex|string(int64)|false|none|The 0-based index of this shard.|
|textOffset|string(int64)|false|none|The index of the first character in Document.text in the overall document global text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentStyle">GoogleCloudDocumentaiV1beta3DocumentStyle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentstyle"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentStyle"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentstyle"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentstyle"></a>

```json
{
  "backgroundColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "fontFamily": "string",
  "fontSize": {
    "size": 0,
    "unit": "string"
  },
  "fontWeight": "string",
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  },
  "textDecoration": "string",
  "textStyle": "string"
}
```

Annotation for common text style attributes. This adheres to CSS conventions as much as possible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text background color.|
|color|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Text color.|
|fontFamily|string|false|none|Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp|
|fontSize|[GoogleCloudDocumentaiV1beta3DocumentStyleFontSize](#schemagoogleclouddocumentaiv1beta3documentstylefontsize)|false|none|Font size.|
|fontWeight|string|false|none|Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp|
|textAnchor|[GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta3documenttextanchor)|false|none|Text anchor indexing into the Document.text.|
|textDecoration|string|false|none|Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp|
|textStyle|string|false|none|Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentStyleFontSize">GoogleCloudDocumentaiV1beta3DocumentStyleFontSize</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documentstylefontsize"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentStyleFontSize"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documentstylefontsize"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documentstylefontsize"></a>

```json
{
  "size": 0,
  "unit": "string"
}
```

Font size with unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|number(float)|false|none|Font size for the text.|
|unit|string|false|none|Unit for the font size. Follows CSS naming (in, px, pt, etc.).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentTextAnchor">GoogleCloudDocumentaiV1beta3DocumentTextAnchor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documenttextanchor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentTextAnchor"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documenttextanchor"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documenttextanchor"></a>

```json
{
  "content": "string",
  "textSegments": [
    {
      "endIndex": "string",
      "startIndex": "string"
    }
  ]
}
```

Text reference indexing into the Document.text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.|
|textSegments|[[GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment](#schemagoogleclouddocumentaiv1beta3documenttextanchortextsegment)]|false|none|The text segments from the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment">GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documenttextanchortextsegment"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documenttextanchortextsegment"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documenttextanchortextsegment"></a>

```json
{
  "endIndex": "string",
  "startIndex": "string"
}
```

A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endIndex|string(int64)|false|none|TextSegment half open end UTF-8 char index in the Document.text.|
|startIndex|string(int64)|false|none|TextSegment start UTF-8 char index in the Document.text.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3DocumentTextChange">GoogleCloudDocumentaiV1beta3DocumentTextChange</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3documenttextchange"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3DocumentTextChange"></a>
<a id="tocSgoogleclouddocumentaiv1beta3documenttextchange"></a>
<a id="tocsgoogleclouddocumentaiv1beta3documenttextchange"></a>

```json
{
  "changedText": "string",
  "provenance": [
    {
      "id": 0,
      "parents": [
        {
          "id": 0,
          "index": 0,
          "revision": 0
        }
      ],
      "revision": 0,
      "type": "OPERATION_TYPE_UNSPECIFIED"
    }
  ],
  "textAnchor": {
    "content": "string",
    "textSegments": [
      {
        "endIndex": "string",
        "startIndex": "string"
      }
    ]
  }
}
```

This message is used for text changes aka. OCR corrections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changedText|string|false|none|The text that replaces the text identified in the `text_anchor`.|
|provenance|[[GoogleCloudDocumentaiV1beta3DocumentProvenance](#schemagoogleclouddocumentaiv1beta3documentprovenance)]|false|none|The history of this annotation.|
|textAnchor|[GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#schemagoogleclouddocumentaiv1beta3documenttextanchor)|false|none|Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EnableProcessorMetadata">GoogleCloudDocumentaiV1beta3EnableProcessorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3enableprocessormetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EnableProcessorMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3enableprocessormetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3enableprocessormetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for enable processor method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EnableProcessorRequest">GoogleCloudDocumentaiV1beta3EnableProcessorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3enableprocessorrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EnableProcessorRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3enableprocessorrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3enableprocessorrequest"></a>

```json
{}
```

Request message for the enable processor method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EnableProcessorResponse">GoogleCloudDocumentaiV1beta3EnableProcessorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3enableprocessorresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EnableProcessorResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3enableprocessorresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3enableprocessorresponse"></a>

```json
{}
```

Response message for the enable processor method. Intentionally empty proto for adding fields in future.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluateprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluateprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluateprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest">GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluateprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluateprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluateprocessorversionrequest"></a>

```json
{
  "evaluationDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  }
}
```

Evaluates the given ProcessorVersion against the supplied documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationDocuments|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|none|Optional. The documents used in the evaluation. If unspecified, use the processor's dataset as evaluation input.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse">GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluateprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluateprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluateprocessorversionresponse"></a>

```json
{
  "evaluation": "string"
}
```

Metadata of the EvaluateProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluation|string|false|none|The resource name of the created evaluation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3Evaluation">GoogleCloudDocumentaiV1beta3Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluation"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3Evaluation"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluation"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluation"></a>

```json
{
  "allEntitiesMetrics": {
    "auprc": 0,
    "auprcExact": 0,
    "confidenceLevelMetrics": [
      {
        "confidenceLevel": 0,
        "metrics": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        }
      }
    ],
    "confidenceLevelMetricsExact": [
      {
        "confidenceLevel": 0,
        "metrics": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        }
      }
    ],
    "estimatedCalibrationError": 0,
    "estimatedCalibrationErrorExact": 0,
    "metricsType": "METRICS_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "documentCounters": {
    "evaluatedDocumentsCount": 0,
    "failedDocumentsCount": 0,
    "inputDocumentsCount": 0,
    "invalidDocumentsCount": 0
  },
  "entityMetrics": {
    "property1": {
      "auprc": 0,
      "auprcExact": 0,
      "confidenceLevelMetrics": [
        {
          "confidenceLevel": 0,
          "metrics": {
            "f1Score": 0,
            "falseNegativesCount": 0,
            "falsePositivesCount": 0,
            "groundTruthDocumentCount": 0,
            "groundTruthOccurrencesCount": 0,
            "precision": 0,
            "predictedDocumentCount": 0,
            "predictedOccurrencesCount": 0,
            "recall": 0,
            "totalDocumentsCount": 0,
            "truePositivesCount": 0
          }
        }
      ],
      "confidenceLevelMetricsExact": [
        {
          "confidenceLevel": 0,
          "metrics": {
            "f1Score": 0,
            "falseNegativesCount": 0,
            "falsePositivesCount": 0,
            "groundTruthDocumentCount": 0,
            "groundTruthOccurrencesCount": 0,
            "precision": 0,
            "predictedDocumentCount": 0,
            "predictedOccurrencesCount": 0,
            "recall": 0,
            "totalDocumentsCount": 0,
            "truePositivesCount": 0
          }
        }
      ],
      "estimatedCalibrationError": 0,
      "estimatedCalibrationErrorExact": 0,
      "metricsType": "METRICS_TYPE_UNSPECIFIED"
    },
    "property2": {
      "auprc": 0,
      "auprcExact": 0,
      "confidenceLevelMetrics": [
        {
          "confidenceLevel": 0,
          "metrics": {
            "f1Score": 0,
            "falseNegativesCount": 0,
            "falsePositivesCount": 0,
            "groundTruthDocumentCount": 0,
            "groundTruthOccurrencesCount": 0,
            "precision": 0,
            "predictedDocumentCount": 0,
            "predictedOccurrencesCount": 0,
            "recall": 0,
            "totalDocumentsCount": 0,
            "truePositivesCount": 0
          }
        }
      ],
      "confidenceLevelMetricsExact": [
        {
          "confidenceLevel": 0,
          "metrics": {
            "f1Score": 0,
            "falseNegativesCount": 0,
            "falsePositivesCount": 0,
            "groundTruthDocumentCount": 0,
            "groundTruthOccurrencesCount": 0,
            "precision": 0,
            "predictedDocumentCount": 0,
            "predictedOccurrencesCount": 0,
            "recall": 0,
            "totalDocumentsCount": 0,
            "truePositivesCount": 0
          }
        }
      ],
      "estimatedCalibrationError": 0,
      "estimatedCalibrationErrorExact": 0,
      "metricsType": "METRICS_TYPE_UNSPECIFIED"
    }
  },
  "kmsKeyName": "string",
  "kmsKeyVersionName": "string",
  "name": "string"
}
```

An evaluation of a ProcessorVersion's performance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allEntitiesMetrics|[GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics](#schemagoogleclouddocumentaiv1beta3evaluationmulticonfidencemetrics)|false|none|Metrics for all the entities in aggregate.|
|createTime|string(google-datetime)|false|none|The time that the evaluation was created.|
|documentCounters|[GoogleCloudDocumentaiV1beta3EvaluationCounters](#schemagoogleclouddocumentaiv1beta3evaluationcounters)|false|none|Counters for the documents used in the evaluation.|
|entityMetrics|object|false|none|Metrics across confidence levels, for different entities.|
|kmsKeyName|string|false|none|The KMS key name used for encryption.|
|kmsKeyVersionName|string|false|none|The KMS key version with which data is encrypted.|
|name|string|false|none|The resource name of the evaluation. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}/evaluations/{evaluation}`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics">GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluationconfidencelevelmetrics"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluationconfidencelevelmetrics"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluationconfidencelevelmetrics"></a>

```json
{
  "confidenceLevel": 0,
  "metrics": {
    "f1Score": 0,
    "falseNegativesCount": 0,
    "falsePositivesCount": 0,
    "groundTruthDocumentCount": 0,
    "groundTruthOccurrencesCount": 0,
    "precision": 0,
    "predictedDocumentCount": 0,
    "predictedOccurrencesCount": 0,
    "recall": 0,
    "totalDocumentsCount": 0,
    "truePositivesCount": 0
  }
}
```

Evaluations metrics, at a specific confidence level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceLevel|number(float)|false|none|The confidence level.|
|metrics|[GoogleCloudDocumentaiV1beta3EvaluationMetrics](#schemagoogleclouddocumentaiv1beta3evaluationmetrics)|false|none|The metrics at the specific confidence level.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluationCounters">GoogleCloudDocumentaiV1beta3EvaluationCounters</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluationcounters"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluationCounters"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluationcounters"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluationcounters"></a>

```json
{
  "evaluatedDocumentsCount": 0,
  "failedDocumentsCount": 0,
  "inputDocumentsCount": 0,
  "invalidDocumentsCount": 0
}
```

Evaluation counters for the documents that were used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluatedDocumentsCount|integer(int32)|false|none|How many documents were used in the evaluation.|
|failedDocumentsCount|integer(int32)|false|none|How many documents were not included in the evaluation as Document AI failed to process them.|
|inputDocumentsCount|integer(int32)|false|none|How many documents were sent for evaluation.|
|invalidDocumentsCount|integer(int32)|false|none|How many documents were not included in the evaluation as they didn't pass validation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluationMetrics">GoogleCloudDocumentaiV1beta3EvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluationmetrics"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluationMetrics"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluationmetrics"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluationmetrics"></a>

```json
{
  "f1Score": 0,
  "falseNegativesCount": 0,
  "falsePositivesCount": 0,
  "groundTruthDocumentCount": 0,
  "groundTruthOccurrencesCount": 0,
  "precision": 0,
  "predictedDocumentCount": 0,
  "predictedOccurrencesCount": 0,
  "recall": 0,
  "totalDocumentsCount": 0,
  "truePositivesCount": 0
}
```

Evaluation metrics, either in aggregate or about a specific entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|f1Score|number(float)|false|none|The calculated f1 score.|
|falseNegativesCount|integer(int32)|false|none|The amount of false negatives.|
|falsePositivesCount|integer(int32)|false|none|The amount of false positives.|
|groundTruthDocumentCount|integer(int32)|false|none|The amount of documents with a ground truth occurrence.|
|groundTruthOccurrencesCount|integer(int32)|false|none|The amount of occurrences in ground truth documents.|
|precision|number(float)|false|none|The calculated precision.|
|predictedDocumentCount|integer(int32)|false|none|The amount of documents with a predicted occurrence.|
|predictedOccurrencesCount|integer(int32)|false|none|The amount of occurrences in predicted documents.|
|recall|number(float)|false|none|The calculated recall.|
|totalDocumentsCount|integer(int32)|false|none|The amount of documents that had an occurrence of this label.|
|truePositivesCount|integer(int32)|false|none|The amount of true positives.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics">GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluationmulticonfidencemetrics"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluationmulticonfidencemetrics"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluationmulticonfidencemetrics"></a>

```json
{
  "auprc": 0,
  "auprcExact": 0,
  "confidenceLevelMetrics": [
    {
      "confidenceLevel": 0,
      "metrics": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      }
    }
  ],
  "confidenceLevelMetricsExact": [
    {
      "confidenceLevel": 0,
      "metrics": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      }
    }
  ],
  "estimatedCalibrationError": 0,
  "estimatedCalibrationErrorExact": 0,
  "metricsType": "METRICS_TYPE_UNSPECIFIED"
}
```

Metrics across multiple confidence levels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auprc|number(float)|false|none|The calculated area under the precision recall curve (AUPRC), computed by integrating over all confidence thresholds.|
|auprcExact|number(float)|false|none|The AUPRC for metrics with fuzzy matching disabled, i.e., exact matching only.|
|confidenceLevelMetrics|[[GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics](#schemagoogleclouddocumentaiv1beta3evaluationconfidencelevelmetrics)]|false|none|Metrics across confidence levels with fuzzy matching enabled.|
|confidenceLevelMetricsExact|[[GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics](#schemagoogleclouddocumentaiv1beta3evaluationconfidencelevelmetrics)]|false|none|Metrics across confidence levels with only exact matching.|
|estimatedCalibrationError|number(float)|false|none|The Estimated Calibration Error (ECE) of the confidence of the predicted entities.|
|estimatedCalibrationErrorExact|number(float)|false|none|The ECE for the predicted entities with fuzzy matching disabled, i.e., exact matching only.|
|metricsType|string|false|none|The metrics type for the label.|

#### Enumerated Values

|Property|Value|
|---|---|
|metricsType|METRICS_TYPE_UNSPECIFIED|
|metricsType|AGGREGATE|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3EvaluationReference">GoogleCloudDocumentaiV1beta3EvaluationReference</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3evaluationreference"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3EvaluationReference"></a>
<a id="tocSgoogleclouddocumentaiv1beta3evaluationreference"></a>
<a id="tocsgoogleclouddocumentaiv1beta3evaluationreference"></a>

```json
{
  "aggregateMetrics": {
    "f1Score": 0,
    "falseNegativesCount": 0,
    "falsePositivesCount": 0,
    "groundTruthDocumentCount": 0,
    "groundTruthOccurrencesCount": 0,
    "precision": 0,
    "predictedDocumentCount": 0,
    "predictedOccurrencesCount": 0,
    "recall": 0,
    "totalDocumentsCount": 0,
    "truePositivesCount": 0
  },
  "aggregateMetricsExact": {
    "f1Score": 0,
    "falseNegativesCount": 0,
    "falsePositivesCount": 0,
    "groundTruthDocumentCount": 0,
    "groundTruthOccurrencesCount": 0,
    "precision": 0,
    "predictedDocumentCount": 0,
    "predictedOccurrencesCount": 0,
    "recall": 0,
    "totalDocumentsCount": 0,
    "truePositivesCount": 0
  },
  "evaluation": "string",
  "operation": "string"
}
```

Gives a short summary of an evaluation, and links to the evaluation itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateMetrics|[GoogleCloudDocumentaiV1beta3EvaluationMetrics](#schemagoogleclouddocumentaiv1beta3evaluationmetrics)|false|none|An aggregate of the statistics for the evaluation with fuzzy matching on.|
|aggregateMetricsExact|[GoogleCloudDocumentaiV1beta3EvaluationMetrics](#schemagoogleclouddocumentaiv1beta3evaluationmetrics)|false|none|An aggregate of the statistics for the evaluation with fuzzy matching off.|
|evaluation|string|false|none|The resource name of the evaluation.|
|operation|string|false|none|The resource name of the Long Running Operation for the evaluation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse">GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3fetchprocessortypesresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3fetchprocessortypesresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3fetchprocessortypesresponse"></a>

```json
{
  "processorTypes": [
    {
      "allowCreation": true,
      "availableLocations": [
        {
          "locationId": "string"
        }
      ],
      "category": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "sampleDocumentUris": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

Response message for fetch processor types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorTypes|[[GoogleCloudDocumentaiV1beta3ProcessorType](#schemagoogleclouddocumentaiv1beta3processortype)]|false|none|The list of processor types.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3GcsDocument">GoogleCloudDocumentaiV1beta3GcsDocument</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3gcsdocument"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3GcsDocument"></a>
<a id="tocSgoogleclouddocumentaiv1beta3gcsdocument"></a>
<a id="tocsgoogleclouddocumentaiv1beta3gcsdocument"></a>

```json
{
  "gcsUri": "string",
  "mimeType": "string"
}
```

Specifies a document stored on Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUri|string|false|none|The Cloud Storage object uri.|
|mimeType|string|false|none|An IANA MIME type (RFC6838) of the content.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3GcsDocuments">GoogleCloudDocumentaiV1beta3GcsDocuments</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3gcsdocuments"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3GcsDocuments"></a>
<a id="tocSgoogleclouddocumentaiv1beta3gcsdocuments"></a>
<a id="tocsgoogleclouddocumentaiv1beta3gcsdocuments"></a>

```json
{
  "documents": [
    {
      "gcsUri": "string",
      "mimeType": "string"
    }
  ]
}
```

Specifies a set of documents on Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[GoogleCloudDocumentaiV1beta3GcsDocument](#schemagoogleclouddocumentaiv1beta3gcsdocument)]|false|none|The list of documents.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3GcsPrefix">GoogleCloudDocumentaiV1beta3GcsPrefix</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3gcsprefix"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3GcsPrefix"></a>
<a id="tocSgoogleclouddocumentaiv1beta3gcsprefix"></a>
<a id="tocsgoogleclouddocumentaiv1beta3gcsprefix"></a>

```json
{
  "gcsUriPrefix": "string"
}
```

Specifies all documents on Cloud Storage with a common prefix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUriPrefix|string|false|none|The URI prefix.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3HumanReviewStatus">GoogleCloudDocumentaiV1beta3HumanReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3humanreviewstatus"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3HumanReviewStatus"></a>
<a id="tocSgoogleclouddocumentaiv1beta3humanreviewstatus"></a>
<a id="tocsgoogleclouddocumentaiv1beta3humanreviewstatus"></a>

```json
{
  "humanReviewOperation": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string"
}
```

The status of human review on a processed document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|humanReviewOperation|string|false|none|The name of the operation triggered by the processed document. This field is populated only when the [state] is [HUMAN_REVIEW_IN_PROGRESS]. It has the same response type and metadata as the long running operation returned by [ReviewDocument] method.|
|state|string|false|none|The state of human review on the processing request.|
|stateMessage|string|false|none|A message providing more details about the human review state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SKIPPED|
|state|VALIDATION_PASSED|
|state|IN_PROGRESS|
|state|ERROR|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3importprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3importprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3importprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for the ImportProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata for the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest">GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3importprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3importprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3importprocessorversionrequest"></a>

```json
{
  "processorVersionSource": "string"
}
```

The request message for the ImportProcessorVersion method. This method requires source processor version and destination processor are in the same location. This method requires Document AI Service Agent of the destination project in the source project's IAM with [Document AI Editor role](https://cloud.google.com/document-ai/docs/access-control/iam-roles). The destination project is specified as part of the `parent` field. The source project is specified as part of `source` field. The Service Agent for Document AI can be found in https://cloud.google.com/iam/docs/service-agents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersionSource|string|false|none|The source processor version to import from.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse">GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3importprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3importprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3importprocessorversionresponse"></a>

```json
{
  "processorVersion": "string"
}
```

The response message for the ImportProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersion|string|false|none|The destination processor version name.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ListEvaluationsResponse">GoogleCloudDocumentaiV1beta3ListEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3listevaluationsresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ListEvaluationsResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3listevaluationsresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3listevaluationsresponse"></a>

```json
{
  "evaluations": [
    {
      "allEntitiesMetrics": {
        "auprc": 0,
        "auprcExact": 0,
        "confidenceLevelMetrics": [
          {
            "confidenceLevel": 0,
            "metrics": {
              "f1Score": 0,
              "falseNegativesCount": 0,
              "falsePositivesCount": 0,
              "groundTruthDocumentCount": 0,
              "groundTruthOccurrencesCount": 0,
              "precision": 0,
              "predictedDocumentCount": 0,
              "predictedOccurrencesCount": 0,
              "recall": 0,
              "totalDocumentsCount": 0,
              "truePositivesCount": 0
            }
          }
        ],
        "confidenceLevelMetricsExact": [
          {
            "confidenceLevel": 0,
            "metrics": {
              "f1Score": 0,
              "falseNegativesCount": 0,
              "falsePositivesCount": 0,
              "groundTruthDocumentCount": 0,
              "groundTruthOccurrencesCount": 0,
              "precision": 0,
              "predictedDocumentCount": 0,
              "predictedOccurrencesCount": 0,
              "recall": 0,
              "totalDocumentsCount": 0,
              "truePositivesCount": 0
            }
          }
        ],
        "estimatedCalibrationError": 0,
        "estimatedCalibrationErrorExact": 0,
        "metricsType": "METRICS_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "documentCounters": {
        "evaluatedDocumentsCount": 0,
        "failedDocumentsCount": 0,
        "inputDocumentsCount": 0,
        "invalidDocumentsCount": 0
      },
      "entityMetrics": {
        "property1": {
          "auprc": 0,
          "auprcExact": 0,
          "confidenceLevelMetrics": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "confidenceLevelMetricsExact": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "estimatedCalibrationError": 0,
          "estimatedCalibrationErrorExact": 0,
          "metricsType": "METRICS_TYPE_UNSPECIFIED"
        },
        "property2": {
          "auprc": 0,
          "auprcExact": 0,
          "confidenceLevelMetrics": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "confidenceLevelMetricsExact": [
            {
              "confidenceLevel": 0,
              "metrics": {
                "f1Score": 0,
                "falseNegativesCount": 0,
                "falsePositivesCount": 0,
                "groundTruthDocumentCount": 0,
                "groundTruthOccurrencesCount": 0,
                "precision": 0,
                "predictedDocumentCount": 0,
                "predictedOccurrencesCount": 0,
                "recall": 0,
                "totalDocumentsCount": 0,
                "truePositivesCount": 0
              }
            }
          ],
          "estimatedCalibrationError": 0,
          "estimatedCalibrationErrorExact": 0,
          "metricsType": "METRICS_TYPE_UNSPECIFIED"
        }
      },
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response from ListEvaluations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluations|[[GoogleCloudDocumentaiV1beta3Evaluation](#schemagoogleclouddocumentaiv1beta3evaluation)]|false|none|The evaluations requested.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse">GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3listprocessortypesresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3listprocessortypesresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3listprocessortypesresponse"></a>

```json
{
  "nextPageToken": "string",
  "processorTypes": [
    {
      "allowCreation": true,
      "availableLocations": [
        {
          "locationId": "string"
        }
      ],
      "category": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "sampleDocumentUris": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

Response message for list processor types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Points to the next page, otherwise empty.|
|processorTypes|[[GoogleCloudDocumentaiV1beta3ProcessorType](#schemagoogleclouddocumentaiv1beta3processortype)]|false|none|The processor types.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse">GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3listprocessorversionsresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3listprocessorversionsresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3listprocessorversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "processorVersions": [
    {
      "createTime": "string",
      "deprecationInfo": {
        "deprecationTime": "string",
        "replacementProcessorVersion": "string"
      },
      "displayName": "string",
      "documentSchema": {
        "description": "string",
        "displayName": "string",
        "entityTypes": [
          {
            "baseTypes": [
              "string"
            ],
            "displayName": "string",
            "enumValues": {
              "values": [
                "string"
              ]
            },
            "name": "string",
            "properties": [
              {
                "name": "string",
                "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
                "valueType": "string"
              }
            ]
          }
        ],
        "metadata": {
          "documentAllowMultipleLabels": true,
          "documentSplitter": true,
          "prefixedNamingOnProperties": true,
          "skipNamingValidation": true
        }
      },
      "googleManaged": true,
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "latestEvaluation": {
        "aggregateMetrics": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "aggregateMetricsExact": {
          "f1Score": 0,
          "falseNegativesCount": 0,
          "falsePositivesCount": 0,
          "groundTruthDocumentCount": 0,
          "groundTruthOccurrencesCount": 0,
          "precision": 0,
          "predictedDocumentCount": 0,
          "predictedOccurrencesCount": 0,
          "recall": 0,
          "totalDocumentsCount": 0,
          "truePositivesCount": 0
        },
        "evaluation": "string",
        "operation": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Response message for list processors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Points to the next processor, otherwise empty.|
|processorVersions|[[GoogleCloudDocumentaiV1beta3ProcessorVersion](#schemagoogleclouddocumentaiv1beta3processorversion)]|false|none|The list of processors.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ListProcessorsResponse">GoogleCloudDocumentaiV1beta3ListProcessorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3listprocessorsresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ListProcessorsResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3listprocessorsresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3listprocessorsresponse"></a>

```json
{
  "nextPageToken": "string",
  "processors": [
    {
      "createTime": "string",
      "defaultProcessorVersion": "string",
      "displayName": "string",
      "kmsKeyName": "string",
      "name": "string",
      "processEndpoint": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

Response message for list processors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Points to the next processor, otherwise empty.|
|processors|[[GoogleCloudDocumentaiV1beta3Processor](#schemagoogleclouddocumentaiv1beta3processor)]|false|none|The list of processors.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3NormalizedVertex">GoogleCloudDocumentaiV1beta3NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3normalizedvertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3NormalizedVertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta3normalizedvertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta3normalizedvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3OcrConfig">GoogleCloudDocumentaiV1beta3OcrConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3ocrconfig"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3OcrConfig"></a>
<a id="tocSgoogleclouddocumentaiv1beta3ocrconfig"></a>
<a id="tocsgoogleclouddocumentaiv1beta3ocrconfig"></a>

```json
{
  "advancedOcrOptions": [
    "string"
  ],
  "enableImageQualityScores": true,
  "enableNativePdfParsing": true,
  "enableSymbol": true,
  "hints": {
    "languageHints": [
      "string"
    ]
  }
}
```

Config for Document OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedOcrOptions|[string]|false|none|A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.|
|enableImageQualityScores|boolean|false|none|Enables intelligent document quality scores after OCR. Can help with diagnosing why OCR responses are of poor quality for a given input. Adds additional latency comparable to regular OCR to the process call.|
|enableNativePdfParsing|boolean|false|none|Enables special handling for PDFs with existing text information. Results in better text extraction quality in such PDF inputs.|
|enableSymbol|boolean|false|none|Includes symbol level OCR information if set to true.|
|hints|[GoogleCloudDocumentaiV1beta3OcrConfigHints](#schemagoogleclouddocumentaiv1beta3ocrconfighints)|false|none|Hints for the OCR model.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3OcrConfigHints">GoogleCloudDocumentaiV1beta3OcrConfigHints</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3ocrconfighints"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3OcrConfigHints"></a>
<a id="tocSgoogleclouddocumentaiv1beta3ocrconfighints"></a>
<a id="tocsgoogleclouddocumentaiv1beta3ocrconfighints"></a>

```json
{
  "languageHints": [
    "string"
  ]
}
```

Hints for OCR Engine

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageHints|[string]|false|none|List of BCP-47 language codes to use for OCR. In most cases, not specifying it yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting hints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong).|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessOptions">GoogleCloudDocumentaiV1beta3ProcessOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processoptions"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessOptions"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processoptions"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processoptions"></a>

```json
{
  "ocrConfig": {
    "advancedOcrOptions": [
      "string"
    ],
    "enableImageQualityScores": true,
    "enableNativePdfParsing": true,
    "enableSymbol": true,
    "hints": {
      "languageHints": [
        "string"
      ]
    }
  }
}
```

Options for Process API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocrConfig|[GoogleCloudDocumentaiV1beta3OcrConfig](#schemagoogleclouddocumentaiv1beta3ocrconfig)|false|none|Only applicable to "Document OCR Processor". Returns error if set on other processor types.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessRequest">GoogleCloudDocumentaiV1beta3ProcessRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processrequest"></a>

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "fieldMask": "string",
  "inlineDocument": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "processOptions": {
    "ocrConfig": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableImageQualityScores": true,
      "enableNativePdfParsing": true,
      "enableSymbol": true,
      "hints": {
        "languageHints": [
          "string"
        ]
      }
    }
  },
  "rawDocument": {
    "content": "string",
    "mimeType": "string"
  },
  "skipHumanReview": true
}
```

Request message for the process document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|none|The document payload, the [content] and [mime_type] fields must be set.|
|fieldMask|string(google-fieldmask)|false|none|Specifies which fields to include in ProcessResponse's document. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.|
|inlineDocument|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|none|An inline document proto.|
|processOptions|[GoogleCloudDocumentaiV1beta3ProcessOptions](#schemagoogleclouddocumentaiv1beta3processoptions)|false|none|Inference-time options for the process API|
|rawDocument|[GoogleCloudDocumentaiV1beta3RawDocument](#schemagoogleclouddocumentaiv1beta3rawdocument)|false|none|A raw document content (bytes).|
|skipHumanReview|boolean|false|none|Whether Human Review feature should be skipped for this request. Default to false.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessResponse">GoogleCloudDocumentaiV1beta3ProcessResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processresponse"></a>

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "humanReviewOperation": "string",
  "humanReviewStatus": {
    "humanReviewOperation": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string"
  }
}
```

Response message for the process document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|none|The document payload, will populate fields based on the processor's behavior.|
|humanReviewOperation|string|false|none|The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.|
|humanReviewStatus|[GoogleCloudDocumentaiV1beta3HumanReviewStatus](#schemagoogleclouddocumentaiv1beta3humanreviewstatus)|false|none|The status of human review on the processed document.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3Processor">GoogleCloudDocumentaiV1beta3Processor</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processor"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3Processor"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processor"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processor"></a>

```json
{
  "createTime": "string",
  "defaultProcessorVersion": "string",
  "displayName": "string",
  "kmsKeyName": "string",
  "name": "string",
  "processEndpoint": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "string"
}
```

The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the processor was created.|
|defaultProcessorVersion|string|false|none|The default processor version.|
|displayName|string|false|none|The display name of the processor.|
|kmsKeyName|string|false|none|The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.|
|name|string|false|read-only|Output only. Immutable. The resource name of the processor. Format: `projects/{project}/locations/{location}/processors/{processor}`|
|processEndpoint|string|false|read-only|Output only. Immutable. The http endpoint that can be called to invoke processing.|
|state|string|false|read-only|Output only. The state of the processor.|
|type|string|false|none|The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc. To get a list of processors types, see FetchProcessorTypes.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ENABLED|
|state|DISABLED|
|state|ENABLING|
|state|DISABLING|
|state|CREATING|
|state|FAILED|
|state|DELETING|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessorType">GoogleCloudDocumentaiV1beta3ProcessorType</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processortype"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessorType"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processortype"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processortype"></a>

```json
{
  "allowCreation": true,
  "availableLocations": [
    {
      "locationId": "string"
    }
  ],
  "category": "string",
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "name": "string",
  "sampleDocumentUris": [
    "string"
  ],
  "type": "string"
}
```

A processor type is responsible for performing a certain document understanding task on a certain type of document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCreation|boolean|false|none|Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access.|
|availableLocations|[[GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo](#schemagoogleclouddocumentaiv1beta3processortypelocationinfo)]|false|none|The locations in which this processor is available.|
|category|string|false|none|The processor category, used by UI to group processor types.|
|launchStage|string|false|none|Launch stage of the processor type|
|name|string|false|none|The resource name of the processor type. Format: `projects/{project}/processorTypes/{processor_type}`|
|sampleDocumentUris|[string]|false|none|A set of Cloud Storage URIs of sample documents for this processor.|
|type|string|false|none|The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo">GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processortypelocationinfo"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processortypelocationinfo"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processortypelocationinfo"></a>

```json
{
  "locationId": "string"
}
```

The location information about where the processor is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationId|string|false|none|The location id, currently must be one of [us, eu].|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessorVersion">GoogleCloudDocumentaiV1beta3ProcessorVersion</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processorversion"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessorVersion"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processorversion"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processorversion"></a>

```json
{
  "createTime": "string",
  "deprecationInfo": {
    "deprecationTime": "string",
    "replacementProcessorVersion": "string"
  },
  "displayName": "string",
  "documentSchema": {
    "description": "string",
    "displayName": "string",
    "entityTypes": [
      {
        "baseTypes": [
          "string"
        ],
        "displayName": "string",
        "enumValues": {
          "values": [
            "string"
          ]
        },
        "name": "string",
        "properties": [
          {
            "name": "string",
            "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
            "valueType": "string"
          }
        ]
      }
    ],
    "metadata": {
      "documentAllowMultipleLabels": true,
      "documentSplitter": true,
      "prefixedNamingOnProperties": true,
      "skipNamingValidation": true
    }
  },
  "googleManaged": true,
  "kmsKeyName": "string",
  "kmsKeyVersionName": "string",
  "latestEvaluation": {
    "aggregateMetrics": {
      "f1Score": 0,
      "falseNegativesCount": 0,
      "falsePositivesCount": 0,
      "groundTruthDocumentCount": 0,
      "groundTruthOccurrencesCount": 0,
      "precision": 0,
      "predictedDocumentCount": 0,
      "predictedOccurrencesCount": 0,
      "recall": 0,
      "totalDocumentsCount": 0,
      "truePositivesCount": 0
    },
    "aggregateMetricsExact": {
      "f1Score": 0,
      "falseNegativesCount": 0,
      "falsePositivesCount": 0,
      "groundTruthDocumentCount": 0,
      "groundTruthOccurrencesCount": 0,
      "precision": 0,
      "predictedDocumentCount": 0,
      "predictedOccurrencesCount": 0,
      "recall": 0,
      "totalDocumentsCount": 0,
      "truePositivesCount": 0
    },
    "evaluation": "string",
    "operation": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the processor version was created.|
|deprecationInfo|[GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo](#schemagoogleclouddocumentaiv1beta3processorversiondeprecationinfo)|false|none|If set, information about the eventual deprecation of this version.|
|displayName|string|false|none|The display name of the processor version.|
|documentSchema|[GoogleCloudDocumentaiV1beta3DocumentSchema](#schemagoogleclouddocumentaiv1beta3documentschema)|false|none|The schema of the processor version. Describes the output.|
|googleManaged|boolean|false|none|Denotes that this ProcessorVersion is managed by google.|
|kmsKeyName|string|false|none|The KMS key name used for encryption.|
|kmsKeyVersionName|string|false|none|The KMS key version with which data is encrypted.|
|latestEvaluation|[GoogleCloudDocumentaiV1beta3EvaluationReference](#schemagoogleclouddocumentaiv1beta3evaluationreference)|false|none|The most recently invoked evaluation for the processor version.|
|name|string|false|none|The resource name of the processor version. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}`|
|state|string|false|none|The state of the processor version.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DEPLOYED|
|state|DEPLOYING|
|state|UNDEPLOYED|
|state|UNDEPLOYING|
|state|CREATING|
|state|DELETING|
|state|FAILED|
|state|IMPORTING|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo">GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3processorversiondeprecationinfo"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo"></a>
<a id="tocSgoogleclouddocumentaiv1beta3processorversiondeprecationinfo"></a>
<a id="tocsgoogleclouddocumentaiv1beta3processorversiondeprecationinfo"></a>

```json
{
  "deprecationTime": "string",
  "replacementProcessorVersion": "string"
}
```

Information about the upcoming deprecation of this processor version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecationTime|string(google-datetime)|false|none|The time at which this processor version will be deprecated.|
|replacementProcessorVersion|string|false|none|If set, the processor version that will be used as a replacement.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3RawDocument">GoogleCloudDocumentaiV1beta3RawDocument</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3rawdocument"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3RawDocument"></a>
<a id="tocSgoogleclouddocumentaiv1beta3rawdocument"></a>
<a id="tocsgoogleclouddocumentaiv1beta3rawdocument"></a>

```json
{
  "content": "string",
  "mimeType": "string"
}
```

Payload message of raw document content (bytes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Inline document content.|
|mimeType|string|false|none|An IANA MIME type (RFC6838) indicating the nature and format of the content.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata">GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3reviewdocumentoperationmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3reviewdocumentoperationmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3reviewdocumentoperationmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "createTime": "string",
  "questionId": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

The long running operation metadata for review document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|createTime|string(google-datetime)|false|none|The creation time of the operation.|
|questionId|string|false|none|The Crowd Compute question ID.|
|state|string|false|none|Used only when Operation.done is false.|
|stateMessage|string|false|none|A message providing more details about the current state of processing. For example, the error message if the operation is failed.|
|updateTime|string(google-datetime)|false|none|The last update time of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELLING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ReviewDocumentRequest">GoogleCloudDocumentaiV1beta3ReviewDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3reviewdocumentrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ReviewDocumentRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3reviewdocumentrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3reviewdocumentrequest"></a>

```json
{
  "document": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "documentSchema": {
    "description": "string",
    "displayName": "string",
    "entityTypes": [
      {
        "baseTypes": [
          "string"
        ],
        "displayName": "string",
        "enumValues": {
          "values": [
            "string"
          ]
        },
        "name": "string",
        "properties": [
          {
            "name": "string",
            "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
            "valueType": "string"
          }
        ]
      }
    ],
    "metadata": {
      "documentAllowMultipleLabels": true,
      "documentSplitter": true,
      "prefixedNamingOnProperties": true,
      "skipNamingValidation": true
    }
  },
  "enableSchemaValidation": true,
  "inlineDocument": {
    "content": "string",
    "entities": [
      {
        "confidence": 0,
        "id": "string",
        "mentionId": "string",
        "mentionText": "string",
        "normalizedValue": {
          "addressValue": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "booleanValue": true,
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "datetimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "floatValue": 0,
          "integerValue": 0,
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "text": "string"
        },
        "pageAnchor": {
          "pageRefs": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "layoutId": "string",
              "layoutType": "LAYOUT_TYPE_UNSPECIFIED",
              "page": "string"
            }
          ]
        },
        "properties": [
          {}
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "redacted": true,
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "type": "string"
      }
    ],
    "entityRelations": [
      {
        "objectId": "string",
        "relation": "string",
        "subjectId": "string"
      }
    ],
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "mimeType": "string",
    "pages": [
      {
        "blocks": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "detectedBarcodes": [
          {
            "barcode": {
              "format": "string",
              "rawValue": "string",
              "valueFormat": "string"
            },
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ],
        "dimension": {
          "height": 0,
          "unit": "string",
          "width": 0
        },
        "formFields": [
          {
            "correctedKeyText": "string",
            "correctedValueText": "string",
            "fieldName": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "fieldValue": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "nameDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            },
            "valueDetectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "valueType": "string"
          }
        ],
        "image": {
          "content": "string",
          "height": 0,
          "mimeType": "string",
          "width": 0
        },
        "imageQualityScores": {
          "detectedDefects": [
            {
              "confidence": 0,
              "type": "string"
            }
          ],
          "qualityScore": 0
        },
        "layout": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "orientation": "ORIENTATION_UNSPECIFIED",
          "textAnchor": {
            "content": "string",
            "textSegments": [
              {
                "endIndex": "string",
                "startIndex": "string"
              }
            ]
          }
        },
        "lines": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "pageNumber": 0,
        "paragraphs": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "provenance": {
          "id": 0,
          "parents": [
            {
              "id": 0,
              "index": 0,
              "revision": 0
            }
          ],
          "revision": 0,
          "type": "OPERATION_TYPE_UNSPECIFIED"
        },
        "symbols": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            }
          }
        ],
        "tables": [
          {
            "bodyRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "headerRows": [
              {
                "cells": [
                  {
                    "colSpan": 0,
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ],
                    "layout": {
                      "boundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "orientation": "ORIENTATION_UNSPECIFIED",
                      "textAnchor": {
                        "content": "string",
                        "textSegments": [
                          {
                            "endIndex": "string",
                            "startIndex": "string"
                          }
                        ]
                      }
                    },
                    "rowSpan": 0
                  }
                ]
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "tokens": [
          {
            "detectedBreak": {
              "type": "TYPE_UNSPECIFIED"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "provenance": {
              "id": 0,
              "parents": [
                {
                  "id": 0,
                  "index": 0,
                  "revision": 0
                }
              ],
              "revision": 0,
              "type": "OPERATION_TYPE_UNSPECIFIED"
            }
          }
        ],
        "transforms": [
          {
            "cols": 0,
            "data": "string",
            "rows": 0,
            "type": 0
          }
        ],
        "visualElements": [
          {
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ],
            "layout": {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "orientation": "ORIENTATION_UNSPECIFIED",
              "textAnchor": {
                "content": "string",
                "textSegments": [
                  {
                    "endIndex": "string",
                    "startIndex": "string"
                  }
                ]
              }
            },
            "type": "string"
          }
        ]
      }
    ],
    "revisions": [
      {
        "agent": "string",
        "createTime": "string",
        "humanReview": {
          "state": "string",
          "stateMessage": "string"
        },
        "id": "string",
        "parent": [
          0
        ],
        "parentIds": [
          "string"
        ],
        "processor": "string"
      }
    ],
    "shardInfo": {
      "shardCount": "string",
      "shardIndex": "string",
      "textOffset": "string"
    },
    "text": "string",
    "textChanges": [
      {
        "changedText": "string",
        "provenance": [
          {
            "id": 0,
            "parents": [
              {
                "id": 0,
                "index": 0,
                "revision": 0
              }
            ],
            "revision": 0,
            "type": "OPERATION_TYPE_UNSPECIFIED"
          }
        ],
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        }
      }
    ],
    "textStyles": [
      {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "fontFamily": "string",
        "fontSize": {
          "size": 0,
          "unit": "string"
        },
        "fontWeight": "string",
        "textAnchor": {
          "content": "string",
          "textSegments": [
            {
              "endIndex": "string",
              "startIndex": "string"
            }
          ]
        },
        "textDecoration": "string",
        "textStyle": "string"
      }
    ],
    "uri": "string"
  },
  "priority": "DEFAULT"
}
```

Request message for review document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|none|The document that needs human review.|
|documentSchema|[GoogleCloudDocumentaiV1beta3DocumentSchema](#schemagoogleclouddocumentaiv1beta3documentschema)|false|none|The document schema of the human review task.|
|enableSchemaValidation|boolean|false|none|Whether the validation should be performed on the ad-hoc review request.|
|inlineDocument|[GoogleCloudDocumentaiV1beta3Document](#schemagoogleclouddocumentaiv1beta3document)|false|none|An inline document proto.|
|priority|string|false|none|The priority of the human review task.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|DEFAULT|
|priority|URGENT|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3ReviewDocumentResponse">GoogleCloudDocumentaiV1beta3ReviewDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3reviewdocumentresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3ReviewDocumentResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3reviewdocumentresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3reviewdocumentresponse"></a>

```json
{
  "gcsDestination": "string",
  "rejectionReason": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Response message for review document method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|string|false|none|The Cloud Storage uri for the human reviewed document if the review is succeeded.|
|rejectionReason|string|false|none|The reason why the review is rejected by reviewer.|
|state|string|false|none|The state of the review operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|REJECTED|
|state|SUCCEEDED|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3setdefaultprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3setdefaultprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3setdefaultprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for set default processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest">GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3setdefaultprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3setdefaultprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3setdefaultprocessorversionrequest"></a>

```json
{
  "defaultProcessorVersion": "string"
}
```

Request message for the set default processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultProcessorVersion|string|false|none|Required. The resource name of child ProcessorVersion to use as default. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{version}`|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse">GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3setdefaultprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3setdefaultprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3setdefaultprocessorversionresponse"></a>

```json
{}
```

Response message for set default processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3trainprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3trainprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3trainprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  },
  "testDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  },
  "trainingDatasetValidation": {
    "datasetErrorCount": 0,
    "datasetErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ],
    "documentErrorCount": 0,
    "documentErrors": [
      {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    ]
  }
}
```

The metadata that represents a processor version being created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|
|testDatasetValidation|[GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiv1beta3trainprocessorversionmetadatadatasetvalidation)|false|none|The test dataset validation information.|
|trainingDatasetValidation|[GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation](#schemagoogleclouddocumentaiv1beta3trainprocessorversionmetadatadatasetvalidation)|false|none|The training dataset validation information.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation">GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation"></a>
<a id="tocSgoogleclouddocumentaiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>
<a id="tocsgoogleclouddocumentaiv1beta3trainprocessorversionmetadatadatasetvalidation"></a>

```json
{
  "datasetErrorCount": 0,
  "datasetErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "documentErrorCount": 0,
  "documentErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ]
}
```

The dataset validation information. This includes any and all errors with documents and the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetErrorCount|integer(int32)|false|none|The total number of dataset errors.|
|datasetErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.|
|documentErrorCount|integer(int32)|false|none|The total number of document errors.|
|documentErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest">GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3trainprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3trainprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3trainprocessorversionrequest"></a>

```json
{
  "baseProcessorVersion": "string",
  "documentSchema": {
    "description": "string",
    "displayName": "string",
    "entityTypes": [
      {
        "baseTypes": [
          "string"
        ],
        "displayName": "string",
        "enumValues": {
          "values": [
            "string"
          ]
        },
        "name": "string",
        "properties": [
          {
            "name": "string",
            "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
            "valueType": "string"
          }
        ]
      }
    ],
    "metadata": {
      "documentAllowMultipleLabels": true,
      "documentSplitter": true,
      "prefixedNamingOnProperties": true,
      "skipNamingValidation": true
    }
  },
  "inputData": {
    "testDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    },
    "trainingDocuments": {
      "gcsDocuments": {
        "documents": [
          {
            "gcsUri": "string",
            "mimeType": "string"
          }
        ]
      },
      "gcsPrefix": {
        "gcsUriPrefix": "string"
      }
    }
  },
  "processorVersion": {
    "createTime": "string",
    "deprecationInfo": {
      "deprecationTime": "string",
      "replacementProcessorVersion": "string"
    },
    "displayName": "string",
    "documentSchema": {
      "description": "string",
      "displayName": "string",
      "entityTypes": [
        {
          "baseTypes": [
            "string"
          ],
          "displayName": "string",
          "enumValues": {
            "values": [
              "string"
            ]
          },
          "name": "string",
          "properties": [
            {
              "name": "string",
              "occurrenceType": "OCCURRENCE_TYPE_UNSPECIFIED",
              "valueType": "string"
            }
          ]
        }
      ],
      "metadata": {
        "documentAllowMultipleLabels": true,
        "documentSplitter": true,
        "prefixedNamingOnProperties": true,
        "skipNamingValidation": true
      }
    },
    "googleManaged": true,
    "kmsKeyName": "string",
    "kmsKeyVersionName": "string",
    "latestEvaluation": {
      "aggregateMetrics": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      },
      "aggregateMetricsExact": {
        "f1Score": 0,
        "falseNegativesCount": 0,
        "falsePositivesCount": 0,
        "groundTruthDocumentCount": 0,
        "groundTruthOccurrencesCount": 0,
        "precision": 0,
        "predictedDocumentCount": 0,
        "predictedOccurrencesCount": 0,
        "recall": 0,
        "totalDocumentsCount": 0,
        "truePositivesCount": 0
      },
      "evaluation": "string",
      "operation": "string"
    },
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Request message for the create processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseProcessorVersion|string|false|none|Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.|
|documentSchema|[GoogleCloudDocumentaiV1beta3DocumentSchema](#schemagoogleclouddocumentaiv1beta3documentschema)|false|none|Optional. The schema the processor version will be trained with.|
|inputData|[GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData](#schemagoogleclouddocumentaiv1beta3trainprocessorversionrequestinputdata)|false|none|Optional. The input data used to train the `ProcessorVersion`.|
|processorVersion|[GoogleCloudDocumentaiV1beta3ProcessorVersion](#schemagoogleclouddocumentaiv1beta3processorversion)|false|none|Required. The processor version to be created.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData">GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3trainprocessorversionrequestinputdata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData"></a>
<a id="tocSgoogleclouddocumentaiv1beta3trainprocessorversionrequestinputdata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3trainprocessorversionrequestinputdata"></a>

```json
{
  "testDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  },
  "trainingDocuments": {
    "gcsDocuments": {
      "documents": [
        {
          "gcsUri": "string",
          "mimeType": "string"
        }
      ]
    },
    "gcsPrefix": {
      "gcsUriPrefix": "string"
    }
  }
}
```

The input data used to train a new `ProcessorVersion`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testDocuments|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|none|The documents used for testing the trained version.|
|trainingDocuments|[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig](#schemagoogleclouddocumentaiv1beta3batchdocumentsinputconfig)|false|none|The documents used for training the new version.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse">GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3trainprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3trainprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3trainprocessorversionresponse"></a>

```json
{
  "processorVersion": "string"
}
```

The response for the TrainProcessorVersion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processorVersion|string|false|none|The resource name of the processor version produced by training.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata">GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3undeployprocessorversionmetadata"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata"></a>
<a id="tocSgoogleclouddocumentaiv1beta3undeployprocessorversionmetadata"></a>
<a id="tocsgoogleclouddocumentaiv1beta3undeployprocessorversionmetadata"></a>

```json
{
  "commonMetadata": {
    "createTime": "string",
    "resource": "string",
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "updateTime": "string"
  }
}
```

The long running operation metadata for the undeploy processor version method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonMetadata|[GoogleCloudDocumentaiV1beta3CommonOperationMetadata](#schemagoogleclouddocumentaiv1beta3commonoperationmetadata)|false|none|The basic metadata of the long running operation.|

<h2 id="tocS_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest">GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3undeployprocessorversionrequest"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest"></a>
<a id="tocSgoogleclouddocumentaiv1beta3undeployprocessorversionrequest"></a>
<a id="tocsgoogleclouddocumentaiv1beta3undeployprocessorversionrequest"></a>

```json
{}
```

Request message for the undeploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse">GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3undeployprocessorversionresponse"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse"></a>
<a id="tocSgoogleclouddocumentaiv1beta3undeployprocessorversionresponse"></a>
<a id="tocsgoogleclouddocumentaiv1beta3undeployprocessorversionresponse"></a>

```json
{}
```

Response message for the undeploy processor version method.

<h2 id="tocS_GoogleCloudDocumentaiV1beta3Vertex">GoogleCloudDocumentaiV1beta3Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddocumentaiv1beta3vertex"></a>
<a id="schema_GoogleCloudDocumentaiV1beta3Vertex"></a>
<a id="tocSgoogleclouddocumentaiv1beta3vertex"></a>
<a id="tocsgoogleclouddocumentaiv1beta3vertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|false|none|X coordinate.|
|y|integer(int32)|false|none|Y coordinate (starts from the top of the image).|

<h2 id="tocS_GoogleCloudLocationListLocationsResponse">GoogleCloudLocationListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlistlocationsresponse"></a>
<a id="schema_GoogleCloudLocationListLocationsResponse"></a>
<a id="tocSgooglecloudlocationlistlocationsresponse"></a>
<a id="tocsgooglecloudlocationlistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[GoogleCloudLocationLocation](#schemagooglecloudlocationlocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_GoogleCloudLocationLocation">GoogleCloudLocationLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlocation"></a>
<a id="schema_GoogleCloudLocationLocation"></a>
<a id="tocSgooglecloudlocationlocation"></a>
<a id="tocsgooglecloudlocationlocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_GoogleTypeColor">GoogleTypeColor</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypecolor"></a>
<a id="schema_GoogleTypeColor"></a>
<a id="tocSgoogletypecolor"></a>
<a id="tocsgoogletypecolor"></a>

```json
{
  "alpha": 0,
  "blue": 0,
  "green": 0,
  "red": 0
}
```

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_GoogleTypeDateTime">GoogleTypeDateTime</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedatetime"></a>
<a id="schema_GoogleTypeDateTime"></a>
<a id="tocSgoogletypedatetime"></a>
<a id="tocsgoogletypedatetime"></a>

```json
{
  "day": 0,
  "hours": 0,
  "minutes": 0,
  "month": 0,
  "nanos": 0,
  "seconds": 0,
  "timeZone": {
    "id": "string",
    "version": "string"
  },
  "utcOffset": "string",
  "year": 0
}
```

Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.|
|hours|integer(int32)|false|none|Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.|
|month|integer(int32)|false|none|Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.|
|nanos|integer(int32)|false|none|Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.|
|seconds|integer(int32)|false|none|Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.|
|timeZone|[GoogleTypeTimeZone](#schemagoogletypetimezone)|false|none|Time zone.|
|utcOffset|string(google-duration)|false|none|UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.|
|year|integer(int32)|false|none|Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.|

<h2 id="tocS_GoogleTypeMoney">GoogleTypeMoney</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypemoney"></a>
<a id="schema_GoogleTypeMoney"></a>
<a id="tocSgoogletypemoney"></a>
<a id="tocsgoogletypemoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_GoogleTypePostalAddress">GoogleTypePostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypepostaladdress"></a>
<a id="schema_GoogleTypePostalAddress"></a>
<a id="tocSgoogletypepostaladdress"></a>
<a id="tocsgoogletypepostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_GoogleTypeTimeZone">GoogleTypeTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypetimezone"></a>
<a id="schema_GoogleTypeTimeZone"></a>
<a id="tocSgoogletypetimezone"></a>
<a id="tocsgoogletypetimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|
