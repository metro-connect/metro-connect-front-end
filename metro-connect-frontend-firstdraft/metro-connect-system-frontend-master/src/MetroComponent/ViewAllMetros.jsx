import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewAllMetros = () => {
  let navigate = useNavigate();
  const [allMetros, setAllMetros] = useState([]);

  const retrieveAllMetros = async () => {
    const response = await axios.get("http://localhost:9003/api/metro/fetch/all");
    console.log(response.data);
    return response.data;
  };

   useEffect(() => {
     const getAllMetros = async () => {
       const allMetros = await retrieveAllMetros();
       if (allMetros) {
         setAllMetros(allMetros.metro);
       }
     };

     getAllMetros();
   }, []);

  const deleteMetro = (metroId) => {
    fetch("http://localhost:9003/api/metro/delete?metroId=" + metroId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Failed to delete the Metro");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    setTimeout(() => {
      window.location.reload(true);
    }, 2000); // Reload after 3 seconds 3000
  };

  return (
    <div>
      <div className="mt-2">
        <div
          className="card form-card ms-5 me-5 mb-5 custom-bg border-color "
          style={{
            height: "30rem",
          }}
        >
          <div className="card-header custom-bg-text text-center bg-color">
            <h2>All Metros</h2>
          </div>
          <div
            className="card-body"
            style={{
              overflowY: "auto",
            }}
          >
            <div className="table-responsive">
              <table className="table table-hover text-color text-center">
                <thead className="table-bordered border-color bg-color custom-bg-text">
                  <tr>
                    <th scope="col">Metro</th>
                    <th scope="col">Metro Number</th>
                    <th scope="col">Total Coach</th>
                    <th scope="col">Total Seat In Each Coach</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Source Location</th>
                    <th scope="col">Destination Location</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allMetros.map((metro) => {
                    return (
                      <tr>
                        <td>
                          <b>{metro.name}</b>
                        </td>
                        <td>
                          <b>{metro.number}</b>
                        </td>
                        <td>
                          <b>{metro.totalCoach}</b>
                        </td>
                        <td>
                          <b>{metro.totalSeatInEachCoach}</b>
                        </td>
                        <td>
                          <b>{metro.seatPrice}</b>
                        </td>
                        <td>
                          <b>{metro.fromLocation}</b>
                        </td>
                        <td>
                          <b>{metro.toLocation}</b>
                        </td>

                        <td>
                          <button
                            onClick={() => deleteMetro(metro.id)}
                            className="btn btn-sm bg-color custom-bg-text"
                          >
                            Remove
                          </button>
                          <ToastContainer />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllMetros;
