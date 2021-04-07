import React from "react";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CInputRadio,
  CLabel,
  CRow,
  CCardBody,
  CSelect,
  CTextarea,
} from "@coreui/react";

const EditProduct = () => {
  return (
    <CContainer fluid>
      <h1>Update Product</h1>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            {/* <CCardHeader>
              Basic Form
              <small> Elements</small>
            </CCardHeader> */}
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  {/* <CCol md="3">
                    <CLabel>Static</CLabel>
                  </CCol> */}
                  {/* <CCol xs="12" md="9">
                    <p className="form-control-static">Username</p>
                  </CCol> */}
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Product Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Enter Product Title"
                    />
                    {/* <CFormText>This is a help text</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="price-input">Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="number"
                      id="price-input"
                      name="price-input"
                      placeholder="Enter Product Price"
                      autoComplete="price"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="quantity-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="number"
                      id="quantity-input"
                      name="quantity-input"
                      placeholder="Enter Product Quantity"
                      autoComplete="quantity-input"
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="description-input"
                      id="description-input"
                      rows="9"
                      placeholder="Enter Product Description..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please Select a Category</option>
                      <option value="1">Electronic</option>
                      <option value="2">Accesories</option>
                      <option value="3">Software</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Stock Product</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio1"
                        name="radios"
                        value="option1"
                      />
                      <CLabel variant="checkbox" htmlFor="radio1">
                        In Stock
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio2"
                        name="radios"
                        value="option2"
                      />
                      <CLabel variant="checkbox" htmlFor="radio2">
                        Out Of Stock
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">
                    Single Product Image
                  </CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Multiple Product Image</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile
                      id="file-multiple-input"
                      name="file-multiple-input"
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Update Product
              </CButton>
              {/* <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton> */}
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default EditProduct;
