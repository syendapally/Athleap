package com.athleap.springboot.model;
import java.lang.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "athletes")
public class Athlete {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "firstname")
	private String firstname;
	@Column(name = "lastname")
	private String lastname;
	@Column(name = "emailId")
	private String emailId;
	@Column(name = "sport")
	private String sport;
	@Column(name = "totalPercentOfCareerEarnings")
	private double totalPercentOfCareerEarnings;
	@Column(name = "dollarsPerPercent")
	private double dollarsPerPercent;
	public Athlete() {
		
	}
	public Athlete(String firstname, String lastname, String emailId, String sport) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
		this.sport = sport;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getSport() {
		return sport;
	}
	public void setSport(String sport) {
		this.sport = sport;
	}
	public double getTotalPercentOfCareerEarnings() {
		return totalPercentOfCareerEarnings;
	}
	public void setTotalPercentOfCareerEarnings(double totalPercentOfCareerEarnings) {
		this.totalPercentOfCareerEarnings = totalPercentOfCareerEarnings;
	}
	public double getDollarsPerPercent() {
		return dollarsPerPercent;
	}
	public void setDollarsPerPercent(double dollarsPerPercent) {
		this.dollarsPerPercent = dollarsPerPercent;
	}
}
