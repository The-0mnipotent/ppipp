import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="heading">PPiPP</h1>
        <h2 className="subheading">
          Prediction of Protein-protein interacting position pairs
        </h2>
      </div>
      <div className="content">
        <div className="navigation">
          <div className="navigation-list">
            <h3 className="list-heading">Menu</h3>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Introduction
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Sample Output
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Expected server Performance (for pair or single chain
                  prediction; benchmarked over all dimers)
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Expected server Performance (for single residue prediction;
                  benchmarked over multimers; contacts with any chain)
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Datasets (PDB IDs), used in training
                </Link>
              </li>
            </ul>
          </div>
          <div className="navigation-list">
            <h3 className="list-heading">Citation</h3>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Partner-Aware Prediction of Interacting Residues in
                  Protein-Protein Complexes from Sequence Data Shandar Ahmad *
                  and Kenji Mizuguchi
                </Link>
              </li>
            </ul>
          </div>
          <div className="navigation-list">
            <h3 className="list-heading">Contact</h3>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Shandar Ahmad
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Arpit Singh
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="input-section">
          <p>
            <span className="intro">
              This web server takes fasta sequences of two proteins and predicts
              pairs of interacting residues between them.
              <br /> The input is a pair of amino acid sequences in the fasta
              format.{" "}
            </span>
            <br />
            <span className="warning">
              Sequence size for each protein is limited to 300 residues. Longer
              sequences will be truncated to this length.
            </span>
          </p>
          <div className="input">
            <textarea placeholder="Enter text"></textarea>
            <textarea placeholder="Enter text"></textarea>
          </div>
          <button className="submit-button">Submit</button>
          <p>
            <div className="title">Test Sequence</div>
            <div className="description">
              Copy and paste full or part of the following sequences into the
              text boxes above and press the predict button to test this web
              server.
            </div>
            <div className="sample">
              DVSGTVCLSALPPEATDTLNLIASDGPFPYSQDGVV
              FQNRESVLPTQSYGYYHEYTVITPGARTRGTRRIIT GEATQEDYYTGDHYATFSLIDQTC
            </div>
            <div className="sample">
              KKAVINGEQIRSISDLHQTLKKELALPEYYGENLDA
              LWDCLTGWVEYPLVLEWRQFEQSKQLTENGAESVL VFREAKAEGCDITIILS
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
