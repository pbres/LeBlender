﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lecoati.BlenderGrid.Extension.Models
{
    [JsonObject]
    public class BlenderModel
    {
        [JsonProperty("value")]
        public IEnumerable<BlenderValue> Items { get; set; }
    }
}