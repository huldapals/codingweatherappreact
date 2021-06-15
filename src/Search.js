import React from "react";

export default function Search(){
return(
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autocomplete="on"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-light shadow-sm"
            />
          </div>
        </div>
        )
        };