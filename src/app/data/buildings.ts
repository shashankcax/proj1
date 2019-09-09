import { BuildingModel, Section, Floor, Room, Bed } from './model/building';

export const Buildings: BuildingModel[] = [
  {id: 1, name: 'Building 1', section:
    [{id: 1, name: 'Section 1 [B1S1]', floor:
      [{id: 1, name: 'Floor 1 [B1S1F1]', room:
        [{id: 1, name: 'Room 1 [B1S1F1R1]', bed:
          [{id: 1, content: 'Bed 1 [B1S1F1R1BE1]'},
           {id: 2, content: 'Bed 2 [B1S1F1R1BE2]'},
           {id: 3, content: 'Bed 3 [B1S1F1R1BE3]'}]
          },
          {id: 2, name: 'Room B1S1F1R2', bed:
          [{id: 1, content: 'B1S1F1R2BE1'},
          {id: 2, content: 'B1S1F1R2BE2'}]
          }]
        },
        {id: 2, name: 'Floor B1S1F2', room:
        [{id: 1, name: 'Room B1S1F2R1', bed:
          [{id: 1, content: 'B1S1F2R1BE1'},
          {id: 2, content: 'B1S1F2R1BE2'},
          {id: 3, content: 'B1S1F2R1BE3'}]
        },
        {id: 2, name: 'Room B1S1F2R2', bed:
        [{id: 1, content: 'B1S1F2R2BE1'},
        {id: 2, content: 'B1S1F2R2BE2'}]
        }]
      }]
    },
    {id: 2, name: 'Section B1S2', floor:
      [{id: 1, name: 'Floor B1S2F1', room:
        [{id: 1, name: 'Room B1S2F1R1', bed:
          [{id: 1, content: 'B1S2F1R1BE1'},
           {id: 2, content: 'B1S2F1R1BE2'},
           {id: 4, content: 'B1S2F1R1BE3'}]
          },
          {id: 2, name: 'Room B1S2F1R2', bed:
          [{id: 1, content: 'B1S2F1R2BE1'},
          {id: 2, content: 'B1S2F1R2BE2'}]
          }]
        },
        {id: 1, name: 'Floor B1S2F2', room:
        [{id: 1, name: 'Room B1S2F2R1', bed:
          [{id: 1, content: 'B1S2F2R1BE1'},
          {id: 2, content: 'B1S2F2R1BE2'},
          {id: 4, content: 'B1S2F2R1BE3'}]
        },
        {id: 2, name: 'Room B1S2F2R2', bed:
        [{id: 1, content: 'B1S2F2R2BE1'},
        {id: 2, content: 'B1S2F2R2BE2'}]
        }]
      }]
    },
    {id: 3, name: 'Section B1S2', floor:
      [{id: 1, name: 'Floor B1S3F1', room:
        [{id: 1, name: 'Room B1S3F1R1', bed:
          [{id: 1, content: 'B1S3F1R1BE1'},
           {id: 2, content: 'B1S3F1R1BE2'},
           {id: 4, content: 'B1S3F1R1BE3'}]
          },
          {id: 2, name: 'Room B1S3F1R2', bed:
          [{id: 1, content: 'B1S3F1R2BE1'},
          {id: 2, content: 'B1S3F1R2BE2'}]
          }]
        },
        {id: 1, name: 'Floor B1S3F2', room:
        [{id: 1, name: 'Room B1S3F2R1', bed:
          [{id: 1, content: 'B1S3F2R1BE1'},
          {id: 2, content: 'B1S3F2R1BE2'},
          {id: 4, content: 'B1S3F2R1BE3'}]
        },
        {id: 2, name: 'Room B1S3F2R2', bed:
        [{id: 1, content: 'B1S3F2R2BE1'},
        {id: 2, content: 'B1S3F2R2BE2'}]
        }]
      }]
    }]
  },
  {id: 2, name: 'Building 2', section:
    [{id: 1, name: 'Section B2S1', floor:
      [{id: 1, name: 'Floor B2S1F1', room:
        [{id: 1, name: 'Room B2S1F1R1', bed:
          [{id: 1, content: 'B2S1F1R1BE1'},
           {id: 2, content: 'B2S1F1R1BE2'},
           {id: 4, content: 'B2S1F1R1BE3'}]
          },
          {id: 2, name: 'Room B2S1F1R2', bed:
          [{id: 1, content: 'B2S1F1R2BE1'},
          {id: 2, content: 'B2S1F1R2BE2'}]
          }]
        },
        {id: 1, name: 'Floor B2S1F2', room:
        [{id: 1, name: 'Room B2S1F2R1', bed:
          [{id: 1, content: 'B2S1F2R1BE1'},
          {id: 2, content: 'B2S1F2R1BE2'},
          {id: 4, content: 'B2S1F2R1BE3'}]
        },
        {id: 2, name: 'Room B2S1F2R2', bed:
        [{id: 1, content: 'B2S1F2R2BE1'},
        {id: 2, content: 'B2S1F2R2BE2'}]
        }]
      }]
    },
    {id: 1, name: 'Section B2S2', floor:
    [{id: 1, name: 'Floor B2S2F1', room:
      [{id: 1, name: 'Room B2S2F1R1', bed:
        [{id: 1, content: 'B2S2F1R1BE1'},
         {id: 2, content: 'B2S2F1R1BE2'},
         {id: 4, content: 'B2S2F1R1BE3'}]
        },
        {id: 2, name: 'Room B2S2F1R2', bed:
        [{id: 1, content: 'B2S2F1R2BE1'},
        {id: 2, content: 'B2S2F1R2BE2'}]
        }]
      },
      {id: 1, name: 'Floor B2S2F2', room:
      [{id: 1, name: 'Room B2S2F2R1', bed:
        [{id: 1, content: 'B2S2F2R1BE1'},
        {id: 2, content: 'B2S2F2R1BE2'},
        {id: 4, content: 'B2S2F2R1BE3'}]
      },
      {id: 2, name: 'Room B2S2F2R2', bed:
      [{id: 1, content: 'B2S2F2R2BE1'},
      {id: 2, content: 'B2S2F2R2BE2'}]
      }]
    }]
  }]
  },
  {id: 3, name: 'Building 3', section:
    [{id: 1, name: 'Section B3S1', floor:
      [{id: 1, name: 'Floor B3S1F1', room:
        [{id: 1, name: 'Room B3S1F1R1', bed:
          [{id: 1, content: 'B3S1F1R1BE1'},
           {id: 2, content: 'B3S1F1R1BE2'},
           {id: 4, content: 'B3S1F1R1BE3'}]
          },
          {id: 2, name: 'Room B3S1F1R2', bed:
          [{id: 1, content: 'B3S1F1R2BE1'},
          {id: 2, content: 'B3S1F1R2BE2'}]
          }]
        },
        {id: 1, name: 'Floor B3S1F2', room:
        [{id: 1, name: 'Room B3S1F2R1', bed:
          [{id: 1, content: 'B3S1F2R1BE1'},
          {id: 2, content: 'B3S1F2R1BE2'},
          {id: 4, content: 'B3S1F2R1BE3'}]
        },
        {id: 2, name: 'Room B3S1F2R2', bed:
        [{id: 1, content: 'B3S1F2R2BE1'},
        {id: 2, content: 'B3S1F2R2BE2'}]
        }]
      }]
    }]
  }
];
